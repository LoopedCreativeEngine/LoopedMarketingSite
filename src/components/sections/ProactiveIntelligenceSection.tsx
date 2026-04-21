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
          <p className="text-sm leading-relaxed text-[#c4c8d8] sm:text-base">
            When a competitor event announces a date that clashes with yours, your team finds out when someone happens
            to spot it. When a competing event drops its pricing, you find out when a prospect mentions it on a call.
            When a new player enters your sector, you find out too late.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#c4c8d8] sm:text-base">
            Looped&apos;s intelligence agents actively monitor your competitive landscape — not when you think to ask, but
            continuously. When a material signal is detected — a competitor pivots their format, moves their date,
            reveals a headline speaker, changes pricing — it surfaces immediately in your weekly digest with a specific
            assessment of what it means for your event and a recommended response.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#c4c8d8] sm:text-base">Not a notification. A recommendation. With context.</p>
          <p className="mt-6 border-l-2 border-looped-violet-700 pl-4 text-sm leading-relaxed text-[#f8f9ff] sm:text-base">
            The same applies across your campaigns. If registration velocity drops below forecast, the platform flags it
            before it becomes a problem — with specific recommendations on where to reallocate budget or adjust
            messaging.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
