"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const LogoSVG = () => (
    <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 200 200" 
        style={{ filter: `drop-shadow(0 5px 15px hsl(var(--primary) / 0.4))`}}
    >
        <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'hsl(var(--primary) / 0.8)', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'hsl(var(--primary) / 0.5)', stopOpacity: 1 }} />
            </linearGradient>
        </defs>
        <path 
            d="M162.5,150.3c-2.3,6.6-5.3,12.8-9,18.6c-13.8,21.5-35,32.3-60.5,30.2c-29.9-2.5-54.7-22.1-66.4-49.3
            c-12.2-28.3-9-60.3,9.5-84.8C59.7,39.3,87,27.1,116.6,29.9c13.7,1.3,26.1,6.5,36.5,15.2c5.9,4.9,10.6,10.9,13.8,17.8
            C173,78.3,172.9,97,162.5,114v0c4.1-13.7,3.1-28.6-3-42.2c-5.7-12.8-15.6-22.9-28.1-28.4C114.8,36.7,96.6,37.3,81.8,45
            c-18.7,9.7-31,27.1-34.5,46.9c-3,17.2,1.3,34.8,12,49.2c10.4,14,26.1,23.3,43.4,25.4c18.5,2.3,36.9-3,50.7-14.4
            c10-8.2,16.8-19.6,19.3-32.1H162.5z"
            fill="url(#logoGradient)"
        />
        <path 
            d="M85,115l-17-17l17-17" 
            stroke="hsl(var(--foreground))" 
            strokeWidth="10" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
        />
        <path 
            d="M115,85l17,17l-17,17" 
            stroke="hsl(var(--foreground))" 
            strokeWidth="10" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
        />
        <path 
            d="M108,80l-16,40" 
            stroke="hsl(var(--foreground))" 
            strokeWidth="10" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
        />
    </svg>
);

export default function AnimatedLogo() {
  const [style, setStyle] = useState({});
  const [isClient, setIsClient] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
        if (containerRef.current) {
            const scrollY = window.scrollY;
            const rotation = scrollY * 0.1;
            const translation = scrollY * 0.2;
            const scale = Math.max(0.4, 1 - scrollY / 1000); 

            setStyle({
                transform: `translateY(${translation}px) rotateY(${rotation}deg) rotateX(-10deg) rotateZ(-10deg) scale(${scale})`,
            });
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  if (!isClient) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed top-1/4 left-1/2 -translate-x-1/2 z-20 w-64 h-64 md:w-96 md:h-96 opacity-10 dark:opacity-20 pointer-events-none"
      style={{ perspective: '1000px', ...style }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
       <div
        className={cn(
            "w-full h-full transition-transform duration-500 ease-out",
            isHovering ? 'scale-110' : 'scale-100'
        )}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <LogoSVG />
      </div>
    </div>
  );
}