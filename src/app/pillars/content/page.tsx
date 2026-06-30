import { PillarPage } from "@/components/pillars/PillarPage";

export default function ContentPillarPage(): React.ReactElement {
  return (
    <PillarPage
      title="Content"
      tensionStatement="The agenda your audience actually wants, not the one that felt safe last year."
      seatLine="For the content lead shaping programme quality while speaker markets, buyer priorities, and story angles keep moving."
      challenges={[
        "Content teams are asked to set the event narrative early, often before the market has settled. You are balancing partner expectations, attendee demand, and editorial standards with limited time to validate what matters now.",
        "The six weeks between finalist announcement and table sales campaign can expose weak programme messaging fast. If sessions are not clearly differentiated, commercial teams struggle to sell the value story.",
        "When a speaker drops out four weeks before the event, you need replacements and session rewrites that still fit the core narrative. That is hard when core context is trapped in scattered docs and inbox threads.",
      ]}
      howItWorks={[
        "Looped starts content planning from approved sector signals and audience priorities, not guesswork. Your team sees where demand is rising, where competitor agendas are crowded, and which themes are under-served.",
        "You still make editorial calls. The platform structures options, surfaces risks, and keeps rationale linked to decisions so last-minute changes do not break the full programme story.",
      ]}
      deliverables={[
        "Live sector intelligence on trends, regulation, technology and talent, as the master context for the whole event",
        "The 8 to 15 highest-signal topics, mapped against competitor programmes to find your white space",
        "A session-by-session agenda with timing, pacing and energy-arc analysis, plus a programme narrative and 3 to 5 overarching themes",
        "Speaker discovery and shortlisting per track, with personalised outreach and multi-touch follow-up",
        "Speaker and chair briefing packs, AV specifications and on-day runsheets",
        "Published session titles, abstracts and speaker bios for the programme and website",
        "Abstract scoring for quality, originality and theme fit, with advisory-panel recommendations",
        "For awards: category strategy, judging frameworks and judge discovery that keep entries credible and flowing",
        "A post-event report synthesising NPS, session ratings and sentiment into clear actions",
      ]}
      connects="Content is fed by market intelligence and feeds marketing, commercial, and telesales with clear programme proof points. When content direction shifts, linked teams see updated context without re-brief meetings."
    />
  );
}
