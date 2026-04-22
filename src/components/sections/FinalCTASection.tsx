"use client";

import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";

export function FinalCTASection(): React.ReactElement {
  return (
    <section className="bg-[#29154f] py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-serif text-balance text-4xl tracking-tight text-white sm:text-5xl">
            Built for the teams running the UK&apos;s best B2B conferences and awards.
          </h2>
          <Link
            href="/demo"
            className="mt-8 inline-flex cursor-pointer items-center justify-center rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
          >
            Start the conversation
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
