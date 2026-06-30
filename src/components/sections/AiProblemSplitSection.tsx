"use client";

import { Reveal } from "@/components/motion/Reveal";

const PROBLEM_PARAS = [
  `Right now your marketers, content leads and sales teams are in ChatGPT and Claude every day, in separate accounts, working in isolation. At best, your most advanced people have wired up connected tools, MCPs and Skills. Most haven't, and don't know what those even are, let alone how to set them up safely.`,
  `Even where it works, there's a tax. Every half-decent output starts with feeding in the context: the event, the audience, the history, the brief. Then you iterate three, four, five times on what comes back, and often it takes as long as just doing the work by hand. Almost nobody has put guardrails or a legally compliant, top-down approach in place that's tailored to how the business actually needs to use AI. So teams are left guessing where to start, what "good" looks like, and whether they're exposing the business while they do it.`,
  `That's fair enough. Event professionals shouldn't have to become tech experts overnight in a world moving this fast. It's exciting work, but their job is making the right calls and doubling down on the event experience your audience deserves, not orchestrating connected agents in a terminal or maintaining workflows.`,
];

const ANSWER_PARA = `One platform that carries all of that for them. Purpose-built, easy to use, and legally compliant, holding the intelligence so your team doesn't have to keep it in their heads or rebuild it every cycle. It works whatever the level of skill, brand or sector experience on the team, and it gets sharper with every edition.`;

export function AiProblemSplitSection(): React.ReactElement {
  return (
    <section className="bg-looped-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-balance text-center text-3xl tracking-tight text-[#f8f9ff] sm:text-4xl">
            Your teams are already using AI. Becoming AI experts shouldn&apos;t be their job.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-white/10 bg-looped-card p-7">
            <h3 className="text-2xl tracking-tight text-[#f8f9ff]">What&apos;s happening today</h3>
            {PROBLEM_PARAS.map((para) => (
              <p key={para.slice(0, 24)} className="mt-4 text-sm leading-relaxed text-[#c4c8d8] sm:text-base">
                {para}
              </p>
            ))}
          </Reveal>
          <Reveal className="rounded-2xl border border-looped-violet-700 bg-looped-card p-7 shadow-[var(--looped-violet-glow)]">
            <h3 className="text-2xl tracking-tight text-[#f8f9ff]">What Looped changes</h3>
            <p className="mt-4 text-sm leading-relaxed text-[#c4c8d8] sm:text-base">{ANSWER_PARA}</p>
          </Reveal>
        </div>
        <Reveal>
          <p className="mx-auto mt-10 max-w-5xl text-center font-serif text-2xl italic text-[#f8f9ff] sm:text-3xl">
            The intelligence lives in the platform and compounds. It doesn&apos;t walk out the door when someone leaves.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
