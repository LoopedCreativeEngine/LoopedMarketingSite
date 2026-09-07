import { PillarPage } from "@/components/pillars/PillarPage";

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
        "Programme and speaker readiness, and entries and judging status for awards.",
        "Dependencies across teams, and what has just changed.",
      ]}
      decisions={[
        "What needs attention this week, and what can wait.",
        "Which milestones are at risk and where a slipped deadline ripples.",
        "What to escalate, and to whom.",
        "How to keep every team working from the current picture.",
      ]}
      afterApproval={[
        "Reorder the plan around what matters now.",
        "Chase what is outstanding across teams and suppliers.",
        "Flag the decisions that need a person.",
        "Keep everyone aligned as the edition moves.",
      ]}
      examples={[
        {
          signal: "Three deadlines just moved. One of them matters this week.",
          insight: "Not every slippage is equal. Looped keeps the moving parts in one view and shows which change actually threatens the edition.",
          action: "On approval, Looped can reorder the plan, reset the dependent dates and flag the one call that needs a person.",
        },
        {
          signal: "Entries are up, but judging capacity is not.",
          insight: "A strong entry run becomes an operational risk if the judging panel and deadlines cannot absorb it. Looped catches the mismatch early.",
          action: "On approval, Looped can rebalance judging assignments, adjust the deadline plan and brief the teams affected.",
        },
      ]}
      connects="Event management holds the readiness picture the whole business depends on: the programme content is landing, commercial commitments are deliverable, and marketing knows exactly what is confirmed to promote."
    />
  );
}
