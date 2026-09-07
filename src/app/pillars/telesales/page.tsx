import { PillarPage } from "@/components/pillars/PillarPage";

export default function TelesalesPillarPage(): React.ReactElement {
  return (
    <PillarPage
      kicker="Telesales"
      title="Telesales"
      tension="Four hundred names is not a plan. Seventy-four worth calling first is."
      seatLine="For the audience and telesales leader who needs every call to count."
      sees={[
        "Who is most likely to convert now, and why they matter.",
        "Which names are worth a rep's time and which are noise.",
        "Conversion signals and the right moment to follow up.",
        "Audience gaps in the list that volume alone will not fix.",
      ]}
      decisions={[
        "Who to call first, and what to lead with.",
        "Which follow-ups matter and when to make them.",
        "Where reps should focus their hours.",
        "Which approaches are actually converting.",
      ]}
      afterApproval={[
        "Reorder the call list by who is worth calling first.",
        "Write per-prospect scripts and talking points.",
        "Set follow-up timing around real signals.",
        "Learn which approaches convert so the next list is sharper.",
      ]}
      examples={[
        {
          signal: "400 names on a call list. 74 worth calling first.",
          insight: "Looped ranks who is most likely to convert now, why they matter and what is relevant to them, so reps start where the return is.",
          action: "On approval, Looped can reorder the list, rewrite the scripts and give each prospect its own talking points. You can ask why anyone ranks where they do.",
        },
        {
          signal: "The list is full, but the people who convert are not being called.",
          insight: "Effort and outcome have drifted apart: the reps are busy, but the highest-intent names are sitting untouched.",
          action: "On approval, Looped can resurface the high-intent names, brief the reps on each one and set the follow-up cadence.",
        },
      ]}
      connects="Telesales works from the warm list marketing generates and the accounts commercial prioritises, and what converts on the phone feeds straight back into who marketing targets next."
    />
  );
}
