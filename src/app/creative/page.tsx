import type { Metadata } from "next";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { CapabilityGrid, type Capability } from "@/components/product/CapabilityGrid";
import { CreativeBatch, type BatchStage } from "@/components/product/CreativeBatch";
import { ClosingCTA } from "@/components/ui/ClosingCTA";
import { ExploreNext } from "@/components/ui/ExploreNext";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AvailabilityNote } from "@/components/ui/StatusPill";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Event campaign creative for conferences and awards",
  description:
    "Speaker, sponsor, finalist and winner assets produced at volume with the event intelligence attached, ready for one approval instead of forty.",
  path: "/creative",
});

const BATCH: BatchStage[] = [
  { count: "47", label: "Finalists confirmed", detail: "Taken from the judging outcome, checked once by your team." },
  { count: "47", label: "Personalised cards", detail: "One per finalist, on brand, with the right category attached." },
  { count: "141", label: "Share variants", detail: "Sized for the platforms your finalists will actually post to." },
  { count: "1", label: "Campaign copy set", detail: "Announcement copy per channel, from the approved positioning." },
  { count: "1", label: "Approval bundle", detail: "One review pass, approved or sent back together." },
];

const NATIVE: Capability[] = [
  {
    title: "Speaker cards",
    body: "Announcement and reminder assets per speaker, generated from the confirmed programme rather than typed into a template forty times.",
  },
  {
    title: "Sponsor cards",
    body: "Partner announcement assets at the tier and treatment their contract actually specifies.",
  },
  {
    title: "Finalist cards",
    body: "The full shortlist, personalised, produced in the window between judging closing and the announcement going out.",
  },
  {
    title: "Winner assets",
    body: "Winner creative ready the moment the result is confirmed, so the news goes out while the room is still in it.",
  },
  {
    title: "Attendee share assets",
    body: "The assets that turn a speaker, finalist or delegate into a promoter, because they are genuinely worth posting.",
  },
  {
    title: "Session graphics",
    body: "Session and track artwork built from the approved agenda, updating when the agenda does.",
  },
  {
    title: "Campaign banners",
    body: "Display and web banner sets across the sizes your channels need, in one pass.",
  },
  {
    title: "Email graphics",
    body: "Header and feature artwork matched to the campaign phase the email belongs to.",
  },
];

const GENERATIVE: Capability[] = [
  {
    title: "Connected image generation",
    body: "Image generation briefed by the approved event context: the theme, the positioning, the audience and the brand rules your team set at the start.",
  },
  {
    title: "Campaign variants",
    body: "Concept territories and variants for testing, so a campaign has options to choose between rather than one execution to defend.",
  },
  {
    title: "Visual identity concepts",
    body: "Theme and identity directions generated from the programme narrative, as a starting point for a designer rather than a replacement for one.",
  },
  {
    title: "Video workflows",
    body: "Short-form video generation for the formats where it genuinely helps, kept deliberately narrow rather than promised everywhere.",
    status: "soon",
  },
];

const HANDOFF: Capability[] = [
  {
    title: "Export to your design tools",
    body: "Assets and copy leave Looped in a form your designers can pick up, rather than trapping the work in a system they do not use.",
    status: "soon",
  },
  {
    title: "Your brand rules, applied first",
    body: "Colours, typography, tone and the things you have told Looped never to say are applied before anything is produced, not corrected afterwards.",
  },
  {
    title: "One approval, not forty",
    body: "A batch is reviewed as a batch. Approve the set, send back the three that are wrong, and only those three are remade.",
  },
  {
    title: "The designer stays the designer",
    body: "Looped is not trying to replace Canva, Figma or Adobe, and it is not trying to replace the person using them. It removes the volume work that was never craft in the first place.",
  },
];

const CONTENTS = [
  { id: "announcement", label: "One announcement, start to finish" },
  { id: "campaign-creative", label: "Campaign creative at volume" },
  { id: "generative", label: "Generative creative" },
  { id: "specialist", label: "Where Looped stops" },
];

