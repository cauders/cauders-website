'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import React from 'react';

interface WhiteButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Reusable White Pill Button with Dark Teal text
 */
export default function WhiteButton({
  href,
  children,
  className,
  size = 'md',
  ...props
}: WhiteButtonProps) {
  const sizeClasses = {
    sm: 'px-7 py-2.5 text-xs',
    md: 'px-9 sm:px-11 py-3.5 text-xs sm:text-sm',
    lg: 'px-12 py-4 text-sm sm:text-base',
  };

  return (
    <Link
      href={href}
      prefetch={true}
      className={cn(
        'inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-all duration-300',
        'bg-white hover:bg-white/90 text-darkTeal',
        'shadow-lg hover:shadow-xl hover:-translate-y-0.5',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
