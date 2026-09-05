"use client";

import { Circle, GitBranch, Network } from "lucide-react";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

const cards = [
  {
    icon: Circle,
    title: "Isolated prompting",
    body: `One person, one chat, one answer, gone when the tab closes. No memory of your event, no connection to your data.`,
    highlighted: false,
  },
  {
    icon: Network,
    title: "Linked agents",
    body: `Better, but still a stack you have to build, govern and maintain yourself.`,
    highlighted: false,
  },
  {
    icon: GitBranch,
    title: "Looped",
    body: `Domain-tuned intelligence that builds and validates your context across every pillar and event, then feeds it live to the agents that surface decisions and draft the work. An event brain that sharpens each cycle, so you never start from zero.`,
    highlighted: true,
  },
];

export function CascadeVsPromptingSection(): React.ReactElement {
  return (
    <Panel tone="night" index="05" kicker="The cascade">
      <Reveal className="max-w-3xl">
        <p className="text-sm text-mist">Why the cascade beats prompting</p>
        <h2 className="mt-3 text-balance display-section">
          A prompt gives you an answer. A cascade gives you an advantage.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {cards.map((card) => (
          <Reveal
            key={card.title}
            className={`rounded-2xl border p-7 ${
              card.highlighted
                ? "border-pink/60 bg-[rgba(167,139,219,0.09)] shadow-[var(--lavender-emph)]"
                : "border-white/10 bg-night-raised"
            }`}
          >
            <card.icon className={`h-7 w-7 ${card.highlighted ? "text-lavender" : "text-mist"}`} aria-hidden />
            <h3 className="mt-5 flex items-center gap-2 text-xl text-snow">
              {card.title}
              {card.highlighted ? <span className="h-2 w-2 rounded-full bg-pink" aria-hidden /> : null}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-mist">{card.body}</p>
          </Reveal>
        ))}
      </div>
    </Panel>
  );
}
