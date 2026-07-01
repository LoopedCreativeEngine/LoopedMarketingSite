"use client";

import { useEffect, useRef } from "react";

/**
 * The Loop — the site's signature device.
 *
 * One continuous thread runs down the left margin and draws itself as you
 * scroll, led by a travelling node: you are, literally, kept in the loop.
 * It doubles as the scroll indicator, so the page carries a single bold line
 * rather than competing chrome. Its colour reads on both bone and ink plates.
 * Desktop only; it is decorative, so it is hidden from assistive tech and
 * removed under reduced-motion.
 */
export function LoopRail(): React.ReactElement {
  const fillRef = useRef<HTMLDivElement>(null);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = (): void => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (fillRef.current) fillRef.current.style.transform = `scaleY(${progress})`;
      if (nodeRef.current) nodeRef.current.style.top = `${progress * 100}%`;
    };
    const onScroll = (): void => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed bottom-16 left-[max(1.5rem,calc((100vw-72rem)/2-1.75rem))] top-24 z-40 hidden w-px lg:block"
      style={{ background: "rgba(124, 108, 255, 0.2)" }}
    >
      <div
        ref={fillRef}
        className="absolute inset-0 w-full origin-top will-change-transform"
        style={{ background: "var(--focus)", transform: "scaleY(0)" }}
      />
      <div
        ref={nodeRef}
        className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full will-change-[top]"
        style={{
          background: "var(--focus)",
          boxShadow: "0 0 0 4px rgba(109, 95, 230, 0.18), 0 0 14px 2px rgba(124, 108, 255, 0.55)",
        }}
      />
    </div>
  );
}
