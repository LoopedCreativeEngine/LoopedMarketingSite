"use client";

import Link from "next/link";

import { LoopMark } from "@/components/brand/LoopMark";
import { Reveal } from "@/components/motion/Reveal";

/**
 * "Why Looped exists". RECOVERED closing-plate composition (5ca71de
 * FinalCTASection: ink, watermark LoopMark, centred column) with a founder
 * signature. The repository holds no portrait asset — the slot is marked.
 */
export function FounderSection(): React.ReactElement {
  return (
    <section id="why-looped-exists" className="on-night relative scroll-mt-24 overflow-hidden bg-night py-24 text-mist sm:py-32">
      <LoopMark
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 text-lavender opacity-[0.06]"
      />
      <div className="relative mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="kicker text-lavender">11</span>
            <span className="kicker text-mist">Why Looped exists</span>
          </div>
          <h2 className="mt-6 max-w-2xl text-balance display-section">Built by someone who has stood at the back of the room.</h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-mist sm:text-lg">
            <p>
              I have run the campaigns, sold the sponsorship and sat in the planning meetings where the best people in
              the business spend their week reconstructing context and coordinating repetitive work. Their real value
              is judgement, creativity, relationships and a feel for the market — and those are the things the week
              leaves least room for.
            </p>
            <p>
              The systems the industry runs on preserve workflows far better than they preserve intelligence. They
              remember what was done. They forget why, what it changed, and what the market did next.
            </p>
            <p>Looped exists to strengthen those people, not to replace them.</p>
          </div>
          <div className="mt-9 flex items-center gap-4">
            <span
              data-media-slot="Founder portrait"
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 bg-night-raised"
              aria-hidden
            >
              <LoopMark className="h-6 w-6 text-lavender" />
            </span>
            <div>
              <p className="font-serif text-xl text-snow">Natalie Entwistle</p>
              <p className="kicker mt-1 text-mist">Founder, Looped</p>
            </div>
          </div>
          <Link
            href="/newsroom/the-art-is-yours"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-lavender transition-colors hover:text-snow"
          >
            Read the founder&apos;s note
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
