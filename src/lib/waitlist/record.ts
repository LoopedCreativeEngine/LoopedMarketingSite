/**
 * The shape of a waitlist record, and the server-side validation that produces
 * one from an untrusted request body.
 *
 * Everything a visitor sends is treated as hostile until it has been through
 * `validateSubmission`: fields are typed, trimmed, length-capped and, in the
 * case of the email, normalised to the single form the dedupe index is built
 * on. Nothing sensitive is collected. There is no phone number, no job title,
 * no free-text notes field and no IP address on the record, because none of
 * them is needed to run an early-access list and each is another thing to hold
 * safely.
 */

/**
 * The consent wording in force when a record was written.
 *
 * Stored on every row so a later change to what the form promises can be told
 * apart from what a given person actually agreed to. Bump this whenever the
 * text under the submit button changes.
 */
export const CONSENT_VERSION = "2026-09-07.waitlist-v1";

/** The consent text this version corresponds to, kept beside the constant. */
export const CONSENT_TEXT = "Early access, product updates and Looped intelligence.";

export interface WaitlistRecord {
  readonly id: string;
  readonly created_at: string;
  readonly name: string;
  readonly work_email: string;
  readonly company: string;
  readonly portfolio_size_or_event_count: string;
  readonly landing_page: string;
  readonly source_page: string;
  readonly referrer: string;
  readonly utm_source: string;
  readonly utm_medium: string;
  readonly utm_campaign: string;
  readonly utm_content: string;
  readonly utm_term: string;
  readonly status: string;
  readonly consent_version: string;
}

export type ValidationResult =
  | { readonly ok: true; readonly record: WaitlistRecord }
  | { readonly ok: false; readonly field: string; readonly message: string };

/** Per-field caps. Generous for real values, small enough to bound a payload. */
const LIMITS = {
  name: 120,
  work_email: 254,
  company: 160,
  portfolio_size_or_event_count: 120,
  url: 512,
} as const;

function str(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

/**
 * Normalise an email to the one form the unique index sees.
 *
 * Lowercased and trimmed, and no further. Stripping plus-tags or dots is
 * tempting for dedupe, but "a+events@x.com" is a legitimately different
 * mailbox at many providers, and silently merging two real people is worse
 * than holding two rows for one person.
 */
export function normaliseEmail(raw: string): string {
  return raw.trim().toLowerCase().slice(0, LIMITS.work_email);
}

/**
 * A deliberately permissive address check.
 *
 * The only authority on whether an address works is whether mail reaches it.
 * This rejects what is obviously not an address so the visitor gets an
 * immediate, useful message, and lets everything else through.
 */
export function looksLikeEmail(value: string): boolean {
  if (value.length < 6 || value.length > LIMITS.work_email) return false;
  if (/\s/.test(value)) return false;
  const at = value.indexOf("@");
  if (at <= 0 || at !== value.lastIndexOf("@")) return false;
  const domain = value.slice(at + 1);
  if (!domain.includes(".") || domain.startsWith(".") || domain.endsWith(".")) return false;
  return !domain.includes("..");
}

function newId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `wl_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
}

/**
 * Turn an untrusted body into a record, or say which field is wrong and why.
 *
 * The honeypot is NOT handled here: a filled honeypot is a bot, not a
 * validation failure, and the route deals with it separately so the two never
 * get confused in the logs.
 */
export function validateSubmission(body: Record<string, unknown>): ValidationResult {
  const name = str(body.name, LIMITS.name);
  const rawEmail = str(body.email, LIMITS.work_email);
  const company = str(body.company, LIMITS.company);

  if (name === "") return { ok: false, field: "name", message: "Please tell us your name." };
  if (rawEmail === "") return { ok: false, field: "email", message: "Please give us a work email address." };

  const work_email = normaliseEmail(rawEmail);
  if (!looksLikeEmail(work_email)) {
    return { ok: false, field: "email", message: "That does not look like an email address. Please check it." };
  }
  if (company === "") return { ok: false, field: "company", message: "Please tell us which company you are with." };

  return {
    ok: true,
    record: {
      id: newId(),
      created_at: new Date().toISOString(),
      name,
      work_email,
      company,
      portfolio_size_or_event_count: str(body.event_count, LIMITS.portfolio_size_or_event_count),
      landing_page: str(body.landing_page, LIMITS.url),
      source_page: str(body.source_page, LIMITS.url),
      referrer: str(body.referrer, LIMITS.url),
      utm_source: str(body.utm_source, LIMITS.url),
      utm_medium: str(body.utm_medium, LIMITS.url),
      utm_campaign: str(body.utm_campaign, LIMITS.url),
      utm_content: str(body.utm_content, LIMITS.url),
      utm_term: str(body.utm_term, LIMITS.url),
      status: "new",
      consent_version: CONSENT_VERSION,
    },
  };
}
