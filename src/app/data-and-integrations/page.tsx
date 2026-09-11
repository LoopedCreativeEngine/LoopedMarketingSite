import type { Metadata } from "next";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { CapabilityGrid, type Capability } from "@/components/product/CapabilityGrid";
import { DataFabric } from "@/components/product/DataFabric";
import { InteroperabilityLayer } from "@/components/product/InteroperabilityLayer";
import { ClosingCTA } from "@/components/ui/ClosingCTA";
import { ExploreNext } from "@/components/ui/ExploreNext";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Event data and integrations for organiser teams",
  description:
    "Looped connects to the CRM, registration, awards, programme, marketing and messaging systems you already run. Your accounts, your data, your channels.",
  path: "/data-and-integrations",
});

const SYSTEMS = [
  { label: "CRM" },
  { label: "Registration" },
  { label: "Awards" },
  { label: "Programme" },
  { label: "Marketing" },
  { label: "Email" },
  { label: "Messaging" },
  { label: "Voice" },
  { label: "Creative" },
  { label: "Analytics" },
  { label: "Enrichment" },
  { label: "File imports" },
];

const OUTPUTS = [
  "One view of a person across every event you run",
  "Account history that survives a change of owner",
  "Communication eligibility answered before you send",
  "Evidence a partner will accept at renewal",
];

const ESTATE: Capability[] = [
  {
    title: "CRM",
    body: "Two-way with Salesforce and HubSpot, so commercial context reaches the platform and approved outcomes return to the record your sales team lives in.",
  },
  {
    title: "Registration",
    body: "Bookings, ticket types and pace read as the demand signal they are, rather than as a report someone exports on a Friday.",
    status: "pilot",
  },
  {
    title: "Awards",
    body: "Categories, entrants, entry status, judging outcomes, finalists and winners tracked as one lifecycle rather than four spreadsheets.",
    status: "pilot",
  },
  {
    title: "Programme",
    body: "Sessions, tracks, speakers and timings held as living programme data that other teams can build on.",
    status: "pilot",
  },
  {
    title: "Marketing",
    body: "Campaign plans, audiences and performance connected to the intelligence that shaped them.",
  },
  {
    title: "Email",
    body: "Sends run through your own sending account and sender reputation, driven by the approved plan.",
  },
  {
    title: "Messaging",
    body: "WhatsApp, SMS and RCS connected through your own numbers and verified sender, run as one journey alongside email rather than as separate blasts.",
    status: "soon",
  },
  {
    title: "Voice",
    body: "AI and human calling on your own voice account, with recording, transcription and outcome classification, bounded by a per-event spend cap.",
    status: "pilot",
  },
  {
    title: "Creative",
    body: "Generated assets delivered into your campaign workflow, and exported for your designers to take further.",
  },
  {
    title: "Analytics",
    body: "Performance read alongside the plan it was measured against, so a number always arrives with its context.",
    status: "pilot",
  },
  {
    title: "Data and enrichment",
    body: "Company and contact enrichment through connected providers, plus live web research, briefed by your approved audience intelligence.",
  },
  {
    title: "Controlled file imports",
    body: "The reality of this industry: historical attendee lists, P&L files, entrant exports. Imported deliberately, with the source and the permitted use recorded.",
  },
];

const INTELLIGENCE: Capability[] = [
  {
    title: "One person, resolved",
    body: "The same individual appearing in four systems under three spellings is recognised as one person, so your team stops arguing about which list is right.",
  },
  {
    title: "People, organisations and events",
    body: "Looped holds the relationships between them: who works where, which account they sit on, which events they have touched and in what role.",
  },
  {
    title: "Cross-event history",
    body: "A relationship that spans a conference, an awards programme and a sister event reads as one history rather than three unrelated records.",
  },
  {
    title: "Source and trust",
    body: "Every fact carries where it came from and how much weight it deserves. A verified booking is not treated the same as a scraped guess.",
  },
  {
    title: "Freshness",
    body: "Context ages. Looped knows how old something is and flags when a decision is resting on data that has gone stale.",
  },
  {
    title: "Honest gaps",
    body: "Where the data does not support an answer, you get that, rather than a confident number nobody can defend in a renewal meeting.",
  },
];

const GOVERNANCE: Capability[] = [
  {
    title: "Authorised use",
    body: "Data is used for the purposes your organisation has authorised, and that authorisation is recorded rather than assumed.",
  },
  {
    title: "Access controls",
    body: "Teams see what their role needs. A telesales caller and a portfolio director are looking at the same platform and not the same data.",
  },
  {
    title: "Communication eligibility",
    body: "Consent, preference and suppression are checked at the point of sending, per channel, not reconciled afterwards.",
  },
  {
    title: "Organisational ownership",
    body: "Your data belongs to your organisation. It is not pooled with other operators, and it does not become someone else's advantage.",
  },
  {
    title: "Personal data protection",
    body: "Personal data is protected before anything reaches a model, and the platform is built to keep it that way by default rather than by configuration.",
  },
  {
    title: "Traceable decisions",
    body: "What was approved, by whom, on what evidence. The audit trail exists because a partner will eventually ask.",
  },
];

const CONTENTS = [
  { id: "shape", label: "A layer between, not a replacement" },
  { id: "estate", label: "What Looped connects to" },
  { id: "between", label: "The intelligence between" },
  { id: "permission", label: "Permission and ownership" },
  { id: "wider-ai", label: "Your AI, and Looped" },
];

