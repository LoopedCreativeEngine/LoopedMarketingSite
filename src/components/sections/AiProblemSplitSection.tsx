"use client";

import { Reveal } from "@/components/motion/Reveal";

export function AiProblemSplitSection(): React.ReactElement {
  return (
    <section className="bg-looped-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-balance text-center text-3xl tracking-tight text-[#f8f9ff] sm:text-4xl">
            Your teams are already using ChatGPT. That is not the problem.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-white/10 bg-looped-card p-7">
            <h3 className="text-2xl tracking-tight text-[#f8f9ff]">What is happening today</h3>
            <p className="mt-4 text-sm leading-relaxed text-[#c4c8d8] sm:text-base">
              Your marketing managers are already prompting ChatGPT for copy. Your commercial team is doing their own
              research. Your telesales team is working from last year&apos;s script. The outputs are not bad, but they are
              not connected.
            </p>
          </Reveal>
          <Reveal className="rounded-2xl border border-looped-violet-700 bg-looped-card p-7 shadow-[var(--looped-violet-glow)]">
            <h3 className="text-2xl tracking-tight text-[#f8f9ff]">What Looped changes</h3>
            <p className="mt-4 text-sm leading-relaxed text-[#c4c8d8] sm:text-base">
              Every event starts from scratch. Every team member works from their own judgment. And 100 events later,
              nothing compounds. Looped builds the intelligence foundation first, then makes that foundation available
              to every person on every team across every event in your portfolio.
            </p>
          </Reveal>
        </div>
        <Reveal>
          <p className="mx-auto mt-10 max-w-5xl text-center font-serif text-2xl italic text-[#f8f9ff] sm:text-3xl">
            Competitor landscape, audience mapping, market positioning, and commercial intelligence. One foundation.
            Every team.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
