import { cn } from "@/lib/cn";

/**
 * One person's journey across channels, as a single track rather than a set of
 * campaign reports. Each stop names the channel, what actually happened, and
 * what changed downstream as a result — which is the whole argument of the
 * communications page.
 */
export type JourneyStop = {
  channel: string;
  event: string;
  /** What Looped did with it. */
  consequence: string;
  /** Marks the stop where the relationship turns. */
  pivot?: boolean;
};

export function JourneyTrack({
  stops,
  outcome,
  tone = "light",
  className,
}: {
  stops: JourneyStop[];
  outcome: string;
  tone?: "light" | "ink";
  className?: string;
}): React.ReactElement {
  const ink = tone === "ink";
  const card = ink
    ? "border-white/10 bg-ink-raised"
    : "border-[rgba(23,19,31,0.12)] bg-paper shadow-[var(--lift-light)]";
  const cardPivot = ink ? "border-iris/45 bg-iris/[0.07]" : "border-violet/35 bg-violet/[0.04]";
  const channelTone = ink ? "text-iris" : "text-violet";
  const titleTone = ink ? "text-bone-text" : "text-ink-text";
  const bodyTone = ink ? "text-bone-dim" : "text-graphite";
  const thread = ink ? "bg-iris/30" : "bg-violet/25";
  const node = ink ? "border-iris/60 bg-ink" : "border-violet/50 bg-bone";

  return (
    <figure className={className}>
      <div className="relative">
        <div className={cn("absolute left-[11px] top-2 bottom-2 w-px lg:hidden", thread)} aria-hidden />
        <div className={cn("absolute left-0 right-0 top-[11px] hidden h-px lg:block", thread)} aria-hidden />

        <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3">
          {stops.map((stop) => (
            <li key={`${stop.channel}-${stop.event}`} className="relative flex gap-4 lg:block">
              <span
                className={cn("mt-1 h-[23px] w-[23px] shrink-0 rounded-full border lg:mt-0", node)}
                aria-hidden
              />
              <div className={cn("flex-1 rounded-xl border p-3.5 lg:mt-4", stop.pivot ? cardPivot : card)}>
                <p className={cn("font-mono text-[0.6rem] uppercase tracking-[0.16em]", channelTone)}>{stop.channel}</p>
                <p className={cn("mt-2 text-sm font-medium leading-snug", titleTone)}>{stop.event}</p>
                <p className={cn("mt-1.5 text-xs leading-relaxed", bodyTone)}>{stop.consequence}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <figcaption
        className={cn(
          "mt-6 rounded-xl border px-4 py-3.5 text-sm leading-relaxed",
          ink ? "border-white/10 bg-ink-raised text-bone-dim" : "border-[rgba(23,19,31,0.12)] bg-paper text-graphite",
        )}
      >
        <span className={cn("kicker mr-2.5 text-[0.6rem]", channelTone)}>Outcome</span>
        {outcome}
      </figcaption>
    </figure>
  );
}
