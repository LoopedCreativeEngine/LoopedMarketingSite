import { cn } from "@/lib/cn";

/**
 * The operating loop: six stages that close back on themselves, drawn with a
 * return arc so the page shows the loop rather than describing it. Each stage
 * carries the plain question it answers for the team.
 */
export type LoopStage = {
  name: string;
  question: string;
  detail: string;
};

export function LoopStages({
  stages,
  tone = "ink",
  returnNote = "Every edition starts further ahead than the last.",
  className,
}: {
  stages: LoopStage[];
  tone?: "light" | "ink";
  returnNote?: string;
  className?: string;
}): React.ReactElement {
  const ink = tone === "ink";
  const card = ink
    ? "border-white/10 bg-ink-raised"
    : "border-[rgba(23,19,31,0.12)] bg-paper shadow-[var(--lift-light)]";
  const nameTone = ink ? "text-bone-text" : "text-ink-text";
  const qTone = ink ? "text-iris" : "text-violet";
  const bodyTone = ink ? "text-bone-dim" : "text-graphite";
  const stroke = ink ? "var(--iris)" : "var(--violet)";

  return (
    <div className={className}>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stages.map((stage, index) => (
          <li key={stage.name} className={cn("rounded-2xl border p-5", card)}>
            <div className="flex items-baseline gap-3">
              <span className={cn("font-mono text-xs", qTone)}>{String(index + 1).padStart(2, "0")}</span>
              <h3 className={cn("font-serif text-xl tracking-tight", nameTone)}>{stage.name}</h3>
            </div>
            <p className={cn("mt-3 text-sm font-medium leading-snug", qTone)}>{stage.question}</p>
            <p className={cn("mt-2 text-sm leading-relaxed", bodyTone)}>{stage.detail}</p>
          </li>
        ))}
      </ol>

      {/* the loop closes */}
      <div className="mt-6 flex items-center gap-4">
        <svg viewBox="0 0 200 26" className="h-6 w-28 shrink-0" aria-hidden fill="none">
          <path
            d="M196 4 C196 18, 170 22, 120 22 L30 22 C10 22, 4 16, 4 10"
            stroke={stroke}
            strokeWidth="1.5"
            opacity="0.8"
          />
          <path d="M4 10 L0.5 15 M4 10 L7.5 15" stroke={stroke} strokeWidth="1.5" opacity="0.8" />
        </svg>
        <p className={cn("text-sm italic leading-relaxed", ink ? "text-bone-dim" : "text-graphite")}>{returnNote}</p>
      </div>
    </div>
  );
}
