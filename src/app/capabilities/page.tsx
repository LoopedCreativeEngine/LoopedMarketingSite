import type { Metadata } from "next";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { PageClosing } from "@/components/ui/PageClosing";
import { PageIntro } from "@/components/ui/PageIntro";
import { AvailabilityNote, StatusPill, type Availability } from "@/components/ui/StatusPill";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Capabilities: what Looped does, honestly labelled",
  description:
    "The full capability index for conference and awards teams, grouped as an event team would ask about it, with a label on anything still rolling out.",
  alternates: { canonical: "/capabilities" },
  openGraph: {
    url: "/capabilities",
    title: "Capabilities: what Looped does, honestly labelled",
    description:
      "The diligence page. Every capability grouped for an event team, with an honest label on anything still rolling out.",
  },
};

type Item = { title: string; body: string; status?: Availability };
type Category = { id: string; name: string; intro: string; items: Item[] };
type Chapter = { id: string; kicker: string; title: string; lede: string; tone: "paper" | "stone" | "night"; categories: Category[] };

const CHAPTERS: Chapter[] = [
  {
    id: "intelligence",
    kicker: "Intelligence & planning",
    tone: "paper",
    title: "What Looped knows, and what it does with it.",
    lede: "The picture underneath every other capability, and the planning that turns it into a number the business can be run against.",
    categories: [
      {
        id: "intelligence-context",
        name: "Intelligence",
        intro: "The live picture every other capability reads from.",
        items: [
          { title: "Sector and market intelligence", body: "Live research on trends, regulation, technology and talent movement in your sector." },
          { title: "Competitor events", body: "Who else is programming for your audience, what they are running, and where they are weak." },
          { title: "Audience behaviour", body: "Engagement patterns in your own historical data, including who quietly stopped coming." },
          { title: "Market mapping", body: "The addressable audience sized and segmented by function, seniority, sector and geography." },
          { title: "Topic signals", body: "The themes gaining ground, and the white space competing agendas have left open." },
          { title: "Account and sponsor context", body: "Who buys, who has bought before, and what they bought it for." },
          { title: "Coherence checks", body: "Where your programme, website copy and campaign have drifted out of agreement." },
        ],
      },
      {
        id: "planning",
        name: "Planning",
        intro: "Turning the picture into a plan a team can work to.",
        items: [
          { title: "Campaign plans", body: "Multi-phase plans with channel mix, budget by phase and a calendar to event day." },
          { title: "Audience targets", body: "Registration targets by segment, with the pace required to reach them." },
          { title: "Programme strategy", body: "Themes, tracks and session architecture planned against real demand." },
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
          { title: "Registration pace", body: "Projected registrations against target, with the confidence attached." },
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
    kicker: "Audience & communications",
    tone: "stone",
    title: "Everything that reaches a human being.",
    lede: "How the campaign is built, how it is sent, what it looks like, and what happens when someone finally arrives.",
    categories: [
      {
        id: "marketing",
        name: "Marketing & audience",
        intro: "The demand engine, from strategy through to weekly correction.",
        items: [
          { title: "Personas and ICP", body: "Detailed personas with motivations, objections and content preferences." },
          { title: "Messaging architecture", body: "Message pillars, per-persona value propositions and a defined tone of voice." },
          { title: "Campaign calendar", body: "Week-by-week content and campaign calendar from launch to event day." },
          { title: "Email sequences", body: "Multi-stage nurture copy segmented by persona." },
          { title: "Paid and organic", body: "Channel allocation, ad variants for testing, and an organic social calendar." },
          { title: "Search and answer-engine strategy", body: "Keyword research mapped to pages, and copy shaped for how people now search." },
          { title: "Landing and registration copy", body: "Registration page structure and copy, with tracking conventions." },
          { title: "Lapsed and returning audiences", body: "Reactivation of the people who came before and did not come back." },
          { title: "Abandoned registration recovery", body: "The journeys that pick up people who started and stopped.", status: "pilot" },
          { title: "Campaign optimisation", body: "A weekly read on underperformance with budget and creative pivots." },
        ],
      },
      {
        id: "communications",
        name: "Communications",
        intro: "One journey per person, across the channels you own.",
        items: [
          { title: "Email", body: "Through your own sending account and sender reputation." },
          { title: "WhatsApp, SMS and RCS", body: "Messaging through your own numbers and verified sender.", status: "soon" },
          { title: "Shared communications view", body: "What has been sent, what came back and what is queued, visible to every team." },
          { title: "Reply triage", body: "Incoming replies read, summarised and routed rather than left in an inbox.", status: "pilot" },
          { title: "Contact pressure", body: "How much your brand has already asked of someone before anyone asks again." },
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
          { title: "Finalist and winner assets", body: "The full shortlist, then the winners, against your brand rules." },
          { title: "Category and session graphics", body: "Programme artwork built from the approved programme." },
          { title: "Banners and email graphics", body: "Display and email creative across the sizes your channels need." },
          { title: "Share assets", body: "Assets people will genuinely post, not ones they are asked to." },
          { title: "Concept territories", body: "Creative directions with names, visual themes and headline angles." },
          { title: "Connected image generation", body: "Generation briefed by the approved event context and brand rules.", status: "pilot" },
          { title: "Short-form video", body: "Video for the few formats where it genuinely helps.", status: "soon" },
          { title: "Handoff to design tools", body: "Assets and copy leaving in a form your designers can take further.", status: "soon" },
        ],
      },
      {
        id: "participants",
        name: "Attendees & networking",
        intro: "The journey from first touch to the room.",
        items: [
          { title: "Audience segmentation", body: "Segments built from behaviour and history, not just job title." },
          { title: "Group bookings", body: "Group opportunities, rate strategy and outreach." },
          { title: "VIP journeys", body: "Distinct treatment for the attendees the event genuinely depends on.", status: "pilot" },
          { title: "Pre-event information", body: "Practical arrival, agenda and logistics communication.", status: "pilot" },
          { title: "Dietary and accessibility needs", body: "Collected properly and carried through to the day.", status: "pilot" },
          { title: "Session and people suggestions", body: "Who and what is worth an attendee's time, from what they came for.", status: "soon" },
          { title: "Feedback synthesis", body: "Scores, sentiment and comments turned into an actionable report." },
        ],
      },
    ],
  },
  {
    id: "programme",
    kicker: "Programme & speakers",
    tone: "paper",
    title: "From market signal to a finished programme.",
    lede: "The agenda, and the speaker workflows that turn a plan into a room full of people who turned up prepared.",
    categories: [
      {
        id: "content",
        name: "Content & programme",
        intro: "The programme engine.",
        items: [
          { title: "Key topics", body: "The highest-signal topics that should anchor the programme." },
          { title: "Content gap analysis", body: "Competing agendas mapped, and the differentiation left open to you." },
          { title: "Themes and narrative", body: "Overarching themes and the editorial thread connecting sessions." },
          { title: "Agenda architecture", body: "Session-by-session structure with timing, pacing and energy arc." },
          { title: "Day flow quality", body: "Adjacency, breaks and pacing checked across the whole day." },
          { title: "Session development", body: "Per-session briefs, then published titles, abstracts and descriptions." },
          { title: "Abstract scoring", body: "Submitted abstracts scored for quality, originality, bias and theme fit." },
          { title: "Advisory panel", body: "Programme committee recommendations by expertise and network reach." },
          { title: "Agenda conflicts", body: "Clashes, thin slots and theme collisions raised while the agenda can absorb it." },
        ],
      },
      {
        id: "speakers",
        name: "Speakers",
        intro: "Discovery through to the green room.",
        items: [
          { title: "Speaker discovery", body: "Shortlists per track, researched rather than recycled from last year." },
          { title: "Suitability and reach", body: "Whether a name will actually draw the audience you need." },
          { title: "Outreach and follow-up", body: "Personalised invitations with multi-touch follow-up." },
          { title: "Asset collection", body: "Headshots, bios, logos and links submitted through a secure link." },
          { title: "Briefing packs", body: "Objectives, audience profile, AV specification and on-day timeline." },
          { title: "Chair briefings", body: "Discussion prompts, timekeeping and Q&A facilitation notes." },
          { title: "Deadline tracking", body: "Presentation and material deadlines chased before they slip.", status: "pilot" },
          { title: "Runsheets", body: "Speaker-by-speaker run of show with timing and logistics." },
          { title: "Speaker network", body: "Appearance frequency and relationships across your portfolio." },
        ],
      },
    ],
  },
  {
    id: "commercial",
    kicker: "Commercial & telesales",
    tone: "stone",
    title: "One commercial relationship, prospect to renewal.",
    lede: "Finding it, winning it, delivering what was sold, and opening the next conversation with evidence rather than hope.",
    categories: [
      {
        id: "commercial-sales",
        name: "Commercial",
        intro: "Finding, framing and winning the partner conversation.",
        items: [
          { title: "Prospect discovery", body: "Targeted lists with profiles, activation rationale and outreach angle." },
          { title: "Lookalike prospecting", body: "Modelling against your existing book to widen the pool credibly." },
          { title: "Account prioritisation", body: "Where commercial time is most likely to convert." },
          { title: "Partner briefs and pitches", body: "Bespoke, grounded in audience and session evidence." },
          { title: "Package builder", body: "Tier naming, benefit inventory and pricing architecture." },
          { title: "Session sponsorship mapping", body: "Programme sessions matched to sponsor categories by audience fit." },
          { title: "Media pack", body: "Audience profile, reach and package tiers, in a document you can send." },
          { title: "Pipeline health", body: "Stage conversion, revenue at risk, category gaps and velocity." },
          { title: "Meeting preparation", body: "Pre-meeting briefings with attendee context and likely questions." },
          { title: "Renewal and upsell", body: "Renewal scoring across the contracted book, and identified upsell." },
        ],
      },
      {
        id: "delivery",
        name: "Sponsorship delivery",
        intro: "The half of the relationship that decides whether they renew.",
        items: [
          { title: "Sponsor onboarding", body: "What was sold, turned into what now has to happen.", status: "pilot" },
          { title: "Asset and deadline collection", body: "Logos, copy and materials gathered through a secure link." },
          { title: "Entitlement tracking", body: "Speaking slots, passes and entitlements tracked against the contract.", status: "pilot" },
          { title: "Activation briefs", body: "On-site and digital activation planned rather than improvised." },
          { title: "Fulfilment readiness", body: "What is outstanding, and who is holding it up.", status: "pilot" },
          { title: "Sponsor FAQ and co-marketing", body: "Recurring questions answered, and assets for partners to amplify." },
          { title: "Post-event ROI report", body: "Delivery against the contracted package, per partner." },
        ],
      },
      {
        id: "telesales",
        name: "Telesales & voice",
        intro: "Better lists, better briefs, better calls.",
        items: [
          { title: "List segmentation", body: "Priority, persona fit and propensity, with call-volume recommendations." },
          { title: "Dynamic call lists", body: "A queue rebuilt from what has actually happened since yesterday.", status: "pilot" },
          { title: "Call reason and context", body: "Why this person, why now, and what they have already seen." },
          { title: "Scripts and objection handling", body: "By segment and objective, with close variations." },
          { title: "Discovery playbook", body: "A versioned, approvable discovery-call playbook." },
          { title: "Warm-up before the dial", body: "A message on the channel they respond to, before the call.", status: "soon" },
          { title: "Call outcomes and follow-up", body: "Outcomes captured and the next action created." },
          { title: "Call log intelligence", body: "Objection patterns, conversion bottlenecks and script gaps." },
          { title: "AI voice agents", body: "Briefed from your approved scripts, on your own calling account." },
          { title: "Recording and classification", body: "Every call recorded, transcribed and its outcome classified." },
          { title: "Spend ceiling per event", body: "A hard cap on voice spend, set per event." },
          { title: "Outbound dialling", body: "Off by default. Enabled deliberately, on your own account.", status: "pilot" },
          { title: "Inbound call handling", body: "Answering inbound calls with event context.", status: "soon" },
        ],
      },
    ],
  },
  {
    id: "awards",
    kicker: "Awards",
    tone: "paper",
    title: "An awards programme is a second business.",
    lede: "Categories, entries, judging, finalists, the night itself, and turning this year's winners into next year's entrants.",
    categories: [
      {
        id: "awards-programme",
        name: "Categories & the year",
        intro: "The architecture that decides whether the programme works at all.",
        items: [
          { title: "Category strategy", body: "Awards landscape intelligence and category architecture." },
          { title: "Category performance", body: "Which categories carry entries, and which quietly never do." },
          { title: "Programme benchmarking", body: "Your awards structure compared against the market." },
          { title: "Entry forecasting", body: "Expected entry volume by category, against deadline." },
          { title: "Deadline management", body: "The deadline sequence that actually governs the year.", status: "pilot" },
          { title: "Awards night logistics", body: "Tickets, tables, guest information and seating.", status: "pilot" },
        ],
      },
      {
        id: "entries",
        name: "Entries",
        intro: "Getting good entries in, without writing them.",
        items: [
          { title: "Entrant acquisition", body: "Finding the organisations who should be entering and are not." },
          { title: "Past entrant reactivation", body: "The people who entered before, approached with their own history." },
          { title: "Category matching", body: "A public, consent-gated matcher that shows which categories genuinely fit." },
          { title: "Entry readiness guidance", body: "What a complete entry involves, and what this entrant still needs." },
          { title: "Stalled entry journeys", body: "The half-finished entries chased before the deadline passes.", status: "pilot" },
          { title: "Entry FAQ", body: "Eligibility, process, judging and key dates, answered once." },
          { title: "Entry conversion campaigns", body: "Scripts and sequences for converting interest into submissions." },
          { title: "Entrant self-submission", body: "Entrants submitting directly into the platform.", status: "soon" },
        ],
      },
      {
        id: "judging",
        name: "Judges",
        intro: "Credible judging, coordinated rather than chased.",
        items: [
          { title: "Judge discovery", body: "Shortlists per confirmed category, researched by expertise." },
          { title: "Judge assets", body: "Promotional assets and profile copy for confirmed judges." },
          { title: "Conflict awareness", body: "Conflicts of interest identified before judging begins.", status: "pilot" },
          { title: "Panel readiness", body: "Whether each category has the panel it needs, in time.", status: "pilot" },
          { title: "Scoring reminders", body: "Chasing the judges who have not scored yet.", status: "pilot" },
          { title: "Judge scoring portal", body: "Judges scoring entries directly in the platform.", status: "soon" },
        ],
      },
      {
        id: "finalists",
        name: "Finalists & winners",
        intro: "The moments the whole year is for.",
        items: [
          { title: "Finalist workflows", body: "Shortlist confirmed, communicated and tracked." },
          { title: "Finalist content packs", body: "What finalists need to promote themselves properly." },
          { title: "Creative at volume", body: "Personalised cards and share variants across the full list." },
          { title: "Announcement copy", body: "Platform-specific announcement copy, timed to the reveal." },
          { title: "Winner assets", body: "Winner creative ready when the result is confirmed." },
          { title: "Winner self-serve downloads", body: "Winners collecting their own assets.", status: "pilot" },
          { title: "Post-event promotion", body: "The follow-through that keeps the win visible." },
          { title: "Next-year reactivation", body: "This year's finalists approached as next year's entrants." },
        ],
      },
    ],
  },
  {
    id: "operations",
    kicker: "Operations, portfolio & governance",
    tone: "night",
    title: "The load-bearing structure.",
    lede: "Delivery, the view across every event, and the rules that hold the whole thing in place.",
    categories: [
      {
        id: "event-operations",
        name: "Event operations",
        intro: "Delivery, risk and the day itself.",
        items: [
          { title: "Delivery timeline", body: "Brief to post-event close, with milestones, owners and critical path." },
          { title: "Run of show", body: "Minute by minute, with AV cues, speaker movements, crew and contingencies." },
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
        id: "portfolio",
        name: "Portfolio",
        intro: "For the people carrying more than one event.",
        items: [
          { title: "Cross-event performance", body: "Every event on the same scorecard, comparable at last." },
          { title: "Audience and account overlap", body: "Overlap at person and company level across the portfolio." },
          { title: "Sponsor whitespace", body: "Accounts buying one event that should be buying three." },
          { title: "Speaker reuse", body: "Appearance frequency across your events." },
          { title: "Format and topic movement", body: "What is working, where, and what has stopped." },
          { title: "Event trajectory", body: "Which events are growing, holding, or quietly declining." },
          { title: "Opportunity detection", body: "New geographies, segments, formats and spin-off concepts." },
          { title: "Resource allocation", body: "Where the next pound and the next person should go.", status: "pilot" },
          { title: "Plan versus modelled outlook", body: "The committed number and the current evidence, side by side.", status: "pilot" },
        ],
      },
      {
        id: "governance",
        name: "Governance & execution",
        intro: "The part that gets asked about in procurement.",
        items: [
          { title: "Human approval", body: "A person approves anything consequential, and the approval is recorded." },
          { title: "Authority rules", body: "What Looped may observe, prepare, carry out and what must come back — by organisation, event and kind of action." },
          { title: "Access scoped by role", body: "Role-appropriate access across teams and events." },
          { title: "Eligibility enforcement", body: "Consent and suppression enforced at the point of sending." },
          { title: "Spend ceilings", body: "Per-event caps on compute and voice." },
          { title: "Personal data kept out of the AI", body: "Protected by default rather than by configuration." },
          { title: "Verification, not assumption", body: "Checked at the destination. An attempted action is never counted as a success." },
          { title: "Exceptions surfaced", body: "Where Looped cannot establish permission or confirm completion, it raises it rather than guessing." },
          { title: "Audit trail", body: "What was approved, by whom, on what evidence." },
        ],
      },
      {
        id: "reporting",
        name: "Reporting",
        intro: "Evidence you can put in front of a board or a partner.",
        items: [
          { title: "Post-event report", body: "Comprehensive performance report once the data is in." },
          { title: "Sponsor ROI reports", body: "Per partner, against what was actually contracted." },
          { title: "P&L analysis", body: "Revenue, cost, margin and variance from an uploaded P&L." },
          { title: "Event scorecard", body: "Revenue, content, sponsorship and satisfaction on one benchmark." },
          { title: "Strategic intelligence report", body: "A board-level synthesis across the portfolio." },
          { title: "Team debrief", body: "A structured debrief built from what actually happened." },
        ],
      },
    ],
  },
];

export default function CapabilitiesPage(): React.ReactElement {
  return (
    <div className="bg-paper pb-8 pt-28 sm:pt-32">
      <PageIntro
        kicker="Capabilities"
        title="Does Looped do that? The full index, honestly labelled."
        lede="This is the diligence page. Every capability grouped the way an event team would ask about it, with a plain label on anything not yet fully rolled out."
        support="If something matters to you and is not here, ask us rather than assuming. We would rather have that conversation now than six weeks into a procurement."
      />

      <div className="mx-auto mt-12 max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl rounded-2xl border border-hairline bg-stone p-6 shadow-[var(--lift-light)]">
          <AvailabilityNote />
        </Reveal>
      </div>

      {CHAPTERS.map((chapter) => {
        const night = chapter.tone === "night";
        return (
          <Panel key={chapter.id} tone={chapter.tone} id={chapter.id} kicker={chapter.kicker}>
            <Reveal className="max-w-3xl">
              <h2 className="text-balance display-section">{chapter.title}</h2>
              <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", night ? "text-mist" : "text-slate")}>
                {chapter.lede}
              </p>
            </Reveal>

            <div className="mt-12 grid gap-x-12 gap-y-10 lg:grid-cols-2">
              {chapter.categories.map((category) => (
                <Reveal key={category.id}>
                  <div
                    id={category.id}
                    className={cn("scroll-mt-28 border-t pt-6", night ? "border-white/10" : "border-hairline")}
                  >
                    <h3 className={cn("font-serif text-2xl", night ? "text-snow" : "text-ink")}>{category.name}</h3>
                    <p className={cn("mt-2 text-sm italic leading-relaxed", night ? "text-mist-dim" : "text-muted")}>
                      {category.intro}
                    </p>
                    <ul className="mt-5 space-y-3">
                      {category.items.map((item) => (
                        <li key={item.title} className="flex gap-3">
                          <span
                            className={cn(
                              "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                              night ? "bg-lavender" : "bg-grad-dot",
                            )}
                            aria-hidden
                          />
                          <p className={cn("text-sm leading-relaxed", night ? "text-mist" : "text-slate")}>
                            <span className={cn("font-semibold", night ? "text-snow" : "text-ink")}>{item.title}.</span>{" "}
                            {item.body}
                            {item.status ? (
                              <StatusPill
                                status={item.status}
                                tone={night ? "night" : "light"}
                                className="ml-2 align-middle"
                              />
                            ) : null}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </Panel>
        );
      })}

      <PageClosing
        line="Bring the three capabilities that would actually decide it for your team."
        continueLinks={[
          {
            href: "/platform",
            label: "Platform",
            blurb: "The same story told as four movements rather than as an index.",
          },
          {
            href: "/how-it-works",
            label: "How Looped works",
            blurb: "The operating loop and the authority rules behind every capability listed here.",
          },
        ]}
      />
    </div>
  );
}
