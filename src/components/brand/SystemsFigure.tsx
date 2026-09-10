"use client";

/**
 * The systems an event business already runs feed Looped, and approved work
 * goes back out to them. Deliberately shows the shape of the relationship and
 * nothing about how it is resolved.
 */
const SYSTEMS = [
  { label: "CRM", color: "#7c3aed" },
  { label: "Registration", color: "#ec4899" },
  { label: "Awards", color: "#fb923c" },
  { label: "Programme", color: "#a78bdb" },
  { label: "Marketing and email", color: "#7c3aed" },
  { label: "Your own files", color: "#ec4899" },
];

const RETURNS = [
  "One view of a person across every event",
  "Account history that survives a handover",
  "Who can be contacted, and about what",
  "Evidence a partner will accept",
];

const GRADIENT_STOPS = (
  <>
    <stop offset="0" stopColor="#7c3aed" />
    <stop offset="0.55" stopColor="#ec4899" />
    <stop offset="1" stopColor="#fb923c" />
  </>
);

function WideFigure(): React.ReactElement {
  const midX = 480;
  const midY = 200;
  return (
    <svg viewBox="0 0 960 400" className="h-auto w-full" aria-hidden>
      <defs>
        <linearGradient id="sf-grad" x1="0" y1="0" x2="1" y2="1">
          {GRADIENT_STOPS}
        </linearGradient>
      </defs>

      <text x="20" y="26" fontFamily="var(--font-jetbrains)" fontSize="11" letterSpacing="2.4" className="fill-[#7c3aed]">
        YOUR SYSTEMS
      </text>
      <text x="742" y="26" fontFamily="var(--font-jetbrains)" fontSize="11" letterSpacing="2.4" className="fill-[#64748b]">
        WHAT YOU GET BACK
      </text>

      {SYSTEMS.map((s, i) => {
        const y = 62 + i * 56;
        return (
          <g key={s.label}>
            <rect x="20" y={y - 19} width="216" height="38" rx="12" fill="#fbfaf9" stroke="#ece9e4" strokeWidth="2" />
            <circle cx="42" cy={y} r="5" fill={s.color} />
            <text x="58" y={y + 5} fontFamily="var(--font-hanken)" fontSize="14" className="fill-[#0f172a]">
              {s.label}
            </text>
            <path d={`M 244 ${y} C 330 ${y}, 356 ${midY}, ${midX - 66} ${midY}`} fill="none" stroke="#ece9e4" strokeWidth="2" />
            <path
              d={`M 244 ${y} C 330 ${y}, 356 ${midY}, ${midX - 66} ${midY}`}
              fill="none"
              stroke={s.color}
              strokeWidth="2.5"
              strokeLinecap="round"
              className="signal-flow"
              style={{ animationDelay: `${i * 0.28}s` }}
            />
          </g>
        );
      })}

      {/* the layer */}
      <circle cx={midX} cy={midY} r="62" fill="none" stroke="url(#sf-grad)" strokeWidth="4" />
      <circle cx={midX} cy={midY} r="76" fill="none" stroke="url(#sf-grad)" strokeWidth="1.5" opacity="0.35" />
      <text x={midX} y={midY - 4} textAnchor="middle" fontFamily="var(--font-newsreader)" fontSize="22" className="fill-[#0f172a]">
        Looped
      </text>
      <text x={midX} y={midY + 20} textAnchor="middle" fontFamily="var(--font-hanken)" fontSize="12.5" className="fill-[#64748b]">
        the layer between
      </text>

      {RETURNS.map((label, i) => {
        const y = 90 + i * 62;
        return (
          <g key={label}>
            <path d={`M ${midX + 66} ${midY} C 620 ${midY}, 640 ${y}, 700 ${y}`} fill="none" stroke="#ece9e4" strokeWidth="2" />
            <path
              d={`M ${midX + 66} ${midY} C 620 ${midY}, 640 ${y}, 700 ${y}`}
              fill="none"
              stroke="#ec4899"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="signal-flow signal-flow-slow"
              style={{ animationDelay: `${0.5 + i * 0.3}s` }}
            />
            <rect x="700" y={y - 19} width="240" height="38" rx="12" fill="#ffffff" stroke="#ece9e4" strokeWidth="2" />
            <text x="716" y={y + 5} fontFamily="var(--font-hanken)" fontSize="13" className="fill-[#0f172a]">
              {label}
            </text>
          </g>
        );
      })}

      <text x={midX} y="370" textAnchor="middle" fontFamily="var(--font-hanken)" fontSize="14.5" className="fill-[#475569]">
        Approved work goes back out to the same systems.
      </text>
    </svg>
  );
}

function StackedFigure(): React.ReactElement {
  return (
    <svg viewBox="0 0 320 650" className="mx-auto h-auto w-full max-w-[380px]" aria-hidden>
      <defs>
        <linearGradient id="sf-grad-s" x1="0" y1="0" x2="1" y2="1">
          {GRADIENT_STOPS}
        </linearGradient>
      </defs>

      <text x="12" y="18" fontFamily="var(--font-jetbrains)" fontSize="10.5" letterSpacing="2.2" className="fill-[#7c3aed]">
        YOUR SYSTEMS
      </text>
      {SYSTEMS.map((s, i) => (
        <g key={s.label}>
          <rect x="12" y={30 + i * 38} width="296" height="30" rx="10" fill="#fbfaf9" stroke="#ece9e4" strokeWidth="2" />
          <circle cx="34" cy={45 + i * 38} r="4.5" fill={s.color} />
          <text x="50" y={50 + i * 38} fontFamily="var(--font-hanken)" fontSize="13" className="fill-[#0f172a]">
            {s.label}
          </text>
        </g>
      ))}

      <path d="M 160 264 L 160 286" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" className="signal-flow" />

      {/* the ring holds the name only; the caption sits clear of the stroke */}
      <circle cx="160" cy="326" r="38" fill="none" stroke="url(#sf-grad-s)" strokeWidth="4" />
      <text x="160" y="333" textAnchor="middle" fontFamily="var(--font-newsreader)" fontSize="19" className="fill-[#0f172a]">
        Looped
      </text>
      <text x="160" y="384" textAnchor="middle" fontFamily="var(--font-hanken)" fontSize="12" className="fill-[#64748b]">
        the layer between
      </text>

      <path d="M 160 396 L 160 416" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" className="signal-flow" />

      <text x="12" y="440" fontFamily="var(--font-jetbrains)" fontSize="10.5" letterSpacing="2.2" className="fill-[#64748b]">
        WHAT YOU GET BACK
      </text>
      {RETURNS.map((label, i) => (
        <g key={label}>
          <rect x="12" y={452 + i * 42} width="296" height="34" rx="11" fill="#ffffff" stroke="#ece9e4" strokeWidth="2" />
          <text x="28" y={474 + i * 42} fontFamily="var(--font-hanken)" fontSize="12.5" className="fill-[#0f172a]">
            {label}
          </text>
        </g>
      ))}

      <text x="12" y="636" fontFamily="var(--font-hanken)" fontSize="13" className="fill-[#475569]">
        Approved work goes back out to the same systems.
      </text>
    </svg>
  );
}

export function SystemsFigure(): React.ReactElement {
  return (
    <figure aria-label="The systems your event business already runs feed Looped, and approved work goes back out to those same systems">
      <div className="hidden lg:block">
        <WideFigure />
      </div>
      <div className="lg:hidden">
        <StackedFigure />
      </div>
    </figure>
  );
}
