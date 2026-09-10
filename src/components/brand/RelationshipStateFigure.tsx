"use client";

/**
 * One person, several relationships, and which one is live right now.
 *
 * The point for a buyer is that the relationship has a state, that state moves
 * over time, and Looped opens on the current one without losing the rest. How
 * that is resolved is not shown, and is not the story.
 */
const ROLES = [
  { lines: ["Spoke at your", "conference"], when: "Two editions ago", color: "#a78bdb", live: false },
  { lines: ["Contact on a", "sponsoring account"], when: "Renewal approaching", color: "#7c3aed", live: false },
  { lines: ["Entering this", "year's awards"], when: "Live now", color: "#ec4899", live: true },
  { lines: ["Delegate at a", "sister event"], when: "This season", color: "#fb923c", live: false },
];

const GRADIENT_STOPS = (
  <>
    <stop offset="0" stopColor="#7c3aed" />
    <stop offset="0.55" stopColor="#ec4899" />
    <stop offset="1" stopColor="#fb923c" />
  </>
);

function WideFigure(): React.ReactElement {
  const xs = [150, 372, 594, 816];
  const axis = 210;
  return (
    <svg viewBox="0 0 960 320" className="h-auto w-full" aria-hidden>
      <defs>
        <linearGradient id="rsf-grad" x1="0" y1="0" x2="1" y2="0">
          {GRADIENT_STOPS}
        </linearGradient>
      </defs>

      <text x="20" y="26" fontFamily="var(--font-jetbrains)" fontSize="11" letterSpacing="2.4" className="fill-[#7c3aed]">
        ONE PERSON, OVER TIME
      </text>

      {/* the timeline */}
      <line x1="60" y1={axis} x2="920" y2={axis} stroke="#ece9e4" strokeWidth="2" />
      <path
        d={`M 60 ${axis} L 920 ${axis}`}
        stroke="url(#rsf-grad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="signal-flow signal-flow-slow"
      />

      {ROLES.map((role, i) => {
        const x = xs[i];
        return (
          <g key={role.when}>
            <line x1={x} y1={axis} x2={x} y2={axis - 46} stroke="#ece9e4" strokeWidth="2" />
            <circle cx={x} cy={axis} r={role.live ? 11 : 7} fill={role.live ? role.color : "#ffffff"} stroke={role.color} strokeWidth="3" />
            {role.live ? <circle cx={x} cy={axis} r="20" fill="none" stroke={role.color} strokeWidth="1.5" opacity="0.45" /> : null}

            <rect
              x={x - 104}
              y={axis - 126}
              width="208"
              height="80"
              rx="14"
              fill="#ffffff"
              stroke={role.live ? role.color : "#ece9e4"}
              strokeWidth={role.live ? 2.5 : 2}
            />
            {role.lines.map((line, li) => (
              <text
                key={line}
                x={x}
                y={axis - 100 + li * 20}
                textAnchor="middle"
                fontFamily="var(--font-hanken)"
                fontSize="14.5"
                className="fill-[#0f172a]"
              >
                {line}
              </text>
            ))}
            <text x={x} y={axis + 34} textAnchor="middle" fontFamily="var(--font-jetbrains)" fontSize="10.5" letterSpacing="1.6" className={role.live ? "fill-[#ec4899]" : "fill-[#94a3b8]"}>
              {role.when.toUpperCase()}
            </text>
          </g>
        );
      })}

      <text x="480" y="296" textAnchor="middle" fontFamily="var(--font-hanken)" fontSize="14.5" className="fill-[#475569]">
        The conversation opens on the live one, and still knows the rest.
      </text>
    </svg>
  );
}

function StackedFigure(): React.ReactElement {
  return (
    <svg viewBox="0 0 320 420" className="mx-auto h-auto w-full max-w-[380px]" aria-hidden>
      <defs>
        <linearGradient id="rsf-grad-s" x1="0" y1="0" x2="0" y2="1">
          {GRADIENT_STOPS}
        </linearGradient>
      </defs>

      <text x="12" y="18" fontFamily="var(--font-jetbrains)" fontSize="10.5" letterSpacing="2.2" className="fill-[#7c3aed]">
        ONE PERSON, OVER TIME
      </text>

      <line x1="30" y1="42" x2="30" y2="350" stroke="#ece9e4" strokeWidth="2" />
      <path d="M 30 42 L 30 350" stroke="url(#rsf-grad-s)" strokeWidth="2.5" strokeLinecap="round" className="signal-flow signal-flow-slow" />

      {ROLES.map((role, i) => {
        const y = 62 + i * 76;
        return (
          <g key={role.when}>
            <circle cx="30" cy={y} r={role.live ? 10 : 6.5} fill={role.live ? role.color : "#ffffff"} stroke={role.color} strokeWidth="3" />
            {role.live ? <circle cx="30" cy={y} r="18" fill="none" stroke={role.color} strokeWidth="1.5" opacity="0.45" /> : null}
            <rect x="56" y={y - 26} width="252" height="56" rx="12" fill="#ffffff" stroke={role.live ? role.color : "#ece9e4"} strokeWidth={role.live ? 2.5 : 2} />
            {role.lines.map((line, li) => (
              <text
                key={line}
                x={70}
                y={y - 6 + li * 17}
                fontFamily="var(--font-hanken)"
                fontSize="13.5"
                className="fill-[#0f172a]"
              >
                {line}
              </text>
            ))}
            <text x="68" y={y + 24} fontFamily="var(--font-jetbrains)" fontSize="9.5" letterSpacing="1.4" className={role.live ? "fill-[#ec4899]" : "fill-[#94a3b8]"}>
              {role.when.toUpperCase()}
            </text>
          </g>
        );
      })}

      <text x="12" y="396" fontFamily="var(--font-hanken)" fontSize="13.5" className="fill-[#475569]">
        Opens on the live one, still knows the rest.
      </text>
    </svg>
  );
}

export function RelationshipStateFigure(): React.ReactElement {
  return (
    <figure aria-label="The same person holds several relationships with the organiser over time, and Looped opens the conversation on whichever is live">
      <div className="hidden lg:block">
        <WideFigure />
      </div>
      <div className="lg:hidden">
        <StackedFigure />
      </div>
    </figure>
  );
}
