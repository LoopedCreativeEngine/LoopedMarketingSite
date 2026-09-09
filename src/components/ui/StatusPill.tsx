import { cn } from "@/lib/cn";

/**
 * Honest availability signal.
 *
 * Looped is a platform mid-rollout, and buyers respect a page that says so.
 * Rather than flattening everything into one implied "available now", each
 * capability carries the state it is genuinely in. Used sparingly: on channel
 * and capability grids, never as decoration on every card.
 */
export type Availability = "live" | "pilot" | "soon";

const LABELS: Record<Availability, string> = {
  live: "Live",
  pilot: "In pilot",
  soon: "Rolling out",
};

export function availabilityLabel(status: Availability): string {
  return LABELS[status];
}

export function StatusPill({
  status,
  tone = "light",
  className,
}: {
  status: Availability;
  tone?: "light" | "ink";
  className?: string;
}): React.ReactElement {
  const ink = tone === "ink";

  const styles: Record<Availability, string> = ink
    ? {
        live: "border-iris/45 text-iris",
        pilot: "border-white/25 text-bone-dim",
        soon: "border-white/15 text-bone-dim/70",
      }
    : {
        live: "border-violet/40 text-violet",
        pilot: "border-[rgba(23,19,31,0.20)] text-graphite",
        soon: "border-[rgba(23,19,31,0.14)] text-muted-ink",
      };

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.16em]",
        styles[status],
        className,
      )}
    >
      {status === "live" ? (
        <span className={cn("h-1.5 w-1.5 rounded-full", ink ? "bg-iris" : "bg-violet")} aria-hidden />
      ) : null}
      {LABELS[status]}
    </span>
  );
}

/**
 * The one-line explainer that accompanies any grid using status pills, so the
 * labels are never ambiguous.
 */
export function AvailabilityNote({
  tone = "light",
  className,
}: {
  tone?: "light" | "ink";
  className?: string;
}): React.ReactElement {
  const ink = tone === "ink";
  return (
    <p className={cn("text-xs leading-relaxed", ink ? "text-bone-dim/75" : "text-muted-ink", className)}>
      <span className="font-medium">Live</span> is available to pilot teams today.{" "}
      <span className="font-medium">In pilot</span> is running with partner teams and hardening.{" "}
      <span className="font-medium">Rolling out</span> is committed and on the near roadmap. We would rather tell you
      where something sits than let you find out later.
    </p>
  );
}
