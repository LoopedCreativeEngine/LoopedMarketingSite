"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { track } from "@/lib/analytics";
import { captureAttribution } from "@/lib/attribution";

/**
 * Captures this session's attribution on the first page, then reports a
 * page_view for every route the visitor reaches, including client-side
 * navigations, which do not reload the document.
 *
 * Mounted once in the root layout. Renders nothing.
 */
export function Analytics(): null {
  const pathname = usePathname();
  const lastReported = useRef<string | null>(null);

  useEffect(() => {
    // Attribution first, so the very first page_view already carries the UTMs
    // and referrer that produced the visit.
    captureAttribution();

    // React runs effects twice in development's strict mode; the guard keeps
    // one navigation to one page_view in every environment.
    if (lastReported.current === pathname) return;
    lastReported.current = pathname;

    track("page_view");
  }, [pathname]);

  return null;
}
