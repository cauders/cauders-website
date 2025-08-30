
"use client";

import { useEffect, useRef } from 'react';

export default function FooterCurve() {
  const pathRef = useRef<SVGPathElement>(null);
  const lastKnownScrollPosition = useRef(0);
  const ticking = useRef(false);

  const defaultCurveValue = 350;
  const curveRate = 3;

  // This function is now corrected to use the direct scrollY position
  // to modify the curve, which will create the intended effect as the
  // user scrolls down the page.
  const scrollEvent = (scrollPos: number) => {
    // The original logic checks if scroll position is within a certain range
    // to apply the curve modification. This is now correctly implemented.
    if (scrollPos >= 0) {
      const curveValue = defaultCurveValue - (scrollPos / curveRate);
      
      if (pathRef.current) {
          // We apply a minimum value to the curve to prevent it from inverting
          // or becoming too flat, ensuring the animation is always stable.
          pathRef.current.setAttribute(
              "d",
              `M 800 300 Q 400 ${curveValue < 100 ? 100 : curveValue} 0 300 L 0 0 L 800 0 L 800 300 Z`
          );
      }
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call to set the curve on component mount
    scrollEvent(window.scrollY);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="svg-container">
      <svg viewBox="0 0 800 400" className="svg">
        <path ref={pathRef} id="curve" fill="hsl(var(--background))" d="M 800 300 Q 400 350 0 300 L 0 0 L 800 0 L 800 300 Z" />
      </svg>
    </div>
  );
}
