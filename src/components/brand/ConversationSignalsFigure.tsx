"use client";

/**
 * What a conversation leaves behind: an exchange becomes structured signals,
 * and those signals join the event picture. Buyer value only, no mechanism.
 *
 * Two layouts of the same drawing, following SignalLoopFigure: a wide
 * composition from `lg` up, and a stacked one below it, where the wide version
 * would set its labels too small to read on a phone.
 */
const SIGNALS = [
  { label: "What they asked for", color: "#7c3aed" },
  { label: "Where they got stuck", color: "#ec4899" },
  { label: "What they nearly did", color: "#fb923c" },
  { label: "What they needed next", color: "#a78bdb" },
];

const GRADIENT_STOPS = (
  <>
    <stop offset="0" stopColor="#7c3aed" />
    <stop offset="0.55" stopColor="#ec4899" />
    <stop offset="1" stopColor="#fb923c" />
  </>
);

function WideFigure(): React.ReactElement {
  const ys = [72, 132, 192, 252];
  return (
    <svg viewBox="0 0 960 330" className="h-auto w-full" aria-hidden>
      <defs>
        <linearGradient id="csf-grad" x1="0" y1="0" x2="1" y2="0">
          {GRADIENT_STOPS}
        </linearGradient>
      </defs>

      <text x="20" y="26" fontFamily="var(--font-jetbrains)" fontSize="11" letterSpacing="2.4" className="fill-[#7c3aed]">
        ONE EXCHANGE
      </text>
      <text x="392" y="26" fontFamily="var(--font-jetbrains)" fontSize="11" letterSpacing="2.4" className="fill-[#64748b]">
        BECOMES SIGNAL
      </text>
      <text x="792" y="26" fontFamily="var(--font-jetbrains)" fontSize="11" letterSpacing="2.4" className="fill-[#64748b]">
        JOINS THE PICTURE
      </text>

      {/* the exchange */}
      <g>
        <rect x="20" y="96" width="250" height="52" rx="16" fill="#fbfaf9" stroke="#ece9e4" strokeWidth="2" />
        <text x="42" y="128" fontFamily="var(--font-hanken)" fontSize="15" className="fill-[#475569]">
          &ldquo;Which category do we fit?&rdquo;
        </text>
        <rect x="70" y="164" width="200" height="52" rx="16" fill="#ffffff" stroke="url(#csf-grad)" strokeWidth="2" />
        <text x="92" y="196" fontFamily="var(--font-hanken)" fontSize="15" className="fill-[#0f172a]">
          A useful answer, now
        </text>
      </g>

      {/* exchange -> signals */}
      {ys.map((y, i) => (
        <g key={SIGNALS[i].label}>
          <path d={`M 282 160 C 340 160, 340 ${y}, 392 ${y}`} fill="none" stroke="#ece9e4" strokeWidth="2" />
          <path
            d={`M 282 160 C 340 160, 340 ${y}, 392 ${y}`}
            fill="none"
            stroke={SIGNALS[i].color}
            strokeWidth="2.5"
            strokeLinecap="round"
            className="signal-flow"
            style={{ animationDelay: `${i * 0.35}s` }}
          />
          <rect x="392" y={y - 20} width="270" height="40" rx="12" fill="#ffffff" stroke="#ece9e4" strokeWidth="2" />
          <circle cx="416" cy={y} r="5" fill={SIGNALS[i].color} />
          <text x="434" y={y + 5} fontFamily="var(--font-hanken)" fontSize="14.5" className="fill-[#0f172a]">
            {SIGNALS[i].label}
          </text>
          {/* signals -> picture */}
          <path d={`M 674 ${y} C 726 ${y}, 726 160, 792 160`} fill="none" stroke="#ece9e4" strokeWidth="2" />
          <path
            d={`M 674 ${y} C 726 ${y}, 726 160, 792 160`}
            fill="none"
            stroke={SIGNALS[i].color}
            strokeWidth="2.5"
            strokeLinecap="round"
            className="signal-flow signal-flow-slow"
            style={{ animationDelay: `${0.5 + i * 0.35}s` }}
          />
        </g>
      ))}

      {/* the picture */}
      <circle cx="866" cy="160" r="52" fill="none" stroke="url(#csf-grad)" strokeWidth="4" />
      <text x="866" y="156" textAnchor="middle" fontFamily="var(--font-newsreader)" fontSize="19" className="fill-[#0f172a]">
        Event
      </text>
      <text x="866" y="178" textAnchor="middle" fontFamily="var(--font-newsreader)" fontSize="19" className="fill-[#0f172a]">
        picture
      </text>
      <text x="866" y="252" textAnchor="middle" fontFamily="var(--font-hanken)" fontSize="13" className="fill-[#64748b]">
        Sharper for the next person who asks
      </text>
    </svg>
  );
}

