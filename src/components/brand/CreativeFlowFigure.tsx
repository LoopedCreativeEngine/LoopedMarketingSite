"use client";

/**
 * Intelligence becomes finished creative, and nothing leaves without a person
 * releasing it. The value shown is the fan-out: one approved moment produces a
 * full set of assets across the places an announcement actually has to land.
 */
const OUTPUTS = [
  { label: "Personalised cards", color: "#7c3aed" },
  { label: "Collective announcement", color: "#ec4899" },
  { label: "Social carousels and copy", color: "#fb923c" },
  { label: "Webpage content", color: "#a78bdb" },
  { label: "Short announcement video", color: "#7c3aed" },
];

const GRADIENT_STOPS = (
  <>
    <stop offset="0" stopColor="#7c3aed" />
    <stop offset="0.55" stopColor="#ec4899" />
    <stop offset="1" stopColor="#fb923c" />
  </>
);

function WideFigure(): React.ReactElement {
  const ys = [64, 124, 184, 244, 304];
  const midY = 184;
  return (
    <svg viewBox="0 0 960 390" className="h-auto w-full" aria-hidden>
      <defs>
        <linearGradient id="cff-grad" x1="0" y1="0" x2="1" y2="0">
          {GRADIENT_STOPS}
        </linearGradient>
      </defs>

      <text x="20" y="26" fontFamily="var(--font-jetbrains)" fontSize="11" letterSpacing="2.4" className="fill-[#7c3aed]">
        WHAT LOOPED ALREADY KNOWS
      </text>
      <text x="418" y="26" fontFamily="var(--font-jetbrains)" fontSize="11" letterSpacing="2.4" className="fill-[#64748b]">
        ONE SET, MADE TOGETHER
      </text>
      <text x="806" y="26" fontFamily="var(--font-jetbrains)" fontSize="11" letterSpacing="2.4" className="fill-[#64748b]">
        YOUR RELEASE
      </text>

      {/* the inputs */}
      {["The confirmed list", "Your brand rules", "The approved message"].map((label, i) => {
        const y = 128 + i * 58;
        return (
          <g key={label}>
            <rect x="20" y={y - 20} width="238" height="40" rx="12" fill="#fbfaf9" stroke="#ece9e4" strokeWidth="2" />
            <text x="40" y={y + 5} fontFamily="var(--font-hanken)" fontSize="14.5" className="fill-[#0f172a]">
              {label}
            </text>
            <path d={`M 266 ${y} C 312 ${y}, 312 ${midY}, 352 ${midY}`} fill="none" stroke="#ece9e4" strokeWidth="2" />
            <path
              d={`M 266 ${y} C 312 ${y}, 312 ${midY}, 352 ${midY}`}
              fill="none"
              stroke="#7c3aed"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="signal-flow"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          </g>
        );
      })}

      {/* the batch */}
      <circle cx="392" cy={midY} r="40" fill="none" stroke="url(#cff-grad)" strokeWidth="4" />
      <text x="392" y={midY + 6} textAnchor="middle" fontFamily="var(--font-newsreader)" fontSize="20" className="fill-[#0f172a]">
        One set
      </text>

      {/* the outputs */}
      {OUTPUTS.map((o, i) => {
        const y = ys[i];
        return (
          <g key={o.label}>
            <path d={`M 434 ${midY} C 484 ${midY}, 484 ${y}, 530 ${y}`} fill="none" stroke="#ece9e4" strokeWidth="2" />
            <path
              d={`M 434 ${midY} C 484 ${midY}, 484 ${y}, 530 ${y}`}
              fill="none"
              stroke={o.color}
              strokeWidth="2.5"
              strokeLinecap="round"
              className="signal-flow"
              style={{ animationDelay: `${0.4 + i * 0.22}s` }}
            />
            <rect x="530" y={y - 19} width="248" height="38" rx="12" fill="#ffffff" stroke="#ece9e4" strokeWidth="2" />
            <circle cx="552" cy={y} r="5" fill={o.color} />
            <text x="568" y={y + 5} fontFamily="var(--font-hanken)" fontSize="14" className="fill-[#0f172a]">
              {o.label}
            </text>
            <path d={`M 790 ${y} C 820 ${y}, 820 ${midY}, 846 ${midY}`} fill="none" stroke="#ece9e4" strokeWidth="2" />
          </g>
        );
      })}

      {/* the release gate */}
      <rect x="846" y={midY - 54} width="94" height="108" rx="18" fill="#ffffff" stroke="url(#cff-grad)" strokeWidth="3" />
      <text x="893" y={midY - 16} textAnchor="middle" fontFamily="var(--font-newsreader)" fontSize="19" className="fill-[#0f172a]">
        Your
      </text>
      <text x="893" y={midY + 6} textAnchor="middle" fontFamily="var(--font-newsreader)" fontSize="19" className="fill-[#0f172a]">
        review
      </text>
      <text x="893" y={midY + 34} textAnchor="middle" fontFamily="var(--font-jetbrains)" fontSize="9.5" letterSpacing="1.4" className="fill-[#7c3aed]">
        THEN LIVE
      </text>
      <text x="893" y={midY + 78} textAnchor="middle" fontFamily="var(--font-hanken)" fontSize="13" className="fill-[#64748b]">
        Nothing before
      </text>
      <text x="893" y={midY + 96} textAnchor="middle" fontFamily="var(--font-hanken)" fontSize="13" className="fill-[#64748b]">
        you say so
      </text>
    </svg>
  );
}

