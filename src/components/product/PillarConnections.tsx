import { cn } from "@/lib/cn";

/**
 * This team, in the flow. One pillar sits in the centre; the left column is
 * what it draws on from the rest of the event, the right column is what it
 * feeds back. The point of the picture is that Looped is not six separate point
 * tools: each team's intelligence is connected to the others, and the exchange
 * runs both ways. Labels only, distilled from the page's own copy, so it makes
 * no claim the prose does not already make.
 */
export type ConnectionFlow = { team: string; signal: string };

type ColumnClasses = { card: string; titleTone: string; bodyTone: string; label: string; accent: string };

function Column({
  heading,
  flows,
  direction,
  classes,
}: {
  heading: string;
  flows: ConnectionFlow[];
  direction: "in" | "out";
  classes: ColumnClasses;
}): React.ReactElement {
  const arrow = (
    <span className={cn("mt-0.5 shrink-0 font-mono", classes.accent)} aria-hidden>
      &rarr;
    </span>
  );
  return (
    <div>
      <p className={cn("font-mono text-[0.6rem] uppercase tracking-[0.16em]", classes.label)}>{heading}</p>
      <ul className="mt-3 space-y-2">
        {flows.map((flow) => (
          <li
            key={`${flow.team}-${flow.signal}`}
            className={cn("flex items-start gap-2.5 rounded-lg border px-3 py-2", classes.card)}
          >
            {direction === "in" ? arrow : null}
            <span className="flex-1">
              <span className={cn("text-[0.78rem] font-medium", classes.titleTone)}>{flow.team}</span>
              <span className={cn("mt-0.5 block text-xs leading-relaxed", classes.bodyTone)}>{flow.signal}</span>
            </span>
            {direction === "out" ? arrow : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PillarConnections({
  pillar,
  draws,
  feeds,
  note,
  tone = "light",
  className,
}: {
  pillar: string;
  /** What this pillar draws on from other teams. */
  draws: ConnectionFlow[];
  /** What this pillar feeds back to other teams. */
  feeds: ConnectionFlow[];
  note?: string;
  tone?: "light" | "ink";
  className?: string;
}): React.ReactElement {
  const ink = tone === "ink";
  const shell = ink
    ? "border-white/10 bg-ink-raised shadow-[var(--lift-ink)]"
    : "border-[rgba(23,19,31,0.10)] bg-paper shadow-[var(--lift-light)]";
  const band = ink ? "border-iris/40 bg-iris/[0.08]" : "border-violet/35 bg-violet/[0.06]";
  const titleTone = ink ? "text-bone-text" : "text-ink-text";
  const bodyTone = ink ? "text-bone-dim" : "text-graphite";
  const accent = ink ? "text-iris" : "text-violet";
  const classes: ColumnClasses = {
    card: ink ? "border-white/10 bg-ink" : "border-[rgba(23,19,31,0.10)] bg-bone",
    titleTone,
    bodyTone,
    label: ink ? "text-bone-dim/70" : "text-muted-ink",
    accent,
  };

  return (
    <figure className={cn("rounded-2xl border p-5 sm:p-6", shell, className)}>
      <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6">
        <Column heading="Draws on" flows={draws} direction="in" classes={classes} />

        <div className={cn("rounded-2xl border px-5 py-6 text-center", band)}>
          <span className={cn("kicker text-[0.6rem]", accent)}>This team</span>
          <p className={cn("mt-2 font-serif text-2xl tracking-tight", titleTone)}>{pillar}</p>
          <p className={cn("mx-auto mt-2 max-w-[16rem] text-xs leading-relaxed", bodyTone)}>
            Connected to the rest of the event, not run as an island.
          </p>
        </div>

        <Column heading="Feeds" flows={feeds} direction="out" classes={classes} />
      </div>

      {note ? (
        <figcaption
          className={cn(
            "mt-5 flex items-start gap-2.5 border-t pt-4 text-xs leading-relaxed",
            ink ? "border-white/10 text-bone-dim" : "border-[rgba(23,19,31,0.08)] text-graphite",
          )}
        >
          <span className={cn("mt-1 h-1.5 w-1.5 shrink-0 rounded-full", ink ? "bg-iris" : "bg-violet")} aria-hidden />
          <span>{note}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}
