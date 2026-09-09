import { cn } from "@/lib/cn";

/**
 * One person, several relationships with the same organiser, across events and
 * years. The point of the visual is that the conversation opens already knowing
 * which of those relationships is the live one — without showing how that is
 * resolved underneath.
 */
export type Relationship = {
  role: string;
  context: string;
  /** e.g. "2024", "Renewal due". */
  meta: string;
  current?: boolean;
};

export function RelationshipContext({
  personLabel,
  relationships,
  currentLine,
  tone = "light",
  className,
}: {
  /** Anonymised stand-in, e.g. "One contact in your data". */
  personLabel: string;
  relationships: Relationship[];
  currentLine: string;
  tone?: "light" | "ink";
  className?: string;
}): React.ReactElement {
  const ink = tone === "ink";
  const shell = ink
    ? "border-white/10 bg-ink-raised shadow-[var(--lift-ink)]"
    : "border-[rgba(23,19,31,0.10)] bg-paper shadow-[var(--lift-light)]";
  const card = ink ? "border-white/10 bg-ink" : "border-[rgba(23,19,31,0.10)] bg-bone";
  const cardCurrent = ink ? "border-iris/45 bg-iris/[0.08]" : "border-violet/35 bg-violet/[0.05]";
  const titleTone = ink ? "text-bone-text" : "text-ink-text";
  const bodyTone = ink ? "text-bone-dim" : "text-graphite";
  const metaTone = ink ? "text-bone-dim/70" : "text-muted-ink";
  const accent = ink ? "text-iris" : "text-violet";
  const rail = ink ? "bg-iris/30" : "bg-violet/25";

  return (
    <figure className={cn("rounded-2xl border p-5 sm:p-6", shell, className)}>
      <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
        {/* the person */}
        <div className="lg:col-span-4">
          <span className={cn("kicker text-[0.6rem]", accent)}>Same person</span>
          <div className={cn("mt-3 rounded-xl border p-4", card)}>
            <div className="flex items-center gap-3">
              <span
                className={cn("h-9 w-9 shrink-0 rounded-full", ink ? "bg-white/10" : "bg-[rgba(23,19,31,0.08)]")}
                aria-hidden
              />
              <div>
                <p className={cn("text-sm font-medium", titleTone)}>{personLabel}</p>
                <p className={cn("mt-0.5 font-mono text-[0.58rem] uppercase tracking-[0.12em]", metaTone)}>
                  {relationships.length} relationships
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* the relationships */}
        <div className="relative lg:col-span-8">
          <div className={cn("absolute left-[7px] top-3 bottom-3 w-px", rail)} aria-hidden />
          <ul className="space-y-2.5">
            {relationships.map((relationship) => (
              <li key={`${relationship.role}-${relationship.context}`} className="flex items-start gap-4">
                <span
                  className={cn(
                    "mt-3.5 h-[15px] w-[15px] shrink-0 rounded-full border",
                    relationship.current
                      ? ink
                        ? "border-iris bg-iris"
                        : "border-violet bg-violet"
                      : ink
                        ? "border-white/25 bg-ink"
                        : "border-[rgba(23,19,31,0.20)] bg-bone",
                  )}
                  aria-hidden
                />
                <div className={cn("flex-1 rounded-lg border px-3.5 py-2.5", relationship.current ? cardCurrent : card)}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <p className={cn("text-sm font-medium", titleTone)}>{relationship.role}</p>
                    <p className={cn("font-mono text-[0.58rem] uppercase tracking-[0.12em]", metaTone)}>
                      {relationship.meta}
                    </p>
                  </div>
                  <p className={cn("mt-1 text-xs leading-relaxed", bodyTone)}>{relationship.context}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <figcaption
        className={cn(
          "mt-5 flex items-start gap-2.5 border-t pt-4 text-xs leading-relaxed",
          ink ? "border-white/10 text-bone-dim" : "border-[rgba(23,19,31,0.08)] text-graphite",
        )}
      >
        <span className={cn("mt-1 h-1.5 w-1.5 shrink-0 rounded-full", ink ? "bg-iris" : "bg-violet")} aria-hidden />
        <span>{currentLine}</span>
      </figcaption>
    </figure>
  );
}
