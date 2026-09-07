"use client";

import Link from "next/link";

import { track, type AnalyticsEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";

/**
 * The site's CTA treatment. Primary is the gradient pill (RECOVERED: gradient
 * rounded CTA); secondary is a quiet outline. Both read on paper and night.
 *
 * Every CTA reports its click. The event is inferred from the destination so
 * the call sites stay as they are, and can be overridden where a button means
 * something more specific than its href (the newsroom signup, for instance).
 */
type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  tone?: "light" | "ink";
  className?: string;
  full?: boolean;
  /** Override the inferred conversion event for this button. */
  event?: AnalyticsEvent;
};

/** The waitlist lives at /demo; the product tour is the what-it-does section. */
export function eventForHref(href: string): AnalyticsEvent | null {
  if (href === "/demo" || href.startsWith("/demo")) return "waitlist_cta_click";
  if (href.includes("#what-it-does")) return "see_looped_in_action_click";
  return null;
}

export function CtaButton({
  href,
  children,
  variant = "primary",
  tone = "light",
  className,
  full = false,
  event,
}: CtaButtonProps): React.ReactElement {
  const base =
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-[transform,box-shadow,background-color,border-color] duration-200 hover:-translate-y-0.5";
  const styles =
    variant === "primary"
      ? "bg-grad text-white shadow-[var(--grad-emph)] hover:shadow-[0_14px_34px_-10px_rgba(236,72,153,0.55)]"
      : tone === "ink"
        ? "border border-white/25 text-snow hover:bg-white/10"
        : "border border-[rgba(15,23,42,0.18)] text-ink hover:bg-stone-deep";

  function onClick(): void {
    const resolved = event ?? eventForHref(href);
    if (resolved) track(resolved, { href });
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(base, styles, full && "w-full sm:w-auto", className)}
    >
      {children}
    </Link>
  );
}
