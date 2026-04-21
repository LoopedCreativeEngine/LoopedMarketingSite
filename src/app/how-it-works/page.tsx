import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { CascadeDiagram } from "@/components/sections/CascadeDiagram";

export default function HowItWorksPage(): React.ReactElement {
  return (
    <div className="bg-looped-bg pb-20 pt-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="text-4xl font-semibold tracking-tight text-[#f8f9ff]">How Looped works</h1>
          <p className="mt-6 text-base leading-relaxed text-[#c4c8d8]">
            A connected cascade across six team pillars. Every approved output informs the next decision. Human approval
            gates between every phase.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-semibold text-[#f8f9ff]">The briefing hub</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#c4c8d8] sm:text-base">
            Every event starts with a brief. Event name, date, venue, sector, audience, team notes, brand rules,
            supporting documents. The brief is the foundation. Team notes are injected into every module&apos;s system
            prompt automatically — compliance instructions, terminology restrictions, brand voice rules. If you tell the
            platform never to use a particular phrase, no module ever will.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-semibold text-[#f8f9ff]">The 12-phase cascade</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#c4c8d8] sm:text-base">
            Modules are organised into 12 cascade phases — from market intelligence through to post-event learning.
            Each phase unlocks when the previous phase&apos;s outputs are approved. You cannot run campaign execution until
            audience and messaging decisions are approved first. The sequence is enforced by design.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <CascadeDiagram expanded />
      </div>

      <div className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-semibold text-[#f8f9ff]">Human approval gates</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#c4c8d8] sm:text-base">
            Every module output is reviewed by a human before the next module fires. This is not a limitation — it is the
            product. Looped is human-in-the-loop by design. The platform produces intelligence. Your team makes the
            decisions. The approval gates are where your expertise is applied.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-semibold text-[#f8f9ff]">Six team pillars</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#c4c8d8] sm:text-base">
            Each pillar has its own workspace and its own intelligence thread. Marketing&apos;s approved Persona Builder output
            is available to Content when they&apos;re building the speaker programme. Commercial&apos;s approved Sponsor Brief is
            available to Marketing when they&apos;re writing partner promotion copy. The system is the shared context — no
            briefing each other, no duplication.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-semibold text-[#f8f9ff]">The cascade compounds</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#c4c8d8] sm:text-base">
            Every approved output is stored against the event. At the end of the event, the platform extracts key
            learnings and carries them forward to the next edition. The brief for year 2 starts with everything that
            worked in year 1. Over time, Looped becomes the institutional memory your team cannot afford to lose.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-12 max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Link
          href="/demo"
          className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-indigo-700 px-6 py-3 text-sm font-semibold text-white shadow-[var(--looped-violet-glow)] transition-transform hover:scale-[1.02]"
        >
          Book a demo
        </Link>
      </div>
    </div>
  );
}
