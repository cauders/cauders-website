'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';

interface GlassBadgeProps {
  href: string;
  text: string;
  className?: string;
}

export default function GlassBadge({ href, text, className }: GlassBadgeProps) {
  return (
    <Link href={href} className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full",
        "px-4 py-1.5",
        "border-2 border-white/30",
        "bg-white/15",
        "backdrop-blur-[50px]",
        "text-white text-xs font-normal",
        "transition-all duration-300 hover:bg-white/25 hover:border-white/50",
        className
    )}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-75"
      >
        <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>{text}</span>
    </Link>
  );
}
