'use client';

import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const defaultSvgRef = useRef<SVGSVGElement>(null);
  const pointerSvgRef = useRef<SVGSVGElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (finePointer && !reducedMotion) {
      setEnabled(true);
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add('custom-cursor-ready');

    let isVisible = false;
    let isPointer = false;
    let isHidden = false;
    let rafId = 0;
    let nextX = 0;
    let nextY = 0;

    const flushPosition = () => {
      rafId = 0;
      const cursor = cursorRef.current;
      if (!cursor) return;
      cursor.style.transform = `translate3d(calc(${nextX}px - 22%), calc(${nextY}px - 22%), 0)`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const cursor = cursorRef.current;
      if (!cursor) return;

      if (!isVisible) {
        isVisible = true;
        cursor.style.opacity = isHidden ? '0' : '1';
      }

      nextX = e.clientX;
      nextY = e.clientY;
      if (!rafId) {
        rafId = window.requestAnimationFrame(flushPosition);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || typeof target.closest !== 'function') return;

      const overPointer = Boolean(target.closest('a, button, [role="button"], input, textarea, select, label'));
      const overHidden = Boolean(target.closest('[data-hide-cursor="true"]'));

      if (overPointer !== isPointer) {
        isPointer = overPointer;
        if (defaultSvgRef.current && pointerSvgRef.current) {
          if (isPointer) {
            defaultSvgRef.current.classList.replace('opacity-100', 'opacity-0');
            defaultSvgRef.current.classList.replace('scale-100', 'scale-50');
            pointerSvgRef.current.classList.replace('opacity-0', 'opacity-100');
            pointerSvgRef.current.classList.replace('scale-50', 'scale-100');
          } else {
            defaultSvgRef.current.classList.replace('opacity-0', 'opacity-100');
            defaultSvgRef.current.classList.replace('scale-50', 'scale-100');
            pointerSvgRef.current.classList.replace('opacity-100', 'opacity-0');
            pointerSvgRef.current.classList.replace('scale-100', 'scale-50');
          }
        }
      }

      if (overHidden !== isHidden) {
        isHidden = overHidden;
        if (cursorRef.current && isVisible) {
          cursorRef.current.style.opacity = isHidden ? '0' : '1';
        }
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      document.documentElement.classList.remove('custom-cursor-ready');
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="fixed pointer-events-none z-[9999] transform-gpu will-change-transform w-8 h-8 flex items-center justify-center opacity-0 transition-opacity duration-150"
    >
      {/* STATE 1: DEFAULT CURSOR */}
      <svg
        ref={defaultSvgRef}
        aria-hidden="true"
        width="32"
        height="32"
        viewBox="0 0 885 885"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute transition-all duration-200 pointer-events-none opacity-100 scale-100"
        style={{ transformOrigin: 'center' }}
      >
        <path
          d="M688.6 411.687L683.266 409.331L661.931 399.907L619.262 381.058L533.923 343.36L204.379 197.787C200.201 195.942 195.939 200.203 197.785 204.381L343.357 533.926L381.055 619.265L399.904 661.934L409.328 683.269L411.684 688.602"
          stroke="#8CEAE5"
          strokeWidth="63"
          strokeLinecap="round"
        />
      </svg>

      {/* STATE 2: POINTER CURSOR */}
      <svg
        ref={pointerSvgRef}
        aria-hidden="true"
        width="32"
        height="32"
        viewBox="0 0 900 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute transition-all duration-200 pointer-events-none opacity-0 scale-50"
        style={{ transformOrigin: 'center' }}
      >
        <path
          d="M704.366 426.61L699.033 424.254L677.698 414.83L635.028 395.981L549.69 358.283L464.351 320.586L421.681 301.737M427.451 703.525L425.095 698.192L415.671 676.857L396.822 634.188L359.124 548.849L321.427 463.51L302.578 420.84"
          stroke="#8CEAE5"
          strokeWidth="63"
          strokeLinecap="round"
        />
        <circle cx="250.897" cy="250.488" r="92" transform="rotate(-45 250.897 250.488)" fill="#8CEAE5" stroke="#8CEAE5" />
      </svg>
    </div>
  );
};

export default CustomCursor;
