import type { Metadata } from "next";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { PillarPage } from "@/components/pillars/PillarPage";
import { LifecycleRail, type LifecycleStage } from "@/components/product/LifecycleRail";
import { WorkspaceBoard } from "@/components/product/WorkspaceBoard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Awards management AI and event operations",
  description:
    "AI for event delivery and awards teams: lifecycle planning, risk detection and readiness, plus the full awards year from categories to winners.",
  path: "/pillars/event-management",
});

const AWARDS_YEAR: LifecycleStage[] = [
  {
    name: "Categories",
    summary: "The architecture that decides whether the programme works at all.",
    items: ["Category strategy", "Market benchmarking", "Category performance history", "Entry forecasting"],
  },
  {
    name: "Entries",
    summary: "Getting good entries in, without writing them.",
    items: ["Entrant acquisition", "Past entrant reactivation", "Category matching", "Readiness guidance"],
  },
  {
    name: "Judging",
    summary: "Credible judging, coordinated rather than chased.",
    items: ["Judge recruitment", "Conflict awareness", "Judging readiness", "Scoring reminders"],
  },
  {
    name: "Finalists",
    summary: "The announcement week that eats a marketing team.",
    items: ["Finalist workflows", "Content packs", "Creative at volume", "Announcement copy"],
  },
  {
    name: "The night",
    summary: "Tables, guests and the details people remember.",
    items: ["Tickets and tables", "Guest information", "Dietary and accessibility", "Arrival communication"],
  },
  {
    name: "Next year",
    summary: "Turning this year's winners into next year's entrants.",
    items: ["Winner assets", "Post-event promotion", "Reactivation", "Category learning"],
  },
];

