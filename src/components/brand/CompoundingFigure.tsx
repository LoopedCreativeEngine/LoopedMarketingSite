"use client";

/**
 * One event → next edition → brand → portfolio → organisation.
 * Each level inherits the learning of the one before: the loops grow, and a
 * learning arc travels from each stage into the next. Buyer value only.
 */
const STAGES = [
  { label: "One edition", sub: "Where the event stands now", r: 22 },
  { label: "Next edition", sub: "Starts with what last time taught", r: 30 },
  { label: "Brand", sub: "Events learn from each other", r: 38 },
  { label: "Portfolio", sub: "Patterns worth reusing", r: 46 },
  { label: "Organisation", sub: "Knowledge the business keeps", r: 54 },
];

export function CompoundingFigure(): React.ReactElement {
  const y = 118;
  const xs = [90, 270, 460, 665, 880];
  return (
    <svg viewBox="0 0 960 260" className="h-auto w-full" role="img" aria-label="Learning carries from one event to the next edition, the brand, the portfolio and the organisation">
      <defs>
        <linearGradient id="cf-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7c3aed" />
          <stop offset="0.55" stopColor="#ec4899" />
          <stop offset="1" stopColor="#fb923c" />
        </linearGradient>
      </defs>
      {STAGES.map((s, i) => {
        const x = xs[i];
        const next = xs[i + 1];
        return (
          <g key={s.label}>
            {next ? (
              <>
                <path d={`M ${x + s.r + 6} ${y - 30} C ${x + 90} ${y - 90}, ${next - 90} ${y - 90}, ${next - STAGES[i + 1].r - 6} ${y - 30}`} fill="none" stroke="#ece9e4" strokeWidth="2" />
                <path
                  d={`M ${x + s.r + 6} ${y - 30} C ${x + 90} ${y - 90}, ${next - 90} ${y - 90}, ${next - STAGES[i + 1].r - 6} ${y - 30}`}
                  fill="none"
                  stroke="#ec4899"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="signal-flow signal-flow-slow"
                  style={{ animationDelay: `${i * 0.9}s` }}
                />
              </>
            ) : null}
            <circle cx={x} cy={y} r={s.r} fill="none" stroke="url(#cf-grad)" strokeWidth={3 + i * 0.6} />
            <text x={x} y={y + 66 + 22} textAnchor="middle" fontFamily="var(--font-newsreader)" fontSize="22" className="fill-[#0f172a]">
              {s.label}
            </text>
            <text x={x} y={y + 66 + 42} textAnchor="middle" fontFamily="var(--font-hanken)" fontSize="12.5" className="fill-[#64748b]">
              {s.sub}
            </text>
          </g>
        );
      })}
      <text x="480" y="22" textAnchor="middle" fontFamily="var(--font-jetbrains)" fontSize="11" letterSpacing="2.4" className="fill-[#7c3aed]">
        LEARNING CARRIED FORWARD
      </text>
    </svg>
  );
}
