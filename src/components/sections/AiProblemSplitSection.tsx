"use client";

import { Panel } from "@/components/layout/Panel";
import { MediaFrame } from "@/components/media/MediaFrame";
import { Reveal } from "@/components/motion/Reveal";

const PROBLEM_PARAS = [
  `Your marketers, content leads and sales teams are already in ChatGPT and Claude every day, in separate accounts, reinventing the context and iterating five times on every output. Almost nobody has put guardrails or a compliant, top-down approach in place. Becoming AI experts was never their job.`,
];

const ANSWER_PARA = `One platform that carries all of it. Purpose-built, easy to use and compliant, holding the intelligence so your team never rebuilds it from zero, and getting sharper with every edition.`;

export function AiProblemSplitSection(): React.ReactElement {
  return (
    <Panel tone="night" index="01" kicker="The problem">
      <Reveal>
        <h2 className="max-w-3xl text-balance display-section">
          Your teams are already using AI. Becoming AI experts shouldn&apos;t be their job.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <Reveal className="rounded-2xl border border-white/10 bg-night-raised p-7">
            <h3 className="text-xl text-snow">What&apos;s happening today</h3>
            {PROBLEM_PARAS.map((para) => (
              <p key={para.slice(0, 24)} className="mt-4 text-base leading-relaxed text-mist">
                {para}
              </p>
            ))}
          </Reveal>
          <Reveal className="rounded-2xl border border-pink/50 bg-[rgba(167,139,219,0.08)] p-7 shadow-[var(--lavender-emph)]">
            <h3 className="flex items-center gap-2.5 text-xl text-snow">
              <span className="h-2 w-2 rounded-full bg-pink" aria-hidden />
              What Looped changes
            </h3>
            <p className="mt-4 text-base leading-relaxed text-mist">{ANSWER_PARA}</p>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-5">
          <MediaFrame
            variant="app"
            tone="ink"
            tag="Workspace"
            aspect="4 / 5"
            label="One workspace, every team"
            className="h-full"
          />
        </Reveal>
      </div>

      <Reveal>
        <p className="mx-auto mt-12 max-w-4xl text-balance text-center font-serif text-2xl italic leading-snug text-snow sm:text-3xl">
          The intelligence lives in the platform and compounds. It doesn&apos;t walk out the door when someone leaves.
        </p>
      </Reveal>
    </Panel>
  );
}
