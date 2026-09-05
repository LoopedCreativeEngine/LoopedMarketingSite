"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useId, useRef } from "react";

import { cn } from "@/lib/cn";

/**
 * The Loop, enlarged. RECONSTRUCTED — see docs/design/VISUAL_RECONSTRUCTION_SPEC.md §5.
 *
 * Exactly the LoopMark geometry (28-unit viewBox, circle r 8.5 stroke 2, the
 * node r 3.1 surfacing at 45°) at section scale. The loop draws itself with
 * the recovered thread-draw timing (1.3s, linear, on scroll), then the node
 * travels the loop — the same node that travels the LoopRail down the page —
 * with the recovered live-dot halo. Four mono signal labels sit outside the
 * loop at the compass points. Timing and direction are not evidenced by
 * source and must be checked against the recording.
 */
const SIGNALS = [
  { label: "Event", pos: "left-1/2 top-0 -translate-x-1/2 -translate-y-full pb-3" },
  { label: "Performance", pos: "right-0 top-1/2 translate-x-full -translate-y-1/2 pl-3 hidden sm:block" },
  { label: "Market", pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-full pt-3" },
  { label: "Industry", pos: "left-0 top-1/2 -translate-x-full -translate-y-1/2 pr-3 hidden sm:block" },
] as const;

export function LoopFigure({ className }: { className?: string }): React.ReactElement {
  const rootRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const loopRef = useRef<SVGPathElement>(null);
  const travelRef = useRef<SVGAnimateMotionElement>(null);
  const nodeRef = useRef<SVGGElement>(null);
  const uid = useId().replace(/:/g, "");
  const pathId = `loop-figure-${uid}`;

  useEffect(() => {
    const svg = svgRef.current;
    const loop = loopRef.current;
    if (!svg || !loop) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      svg.pauseAnimations();
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    const length = loop.getTotalLength();
    const ctx = gsap.context(() => {
      gsap.set(loop, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(loop, {
        strokeDashoffset: 0,
        duration: 1.3,
        ease: "none",
        scrollTrigger: { trigger: rootRef.current, start: "top 74%" },
        onComplete: () => {
          // The node leaves its mark position and travels the loop (animateMotion positions from the origin).
          nodeRef.current?.removeAttribute("transform");
          travelRef.current?.beginElement();
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  // The loop as a path, starting at the node's home (45°), so the node can travel it.
  const r = 8.5;
  const start = { x: 14 + r * Math.SQRT1_2, y: 14 - r * Math.SQRT1_2 };
  const loopPath = `M ${start.x} ${start.y} A ${r} ${r} 0 1 1 ${start.x - 0.001} ${start.y - 0.001}`;

  return (
    <div ref={rootRef} className={cn("relative mx-auto aspect-square w-full max-w-[22rem]", className)} aria-hidden>
      {SIGNALS.map((s) => (
        <span key={s.label} className={cn("absolute kicker whitespace-nowrap text-muted-ink", s.pos)}>
          {s.label}
        </span>
      ))}
      <svg ref={svgRef} viewBox="0 0 28 28" className="h-full w-full text-violet" fill="none" focusable="false">
        {/* the loop, faint, so the draw has a track */}
        <circle cx="14" cy="14" r={r} stroke="currentColor" strokeWidth="2" opacity="0.12" />
        {/* the loop, drawing itself */}
        <path ref={loopRef} id={pathId} d={loopPath} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* the node surfacing on the loop (at its mark position until the draw completes), then travelling it */}
        <g ref={nodeRef} transform={`translate(${start.x} ${start.y})`}>
          <circle r="3.1" fill="currentColor" />
          <circle r="3.1" fill="currentColor" opacity="0.35">
            <animate attributeName="r" values="3.1;4.6;3.1" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.35;0;0.35" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <animateMotion ref={travelRef} dur="12s" begin="indefinite" repeatCount="indefinite" rotate="0">
            <mpath href={`#${pathId}`} />
          </animateMotion>
        </g>
      </svg>
    </div>
  );
}
