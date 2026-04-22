import { PillarPage } from "@/components/pillars/PillarPage";

export default function EventManagementPillarPage(): React.ReactElement {
  return (
    <PillarPage
      title="Event Management"
      tensionStatement="The problems that kill events don't announce themselves. Looped spots them early."
      seatLine="For event managers carrying delivery risk, stakeholder pressure, and constant operational change."
      challenges={[
        "Event management teams operate where strategic choices become operational reality. Small signal misses become expensive quickly: judge pipeline gaps, supplier timing slips, or registration shifts that alter staffing needs.",
        "The week a speaker drops out four weeks before the event is where process quality gets tested. Teams need replacement options, communication adjustments, and operational knock-on impact mapped fast.",
        "Most teams track risk manually across spreadsheets and meetings. Context is fragmented, and urgent decisions rely on whoever happened to be closest to the issue at the time.",
      ]}
      howItWorks={[
        "Looped keeps operational planning connected to the same intelligence layer driving marketing and sales. Event managers see risk signals in context, with recommended responses and clear impact notes for each team.",
        "Approvals stay with your team. The platform helps you catch issues earlier, coordinate response faster, and keep decisions traceable across the full event cycle.",
      ]}
      deliverables={[
        "Operational risk watchlist with priority signals",
        "Response recommendations for schedule, comms, and staffing shifts",
        "Judge and stakeholder pipeline visibility summaries",
        "Cross-team impact notes for major event changes",
        "Weekly management digest focused on actions, not noise",
      ]}
      connects="Event management is fed by content, marketing, and telesales signals, then feeds all teams with operational constraints and timing reality. Everyone sees the same current picture before decisions are made."
    />
  );
}
