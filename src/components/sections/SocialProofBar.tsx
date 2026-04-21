"use client";

import { Reveal } from "@/components/motion/Reveal";

export function SocialProofBar(): React.ReactElement {
  return (
    <section className="border-y border-white/10 bg-[#0d0d14] py-10">
      <Reveal className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-medium leading-relaxed text-slate-300 sm:text-base">
          Built for the teams running B2B conferences and awards across media, association, and specialist markets
        </p>
      </Reveal>
    </section>
  );
}
