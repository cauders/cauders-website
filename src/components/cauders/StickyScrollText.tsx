
"use client";

import { useRef } from 'react';
import StandardizedHeading from './StandardizedHeading';

const StickyScrollText = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const lines = [
    { text: "WE ENGINEER", className: "text-center" },
    { text: "HIGH-PERFORMANCE, CUTTING-EDGE PLATFORMS", className: "text-primary text-center" },
    { text: "THAT EMPOWER BUSINESSES TO DOMINATE THE DIGITAL LANDSCAPE.", className: "text-center" }
  ];

  return (
    <div ref={containerRef} className="relative flex flex-col bg-background">
      {/* Sticky container for the animated text */}
      <div className="py-20 lg:py-0 lg:h-[100vh] top-0 flex-shrink-0 flex items-center justify-center overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StandardizedHeading lines={lines} className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl" />
        </div>
      </div>
    </div>
  );
};

export default StickyScrollText;