function StackedFigure(): React.ReactElement {
  return (
    <svg viewBox="0 0 320 500" className="mx-auto h-auto w-full max-w-[380px]" aria-hidden>
      <defs>
        <linearGradient id="csf-grad-s" x1="0" y1="0" x2="1" y2="1">
          {GRADIENT_STOPS}
        </linearGradient>
      </defs>

      <text x="12" y="18" fontFamily="var(--font-jetbrains)" fontSize="10.5" letterSpacing="2.2" className="fill-[#7c3aed]">
        ONE EXCHANGE
      </text>
      <rect x="12" y="32" width="250" height="44" rx="14" fill="#fbfaf9" stroke="#ece9e4" strokeWidth="2" />
      <text x="30" y="60" fontFamily="var(--font-hanken)" fontSize="14" className="fill-[#475569]">
        &ldquo;Which category do we fit?&rdquo;
      </text>
      <rect x="52" y="86" width="210" height="44" rx="14" fill="#ffffff" stroke="url(#csf-grad-s)" strokeWidth="2" />
      <text x="70" y="114" fontFamily="var(--font-hanken)" fontSize="14" className="fill-[#0f172a]">
        A useful answer, now
      </text>

      <text x="12" y="168" fontFamily="var(--font-jetbrains)" fontSize="10.5" letterSpacing="2.2" className="fill-[#64748b]">
        BECOMES SIGNAL
      </text>
      {SIGNALS.map((s, i) => {
        const y = 186 + i * 52;
        return (
          <g key={s.label}>
            <path d={`M 26 ${y - 14} L 26 ${y + 6}`} stroke="#ece9e4" strokeWidth="2" />
            <path
              d={`M 26 ${y - 14} L 26 ${y + 6}`}
              stroke={s.color}
              strokeWidth="2.5"
              strokeLinecap="round"
              className="signal-flow"
              style={{ animationDelay: `${i * 0.35}s` }}
            />
            <rect x="12" y={y + 6} width="296" height="38" rx="12" fill="#ffffff" stroke="#ece9e4" strokeWidth="2" />
            <circle cx="34" cy={y + 25} r="5" fill={s.color} />
            <text x="50" y={y + 30} fontFamily="var(--font-hanken)" fontSize="14" className="fill-[#0f172a]">
              {s.label}
            </text>
          </g>
        );
      })}

      <circle cx="160" cy="440" r="44" fill="none" stroke="url(#csf-grad-s)" strokeWidth="4" />
      <text x="160" y="436" textAnchor="middle" fontFamily="var(--font-newsreader)" fontSize="17" className="fill-[#0f172a]">
        Event
      </text>
      <text x="160" y="456" textAnchor="middle" fontFamily="var(--font-newsreader)" fontSize="17" className="fill-[#0f172a]">
        picture
      </text>
    </svg>
  );
}

export function ConversationSignalsFigure(): React.ReactElement {
  return (
    <figure aria-label="A single conversation becomes structured signals that join the wider event picture">
      <div className="hidden lg:block">
        <WideFigure />
      </div>
      <div className="lg:hidden">
        <StackedFigure />
      </div>
    </figure>
  );
}
