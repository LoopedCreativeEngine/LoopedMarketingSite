"use client";

import { Reveal } from "@/components/motion/Reveal";

export function SocialProofBar(): React.ReactElement {
  return (
    <section className="border-y border-slate-200 bg-white py-10">
      <Reveal className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Trusted by leading B2B event organisers
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex h-14 items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-50 text-xs font-medium text-slate-400"
            >
              Logo
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
