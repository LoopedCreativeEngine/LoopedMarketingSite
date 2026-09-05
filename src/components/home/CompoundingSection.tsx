"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

/** RECOVERED stat-card strip (5ca71de WhyNowSection). Shapes only — no invented figures. */
const EDITIONS = [
  { label: "Edition 1", inherits: "Starts from the brief." },
  { label: "Edition 2", inherits: "Inherits the audience response and what the market did." },
  { label: "Edition 3", inherits: "Inherits which decisions paid off, and which didn't." },
  { label: "Across the portfolio", inherits: "Inherits what every other event in the business learned." },
];

export function CompoundingSection(): React.ReactElement {
  return (
    <Panel tone="paper" index="07" kicker="Portfolio learning">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <h2 className="text-balance display-section">Event intelligence that compounds.</h2>
        </Reveal>
        <Reveal className="space-y-5 lg:col-span-7 lg:pt-2">
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            The next edition should benefit from everything the last one learned. In most businesses it doesn&apos;t.
            The knowledge is in people&apos;s heads, in old decks, in a system nobody reopens — and an event sits inside
            a brand, inside a portfolio, inside a business, with learning that should run across every layer.
          </p>
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            Looped holds it: how the audience responded, what the market did, which decisions paid off. It carries it
            across editions and across the portfolio, so institutional knowledge stops leaving when an edition closes
            or a team member does. Your intelligence is yours. It is never used for someone else&apos;s events.
          </p>
        </Reveal>
      </div>
      <Reveal className="mt-14 overflow-hidden rounded-2xl border border-[rgba(15,23,42,0.12)] bg-stone shadow-[var(--lift-light)]">
        <div className="grid divide-y divide-[rgba(15,23,42,0.10)] md:grid-cols-4 md:divide-x md:divide-y-0">
          {EDITIONS.map((e, i) => (
            <div key={e.label} className={`relative p-7 sm:p-8 ${i === EDITIONS.length - 1 ? "bg-[rgba(124,58,237,0.05)]" : ""}`}>
              {i === EDITIONS.length - 1 ? <span className="absolute right-6 top-7 h-2 w-2 rounded-full bg-purple" aria-hidden /> : null}
              <div className="flex h-24 flex-col-reverse gap-1.5" aria-hidden>
                {Array.from({ length: i + 1 }).map((_, layer) => (
                  <div key={layer} className={`h-4 w-full rounded-sm ${layer === i ? "bg-purple" : "bg-purple/15"}`} />
                ))}
              </div>
              <p className="mt-5 font-serif text-xl text-ink">{e.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate">{e.inherits}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Panel>
  );
}