export default function EventManagementPillarPage(): React.ReactElement {
  return (
    <PillarPage
      title="Event Management"
      tensionStatement="The problems that kill events don't announce themselves. Looped spots them early."
      seatLine="For event managers carrying delivery risk, stakeholder pressure, and constant operational change, across conferences and awards alike."
      challenges={[
        "Event management teams operate where strategic choices become operational reality. Small signal misses become expensive quickly: judge pipeline gaps, supplier timing slips, or registration shifts that alter staffing needs.",
        "The week a speaker drops out four weeks before the event is where process quality gets tested. Teams need replacement options, communication adjustments, and operational knock-on impact mapped fast.",
        "Awards add a second business on top of the first. Categories, entries, judges, finalists, tables and winners all run on their own deadlines, and none of them wait for the conference programme to be finished.",
      ]}
      understands={[
        {
          title: "Lifecycle position",
          body: "Where this edition sits against its own timeline, and what usually goes wrong at this exact point in the cycle.",
        },
        {
          title: "The critical path",
          body: "Which tasks genuinely determine the date, and which ones only feel urgent.",
        },
        {
          title: "Stakeholder deadlines",
          body: "Every external commitment from speakers, sponsors, judges and suppliers, in one view.",
        },
        {
          title: "Readiness by area",
          body: "Speaker, sponsor, programme and operational readiness assessed separately, because they fail separately.",
        },
        {
          title: "Risk signals",
          body: "The patterns that precede a problem, surfaced while the fix is still cheap.",
        },
        {
          title: "Awards category health",
          body: "Which categories are carrying entries, which are thin, and which have quietly never worked.",
        },
        {
          title: "Entry and judging status",
          body: "Where each entry has reached, and whether each category has the panel it needs in time.",
        },
        {
          title: "Budget impact",
          body: "What a change costs, so an operational decision can be taken with the financial consequence visible.",
        },
        {
          title: "Historical delivery",
          body: "What went wrong last time, at what point, and whether the same conditions are forming again.",
        },
      ]}
      hub={{
        heading: "The delivery hub.",
        lede: "The critical path, readiness by area, the risks forming, and the things that need a decision today, held together rather than spread across a plan, a spreadsheet and three inboxes.",
        visual: (
          <WorkspaceBoard
            name="Event delivery hub"
            tabs={["Work hub", "Timeline", "Readiness", "Risks", "Stakeholders", "Awards", "Event day"]}
            columns={[
              {
                label: "Critical path",
                items: [
                  { title: "Venue and AV confirmed", meta: "Complete", accent: "quiet" },
                  { title: "Programme locked", meta: "Two sessions open" },
                  { title: "Print deadline", meta: "Nine days", accent: "focus" },
                ],
              },
              {
                label: "Readiness",
                items: [
                  { title: "Speakers", meta: "Four outstanding", accent: "focus" },
                  { title: "Sponsors", meta: "On track" },
                  { title: "Awards judging", meta: "One panel short", accent: "focus" },
                  { title: "Operations", meta: "On track" },
                ],
              },
              {
                label: "Risks",
                items: [
                  { title: "Supplier timing slipping", meta: "Mitigation drafted" },
                  { title: "Registration pace affects catering", meta: "Budget impact shown" },
                  { title: "Session clash", meta: "Resolved", accent: "quiet" },
                ],
              },
              {
                label: "Needs you",
                items: [
                  { title: "Speaker withdrawal, replacements ready", meta: "Your call", accent: "focus" },
                  { title: "Category below entry forecast", meta: "Options prepared", accent: "focus" },
                  { title: "Table sales behind pace", meta: "Telesales briefed" },
                ],
              },
            ]}
            footnote="When something changes, the hub shows what it breaks downstream: the sessions, the copy already in market, the sponsor commitment attached to it, and the budget line it moves."
          />
        ),
        note: "An abstraction of the workspace rather than a screenshot. Items shown illustrate the kinds of thing that appear, not a real event.",
      }}
      produces={[
        "An event delivery timeline from brief to post-event close, with milestones, owners and critical-path analysis",
        "A minute-by-minute run of show with AV cues, speaker movements, crew and contingencies",
        "A live risk watchlist that detects operational risks and plans mitigation, with budget-impact alerts",
        "Readiness views by area, so speaker, sponsor and programme problems are visible separately",
        "Delegate pricing analysis against competitors and history, and a full pricing strategy with tiers and early-bird windows",
        "A master event FAQ structured by audience, plus an entry-guide FAQ for awards entrants",
        "Awards category strategy, category performance analysis and entry forecasting",
        "Judge shortlists per confirmed category, with promotional assets for confirmed judges",
        "Finalist content packs, announcement copy and winner assets timed to the reveal",
        "Meeting intelligence that turns transcripts into decisions and action items, with pre-meeting briefings and structured debriefs",
        "A board-ready sector briefing, and a comprehensive post-event performance report",
        "A clear, traceable decisions log across the full event cycle",
      ]}
      executes={[
        {
          title: "Task orchestration",
          body: "Owners and deadlines created from approved decisions, and chased when they slip.",
        },
        {
          title: "Stakeholder chasing",
          body: "Speakers, sponsors and judges followed up automatically, escalating to a person when it matters.",
          status: "pilot",
        },
        {
          title: "Asset collection",
          body: "Headshots, bios, logos and links collected through a secure link rather than an email chain.",
        },
        {
          title: "Entrant journeys",
          body: "Acquisition, reactivation and the nudges that finish a half-completed entry before the deadline.",
          status: "pilot",
        },
        {
          title: "Judging coordination",
          body: "Recruitment, conflicts, readiness and scoring reminders kept on track.",
          status: "pilot",
        },
        {
          title: "Finalist and winner workflows",
          body: "Confirmation, communication, content packs and creative, produced across the whole list at once.",
        },
        {
          title: "Awards night logistics",
          body: "Tickets, tables, guest information, dietary and accessibility requirements and arrival communication.",
          status: "pilot",
        },
        {
          title: "Change management",
          body: "When something moves, the downstream consequences are surfaced together rather than discovered one by one.",
          status: "pilot",
        },
        {
          title: "Post-event workflows",
          body: "Debrief, reporting, promotion and the handover into next year's brief.",
        },
      ]}
      watches={[
        "Critical-path tasks about to slip, and who is holding them",
        "Readiness gaps forming in a specific area while the overall picture looks fine",
        "Judge pipeline gaps in categories that have not yet been staffed",
        "Entries started and abandoned as a deadline approaches",
        "Registration shifts with an operational consequence, such as catering or staffing",
        "Supplier and venue commitments against the dates they were promised for",
        "Budget impact accumulating from small operational changes",
      ]}
      learns={[
        "Where the plan actually slipped, versus where everyone assumed it would",
        "Which risks materialised and which were noise",
        "Which categories reliably produce entries, and which never will",
        "What the run of show got wrong on the day, in enough detail to fix",
        "How long each stage genuinely takes at your organisation",
        "The debrief, captured properly, so next year's timeline starts from reality",
      ]}
      extra={
        <Panel tone="ink" kicker="The awards year">
          <SectionHeading
            tone="ink"
            title="An awards programme is a second business, running on its own clock."
            lede="Categories, entries, judging, finalists, the night itself, and then next year's reactivation. Six stages, each with its own deadlines, most organisations running them across separate spreadsheets and one very tired person."
          />
          <Reveal className="mt-12">
            <LifecycleRail
              stages={AWARDS_YEAR}
              tone="ink"
              loopBackNote="This year's finalists and winners are next year's entrants, and Looped keeps that connection rather than starting the acquisition campaign from a blank list."
            />
          </Reveal>
          <Reveal className="mt-10">
            <div className="max-w-3xl rounded-2xl border border-iris/35 bg-iris/[0.07] p-5 sm:p-6">
              <p className="kicker text-[0.6rem] text-iris">A line we will not cross</p>
              <p className="mt-3 text-base leading-relaxed text-bone-dim">
                Looped helps entrants understand readiness: whether a category genuinely fits them, what a complete
                entry involves, and what they still need to provide. It does not write the substantive award entry for
                them. An awards programme is only worth entering if the entries are real, and that credibility is worth
                more to you than a higher entry count.
              </p>
            </div>
          </Reveal>
        </Panel>
      }
      connects="Event management is fed by content's programme, commercial's delivery obligations and marketing's registration pace, which together determine what actually has to happen and when. It feeds every other team the operational reality: the deadlines that are real, the changes that have knock-on effects, and the constraints a plan has to respect. On awards, it drives telesales campaigns for entries and tables, and hands marketing the finalist and winner moments the campaign is built around."
      connections={{
        draws: [
          { team: "Content", signal: "The programme that has to be delivered" },
          { team: "Commercial", signal: "The delivery obligations that were sold" },
          { team: "Marketing", signal: "Registration pace and demand" },
        ],
        feeds: [
          { team: "Every team", signal: "The real deadlines and knock-on changes a plan must respect" },
          { team: "Telesales", signal: "Awards entry and table campaigns to run" },
          { team: "Marketing", signal: "Finalist and winner moments to build campaigns around" },
        ],
        note: "Operational reality is a live constraint every plan respects, not a status report at the end.",
      }}
      explore={[
        {
          href: "/pillars/content",
          label: "Content and programme",
          blurb: "The agenda that becomes the run of show, and the speakers whose deadlines you are chasing.",
        },
        {
          href: "/creative",
          label: "Creative",
          blurb: "Finalist and winner assets produced across the whole list in announcement week.",
        },
        {
          href: "/agents-and-conversations",
          label: "AI conversations",
          blurb: "Entry readiness guidance, judge support, and the questions entrants ask every year.",
        },
        {
          href: "/pillars/telesales",
          label: "Telesales",
          blurb: "Entry conversion, nominations drives and gala table sales.",
        },
      ]}
      closing={{
        title: "Catch the problem while it is still cheap.",
        body: "Bring one event with a live timeline, or one awards programme mid-cycle. The readiness gaps usually show up in the first hour.",
      }}
    />
  );
}
