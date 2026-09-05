"use client";

import { Panel } from "@/components/layout/Panel";
import { MediaFrame } from "@/components/media/MediaFrame";
import { Reveal } from "@/components/motion/Reveal";

/** RECOVERED ink split (5ca71de AiProblemSplitSection): two cards, a frame, an italic close. */
const TODAY = `Marketing, content, sales, sponsorship and operations each hold part of the picture. Registrations, CRM, campaign analytics, programme and budget each hold a different part. The calls that shape an edition get made in its busiest weeks, with the least context to hand, while competitor agendas, speakers and launches move the ground you are planning on. Then the edition closes and most of what it learned leaves with it.`;

const CHANGES = `One operating system that holds the whole picture — the event, its performance, the market and the wider industry — and keeps it current as the campaign moves. Every team works from the same understanding. Every recommendation arrives with its evidence. Every edition starts from what the last one learned.`;

export function ProblemSection(): React.ReactElement {
  return (
    <Panel tone="paper" index="01" kicker="The problem">
      <Reveal>
        <h2 className="max-w-3xl text-balance display-section">
          An event business runs on intelligence that has nowhere to live.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <Reveal className="rounded-[20px] border border-hairline bg-paper p-7 shadow-[var(--lift-light)]">
            <h3 className="text-xl text-ink">Where it lives today</h3>
            <p className="mt-4 text-base leading-relaxed text-slate">{TODAY}</p>
          </Reveal>
          <Reveal className="rounded-[20px] border border-transparent bg-[linear-gradient(160deg,rgba(124,58,237,0.07),rgba(236,72,153,0.07))] p-7">
            <h3 className="flex items-center gap-2.5 text-xl text-ink">
              <span className="h-2.5 w-2.5 rounded-full bg-grad-dot" aria-hidden />
              Where Looped puts it
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate">{CHANGES}</p>
          </Reveal>
        </div>
        <Reveal className="lg:col-span-5">
          <MediaFrame
            variant="app"
            tone="light"
            tag="Workspace"
            aspect="4 / 5"
            label="Every team, one understanding of the event"
            className="h-full"
          />
        </Reveal>
      </div>

      <Reveal>
        <p className="mx-auto mt-12 max-w-4xl text-balance text-center font-serif text-2xl italic leading-snug text-ink sm:text-3xl">
          Point solutions automate a task. None of them connect the intelligence.
        </p>
      </Reveal>
    </Panel>
  );
}
