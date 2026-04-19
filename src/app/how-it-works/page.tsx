import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { CascadeDiagram } from "@/components/sections/CascadeDiagram";

const EXAMPLES = [
  "content_industry_intelligence → content_key_topics → content_speaker_identification",
  "marketing_market_mapping → marketing_persona_builder → marketing_messaging_architecture",
  "marketing_messaging_architecture → marketing_campaign_plan → marketing_campaign_calendar",
  "commercial_sponsor_brief → commercial_media_pack → sponsorship_outreach_copy",
];

export default function HowItWorksPage(): React.ReactElement {
  return (
    <div className="bg-white pb-20 pt-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">How the cascade runs</h1>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            Looped is not a chat window. It is a governed pipeline: structured modules, explicit dependencies, and
            human approval gates so downstream work always inherits upstream decisions.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-center text-2xl font-semibold text-slate-900">From brief to campaign-ready</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600">
            As each module is approved, the next layer unlocks automatically — your team reviews outputs, not prompt
            threads.
          </p>
        </Reveal>
        <div className="mt-10">
          <CascadeDiagram expanded />
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-semibold text-slate-900">Real module chains</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            These are representative dependency chains — the same pattern repeats across marketing, content, commercial,
            telesales, event management, and portfolio views.
          </p>
          <ul className="mt-6 space-y-3 font-mono text-xs leading-relaxed text-indigo-900 sm:text-sm">
            {EXAMPLES.map((ex) => (
              <li key={ex} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                {ex}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-900">Human in the loop by design</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Every module output lands in review before the cascade fires the next step. Approvals are the trigger — not
            cron jobs or silent auto-publishes. That keeps sponsors, delegates, and brand teams protected while still
            removing weeks of manual stitching.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Skipping approval is possible only where you explicitly allow it — for example low-risk monitoring modules —
            so operational modules never run ahead of governance you have not signed off.
          </p>
        </Reveal>

        <Reveal className="mt-12 text-center">
          <Link
            href="/demo"
            className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-indigo-700 px-6 py-3 text-sm font-semibold text-white shadow-[var(--looped-violet-glow)] transition-transform hover:scale-[1.02]"
          >
            Book a demo
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
