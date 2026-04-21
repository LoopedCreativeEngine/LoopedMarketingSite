"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress(): React.ReactElement {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = (): void => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleY(${progress})`;
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-0 right-0 top-0 z-[80] w-[2px] bg-violet-300/20">
      <div ref={barRef} className="h-full w-full origin-top bg-looped-violet-700 will-change-transform" />
    </div>
  );
}
