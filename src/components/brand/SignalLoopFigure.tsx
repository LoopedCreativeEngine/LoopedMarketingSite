"use client";

/**
 * Intelligence working: live signals flow into the Loop, an insight becomes
 * a recommendation and an action, and the result flows back in as learning.
 * Shows buyer value, not architecture. Pure SVG + CSS: dashes travel along
 * the inbound and outbound paths; the return path carries the learning back.
 * Stops under prefers-reduced-motion (globals.css).
 */
const SIGNALS = [
  { label: "Audience & bookings", color: "#7c3aed", y: 60 },
  { label: "Campaign performance", color: "#ec4899", y: 130 },
  { label: "Market & competitors", color: "#fb923c", y: 200 },
  { label: "Your own decisions", color: "#a78bdb", y: 270 },
];
const STEPS = ["Insight", "Recommendation", "Action", "Result"];

export function SignalLoopFigure(): React.ReactElement {
  const loopX = 330;
  const loopY = 165;
  return (
    <svg viewBox="0 0 900 340" className="h-auto w-full" role="img" aria-label="Signals flow into the Loop; insights become recommendations and actions; results flow back as learning">
      <defs>
        <linearGradient id="slf-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7c3aed" />
          <stop offset="0.55" stopColor="#ec4899" />
          <stop offset="1" stopColor="#fb923c" />
        </linearGradient>
      </defs>

      {/* inbound signals */}
      {SIGNALS.map((s) => (
        <g key={s.label}>
          <circle cx="18" cy={s.y} r="5" fill={s.color} />
          <text x="32" y={s.y + 4} className="fill-[#475569]" fontFamily="var(--font-hanken)" fontSize="15">
            {s.label}
          </text>
          <path d={`M 215 ${s.y} C 265 ${s.y}, 265 ${loopY}, ${loopX - 62} ${loopY}`} fill="none" stroke="#ece9e4" strokeWidth="2" />
          <path
            d={`M 215 ${s.y} C 265 ${s.y}, 265 ${loopY}, ${loopX - 62} ${loopY}`}
            fill="none"
            stroke={s.color}
            strokeWidth="2.5"
            strokeLinecap="round"
            className="signal-flow"
          />
        </g>
      ))}

      {/* the Loop: the mark's geometry, drawn here so it scales with the figure */}
      <circle cx={loopX} cy={loopY} r="54" fill="none" stroke="url(#slf-grad)" strokeWidth="6" />
      <text x={loopX} y={loopY + 88} textAnchor="middle" fontFamily="var(--font-jetbrains)" fontSize="11" letterSpacing="2.4" className="fill-[#64748b]">
        UNDERSTAND
      </text>

      {/* outbound: insight → recommendation → action → result */}
      {STEPS.map((step, i) => {
        const x = 440 + i * 112;
        return (
          <g key={step}>
            <path d={`M ${i === 0 ? loopX + 62 : x - 112 + 84} ${loopY} L ${x} ${loopY}`} fill="none" stroke="#ece9e4" strokeWidth="2" />
            <path d={`M ${i === 0 ? loopX + 62 : x - 112 + 84} ${loopY} L ${x} ${loopY}`} fill="none" stroke="url(#slf-grad)" strokeWidth="2.5" strokeLinecap="round" className="signal-flow" style={{ animationDelay: `${0.9 + i * 0.6}s` }} />
            <rect x={x} y={loopY - 22} width="84" height="44" rx="12" fill="#ffffff" stroke="#ece9e4" />
            <text x={x + 42} y={loopY + 5} textAnchor="middle" fontFamily="var(--font-hanken)" fontSize="14" fontWeight="600" className="fill-[#0f172a]">
              {step}
            </text>
            <text x={x + 42} y={loopY + 44} textAnchor="middle" fontFamily="var(--font-jetbrains)" fontSize="10" letterSpacing="2" className="fill-[#64748b]">
              {["DECIDE", "DECIDE", "ACT", "MEASURE"][i]}
            </text>
          </g>
        );
      })}

      {/* learning returns to the Loop */}
      <path d={`M 860 ${loopY + 22} C 860 300, ${loopX} 320, ${loopX} ${loopY + 62}`} fill="none" stroke="#ece9e4" strokeWidth="2" />
      <path d={`M 860 ${loopY + 22} C 860 300, ${loopX} 320, ${loopX} ${loopY + 62}`} fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" className="signal-flow signal-flow-slow" style={{ animationDelay: "3.2s" }} />
      <text x="600" y="322" textAnchor="middle" fontFamily="var(--font-jetbrains)" fontSize="11" letterSpacing="2.4" className="fill-[#7c3aed]">
        LEARN · CARRIED INTO THE NEXT DECISION
      </text>
    </svg>
  );
}
