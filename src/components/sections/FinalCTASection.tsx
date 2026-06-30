"use client";

import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";

const FOUNDER_BODY = `Looped is technology underpinned by AI to connect, streamline and enhance the work great event teams already do, and to overcome the pain points every event team knows: intelligence that arrives too late to use, work that starts from zero every cycle, and AI that's everywhere but joined up nowhere. Built by people who've run events, for the people who run them.`;

export function FinalCTASection(): React.ReactElement {
  return (
    <section className="bg-[#29154f] py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-serif text-balance text-4xl tracking-tight text-white sm:text-5xl">
            Built by event professionals, underpinned by AI.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[#d9d4f0] sm:text-lg">
            {FOUNDER_BODY}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/demo"
              className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#29154f] shadow-lg transition-transform hover:scale-[1.02]"
            >
              Apply to pilot
            </Link>
            <Link
              href="/demo"
              className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
            >
              Join the waitlist
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
