
"use client";

import { useRef, type ReactNode, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

let sharedObserver: IntersectionObserver | null = null;
const observerCallbacks = new WeakMap<Element, () => void>();

interface ScrollFadeInProps {
 children: ReactNode;
 className?: string;
 style?: React.CSSProperties;
 direction?: 'up' | 'down' | 'left' | 'right';
 delay?: string | number;
}

export default function ScrollFadeIn({ children, className, style, direction = 'up', delay = 0 }: ScrollFadeInProps) {
 const ref = useRef<HTMLDivElement>(null);
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
 const currentRef = ref.current;
 if (!currentRef) return;

 if (!sharedObserver) {
 sharedObserver = new IntersectionObserver(
 (entries) => {
 entries.forEach((entry) => {
 if (entry.isIntersecting) {
 const callback = observerCallbacks.get(entry.target);
 if (callback) {
 callback();
 sharedObserver?.unobserve(entry.target);
 observerCallbacks.delete(entry.target);
 }
 }
 });
 },
 { threshold: 0.1 }
 );
 }

 observerCallbacks.set(currentRef, () => setIsVisible(true));
 sharedObserver.observe(currentRef);

 return () => {
 if (currentRef) {
 sharedObserver?.unobserve(currentRef);
 observerCallbacks.delete(currentRef);
 }
 };
 }, []);

 const getAnimationClass = () => {
 if (!isVisible) return '';
 switch (direction) {
 case 'up':
 return 'animate-fade-in-up';
 case 'down':
 return 'animate-fade-in-down';
 case 'left':
 return 'animate-fade-in-left';
 case 'right':
 return 'animate-fade-in-right';
 default:
 return 'animate-fade-in';
 }
 };
 
 const animationDelay = typeof delay === 'string' ? delay.replace('delay-', '') : delay;
 const delayInMs = Number(animationDelay) || 0;

 return (
 <div
 ref={ref}
 className={cn(className, 'transition-opacity opacity-0', getAnimationClass())}
 style={{ ...style, animationDelay: `${delayInMs}ms`, animationFillMode: 'forwards' }}
 >
 {children}
 </div>
 );
}
