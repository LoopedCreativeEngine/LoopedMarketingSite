import type { MetadataRoute } from "next";

import { getArticles } from "@/lib/newsroom";
import { absoluteUrl, PUBLIC_ROUTES } from "@/lib/site";

/**
 * The public sitemap: the launch journey and the newsroom pieces, and nothing
 * else.
 *
 * The shelved Platform and pillar routes are absent by construction. They are
 * not filtered out of a longer list; they were never in PUBLIC_ROUTES. Each
 * also serves robots noindex/nofollow, so the two mechanisms agree.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = PUBLIC_ROUTES.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/demo" ? 0.9 : 0.7,
  }));

  const articles: MetadataRoute.Sitemap = getArticles().map((article) => ({
    url: absoluteUrl(`/newsroom/${article.slug}`),
    lastModified: new Date(article.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...pages, ...articles];
}
