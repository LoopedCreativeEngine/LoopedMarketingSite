import type { MetadataRoute } from "next";

import { getArticles } from "@/lib/newsroom";
import { ROUTES, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages = ROUTES.map((route) => ({
    url: route.path === "/" ? SITE_URL : `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }));

  const articles = getArticles().map((article) => ({
    url: `${SITE_URL}/newsroom/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...pages, ...articles];
}
