"use client";

import { CompoundingFigure } from "@/components/brand/CompoundingFigure";
import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

const LEVELS = [
  { name: "One event", body: "A current picture, better decisions and measured outcomes from the first edition." },
  { name: "Edition over edition", body: "Your next event shouldn't start from zero. What the audience did, what the market did and which calls paid off are there on day one." },
  { name: "Across a brand", body: "The awards learns from the conference. The conference learns from the awards." },
  { name: "Across the portfolio", body: "Shared audiences, shared sponsors and shared objections become shared intelligence, not six separate discoveries." },
  { name: "Across the organisation", body: "Intelligence stops living in individual teams and editions and becomes knowledge the business keeps." },
];

export function CompoundingSection(): React.ReactElement {
  return (
    <Panel tone="stone" index="04" kicker="From one event to the whole business">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <h2 className="text-balance display-section">Event intelligence that compounds.</h2>
          <p className="mt-5 font-serif text-2xl italic leading-snug text-grad sm:text-3xl">Every edition should make the next one smarter.</p>
        </Reveal>
        <Reveal className="space-y-5 lg:col-span-7 lg:pt-2">
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            One event creates value. Several events create something more: intelligence that learns from each of them
            and carries the lesson to all of them. The more of your business Looped sees, the richer the picture every
            team works from — and the learning survives the edition, the reorganisation and the person who moves on.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-12 rounded-[20px] border border-hairline bg-paper p-5 shadow-[var(--lift-light)] sm:p-8">
        <CompoundingFigure />
      </Reveal>

      <Reveal className="mt-10">
        <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
          {LEVELS.map((l, i) => (
            <div key={l.name} className="border-t border-hairline pt-4">
              <dt className="flex items-center gap-2.5 text-base font-semibold text-ink">
                <span className="font-mono text-xs text-purple">0{i + 1}</span>
                {l.name}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-slate">{l.body}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Panel>
  );
}
