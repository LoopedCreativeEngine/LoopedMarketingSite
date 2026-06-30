"use client";

import { Circle, GitBranch, Network } from "lucide-react";

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
    <section className="bg-[#12141c] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm text-[#c4c8d8]">Why the cascade beats prompting</p>
          <h2 className="text-balance text-center text-3xl tracking-tight text-[#f8f9ff] sm:text-4xl">
            A prompt gives you an answer. A cascade gives you an advantage.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal
              key={card.title}
              className={`rounded-2xl border p-6 ${
                card.highlighted
                  ? "border-violet-400/80 bg-[#1c1f31] shadow-[0_0_0_1px_rgba(167,139,250,0.5),0_14px_28px_-20px_rgba(167,139,250,0.8)] md:-mt-2 md:scale-[1.03]"
                  : index === 0
                    ? "border-white/10 bg-[#171a24]"
                    : "border-white/10 bg-[#1c2030]"
              }`}
            >
              <card.icon className={`h-7 w-7 ${card.highlighted ? "text-violet-300" : "text-[#c4c8d8]"}`} aria-hidden />
              <h3 className="mt-4 text-lg text-[#f8f9ff]">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#c4c8d8]">{card.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
