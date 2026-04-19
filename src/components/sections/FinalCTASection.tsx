"use client";

import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";

import { colors } from "@/styles/design-system";

export function FinalCTASection(): React.ReactElement {
  return (
    <section className="py-20 sm:py-24" style={{ backgroundColor: colors.violet[700] }}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Ready to see it running on your events?</h2>
          <p className="mt-4 text-sm leading-relaxed text-indigo-100 sm:text-base">
            We&apos;ll configure a demo using an event in your sector and walk you through the full intelligence cascade
            — from brief to campaign-ready — in 45 minutes.
          </p>
          <Link
            href="/demo"
            className="mt-8 inline-flex cursor-pointer items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-indigo-800 shadow-lg transition-transform hover:scale-[1.02]"
          >
            Book a demo
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
