import type { MetadataRoute } from "next";

import { absoluteUrl, ALLOW_INDEXING, SHELVED_ROUTES } from "@/lib/site";

/**
 * robots.txt.
 *
 * 🔴 CLOSED BY DEFAULT. Unless NEXT_PUBLIC_ALLOW_INDEXING is explicitly "true",
 * this serves a blanket disallow. Every non-production deployment, this review
 * host included, is therefore uncrawlable without anyone having to remember to
 * switch it off. Turning indexing on is a deliberate step in the release
 * checklist, taken once, on the production domain.
 *
 * When indexing IS allowed, the shelved Platform and pillar routes are
 * disallowed explicitly. They already serve noindex/nofollow in their own
 * metadata; this is the second, independent statement of the same intent, so
 * neither one failing silently exposes them.
 */
export default function robots(): MetadataRoute.Robots {
  if (!ALLOW_INDEXING) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", ...SHELVED_ROUTES.map((route) => `${route}`)],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/").replace(/\/$/, ""),
  };
}
