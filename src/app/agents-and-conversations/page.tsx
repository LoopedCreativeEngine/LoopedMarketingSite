import type { Metadata } from "next";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { CapabilityGrid, type Capability } from "@/components/product/CapabilityGrid";
import { RelationshipContext, type Relationship } from "@/components/product/RelationshipContext";
import { ClosingCTA } from "@/components/ui/ClosingCTA";
import { ExploreNext } from "@/components/ui/ExploreNext";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "AI event concierge and conversations",
  description:
    "AI conversations for conference and awards teams: event concierge, entry readiness, sponsor and speaker support and voice, each opening with real context.",
  path: "/agents-and-conversations",
});

const RELATIONSHIPS: Relationship[] = [
  {
    role: "Spoke at your flagship conference",
    context: "Delivered a keynote, briefed and confirmed well ahead of the deadline.",
    meta: "Two editions ago",
  },
  {
    role: "Named contact on a sponsoring account",
    context: "The commercial relationship sits with their organisation, and renewal is approaching.",
    meta: "Renewal due",
  },
  {
    role: "Entering this year's awards",
    context: "Started an entry in two categories and has not finished either one.",
    meta: "Live now",
    current: true,
  },
  {
    role: "On the delegate list for a sister event",
    context: "Registered for another event in your portfolio, in a different sector.",
    meta: "This season",
  },
];

const SURFACES: Capability[] = [
  {
    title: "Event concierge",
    body: "An assistant on your own event website that answers from a knowledge base your team compiles and controls. It will decline rather than guess, and it captures consented interest into the platform instead of losing it in a form.",
  },
  {
    title: "Awards entry readiness",
    body: "Helps a prospective entrant work out which categories genuinely fit them, what a complete entry involves and what they still need. It nudges the entries that stall halfway.",
  },
  {
    title: "Sales concierge",
    body: "Handles the early qualifying conversation, captures what the person is actually looking for, and routes it to the partner pipeline, the telesales list or nurture.",
  },
  {
    title: "Speaker support",
    body: "Answers the questions speakers ask every year, and collects bios, headshots and logistics through a secure link rather than a chain of emails.",
    status: "pilot",
  },
  {
    title: "Sponsor support",
    body: "Deadlines, deliverables, asset specifications and what has already been submitted, answered without a call.",
    status: "pilot",
  },
  {
    title: "Judge support",
    body: "Guidance for judges on process, timing and conflicts, and a nudge when something needs their attention.",
    status: "pilot",
  },
  {
    title: "Attendee assistance",
    body: "Practical help before and during the event: what is on, where to be, and what changed this morning.",
    status: "soon",
  },
  {
    title: "Networking support",
    body: "Who else in the room is worth meeting, based on what the attendee said they came for.",
    status: "soon",
  },
  {
    title: "Feedback conversations",
    body: "A conversation rather than a survey, so you learn why a score was given, not just what it was.",
    status: "soon",
  },
  {
    title: "Onboarding conversations",
    body: "Walks a new organiser team, or a new team member, through their first event on the platform.",
    status: "pilot",
  },
  {
    title: "Voice interactions",
    body: "AI voice conversations that run on your own voice account, with every call recorded, transcribed and its outcome classified.",
  },
  {
    title: "In-platform assistant",
    body: "For your own team: an assistant on every page that answers with live cross-event context and starts work on your explicit confirmation.",
  },
];

const GUARDRAILS = [
  {
    title: "It answers from what you have approved",
    body: "The knowledge behind a conversation is compiled and switched on by your team. If a question falls outside it, the honest answer comes back rather than a confident invention.",
  },
  {
    title: "It hands over to a person",
    body: "When a conversation reaches a commitment, a complaint, a price or a judgement call, it goes to a human with the context attached, not back to the start of a queue.",
  },
  {
    title: "It does not write the award entry",
    body: "Looped helps an entrant understand category fit, requirements and readiness. The substance of the entry is theirs, and that line is deliberate: an awards programme is only worth entering if the entries are real.",
  },
  {
    title: "It respects what someone has already been asked",
    body: "A conversation knows what your brand has recently sent that person, so support does not arrive on top of three campaign messages.",
  },
];

