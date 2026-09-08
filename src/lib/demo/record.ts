/**
 * A request to see Looped on the visitor's own event, and the server-side
 * validation that produces one from an untrusted request body.
 *
 * This is deliberately NOT a waitlist record and does not share its table.
 * A waitlist signup answers "keep me posted"; this answers "build me a
 * walkthrough of my event", which is a different intent, a different follow-up
 * and a different set of fields. Mixing them would also inherit the waitlist's
 * one-row-per-address dedupe, and a person who is already on the waitlist would
 * have their walkthrough request silently swallowed as a duplicate. Keeping the
 * two apart is what makes this separately attributable.
 *
 * The most valuable field is the event URL: one link tells us more about an
 * event than a paragraph a busy organiser has to write, so the form asks for it
 * rather than making them describe their world by hand.
 */

/** The wording in force under the submit button when a record was written. */
export const DEMO_CONSENT_VERSION = "2026-09-08.demo-request-v1";

export const DEMO_CONSENT_TEXT =
  "We will use this to prepare your walkthrough and to talk to you about Looped.";

export interface DemoRequestRecord {
  readonly id: string;
  readonly created_at: string;
  readonly name: string;
  readonly work_email: string;
  readonly company: string;
  readonly event_name: string;
  readonly event_url: string;
  readonly event_type: string;
  readonly events_per_year: string;
  readonly what_to_see: string;
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

export type DemoValidationResult =
  | { readonly ok: true; readonly record: DemoRequestRecord }
  | { readonly ok: false; readonly field: string; readonly message: string };

const LIMITS = {
  name: 120,
  work_email: 254,
  company: 160,
  event_name: 200,
  event_url: 512,
  event_type: 60,
  events_per_year: 60,
  what_to_see: 1000,
  url: 512,
} as const;

/** The closed sets the form offers. Anything else is discarded, not trusted. */
const EVENT_TYPES = ["Conference", "Awards", "Both", "Something else"] as const;
const EVENT_COUNTS = ["1", "2-5", "6-20", "20+"] as const;

function str(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function oneOf(value: unknown, allowed: readonly string[], max: number): string {
  const candidate = str(value, max);
  return allowed.includes(candidate) ? candidate : "";
}

export function normaliseEmail(raw: string): string {
  return raw.trim().toLowerCase().slice(0, LIMITS.work_email);
}

export function looksLikeEmail(value: string): boolean {
  if (value.length < 6 || value.length > LIMITS.work_email) return false;
  if (/\s/.test(value)) return false;
  const at = value.indexOf("@");
  if (at <= 0 || at !== value.lastIndexOf("@")) return false;
  const domain = value.slice(at + 1);
  if (!domain.includes(".") || domain.startsWith(".") || domain.endsWith(".")) return false;
  return !domain.includes("..");
}

/**
 * Accept what a person actually types into a URL box.
 *
 * "acmeawards.com" is what most people write, so a missing scheme is added
 * rather than rejected. Only http and https are allowed through: a javascript:
 * or data: value must never be stored and later rendered as a link anywhere.
 */
export function normaliseUrl(raw: string): string {
  const trimmed = raw.trim().slice(0, LIMITS.event_url);
  if (trimmed === "") return "";
  const candidate = /^[a-z][a-z0-9+.-]*:/i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const parsed = new URL(candidate);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return "";
    if (parsed.hostname === "" || !parsed.hostname.includes(".")) return "";
    return parsed.toString().slice(0, LIMITS.event_url);
  } catch {
    return "";
  }
}

function newId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `dr_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
}

/**
 * Turn an untrusted body into a record, or say which field is wrong and why.
 *
 * Only four things are actually required. Everything else sharpens the
 * walkthrough but must never be the reason a high-intent lead bounces.
 */
export function validateDemoRequest(body: Record<string, unknown>): DemoValidationResult {
  const name = str(body.name, LIMITS.name);
  const rawEmail = str(body.email, LIMITS.work_email);
  const company = str(body.company, LIMITS.company);
  const event_name = str(body.event_name, LIMITS.event_name);

  if (name === "") return { ok: false, field: "name", message: "Please tell us your name." };
  if (rawEmail === "") return { ok: false, field: "email", message: "Please give us a work email address." };

  const work_email = normaliseEmail(rawEmail);
  if (!looksLikeEmail(work_email)) {
    return { ok: false, field: "email", message: "That does not look like an email address. Please check it." };
  }
  if (company === "") return { ok: false, field: "company", message: "Please tell us which company you are with." };
  if (event_name === "") {
    return { ok: false, field: "event_name", message: "Please tell us which event you would like to see Looped on." };
  }

  const rawUrl = str(body.event_url, LIMITS.event_url);
  const event_url = normaliseUrl(rawUrl);
  if (rawUrl !== "" && event_url === "") {
    return { ok: false, field: "event_url", message: "That does not look like a web address. Please check it, or leave it blank." };
  }

  return {
    ok: true,
    record: {
      id: newId(),
      created_at: new Date().toISOString(),
      name,
      work_email,
      company,
      event_name,
      event_url,
      event_type: oneOf(body.event_type, EVENT_TYPES, LIMITS.event_type),
      events_per_year: oneOf(body.events_per_year, EVENT_COUNTS, LIMITS.events_per_year),
      what_to_see: str(body.what_to_see, LIMITS.what_to_see),
      landing_page: str(body.landing_page, LIMITS.url),
      source_page: str(body.source_page, LIMITS.url),
      referrer: str(body.referrer, LIMITS.url),
      utm_source: str(body.utm_source, LIMITS.url),
      utm_medium: str(body.utm_medium, LIMITS.url),
      utm_campaign: str(body.utm_campaign, LIMITS.url),
      utm_content: str(body.utm_content, LIMITS.url),
      utm_term: str(body.utm_term, LIMITS.url),
      status: "new",
      consent_version: DEMO_CONSENT_VERSION,
    },
  };
}