const EXPLORE = [
  {
    href: "/communications",
    label: "Communications",
    blurb: "Where this creative goes, and the journey it belongs to.",
  },
  {
    href: "/pillars/marketing",
    label: "Marketing and audience",
    blurb: "The campaign strategy the creative is produced against.",
  },
  {
    href: "/pillars/event-management",
    label: "Event Management and Awards",
    blurb: "The awards year that produces the finalist and winner moments.",
  },
  {
    href: "/platform",
    label: "The full platform",
    blurb: "The intelligence that decides which asset is worth making.",
  },
];

export default function CreativePage(): React.ReactElement {
  return (
    <>
      <PageHero
        kicker="Creative"
        title="Creative produced with the event intelligence already attached."
        lede="Announcement week is not a design problem. It is a volume problem with a deadline: forty-seven finalists, three platforms each, copy per channel, all on brand, all correct, all by Thursday. Looped produces the batch and hands your team one approval."
        secondaryCta={{ href: "/platform", label: "See the platform" }}
        contents={CONTENTS}
      />

      <Panel tone="paper" id="announcement" index="01" kicker="A real announcement">
        <SectionHeading
          title="One finalist announcement, start to finish."
          lede="This is the work that quietly eats a marketing team every awards cycle. It is not difficult. It is just enormous, repetitive, and impossible to do carefully at four in the afternoon."
        />
        <Reveal className="mt-12">
          <CreativeBatch headline="Finalist announcement, one batch" stages={BATCH} />
        </Reveal>
        <Reveal className="mt-8">
          <p className="max-w-3xl text-sm leading-relaxed text-muted-ink">
            Card shapes shown are placeholders. Real assets are produced against your brand rules and the confirmed
            finalist list, and nothing is published until your team has approved the batch.
          </p>
        </Reveal>
      </Panel>

      <Panel tone="bone" id="campaign-creative" index="02" kicker="Campaign creative">
        <SectionHeading
          title="The assets an event actually needs, at the volume it needs them."
          lede="Not one hero image. The hundreds of small, personalised, correctly-branded assets that a conference or awards campaign consumes between launch and event day."
        />
        <Reveal className="mt-12">
          <CapabilityGrid items={NATIVE} />
        </Reveal>
      </Panel>

      <Panel tone="ink" id="generative" index="03" kicker="Generative">
        <SectionHeading
          tone="ink"
          title="Generation that knows what it is generating for."
          lede="A generic image generator gives you a picture. Connected to the event context, it gives you the picture this campaign phase needs, for this audience, within your brand rules."
        />
        <Reveal className="mt-12">
          <CapabilityGrid items={GENERATIVE} tone="ink" columns={2} />
        </Reveal>
        <Reveal className="mt-8">
          <AvailabilityNote tone="ink" className="max-w-3xl" />
        </Reveal>
      </Panel>

      <Panel tone="bone" id="specialist" index="04" kicker="Specialist work">
        <SectionHeading
          title="Where Looped stops, deliberately."
          lede="Professional design tools are extraordinary and your designers are good at them. Looped is not trying to win that argument. It is trying to make sure they never spend a Tuesday resizing forty-seven cards again."
        />
        <Reveal className="mt-12">
          <CapabilityGrid items={HANDOFF} />
        </Reveal>
        <Reveal className="mt-14">
          <p className="max-w-3xl text-balance font-serif text-2xl italic leading-snug text-ink-text sm:text-3xl">
            The advantage is not that Looped can make an image. It is that Looped knows which image needs making.
          </p>
        </Reveal>
      </Panel>

      <ExploreNext links={EXPLORE} tone="paper" />

      <ClosingCTA
        title="Give announcement week back to your marketing team."
        body="Bring a real finalist list or speaker line-up to the pilot conversation and we will show you what the batch looks like against your brand."
      />
    </>
  );
}
