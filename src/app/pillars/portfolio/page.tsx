import { PillarPage } from "@/components/pillars/PillarPage";

export const metadata = { robots: { index: false, follow: false } };

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
        "What is changing across the portfolio right now, and the questions and objections recurring across every event.",
      ]}
      decisions={[
        "Where to focus resource and attention.",
        "Which events need intervention now.",
        "What is worth reusing across the portfolio.",
        "Which proven interventions to roll out more widely.",
      ]}
      afterApproval={[
        "Carry a proven change across the events it fits, through each event's own systems.",
        "Prioritise where attention and resource go.",
        "Verify the outcome event by event, so a play is proven or retired on evidence rather than on reputation.",
      ]}
      examples={[
        {
          signal: "Three events. Same problem. One answer worth reusing.",
          insight: "An objection that looks like an event problem is often a portfolio problem, and the same answer applies across all three.",
          action: "Once approved, Looped carries the change across every event it fits and runs it through each one's own systems and rules.",
          result: "Each event's verified outcome returns to the portfolio picture, so the answer either becomes a proven play the rest of the portfolio can reach for, or is retired.",
        },
        {
          signal: "Two events share 40% of the same audience and neither knows it.",
          insight: "Shared audiences and sponsors are an opportunity when the portfolio can see them, and a missed cross-sell when it cannot.",
          action: "Once approved, Looped coordinates the shared audience and sponsor approach across both events, running each side through its own systems without doubling the work or double-contacting anyone.",
          result: "The response from each event comes back into a single portfolio view, so the cross-sell is measured once rather than argued about twice.",
        },
      ]}
      connects="The portfolio view is built from every event's intelligence, so a win in one edition becomes a proven play the others can use, and a risk that shows up twice is caught before it shows up a third time."
    />
  );
}
