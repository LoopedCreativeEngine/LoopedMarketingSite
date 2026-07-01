import { cn } from "@/lib/cn";

/**
 * The Looped mark: one continuous loop with a single node surfacing on it —
 * the event cycle, and the moment intelligence appears. Echoes the node that
 * travels the LoopRail down the page. Inherits `currentColor`.
 */
export function LoopMark({
  className,
  title,
}: {
  className?: string;
  title?: string;
}): React.ReactElement {
  return (
    <svg
      viewBox="0 0 28 28"
      className={cn("h-6 w-6", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      fill="none"
    >
      {title ? <title>{title}</title> : null}
      {/* the loop */}
      <circle cx="14" cy="14" r="8.5" stroke="currentColor" strokeWidth="2" />
      {/* the node surfacing on the loop */}
      <circle cx="20.01" cy="8" r="3.1" fill="currentColor" />
    </svg>
  );
}

/** Wordmark: the loop mark set against the "Looped" name. */
export function Wordmark({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}): React.ReactElement {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <LoopMark className={cn("h-[1.15em] w-[1.15em] text-violet", markClassName)} />
      <span className="font-serif text-[1.28em] leading-none tracking-[-0.01em]">Looped</span>
    </span>
  );
}
