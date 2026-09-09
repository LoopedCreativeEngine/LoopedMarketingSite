import type { Metadata } from "next";

import { PillarPage } from "@/components/pillars/PillarPage";

export const metadata: Metadata = {
  title: "Awards management AI and event operations",
  description:
    "For event delivery and awards teams: the critical path, readiness and risk, and the awards year from categories through judging to winners.",
  alternates: { canonical: "/pillars/event-management" },
  openGraph: {
    url: "/pillars/event-management",
    title: "Awards management AI and event operations",
    description:
      "For event delivery and awards teams: the critical path, readiness and risk, and the awards year from categories through judging to winners.",
  },
};

export default function EventManagementPillarPage(): React.ReactElement {
  return (
    <PillarPage
      kicker="Event Management"
      title="Event Management"
      tension="The problems that sink an edition never announce themselves."
      seatLine="For the event and awards operations lead keeping every moving part on track."
      sees={[
        "The live status of the edition, in one current view.",
        "Milestone and deadline risk before it becomes a crisis.",
        "Programme and speaker readiness, sponsor fulfilment, and entries and judging status for awards.",
        "Dependencies across teams, what has just changed, and what entrants, speakers and sponsors are asking about.",
        "For awards: entry pace by category against forecast, and which categories are quietly short.",
        "Judging readiness: whether each panel is staffed, conflicted or still to score.",
        "The half-finished entries sitting in the system as the deadline closes.",
      ]}
      decisions={[
        "What needs attention this week, and what can wait.",
        "Which milestones are at risk and where a slipped deadline ripples.",
        "What to escalate, and to whom.",
        "How to keep every team working from the current picture.",
        "Which categories to intervene in before entries close.",
        "What the awards night needs decided this week: tables, guests, access and running order.",
      ]}
      afterApproval={[
        "Reorder the plan around what matters now.",
        "Chase what is outstanding with the sponsors, speakers and suppliers it concerns.",
        "Keep the exception open until the deliverable has actually landed, not from the moment the chaser was sent.",
        "Flag the decisions that need a person, and keep everyone aligned as the edition moves.",
        "Support the speakers, sponsors and entrants directly, so readiness chases itself instead of landing on your desk.",
        "Guide entrants on category fit and what a complete entry involves, without ever writing the entry itself.",
        "Coordinate judges: recruitment, conflicts, reminders and what is still outstanding before scoring closes.",
        "Produce the finalist and winner assets the moment the result is confirmed, ready for one approval.",
      ]}
      examples={[
        {
          signal: "Three deadlines just moved. One of them matters this week.",
          insight: "Not every slippage is equal. Looped keeps the moving parts in one view and shows which change actually threatens the edition.",
          action: "Once approved, Looped reorders the plan, resets the dependent dates, chases the people each slipped deadline depends on and flags the one call that needs a person.",
          result: "Looped confirms each dependency against what has actually been received, and the deadline stays open as an exception until the evidence says it is resolved.",
        },
        {
          signal: "Two sponsors are three weeks from missing their fulfilment deadline.",
          insight: "Logos, copy, session content and delegate passes are all outstanding, and nobody owns the chase. A missed deliverable is a renewal conversation you lose next year.",
          action: "Once approved, Looped follows up with each sponsor contact through the channel they already use, with exactly what is missing and by when.",
          result: "The item is only closed when Looped can see the asset has arrived. Anything it cannot confirm stays open and comes back to the operations lead as an exception.",
        },
      ]}
      connects="Event management holds the readiness picture the whole business depends on: the programme content is landing, commercial commitments are deliverable, and marketing knows exactly what is confirmed to promote."
    />
  );
}
