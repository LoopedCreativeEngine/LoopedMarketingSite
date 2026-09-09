import { cn } from "@/lib/cn";

/**
 * An honest availability label.
 *
 * Looped is mid-rollout, and a buyer respects a page that says so more than one
 * that implies everything is finished. Rather than flatten the whole platform
 * into an implied "available now", anything that is not yet fully rolled out
 * carries the state it is genuinely in. Used sparingly: on capability lists,
 * never as decoration on every card.
 */
export type Availability = "live" | "pilot" | "soon";

const LABELS: Record<Availability, string> = {
  live: "Live",
  pilot: "In pilot",
  soon: "Rolling out",
};

export function StatusPill({
  status,
  tone = "light",
  className,
}: {
  status: Availability;
  tone?: "light" | "night";
  className?: string;
}): React.ReactElement {
  const night = tone === "night";

  const styles: Record<Availability, string> = night
    ? {
        live: "border-lavender/45 text-lavender",
        pilot: "border-white/20 text-mist",
        soon: "border-white/12 text-mist-dim",
      }
    : {
        live: "border-purple/35 text-purple",
        pilot: "border-hairline text-slate",
        soon: "border-hairline text-muted",
      };

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em]",
        styles[status],
        className,
      )}
    >
      {status === "live" ? (
        <span className={cn("h-1.5 w-1.5 rounded-full", night ? "bg-lavender" : "bg-grad-dot")} aria-hidden />
      ) : null}
      {LABELS[status]}
    </span>
  );
}

/** The one-line legend that accompanies any list using the labels above. */
export function AvailabilityNote({
  tone = "light",
  className,
}: {
  tone?: "light" | "night";
  className?: string;
}): React.ReactElement {
  const night = tone === "night";
  return (
    <p className={cn("text-sm leading-relaxed", night ? "text-mist-dim" : "text-muted", className)}>
      <span className="font-semibold">Live</span> is available to early-access teams today.{" "}
      <span className="font-semibold">In pilot</span> is running with partner teams and hardening.{" "}
      <span className="font-semibold">Rolling out</span> is committed and close. Anything without a label is live. We
      would rather tell you where something sits than let you discover it later.
    </p>
  );
}
