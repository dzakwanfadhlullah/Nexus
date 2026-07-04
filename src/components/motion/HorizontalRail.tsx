"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export function HorizontalRail({
  children,
  label,
  className = "",
}: {
  children: React.ReactNode;
  label: string;
  className?: string;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [canBack, setCanBack] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const sync = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const max = rail.scrollWidth - rail.clientWidth;
    setProgress(max > 0 ? rail.scrollLeft / max : 1);
    setCanBack(rail.scrollLeft > 4);
    setCanNext(rail.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    sync();
    const rail = railRef.current;
    if (!rail) return;
    const observer = new ResizeObserver(sync);
    observer.observe(rail);
    window.addEventListener("resize", sync);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const move = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * Math.min(rail.clientWidth * 0.78, 760), behavior: "smooth" });
  };

  return (
    <div className="rail-shell">
      <div className="rail-toolbar container">
        <div className="rail-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${Math.max(progress, 0.04)})` }} />
        </div>
        <span className="rail-hint">Drag to explore</span>
        <div className="rail-buttons">
          <button
            type="button"
            onClick={() => move(-1)}
            disabled={!canBack}
            aria-label={`Geser ${label} ke kiri`}
          >
            <ArrowLeft size={17} />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            disabled={!canNext}
            aria-label={`Geser ${label} ke kanan`}
          >
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
      <div
        ref={railRef}
        className={`horizontal-rail ${className}`.trim()}
        aria-label={label}
        onScroll={sync}
      >
        {children}
      </div>
    </div>
  );
}
