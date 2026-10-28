"use client";

import { type ReactNode } from 'react';

interface ScrollFadeInProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: string | number;
}

export default function ScrollFadeIn({
  children,
  className,
  style,
}: ScrollFadeInProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
