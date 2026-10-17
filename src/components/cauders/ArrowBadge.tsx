'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface ArrowBadgeProps {
  href: string;
  text: string;
  className?: string;
  variant?: 'white' | 'black';
  typing?: boolean;
}

export default function ArrowBadge({ href, text, className, variant = 'white', typing = false }: ArrowBadgeProps) {
  const [displayedText, setDisplayedText] = useState(typing ? '' : text);
  const [isTyping, setIsTyping] = useState(typing);

  useEffect(() => {
    if (!typing) {
      setDisplayedText(text);
      return;
    }
    setDisplayedText('');
    setIsTyping(true);

    let idx = 0;
    const interval = setInterval(() => {
      idx++;
      if (idx <= text.length) {
        setDisplayedText(text.slice(0, idx));
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [text, typing]);

  return (
    <Link href={href} className={cn(
      "inline-flex items-center justify-center gap-2",
      "text-sm font-normal",
      "transition-all duration-300",
      variant === 'white' && 'text-white',
      variant === 'black' && 'text-foreground',
      className
    )}>
      <Image 
        src="/images/icons/arrow-icon.svg"
        alt="arrow icon"
        width={12}
        height={12}
        className={cn(variant === 'black' && 'filter invert')}
        style={{ width: 'auto', height: 'auto' }}
      />
      {typing ? (
        <span className="relative inline-block">
          <span className="invisible select-none opacity-0" aria-hidden="true">{text}</span>
          <span className="absolute inset-0 left-0 top-0 whitespace-nowrap">
            {displayedText}
            <span className={cn("inline-block ml-0.5 font-bold", isTyping ? "opacity-100" : "animate-pulse")}>|</span>
          </span>
        </span>
      ) : (
        <span>{text}</span>
      )}
      <Image 
        src="/images/icons/arrow-icon.svg"
        alt="arrow icon"
        width={12}
        height={12}
        className={cn("rotate-180", variant === 'black' && 'filter invert')}
        style={{ width: 'auto', height: 'auto' }}
      />
    </Link>
  );
}
