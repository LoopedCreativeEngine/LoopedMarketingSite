"use client";

import { Panel } from "@/components/layout/Panel";
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
    <Panel tone="ink" index="07" kicker="Why it's different">
      <Reveal className="max-w-3xl">
        <p className="text-sm text-bone-dim">Key differentiators</p>
        <h2 className="mt-3 text-balance display-section">What generic AI can&apos;t give you.</h2>
      </Reveal>

      <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
        {points.map((item, index) => (
          <Reveal key={item.title} delay={(index % 2) * 0.08} className="border-t border-white/10 pt-6">
            <span className="font-mono text-sm text-iris">0{index + 1}</span>
            <h3 className="mt-3 text-xl leading-snug text-bone-text">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-bone-dim">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </Panel>
  );
}
