"use client";

import { LoopFigure } from "@/components/brand/LoopFigure";
import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

/** RECOVERED two-column composition (5ca71de BuiltForHowEventsMoveSection) with the Loop in the media slot. */
const SIGNALS = [
  { name: "Inside the event", body: "Programme, speakers, sponsors, entries, registrations, the decisions your teams take." },
  { name: "Its performance", body: "Campaign response, audience behaviour, conversion, sales pace — and what sits behind them." },
  { name: "The market", body: "Competitor agendas, speaker moves, launches, positioning, partnerships." },
  { name: "The wider industry", body: "Regulation, company moves, investment, the themes gathering force in your sector." },
];

export function ConnectedIntelligenceSection(): React.ReactElement {
  return (
    <Panel tone="bone" index="02" kicker="Connected intelligence">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <Reveal>
            <h2 className="text-balance display-section">Four signals. One picture. Kept in the loop.</h2>
            <p className="mt-6 text-base leading-relaxed text-graphite sm:text-lg">
              Looped listens to what is happening inside the event, in its numbers, across the market and around the
              industry, and connects it into one current view of what matters now — for the marketer, the programme
              lead, the sponsorship director and the person running the room.
            </p>
          </Reveal>
          <Reveal className="mt-8">
            <dl className="grid gap-5 sm:grid-cols-2">
              {SIGNALS.map((s) => (
                <div key={s.name} className="border-t border-[rgba(23,19,31,0.12)] pt-4">
                  <dt className="text-base font-semibold text-ink-text">{s.name}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-graphite">{s.body}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
        <Reveal className="lg:col-span-6">
          <div className="px-12 py-8 sm:px-16">
            <LoopFigure />
          </div>
          <p className="mt-2 text-center kicker text-muted-ink">
            <span className="sm:hidden">Event · Performance · Market · Industry</span>
            <span className="hidden sm:inline">The Loop — one line, one node, every signal on it</span>
          </p>
        </Reveal>
      </div>
    </Panel>
  );
}
