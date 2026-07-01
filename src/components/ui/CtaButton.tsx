import Link from "next/link";

import { cn } from "@/lib/cn";

/**
 * The site's one CTA treatment, repeated at every decision point. Primary is
 * always the violet fill ("Apply to pilot"); secondary is the quieter outline
 * ("Join the waitlist"). Both read on bone and ink panels.
 */
type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  tone?: "light" | "ink";
  className?: string;
  full?: boolean;
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  tone = "light",
  className,
  full = false,
}: CtaButtonProps): React.ReactElement {
  const base =
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5";

  const styles =
    variant === "primary"
      ? "bg-violet text-bone shadow-[var(--violet-emph)] hover:bg-[#3b31b4]"
      : tone === "ink"
        ? "border border-white/25 text-bone hover:bg-white/10"
        : "border border-[rgba(23,19,31,0.22)] text-ink-text hover:bg-sand/70";

  return (
    <Link href={href} className={cn(base, styles, full && "w-full sm:w-auto", className)}>
      {children}
    </Link>
  );
}
