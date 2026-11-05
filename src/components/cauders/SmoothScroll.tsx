'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const startLoopRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    // Respect touch devices and reduced-motion preferences with zero main-thread overhead
    const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    const lenis = new Lenis({
      lerp: 0.16,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      syncTouch: false,
    });
    lenisRef.current = lenis;

    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    let rafId = 0;
    let idleFrames = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      const moving = lenis.isScrolling || Math.abs(lenis.velocity) > 0.001;
      if (moving) {
        idleFrames = 0;
        rafId = requestAnimationFrame(raf);
      } else if (idleFrames < 6) {
        idleFrames += 1;
        rafId = requestAnimationFrame(raf);
      } else {
        rafId = 0;
        idleFrames = 0;
      }
    };

    const startLoop = () => {
      idleFrames = 0;
      if (!rafId) {
        rafId = requestAnimationFrame(raf);
      }
    };
    startLoopRef.current = startLoop;

    const origScrollTo = lenis.scrollTo.bind(lenis);
    lenis.scrollTo = ((...args: Parameters<Lenis['scrollTo']>) => {
      startLoop();
      return origScrollTo(...args);
    }) as Lenis['scrollTo'];

    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest?.('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const id = href.slice(1);
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element, { offset: -80, duration: 0.9 });
        }
      }
    };

    window.addEventListener('wheel', startLoop, { passive: true });
    window.addEventListener('keydown', startLoop, { passive: true });
    window.addEventListener('resize', startLoop, { passive: true });
    document.addEventListener('click', handleAnchorClick);

    return () => {
      window.removeEventListener('wheel', startLoop);
      window.removeEventListener('keydown', startLoop);
      window.removeEventListener('resize', startLoop);
      document.removeEventListener('click', handleAnchorClick);
      if (rafId) cancelAnimationFrame(rafId);
      startLoopRef.current = null;
      lenis.destroy();
      lenisRef.current = null;
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.slice(1);
      const scrollToHash = () => {
        const targetEl = document.getElementById(id);
        if (targetEl && lenisRef.current) {
          lenisRef.current.scrollTo(targetEl, { offset: -80, immediate: true });
          return true;
        }
        if (targetEl) {
          targetEl.scrollIntoView();
          return true;
        }
        return false;
      };
      if (!scrollToHash()) {
        requestAnimationFrame(() => {
          scrollToHash();
        });
      }
      return;
    }

    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
