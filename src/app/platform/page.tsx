import type { Metadata } from "next";
import Link from "next/link";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { AnchorNav } from "@/components/product/AnchorNav";
import { CapabilityGrid, type Capability } from "@/components/product/CapabilityGrid";
import { ChainFlow, type ChainStep } from "@/components/product/ChainFlow";
import { InteroperabilityLayer } from "@/components/product/InteroperabilityLayer";
import { ScenarioBoard } from "@/components/product/ScenarioBoard";
import { WorkspaceBoard } from "@/components/product/WorkspaceBoard";
import { ClosingCTA } from "@/components/ui/ClosingCTA";
import { ExploreNext } from "@/components/ui/ExploreNext";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AvailabilityNote } from "@/components/ui/StatusPill";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Event AI platform: intelligence into action",
  description:
    "Market and audience intelligence, planning, working hubs, campaign creative, AI conversations and governed execution, in one platform for event teams.",
  path: "/platform",
});

const CHAIN: ChainStep[] = [
  { label: "Understand", output: "Market, audience, programme and commercial context, kept current." },
  { label: "Plan", output: "Targets, campaign plans, revenue and budget scenarios." },
  { label: "Work", output: "A hub per team, with the live items that need a decision." },
  { label: "Create", output: "Campaign creative with the event intelligence already attached." },
  { label: "Converse", output: "Conversations that open knowing the person and the event." },
  { label: "Act", output: "Approved decisions carried into the systems you already run." },
];

const SPINE = [
  { id: "understand", label: "Understand" },
  { id: "plan", label: "Plan" },
  { id: "work", label: "Work" },
  { id: "create", label: "Create" },
  { id: "converse", label: "Converse" },
  { id: "communicate", label: "Communicate" },
  { id: "act", label: "Act" },
  { id: "learn", label: "Learn" },
  { id: "wider-ai", label: "Your AI" },
];

const UNDERSTAND: Capability[] = [
  {
    title: "Market and competitor context",
    body: "Who else is competing for your audience's diary and budget, what they are programming, and where your event has a clear run.",
  },
  {
    title: "Audience and relationship intelligence",
    body: "Segments, personas and the real relationship history behind them, so a name is never just a row on a list.",
  },
  {
    title: "Programme and topic intelligence",
    body: "The themes the sector is actually moving towards, and the ones every competing agenda is already crowding.",
  },
  {
    title: "Sponsor and account intelligence",
    body: "Account context, buying history across your portfolio, and the reason this partner would care this year.",
  },
  {
    title: "Event lifecycle context",
    body: "Where this edition sits against its own timeline, and what usually goes wrong at this point in the cycle.",
  },
  {
    title: "Portfolio patterns",
    body: "What repeats across your events: audiences that overlap, formats that travel, accounts that buy more than once.",
  },
  {
    title: "Historical event performance",
    body: "Previous editions read as evidence rather than archive, so last year informs this year's plan.",
  },
  {
    title: "Trusted data context",
    body: "Every answer traceable to its source, and an honest admission when the data simply is not there.",
  },
];

const PLAN: Capability[] = [
  { title: "Audience targets", body: "Registration targets by segment, with the pace needed to hit them." },
  {
    title: "Campaign plans",
    body: "Multi-phase plans with channel mix, budget by phase and a week-by-week calendar.",
  },
  {
    title: "Revenue scenarios",
    body: "Delegate, sponsorship and table revenue modelled together rather than in three separate spreadsheets.",
  },
  {
    title: "Budget scenarios",
    body: "Optimistic, base and conservative views built from current performance, not last year's assumptions.",
  },
  {
    title: "Programme strategy",
    body: "Themes, tracks and session architecture planned against real demand and genuine white space.",
  },
  {
    title: "Commercial planning",
    body: "Package architecture, inventory and account priorities set before the selling starts.",
  },
  {
    title: "Quarterly reforecasting",
    body: "The plan revisited as evidence arrives, so the number on the board stays honest.",
  },
  {
    title: "Target achievability",
    body: "A clear read on whether the committed target is still reachable, and what would have to be true.",
    status: "pilot",
  },
  {
    title: "Intervention options",
    body: "The moves available when a target is drifting, each with its cost and its trade-off.",
  },
];

