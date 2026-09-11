import { type Availability } from "@/components/ui/StatusPill";
import { cn } from "@/lib/cn";

/**
 * Your systems stay your systems. The visual puts the customer's estate on
 * top, the intelligence Looped adds in the middle, and what the team gets back
 * underneath — deliberately showing the shape of the relationship, not the
 * structure of anything underneath it.
 */
export type SystemChip = { label: string; status?: Availability };

export function DataFabric({
  systems,
  layerTitle,
  layerBody,
  outputs,
  tone = "light",
  className,
}: {
  systems: SystemChip[];
  layerTitle: string;
  layerBody: string;
  outputs: string[];
  tone?: "light" | "ink";
  className?: string;
}): React.ReactElement {
  const ink = tone === "ink";
  const shell = ink
    ? "border-white/10 bg-ink-raised shadow-[var(--lift-ink)]"
    : "border-[rgba(23,19,31,0.10)] bg-paper shadow-[var(--lift-light)]";
  const chip = ink
    ? "border-white/12 bg-ink text-bone-dim"
    : "border-[rgba(23,19,31,0.12)] bg-bone text-graphite";
  const label = ink ? "text-bone-dim/70" : "text-muted-ink";
  const accent = ink ? "text-iris" : "text-violet";
  const band = ink
    ? "border-iris/35 bg-iris/[0.08]"
    : "border-violet/30 bg-violet/[0.05]";
  const titleTone = ink ? "text-bone-text" : "text-ink-text";
  const bodyTone = ink ? "text-bone-dim" : "text-graphite";
  const stroke = ink ? "var(--iris)" : "var(--violet)";

  return (
    <figure className={cn("rounded-2xl border p-5 sm:p-6", shell, className)}>
      <p className={cn("font-mono text-[0.6rem] uppercase tracking-[0.16em]", label)}>Your systems</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {systems.map((system) => (
          <li
            key={system.label}
            className={cn("inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs", chip)}
          >
            {system.label}
          </li>
        ))}
      </ul>

      {/* the join */}
      <svg viewBox="0 0 600 28" className="mt-4 h-6 w-full" aria-hidden fill="none" preserveAspectRatio="none">
        {[60, 160, 260, 360, 460, 540].map((x) => (
          <path key={x} d={`M ${x} 0 C ${x} 16, 300 10, 300 26`} stroke={stroke} strokeWidth="1" opacity="0.35" />
        ))}
      </svg>

      <div className={cn("rounded-xl border px-4 py-4", band)}>
        <p className={cn("font-serif text-lg tracking-tight", titleTone)}>{layerTitle}</p>
        <p className={cn("mt-1.5 text-sm leading-relaxed", bodyTone)}>{layerBody}</p>
      </div>

      <svg viewBox="0 0 600 28" className="h-6 w-full" aria-hidden fill="none" preserveAspectRatio="none">
        {[100, 240, 380, 500].map((x) => (
          <path key={x} d={`M 300 0 C 300 16, ${x} 10, ${x} 26`} stroke={stroke} strokeWidth="1" opacity="0.35" />
        ))}
      </svg>

      <p className={cn("font-mono text-[0.6rem] uppercase tracking-[0.16em]", label)}>What your team gets back</p>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {outputs.map((output) => (
          <li key={output} className={cn("rounded-lg border px-3 py-2 text-xs leading-relaxed", chip)}>
            <span className={cn("mr-2 font-mono", accent)}>&rarr;</span>
            {output}
          </li>
        ))}
      </ul>
    </figure>
  );
}
