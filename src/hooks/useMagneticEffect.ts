
"use client";

import { useEffect, useRef, type RefObject } from 'react';

const LERP_FACTOR = 0.1; 
const MAGNET_RADIUS = 80;

export function useMagneticEffect(ref: RefObject<HTMLElement>) {
 const animationFrameRef = useRef<number>();
 const posRef = useRef({ x: 0, y: 0 });

 useEffect(() => {
 const element = ref.current;
 if (!element) return;

 const parent = element.parentElement;
 if (!parent) return;

 const animateTo = (targetX: number, targetY: number) => {
 if (animationFrameRef.current) {
 cancelAnimationFrame(animationFrameRef.current);
 }
 
 const animate = () => {
 const pos = posRef.current;
 const newX = pos.x + (targetX - pos.x) * LERP_FACTOR;
 const newY = pos.y + (targetY - pos.y) * LERP_FACTOR;

 if (Math.abs(targetX - newX) < 0.1 && Math.abs(targetY - newY) < 0.1) {
 pos.x = targetX;
 pos.y = targetY;
 element.style.transform = `translate(${targetX}px, ${targetY}px)`;
 return;
 }
 
 pos.x = newX;
 pos.y = newY;
 element.style.transform = `translate(${newX}px, ${newY}px)`;
 animationFrameRef.current = requestAnimationFrame(animate);
 };
 animationFrameRef.current = requestAnimationFrame(animate);
 };

 const handleMouseMove = (e: MouseEvent) => {
 const rect = element.getBoundingClientRect();
 const centerX = rect.left + rect.width / 2;
 const centerY = rect.top + rect.height / 2;
 const clientX = e.clientX;
 const clientY = e.clientY;

 const distance = Math.sqrt(Math.pow(centerX - clientX, 2) + Math.pow(centerY - clientY, 2));

 if (distance < MAGNET_RADIUS) {
 const dx = clientX - centerX;
 const dy = clientY - centerY;
 animateTo(dx * 0.5, dy * 0.5);
 }
 };

 const handleMouseLeave = () => {
 animateTo(0, 0);
 };

 parent.addEventListener('mousemove', handleMouseMove, { passive: true });
 parent.addEventListener('mouseleave', handleMouseLeave);
 
 return () => {
 parent.removeEventListener('mousemove', handleMouseMove);
 parent.removeEventListener('mouseleave', handleMouseLeave);
 if (animationFrameRef.current) {
 cancelAnimationFrame(animationFrameRef.current);
 }
 };
 }, [ref]);
}
