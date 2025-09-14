"use client";

import { useRef } from 'react';
import StandardizedHeading from './StandardizedHeading';

const StickyScrollText = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const lines = [
    "We Engineer",
    { text: "High-Performance, Cutting-Edge Platforms", className: "text-primary" },
    "That Empower Businesses to Dominate the Digital Landscape."
  ];

  return (
    <div ref={containerRef} className="relative flex flex-col bg-background">
      {/* Sticky container for the animated text */}
      <div className="sticky top-0 flex-shrink-0 flex items-center justify-center overflow-hidden h-[100vh]">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <StandardizedHeading lines={lines} className="text-5xl md:text-6xl lg:text-7xl" />
        </div>
      </div>
    </div>
  );
};

export default StickyScrollText;








