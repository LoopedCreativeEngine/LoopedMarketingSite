"use client";

import { Reveal } from "@/components/motion/Reveal";

const BODY_PARAS = [
  `The first independent benchmark of AI in events reached three conclusions, and all three describe Looped: it is built on your data, embedded in your workflow, and governed by design.`,
  `Then the finding that matters most. The industry can build, but it cannot yet prove the build pays. Looped is built on the operational and commercial work that already pays, and evidences it honestly: observed, not projected, and when it does not know, it says so.`,
];

const STATS = [
  {
    figure: "64 of 85",
    body: "event-AI products run on third-party models. The advantage is data and workflow, not the model.",
    highlighted: false,
  },
  {
    figure: "11 of 85",
    body: "could attach a real financial figure to their impact. That is the proof gap.",
    highlighted: false,
  },
  {
    figure: "Operational and commercial",
    body: "work is the most proven AI in events, exactly where Looped works.",
    highlighted: true,
  },
];

export function WhyNowSection(): React.ReactElement {
  return (
    <section className="bg-looped-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#15131f] to-[#101219] px-6 py-12 sm:px-12 sm:py-16">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-violet-200/80">Why now</p>
            <h2 className="mt-4 text-balance text-3xl tracking-tight text-[#f8f9ff] sm:text-4xl">
              The industry&apos;s own benchmark already describes Looped.
            </h2>
          </Reveal>

          <Reveal className="mx-auto mt-8 max-w-3xl space-y-5">
            {BODY_PARAS.map((para) => (
              <p key={para.slice(0, 24)} className="text-sm leading-relaxed text-[#c4c8d8] sm:text-base">
                {para}
              </p>
            ))}
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {STATS.map((stat) => (
              <Reveal
                key={stat.figure}
                className={`rounded-2xl border p-6 ${
                  stat.highlighted
                    ? "border-looped-violet-700 bg-looped-violet-700/12 shadow-[var(--looped-violet-glow)]"
                    : "border-white/10 bg-looped-card"
                }`}
              >
                <p className="font-serif text-2xl leading-tight text-violet-300 sm:text-3xl">{stat.figure}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#c4c8d8]">{stat.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <p className="text-xs leading-relaxed text-[#c4c8d8]/70">
              Source: Event Tech Live, The State of AI in Event Technology, First Edition (Parry, 2026).{" "}
              <a
                href="https://eventtechlive.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-300 underline decoration-violet-300/40 underline-offset-2 transition-colors hover:text-violet-200"
              >
                eventtechlive.com
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
