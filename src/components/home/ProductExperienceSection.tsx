"use client";

import { LoopMark } from "@/components/brand/LoopMark";
import { Panel } from "@/components/layout/Panel";
import { MediaFrame } from "@/components/media/MediaFrame";
import { Reveal } from "@/components/motion/Reveal";

/** RECOVERED frame-beside-copy composition (5ca71de LiveIntelligenceSection) with an illustrative exchange in the frame. */
const MODES = [
  { name: "Ask", body: "Ask what is happening across an event or a portfolio and get an answer grounded in current context, not a blank prompt." },
  { name: "Explore", body: "Open the evidence behind any answer: the signals, the numbers, the reasoning, the source." },
  { name: "Instruct", body: "Hand over the work. Routine, authorised work proceeds; anything consequential comes back for your approval." },
];

const SURFACED = [
  "A competitor has added a speaker your programme shortlisted.",
  "Registration pace in one segment has moved against the campaign plan.",
  "A sponsor renewal conversation has gone quiet.",
];

export function ProductExperienceSection(): React.ReactElement {
  return (
    <Panel tone="stone" index="08" kicker="Working with Looped">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <h2 className="text-balance display-section">Ask · Explore · Instruct</h2>
          <p className="mt-6 text-base leading-relaxed text-slate sm:text-lg">
            An operating system, not a chatbot. You work with Looped the way you would with a chief of staff who has read
            everything: ask, look at the evidence, decide, and hand over the work.
          </p>
          <div className="mt-8 space-y-5">
            {MODES.map((m, i) => (
              <div key={m.name} className="flex items-start gap-5 border-t border-[rgba(15,23,42,0.12)] pt-5">
                <span className="mt-1 font-mono text-sm text-purple">0{i + 1}</span>
                <div>
                  <h3 className="text-2xl">{m.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="lg:order-first">
          <MediaFrame variant="app" tone="ink" tag="Illustrative" aspect="4 / 4.4" label="Chief of Staff · one point of control across the event">
            <div className="absolute inset-0 flex flex-col gap-4 p-5 text-sm sm:p-6">
              <p className="self-end rounded-2xl rounded-br-md border border-white/10 bg-night-raised px-4 py-3 text-snow">
                What has moved on this event since Monday that I should know about?
              </p>
              <div className="rounded-2xl rounded-bl-md border border-pink/40 bg-[rgba(167,139,219,0.08)] p-4">
                <p className="flex items-center gap-2 kicker text-lavender">
                  <LoopMark className="h-3.5 w-3.5" /> Looped
                </p>
                <p className="mt-3 text-snow">Three things worth your attention. The evidence for each is attached.</p>
                <ul className="mt-3 space-y-2">
                  {SURFACED.map((line) => (
                    <li key={line} className="flex items-start gap-2 text-mist">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink" aria-hidden />
                      {line}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Explore evidence", "Draft a response", "Instruct"].map((a) => (
                    <span key={a} className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-snow">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-auto pb-6 kicker text-mist/80">Consequential actions wait for approval</p>
            </div>
          </MediaFrame>
        </Reveal>
      </div>
    </Panel>
  );
}
