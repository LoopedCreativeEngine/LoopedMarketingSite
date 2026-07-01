"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

const cards = [
  {
    title: "Outbound voice campaigns",
    body: `Your team calls in-house or through an agency today. Voice agents briefed from your platform intelligence are an option, not a replacement. When you're ready to run automated outbound at scale, the agents already know your event, your audience, your objection responses and your guardrails. You turn it on when it makes sense.`,
  },
  {
    title: "Email and LinkedIn outreach",
    body: `Sequences drafted from your approved messaging architecture. Copy that reflects your personas, your proof points and your tone of voice, not a generic template. Draft in the platform, approve, then deploy through your existing tools.`,
  },
  {
    title: "Smarter data building",
    body: `Your data provider account connected to Looped means every list pull is briefed by your approved audience intelligence. The same subscription, pulling exactly the right people for exactly the right event, not a generic sector list worked through by hand.`,
  },
];

export function OptionalAutomationSection(): React.ReactElement {
  return (
    <Panel tone="bone" index="08" kicker="Automation layers">
      <Reveal className="max-w-3xl">
        <h2 className="text-balance display-section">Start with intelligence. Go further when you&apos;re ready.</h2>
        <p className="mt-5 text-base leading-relaxed text-graphite sm:text-lg">
          These layers add automation when it makes sense, never before. Looped surfaces and recommends, your team
          approves, and only then does the platform execute. Nothing fires without a human decision.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {cards.map((card, index) => (
          <Reveal
            key={card.title}
            delay={index * 0.06}
            className="rounded-2xl border border-[rgba(23,19,31,0.12)] bg-paper p-7 shadow-[var(--lift-light)]"
          >
            <span className="kicker text-violet">Layer 0{index + 1}</span>
            <h3 className="mt-4 text-xl text-ink-text">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-graphite">{card.body}</p>
          </Reveal>
        ))}
      </div>
    </Panel>
  );
}
