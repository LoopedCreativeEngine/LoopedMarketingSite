"use client";

import { Ribbon } from "@/components/brand/Ribbon";
import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

const SIGNALS = [
  { name: "Inside the event", body: "Programme, speakers, sponsors, entries, registrations, the decisions your teams take.", color: "#7c3aed" },
  { name: "Its performance", body: "Campaign response, audience behaviour, conversion, sales pace — and what sits behind them.", color: "#ec4899" },
  { name: "The market", body: "Competitor agendas, speaker moves, launches, positioning, partnerships.", color: "#fb923c" },
  { name: "The wider industry", body: "Regulation, company moves, investment, the themes gathering force in your sector.", color: "#a78bdb" },
];

export function ConnectedIntelligenceSection(): React.ReactElement {
  return (
    <Panel tone="stone" index="02" kicker="Connected intelligence">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <Reveal>
            <h2 className="text-balance display-section">Four signals. One picture. Kept in the loop.</h2>
            <p className="mt-6 text-base leading-relaxed text-slate sm:text-lg">
              Looped listens to what is happening inside the event, in its numbers, across the market and around the
              industry, and connects it into one current view of what matters now — for the marketer, the programme
              lead, the sponsorship director and the person running the room.
            </p>
          </Reveal>
          <Reveal className="mt-8">
            <dl className="grid gap-5 sm:grid-cols-2">
              {SIGNALS.map((s) => (
                <div key={s.name} className="border-t border-hairline pt-4">
                  <dt className="flex items-center gap-2.5 text-base font-semibold text-ink">
                    <span className="h-2 w-2 rounded-full" style={{ background: s.color }} aria-hidden />
                    {s.name}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-slate">{s.body}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
        <Reveal className="lg:col-span-6">
          <div className="relative mx-auto aspect-[5/4] w-full max-w-[34rem]">
            <Ribbon cxf={0.5} weight={0.8} />
          </div>
        </Reveal>
      </div>
    </Panel>
  );
}
