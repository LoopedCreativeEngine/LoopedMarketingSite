"use client";

import { Reveal } from "@/components/motion/Reveal";

const PROBLEM_PARAS = [
  `Your marketers, content leads and sales teams are already in ChatGPT and Claude every day, in separate accounts, reinventing the context and iterating five times on every output. Almost nobody has put guardrails or a compliant, top-down approach in place. Becoming AI experts was never their job.`,
];

const ANSWER_PARA = `One platform that carries all of it. Purpose-built, easy to use and compliant, holding the intelligence so your team never rebuilds it from zero, and getting sharper with every edition.`;

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
