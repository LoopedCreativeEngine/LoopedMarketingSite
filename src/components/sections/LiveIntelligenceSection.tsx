"use client";

import { Reveal } from "@/components/motion/Reveal";

const BODY = `Looped doesn't wait to be asked. It watches the signals across your events and pushes the moment that matters, a renewal cooling, a segment under target, a prospect heating up, to live dashboards and a continuous feed your team actually works from. No more digging through scattered AI chats. No more acting on insight after the moment has gone.`;

export function LiveIntelligenceSection(): React.ReactElement {
  return (
    <section className="bg-[#12141c] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl tracking-tight text-[#f8f9ff] sm:text-4xl">
            Your intelligence, live, not buried in a chat history.
          </h2>
        </Reveal>
        <Reveal className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-looped-card shadow-[var(--looped-violet-glow)]">
          <div className="flex items-center gap-2.5 border-b border-white/10 bg-[#12141c] px-5 py-3">
            <span
              className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-violet-400 shadow-[0_0_8px_2px_rgba(167,139,250,0.7)]"
              aria-hidden
            />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-violet-200/80">Live feed</span>
          </div>
          <div className="px-6 py-8 sm:px-10 sm:py-10">
            <p className="text-base leading-relaxed text-[#c4c8d8] sm:text-lg">{BODY}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
