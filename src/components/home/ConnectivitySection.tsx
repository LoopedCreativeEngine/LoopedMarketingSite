"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

/**
 * The stack story: Looped connects to the systems teams already use, reads the
 * context it needs from them and, once authorised, carries work back into them.
 * Three progressively richer bands where the Looped output visibly grows. No
 * repetition with the copy above.
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
    output: "Live signals, sharper priorities, and approved work carried back into those systems.",
    fill: 2,
  },
  {
    label: "Connect deeply",
    inputs: "Continuous connection across your stack",
    output: "Continuous intelligence, and more of the work carried end to end and verified.",
    fill: 3,
  },
];

export function ConnectivitySection(): React.ReactElement {
  return (
    <Panel tone="stone" kicker="Connectivity">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <h2 className="text-balance display-section">Your stack doesn&rsquo;t have to change for your way of working to.</h2>
        </Reveal>
        <Reveal className="space-y-5 lg:col-span-7 lg:pt-2">
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            Connect the systems your teams already use. Looped reads the context it needs to keep the event picture
            current, and, where you authorise it, carries the work back into those same systems.
          </p>
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            Some of that runs through a direct connection to the system. Some is completed in the software itself. To
            your team it is one Looped workflow either way, with the same approvals and the same record. And you do not
            need to connect everything to start: begin with the data and knowledge you already have, and the picture
            deepens as more comes in.
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
          Useful from the first upload, and never a demo mode. You are never asked to replace what already works.{" "}
          <span className="font-semibold text-ink">
            Your systems remain your systems. Looped becomes the intelligence and action layer across them.
          </span>
        </p>
      </Reveal>
    </Panel>
  );
}
