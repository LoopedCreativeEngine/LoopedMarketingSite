import { PillarPage } from "@/components/pillars/PillarPage";

export default function PortfolioPillarPage(): React.ReactElement {
  return (
    <PillarPage
      kicker="Portfolio"
      title="Portfolio"
      tension="One event teaches you a lesson. A portfolio should teach every event at once."
      seatLine="For the portfolio director and MD looking across every event, not one at a time."
      sees={[
        "Patterns and repeated risks across events, not six separate discoveries.",
        "Shared audiences and shared sponsors that no single event can see.",
        "Which events are heading for trouble and which are ahead.",
        "What is changing across the portfolio right now.",
      ]}
      decisions={[
        "Where to focus resource and attention.",
        "Which events need intervention now.",
        "What is worth reusing across the portfolio.",
        "Which proven interventions to roll out more widely.",
      ]}
      afterApproval={[
        "Carry a proven change across the events it fits.",
        "Prioritise where attention and resource go.",
        "Roll out an intervention that worked and measure each event's outcome.",
      ]}
      examples={[
        {
          signal: "Three events. Same problem. One answer worth reusing.",
          insight: "An objection that looks like an event problem is often a portfolio problem, and the same answer applies across all three.",
          action: "On approval, Looped can carry the change across every event it fits and measure each one's outcome.",
        },
        {
          signal: "Two events share 40% of the same audience and neither knows it.",
          insight: "Shared audiences and sponsors are an opportunity when the portfolio can see them, and a missed cross-sell when it cannot.",
          action: "On approval, Looped can coordinate the shared audience and sponsor approach across both events without doubling the work.",
        },
      ]}
      connects="The portfolio view is built from every event's intelligence, so a win in one edition becomes a proven play the others can use, and a risk that shows up twice is caught before it shows up a third time."
    />
  );
}
