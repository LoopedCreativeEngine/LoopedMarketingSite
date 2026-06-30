import { PillarPage } from "@/components/pillars/PillarPage";

export default function PortfolioPillarPage(): React.ReactElement {
  return (
    <PillarPage
      title="Portfolio"
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
        "An event scorecard and benchmark across revenue, content, sponsorship and satisfaction",
        "Financial performance from an uploaded P&L, with optimistic, base and conservative budget reforecasts",
        "A multi-year sponsor, delegate and speaker pipeline with renewal-risk scoring",
        "Cross-event audience overlap at person and company level, with speaker-network mapping across the portfolio",
        "Portfolio-level opportunity detection: new geographies, segments, formats and spin-off events",
        "Brand segmentation by audience, revenue model and positioning",
        "A board-level strategic intelligence report that synthesises every upstream signal",
        "A year-round community strategy for audience ownership between editions",
        "Decision history that carries what worked from one edition to the next",
      ]}
      connects="Portfolio leadership is fed by every pillar and in turn sets direction for all of them. The intelligence flow is two-way: teams provide local reality, directors provide strategic priorities, and Looped keeps both connected."
    />
  );
}