const WORK: Capability[] = [
  {
    title: "Marketing hub",
    body: "Campaign work, audience movement and the decisions waiting on a marketer, in one place.",
  },
  {
    title: "Programme workspace",
    body: "Themes, tracks, sessions and speakers as one living programme rather than a stack of documents.",
  },
  {
    title: "Tracks and agenda",
    body: "Agenda structure with pacing, balance and clashes visible while there is still time to fix them.",
  },
  {
    title: "Speaker workflows",
    body: "Invitation through to briefing, with bios, headshots and deadlines collected in one secure place.",
  },
  {
    title: "Commercial workspace",
    body: "Accounts, pipeline, proposals and delivery commitments held against the same partner record.",
  },
  { title: "Telesales hub", body: "Prioritised call lists with the reason to call and the context to call with." },
  {
    title: "Awards workflows",
    body: "Categories, entrants, deadlines, finalists and winners tracked across the whole awards year.",
  },
  {
    title: "Judging coordination",
    body: "Judge recruitment, conflicts and readiness kept on track ahead of judging.",
    status: "pilot",
  },
  {
    title: "Attendee journeys",
    body: "The journey from first touch to arrival, including the people who almost registered.",
    status: "pilot",
  },
  {
    title: "Operational readiness",
    body: "The critical path, the risks and the things that quietly slip, surfaced early.",
  },
  {
    title: "Portfolio planning",
    body: "Cross-event planning for the people carrying more than one show.",
    status: "pilot",
  },
];

const CREATE: Capability[] = [
  {
    title: "Campaign messaging",
    body: "Message pillars and per-persona value propositions your team approves once and reuses everywhere.",
  },
  {
    title: "Email and nurture copy",
    body: "Sequenced copy per segment, written from the approved positioning rather than from scratch.",
  },
  {
    title: "Messaging copy",
    body: "Short-form copy shaped for the messaging channels you run, not email copy squeezed down.",
  },
  {
    title: "Social and paid variants",
    body: "Organic calendars and platform-specific paid variants ready for testing.",
  },
  {
    title: "Speaker and sponsor cards",
    body: "Personalised announcement assets generated per name, at the volume a real programme needs.",
  },
  {
    title: "Finalist and winner assets",
    body: "Awards creative produced across the full finalist list, then again for the winners.",
  },
  {
    title: "Session and category graphics",
    body: "Programme and category artwork produced from the approved programme itself.",
  },
  {
    title: "Generative creative workflows",
    body: "Image generation connected to the event context, so what gets produced is what is actually needed.",
    status: "pilot",
  },
];

const CONVERSE: Capability[] = [
  {
    title: "Event concierge",
    body: "An assistant on your own event site that answers from a knowledge base you control, and declines to invent.",
  },
  {
    title: "Awards entry readiness",
    body: "Guidance that helps an entrant understand category fit and what a complete entry looks like.",
  },
  {
    title: "Sales concierge",
    body: "Qualifying conversations that capture consented interest and route it to the right pipeline.",
  },
  {
    title: "Speaker and sponsor support",
    body: "The repetitive stakeholder questions answered instantly, with a person kept in the loop.",
    status: "pilot",
  },
  {
    title: "Attendee and networking support",
    body: "Help finding the right sessions, and the right people to meet.",
    status: "soon",
  },
  {
    title: "Voice interactions",
    body: "AI voice conversations on your own voice account, recorded, transcribed and classified.",
  },
];

const COMMUNICATE: Capability[] = [
  {
    title: "Email",
    body: "Your existing sending account, driven by the approved plan rather than by a separate tool.",
  },
  {
    title: "Messaging channels",
    body: "WhatsApp, SMS and RCS as part of one journey, not three disconnected blasts.",
    status: "soon",
  },
  {
    title: "Voice and telesales",
    body: "Human callers and AI voice working the same list, from the same context.",
    status: "pilot",
  },
  {
    title: "Shared communications workspace",
    body: "One place where the team can see what has been sent, and what came back.",
  },
  {
    title: "Role-aware conversations",
    body: "The same person addressed as a speaker, a sponsor contact or a delegate, correctly.",
  },
  {
    title: "Contact pressure awareness",
    body: "A view of how much your brand is already asking of someone before you ask again.",
  },
];

