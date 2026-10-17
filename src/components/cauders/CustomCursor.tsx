"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isHiddenByTarget, setIsHiddenByTarget] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (!isClient || isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      
      // Update DOM directly to avoid React re-renders
      if (cursorRef.current) {
        // The tip of the SVG arrow is at roughly 22% of the viewBox (200/885)
        cursorRef.current.style.transform = `translate3d(calc(${e.clientX}px - 22%), calc(${e.clientY}px - 22%), 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      const overPointer = !!target.closest('a, button, [role="button"], input, textarea');
      const overHidden = !!target.closest('[data-hide-cursor="true"]');

      setIsPointer((prev) => (prev !== overPointer ? overPointer : prev));
      setIsHiddenByTarget((prev) => (prev !== overHidden ? overHidden : prev));
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isClient, isVisible, isTouchDevice]);

  if (!isClient || isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className={cn(
        "fixed pointer-events-none z-[9999] transform-gpu will-change-transform",
        "w-8 h-8 flex items-center justify-center",
        (!isVisible || isHiddenByTarget) && "opacity-0"
      )}
    >
      {/* NEW FIGMA CURSORS */}
      {/* STATE 1: DEFAULT CURSOR (cursor.svg) */}
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 885 885" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "absolute transition-all duration-300 pointer-events-none",
          !isPointer ? "opacity-100 scale-100" : "opacity-0 scale-50"
        )}
        style={{ transformOrigin: 'center' }}
      >
        <path d="M688.6 411.687L683.266 409.331L661.931 399.907L619.262 381.058L533.923 343.36L204.379 197.787C200.201 195.942 195.939 200.203 197.785 204.381L343.357 533.926L381.055 619.265L399.904 661.934L409.328 683.269L411.684 688.602" stroke="#8CEAE5" strokeWidth="63" strokeLinecap="round"/>
      </svg>

      {/* STATE 2: POINTER CURSOR (active-cursor.svg) */}
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 900 900" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "absolute transition-all duration-300 pointer-events-none",
          isPointer ? "opacity-100 scale-100" : "opacity-0 scale-50"
        )}
        style={{ transformOrigin: 'center' }}
      >
        <path d="M704.366 426.61L699.033 424.254L677.698 414.83L635.028 395.981L549.69 358.283L464.351 320.586L421.681 301.737M427.451 703.525L425.095 698.192L415.671 676.857L396.822 634.188L359.124 548.849L321.427 463.51L302.578 420.84" stroke="#8CEAE5" strokeWidth="63" strokeLinecap="round"/>
        <circle cx="250.897" cy="250.488" r="92" transform="rotate(-45 250.897 250.488)" fill="#8CEAE5" stroke="#8CEAE5"/>
      </svg>
    </div>
  );
};

export default CustomCursor;
