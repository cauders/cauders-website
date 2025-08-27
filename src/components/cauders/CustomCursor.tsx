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
      window.removeEventListener('mousemove', handleMouseLeave);
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
        {/*
          STATE 1: DEFAULT CURSOR (CHEVRON)
          This is the default cursor that appears as a chevron: <
        */}
        <svg
            width="32"
            height="32"
            viewBox="0 0 24 24" // The coordinate system is a 24x24 box
            className={cn(
                "absolute transition-all duration-300",
                isPointer ? "opacity-0 scale-50" : "opacity-100 scale-100"
            )}
             style={{
                filter: `drop-shadow(0 0 2px hsl(var(--primary)))`,
            }}
        >
            {/* 
              HOW TO CHANGE THE CHEVRON'S DIRECTION:
              The 'd' attribute defines the path of the line. It works like "Move to, Line to, Line to".
              - Current: "M15 6 L9 12 L15 18" draws the '<' shape.
              - To make it point right (>): Change d to "M9 6 L15 12 L9 18"
              - To make it point up (^): Change d to "M6 15 L12 9 L18 15"
              - To make it point down (v): Change d to "M6 9 L12 15 L18 9"
            */}
            <path
                d="M15 6 L9 12 L15 18"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>

        {/* 
          STATE 2: POINTER CURSOR (DOT WITH LINES)
          This cursor appears when hovering over clickable elements.
        */}
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32" // The coordinate system is a 32x32 box
            fill="none"
            className={cn(
                "absolute transition-all duration-300",
                isPointer ? "opacity-100 scale-100" : "opacity-0 scale-50"
            )}
            style={{
                filter: `drop-shadow(0 0 4px hsl(var(--primary)))`,
            }}
        >
            {/* This is the central dot. You can change its radius 'r' to make it bigger or smaller. */}
            <circle cx="16" cy="16" r="4" fill="hsl(var(--primary))" />
            
            {/*
              HOW TO CHANGE THE LINES AND THEIR DIRECTION:
              Each '<path>' is a line. A simple way to change direction is to use `transform="rotate(angle, cx, cy)"`.
              - 'angle' is the degrees of rotation (e.g., 45, 90, etc.).
              - 'cx' and 'cy' are the center of rotation. For this SVG, it's '16 16'.
              
              I've set up two lines below. One is rotated -45 degrees and the other is rotated 135 degrees.
              You can change these values to whatever you like!
            */}
            <g transform="rotate(-45, 16, 16)">
              <path d="M4 16 H 28" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
            </g>
            <g transform="rotate(135, 16, 16)">
              {/* You could add another line here if you wanted more than two. */}
            </g>
        </svg>
    </div>
  );
};

export default CustomCursor;
