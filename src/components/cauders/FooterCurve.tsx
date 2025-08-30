
"use client";

import { useEffect, useRef } from 'react';

export default function FooterCurve() {
  const pathRef = useRef<SVGPathElement>(null);
  const lastKnownScrollPosition = useRef(0);
  const ticking = useRef(false);

  const defaultCurveValue = 350;
  const curveRate = 3;

  const scrollEvent = (scrollPos: number) => {
    const scrollAmount = document.documentElement.scrollHeight - window.innerHeight - scrollPos;
    const curveValue = defaultCurveValue - (scrollAmount / curveRate);
    
    if (pathRef.current) {
        pathRef.current.setAttribute(
            "d",
            `M 800 300 Q 400 ${curveValue < 100 ? 100 : curveValue} 0 300 L 0 0 L 800 0 L 800 300 Z`
        );
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      lastKnownScrollPosition.current = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          scrollEvent(lastKnownScrollPosition.current);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="svg-container">
      <svg viewBox="0 0 800 400" className="svg">
        <path ref={pathRef} id="curve" fill="hsl(var(--background))" d="M 800 300 Q 400 350 0 300 L 0 0 L 800 0 L 800 300 Z" />
      </svg>
    </div>
  );
}
