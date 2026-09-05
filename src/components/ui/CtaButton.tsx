import Link from "next/link";

import { cn } from "@/lib/cn";

/**
 * The site's CTA treatment. Primary is the gradient pill (RECOVERED: gradient
 * rounded CTA); secondary is a quiet outline. Both read on paper and night.
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
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-[transform,box-shadow,background-color,border-color] duration-200 hover:-translate-y-0.5";
  const styles =
    variant === "primary"
      ? "bg-grad text-white shadow-[var(--grad-emph)] hover:shadow-[0_14px_34px_-10px_rgba(236,72,153,0.55)]"
      : tone === "ink"
        ? "border border-white/25 text-snow hover:bg-white/10"
        : "border border-[rgba(15,23,42,0.18)] text-ink hover:bg-stone-deep";

  return (
    <Link href={href} className={cn(base, styles, full && "w-full sm:w-auto", className)}>
      {children}
    </Link>
  );
}
