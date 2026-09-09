import type { Metadata } from "next";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { CapabilityGrid, type Capability } from "@/components/product/CapabilityGrid";
import { ChannelMatrix, type ChannelRow } from "@/components/product/ChannelMatrix";
import { JourneyTrack, type JourneyStop } from "@/components/product/JourneyTrack";
import { ClosingCTA } from "@/components/ui/ClosingCTA";
import { ExploreNext } from "@/components/ui/ExploreNext";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AvailabilityNote } from "@/components/ui/StatusPill";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Event communications: WhatsApp, SMS, RCS and email",
  description:
    "One audience journey across email, WhatsApp, SMS, RCS and telesales, with contact pressure, eligibility and outcomes all handled properly.",
  path: "/communications",
});

const JOURNEY: JourneyStop[] = [
  {
    channel: "Email",
    event: "Programme announcement opened, nothing clicked",
    consequence: "Interest noted, but not enough to act on alone.",
  },
  {
    channel: "RCS",
    event: "Session line-up sent as a rich card",
    consequence: "Delivered to a channel they actually read, with the programme visible in the message.",
  },
  {
    channel: "WhatsApp",
    event: "They reply asking about day two",
    consequence: "A real signal, and a specific one. The reply goes to the shared workspace.",
    pivot: true,
  },
  {
    channel: "Telesales",
    event: "Moves to the top of tomorrow's call list",
    consequence: "The caller opens with the day-two question already in front of them.",
  },
  {
    channel: "Outcome",
    event: "Registers, and books two colleagues",
    consequence: "The registration reconciles back against the campaign and the call.",
  },
  {
    channel: "Next cycle",
    event: "Carried into next year as a known attendee",
    consequence: "Their preferred channel, their interests and their history start the next journey.",
  },
];

const CHANNELS: ChannelRow[] = [
  {
    channel: "Email",
    useFor: "Depth and formality",
    detail:
      "Runs on your existing sending account and sender reputation. Sequenced from the approved campaign plan rather than rebuilt in a separate tool.",
    status: "live",
  },
  {
    channel: "WhatsApp",
    useFor: "Conversation and reply",
    detail:
      "For the audiences who will answer a message but never an email, and where a reply is the point rather than a click.",
    status: "soon",
  },
  {
    channel: "SMS",
    useFor: "Urgency and reach",
    detail: "Deadline reminders, day-before logistics and the messages that must simply arrive.",
    status: "soon",
  },
  {
    channel: "RCS",
    useFor: "Rich, branded messaging",
    detail:
      "Programme cards, speaker reveals and finalist announcements delivered with the artwork attached, from a verified sender.",
    status: "soon",
  },
  {
    channel: "Voice and telesales",
    useFor: "The conversation that closes",
    detail:
      "Human callers and AI voice working the same prioritised list, from the same context, on your own voice account with a spend cap per event.",
    status: "pilot",
  },
];

const OPERATING: Capability[] = [
  {
    title: "Guided setup",
    body: "Connecting a channel is a walked-through setup, not a project. You bring the account; Looped handles the wiring and tells you what is still missing.",
  },
  {
    title: "Your existing providers",
    body: "Looped connects to the sending accounts and numbers you already own. Your sender reputation, your contracts, your control.",
  },
  {
    title: "Shared communications workspace",
    body: "One place where marketing, telesales and event management can see what has gone out, what came back and what is queued.",
  },
  {
    title: "AI triage on replies",
    body: "Incoming replies are read, summarised and sorted, so a question about accessibility does not sit unopened behind two hundred out-of-office messages.",
    status: "pilot",
  },
  {
    title: "Replies update the work",
    body: "A reply is not just a message. It moves the person in the journey, raises their call priority and updates the workflow that was waiting on them.",
    status: "pilot",
  },
  {
    title: "Role-aware communication",
    body: "The same person is addressed correctly as a speaker, a sponsor contact, a judge or a delegate, and never gets the delegate campaign the week they are chairing a session.",
  },
];

