'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface ArrowBadgeProps {
  href: string;
  text: string;
  className?: string;
  variant?: 'white' | 'black';
}

export default function ArrowBadge({ href, text, className, variant = 'white' }: ArrowBadgeProps) {
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
      />
      <span>{text}</span>
      <Image 
        src="/images/icons/arrow-icon.svg"
        alt="arrow icon"
        width={12}
        height={12}
        className={cn("rotate-180", variant === 'black' && 'filter invert')}
      />
    </Link>
  );
}
