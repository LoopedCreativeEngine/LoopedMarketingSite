"use client";

import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";

export function BuiltForHowEventsMoveSection(): React.ReactElement {
  return (
    <section className="bg-looped-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#171a24] to-[#101219] px-6 py-12 sm:px-12 sm:py-16">
          <Reveal className="mx-auto max-w-3xl">
            <h2 className="text-balance text-3xl tracking-tight text-[#f8f9ff] sm:text-4xl">
              Built for how events actually move.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#c4c8d8] sm:text-lg">
              Every plan changes the moment a date slips or a speaker drops. So Looped starts with the mix, the blend of
              personas, seniority and sectors that makes the room work, then tracks your bookings against it live and
              hands you the weekly call: double down on what is converting, or pivot on what is not.
            </p>
          </Reveal>
          <Reveal className="mx-auto mt-8 max-w-3xl">
            <p className="border-l-2 border-looped-violet-700 pl-5 font-serif text-2xl italic text-[#f8f9ff] sm:text-3xl">
              It&apos;s no longer a question of return on investment. It&apos;s return on intention and effort.
            </p>
          </Reveal>
          <Reveal className="mx-auto mt-8 max-w-3xl">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-1 text-sm font-semibold text-violet-300 transition-colors hover:text-violet-200"
            >
              See how the framework stays live across the whole cycle
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