function StackedFigure(): React.ReactElement {
  return (
    <svg viewBox="0 0 320 560" className="mx-auto h-auto w-full max-w-[380px]" aria-hidden>
      <defs>
        <linearGradient id="cff-grad-s" x1="0" y1="0" x2="1" y2="1">
          {GRADIENT_STOPS}
        </linearGradient>
      </defs>

      <text x="12" y="18" fontFamily="var(--font-jetbrains)" fontSize="10.5" letterSpacing="2.2" className="fill-[#7c3aed]">
        WHAT LOOPED KNOWS
      </text>
      {["The confirmed list", "Your brand rules", "The approved message"].map((label, i) => (
        <g key={label}>
          <rect x="12" y={30 + i * 42} width="296" height="34" rx="11" fill="#fbfaf9" stroke="#ece9e4" strokeWidth="2" />
          <text x="30" y={52 + i * 42} fontFamily="var(--font-hanken)" fontSize="13.5" className="fill-[#0f172a]">
            {label}
          </text>
        </g>
      ))}

      <path d="M 160 158 L 160 182" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" className="signal-flow" />
      <circle cx="160" cy="216" r="32" fill="none" stroke="url(#cff-grad-s)" strokeWidth="4" />
      <text x="160" y="222" textAnchor="middle" fontFamily="var(--font-newsreader)" fontSize="17" className="fill-[#0f172a]">
        One set
      </text>

      {OUTPUTS.map((o, i) => {
        const y = 274 + i * 42;
        return (
          <g key={o.label}>
            <rect x="12" y={y} width="296" height="34" rx="11" fill="#ffffff" stroke="#ece9e4" strokeWidth="2" />
            <circle cx="34" cy={y + 17} r="5" fill={o.color} />
            <text x="50" y={y + 22} fontFamily="var(--font-hanken)" fontSize="13" className="fill-[#0f172a]">
              {o.label}
            </text>
          </g>
        );
      })}

      <path d="M 160 490 L 160 508" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" className="signal-flow" />
      <rect x="70" y="508" width="180" height="42" rx="14" fill="#ffffff" stroke="url(#cff-grad-s)" strokeWidth="3" />
      <text x="160" y="535" textAnchor="middle" fontFamily="var(--font-newsreader)" fontSize="17" className="fill-[#0f172a]">
        Your review, then live
      </text>
    </svg>
  );
}

export function CreativeFlowFigure(): React.ReactElement {
  return (
    <figure aria-label="What Looped already knows becomes one connected set of announcement assets, released only after your team reviews it">
      <div className="hidden lg:block">
        <WideFigure />
      </div>
      <div className="lg:hidden">
        <StackedFigure />
      </div>
    </figure>
  );
}
