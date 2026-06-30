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
        "An event delivery timeline from brief to post-event close, with milestones, owners and critical-path analysis",
        "A minute-by-minute run of show with AV cues, speaker movements, crew and contingencies",
        "A live risk watchlist that detects operational risks and plans mitigation, with budget-impact alerts",
        "Delegate pricing analysis against competitors and history, and a full pricing strategy with tiers and early-bird windows",
        "A master event FAQ structured by audience, plus an entry-guide FAQ for awards entrants",
        "Meeting intelligence that turns transcripts into decisions and action items, with pre-meeting briefings and structured debriefs",
        "A board-ready sector briefing, and a comprehensive post-event performance report",
        "A clear, traceable decisions log across the full event cycle",
      ]}
      connects="Event management is fed by content, marketing, and telesales signals, then feeds all teams with operational constraints and timing reality. Everyone sees the same current picture before decisions are made."
    />
  );
}
