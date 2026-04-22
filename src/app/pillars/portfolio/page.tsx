import { PillarPage } from "@/components/pillars/PillarPage";

export default function PortfolioPillarPage(): React.ReactElement {
  return (
    <PillarPage
      title="Portfolio Directors"
      tensionStatement="You can't see across your portfolio if every event is an island."
      seatLine="For portfolio leaders responsible for performance across multiple events, teams, and commercial models."
      challenges={[
        "Portfolio directors rarely suffer from lack of data; they suffer from delayed, fragmented, and non-comparable data. Each event team reports differently, and by the time patterns appear, planning cycles are already committed.",
        "You need to know where audience overlap can be monetised, where formats are plateauing, and where resource should move next quarter. Most organisations only discover this after budgets are set.",
        "The moment a competitor enters one part of your portfolio, risk can spread quickly. Without a connected intelligence view, each team reacts locally and strategic opportunity is missed globally.",
      ]}
      howItWorks={[
        "Looped gives directors a portfolio-level view that still preserves event-level detail. You can see what is repeating, what is improving, and what is underperforming with context from campaigns, sales, and operations.",
        "It also carries successful decisions forward between events. When one show finds a stronger proposition or channel approach, other teams can apply it immediately with local adjustments.",
      ]}
      deliverables={[
        "Portfolio digest summarising material changes and implications",
        "Cross-event audience and proposition overlap insights",
        "Comparative campaign and conversion trend snapshots",
        "Strategic recommendations for format, timing, and resource allocation",
        "Decision history that carries learning from one event to the next",
      ]}
      connects="Portfolio leadership is fed by every pillar and in turn sets direction for all of them. The intelligence flow is two-way: teams provide local reality, directors provide strategic priorities, and Looped keeps both connected."
    />
  );
}
