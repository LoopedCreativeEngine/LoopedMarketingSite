"use client";

import { Circle, GitBranch, Network } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";

const cards = [
  {
    icon: Circle,
    title: "ChatGPT, used the way most teams use it",
    body: "One question. One answer. No memory. Generic output because there's no event context. Every session starts from zero. Output quality depends on how well someone happened to phrase the prompt that day. Useful. Not compounding.",
    highlighted: false,
  },
  {
    icon: Network,
    title: "Linked AI agents",
    body: "Agents that pass data between them — but no quality gate. If the research agent produces something weak, it feeds directly into the copy agent. Bad intelligence compounds into bad outputs automatically. Faster than prompting. Less controllable.",
    highlighted: false,
  },
  {
    icon: GitBranch,
    title: "Looped cascade",
    body: "Every output approved by a human before it feeds the next module. Intelligence compounds correctly. Errors get caught before they propagate. Your team stays in control at every stage. Not faster than linked agents — smarter.",
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
            Not all AI is the same. Architecture matters.
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
        <Reveal>
          <p className="mx-auto mt-8 max-w-5xl text-center text-sm leading-relaxed text-[#c4c8d8]">
            Looped uses the right model for each task — Claude for strategy and reasoning, Gemini with live search
            grounding for competitive intelligence, Perplexity for sector research with citations, Apollo and Cognism
            for prospect data, Apify for web intelligence. Not one model doing everything adequately. Each task going to
            the tool built for it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
