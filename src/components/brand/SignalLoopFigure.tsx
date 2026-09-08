"use client";

/**
 * The intelligence flow, as buyer value (not architecture): the signals around
 * an event come together into one understood picture, Looped recommends the
 * strongest move, the person decides, Looped acts and verifies, and what
 * actually happened becomes part of the next decision. Decide is drawn as the
 * human-control moment. Pure SVG + CSS; dashes travel the paths and stop under
 * prefers-reduced-motion (globals.css). Laid out so no label sits under a line.
 *
 * Two layouts of the same drawing, same vocabulary, same content:
 *
 *   WIDE     the approved composition, left to right. Shown from `lg` up,
 *            which is where it is genuinely legible: the 960-unit viewBox
 *            scales to ~0.93 at 1024px, so a 14.5-unit label renders at ~13.5px.
 *   STACKED  the same signals, ring, pills and return loop reflowed down the
 *            page for narrow screens. Below `lg` the wide version would scale
 *            to 0.32 on a 390px phone and set its labels at under 5px, which is
 *            a picture of a diagram rather than a diagram. The stacked viewBox
 *            is 320 units against a ~308px container, so the same labels render
 *            at ~14px and the figure is actually readable.
 *
 * The `lg` split is deliberate rather than `sm`: at 640px the wide layout still
 * only reaches ~8px text, so the breakpoint follows legibility, not a guess.
 */
const SIGNALS = [
  { label: "Audience & bookings", color: "#7c3aed", y: 54 },
  { label: "Campaign performance", color: "#ec4899", y: 112 },
  { label: "Market & competitors", color: "#fb923c", y: 170 },
  { label: "Your team's actions", color: "#a78bdb", y: 228 },
];

/** The move, after understanding. Decide is the human step and is marked. */
const STEPS = [
  { label: "Recommend", human: false },
  { label: "Decide", human: true },
  { label: "Act", human: false },
  { label: "Verify", human: false },
];

const GRADIENT_STOPS = (
  <>
    <stop offset="0" stopColor="#7c3aed" />
    <stop offset="0.55" stopColor="#ec4899" />
    <stop offset="1" stopColor="#fb923c" />
  </>
);

/* ─────────────────────────── wide (lg and up) ─────────────────────────── */

