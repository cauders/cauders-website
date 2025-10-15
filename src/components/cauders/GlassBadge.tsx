
'use client';

import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
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
      <span>{text}</span>
      <ChevronRight className="w-4 h-4" />
    </Link>
  );
}
