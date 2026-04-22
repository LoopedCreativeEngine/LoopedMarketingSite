import { PillarPage } from "@/components/pillars/PillarPage";

export default function ContentPillarPage(): React.ReactElement {
  return (
    <PillarPage
      title="Content"
      tensionStatement="The agenda your audience actually wants — not the one that felt safe last year."
      seatLine="For the content lead shaping programme quality while speaker markets, buyer priorities, and story angles keep moving."
      challenges={[
        "Content teams are asked to set the event narrative early, often before the market has settled. You are balancing sponsor expectations, attendee demand, and editorial standards with limited time to validate what matters now.",
        "The six weeks between finalist announcement and table sales campaign can expose weak programme messaging fast. If sessions are not clearly differentiated, commercial teams struggle to sell the value story.",
        "When a speaker drops out four weeks before the event, you need replacements and session rewrites that still fit the core narrative. That is hard when core context is trapped in scattered docs and inbox threads.",
      ]}
      howItWorks={[
        "Looped starts content planning from approved sector signals and audience priorities, not guesswork. Your team sees where demand is rising, where competitor agendas are crowded, and which themes are under-served.",
        "You still make editorial calls. The platform structures options, surfaces risks, and keeps rationale linked to decisions so last-minute changes do not break the full programme story.",
      ]}
      deliverables={[
        "Theme and track recommendations linked to current market movement",
        "Speaker profile targets and gap analysis",
        "Session concept drafts matched to audience priorities",
        "Programme narrative summaries for marketing and sales teams",
        "Contingency options when agenda changes are required late",
      ]}
      connects="Content is fed by market intelligence and feeds marketing, sponsorship, and telesales with clear programme proof points. When content direction shifts, linked teams see updated context without re-brief meetings."
    />
  );
}
