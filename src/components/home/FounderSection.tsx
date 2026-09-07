"use client";

import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";

/**
 * "Why Looped exists". People-first founder note on the ink plate. No decorative
 * loop graphic here: the only brand loop on the page is the animated Ribbon in
 * the hero. The repository holds no portrait asset, so the slot is a monogram.
 */
export function FounderSection(): React.ReactElement {
  return (
    <section id="why-looped-exists" className="on-night relative scroll-mt-24 overflow-hidden bg-night py-24 text-mist sm:py-32">
      <div className="relative mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <span className="kicker text-lavender">Why Looped exists</span>
          <h2 className="mt-6 max-w-2xl text-balance display-section">Built for the people who make events happen.</h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-mist sm:text-lg">
            <p>
              I spent years working inside event teams, focused on audience growth, campaign performance and helping each
              edition reach its potential.
            </p>
            <p>
              What stayed with me was not a lack of talent or effort. It was how hard it was to keep the whole picture
              current. A new speaker would be confirmed. A campaign would move. A deadline would change. A sponsor would
              come in. The market would shift. Important context existed, but it did not always reach the right person at
              the right moment.
            </p>
            <p>
              Too much time went into reconstructing what had changed, chasing updates and deciding what to do next with
              only part of the picture.
            </p>
            <p>
              I built Looped because event specialists deserve better information at the moment they have to make the
              call. Not AI for the sake of AI, and not another system teams have to become experts in. The complexity
              should sit behind the product. The experience should feel simple.
            </p>
            <p>
              Looped brings together the systems, signals and intelligence around an event, then gives people a clearer
              view of what matters, what changed and what the strongest move looks like.
            </p>
            <p>The people still make the judgement. Looped helps make sure they have the right information when they do.</p>
          </div>
          <div className="mt-9 flex items-center gap-4">
            <span
              data-media-slot="Founder portrait"
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 bg-night-raised font-serif text-lg text-lavender"
              aria-hidden
            >
              NE
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
