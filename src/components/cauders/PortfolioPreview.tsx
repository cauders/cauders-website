"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { getProjects } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PortfolioPreview() {
 // Duplicate projects to ensure we have enough for a smooth infinite coverflow
 // 12 is enough, but looping is seamless anyway.
 const projects = getProjects().slice(0, 12);
 const sectionRef = useRef<HTMLDivElement>(null);
 const carouselWrapRef = useRef<HTMLDivElement>(null);
 const followerRef = useRef<HTMLDivElement>(null);
 const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

 const [isHoveringCarousel, setIsHoveringCarousel] = useState(false);

 const cursorPosition = useRef({ x: 0, y: 0 });
 const followerPosition = useRef({ x: 0, y: 0 });
 const isDragging = useRef(false);
 const wasDragging = useRef(false);
 const startX = useRef(0);
 const startDragX = useRef(0);
 const currentX = useRef(0);
 const targetX = useRef(0);
 const velocity = useRef(0);
 const animationFrameId = useRef<number | null>(null);
 const lastScrollY = useRef(0);
 const isInitialized = useRef(false);

 const lastFollowerTransform = useRef("");
 const viewportWidth = useRef(typeof window !== 'undefined' ? window.innerWidth : 1024);
 const cardWidthCache = useRef(0);

 useEffect(() => {
 const handleResize = () => {
 viewportWidth.current = window.innerWidth;
 if (cardRefs.current[0]) {
 cardWidthCache.current = cardRefs.current[0].offsetWidth;
 }
 };
 
 // Initial call to set cache
 handleResize();
 
 window.addEventListener('resize', handleResize);
 return () => window.removeEventListener('resize', handleResize);
 }, []);

 useEffect(() => {
 const animate = () => {
 // 1. Optimize Follower Cursor
 if (followerRef.current) {
 const diffX = cursorPosition.current.x - followerPosition.current.x;
 const diffY = cursorPosition.current.y - followerPosition.current.y;
 
 // Only update if the difference is noticeable (> 0.5px)
 if (Math.abs(diffX) > 0.5 || Math.abs(diffY) > 0.5) {
 followerPosition.current.x += diffX * 0.1;
 followerPosition.current.y += diffY * 0.1;
 
 const newFollowerTransform = `translate(-50%, -50%) translate3d(${Math.round(followerPosition.current.x)}px, ${Math.round(followerPosition.current.y)}px, 0)`;
 if (newFollowerTransform !== lastFollowerTransform.current) {
 followerRef.current.style.transform = newFollowerTransform;
 lastFollowerTransform.current = newFollowerTransform;
 }
 }
 }

 // 2. Coverflow Math
 if (carouselWrapRef.current && cardWidthCache.current > 0) {
 // Read scroll directly inside the render frame for perfect sync
 const currentScrollY = window.scrollY;
 if (!isDragging.current && currentScrollY !== lastScrollY.current) {
 const deltaScroll = currentScrollY - lastScrollY.current;
 const scrollTranslation = deltaScroll * 1.5;
 targetX.current -= scrollTranslation;
 
 // Instantly sync to prevent easing jitter
 if (Math.abs(velocity.current) < 0.1) {
 currentX.current -= scrollTranslation;
 }
 }
 lastScrollY.current = currentScrollY;

 if (!isDragging.current) {
 velocity.current *= 0.90; // Damping factor for momentum
 if (Math.abs(velocity.current) < 0.1) {
 velocity.current = 0; // Snap velocity to 0 to stop micro-drifting
 } else {
 targetX.current += velocity.current;
 }
 }
 
 const diffX = targetX.current - currentX.current;
 
 // Handle drag easing
 if (!isInitialized.current || isDragging.current || Math.abs(diffX) > 0.5 || Math.abs(velocity.current) > 0) {
 isInitialized.current = true;
 
 if (!isDragging.current && Math.abs(diffX) < 1 && velocity.current === 0) {
 currentX.current = targetX.current;
 } else {
 const damping = isDragging.current ? 0.1 : 0.05;
 currentX.current += diffX * damping;
 }
 }
 
 // Calculate dynamic Coverflow layout
 const currentViewportWidth = viewportWidth.current;
 const centerScreen = currentViewportWidth / 2;
 
 const cardWidth = cardWidthCache.current;
 const gap = currentViewportWidth < 768 ? 16 : 40; 
 const itemWidth = cardWidth + gap;
 const totalWidth = itemWidth * projects.length;
 
 cardRefs.current.forEach((card, i) => {
 if (!card) return;
 const baseX = i * itemWidth;
 
 // Virtual infinite wrapping logic
 let virtualX = (baseX + currentX.current) % totalWidth;
 if (virtualX < 0) virtualX += totalWidth; // keep positive
 
 // Center the wrapping point around the viewport
 if (virtualX > centerScreen + totalWidth / 2) {
 virtualX -= totalWidth;
 } else if (virtualX < centerScreen - totalWidth / 2) {
 virtualX += totalWidth;
 }
 
 // Distance from center of screen
 const cardCenter = virtualX + (cardWidth / 2);
 const distFromCenter = cardCenter - centerScreen;
 
 // Curve Math: cards on sides get pushed back and tilted inwards
 const rotateY = distFromCenter * -0.04; 
 const translateZ = -Math.abs(distFromCenter) * 0.6;
 
 // Limit rotation to avoid clipping or extreme skew
 const clampedRotateY = Math.max(-55, Math.min(55, rotateY));
 
 const transform = `translateX(${virtualX}px) translateZ(${translateZ}px) rotateY(${clampedRotateY}deg)`;
 
 if (card.dataset.lastTransform !== transform) {
 card.style.transform = transform;
 card.dataset.lastTransform = transform;
 }
 });
 }
 };


 let loopRunning = false;
 const startLoop = () => {
 if (!loopRunning) {
 loopRunning = true;
 const loop = () => {
 if (!loopRunning) return; // Exit loop if stopped
 animate();
 animationFrameId.current = requestAnimationFrame(loop);
 };
 loop();
 }
 };
 
 const stopLoop = () => {
 loopRunning = false;
 if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
 };

 const observer = new IntersectionObserver(([entry]) => {
 if (entry.isIntersecting) {
 // We re-enter the viewport, synchronize scroll and start everything
 lastScrollY.current = window.scrollY;
 startLoop();
 } else {
 // Off-screen: stop everything to save CPU/GPU and prevent global lag
 stopLoop();
 }
 }, { threshold: 0 });

 if (sectionRef.current) {
 observer.observe(sectionRef.current);
 }

 return () => {
 observer.disconnect();
 stopLoop();
 };
 }, []);
 
 const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
 cursorPosition.current = { x: e.clientX, y: e.clientY };

 if (isDragging.current) {
 const walk = e.pageX - startX.current;
 const newTargetX = startDragX.current + walk * 1.5;
 velocity.current = (newTargetX - targetX.current) * 0.5;
 targetX.current = newTargetX;
 startX.current = e.pageX;
 startDragX.current = newTargetX;
 }
 }, []);

 const handleMouseEnterCarousel = useCallback(() => {
 setIsHoveringCarousel(true);
 }, []);

 const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
 isDragging.current = true;
 wasDragging.current = false;
 startX.current = e.pageX;
 startDragX.current = currentX.current;
 velocity.current = 0;
 setTimeout(() => {
 if(isDragging.current) wasDragging.current = true;
 }, 150);
 }, []);

 const handleMouseUp = useCallback(() => {
 isDragging.current = false;
 }, []);

 const handleMouseLeave = useCallback(() => {
 isDragging.current = false;
 setIsHoveringCarousel(false);
 }, []);

 const handleCardMouseLeave = useCallback(() => {
 setIsHoveringCarousel(false);
 }, []);

 // Touch event handlers
 const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
 isDragging.current = true;
 wasDragging.current = false;
 startX.current = e.touches[0].pageX;
 startDragX.current = currentX.current;
 velocity.current = 0;
 setTimeout(() => {
 if (isDragging.current) wasDragging.current = true;
 }, 150);
 }, []);

 const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
 if (!isDragging.current) return;
 const walk = e.touches[0].pageX - startX.current;
 const newTargetX = startDragX.current + walk * 1.5;
 velocity.current = (newTargetX - targetX.current) * 0.5;
 targetX.current = newTargetX;
 startX.current = e.touches[0].pageX;
 startDragX.current = newTargetX;
 }, []);

 const handleTouchEnd = useCallback(() => {
 isDragging.current = false;
 }, []);

 const handleCardClick = (e: React.MouseEvent) => {
 if (wasDragging.current) {
 e.preventDefault();
 wasDragging.current = false; // Reset for next click
 }
 }

 return (
 <div
 ref={sectionRef}
 className="relative flex flex-col justify-center h-full w-full pointer-events-auto"
 data-hide-cursor="true"
 onMouseMove={handleMouseMove}
 onMouseDown={handleMouseDown}
 onMouseUp={handleMouseUp}
 onMouseLeave={handleMouseLeave}
 onTouchStart={handleTouchStart}
 onTouchMove={handleTouchMove}
 onTouchEnd={handleTouchEnd}
 >
 <div
 ref={followerRef}
 className={cn(
 "fixed w-24 h-24 rounded-full flex items-center justify-center text-primary-foreground text-sm pointer-events-none z-20 transition-opacity duration-300 ease-out top-0 left-0 will-change-transform",
 "glass-effect border border-primary/50",
 "hidden md:flex", // Hide on mobile
 (isHoveringCarousel || isDragging.current) ? "opacity-100" : "opacity-0"
 )}
 style={{ boxShadow: "0 0 25px hsl(var(--primary) / 0.5)" }}
 >
 <div className="flex items-center text-primary">
 <ChevronLeft className="w-6 h-6" />
 <span className="uppercase text-xs tracking-widest">Drag</span>
 <ChevronRight className="w-6 h-6" />
 </div>
 </div>


 {/* 3D Carousel Area */}
 <div 
 className="h-[35vh] md:h-[20vh] lg:h-[45vh] mt-8 md:mt-16 perspective-carousel pointer-events-none w-full relative left-0 touch-pan-y"
 >
 <div ref={carouselWrapRef} className="relative w-full h-full carousel-wrap">
 {projects.map((project, index) => {
 return (
 <div
 key={project.slug}
 ref={(el) => { cardRefs.current[index] = el; }}
 className="absolute w-[80vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] h-full top-0 left-0 pointer-events-auto"
 >
 <Link
 href={`https://www.portfolio.cauders.com/${project.slug}`}
 onClick={handleCardClick}
 className="block h-full w-full rounded-2xl md:rounded-3xl group"
 draggable={false}
 onMouseEnter={handleMouseEnterCarousel}
 onMouseLeave={handleCardMouseLeave}
 >
 <Card 
 className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-3xl bg-transparent border-0" 
 style={{ transform: 'translateZ(0)' }}
 >
 <Image
 src={project.imageUrl}
 alt={project.title}
 width={800}
 height={600}
 priority={index < 4}
 className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
 draggable={false}
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
 </Card>
 
 <div
 className={cn(
 "absolute w-[95%] bottom-0 p-3 md:p-6 lg:p-8 z-20 transition-all duration-700 ease-out text-left pointer-events-none",
 "opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 md:group-hover:-translate-y-4"
 )}
 >
 <h3 className="text-white font-bold text-heading-card lg:text-3xl mb-1 leading-snug drop-shadow-md">
 {project.title}
 </h3>
 <p className="text-body-base text-white font-normal line-clamp-3 mb-2 md:mb-3">
 {project.description}
 </p>
 <p className="text-primary text-body-base font-medium">
 {project.category}
 </p>
 </div>
 </Link>
 </div>
 );
 })}
 </div>
 </div>
 </div>
 );
}
