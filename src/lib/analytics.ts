/**
 * Conversion analytics, sent to PostHog when a PostHog project is configured.
 *
 * There is no analytics SDK in the dependency tree on purpose. The site needs
 * eight named conversion events, not autocapture, session replay or a feature
 * flag runtime, and PostHog's capture endpoint takes a plain JSON POST. That
 * keeps the bundle small, adds no third-party script to the critical path and
 * introduces no competing analytics platform.
 *
 * Nothing is sent unless NEXT_PUBLIC_POSTHOG_KEY is set. Until the founder
 * provisions a project this module is a no-op: no network call, no cookie, no
 * identifier written. See docs/PRODUCTION_RELEASE_CHECKLIST.md.
 */

import { currentSourcePage, readAttribution } from "@/lib/attribution";

/** The conversion events this site reports. Nothing else is captured. */
export type AnalyticsEvent =
  | "page_view"
  | "waitlist_cta_click"
  | "see_looped_in_action_click"
  | "waitlist_form_start"
  | "waitlist_form_submit"
  | "waitlist_success"
  | "newsroom_signup_click"
  | "newsroom_article_click";

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "";
const HOST = (process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com").replace(/\/+$/, "");

const DISTINCT_ID_KEY = "looped.distinct_id.v1";

/** True when a project is configured. Exported so callers can branch cheaply. */
export function analyticsEnabled(): boolean {
  return KEY !== "";
}

/**
 * A stable anonymous id for this browser, created on first use.
 *
 * Only created when analytics is actually configured, so an unprovisioned site
 * writes no identifier at all. localStorage can throw, in which case a
 * per-page-view id is used and the event is still useful in aggregate.
 */
function distinctId(): string {
  const fresh = (): string =>
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `anon-${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;

  try {
    const existing = window.localStorage.getItem(DISTINCT_ID_KEY);
    if (existing) return existing;
    const created = fresh();
    window.localStorage.setItem(DISTINCT_ID_KEY, created);
    return created;
  } catch {
    return fresh();
  }
}

/**
 * Send one event. Never throws, never returns a rejected promise: an analytics
 * failure must not surface to a visitor or break a form submission.
 */
export function track(event: AnalyticsEvent, properties: Record<string, unknown> = {}): void {
  if (!analyticsEnabled() || typeof window === "undefined") return;

  try {
    const attribution = readAttribution();
    const payload = JSON.stringify({
      api_key: KEY,
      event,
      distinct_id: distinctId(),
      timestamp: new Date().toISOString(),
      properties: {
        // Page and referrer context on every event.
        $current_url: window.location.href,
        path: currentSourcePage(),
        source_page: currentSourcePage(),
        referrer: attribution.referrer,
        landing_page: attribution.landing_page,
        utm_source: attribution.utm_source,
        utm_medium: attribution.utm_medium,
        utm_campaign: attribution.utm_campaign,
        utm_content: attribution.utm_content,
        utm_term: attribution.utm_term,
        ...properties,
      },
    });

    const url = `${HOST}/capture/`;

    // 🔴 text/plain, NOT application/json, and the body is JSON regardless.
    //
    // The capture endpoint is cross-origin. `application/json` is not a
    // CORS-safelisted content type, so it forces a preflight OPTIONS - and
    // `sendBeacon` cannot preflight. It returns true (the send is queued) and
    // the browser then drops the request silently, which is the worst possible
    // failure: analytics that reports success and delivers nothing. `text/plain`
    // is safelisted, so the POST goes straight out with no preflight. PostHog
    // parses the JSON body either way; this is what its own SDK does.
    const CONTENT_TYPE = "text/plain;charset=UTF-8";

    // sendBeacon survives the page unload that follows a CTA click; fetch with
    // keepalive is the fallback where it is unavailable.
    if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
      const queued = navigator.sendBeacon(url, new Blob([payload], { type: CONTENT_TYPE }));
      if (queued) return;
    }
    void fetch(url, {
      method: "POST",
      headers: { "Content-Type": CONTENT_TYPE },
      body: payload,
      keepalive: true,
    }).catch(() => {
      // Swallowed on purpose.
    });
  } catch {
    // Swallowed on purpose: analytics is never load-bearing.
  }
}
