
"use client";

import { useState, useEffect, useRef, type RefObject } from 'react';

const LERP_FACTOR = 0.15; // Increased for a slightly faster, more responsive feel
const MAGNET_RADIUS = 100; // Increased radius to activate the effect sooner

export function useMagneticEffect(ref: RefObject<HTMLElement>) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const clientX = e.clientX;
      const clientY = e.clientY;

      const distance = Math.sqrt(Math.pow(centerX - clientX, 2) + Math.pow(centerY - clientY, 2));

      let targetX = 0;
      let targetY = 0;

      if (distance < MAGNET_RADIUS) {
        // We are within the magnetic field
        const dx = clientX - centerX;
        const dy = clientY - centerY;
        // Move the element towards the cursor, but not all the way
        targetX = dx * 0.4; // Increased multiplier for a stronger pull
        targetY = dy * 0.4;
      }

      // Animate to the target position using linear interpolation (lerp)
      const animate = () => {
        setPosition(prevPos => {
          const newX = prevPos.x + (targetX - prevPos.x) * LERP_FACTOR;
          const newY = prevPos.y + (targetY - prevPos.y) * LERP_FACTOR;

          // Stop animating if we are very close to the target
          if (Math.abs(targetX - newX) < 0.1 && Math.abs(targetY - newY) < 0.1) {
            if(animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
            return { x: targetX, y: targetY };
          }
          
          animationFrameRef.current = requestAnimationFrame(animate);
          return { x: newX, y: newY };
        });
      };
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseLeave = () => {
        // Animate back to center when mouse leaves the window
        const targetX = 0;
        const targetY = 0;
        const animate = () => {
        setPosition(prevPos => {
          const newX = prevPos.x + (targetX - prevPos.x) * LERP_FACTOR;
          const newY = prevPos.y + (targetY - prevPos.y) * LERP_FACTOR;

          if (Math.abs(targetX - newX) < 0.1 && Math.abs(targetY - newY) < 0.1) {
            if(animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
            return { x: 0, y: 0 };
          }
          
          animationFrameRef.current = requestAnimationFrame(animate);
          return { x: newX, y: newY };
        });
      };
       if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [ref]);

  return position;
}
