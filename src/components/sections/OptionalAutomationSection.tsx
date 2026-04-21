"use client";

import { Reveal } from "@/components/motion/Reveal";

const cards = [
  {
    title: "Outbound voice campaigns",
    body: "Your team calls in-house or through an agency today. Retell voice agents briefed from your platform intelligence are an option — not a replacement. When you're ready to run automated outbound at scale, the agents already know your event, your audience, your objection responses, and your guardrails. Turn it on when it makes sense.",
  },
  {
    title: "Email and LinkedIn outreach",
    body: "Sequences drafted from your approved messaging architecture. Copy that reflects your personas, your proof points, your tone of voice — not a generic template. Draft in the platform, approve, deploy through your existing tools.",
  },
  {
    title: "Smarter data building",
    body: "Your Cognism or Apollo account connected to Looped means every list pull is briefed by your approved audience intelligence. The same data subscription, pulling exactly the right people for exactly the right event — not a generic sector list worked through manually.",
  },
];

export function OptionalAutomationSection(): React.ReactElement {
  return (
    <section className="bg-[#12141c] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-balance text-center text-3xl tracking-tight text-[#f8f9ff] sm:text-4xl">
            Start with intelligence. Go further when you&apos;re ready.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-[#c4c8d8] sm:text-base">
            The core platform works with your existing team and processes. These layers add automation when it makes
            sense for you — none of them are required.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <Reveal key={card.title} className="rounded-xl border border-white/10 bg-looped-card p-6">
              <h3 className="text-lg text-[#f8f9ff]">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#c4c8d8]">{card.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
