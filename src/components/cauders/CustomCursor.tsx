"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
       const target = e.target as HTMLElement;
       if (target.closest('a, button, [role="button"], input, textarea')) {
         setIsHovering(true);
       }
    };
    
    const handleMouseOut = (e: MouseEvent) => {
       const target = e.target as HTMLElement;
       if (target.closest('a, button, [role="button"], input, textarea')) {
         setIsHovering(false);
       }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  if (!isClient) return null;

  return (
    <>
      <div
        className={cn(
          "fixed pointer-events-none z-[9999] rounded-full mix-blend-difference transition-transform duration-300 ease-out",
          isHovering ? "scale-0" : "scale-100",
        )}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%)`,
          width: '40px',
          height: '40px',
          border: `2px solid ${theme === 'dark' ? '#fff' : '#000'}`,
        }}
      />
      <div
        className={cn(
          "fixed pointer-events-none z-[9999] rounded-full bg-primary transition-all duration-200 ease-out",
        )}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
          width: isPointer ? '12px' : '8px',
          height: isPointer ? '12px' : '8px',
          opacity: isPointer ? 0.5 : 1
        }}
      />
    </>
  );
};

export default CustomCursor;
