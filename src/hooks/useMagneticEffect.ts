
"use client";

import { useState, useEffect, useRef, type RefObject } from 'react';

const LERP_FACTOR = 0.1;
const MAGNET_RADIUS = 150; // pixels

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
        targetX = dx * 0.3; // Adjust multiplier for strength
        targetY = dy * 0.3;
      }

      // Smoothly animate to the target position using linear interpolation (lerp)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      const animate = () => {
        setPosition(prevPos => {
          const newX = prevPos.x + (targetX - prevPos.x) * LERP_FACTOR;
          const newY = prevPos.y + (targetY - prevPos.y) * LERP_FACTOR;
          return { x: newX, y: newY };
        });
        animationFrameRef.current = requestAnimationFrame(animate);
      };
      
      animate();
    };

    const handleMouseLeave = () => {
        // When mouse leaves the whole document, reset position
        const animate = () => {
            setPosition(prevPos => {
                const newX = prevPos.x + (0 - prevPos.x) * LERP_FACTOR;
                const newY = prevPos.y + (0 - prevPos.y) * LERP_FACTOR;
                if (Math.abs(newX) < 0.01 && Math.abs(newY) < 0.01) {
                    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
                    return { x: 0, y: 0 };
                }
                return { x: newX, y: newY };
            });
            animationFrameRef.current = requestAnimationFrame(animate);
        };
        animate();
    }

    window.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [ref]);

  return position;
}
