
"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isFooterHovered, setIsFooterHovered] = useState(false);
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
      setIsFooterHovered(!!target.closest('[data-footer-hover="true"]'));
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
        cursorRef.current.style.transform = `translate3d(calc(${position.x}px - 50%), calc(${position.y}px - 50%), 0)`;
    }
  }, [position]);

  if (!isClient) return null;

  const showDefaultCursor = !isPointer;
  const showPointerCursor = isPointer;

  return (
    <div
      ref={cursorRef}
      className={cn(
        "fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out",
        "w-8 h-8",
        !isVisible && "opacity-0"
      )}
    >
        {/* STATE 1: DEFAULT CURSOR (CHEVRON) */}
        <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className={cn(
                "absolute transition-all duration-300",
                showDefaultCursor ? "opacity-100 scale-100" : "opacity-0 scale-50"
            )}
             style={{
                filter: `drop-shadow(0 0 2px hsl(var(--primary)))`,
            }}
        >
            <path
                d="M12 15 L10 1 L22 10"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>

        {/* STATE 2: POINTER CURSOR (DOT WITH LINES) */}
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className={cn(
                "absolute transition-all duration-300",
                showPointerCursor ? "opacity-100 scale-100" : "opacity-0 scale-50"
            )}
            style={{
                filter: `drop-shadow(0 0 4px hsl(var(--primary)))`,
            }}
        >
            <circle  cx="9" cy="3" r="3.2" fill="hsl(var(--primary))" />
            <g transform="rotate(40, 16, 24)">
                <path d="M4 12 H 14" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
            </g>
            <g transform="rotate(80, 6, 12)">
                <path d="M4 8 H 14" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
            </g>
        </svg>
        
        {/* STATE 3: FOOTER FOLLOWER */}
         <div className={cn(
            "absolute top-0 left-[-2rem] w-48 h-48 bg-primary/40 rounded-full blur-3xl transition-all duration-500 ease-out",
            isFooterHovered ? "opacity-100 scale-100" : "opacity-0 scale-0"
        )}>
        </div>
    </div>
  );
};

export default CustomCursor;
