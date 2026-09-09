/**
 * The one place that knows the site's public identity and which of its routes
 * are part of the public launch.
 *
 * metadataBase, canonical URLs, the sitemap and robots.txt all read from here,
 * so they cannot drift apart. Adding a public page means adding it to
 * PUBLIC_ROUTES and nowhere else.
 */

/**
 * The site's origin. There is no default production domain baked in because
 * the domain is a founder decision that has not been made in the repository;
 * set NEXT_PUBLIC_SITE_URL at build time. The localhost fallback keeps a
 * developer's build working and is obviously wrong if it ever ships, which is
 * the point.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/+$/, "");

/**
 * 🔴 INDEXING IS OFF UNLESS IT IS EXPLICITLY TURNED ON.
 *
 * Set NEXT_PUBLIC_ALLOW_INDEXING=true only on the real production domain.
 * Every other deployment (this review host included) then serves a robots.txt
 * that disallows everything, so a review build cannot be indexed by accident
 * and cannot compete with the real site in search results. Launch is a
 * deliberate flag flip, not a side effect of deploying.
 */
export const ALLOW_INDEXING = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export const SITE_NAME = "Looped";

export const DEFAULT_TITLE = "Looped. The AI operating system for conference & awards businesses";

export const DEFAULT_DESCRIPTION =
  "The art of events is yours. The intelligence is Looped. One operating system that understands your events, works across the tools your teams already use and turns intelligence into action: recommended with the evidence attached, approved by you, carried through your stack and verified.";

/**
 * The public journey. These, and only these, go in the sitemap.
 *
 * Platform and the working-area pages were shelved for launch and are public
 * again: the site has to communicate the full breadth of the operating system,
 * not only the journey through it. They are reached from the single Platform
 * entry in the navigation rather than from a feature-directory nav.
 *
 * `/pillars/sponsorship` is absent on purpose. It is a redirect to
 * `/pillars/commercial`, and a redirect does not belong in a sitemap.
 */
export const PUBLIC_ROUTES = [
  "/",
  "/how-it-works",
  "/platform",
  "/platform/conversations",
  "/platform/communications",
  "/platform/creative",
  "/platform/data",
  "/capabilities",
  "/pillars/marketing",
  "/pillars/content",
  "/pillars/commercial",
  "/pillars/telesales",
  "/pillars/event-management",
  "/pillars/portfolio",
  "/newsroom",
  "/demo",
  "/waitlist",
  "/privacy",
] as const;

/**
 * Routes shelved from the public journey. Never in the sitemap.
 *
 * Empty rather than deleted: robots.txt still reads this list, so shelving a
 * page again stays a one-line change in one file.
 */
export const SHELVED_ROUTES: readonly string[] = [];

/** An absolute URL on this site, for canonicals and the sitemap. */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
