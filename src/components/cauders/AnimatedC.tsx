"use client";

import { useState, useEffect, useRef } from 'react';

export default function AnimatedC() {
  const [style, setStyle] = useState({});
  const containerRef = useRef<HTMLDivElement>(null);
  const DEPTH = 30;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotation = scrollY * 0.2;
      const translation = scrollY * 0.3;
      setStyle({
        transform: `translateY(${translation}px) rotateY(${rotation}deg) rotateX(-10deg) rotateZ(-10deg)`,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="c-container absolute inset-0 -z-10 flex items-center justify-center opacity-20"
    >
      <div className="c-shape" style={style}>
        {[...Array(DEPTH)].map((_, i) => (
          <div
            key={i}
            className="c-face"
            style={{
              transform: `translateZ(${i}px)`,
              opacity: `${1 - i / DEPTH}`,
            }}
          />
        ))}
        <div
            className="c-face"
            style={{
              transform: `translateZ(${DEPTH}px)`,
              borderColor: 'hsl(var(--primary))'
            }}
          />
      </div>
    </div>
  );
}
