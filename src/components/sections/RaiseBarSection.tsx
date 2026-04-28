"use client";

import { Reveal } from "@/components/motion/Reveal";

const points = [
  {
    title: "Built for events, not adapted for events",
    body: "Every module knows what a judging process is, what a nominations drive requires, and how entry deadlines chain into table sales. That knowledge is not in ChatGPT.",
  },
  {
    title: "Human in the loop by design",
    body: "Nothing happens without your approval. The cascade pauses at every output, waiting for a human decision. This is AI doing the research while your team makes the calls.",
  },
  {
    title: "Portfolio level intelligence, not event level noise",
    body: "Cross event learning means every edition is informed by what worked in the last one. Benchmark data means every event knows where it sits in the market. The platform gets smarter with every event that runs through it.",
  },
  {
    title: "Your team does not need to learn anything new",
    body: "No prompt engineering. No agent configuration. No training programme. The platform asks four questions and builds the rest.",
  },
];

export function RaiseBarSection(): React.ReactElement {
  return (
    <section className="bg-looped-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm text-[#c4c8d8]">Key differentiators</p>
          <h2 className="text-balance text-center text-3xl tracking-tight text-[#f8f9ff] sm:text-4xl">
            Why Looped Event OS is different
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
