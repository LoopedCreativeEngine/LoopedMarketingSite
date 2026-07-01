"use client";

import { Panel } from "@/components/layout/Panel";
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
    <Panel tone="bone" index="02" kicker="Why now">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <h2 className="text-balance display-section">The industry&apos;s own benchmark already describes Looped.</h2>
        </Reveal>
        <Reveal className="space-y-5 lg:col-span-7 lg:pt-2">
          {BODY_PARAS.map((para) => (
            <p key={para.slice(0, 24)} className="text-base leading-relaxed text-graphite sm:text-lg">
              {para}
            </p>
          ))}
        </Reveal>
      </div>

      <Reveal className="mt-14 overflow-hidden rounded-2xl border border-[rgba(23,19,31,0.12)] bg-paper shadow-[var(--lift-light)]">
        <div className="grid divide-y divide-[rgba(23,19,31,0.10)] md:grid-cols-3 md:divide-x md:divide-y-0">
          {STATS.map((stat) => (
            <div
              key={stat.figure}
              className={`relative p-7 sm:p-8 ${stat.highlighted ? "bg-[rgba(67,56,202,0.05)]" : ""}`}
            >
              {stat.highlighted ? (
                <span className="absolute right-6 top-7 h-2 w-2 rounded-full bg-violet" aria-hidden />
              ) : null}
              <p
                className={`font-serif leading-[0.95] tracking-tight ${
                  stat.highlighted ? "text-2xl text-violet sm:text-3xl" : "text-4xl text-ink-text sm:text-5xl"
                }`}
              >
                {stat.figure}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-graphite">{stat.body}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <p className="mt-6 text-xs leading-relaxed text-muted-ink">
          Source: Event Tech Live, The State of AI in Event Technology, First Edition (Parry, 2026).{" "}
          <a
            href="https://eventtechlive.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-violet underline decoration-violet/40 underline-offset-2 transition-colors hover:decoration-violet"
          >
            eventtechlive.com
          </a>
        </p>
      </Reveal>
    </Panel>
  );
}
