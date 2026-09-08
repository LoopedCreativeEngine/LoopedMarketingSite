"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

/** The evidence cycle as the Looped loop: every recommendation stays connected to what happened next. */
const NODES = [
  { label: "Understand", human: false },
  { label: "Recommend", human: false },
  { label: "Decide", human: true },
  { label: "Act", human: false },
  { label: "Verify", human: false },
  { label: "Learn", human: false },
];

function EvidenceCycle(): React.ReactElement {
  const cx = 360;
  const cy = 208;
  const R = 150;
  const chipW = 150;
  const chipH = 44;
  const toXY = (deg: number, r = R) => {
    const a = ((deg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  };
  const step = 360 / NODES.length;

  // small clockwise chevrons that show the loop's direction (no SVG markers)
  const chevrons = [30, 90, 150, 210, 270, 330].map((deg) => {
    const a = ((deg - 90) * Math.PI) / 180;
    const px = cx + R * Math.cos(a);
    const py = cy + R * Math.sin(a);
    const tx = -Math.sin(a); // clockwise tangent
    const ty = Math.cos(a);
    const nx = Math.cos(a); // outward normal
    const ny = Math.sin(a);
    const s = 7;
    const tip = `${(px + tx * s).toFixed(1)},${(py + ty * s).toFixed(1)}`;
    const b1 = `${(px - tx * s * 0.5 + nx * s * 0.7).toFixed(1)},${(py - ty * s * 0.5 + ny * s * 0.7).toFixed(1)}`;
    const b2 = `${(px - tx * s * 0.5 - nx * s * 0.7).toFixed(1)},${(py - ty * s * 0.5 - ny * s * 0.7).toFixed(1)}`;
    return `${tip} ${b1} ${b2}`;
  });

  return (
    <svg viewBox="0 0 720 432" className="mx-auto h-auto w-full max-w-2xl" role="img" aria-label="Looped understands the picture and recommends, a person decides, Looped acts and verifies what happened, and the learning carries back into the next decision">
      <defs>
        <linearGradient id="ev-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a78bdb" />
          <stop offset="0.55" stopColor="#ec4899" />
          <stop offset="1" stopColor="#fb923c" />
        </linearGradient>
      </defs>

      {/* the loop ring */}
      <circle cx={cx} cy={cy} r={R} fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="10" />
      <circle cx={cx} cy={cy} r={R} fill="none" stroke="url(#ev-grad)" strokeWidth="2.5" strokeDasharray="4 9" strokeLinecap="round" className="cycle-spin" />

      {/* direction chevrons */}
      {chevrons.map((pts, i) => (
        <polygon key={i} points={pts} fill="#c4b5fd" />
      ))}

      {/* a small loop at the centre, drawn in SVG units (no nested component) */}
      <circle cx={cx} cy={cy} r="21" fill="none" stroke="url(#ev-grad)" strokeWidth="3.5" />
      <circle cx={cx} cy={cy} r="6" fill="#a78bdb" />

      {/* nodes */}
      {NODES.map((n, i) => {
        const p = toXY(i * step);
        return (
          <g key={n.label}>
            <rect
              x={p.x - chipW / 2}
              y={p.y - chipH / 2}
              width={chipW}
              height={chipH}
              rx="13"
              fill="#111a30"
              stroke={n.human ? "#ec4899" : "rgba(255,255,255,0.16)"}
              strokeWidth={n.human ? "2.4" : "1.3"}
            />
            <text x={p.x} y={p.y + (n.human ? 0 : 5)} textAnchor="middle" fontFamily="var(--font-hanken)" fontSize="14.5" fontWeight="600" className="fill-[#f8fafc]">
              {n.label}
            </text>
            {n.human ? (
              <text x={p.x} y={p.y + 15} textAnchor="middle" fontFamily="var(--font-jetbrains)" fontSize="9" letterSpacing="1.6" className="fill-[#f0abfc]">
                YOU DECIDE
              </text>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}

export function EvidenceSection(): React.ReactElement {
  return (
    <Panel tone="night" kicker="Proof">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <h2 className="text-balance display-section">Judged on what changed, not what it generated.</h2>
        </Reveal>
        <Reveal className="space-y-5 lg:col-span-7 lg:pt-2">
          <p className="text-base leading-relaxed text-mist sm:text-lg">
            Most AI is judged on activity: words generated, hours saved. Looped is judged on what changed. Every
            recommendation stays connected to the decision it informed, the action that followed and the outcome
            verified at the other end, so you can see which moves actually shifted bookings, entries, partners and the
            room.
          </p>
          <p className="text-base leading-relaxed text-mist sm:text-lg">
            An action that was attempted is not an action that worked. Looped checks the destination and records what
            it finds there. The calls that paid off are carried into the next edition. The ones that didn&apos;t are
            kept too, so nobody repeats them. That is how the intelligence earns its place.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-12">
        <p className="mb-6 text-center kicker text-lavender">Every recommendation stays connected to what happened next</p>
        <EvidenceCycle />
      </Reveal>

      <Reveal>
        <p className="mx-auto mt-12 max-w-4xl text-balance text-center font-serif text-2xl italic leading-snug text-snow sm:text-3xl">
          AI should have to prove its value.
        </p>
      </Reveal>
    </Panel>
  );
}