const ACT: Capability[] = [
  {
    title: "Recommendations",
    body: "The next move, with the evidence behind it, surfaced while it can still change the outcome.",
  },
  {
    title: "Human-approved actions",
    body: "Nothing consequential happens without a person saying yes, and the approval is recorded.",
  },
  {
    title: "Connected execution",
    body: "Approved work carried into the systems you already run, rather than copied between them.",
  },
  {
    title: "Bounded autonomy",
    body: "Where you want it, Looped operates inside limits your organisation sets and can change.",
  },
  {
    title: "Task and workflow updates",
    body: "Owners, deadlines and workflow state updated as decisions are made.",
  },
  {
    title: "Prioritisation and follow-up",
    body: "What to do first, and what has gone quiet and needs chasing.",
  },
  { title: "Campaign launch", body: "Approved campaigns released to the channels your team has connected." },
  {
    title: "Risk escalation",
    body: "The problems that usually surface late, raised early and pointed at an owner.",
  },
];

const LEARN: Capability[] = [
  {
    title: "What worked",
    body: "The campaigns, topics and offers that actually moved registrations and revenue.",
  },
  {
    title: "Campaign effectiveness",
    body: "Channel and segment performance read together, not one dashboard at a time.",
  },
  {
    title: "Topic effectiveness",
    body: "Which themes earned attention, and which ones the audience politely ignored.",
  },
  {
    title: "Commercial outcomes",
    body: "Partner delivery against what was sold, and what that means for the renewal conversation.",
  },
  { title: "Audience movement", body: "Who came back, who lapsed, and who moved between your events." },
  {
    title: "Renewal opportunity",
    body: "Where the next conversation is most likely to land, and when to have it.",
  },
  {
    title: "Contribution to lift",
    body: "An honest read on what an intervention appears to have added, rather than credit claimed by default.",
    status: "soon",
  },
  {
    title: "Future-edition intelligence",
    body: "The plan for next year starting from everything this year proved.",
  },
];

const EXPLORE = [
  {
    href: "/how-it-works",
    label: "How Looped works",
    blurb: "The operating loop, and the three autonomy modes that decide how much Looped does on its own.",
  },
  {
    href: "/capabilities",
    label: "Full capability index",
    blurb: "The diligence page: every capability, grouped, with an honest note on where each one sits.",
  },
  {
    href: "/agents-and-conversations",
    label: "AI conversations",
    blurb: "Every conversation opens with the context Looped already holds about that person.",
  },
  {
    href: "/data-and-integrations",
    label: "Data and integrations",
    blurb: "Your systems stay your systems. Looped makes the intelligence between them useful.",
  },
];