const EXPLORE = [
  {
    href: "/communications",
    label: "Communications",
    blurb: "Where eligibility, contact pressure and channel ownership become a daily decision.",
  },
  {
    href: "/how-it-works",
    label: "How Looped works",
    blurb: "The approval model and the limits that govern what Looped may do on its own.",
  },
  {
    href: "/pillars/portfolio",
    label: "Portfolio and leadership",
    blurb: "What connected data makes possible across a whole portfolio of events.",
  },
  {
    href: "/capabilities",
    label: "Full capability index",
    blurb: "The diligence view, including where each integration genuinely sits today.",
  },
];

export default function DataAndIntegrationsPage(): React.ReactElement {
  return (
    <>
      <PageHero
        kicker="Data and integrations"
        title="Your systems stay your systems. Looped makes the intelligence between them useful."
        lede="Nobody needs another system of record. Event teams already have a CRM, a registration platform, an awards process and a marketing stack. What they do not have is anything that understands the relationships running between them."
        secondaryCta={{ href: "/capabilities", label: "See the capability index" }}
        contents={CONTENTS}
      />

      <Panel tone="paper" id="shape" index="01" kicker="The shape of it">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">A layer between, not a replacement for.</h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-graphite sm:text-lg">
              Looped reads from the systems you already run and writes approved outcomes back to them. Your CRM stays
              your CRM. Your registration platform keeps doing what it does well.
            </p>
            <p className="mt-4 text-base leading-relaxed text-graphite">
              What changes is that the space between them stops being a gap your team crosses manually, several times a
              week, from memory.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-7">
            <DataFabric
              systems={SYSTEMS}
              layerTitle="Looped intelligence layer"
              layerBody="Resolves who is who, holds the relationships between people, organisations and events, and keeps the history that no single system was ever going to hold on its own."
              outputs={OUTPUTS}
            />
          </Reveal>
        </div>
      </Panel>

      <Panel tone="bone" id="estate" index="02" kicker="The estate">
        <SectionHeading
          title="What Looped connects to."
          lede="A focused set of real, end-to-end connections rather than a directory of logos. Each one switches on with your own account or key, and each is a working two-way connection rather than a badge on a page."
        />
        <Reveal className="mt-12">
          <CapabilityGrid items={ESTATE} />
        </Reveal>
      </Panel>

      <Panel tone="ink" id="between" index="03" kicker="The intelligence between">
        <SectionHeading
          tone="ink"
          title="The work no individual system was built to do."
          lede="Each of your systems is right about its own corner. None of them can tell you that the person entering the awards is the same person who chaired a session two years ago and sits on an account renewing next month."
        />
        <Reveal className="mt-12">
          <CapabilityGrid items={INTELLIGENCE} tone="ink" />
        </Reveal>
      </Panel>

      <Panel tone="bone" id="permission" index="04" kicker="Permission">
        <SectionHeading
          title="Seeing data does not automatically give an event team the right to use it."
          lede="This is the line the industry gets wrong most often, and the one a partner, a regulator or an attendee will eventually test. Looped treats permitted use as a property of the data, not a policy in a document."
        />
        <Reveal className="mt-12">
          <CapabilityGrid items={GOVERNANCE} />
        </Reveal>
        <Reveal className="mt-14">
          <p className="max-w-3xl text-balance font-serif text-2xl italic leading-snug text-ink-text sm:text-3xl">
            Your accounts. Your data. Your channels. Looped intelligence across all of them.
          </p>
        </Reveal>
      </Panel>

      <Panel tone="ink" id="wider-ai" index="05" kicker="Your AI, and Looped">
        <SectionHeading
          tone="ink"
          title="Your other AI can draw on Looped. On your terms."
          lede="The same discipline that governs what Looped does with your data governs what your wider AI environment can do with Looped. Your assistants and agents consume the event intelligence you permit, through a governed interface, and ask Looped to act within the limits you set. Looped stays the authority on the tenant, the policy, the security and the consequential action."
        />
        <Reveal className="mt-12">
          <InteroperabilityLayer
            tone="ink"
            aiItems={[
              { label: "Enterprise assistants" },
              { label: "Team copilots" },
              { label: "Analytics and BI agents" },
              { label: "Custom internal AI" },
            ]}
            loopItems={[
              "Event intelligence, shared to the scope you permit",
              "Relationships across people, organisations and events",
              "Decision and outcome history, with its evidence",
              "Portfolio intelligence across every event you run",
              "Actions your team has approved, inside set limits",
            ]}
            systemsItems={[
              { label: "CRM" },
              { label: "Registration" },
              { label: "Email" },
              { label: "Awards" },
              { label: "Programme" },
              { label: "Voice" },
            ]}
            caption="Governed interoperability, not open access. Your wider AI reads only what it is permitted to read and can request only what it is permitted to request. Nothing here lets an external model step around a tenant boundary, a permission or a human decision."
          />
        </Reveal>
      </Panel>

      <ExploreNext links={EXPLORE} tone="paper" />

      <ClosingCTA
        title="Bring your stack. Keep your stack."
        body="Most pilots start by connecting one CRM and one historical event export. That is usually enough to show a team something about their own audience they did not know."
      />
    </>
  );
}
