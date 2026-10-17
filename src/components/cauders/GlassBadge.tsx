'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface GlassBadgeProps {
  text: string;
  className?: string;
  typingSpeed?: number;
}

export default function GlassBadge({ text, className, typingSpeed = 38 }: GlassBadgeProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayedText('');
    setIsTyping(true);

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [text, typingSpeed]);

  return (
    <div 
      className={cn(
        "inline-flex items-center justify-center gap-3 rounded-full",
        "px-5 py-2",
        "border border-primary/50",
        "bg-transparent",
        "backdrop-blur-sm",
        "text-primary text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-normal",
        className
      )}
      aria-label={text}
    >
      <Image 
        src="https://res.cloudinary.com/cauders/image/upload/v1786552819/arrow-cy_olfzuh.svg"
        alt="arrow icon"
        width={12}
        height={12}
        className="shrink-0"
        style={{ width: 'auto', height: 'auto' }}
      />
      <span className="relative inline-block mt-[1px]">
        {/* Invisible width anchor to prevent badge horizontal jitter during typing */}
        <span className="invisible select-none opacity-0" aria-hidden="true">
          {text}
        </span>
        {/* Typing text overlay with blinking cursor */}
        <span className="absolute inset-0 left-0 top-0 whitespace-nowrap">
          {displayedText}
          <span 
            className={cn(
              "inline-block ml-0.5 text-primary font-bold transition-opacity",
              isTyping ? "opacity-100" : "animate-pulse"
            )}
          >
            |
          </span>
        </span>
      </span>
    </div>
  );
}
