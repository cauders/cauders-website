
'use client';

import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface ArrowBadgeProps {
  href: string;
  text: string;
  className?: string;
}

export default function ArrowBadge({ href, text, className }: ArrowBadgeProps) {
  return (
    <Link href={href} className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full",
        "px-4 py-1.5",
        "bg-primary/20",
        "text-primary text-sm font-medium",
        "transition-all duration-300 hover:bg-primary/30",
        className
    )}>
      <ChevronRight className="w-4 h-4" />
      <span>{text}</span>
    </Link>
  );
}
