import type { Metadata } from "next";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { AnchorNav } from "@/components/product/AnchorNav";
import { CapabilityList, type Capability } from "@/components/product/CapabilityGrid";
import { ClosingCTA } from "@/components/ui/ClosingCTA";
import { ExploreNext } from "@/components/ui/ExploreNext";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AvailabilityNote } from "@/components/ui/StatusPill";
import { cn } from "@/lib/cn";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Capabilities: what Looped does, honestly labelled",
  description:
    "The full capability index for conference and awards teams, grouped for diligence, with an honest label on anything not yet fully rolled out.",
  path: "/capabilities",
});

type Category = {
  id: string;
  name: string;
  intro: string;
  items: Capability[];
};

type Chapter = {
  id: string;
  label: string;
  index: string;
  title: string;
  lede: string;
  tone: "bone" | "ink" | "paper";
  categories: Category[];
};

const CHAPTERS: Chapter[] = [
  {
    id: "intelligence",
    label: "Intelligence",
    index: "01",
    tone: "bone",
    title: "Intelligence, planning and forecasting",
    lede: "What Looped knows before a plan is written, and what it does with that knowledge once targets are set.",
    categories: [
      {
        id: "intelligence-context",
        name: "Intelligence",
        intro: "The live picture every other capability reads from.",
        items: [
          { title: "Sector and market intelligence", body: "Live research on trends, regulation, technology and talent movement in your sector." },
          { title: "Competitor events", body: "Who else is programming for your audience, what they are running and where they are weak." },
          { title: "Audience behaviour", body: "Engagement patterns in your own historical attendee data, including who quietly stopped coming." },
          { title: "Market mapping and segmentation", body: "The addressable audience sized and segmented by function, seniority, sector and geography." },
          { title: "Topic and content signals", body: "The themes gaining ground, and the white space competing agendas have left open." },
          { title: "Account and sponsor context", body: "Who buys, who has bought before, and what they bought it for." },
          { title: "Coherence checks", body: "Flags where your programme, website copy and campaign have drifted out of agreement." },
        ],
      },
      {
        id: "planning",
        name: "Planning",
        intro: "Turning the picture into a plan the team can work to.",
        items: [
          { title: "Campaign plans", body: "Multi-phase plans with channel mix, budget by phase and a week-by-week calendar to event day." },
          { title: "Audience targets", body: "Registration targets by segment with the pace required to reach them." },
          { title: "Programme strategy", body: "Themes, tracks and session architecture planned against demand." },
          { title: "Commercial planning", body: "Package architecture, inventory, pricing tiers and account priorities." },
          { title: "Pricing strategy", body: "Delegate pricing analysed against competitors and your own conversion history." },
          { title: "Budget scenarios", body: "Optimistic, base and conservative reforecasts built from current performance." },
          { title: "Thirty-day plans", body: "A rolling near-term plan per team, so priorities are explicit rather than assumed." },
        ],
      },
      {
        id: "forecasting",
        name: "Forecasting",
        intro: "What the evidence says is likely, stated as a range rather than a promise.",
        items: [
          { title: "Registration pace forecasts", body: "Projected registrations against target, with the confidence attached." },
          { title: "Revenue forecasts", body: "Delegate, sponsorship and table revenue modelled together." },
          { title: "Conversion forecasts", body: "Expected conversion by funnel stage and segment." },
          { title: "Renewal risk", body: "Which contracted partners are showing the signals that precede a non-renewal." },
          { title: "Target achievability", body: "Whether the committed number is still reachable, and what would have to change.", status: "pilot" },
          { title: "Multi-year pipeline", body: "Sponsor, delegate and speaker pipeline across future editions.", status: "pilot" },
        ],
      },
    ],
  },
  {
    id: "audience",
    label: "Audience",
    index: "02",
    tone: "ink",
    title: "Marketing, communications, creative and the audience",
    lede: "Everything that reaches a human being: how the campaign is built, how it is sent, what it looks like, and what happens when they arrive.",
    categories: [
      {
        id: "marketing",
        name: "Marketing and audience",
        intro: "The demand engine, from strategy through to weekly correction.",
        items: [
          { title: "Personas and ICP", body: "Detailed personas with motivations, objections and content preferences." },
          { title: "Messaging architecture", body: "Core message pillars, per-persona value propositions and a defined tone of voice." },
          { title: "Campaign calendar", body: "Week-by-week content and campaign calendar from launch to event day." },
          { title: "Email sequences", body: "Multi-stage nurture copy segmented by persona." },
          { title: "Paid and organic", body: "Paid channel allocation, ad variants for testing, and an organic social calendar." },
          { title: "Search and answer-engine strategy", body: "Keyword research mapped to pages, and copy shaped for how people now search." },
          { title: "Landing and registration copy", body: "Registration page structure and copy, with tracking conventions." },
          { title: "Lapsed and returning audiences", body: "Reactivation of the people who came before and did not come back." },
          { title: "Abandoned registration recovery", body: "The journeys that pick up people who started and stopped.", status: "pilot" },
          { title: "Campaign optimisation", body: "A weekly read on underperformance with recommended budget and creative pivots." },
        ],
      },
      {
        id: "communications",
        name: "Communications",
        intro: "One journey per person, across the channels you own.",
        items: [
          { title: "Email", body: "Through your own sending account and sender reputation." },
          { title: "WhatsApp, SMS and RCS", body: "Messaging channels connected through your own numbers and verified sender.", status: "soon" },
          { title: "Shared communications workspace", body: "What has been sent, what came back and what is queued, visible to every team." },
          { title: "Reply triage", body: "Incoming replies read, summarised and routed rather than left in an inbox.", status: "pilot" },
          { title: "Contact pressure", body: "How much your brand has already asked of someone, before anyone asks again." },
          { title: "Suppression and eligibility", body: "Consent, preference and suppression enforced at the point of sending." },
          { title: "Role-aware messaging", body: "The same person addressed correctly as speaker, sponsor contact, judge or delegate." },
        ],
      },
      {
        id: "creative",
        name: "Creative",
        intro: "Campaign assets at the volume a real event consumes.",
        items: [
          { title: "Speaker and sponsor cards", body: "Personalised announcement assets generated per name." },
          { title: "Finalist and winner assets", body: "The full shortlist, then the winners, produced against your brand rules." },
          { title: "Session and category graphics", body: "Programme artwork built from the approved agenda." },
          { title: "Campaign banners and email graphics", body: "Display and email creative across the sizes your channels need." },
          { title: "Attendee share assets", body: "Assets that people will genuinely post, not ones they are asked to." },
          { title: "Concept territories", body: "Creative directions with names, visual themes and headline angles." },
          { title: "Connected image generation", body: "Generation briefed by the approved event context and brand rules." },
          { title: "Video workflows", body: "Short-form video for the formats where it genuinely helps.", status: "soon" },
          { title: "Export to design tools", body: "Handoff so your designers can take the work further.", status: "soon" },
        ],
      },
      {
        id: "attendees",
        name: "Attendees",
        intro: "The journey from first touch to the room.",
        items: [
          { title: "Audience segmentation", body: "Segments built from behaviour and history, not just job title." },
          { title: "VIP journeys", body: "Distinct treatment for the people whose attendance the event depends on.", status: "pilot" },
          { title: "Group bookings", body: "Group opportunities, rate strategy and outreach templates." },
          { title: "Pre-event information", body: "Practical arrival, agenda and logistics communication.", status: "pilot" },
          { title: "Dietary and accessibility requirements", body: "Collected properly and carried through to the day.", status: "pilot" },
          { title: "Feedback and post-event synthesis", body: "Scores, sentiment and comments turned into an actionable report." },
        ],
      },
      {
        id: "networking",
        name: "Networking",
        intro: "Treated as an extension of the programme, not an app feature.",
        items: [
          { title: "Interest-based matching", body: "Who else is worth meeting, based on what an attendee said they came for.", status: "soon" },
          { title: "Session-linked connections", body: "Connections suggested from the sessions someone actually chose.", status: "soon" },
          { title: "Networking support conversations", body: "Help finding the right people, in the moment.", status: "soon" },
        ],
      },
    ],
  },
  {
    id: "programme",
    label: "Programme",
    index: "03",
    tone: "bone",
    title: "Content, programme and speakers",
    lede: "From market signal to a finished agenda, and the speaker workflows that make it real.",
    categories: [
      {
        id: "content",
        name: "Content and programme",
        intro: "The programme engine.",
        items: [
          { title: "Key topics", body: "The highest-signal topics that should anchor the programme." },
          { title: "Content gap analysis", body: "Competing agendas mapped, and the differentiation left open to you." },
          { title: "Programme themes and narrative", body: "Overarching themes and the editorial thread connecting sessions." },
          { title: "Agenda architecture", body: "Session-by-session structure with timing, pacing and energy arc." },
          { title: "Day flow quality", body: "Adjacency, breaks and pacing checked across the whole day." },
          { title: "Session development", body: "Per-session briefs, then published titles, abstracts and descriptions." },
          { title: "Abstract scoring", body: "Submitted abstracts scored for quality, originality, bias and theme fit." },
          { title: "Advisory panel", body: "Programme committee recommendations by expertise and network reach." },
          { title: "Agenda conflict awareness", body: "Clashes and imbalances surfaced while they can still be fixed." },
          { title: "Topic learning across editions", body: "Which themes earned attention, carried into the next programme." },
        ],
      },
      {
        id: "speakers",
        name: "Speakers",
        intro: "Discovery through to the green room.",
        items: [
          { title: "Speaker discovery", body: "Shortlists per track, researched rather than recycled from last year." },
          { title: "Suitability and network reach", body: "Whether a name will actually draw the audience you need." },
          { title: "Outreach and follow-up", body: "Personalised invitations with multi-touch follow-up sequences." },
          { title: "Asset collection", body: "Headshots, bios, logos and links submitted through a secure link." },
          { title: "Briefing packs", body: "Objectives, audience profile, AV specification and on-day timeline." },
          { title: "Chair briefings", body: "Discussion prompts, timekeeping and Q&A facilitation notes." },
          { title: "Deadline tracking", body: "Presentation and material deadlines chased before they slip.", status: "pilot" },
          { title: "Speaker runsheet", body: "Speaker-by-speaker run of show with timing and logistics." },
          { title: "Speaker network across the portfolio", body: "Appearance frequency and relationships across every event you run." },
        ],
      },
    ],
  },
  {
    id: "commercial",
    label: "Commercial",
    index: "04",
    tone: "ink",
    title: "Commercial, sponsorship delivery, telesales and voice",
    lede: "One commercial relationship from first contact through delivery to renewal, and the calling operation around it.",
    categories: [
      {
        id: "commercial-sales",
        name: "Commercial",
        intro: "Finding, framing and winning the partner conversation.",
        items: [
          { title: "Prospect discovery", body: "Targeted prospect lists with profiles, activation rationale and outreach angle." },
          { title: "Lookalike prospecting", body: "Modelling against your existing book to widen the pool credibly." },
          { title: "Account prioritisation", body: "Where commercial time is most likely to convert." },
          { title: "Partner briefs and pitch narratives", body: "Bespoke, grounded in audience and session evidence." },
          { title: "Package builder", body: "Tier naming, benefit inventory and pricing architecture." },
          { title: "Session sponsorship mapping", body: "Programme sessions matched to sponsor categories by audience fit." },
          { title: "Media pack", body: "Audience profile, reach and package tiers in a document you can send." },
          { title: "Pipeline health", body: "Stage conversion, revenue at risk, category gaps and velocity." },
          { title: "Meeting preparation", body: "Pre-meeting briefings with attendee context and talking points." },
          { title: "Renewal and upsell", body: "Renewal scoring across the contracted book, and identified upsell." },
        ],
      },
      {
        id: "sponsorship-delivery",
        name: "Sponsorship delivery",
        intro: "The half of the relationship that decides whether they renew.",
        items: [
          { title: "Sponsor onboarding", body: "What was sold, turned into what now has to happen.", status: "pilot" },
          { title: "Asset and deadline collection", body: "Logos, copy and materials gathered through a secure link." },
          { title: "Allocations", body: "Speaking slots, delegate passes and entitlements tracked against the contract.", status: "pilot" },
          { title: "Activation briefs", body: "On-site and digital activation planned rather than improvised." },
          { title: "Delivery readiness", body: "What is outstanding, and who is holding it up.", status: "pilot" },
          { title: "Sponsor FAQ and co-marketing", body: "The recurring questions answered, and assets for partners to amplify." },
          { title: "Post-event ROI report", body: "Delivery against the contracted package, per partner." },
        ],
      },
      {
        id: "telesales",
        name: "Telesales",
        intro: "Better lists, better briefs, better calls.",
        items: [
          { title: "List segmentation", body: "Priority, persona fit and propensity, with call-volume recommendations." },
          { title: "Dynamic call lists", body: "A queue rebuilt from what has actually happened since yesterday.", status: "pilot" },
          { title: "Call reason and pre-call context", body: "Why this person, why now, and what they have already seen." },
          { title: "Call scripts and objection handling", body: "By segment and objective, with close variations." },
          { title: "Discovery playbook", body: "A versioned, approvable discovery-call playbook." },
          { title: "Warm-before-call sequencing", body: "A message before the dial, on the channel they respond to.", status: "soon" },
          { title: "Call outcomes and follow-up", body: "Outcomes captured and the next action created." },
          { title: "Call log intelligence", body: "Objection patterns, conversion bottlenecks and script gaps." },
          { title: "Registration reconciliation", body: "Calls matched back to the registrations they produced.", status: "pilot" },
          { title: "Awards calling campaigns", body: "Entry conversion, nominations drives and gala table sales." },
        ],
      },
      {
        id: "voice",
        name: "Voice",
        intro: "AI calling on your own account, switched on when you choose.",
        items: [
          { title: "AI voice agents", body: "Briefed from your approved scripts, personas and segments." },
          { title: "Recording and transcription", body: "Every call recorded and transcribed automatically." },
          { title: "Outcome classification", body: "Call outcomes classified without a rep typing notes." },
          { title: "Per-event spend cap", body: "A hard ceiling on voice spend, set per event." },
          { title: "Relationship suppression", body: "Named accounts that must never be auto-dialled are hard-blocked." },
          { title: "Outbound dialling", body: "Off by default. Enabled deliberately, on your own voice account.", status: "pilot" },
          { title: "Human handoff", body: "Escalation from AI voice to a person, with the context attached.", status: "pilot" },
          { title: "Inbound call handling", body: "Answering inbound calls with event context.", status: "soon" },
          { title: "Consent and calling-window controls", body: "Automated compliance gating around dialling.", status: "soon" },
        ],
      },
    ],
  },
  {
    id: "awards",
    label: "Awards",
    index: "05",
    tone: "bone",
    title: "Awards, entries, judges, finalists and winners",
    lede: "The awards year is a different business from a conference, and it is treated as one.",
    categories: [
      {
        id: "awards-programme",
        name: "Awards",
        intro: "Category strategy and the shape of the programme.",
        items: [
          { title: "Category strategy", body: "Awards landscape intelligence and category architecture." },
          { title: "Category performance", body: "Which categories carry entries and which quietly never do." },
          { title: "Programme benchmarking", body: "Your awards structure compared against the market." },
          { title: "Entry forecasting", body: "Expected entry volume by category, against deadline." },
          { title: "Deadline management", body: "The deadline sequence that actually governs the year.", status: "pilot" },
          { title: "Awards night logistics", body: "Tickets, tables, guest information and seating utility.", status: "pilot" },
        ],
      },
      {
        id: "entries",
        name: "Entries",
        intro: "Getting good entries in, without writing them.",
        items: [
          { title: "Entrant acquisition", body: "Finding the organisations who should be entering and are not." },
          { title: "Past entrant reactivation", body: "The people who entered before, approached with their own history." },
          { title: "Category matching", body: "An email-gated public tool that matches a company to the best-fit categories with reasons." },
          { title: "Entry readiness guidance", body: "What a complete entry involves, and what this entrant still needs." },
          { title: "Incomplete entry journeys", body: "The half-finished entries chased before the deadline passes.", status: "pilot" },
          { title: "Entry FAQ", body: "Eligibility, process, judging and key dates, answered once." },
          { title: "Entry conversion campaigns", body: "Scripts and sequences for converting interest into submissions." },
          { title: "Entrant self-submission portal", body: "Entrants submitting directly into the platform.", status: "soon" },
        ],
      },
      {
        id: "judges",
        name: "Judges",
        intro: "Credible judging, coordinated.",
        items: [
          { title: "Judge discovery", body: "Shortlists per confirmed category, researched by expertise." },
          { title: "Judge assets", body: "Promotional assets and profile copy for confirmed judges." },
          { title: "Conflict awareness", body: "Conflicts of interest identified before judging begins.", status: "pilot" },
          { title: "Judging readiness", body: "Whether each category has the panel it needs, in time.", status: "pilot" },
          { title: "Scoring reminders", body: "Chasing the judges who have not scored yet.", status: "pilot" },
          { title: "Judge scoring portal", body: "Judges scoring entries directly in the platform.", status: "soon" },
        ],
      },
      {
        id: "finalists",
        name: "Finalists and winners",
        intro: "The moments the whole year is for.",
        items: [
          { title: "Finalist workflows", body: "Shortlist confirmed, communicated and tracked." },
          { title: "Finalist content packs", body: "The information and assets finalists need to promote themselves." },
          { title: "Finalist creative at volume", body: "Personalised cards and share variants across the full list." },
          { title: "Announcement copy", body: "Platform-specific announcement copy, timed to the reveal." },
          { title: "Winner assets", body: "Winner creative ready when the result is confirmed." },
          { title: "Winner self-serve downloads", body: "Winners collecting their own assets from a portal.", status: "pilot" },
          { title: "Post-event promotion", body: "The follow-through that keeps the win visible." },
          { title: "Next-year reactivation", body: "This year's finalists approached as next year's entrants." },
        ],
      },
    ],
  },
  {
    id: "operations",
    label: "Operations",
    index: "06",
    tone: "ink",
    title: "Operations, conversations, data, portfolio and governance",
    lede: "The load-bearing structure: delivery, the systems underneath, the view across every event, and the rules that hold it all in place.",
    categories: [
      {
        id: "event-operations",
        name: "Event operations",
        intro: "Delivery, risk and the day itself.",
        items: [
          { title: "Delivery timeline", body: "Brief to post-event close, with milestones, owners and critical path." },
          { title: "Run of show", body: "Minute-by-minute, with AV cues, speaker movements, crew and contingencies." },
          { title: "Risk detection and mitigation", body: "Operational risks surfaced with a plan attached, not just a flag." },
          { title: "Readiness tracking", body: "Speaker, sponsor and programme readiness in one view.", status: "pilot" },
          { title: "Stakeholder deadlines", body: "Every external deadline, and who is late." },
          { title: "Change management", body: "What a dropped speaker or moved session breaks downstream.", status: "pilot" },
          { title: "Master FAQ", body: "Logistics-accurate, structured by audience." },
          { title: "Meeting intelligence", body: "Transcripts turned into decisions, actions and follow-ups." },
          { title: "Post-event workflows", body: "Debrief, report and the handover into next year." },
        ],
      },
      {
        id: "ai-conversations",
        name: "AI conversations",
        intro: "Covered in full on the AI conversations page.",
        items: [
          { title: "Event concierge", body: "An assistant on your own event site, grounded in a knowledge base you control." },
          { title: "Awards entry readiness coach", body: "Category fit and completeness guidance for entrants." },
          { title: "Sales concierge", body: "Qualifying conversations with consented capture and routing." },
          { title: "Stakeholder support", body: "Speaker, sponsor and judge questions answered in context.", status: "pilot" },
          { title: "In-platform assistant", body: "For your own team, on every page, with live cross-event context." },
          { title: "Voice conversations", body: "AI voice on your own account, recorded and classified." },
        ],
      },
      {
        id: "data",
        name: "Data",
        intro: "What Looped holds, and on whose authority.",
        items: [
          { title: "Identity resolution", body: "The same person across systems, recognised as one person." },
          { title: "People, organisations and events", body: "The relationships between them, held and kept current." },
          { title: "Cross-event history", body: "One history across your whole portfolio." },
          { title: "Source and trust", body: "Where a fact came from, and how much weight it deserves." },
          { title: "Controlled imports", body: "Historical lists and files imported deliberately, with permitted use recorded." },
          { title: "Enrichment", body: "Company and contact enrichment through connected providers." },
          { title: "Honest gaps", body: "An explicit answer when the data does not support one." },
        ],
      },
      {
        id: "integrations",
        name: "Integrations",
        intro: "A focused set of real connections, not a directory of logos.",
        items: [
          { title: "CRM", body: "Salesforce and HubSpot, connected two-way with your own credentials." },
          { title: "Email", body: "Sending through your own account and sender reputation." },
          { title: "Payments", body: "Stripe for credits and billing." },
          { title: "Web research and extraction", body: "Live web-grounded research feeding the intelligence layer." },
          { title: "Voice", body: "Your own voice account, with recording and transcription." },
          { title: "Messaging", body: "WhatsApp, SMS and RCS through your own numbers.", status: "soon" },
          { title: "Registration and awards platforms", body: "Connections into the event systems you already run.", status: "pilot" },
          { title: "Data warehouse and inbound feeds", body: "Scheduled inbound data from your own warehouse.", status: "soon" },
        ],
      },
      {
        id: "portfolio",
        name: "Portfolio",
        intro: "The view for the people carrying more than one event.",
        items: [
          { title: "Cross-event performance", body: "Every event on the same scorecard, comparable at last." },
          { title: "Audience and account overlap", body: "Overlap at person and company level across the portfolio." },
          { title: "Sponsor whitespace", body: "Accounts buying one event that should be buying three." },
          { title: "Speaker reuse", body: "Appearance frequency across your events." },
          { title: "Format and topic movement", body: "What is working, where, and what has stopped." },
          { title: "Event trajectory and maturity", body: "Which events are growing, holding or quietly declining." },
          { title: "Opportunity detection", body: "New geographies, segments, formats and spin-off concepts." },
          { title: "Resource allocation", body: "Where the next pound and the next person should go.", status: "pilot" },
          { title: "Committed plan versus modelled outlook", body: "The official number and the current evidence, side by side.", status: "pilot" },
        ],
      },
      {
        id: "governance",
        name: "Governance",
        intro: "The part that gets asked about in procurement.",
        items: [
          { title: "Human approval gates", body: "A person approves anything that carries a consequence." },
          { title: "Autonomy modes", body: "Intelligence, approved execution or bounded automation, set by your organisation." },
          { title: "Access controls", body: "Role-appropriate access across teams and events." },
          { title: "Communication eligibility", body: "Consent and suppression enforced at the point of sending." },
          { title: "Spend caps", body: "Per-event ceilings on compute and voice." },
          { title: "Personal data protection", body: "Personal data protected before it reaches any model." },
          { title: "Audit trail", body: "What was approved, by whom, on what evidence." },
          { title: "Anti-fabrication", body: "Grounded answers, cited sources, and an honest refusal over an invented number." },
        ],
      },
      {
        id: "execution",
        name: "Execution",
        intro: "Where a decision becomes something that happened.",
        items: [
          { title: "Decision queue", body: "One cross-event approve and reject queue, with batch approval." },
          { title: "Task creation", body: "Owners and deadlines created from approved decisions." },
          { title: "Campaign launch", body: "Approved campaigns released to your connected channels." },
          { title: "Workflow updates", body: "Stakeholder workflows moved on as things happen." },
          { title: "Prioritisation", body: "What to do first, across every event." },
          { title: "Follow-up and chasing", body: "What has gone quiet, raised before it is too late." },
          { title: "Risk escalation", body: "Problems pointed at a named owner rather than a dashboard." },
        ],
      },
      {
        id: "reporting",
        name: "Reporting",
        intro: "Evidence you can put in front of a board or a partner.",
        items: [
          { title: "Post-event report", body: "Comprehensive performance report after the data is in." },
          { title: "Sponsor ROI reports", body: "Per partner, against what was actually contracted." },
          { title: "P&L analysis", body: "Revenue, cost, margin and variance from an uploaded P&L." },
          { title: "Event scorecard", body: "Revenue, content, sponsorship and satisfaction on one benchmark." },
          { title: "Strategic intelligence report", body: "A board-level synthesis across the portfolio." },
          { title: "Team debrief", body: "A structured debrief agenda built from what actually happened." },
          { title: "Live dashboards", body: "Per-team hubs and a cross-event command centre." },
        ],
      },
    ],
  },
];

