
'use client';

import { useState, useEffect, type RefObject } from 'react';

export function useScrollProgress(ref: RefObject<HTMLElement>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const { top, height } = element.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight;

      if (scrollableHeight <= 0) {
        setProgress(1);
        return;
      }
      
      const currentProgress = Math.max(0, Math.min(1, -top / scrollableHeight));
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return progress;
}
