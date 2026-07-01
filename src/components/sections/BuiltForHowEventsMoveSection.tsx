"use client";

import Link from "next/link";

import { Panel } from "@/components/layout/Panel";
import { MediaFrame } from "@/components/media/MediaFrame";
import { Reveal } from "@/components/motion/Reveal";

export function BuiltForHowEventsMoveSection(): React.ReactElement {
  return (
    <Panel tone="bone" index="04" kicker="Built for how events move">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <Reveal>
            <h2 className="text-balance display-section">Built for how events actually move.</h2>
            <p className="mt-6 text-base leading-relaxed text-graphite sm:text-lg">
              Every plan changes the moment a date slips or a speaker drops. So Looped starts with the mix, the blend of
              personas, seniority and sectors that makes the room work, then tracks your bookings against it live and
              hands you the weekly call: double down on what is converting, or pivot on what is not.
            </p>
          </Reveal>
          <Reveal>
            <p className="mt-8 border-l-2 border-violet pl-5 font-serif text-2xl italic leading-snug text-ink-text sm:text-3xl">
              It&apos;s no longer a question of return on investment. It&apos;s return on intention and effort.
            </p>
          </Reveal>
          <Reveal>
            <Link
              href="/how-it-works"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-violet transition-colors hover:text-ink-text"
            >
              See how the framework stays live across the whole cycle
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-6">
          <MediaFrame
            variant="browser"
            tone="light"
            tag="Mix tracker"
            aspect="4 / 3"
            label="Bookings tracked live against your target mix"
          />
        </Reveal>
      </div>
    </Panel>
  );
}
