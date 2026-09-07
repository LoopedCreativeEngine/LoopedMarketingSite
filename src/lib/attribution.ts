/**
 * Visitor attribution, captured once per browser session.
 *
 * The first page a visitor lands on carries the campaign context: the UTM
 * parameters on the URL and the referrer that sent them. Both are gone by the
 * time they reach the waitlist form several pages later, so they are read on
 * the first page of the session and held in sessionStorage until a submission
 * carries them to the waitlist record.
 *
 * Session, not local, storage: attribution belongs to the visit that produced
 * it. A visitor who returns a week later through a different campaign should
 * be attributed to that campaign, not the first one that ever reached them.
 */

const STORAGE_KEY = "looped.attribution.v1";

/** The UTM parameters carried on the landing URL, plus where the visit began. */
export interface Attribution {
  /** The first path of this session, e.g. "/" or "/newsroom/some-piece". */
  readonly landing_page: string;
  /** document.referrer as seen on the landing page. Empty for a direct visit. */
  readonly referrer: string;
  readonly utm_source: string;
  readonly utm_medium: string;
  readonly utm_campaign: string;
  readonly utm_content: string;
  readonly utm_term: string;
}

export const EMPTY_ATTRIBUTION: Attribution = {
  landing_page: "",
  referrer: "",
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
};

/** A UTM value long enough to be an injection attempt is not a UTM value. */
const MAX_VALUE_LENGTH = 512;

function clamp(value: string | null): string {
  if (!value) return "";
  return value.slice(0, MAX_VALUE_LENGTH);
}

function readFromLocation(): Attribution {
  const params = new URLSearchParams(window.location.search);
  return {
    landing_page: `${window.location.pathname}${window.location.search}`.slice(0, MAX_VALUE_LENGTH),
    referrer: clamp(document.referrer),
    utm_source: clamp(params.get("utm_source")),
    utm_medium: clamp(params.get("utm_medium")),
    utm_campaign: clamp(params.get("utm_campaign")),
    utm_content: clamp(params.get("utm_content")),
    utm_term: clamp(params.get("utm_term")),
  };
}

/**
 * Read the stored attribution for this session, capturing it from the current
 * URL the first time it is called. Safe to call on every page.
 *
 * Storage can throw (private mode, blocked site data), so every access is
 * guarded and the in-memory value is returned regardless. Attribution is a
 * nice-to-have on a lead; it must never break a page or a submission.
 */
export function captureAttribution(): Attribution {
  if (typeof window === "undefined") return EMPTY_ATTRIBUTION;

  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as Partial<Attribution>;
      return { ...EMPTY_ATTRIBUTION, ...parsed };
    }
  } catch {
    // Fall through and capture fresh: an unreadable store is not an error here.
  }

  const captured = readFromLocation();
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(captured));
  } catch {
    // Nothing to do. The value is still returned for this page view.
  }
  return captured;
}

/** The stored attribution without capturing, for callers that only read. */
export function readAttribution(): Attribution {
  return captureAttribution();
}

/** The page a visitor is on right now, which is where a submission came from. */
export function currentSourcePage(): string {
  if (typeof window === "undefined") return "";
  return window.location.pathname.slice(0, MAX_VALUE_LENGTH);
}
