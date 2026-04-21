import { PillarPage } from "@/components/pillars/PillarPage";

export default function TelesalesPillarPage(): React.ReactElement {
  return (
    <PillarPage
      title="Telesales"
      seatLine="For telesales leaders who need better call quality, clearer targeting, and less wasted dial time."
      challenges={[
        "Telesales teams often inherit campaigns with weak context. Lists are broad, scripts are generic, and objections are discovered in real time on calls instead of being prepared in advance.",
        "The week a competitor announces on your same date can derail outbound performance. Prospects raise concerns immediately, and teams need clear responses that align with marketing and sponsorship positioning.",
        "When conversion drops, it is hard to isolate why. Was it list quality, script quality, timing, value proposition, or all four? Most teams lose days diagnosing before they can adjust.",
      ]}
      howItWorks={[
        "Looped briefs calling campaigns from approved audience and messaging intelligence before the first dial. Reps and optional voice automation both work from the same objection handling, proof points, and offer framing.",
        "Your team decides where automation fits. The platform keeps humans in control while making sure every call flow reflects current event context and campaign priorities.",
      ]}
      deliverables={[
        "Call brief with audience priorities and messaging hierarchy",
        "Script and objection-response drafts aligned to campaign direction",
        "Target profile guidance for list pulling and segmentation",
        "Weekly performance summaries with practical adjustment recommendations",
        "Optional voice automation scripts aligned with team guardrails",
      ]}
      connects="Telesales is fed by marketing and sponsorship context, and feeds back live objection and conversion signals that improve both. The result is faster campaign correction without re-brief cycles."
    />
  );
}