const DISCIPLINE: Capability[] = [
  {
    title: "Contact pressure",
    body: "A view of how much your organisation has already asked of someone this month, across every event and every channel, before anyone asks again.",
  },
  {
    title: "Brand-level context",
    body: "Communication is coordinated at the level of your brand, not per campaign, so two events in the same portfolio stop competing for the same inbox.",
  },
  {
    title: "Suppression and eligibility",
    body: "Consent, preference and suppression are checked at the point of sending. Being able to see a contact is not the same as being allowed to message them.",
  },
  {
    title: "Sequencing that respects the person",
    body: "Channels are ordered by what that individual actually responds to, rather than by what is cheapest to send.",
  },
  {
    title: "Outcome measurement",
    body: "Measured against registrations, revenue and conversations, not opens. A campaign that was opened and ignored has not worked.",
  },
  {
    title: "Contribution and cost",
    body: "An honest read on what a channel appears to have added and what it cost to add it, including where the honest answer is that it is too close to call.",
    status: "soon",
  },
];

const CONTENTS = [
  { id: "journey", label: "One journey, end to end" },
  { id: "channels", label: "The channels" },
  { id: "operating", label: "How it runs" },
  { id: "discipline", label: "The part most tools skip" },
];

const EXPLORE = [
  {
    href: "/agents-and-conversations",
    label: "AI conversations",
    blurb: "What happens when someone replies, and the conversation needs to know who they are.",
  },
  {
    href: "/pillars/telesales",
    label: "Telesales",
    blurb: "The call queue this journey feeds, and the context a caller opens with.",
  },
  {
    href: "/creative",
    label: "Creative",
    blurb: "The assets that fill these messages, produced per name rather than per template.",
  },
  {
    href: "/data-and-integrations",
    label: "Data and integrations",
    blurb: "Eligibility, ownership and the rules that decide what may be sent to whom.",
  },
];

export default function CommunicationsPage(): React.ReactElement {
  return (
    <>
      <PageHero
        kicker="Communications"
        title="One journey across every channel."
        lede="Your audience does not experience an email campaign, a messaging campaign and a call list. They experience your brand, repeatedly, in whatever order it arrives. Looped runs it as one journey per person instead of five campaigns per team."
        secondaryCta={{ href: "/platform", label: "See the platform" }}
        contents={CONTENTS}
      />

      <Panel tone="paper" id="journey" index="01" kicker="One journey">
        <SectionHeading
          title="What a single relationship actually looks like."
          lede="Six touches across four channels and two teams. In most organisations these live in different systems and nobody reconciles them. Here, each one changes what happens next."
        />
        <Reveal className="mt-12">
          <JourneyTrack
            stops={JOURNEY}
            outcome="One person, one journey. The reply changed the call list, the call closed the registration, and the registration reconciled back against both. Nobody had to join those dots by hand."
          />
        </Reveal>
      </Panel>

      <Panel tone="bone" id="channels" index="02" kicker="Channels">
        <SectionHeading
          title="The channels your audience actually uses."
          lede="Each channel does something the others cannot. The point is not to be on all of them; it is that they behave as one conversation when you are."
        />
        <Reveal className="mt-10">
          <ChannelMatrix rows={CHANNELS} />
        </Reveal>
        <Reveal className="mt-8">
          <AvailabilityNote className="max-w-3xl" />
        </Reveal>
      </Panel>

      <Panel tone="ink" id="operating" index="03" kicker="How it runs">
        <SectionHeading
          tone="ink"
          title="Connected to what you already own."
          lede="Looped is not another sending platform to migrate to. It connects to the accounts, numbers and providers you already run, and coordinates them."
        />
        <Reveal className="mt-12">
          <CapabilityGrid items={OPERATING} tone="ink" />
        </Reveal>
      </Panel>

      <Panel tone="bone" id="discipline" index="04" kicker="Discipline">
        <SectionHeading
          title="The part most tools skip."
          lede="Anyone can send more messages. The difficult, valuable work is knowing when not to, who is genuinely eligible, and whether any of it made a difference."
        />
        <Reveal className="mt-12">
          <CapabilityGrid items={DISCIPLINE} />
        </Reveal>
        <Reveal className="mt-14">
          <p className="max-w-3xl text-balance font-serif text-2xl italic leading-snug text-ink-text sm:text-3xl">
            Looped does not optimise messages. It optimises the relationship and the outcome.
          </p>
        </Reveal>
      </Panel>

      <ExploreNext links={EXPLORE} tone="paper" />

      <ClosingCTA
        title="Run one journey instead of five campaigns."
        body="Pilot teams usually start by connecting email and the call list, then add messaging as the channels come online for their audience."
      />
    </>
  );
}
