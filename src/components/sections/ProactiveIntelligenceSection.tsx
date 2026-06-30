"use client";

import { Reveal } from "@/components/motion/Reveal";

export function ProactiveIntelligenceSection(): React.ReactElement {
  return (
    <section className="bg-looped-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm text-[#c4c8d8]">Something your current process can&apos;t do</p>
          <h2 className="text-balance text-center text-3xl tracking-tight text-[#f8f9ff] sm:text-4xl">
            Proactive intelligence. Not reactive research.
          </h2>
        </Reveal>
        <Reveal className="mt-10 rounded-2xl border border-looped-violet-700 bg-looped-card p-8 shadow-[var(--looped-violet-glow)]">
          <p className="text-base leading-relaxed text-[#c4c8d8] sm:text-lg">
            Looped doesn&apos;t wait to be asked. It watches the signals across your events and pushes the moment that
            matters, whether that&apos;s a renewal cooling, a segment under target or a prospect heating up, to a{" "}
            <span className="font-semibold text-[#f8f9ff]">live feed and dashboards</span> your team actually works from.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
