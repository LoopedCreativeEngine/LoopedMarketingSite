"use client";

import { CompoundingFigure } from "@/components/brand/CompoundingFigure";
import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

const LEVELS = [
  { name: "One edition", body: "A live picture of where the event stands, what is changing and which decisions matter now." },
  { name: "Edition over edition", body: "The next edition starts with what worked, what failed and what the market taught you last time." },
  { name: "Across a brand", body: "Shared audiences, sponsors, themes and behaviour become intelligence each event can learn from." },
  { name: "Across the portfolio", body: "Patterns across events reveal common risks, growth opportunities and proven interventions worth reusing." },
  { name: "Across the organisation", body: "Intelligence becomes business knowledge instead of staying trapped in individual teams and events." },
];

export function CompoundingSection(): React.ReactElement {
  return (
    <Panel tone="paper" kicker="From one event to the whole business">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <h2 className="text-balance display-section">Event intelligence that compounds.</h2>
          <p className="mt-5 font-serif text-2xl italic leading-snug text-grad sm:text-3xl">Every edition should make the next one smarter.</p>
        </Reveal>
        <Reveal className="space-y-5 lg:col-span-7 lg:pt-2">
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            One event creates value. Several events create something more: intelligence that learns from each of them and
            carries the lesson to all of them. The more of your business that flows through Looped, the richer the
            picture every team works from, and the learning survives the edition, the reorganisation and the person who
            moves on.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-12 rounded-[20px] border border-hairline bg-stone p-5 shadow-[var(--lift-light)] sm:p-8">
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
