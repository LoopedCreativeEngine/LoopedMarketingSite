import { PillarPage } from "@/components/pillars/PillarPage";

export const metadata = { robots: { index: false, follow: false } };

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
        "Reorder the call list in place, by who is worth calling first.",
        "Write per-prospect scripts and talking points.",
        "Work inside your calling, consent and suppression rules, so a name that should not be called is not.",
        "Record the outcome of each call, and turn the objections raised into intelligence marketing and commercial can use.",
      ]}
      examples={[
        {
          signal: "400 names on a call list. 74 worth calling first.",
          insight: "Looped ranks who is most likely to convert now, why they matter and what is relevant to them, so reps start where the return is.",
          action: "Once approved, Looped reorders the list where your reps already work, rewrites the scripts and gives each prospect its own talking points, inside your calling, consent and suppression rules. You can ask why anyone ranks where they do.",
          result: "Every call outcome comes back into the ranking, so tomorrow's list is built from what actually happened on the phone today rather than from the same static score.",
        },
        {
          signal: "The list is full, but the people who convert are not being called.",
          insight: "Effort and outcome have drifted apart: the reps are busy, but the highest-intent names are sitting untouched.",
          action: "Once approved, Looped resurfaces the high-intent names at the top of the list, briefs the reps on each one and sets the follow-up cadence against real signals.",
          result: "Looped watches whether those names were actually reached and what they said, and holds the ones that were missed open rather than letting them drop off the bottom of the list.",
        },
      ]}
      connects="Telesales works from the warm list marketing generates and the accounts commercial prioritises, and what converts on the phone feeds straight back into who marketing targets next."
    />
  );
}
