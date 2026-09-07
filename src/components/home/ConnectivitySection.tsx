"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

/**
 * The adoption story: Looped is useful before any integration, from the data and
 * knowledge teams already have, and gets deeper as they connect more. Three
 * progressively richer bands where the Looped output visibly grows. No repetition
 * with the copy above.
 */
const BANDS = [
  {
    label: "Start now",
    inputs: "Files · exports · spreadsheets · type · talk",
    output: "A current picture and clear recommendations, from day one.",
    fill: 1,
  },
  {
    label: "Connect what matters",
    inputs: "CRM · registration · email · programme · commercial",
    output: "Live signals and stronger prioritisation as the systems come in.",
    fill: 2,
  },
  {
    label: "Connect deeply",
    inputs: "Continuous connection across your stack",
    output: "Continuous intelligence and more of the work prepared for you.",
    fill: 3,
  },
];

export function ConnectivitySection(): React.ReactElement {
  return (
    <Panel tone="stone" kicker="Connectivity">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <h2 className="text-balance display-section">You do not need to connect everything to start.</h2>
        </Reveal>
        <Reveal className="lg:col-span-7 lg:pt-2">
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            Looped can begin with the data and knowledge your teams already have. Connect more of your stack when it
            makes sense, and the picture becomes deeper, more current and more powerful.
          </p>
        </Reveal>
      </div>

      <RevealStagger className="mt-12 grid gap-4 md:grid-cols-3">
        {BANDS.map((b, i) => (
          <RevealItem
            key={b.label}
            className={cn(
              "flex flex-col rounded-[20px] bg-paper p-6 shadow-[var(--lift-light)] sm:p-7",
              i === 2 ? "border-2 border-purple/40" : "border border-hairline",
            )}
          >
            <div className="flex items-center justify-between">
              <p className="kicker text-purple">{b.label}</p>
              <div className="flex gap-1" aria-hidden>
                {[0, 1, 2].map((seg) => (
                  <span
                    key={seg}
                    className={cn("h-1.5 w-5 rounded-full", seg < b.fill ? "bg-grad" : "bg-hairline")}
                  />
                ))}
              </div>
            </div>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.04em] text-muted">{b.inputs}</p>
            <p className="mt-4 flex-1 font-serif text-lg leading-snug text-ink">{b.output}</p>
          </RevealItem>
        ))}
      </RevealStagger>

      <Reveal>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-slate sm:text-lg">
          Useful from the first upload, and never a demo mode. You are never asked to replace what already works.
        </p>
      </Reveal>
    </Panel>
  );
}
