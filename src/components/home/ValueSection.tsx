"use client";

import { SignalLoopFigure } from "@/components/brand/SignalLoopFigure";
import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

const VIEWS = [
  { name: "Your event", body: "Programme, speakers, entries, sponsors, bookings and where the edition stands today." },
  { name: "Your audience and performance", body: "Who is responding, who is not, what is converting and what is changing week by week." },
  { name: "Your market", body: "Competitor moves, sector shifts, new launches and signals that should change the plan." },
  { name: "Your team's actions", body: "Speaker confirmations, agenda changes, sponsor wins, campaign pivots and milestone decisions." },
];

export function ValueSection(): React.ReactElement {
  return (
    <Panel tone="paper" kicker="What you get">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <h2 className="text-balance display-section">A better view of your event, kept current for you.</h2>
        </Reveal>
        <Reveal className="space-y-5 lg:col-span-7 lg:pt-2">
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            Your teams already have the expertise, the judgement and the relationships. What is hard to hold is the whole
            picture in one place, current on the day a decision has to be made. Looped brings together what your teams
            already know with the signals spread across the event business, and keeps that picture current for you.
          </p>
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            Signals come in. Looped works out what they mean for this event, recommends the strongest move, carries the
            decision you approve into action, measures what changed and remembers the lesson. Every edition starts better
            informed than the last.
          </p>
        </Reveal>
      </div>
      <Reveal className="mt-12 rounded-[20px] border border-hairline bg-paper p-5 shadow-[var(--lift-light)] sm:p-8">
        <SignalLoopFigure />
      </Reveal>
      <Reveal className="mt-10">
        <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {VIEWS.map((v, i) => (
            <div key={v.name} className="border-t border-hairline pt-4">
              <dt className="flex items-center gap-2.5 text-base font-semibold text-ink">
                <span className="h-2 w-2 rounded-full" style={{ background: ["#7c3aed", "#ec4899", "#fb923c", "#a78bdb"][i] }} aria-hidden />
                {v.name}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-slate">{v.body}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Panel>
  );
}
