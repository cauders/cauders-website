'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import React from 'react';

interface DarkTealButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function DarkTealButton({
  href,
  children,
  className,
  size = 'md',
  ...props
}: DarkTealButtonProps) {
  const sizeClasses = {
    sm: 'px-6 py-2.5 text-xs',
    md: 'px-10 py-3.5 text-sm',
    lg: 'px-12 py-4 text-base',
  };

  return (
    <Link
      href={href}
      prefetch={true}
      className={cn(
        'inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-all duration-300',
        'bg-darkTeal hover:bg-[#074347] text-white',
        'shadow-md hover:shadow-lg hover:-translate-y-0.5',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
