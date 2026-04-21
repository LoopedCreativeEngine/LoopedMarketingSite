"use client";

import { Reveal } from "@/components/motion/Reveal";

export function AiProblemSplitSection(): React.ReactElement {
  return (
    <section className="bg-looped-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-balance text-center text-3xl tracking-tight text-[#f8f9ff] sm:text-4xl">
            You&apos;re already using AI. Here&apos;s the problem.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-white/10 bg-looped-card p-7">
            <h3 className="text-2xl tracking-tight text-[#f8f9ff]">How your team uses AI today</h3>
            <p className="mt-4 text-sm leading-relaxed text-[#c4c8d8] sm:text-base">
              Your team is already in ChatGPT. Writing prompts, getting answers, starting from scratch every time. Every
              session has no memory of your event. No context from last week&apos;s research. No connection to what the
              content team approved yesterday. One team member prompts one way. Another prompts differently. Outputs
              vary. Nothing compounds. And the moment the session closes, it&apos;s gone.
            </p>
          </Reveal>
          <Reveal className="rounded-2xl border border-looped-violet-700 bg-looped-card p-7 shadow-[var(--looped-violet-glow)]">
            <h3 className="text-2xl tracking-tight text-[#f8f9ff]">How Looped works instead</h3>
            <p className="mt-4 text-sm leading-relaxed text-[#c4c8d8] sm:text-base">
              Looped runs the same intelligence once — approved by your team — and makes it available to every module
              and every team member for the life of the event. Industry research approved once feeds competitor
              analysis. Competitor analysis approved feeds audience mapping. Audience mapping feeds personas. Personas
              feed messaging. Messaging feeds every campaign. Each layer builds on what came before. Human judgment at
              every gate.
            </p>
          </Reveal>
        </div>
        <Reveal>
          <p className="mx-auto mt-10 max-w-5xl text-center font-serif text-2xl italic text-[#f8f9ff] sm:text-3xl">
            That&apos;s the difference between AI as a search engine and AI as your team&apos;s intelligence layer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
