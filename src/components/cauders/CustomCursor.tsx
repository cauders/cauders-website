
"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleMouseMove = (e: MouseEvent) => {
      if(!isVisible) setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest('a, button, [role="button"], input, textarea'));
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    }

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isClient, isVisible]);

  useEffect(() => {
    if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
    }
  }, [position]);

  if (!isClient) return null;

  return (
    <div
      ref={cursorRef}
      className={cn(
        "fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out",
        "w-8 h-8 -left-4 -top-4",
        !isVisible && "opacity-0"
      )}
    >
        {/* State 1: Default Chevron */}
        <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className={cn(
                "absolute transition-all duration-300",
                isPointer ? "opacity-0 scale-50" : "opacity-100 scale-100"
            )}
             style={{
                filter: `drop-shadow(0 0 2px hsl(var(--primary)))`,
            }}
        >
            <path
                d="M15 6 L9 12 L15 18"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>

        {/* State 2: Pointer (dot with two lines) */}
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className={cn(
                "absolute transition-all duration-300",
                isPointer ? "opacity-100 scale-100" : "opacity-0 scale-50"
            )}
            style={{
                filter: `drop-shadow(0 0 4px hsl(var(--primary)))`,
            }}
        >
            <circle cx="16" cy="16" r="3" fill="hsl(var(--primary))" />
            <path d="M4 16 H 12" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
            <path d="M20 16 H 28" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
        </svg>
    </div>
  );
};

export default CustomCursor;