function WideFigure(): React.ReactElement {
  const loopX = 300;
  const loopY = 150;
  const loopR = 44;
  const pillW = 116;
  const pillH = 46;
  const pillY = loopY;
  const xs = [452, 592, 732, 872];

  return (
    <svg viewBox="0 -8 960 386" className="h-auto w-full" aria-hidden>
      <defs>
        <linearGradient id="slf-grad" x1="0" y1="0" x2="1" y2="0">
          {GRADIENT_STOPS}
        </linearGradient>
      </defs>

      {/* inbound signals coming together */}
      {SIGNALS.map((s) => (
        <g key={s.label}>
          <circle cx="16" cy={s.y} r="5" fill={s.color} />
          <text x="30" y={s.y + 4} className="fill-[#475569]" fontFamily="var(--font-hanken)" fontSize="14.5">
            {s.label}
          </text>
          <path d={`M 196 ${s.y} C 236 ${s.y}, 236 ${loopY}, ${loopX - loopR - 10} ${loopY}`} fill="none" stroke="#ece9e4" strokeWidth="2" />
          <path
            d={`M 196 ${s.y} C 236 ${s.y}, 236 ${loopY}, ${loopX - loopR - 10} ${loopY}`}
            fill="none"
            stroke={s.color}
            strokeWidth="2.5"
            strokeLinecap="round"
            className="signal-flow"
          />
        </g>
      ))}

      {/* Understand / One picture: both labels sit clearly ABOVE the loop with a generous gap, never on the stroke. */}
      <text x={loopX} y={loopY - loopR - 30} textAnchor="middle" fontFamily="var(--font-newsreader)" fontSize="19" className="fill-[#0f172a]">
        Understand
      </text>
      <text x={loopX} y={loopY - loopR - 14} textAnchor="middle" fontFamily="var(--font-jetbrains)" fontSize="9" letterSpacing="1.8" className="fill-[#64748b]">
        ONE PICTURE
      </text>
      <circle cx={loopX} cy={loopY} r={loopR} fill="none" stroke="url(#slf-grad)" strokeWidth="6" />
      <circle cx={loopX} cy={loopY} r="6" fill="#a78bdb" />

      {/* the move: recommend, decide (human), act, verify */}
      {STEPS.map((step, i) => {
        const x = xs[i];
        const prevRight = i === 0 ? loopX + loopR + 6 : xs[i - 1] + pillW / 2 + 6;
        const left = x - pillW / 2 - 6;
        return (
          <g key={step.label}>
            <path d={`M ${prevRight} ${pillY} L ${left} ${pillY}`} fill="none" stroke="#ece9e4" strokeWidth="2" />
            <path d={`M ${prevRight} ${pillY} L ${left} ${pillY}`} fill="none" stroke="url(#slf-grad)" strokeWidth="2.5" strokeLinecap="round" className="signal-flow" style={{ animationDelay: `${0.8 + i * 0.55}s` }} />
            <rect
              x={x - pillW / 2}
              y={pillY - pillH / 2}
              width={pillW}
              height={pillH}
              rx="13"
              fill={step.human ? "#faf5ff" : "#ffffff"}
              stroke={step.human ? "#ec4899" : "#ece9e4"}
              strokeWidth={step.human ? "2.4" : "1.4"}
            />
            <text x={x} y={pillY + 5} textAnchor="middle" fontFamily="var(--font-hanken)" fontSize="15" fontWeight="600" className="fill-[#0f172a]">
              {step.label}
            </text>
            {step.human ? (
              <text x={x} y={pillY - pillH / 2 - 12} textAnchor="middle" fontFamily="var(--font-jetbrains)" fontSize="10" letterSpacing="1.8" className="fill-[#db2777]">
                YOU DECIDE
              </text>
            ) : null}
          </g>
        );
      })}

      {/* learn: what actually happened returns to the picture */}
      <path d={`M ${xs[3]} ${pillY + pillH / 2 + 4} C ${xs[3]} 300, ${loopX} 316, ${loopX} ${loopY + loopR + 6}`} fill="none" stroke="#ece9e4" strokeWidth="2" />
      <path d={`M ${xs[3]} ${pillY + pillH / 2 + 4} C ${xs[3]} 300, ${loopX} 316, ${loopX} ${loopY + loopR + 6}`} fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" className="signal-flow signal-flow-slow" style={{ animationDelay: "3s" }} />
      <text x="590" y="336" textAnchor="middle" fontFamily="var(--font-jetbrains)" fontSize="10" letterSpacing="1.8" className="fill-[#64748b]">
        LEARN
      </text>
      <text x="590" y="358" textAnchor="middle" fontFamily="var(--font-newsreader)" fontSize="16" fontStyle="italic" className="fill-[#7c3aed]">
        What actually happened becomes part of the next decision.
      </text>
    </svg>
  );
}

/* ──────────────────────── stacked (below lg) ──────────────────────── */

/** Rows of the same four signals, then the ring, then the same four pills. */
const STACK_SIGNAL_Y = [18, 46, 74, 102];
const RING = { x: 54, y: 168, r: 27 };
/** Decide is taller because it carries its own YOU DECIDE line, as the wide one does. */
const STACK_PILLS = [
  { top: 212, height: 40 },
  { top: 268, height: 52 },
  { top: 336, height: 40 },
  { top: 392, height: 40 },
];
const PILL_X = 60;
const PILL_W = 200;
const PILL_CX = PILL_X + PILL_W / 2;

