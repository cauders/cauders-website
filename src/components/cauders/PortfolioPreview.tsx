"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { getProjects } from "@/lib/data";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PortfolioPreview() {
  const projects = getProjects().slice(0, 12);
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselWrapRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [isHoveringCarousel, setIsHoveringCarousel] = useState(false);

  const cursorPosition = useRef({ x: 0, y: 0 });
  const followerPosition = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const totalDragDistance = useRef(0);
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
  const viewportWidth = useRef(typeof window !== "undefined" ? window.innerWidth : 1024);
  const cardWidthCache = useRef(0);

  // Helper to get reliable card width
  const getCardWidth = useCallback(() => {
    if (cardRefs.current[0] && cardRefs.current[0].offsetWidth > 0) {
      cardWidthCache.current = cardRefs.current[0].offsetWidth;
      return cardWidthCache.current;
    }
    const vw = viewportWidth.current || (typeof window !== "undefined" ? window.innerWidth : 1024);
    const calculated =
      vw < 768
        ? vw * 0.8
        : vw < 1024
        ? vw * 0.5
        : vw < 1280
        ? vw * 0.4
        : vw * 0.3;
    cardWidthCache.current = calculated;
    return calculated;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      viewportWidth.current = window.innerWidth;
      getCardWidth();
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getCardWidth]);

  useEffect(() => {
    const animate = () => {
      // Follower position animation
      if (followerRef.current && (isHoveringCarousel || isDragging.current)) {
        const diffX = cursorPosition.current.x - followerPosition.current.x;
        const diffY = cursorPosition.current.y - followerPosition.current.y;

        if (Math.abs(diffX) > 0.5 || Math.abs(diffY) > 0.5) {
          followerPosition.current.x += diffX * 0.15;
          followerPosition.current.y += diffY * 0.15;

          const newFollowerTransform = `translate(-50%, -50%) translate3d(${Math.round(
            followerPosition.current.x
          )}px, ${Math.round(followerPosition.current.y)}px, 0)`;
          if (newFollowerTransform !== lastFollowerTransform.current) {
            followerRef.current.style.transform = newFollowerTransform;
            lastFollowerTransform.current = newFollowerTransform;
          }
        }
      }

      if (carouselWrapRef.current) {
        const cardWidth = cardWidthCache.current || getCardWidth();
        const currentViewportWidth = viewportWidth.current || window.innerWidth;

        // Vertical page scroll synchronization (only when not actively dragging)
        const currentScrollY = window.scrollY;
        if (!isDragging.current && currentScrollY !== lastScrollY.current) {
          const deltaScroll = currentScrollY - lastScrollY.current;
          const scrollTranslation = deltaScroll * 0.5;
          targetX.current -= scrollTranslation;

          if (Math.abs(velocity.current) < 0.1) {
            currentX.current -= scrollTranslation;
          }
        }
        lastScrollY.current = currentScrollY;

        // Inertia momentum on release
        if (!isDragging.current) {
          velocity.current *= 0.92;
          if (Math.abs(velocity.current) < 0.1) {
            velocity.current = 0;
          } else {
            targetX.current += velocity.current;
          }
        }

        const diffX = targetX.current - currentX.current;

        if (
          !isInitialized.current ||
          isDragging.current ||
          Math.abs(diffX) > 0.5 ||
          Math.abs(velocity.current) > 0
        ) {
          isInitialized.current = true;

          if (!isDragging.current && Math.abs(diffX) < 1 && velocity.current === 0) {
            currentX.current = targetX.current;
          } else {
            // Snappy tracking when dragging (0.75), smooth easing when free-floating (0.08)
            const damping = isDragging.current ? 0.75 : 0.08;
            currentX.current += diffX * damping;
          }
        }

        const centerScreen = currentViewportWidth / 2;
        const gap = currentViewportWidth < 768 ? 16 : 40;
        const itemWidth = cardWidth + gap;
        const totalWidth = itemWidth * projects.length;

        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          const baseX = i * itemWidth;

          let virtualX = (baseX + currentX.current) % totalWidth;
          if (virtualX < 0) virtualX += totalWidth;

          if (virtualX > centerScreen + totalWidth / 2) {
            virtualX -= totalWidth;
          } else if (virtualX < centerScreen - totalWidth / 2) {
            virtualX += totalWidth;
          }

          // Culling with safe margins to prevent popping or stuck transforms
          const isOffscreen =
            virtualX < -cardWidth * 1.5 || virtualX > currentViewportWidth + cardWidth * 1.0;
          if (isOffscreen) {
            if (card.style.visibility !== "hidden") {
              card.style.visibility = "hidden";
            }
            return;
          } else if (card.style.visibility === "hidden") {
            card.style.visibility = "visible";
          }

          const cardCenter = virtualX + cardWidth / 2;
          const distFromCenter = cardCenter - centerScreen;

          const rotateY = distFromCenter * -0.04;
          const translateZ = -Math.abs(distFromCenter) * 0.6;
          const clampedRotateY = Math.max(-55, Math.min(55, rotateY));

          const transform = `translate3d(${Math.round(virtualX)}px, 0, ${Math.round(
            translateZ
          )}px) rotateY(${clampedRotateY.toFixed(1)}deg)`;

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
          if (!loopRunning) return;
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          lastScrollY.current = window.scrollY;
          getCardWidth();
          startLoop();
        } else {
          stopLoop();
        }
      },
      { threshold: 0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      stopLoop();
    };
  }, [getCardWidth, isHoveringCarousel, projects.length]);

  // Pointer drag handling (unified for desktop mouse, touchscreen, and stylus)
  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    // Only respond to main button
    if (e.button !== 0 && e.pointerType === "mouse") return;

    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // Ignore
    }

    isDragging.current = true;
    wasDragging.current = false;
    totalDragDistance.current = 0;
    startX.current = e.clientX;
    startDragX.current = currentX.current;
    velocity.current = 0;
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    cursorPosition.current = { x: e.clientX, y: e.clientY };

    if (!isDragging.current) return;

    const deltaX = e.clientX - startX.current;
    totalDragDistance.current += Math.abs(deltaX);

    if (totalDragDistance.current > 8) {
      wasDragging.current = true;
    }

    const newTargetX = startDragX.current + deltaX * 1.4;
    velocity.current = (newTargetX - targetX.current) * 0.45;
    targetX.current = newTargetX;
    startX.current = e.clientX;
    startDragX.current = newTargetX;
  }, []);

  const handlePointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      isDragging.current = false;
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {
        // Ignore
      }
      setTimeout(() => {
        wasDragging.current = false;
      }, 50);
    }
  }, []);

  const handlePointerCancel = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      isDragging.current = false;
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {
        // Ignore
      }
      setTimeout(() => {
        wasDragging.current = false;
      }, 50);
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHoveringCarousel(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!isDragging.current) {
      setIsHoveringCarousel(false);
    }
  }, []);

  const handleCardClick = (e: React.MouseEvent) => {
    if (wasDragging.current || totalDragDistance.current > 8) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col justify-center h-full w-full pointer-events-auto select-none cursor-grab active:cursor-grabbing touch-pan-y"
      data-hide-cursor="true"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={followerRef}
        className={cn(
          "fixed w-24 h-24 rounded-full flex items-center justify-center text-primary-foreground text-sm pointer-events-none z-20 transition-opacity duration-300 ease-out top-0 left-0 will-change-transform",
          "glass-effect border border-primary/50",
          "hidden md:flex",
          isHoveringCarousel || isDragging.current ? "opacity-100" : "opacity-0"
        )}
        style={{ boxShadow: "0 0 25px hsl(var(--primary) / 0.5)" }}
      >
        <div className="flex items-center text-primary select-none">
          <ChevronLeft className="w-6 h-6" />
          <span className="uppercase text-xs tracking-widest font-semibold">Drag</span>
          <ChevronRight className="w-6 h-6" />
        </div>
      </div>

      {/* 3D Carousel Area */}
      <div className="h-[35vh] md:h-[20vh] lg:h-[45vh] mt-8 md:mt-16 perspective-carousel pointer-events-none w-full relative left-0">
        <div ref={carouselWrapRef} className="relative w-full h-full carousel-wrap">
          {projects.map((project, index) => {
            return (
              <div
                key={project.slug}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="absolute w-[80vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] h-full top-0 left-0 pointer-events-auto transform-gpu will-change-transform select-none"
              >
                <div
                  onClick={handleCardClick}
                  className="block h-full w-full rounded-2xl md:rounded-3xl group select-none cursor-grab active:cursor-grabbing"
                  draggable={false}
                >
                  <Card
                    className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-3xl bg-transparent border-0 select-none"
                    style={{ transform: "translateZ(0)" }}
                  >
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={800}
                      height={600}
                      priority={index < 4}
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 select-none"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none select-none"></div>
                  </Card>

                  <div
                    className={cn(
                      "absolute w-[95%] bottom-0 p-3 md:p-6 lg:p-8 z-20 transition-all duration-700 ease-out text-left pointer-events-none select-none",
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
