"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

/** RECOVERED numbered list rhythm, on paper. Only what the platform's own records support. */
const TRUST = [
  { title: "You set the limits", body: "Looped acts only within the authority you have given it. Routine, authorised work proceeds; anything that commits money, changes a programme or reaches a client comes to a person first." },
  { title: "Evidence and traceability", body: "Recommendations carry their evidence. Decisions, actions and outcomes are recorded against them." },
  { title: "Controlled access", body: "Access is scoped by function and by role. Teams see the work that belongs to them." },
  { title: "Human approval", body: "Consequential actions pause for a person to approve or reject before anything proceeds." },
  { title: "Your intelligence stays yours", body: "Grounded in your approved data, held for your business, never used to inform someone else's events." },
  { title: "A registered UK company", body: "Looped is a product of Entwistle Digital Group Ltd, registered in England and Wales and with the ICO." },
];

export function TrustSection(): React.ReactElement {
  return (
    <Panel tone="stone" index="08" kicker="Trust and control">
      <Reveal className="max-w-3xl">
        <h2 className="text-balance display-section">Built to be trusted with an event business.</h2>
        <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">Looped does only what you have authorised, shows its evidence, and leaves the consequential calls with a person.</p>
      </Reveal>
      <div className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-3">
        {TRUST.map((t, index) => (
          <Reveal key={t.title} delay={(index % 3) * 0.06} className="border-t border-[rgba(15,23,42,0.12)] pt-5">
            <span className="font-mono text-sm text-purple">0{index + 1}</span>
            <h3 className="mt-3 text-lg text-ink">{t.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">{t.body}</p>
          </Reveal>
        ))}
      </div>
    </Panel>
  );
}
