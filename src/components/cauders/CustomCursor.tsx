
"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const target = e.target as HTMLElement;

      const newIsPointer = !!target.closest('a, button, [role="button"], input, textarea');
      if (newIsPointer !== isPointer) setIsPointer(newIsPointer);
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
    };
    
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isClient, isPointer]);

  if (!isClient) return null;

  return (
    <div
      ref={cursorRef}
      className={cn(
        "fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out",
        "w-8 h-8 -left-1 -top-1"
      )}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
            "transition-all duration-200",
            isPointer ? "rotate-0 opacity-80" : "rotate-[-45deg] opacity-100"
        )}
        style={{
          filter: `drop-shadow(0 0 3px hsl(var(--primary))) drop-shadow(0 0 8px hsl(var(--primary) / 0.5))`,
        }}
      >
        <path
          d="M4 4 L12 12 L4 20"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default CustomCursor;
