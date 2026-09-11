import type { Metadata } from "next";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { PillarPage } from "@/components/pillars/PillarPage";
import { PortfolioDrill } from "@/components/product/PortfolioDrill";
import { ScenarioBoard } from "@/components/product/ScenarioBoard";
import { WorkspaceBoard } from "@/components/product/WorkspaceBoard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Event portfolio intelligence for leadership",
  description:
    "Cross-event intelligence for portfolio leaders: comparable performance, audience and account overlap, and the plan held next to the modelled outlook.",
  path: "/pillars/portfolio",
});

export default function PortfolioPillarPage(): React.ReactElement {
  return (
    <PillarPage
      title="Portfolio"
      tensionStatement="You can't see across your portfolio if every event is an island."
      seatLine="For portfolio leaders responsible for performance across multiple events, teams, and commercial models."
      challenges={[
        "Portfolio directors rarely suffer from lack of data; they suffer from delayed, fragmented, and non-comparable data. Each event team reports differently, and by the time patterns appear, planning cycles are already committed.",
        "You need to know where audience overlap can be monetised, where formats are plateauing, and where resource should move next quarter. Most organisations only discover this after budgets are set.",
        "And you are asked, repeatedly, whether the number is still going to happen. Usually the honest answer is somewhere between the committed plan and what the current evidence suggests, and nobody has a good way to hold both at once.",
      ]}
      understands={[
        {
          title: "Cross-event performance",
          body: "Every event on the same scorecard across revenue, content, commercial and satisfaction, finally comparable.",
        },
        {
          title: "Audience overlap",
          body: "Which people attend more than one of your events, at person and company level.",
        },
        {
          title: "Account overlap",
          body: "Which organisations buy from more than one event, and which buy from exactly one.",
        },
        {
          title: "Sponsor whitespace",
          body: "Accounts sponsoring one show that have never been approached about the other three.",
        },
        {
          title: "Speaker reuse",
          body: "Who appears across your portfolio, how often, and whether that is an asset or a habit.",
        },
        {
          title: "Topic movement",
          body: "How themes travel across your events and sectors, and where a subject is heading next.",
        },
        {
          title: "Format effectiveness",
          body: "Which session formats earn their complexity, measured across events rather than argued about within one.",
        },
        {
          title: "Event maturity and trajectory",
          body: "Which events are growing, holding, or quietly declining while still looking acceptable.",
        },
        {
          title: "Market penetration",
          body: "How much of each addressable market you have actually reached, including the strategic accounts you have not.",
        },
      ]}
      hub={{
        heading: "The portfolio command centre.",
        lede: "Every event in one view, with the opportunities, anomalies and decisions that only become visible when you stop looking at events one at a time.",
        visual: (
          <WorkspaceBoard
            name="Portfolio command centre"
            tabs={["Overview", "Events", "Opportunity", "Accounts", "Anomalies", "Resource"]}
            columns={[
              {
                label: "Events",
                items: [
                  { title: "Flagship conference", meta: "Ahead of plan" },
                  { title: "Regional edition", meta: "On plan" },
                  { title: "Awards programme", meta: "Entries behind pace", accent: "focus" },
                  { title: "New launch", meta: "First edition" },
                ],
              },
              {
                label: "Opportunity",
                items: [
                  { title: "Account buying one event only", meta: "Cross-sell case", accent: "focus" },
                  { title: "Audience overlap unmonetised", meta: "Sized" },
                  { title: "Format travelling well", meta: "Repeat elsewhere" },
                ],
              },
              {
                label: "Anomalies",
                items: [
                  { title: "One event outperforming its segment", meta: "Worth understanding", accent: "focus" },
                  { title: "Renewal rate diverging", meta: "Two events" },
                  { title: "Topic fading across the sector", meta: "Programme impact" },
                ],
              },
              {
                label: "Decisions",
                items: [
                  { title: "Resource reallocation proposed", meta: "Your call", accent: "focus" },
                  { title: "Spin-off concept identified", meta: "Feasibility outline" },
                  { title: "Budget reforecast ready", meta: "For review" },
                ],
              },
            ]}
            footnote="Each item opens into the event-level detail behind it, so a portfolio decision can be interrogated rather than taken on faith."
          />
        ),
        note: "An abstraction of the workspace rather than a screenshot. Items shown illustrate the kinds of thing that appear, not a real portfolio.",
      }}
      produces={[
        "An event scorecard and benchmark across revenue, content, sponsorship and satisfaction",
        "Financial performance from an uploaded P&L, with optimistic, base and conservative budget reforecasts",
        "Quarterly reforecasts that keep the committed plan and the current outlook visible side by side",
        "A multi-year sponsor, delegate and speaker pipeline with renewal-risk scoring",
        "Cross-event audience and account overlap at person and company level",
        "Speaker-network mapping across the portfolio",
        "Portfolio-level opportunity detection: new geographies, segments, formats and spin-off events",
        "Brand segmentation by audience, revenue model and positioning",
        "A board-level strategic intelligence report that synthesises every upstream signal",
        "A year-round community strategy for audience ownership between editions",
        "Institutional memory: the decisions and outcomes that carry from one edition to the next",
      ]}
      executes={[
        {
          title: "Cross-sell campaigns",
          body: "One event's audience introduced to another, based on real overlap rather than a merged mailing list.",
          status: "pilot",
        },
        {
          title: "Portfolio account plays",
          body: "A single commercial approach to an account that touches several of your events at once.",
          status: "pilot",
        },
        {
          title: "Resource reallocation",
          body: "Proposals for where the next pound and the next person should go, with the trade-off stated.",
          status: "pilot",
        },
        {
          title: "Practice transfer",
          body: "When one event finds a stronger proposition or channel, the others get it with local adjustment.",
        },
        {
          title: "Budget reforecasting",
          body: "Scenarios refreshed against current performance, ready for the conversation you are about to have.",
        },
        {
          title: "Spin-off assessment",
          body: "New format, geography or segment concepts outlined against the evidence that suggested them.",
        },
      ]}
      watches={[
        "Events whose trajectory has changed while the headline number still looks acceptable",
        "Performance anomalies worth understanding rather than celebrating",
        "Renewal rates diverging between events that should behave the same way",
        "Strategic accounts stalling in penetration across the portfolio",
        "Topics fading across the sector before they fade in your programmes",
        "Targets drifting far enough that the committed plan needs an honest conversation",
      ]}
      learns={[
        "Which formats and propositions travel between events, and which are event-specific",
        "What actually drove growth, separated from what happened to coincide with it",
        "How each event matures, so a launch can be planned against a real curve",
        "Which decisions in past cycles turned out to be right",
        "Where the portfolio has structural opportunity that no single event team can see",
        "Institutional knowledge kept in the organisation rather than in the people who might leave",
      ]}
      extra={
        <>
        <Panel tone="paper" kicker="More than a dashboard">
          <SectionHeading
            title="A dashboard stops at the chart. Looped opens the number."
            lede="The reason a portfolio view is more than business intelligence is that any number opens all the way down to the decision behind it, and what one event proves travels back up to the brand and the portfolio."
          />
          <Reveal className="mt-12">
            <PortfolioDrill
              tone="light"
              levels={[
                { name: "Portfolio", detail: "Every event, brand and revenue model on one comparable footing." },
                { name: "Brand", detail: "A single show and its editions, with its own trajectory and audience." },
                { name: "Event", detail: "One edition: its plan, its pace, its commercial pipeline and its programme." },
                { name: "Pillar", detail: "A team's view inside that event: marketing, content, commercial, telesales or operations." },
                { name: "Signal, decision or evidence", detail: "The specific thing moving the number, and the decision taken about it: a segment behind pace, a renewal slipping, a topic fading." },
              ]}
              caption="An abstraction of the drill path, not a screenshot. The point is the two-way movement: leadership can interrogate a number down to its evidence, and evidence from one event informs every other."
            />
          </Reveal>
        </Panel>
        <Panel tone="ink" kicker="Planning">
          <SectionHeading
            tone="ink"
            title="Committed plan, and model truth. Both, at the same time."
            lede="Leadership needs the official number to stay intact: it is what the business is run against, and rewriting it every fortnight helps nobody. Teams need the honest current picture. Most organisations force a choice between the two, and quietly lose trust in whichever one they abandoned."
          />
          <Reveal className="mt-12">
            <ScenarioBoard
              tone="ink"
              committedLabel="Committed plan"
              committedValue="Target held"
              modelledLabel="Current modelled outlook"
              modelledValue="Below plan"
              modelledPercent={81}
              confidence="Presented as a range with the evidence behind it, refreshed as the picture changes. The committed number is never quietly overwritten, and the gap is never quietly hidden."
              drivers={[
                {
                  label: "One segment behind pace",
                  note: "Registrations in a core segment are tracking below the rate the target assumes.",
                },
                {
                  label: "Sponsorship timing shift",
                  note: "Renewals sitting later in the cycle than the last two editions.",
                },
                {
                  label: "Category under forecast",
                  note: "One awards category is producing well below its historical entry volume.",
                },
              ]}
              interventions={[
                {
                  label: "Reweight campaign spend",
                  effect: "Move budget towards the segments currently converting.",
                  tradeoff: "Less reach in a segment already on pace",
                },
                {
                  label: "Open renewals earlier",
                  effect: "Start renewal conversations now, with delivery evidence attached.",
                  tradeoff: "Commercial time taken from new business",
                },
                {
                  label: "Accept the gap",
                  effect: "Hold the plan, absorb the shortfall, protect the team's focus.",
                  tradeoff: "Requires the conversation to happen now rather than in month nine",
                },
              ]}
              caption="Illustrative. Scenarios are built from your own data, and Looped shows the drivers and the options rather than a single confident number. How the outlook is modelled stays under the bonnet."
            />
          </Reveal>
          <Reveal className="mt-10">
            <p className="max-w-3xl text-balance font-serif text-2xl italic leading-snug text-bone-text sm:text-3xl">
              Keep the plan. See the truth. Decide with both in front of you.
            </p>
          </Reveal>
        </Panel>
        </>
      }
      connects="Portfolio is fed by every pillar and in turn sets direction for all of them. Marketing supplies audience movement, commercial supplies account reality, content supplies what the programme proved and event management supplies what delivery actually cost. The flow is deliberately two-way: teams provide local truth, leadership provides strategic priority, and Looped keeps both connected instead of letting them meet once a quarter in a slide deck."
      connections={{
        draws: [
          { team: "Marketing", signal: "Audience movement" },
          { team: "Commercial", signal: "Account reality" },
          { team: "Content", signal: "What the programme proved" },
          { team: "Event Management", signal: "What delivery actually cost" },
        ],
        feeds: [
          { team: "Every team", signal: "Strategic priority, set from the whole picture" },
          { team: "Commercial", signal: "Cross-sell and whitespace across events" },
          { team: "Marketing", signal: "Where audience overlap can be monetised" },
        ],
        note: "The flow is deliberately two-way: teams provide local truth, leadership provides strategic priority.",
      }}
      explore={[
        {
          href: "/pillars/sponsorship",
          label: "Commercial",
          blurb: "The account relationships that portfolio whitespace and cross-sell are built on.",
        },
        {
          href: "/data-and-integrations",
          label: "Data and integrations",
          blurb: "What makes cross-event comparison possible in the first place.",
        },
        {
          href: "/platform",
          label: "The full platform",
          blurb: "The intelligence, planning and execution layer underneath every event in the portfolio.",
        },
        {
          href: "/capabilities",
          label: "Full capability index",
          blurb: "The diligence view, including where the portfolio capabilities sit today.",
        },
      ]}
      closing={{
        title: "See the portfolio, not six separate reports.",
        body: "Bring two events and their last editions. Audience and account overlap is usually the first thing that surprises a portfolio director.",
      }}
    />
  );
}
