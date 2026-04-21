"use client";

import { Reveal } from "@/components/motion/Reveal";

const points = [
  {
    title: "Same intelligence. Every team member.",
    body: "Right now, output quality depends on experience, context, and how well someone prompts AI that day. In Looped, the approved intelligence layer is the same for the new hire and the director who's been on the event for two years. The research is done. The strategy is approved. Everyone builds from the same foundation.",
  },
  {
    title: "Free your team for the work that actually needs them",
    body: "Research, briefing, compiling, drafting — these are the tasks that consume the most time and benefit least from human creativity. Looped handles the groundwork. Your team applies judgment, relationships, and experience to what comes out of it.",
  },
  {
    title: "The right balance between automation and human control",
    body: "Looped is not about replacing your team with AI. It's about making sure no output reaches the next stage without a human deciding it's good enough. The platform does the groundwork. Your team approves what it builds on. That's the safe and right way to use AI at this scale.",
  },
];

export function RaiseBarSection(): React.ReactElement {
  return (
    <section className="bg-looped-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm text-[#c4c8d8]">Raise the bar for everyone</p>
          <h2 className="text-balance text-center text-3xl tracking-tight text-[#f8f9ff] sm:text-4xl">
            Good events shouldn&apos;t depend on who&apos;s having a good week.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
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
