"use client";

import Link from "next/link";

import { track, type AnalyticsEvent } from "@/lib/analytics";

/**
 * A Link that reports its click as a named conversion event.
 *
 * For links that are not CTAs and so do not go through CtaButton, such as the
 * article cards in the newsroom index. Keeps the surrounding page a server
 * component: only the link itself needs the client boundary.
 */
export function TrackedLink({
  href,
  event,
  properties,
  className,
  children,
}: {
  href: string;
  event: AnalyticsEvent;
  properties?: Record<string, unknown>;
  className?: string;
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <Link href={href} className={className} onClick={() => track(event, { href, ...properties })}>
      {children}
    </Link>
  );
}
