"use client";

/**
 * The intelligence flow, as buyer value (not architecture): the signals around
 * an event come together into one understood picture, Looped recommends the
 * strongest move, the person decides, Looped executes and measures, and what
 * works becomes part of the next decision. Decide is drawn as the human-control
 * moment. Pure SVG + CSS; dashes travel the paths and stop under
 * prefers-reduced-motion (globals.css). Laid out so no label sits under a line.
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
  { label: "Execute", human: false },
  { label: "Measure", human: false },
];

export function SignalLoopFigure(): React.ReactElement {
  const loopX = 300;
  const loopY = 150;
  const loopR = 50;
  const pillW = 116;
  const pillH = 46;
  const pillY = loopY;
  const xs = [452, 592, 732, 872];

  return (
    <svg viewBox="0 0 960 372" className="h-auto w-full" role="img" aria-label="The signals around an event come together into one understood picture; Looped recommends, a person decides, Looped executes and measures, and what works becomes part of the next decision">
      <defs>
        <linearGradient id="slf-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7c3aed" />
          <stop offset="0.55" stopColor="#ec4899" />
          <stop offset="1" stopColor="#fb923c" />
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

      {/* Understand: the one picture */}
      <circle cx={loopX} cy={loopY} r={loopR} fill="none" stroke="url(#slf-grad)" strokeWidth="6" />
      <text x={loopX} y={loopY - 4} textAnchor="middle" fontFamily="var(--font-newsreader)" fontSize="19" className="fill-[#0f172a]">
        Understand
      </text>
      <text x={loopX} y={loopY + 16} textAnchor="middle" fontFamily="var(--font-jetbrains)" fontSize="9.5" letterSpacing="1.6" className="fill-[#64748b]">
        ONE PICTURE
      </text>

      {/* the move: recommend, decide (human), execute, measure */}
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

      {/* learning returns: what works becomes part of the next decision */}
      <path d={`M ${xs[3]} ${pillY + pillH / 2 + 4} C ${xs[3]} 300, ${loopX} 316, ${loopX} ${loopY + loopR + 6}`} fill="none" stroke="#ece9e4" strokeWidth="2" />
      <path d={`M ${xs[3]} ${pillY + pillH / 2 + 4} C ${xs[3]} 300, ${loopX} 316, ${loopX} ${loopY + loopR + 6}`} fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" className="signal-flow signal-flow-slow" style={{ animationDelay: "3s" }} />
      <text x="590" y="352" textAnchor="middle" fontFamily="var(--font-newsreader)" fontSize="16" fontStyle="italic" className="fill-[#7c3aed]">
        What works becomes part of the next decision.
      </text>
    </svg>
  );
}
