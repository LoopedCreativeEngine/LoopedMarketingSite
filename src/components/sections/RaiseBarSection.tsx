"use client";

import { Reveal } from "@/components/motion/Reveal";

const points = [
  {
    title: `Built for events, not adapted to them.`,
    body: `Tuned to how conference and awards businesses actually run: the campaign timings, the commercial motions, the language of the trade.`,
  },
  {
    title: `Grounded in context, so it doesn't hallucinate.`,
    body: `Looped works from your real event data, not a blank prompt. When the data isn't there, it tells you plainly instead of inventing a statistic, a name or a number to look complete. No hallucinations. No AI slop.`,
  },
  {
    title: `Guardrails and compliance built in.`,
    body: `The industry benchmark found governance is now the floor, so the real question isn't whether a platform has guardrails, it's how it knows they work. Looped grounds every output in your approved data, keeps a human at every decision that carries a consequence, and logs the lot. Enterprise-grade by design, not a governance risk waiting to happen.`,
  },
  {
    title: `A smaller stack, not a bigger one.`,
    body: `One platform replacing a sprawl of point tools: fewer logins, fewer bills, and intelligence that finally compounds.`,
  },
];

export function RaiseBarSection(): React.ReactElement {
  return (
    <section className="bg-looped-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm text-[#c4c8d8]">Key differentiators</p>
          <h2 className="text-balance text-center text-3xl tracking-tight text-[#f8f9ff] sm:text-4xl">
            What generic AI can&apos;t give you.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {points.map((item) => (
            <Reveal key={item.title} className="rounded-xl border border-white/10 bg-looped-card p-6">
              <h3 className="text-lg text-[#f8f9ff]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#c4c8d8]">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
