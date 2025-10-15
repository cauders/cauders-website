"use client";

import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ScrollFadeInProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export default function ScrollFadeIn({ children, className, style, direction = 'up', delay = 0 }: ScrollFadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: typeof delay === 'string' ? parseFloat(delay.replace('delay-', '')) / 1000 : delay,
      }}
      className={cn(className)}
      style={style}
    >
      {children}
    </motion.div>
  );
}
