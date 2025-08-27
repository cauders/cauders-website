"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

const CustomCursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let lastX = 0;
    let lastY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const target = e.target as HTMLElement;

      const newIsPointer = !!target.closest('a, button, [role="button"]');
      const newIsHovering = !!target.closest('a, button, [role="button"], input, textarea');

      if (newIsPointer !== isPointer) setIsPointer(newIsPointer);
      if (newIsHovering !== isHovering) setIsHovering(newIsHovering);

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }

      lastX = clientX;
      lastY = clientY;
    };

    const animateOutline = () => {
      if (cursorOutlineRef.current) {
        const { style } = cursorOutlineRef.current;
        const currentTransform = style.transform || 'translate3d(0px, 0px, 0)';
        const match = currentTransform.match(/translate3d\(([^,]+)px, ([^,]+)px/);
        
        let currentX = 0;
        let currentY = 0;
        if (match) {
            currentX = parseFloat(match[1]);
            currentY = parseFloat(match[2]);
        }

        const dx = lastX - currentX;
        const dy = lastY - currentY;
        
        const newX = currentX + dx * 0.1;
        const newY = currentY + dy * 0.1;

        style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(animateOutline);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(animateOutline);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPointer, isHovering]);

  if (!isClient) return null;

  return (
    <>
      <div
        ref={cursorOutlineRef}
        className={cn(
          "fixed pointer-events-none z-[9999] rounded-full transition-transform duration-100 ease-out",
          "w-10 h-10 border-2 -left-5 -top-5",
          isHovering ? "scale-0" : "scale-100"
        )}
        style={{
          borderColor: theme === 'dark' ? '#fff' : '#000',
        }}
      />
      <div
        ref={cursorDotRef}
        className={cn(
          "fixed pointer-events-none z-[9999] rounded-full bg-primary transition-all duration-200 ease-out",
           isPointer ? "w-3 h-3 -left-1.5 -top-1.5 opacity-50" : "w-2 h-2 -left-1 -top-1 opacity-100",
        )}
      />
    </>
  );
};

export default CustomCursor;
