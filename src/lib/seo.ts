/**
 * Page metadata helpers.
 *
 * Every route composes its `<title>` from one pattern ("<page> | Looped") and
 * declares a canonical URL, so the site presents a single, consistent surface
 * to crawlers. Descriptions are written per page in the language event
 * organisers actually search with — never keyword-stuffed.
 */
import type { Metadata } from "next";

/** Public origin. Overridden per environment; the review build uses the default. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://looped.events";

export const SITE_NAME = "Looped";

type PageMetaInput = {
  /** Page title, without the brand suffix. */
  title: string;
  description: string;
  /** Route path, e.g. "/platform". */
  path: string;
};

export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}

/** Every indexable route, used by the sitemap and the link checker. */
export const ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/platform", priority: 0.9 },
  { path: "/how-it-works", priority: 0.8 },
  { path: "/agents-and-conversations", priority: 0.8 },
  { path: "/communications", priority: 0.8 },
  { path: "/creative", priority: 0.8 },
  { path: "/data-and-integrations", priority: 0.8 },
  { path: "/capabilities", priority: 0.8 },
  { path: "/pillars/marketing", priority: 0.7 },
  { path: "/pillars/content", priority: 0.7 },
  { path: "/pillars/sponsorship", priority: 0.7 },
  { path: "/pillars/telesales", priority: 0.7 },
  { path: "/pillars/event-management", priority: 0.7 },
  { path: "/pillars/portfolio", priority: 0.7 },
  { path: "/newsroom", priority: 0.6 },
  { path: "/demo", priority: 0.6 },
  { path: "/privacy", priority: 0.2 },
];
