"use client";

import Link from "next/link";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { ChainFlow, type ChainStep } from "@/components/product/ChainFlow";

const BODY = `Looped does not stop at telling your team what it knows. It turns that intelligence into the working environment around the event: the plans, the programme workspace, the audience journeys, the sponsorship workflows, the campaign assets, the AI conversations, the communications and the actions your team signs off.`;

const CHAIN: ChainStep[] = [
  { label: "Research", output: "Market, competitor, audience and programme context, kept current." },
  { label: "Planning", output: "Targets, campaign plans and revenue scenarios your team signs off." },
  { label: "Workspaces", output: "A working hub for marketing, programme, commercial, telesales and awards." },
  { label: "Creative", output: "Campaign assets produced with the event intelligence already attached." },
  { label: "Conversations", output: "AI conversations that open already knowing the person and the event." },
  { label: "Action", output: "Approved decisions carried out across the systems you already run." },
];

export function PlatformBridgeSection(): React.ReactElement {
  return (
    <Panel tone="paper" index="09" kicker="The full platform">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-7">
          <h2 className="text-balance display-section">
            One intelligence layer. An extraordinary amount of work underneath it.
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-5 lg:pt-2">
          <p className="text-pretty text-base leading-relaxed text-graphite sm:text-lg">{BODY}</p>
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <ChainFlow steps={CHAIN} />
      </Reveal>

      <Reveal className="mt-12">
        <Link
          href="/platform"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet transition-colors hover:text-ink-text"
        >
          Explore the full platform
          <span aria-hidden>&rarr;</span>
        </Link>
      </Reveal>
    </Panel>
  );
}