const SPINE = CHAPTERS.map((chapter) => ({ id: chapter.id, label: chapter.label }));

const EXPLORE = [
  {
    href: "/platform",
    label: "The full platform",
    blurb: "The same story told as eight kinds of work rather than as an index.",
  },
  {
    href: "/how-it-works",
    label: "How Looped works",
    blurb: "The operating loop and the autonomy modes behind every capability listed here.",
  },
  {
    href: "/data-and-integrations",
    label: "Data and integrations",
    blurb: "What Looped connects to, and the rules on what it may do with your data.",
  },
  {
    href: "/demo",
    label: "Talk to us",
    blurb: "Bring the capability that matters most to your team and we will show you exactly where it sits.",
  },
];

export default function CapabilitiesPage(): React.ReactElement {
  return (
    <>
      <PageHero
        kicker="Capabilities"
        title="Does Looped do that? The full index, honestly labelled."
        lede="This is the diligence page. Every capability grouped the way an event team would ask about it, with a plain label on anything not yet fully rolled out. If something matters to you and is not here, ask us rather than assuming."
        secondaryCta={{ href: "/platform", label: "See the platform" }}
        contents={SPINE}
      />

      <Panel tone="paper" kicker="How to read this page">
        <Reveal className="max-w-3xl">
          <AvailabilityNote />
          <p className="mt-4 text-sm leading-relaxed text-muted-ink">
            Capabilities without a label are available to pilot teams today. We keep this page current rather than
            aspirational, because the alternative is a procurement conversation that goes badly six weeks in.
          </p>
        </Reveal>
      </Panel>

      <AnchorNav items={SPINE} label="Capability chapters" />

      {CHAPTERS.map((chapter) => (
        <Panel key={chapter.id} tone={chapter.tone} id={chapter.id} index={chapter.index} kicker={chapter.label}>
          <SectionHeading
            tone={chapter.tone === "ink" ? "ink" : "light"}
            title={chapter.title}
            lede={chapter.lede}
          />
          <div className="mt-12 grid gap-x-12 gap-y-10 lg:grid-cols-2">
            {chapter.categories.map((category) => (
              <Reveal key={category.id}>
                <div
                  id={category.id}
                  className={cn(
                    "scroll-mt-32 border-t pt-6",
                    chapter.tone === "ink" ? "border-white/10" : "border-[rgba(23,19,31,0.12)]",
                  )}
                >
                  <h3
                    className={cn(
                      "font-serif text-2xl tracking-tight",
                      chapter.tone === "ink" ? "text-bone-text" : "text-ink-text",
                    )}
                  >
                    {category.name}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-sm italic leading-relaxed",
                      chapter.tone === "ink" ? "text-bone-dim/80" : "text-muted-ink",
                    )}
                  >
                    {category.intro}
                  </p>
                  <CapabilityList
                    items={category.items}
                    tone={chapter.tone === "ink" ? "ink" : "light"}
                    className="mt-5"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Panel>
      ))}

      <ExploreNext links={EXPLORE} />

      <ClosingCTA
        title="Bring the capability your team actually argues about."
        body="The fastest way through a list this long is to tell us the three things that would decide it for you, and let us show you those against your own event."
      />
    </>
  );
}
