
'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface ArrowBadgeProps {
  href: string;
  text: string;
  className?: string;
}

export default function ArrowBadge({ href, text, className }: ArrowBadgeProps) {
  return (
    <Link href={href} className={cn(
        "inline-flex items-center justify-center gap-2",
        "text-white text-sm font-normal",
        "transition-all duration-300",
        className
    )}>
      <Image 
        src="/images/icons/arrow-icon.svg"
        alt="arrow icon"
        width={12}
        height={12}
      />
      <span>{text}</span>
      <Image 
        src="/images/icons/arrow-icon.svg"
        alt="arrow icon"
        width={12}
        height={12}
        className="rotate-180"
      />
    </Link>
  );
}
