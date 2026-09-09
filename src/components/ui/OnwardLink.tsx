import Link from "next/link";

import { cn } from "@/lib/cn";

/**
 * The quiet onward link.
 *
 * The homepage keeps its shape; where a section already opens a thread, this
 * offers the deeper page rather than a new section. Deliberately understated:
 * a line of text and an arrow, never a second CTA competing with the waitlist.
 */
export function OnwardLink({
  href,
  children,
  tone = "light",
  className,
}: {
  href: string;
  children: React.ReactNode;
  tone?: "light" | "night";
  className?: string;
}): React.ReactElement {
  const night = tone === "night";
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-semibold transition-colors",
        night ? "text-lavender hover:text-snow" : "text-purple hover:text-ink",
        className,
      )}
    >
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
        &rarr;
      </span>
    </Link>
  );
}
