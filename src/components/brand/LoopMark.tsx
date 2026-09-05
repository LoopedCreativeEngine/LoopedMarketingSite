import { cn } from "@/lib/cn";

/**
 * The Looped mark: one ring. RECOVERED from the deck's title slide (a 30px
 * circle with a 3px stroke beside the bold wordmark). Inherits `currentColor`;
 * pass `gradient` for the gradient-stroked version used on light.
 */
export function LoopMark({
  className,
  title,
  gradient = false,
}: {
  className?: string;
  title?: string;
  gradient?: boolean;
}): React.ReactElement {
  return (
    <svg
      viewBox="0 0 30 30"
      className={cn("h-6 w-6", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      fill="none"
    >
      {title ? <title>{title}</title> : null}
      {gradient ? (
        <defs>
          <linearGradient id="loop-mark-grad" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#7c3aed" />
            <stop offset="0.55" stopColor="#ec4899" />
            <stop offset="1" stopColor="#fb923c" />
          </linearGradient>
        </defs>
      ) : null}
      <circle cx="15" cy="15" r="13.5" stroke={gradient ? "url(#loop-mark-grad)" : "currentColor"} strokeWidth="3" />
    </svg>
  );
}

/** Wordmark: the ring beside "Looped", bold, tight. */
export function Wordmark({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}): React.ReactElement {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LoopMark gradient className={cn("h-[1.25em] w-[1.25em]", markClassName)} />
      <span className="font-sans text-[1.3em] font-bold leading-none tracking-[-0.02em]">Looped</span>
    </span>
  );
}
