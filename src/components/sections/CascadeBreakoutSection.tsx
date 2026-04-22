"use client";

import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";

export function CascadeBreakoutSection(): React.ReactElement {
  return (
    <section className="bg-looped-bg py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-serif text-balance text-4xl tracking-tight text-[#f8f9ff] sm:text-5xl">
            Events teams running on Looped don&apos;t go back.
          </p>
          <Link
            href="/demo"
            className="mt-8 inline-flex cursor-pointer items-center justify-center rounded-lg bg-looped-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-[var(--looped-violet-glow)] transition-transform hover:scale-[1.02]"
          >
            See it for your events
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