function StackedFigure(): React.ReactElement {
  /* the loop home: signals converge into the ring's top, learning returns to its left */
  const intoRing = `M 12 ${STACK_SIGNAL_Y[3]} C 12 130, 26 ${RING.y - RING.r}, ${RING.x} ${RING.y - RING.r}`;
  const verifyBottom = STACK_PILLS[3].top + STACK_PILLS[3].height;
  const learnBack =
    `M ${PILL_CX} ${verifyBottom} C ${PILL_CX} 456, 148 462, 118 462 L 40 462 ` +
    `C 20 462, 10 452, 10 432 L 10 200 C 10 182, 16 ${RING.y}, ${RING.x - RING.r} ${RING.y}`;

  return (
    <svg viewBox="0 0 320 552" className="mx-auto h-auto w-full max-w-[380px]" aria-hidden>
      <defs>
        <linearGradient id="slf-grad-stacked" x1="0" y1="0" x2="1" y2="1">
          {GRADIENT_STOPS}
        </linearGradient>
      </defs>

      {/* the four signals, and the spine that brings them together */}
      <path d={`M 12 ${STACK_SIGNAL_Y[0]} L 12 ${STACK_SIGNAL_Y[3]}`} fill="none" stroke="#ece9e4" strokeWidth="2" />
      <path
        d={`M 12 ${STACK_SIGNAL_Y[0]} L 12 ${STACK_SIGNAL_Y[3]}`}
        fill="none"
        stroke="url(#slf-grad-stacked)"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="signal-flow"
      />
      {SIGNALS.map((s, i) => (
        <g key={s.label}>
          <circle cx="12" cy={STACK_SIGNAL_Y[i]} r="4.5" fill={s.color} />
          <text x="28" y={STACK_SIGNAL_Y[i] + 5} className="fill-[#475569]" fontFamily="var(--font-hanken)" fontSize="14.5">
            {s.label}
          </text>
        </g>
      ))}

      <path d={intoRing} fill="none" stroke="#ece9e4" strokeWidth="2" />
      <path d={intoRing} fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" className="signal-flow" style={{ animationDelay: "0.5s" }} />

      {/* Understand: the ring, with both labels beside it rather than above */}
      <circle cx={RING.x} cy={RING.y} r={RING.r} fill="none" stroke="url(#slf-grad-stacked)" strokeWidth="5.5" />
      <circle cx={RING.x} cy={RING.y} r="5.5" fill="#a78bdb" />
      <text x="94" y={RING.y - 2} fontFamily="var(--font-newsreader)" fontSize="18" className="fill-[#0f172a]">
        Understand
      </text>
      <text x="94" y={RING.y + 14} fontFamily="var(--font-jetbrains)" fontSize="10" letterSpacing="1.8" className="fill-[#64748b]">
        ONE PICTURE
      </text>

      {/* the move, running down the page */}
      {STEPS.map((step, i) => {
        const pill = STACK_PILLS[i];
        const cy = pill.top + pill.height / 2;
        const from =
          i === 0
            ? `M ${RING.x} ${RING.y + RING.r} C ${RING.x} ${RING.y + RING.r + 22}, ${PILL_CX - 40} ${pill.top}, ${PILL_CX} ${pill.top}`
            : `M ${PILL_CX} ${STACK_PILLS[i - 1].top + STACK_PILLS[i - 1].height} L ${PILL_CX} ${pill.top}`;
        return (
          <g key={step.label}>
            <path d={from} fill="none" stroke="#ece9e4" strokeWidth="2" />
            <path
              d={from}
              fill="none"
              stroke="url(#slf-grad-stacked)"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="signal-flow"
              style={{ animationDelay: `${0.8 + i * 0.55}s` }}
            />
            <rect
              x={PILL_X}
              y={pill.top}
              width={PILL_W}
              height={pill.height}
              rx="13"
              fill={step.human ? "#faf5ff" : "#ffffff"}
              stroke={step.human ? "#ec4899" : "#ece9e4"}
              strokeWidth={step.human ? "2.4" : "1.4"}
            />
            <text
              x={PILL_CX}
              y={step.human ? cy - 2 : cy + 5}
              textAnchor="middle"
              fontFamily="var(--font-hanken)"
              fontSize="15.5"
              fontWeight="600"
              className="fill-[#0f172a]"
            >
              {step.label}
            </text>
            {step.human ? (
              <text x={PILL_CX} y={cy + 15} textAnchor="middle" fontFamily="var(--font-jetbrains)" fontSize="10" letterSpacing="1.8" className="fill-[#db2777]">
                YOU DECIDE
              </text>
            ) : null}
          </g>
        );
      })}

      {/* learn: what actually happened returns to the picture */}
      <path d={learnBack} fill="none" stroke="#ece9e4" strokeWidth="2" />
      <path d={learnBack} fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" className="signal-flow signal-flow-slow" style={{ animationDelay: "3s" }} />
      <text x="160" y="494" textAnchor="middle" fontFamily="var(--font-jetbrains)" fontSize="10" letterSpacing="1.8" className="fill-[#64748b]">
        LEARN
      </text>
      {/* SVG does not wrap: the one italic line, set as two so it fits 320 units */}
      <text x="160" y="518" textAnchor="middle" fontFamily="var(--font-newsreader)" fontSize="15" fontStyle="italic" className="fill-[#7c3aed]">
        What actually happened becomes
      </text>
      <text x="160" y="538" textAnchor="middle" fontFamily="var(--font-newsreader)" fontSize="15" fontStyle="italic" className="fill-[#7c3aed]">
        part of the next decision.
      </text>
    </svg>
  );
}

export function SignalLoopFigure(): React.ReactElement {
  return (
    <div
      role="img"
      aria-label="The signals around an event come together into one understood picture; Looped recommends, a person decides, Looped acts and verifies, and what actually happened becomes part of the next decision"
    >
      <div className="hidden lg:block">
        <WideFigure />
      </div>
      <div className="lg:hidden">
        <StackedFigure />
      </div>
    </div>
  );
}