const CONTENTS = [
  { id: "context", label: "One person, several relationships" },
  { id: "conversations", label: "Where conversations happen" },
  { id: "guardrails", label: "What they will not do" },
];

const EXPLORE = [
  {
    href: "/communications",
    label: "Communications",
    blurb: "How a conversation becomes part of one journey across email, messaging and voice.",
  },
  {
    href: "/data-and-integrations",
    label: "Data and integrations",
    blurb: "Where a conversation gets its context, and the rules on what may be used.",
  },
  {
    href: "/pillars/event-management",
    label: "Event Management and Awards",
    blurb: "The awards year these conversations sit inside, from categories through to winners.",
  },
  {
    href: "/platform",
    label: "The full platform",
    blurb: "The intelligence and workspaces the conversations are reading from.",
  },
];

export default function AgentsAndConversationsPage(): React.ReactElement {
  return (
    <>
      <PageHero
        kicker="AI conversations"
        title="Every conversation starts with the context Looped already knows."
        lede="These are not disconnected bots bolted to a website. They are conversations that open already knowing who is asking, what their relationship with you is, which event they mean, and what your team has approved as the answer."
        secondaryCta={{ href: "/platform", label: "See the platform" }}
        contents={CONTENTS}
      />

      <Panel tone="paper" id="context" index="01" kicker="Context">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">One person can be four relationships at once.</h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-graphite sm:text-lg">
              The same individual has spoken at your conference, sits on a sponsoring account, is halfway through an
              awards entry and is registered for a sister event. Most systems see four unrelated records and talk to
              them four different ways.
            </p>
            <p className="mt-4 text-base leading-relaxed text-graphite">
              Looped keeps the relationship coherent. A conversation opens in the context that is live right now,
              without forgetting the rest, and without making someone re-explain who they are to you.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-7">
            <RelationshipContext
              personLabel="One contact in your data"
              relationships={RELATIONSHIPS}
              currentLine="The conversation opens on the live relationship, the unfinished awards entry, while the rest stays available to the humans who need it. How that is resolved stays under the bonnet."
            />
          </Reveal>
        </div>
      </Panel>

      <Panel tone="bone" id="conversations" index="02" kicker="The conversations">
        <SectionHeading
          title="Where conversations happen, and who they are for."
          lede="Some sit on your own event site, some reach out, some run inside the platform for your team. All of them read from the same event picture, so nobody gets a different answer depending on where they asked."
        />
        <Reveal className="mt-12">
          <CapabilityGrid items={SURFACES} />
        </Reveal>
      </Panel>

      <Panel tone="ink" id="guardrails" index="03" kicker="Guardrails">
        <SectionHeading
          tone="ink"
          title="What they will not do, on purpose."
          lede="The value of an AI conversation in this industry is not how much it can say. It is whether the person on the other end can trust what came back."
        />
        <div className="mt-12 grid gap-x-12 md:grid-cols-2">
          {GUARDRAILS.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 0.06}>
              <div className="border-t border-white/10 py-6">
                <h3 className="font-serif text-xl tracking-tight text-bone-text">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-bone-dim">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <p className="max-w-3xl text-balance font-serif text-2xl italic leading-snug text-bone-text sm:text-3xl">
            A concierge that guesses is worse than no concierge at all.
          </p>
        </Reveal>
      </Panel>

      <ExploreNext links={EXPLORE} tone="bone" />

      <ClosingCTA
        title="Put a concierge on your event site that actually knows the event."
        body="Pilot teams start with one surface, usually the event concierge or awards entry readiness, and add the rest once they have seen how it answers."
      />
    </>
  );
}