export default function PlatformPage(): React.ReactElement {
  return (
    <>
      <PageHero
        kicker="The platform"
        title="Everything your event team needs to turn intelligence into action."
        lede="Looped holds the market, audience, programme and commercial picture for every event you run, then turns it into the plans, workspaces, creative, conversations and communications your team works in every day."
        support="One layer, eight kinds of work. Your team keeps the judgement; Looped carries the rest."
        secondaryCta={{ href: "/capabilities", label: "See the capability index" }}
        contents={SPINE}
      />

      <Panel tone="paper" kicker="End to end">
        <Reveal>
          <ChainFlow steps={CHAIN} />
        </Reveal>
      </Panel>

      <AnchorNav items={SPINE} label="Platform capability groups" />

      <Panel tone="bone" id="understand" index="01" kicker="Understand">
        <SectionHeading
          title="The context your team would need a month to rebuild."
          lede="Every event starts with the same scramble: what has changed, who else is in the market, what the audience wants now. Looped holds that picture and keeps it current, so planning starts from evidence instead of from memory."
        />
        <Reveal className="mt-12">
          <CapabilityGrid items={UNDERSTAND} />
        </Reveal>
      </Panel>

      <Panel tone="ink" id="plan" index="02" kicker="Plan">
        <SectionHeading
          tone="ink"
          title="Plans that stay honest after the first thing goes wrong."
          lede="Targets, campaigns, revenue and budget planned in one place, then revisited as evidence arrives, so the committed number and the current outlook are both visible instead of one quietly replacing the other."
        />
        <Reveal className="mt-12">
          <CapabilityGrid items={PLAN} tone="ink" />
        </Reveal>
        <Reveal className="mt-10">
          <ScenarioBoard
            tone="ink"
            committedLabel="Committed plan"
            committedValue="Target held"
            modelledLabel="Current modelled outlook"
            modelledValue="Below plan"
            modelledPercent={78}
            confidence="Shown as a range with the evidence behind it, and updated as the picture changes. The committed number is never overwritten."
            drivers={[
              {
                label: "Segment under pace",
                note: "One audience segment is registering behind the pace the target assumes.",
              },
              {
                label: "Sponsorship timing",
                note: "Two renewals are sitting later in the cycle than they did last edition.",
              },
            ]}
            interventions={[
              {
                label: "Reweight campaign spend",
                effect: "Move budget towards the segment that is converting.",
                tradeoff: "Reduces reach in a segment already on pace",
              },
              {
                label: "Bring renewals forward",
                effect: "Start the renewal conversation earlier, with delivery evidence attached.",
                tradeoff: "Commercial time diverted from new business",
              },
            ]}
            caption="Illustrative. Scenario views are shaped by your own data, and Looped shows the drivers rather than one confident number."
          />
        </Reveal>
      </Panel>

      <Panel tone="bone" id="work" index="03" kicker="Work">
        <SectionHeading
          title="A working hub for every team, not another reporting layer."
          lede="Intelligence is only worth having where the work happens. Each team gets a hub holding their live items, the decisions waiting on them, and the context behind each one, all reading from the same event picture."
        />
        <Reveal className="mt-12">
          <WorkspaceBoard
            name="Programme workspace"
            tabs={["Work hub", "Items", "Briefing", "30-day plan", "Library"]}
            columns={[
              {
                label: "Tracks",
                items: [
                  { title: "Track A, sessions balanced", meta: "Ready" },
                  { title: "Track B, one slot open", meta: "Needs a decision", accent: "focus" },
                  { title: "Track C, draft", meta: "In progress" },
                ],
              },
              {
                label: "Speakers",
                items: [
                  { title: "Confirmed and briefed", meta: "Complete" },
                  { title: "Awaiting bio and headshot", meta: "Chased twice", accent: "focus" },
                  { title: "Shortlist for review", meta: "Your call" },
                ],
              },
              {
                label: "Gaps",
                items: [
                  { title: "Topic with no session", meta: "Rising demand", accent: "focus" },
                  { title: "Format under-used", meta: "Suggestion" },
                ],
              },
              {
                label: "Risks",
                items: [
                  { title: "Deadline at risk", meta: "Owner assigned" },
                  { title: "Agenda clash", meta: "Resolved", accent: "quiet" },
                ],
              },
            ]}
            footnote="Every item carries the reasoning behind it, and nothing moves forward until someone approves it."
          />
        </Reveal>
        <Reveal className="mt-10">
          <CapabilityGrid items={WORK} />
        </Reveal>
      </Panel>

      <Panel tone="ink" id="create" index="04" kicker="Create">
        <SectionHeading
          tone="ink"
          title="Creative produced with the event intelligence already attached."
          lede="The hard part of event creative is not making one asset. It is making the right two hundred: personalised, on brand, on message, inside the window you actually have."
        />
        <Reveal className="mt-12">
          <CapabilityGrid items={CREATE} tone="ink" />
        </Reveal>
        <Reveal className="mt-10">
          <Link
            href="/creative"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-iris transition-colors hover:text-bone-text"
          >
            See how creative works
            <span aria-hidden>&rarr;</span>
          </Link>
        </Reveal>
      </Panel>

      <Panel tone="bone" id="converse" index="05" kicker="Converse">
        <SectionHeading
          title="Conversations that start with what Looped already knows."
          lede="Entrants, speakers, sponsors and attendees all arrive with a question. Looped answers in the context of who they are to you and which event they are asking about, and hands over to a person when it should."
        />
        <Reveal className="mt-12">
          <CapabilityGrid items={CONVERSE} />
        </Reveal>
        <Reveal className="mt-10">
          <Link
            href="/agents-and-conversations"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet transition-colors hover:text-ink-text"
          >
            See AI conversations
            <span aria-hidden>&rarr;</span>
          </Link>
        </Reveal>
      </Panel>

      <Panel tone="ink" id="communicate" index="06" kicker="Communicate">
        <SectionHeading
          tone="ink"
          title="One journey across every channel you run."
          lede="Not a campaign in email, another in messaging, and a call list nobody reconciled. One journey per person, with the channels behaving as a single conversation."
        />
        <Reveal className="mt-12">
          <CapabilityGrid items={COMMUNICATE} tone="ink" />
        </Reveal>
        <Reveal className="mt-8">
          <AvailabilityNote tone="ink" className="max-w-3xl" />
        </Reveal>
        <Reveal className="mt-8">
          <Link
            href="/communications"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-iris transition-colors hover:text-bone-text"
          >
            See communications
            <span aria-hidden>&rarr;</span>
          </Link>
        </Reveal>
      </Panel>

      <Panel tone="bone" id="act" index="07" kicker="Act">
        <SectionHeading
          title="Intelligence that ends in something happening."
          lede="A recommendation nobody acts on is just a report. Looped closes the gap between knowing and doing, with a person deciding anything that carries a consequence."
        />
        <Reveal className="mt-12">
          <CapabilityGrid items={ACT} />
        </Reveal>
        <Reveal className="mt-10">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet transition-colors hover:text-ink-text"
          >
            See the three autonomy modes
            <span aria-hidden>&rarr;</span>
          </Link>
        </Reveal>
      </Panel>

      <Panel tone="ink" id="learn" index="08" kicker="Learn">
        <SectionHeading
          tone="ink"
          title="Next year starts from everything this year proved."
          lede="Most event knowledge lives in people's heads and leaves when they do. Looped keeps what worked against the event itself, so the next edition begins further ahead."
        />
        <Reveal className="mt-12">
          <CapabilityGrid items={LEARN} tone="ink" />
        </Reveal>
      </Panel>

      <Panel tone="bone" id="wider-ai" index="09" kicker="Your wider AI">
        <SectionHeading
          title="Your AI already knows your business. Looped knows your events."
          lede="Your organisation is building its own AI environment, and it should. Looped is not another one to choose between. It is the specialist event layer your wider AI can draw on: the operating model, the decision history, the event relationships, the portfolio intelligence and the governed actions a general assistant was never going to hold on its own."
        />
        <Reveal className="mt-12">
          <InteroperabilityLayer
            aiItems={[
              { label: "Enterprise assistants" },
              { label: "Team copilots" },
              { label: "Analytics and BI agents" },
              { label: "Custom internal AI" },
            ]}
            loopItems={[
              "The event operating model, from understanding through to learning",
              "Decision and outcome history, with the evidence behind each one",
              "The event, person and account relationships no single system holds",
              "Portfolio intelligence across every event you run",
              "Actions your team has approved, carried out within set limits",
            ]}
            systemsItems={[
              { label: "CRM" },
              { label: "Registration" },
              { label: "Email" },
              { label: "Awards" },
              { label: "Programme" },
              { label: "Voice" },
            ]}
            caption="An abstraction of the relationship, not a network diagram. Your wider AI reads what Looped is permitted to share and asks Looped to act within limits you set. Looped stays the authority on the event."
          />
        </Reveal>
        <Reveal className="mt-8">
          <p className="max-w-3xl text-balance font-serif text-2xl italic leading-snug text-ink-text sm:text-3xl">
            Your systems stay your systems. Your AI keeps its reach. Looped becomes the intelligence and action layer
            across the event.
          </p>
        </Reveal>
        <Reveal className="mt-8">
          <Link
            href="/data-and-integrations"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet transition-colors hover:text-ink-text"
          >
            See how ownership and permission work
            <span aria-hidden>&rarr;</span>
          </Link>
        </Reveal>
      </Panel>

      <ExploreNext links={EXPLORE} />

      <ClosingCTA
        title="See it running against an event you actually know."
        body="Pilot partners are shaping what Looped becomes next. If you run conferences or awards and you want the intelligence layer under your team rather than another tool beside it, start here."
      />
    </>
  );
}
