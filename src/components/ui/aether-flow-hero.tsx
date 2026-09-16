"use client";

import { useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface Particle {
 x: number;
 y: number;
 vx: number;
 vy: number;
 life: number;
 maxLife: number;
 speed: number;
 size: number;
 hue: number;
 saturation: number;
 lightness: number;
 alpha: number;
}

interface AetherFlowCanvasProps {
 className?: string;
 particleCount?: number;
 /** Primary color hue (0-360). Default matches Cauders teal ~177 */
 baseHue?: number;
 /** How strongly particles respond to cursor. 0 = none, 1 = max */
 cursorInfluence?: number;
 /** Speed multiplier for particle flow */
 flowSpeed?: number;
}

// Simple value noise for smooth flow fields (no dependencies)
function createNoise() {
 const permutation: number[] = [];
 for (let i = 0; i < 256; i++) permutation[i] = i;
 for (let i = 255; i > 0; i--) {
 const j = Math.floor(Math.random() * (i + 1));
 [permutation[i], permutation[j]] = [permutation[j], permutation[i]];
 }
 const perm = [...permutation, ...permutation];

 function fade(t: number) {
 return t * t * t * (t * (t * 6 - 15) + 10);
 }

 function lerp(a: number, b: number, t: number) {
 return a + t * (b - a);
 }

 function grad(hash: number, x: number, y: number) {
 const h = hash & 3;
 const u = h < 2 ? x : y;
 const v = h < 2 ? y : x;
 return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
 }

 return function noise2D(x: number, y: number): number {
 const X = Math.floor(x) & 255;
 const Y = Math.floor(y) & 255;
 const xf = x - Math.floor(x);
 const yf = y - Math.floor(y);
 const u = fade(xf);
 const v = fade(yf);

 const aa = perm[perm[X] + Y];
 const ab = perm[perm[X] + Y + 1];
 const ba = perm[perm[X + 1] + Y];
 const bb = perm[perm[X + 1] + Y + 1];

 return lerp(
 lerp(grad(aa, xf, yf), grad(ba, xf - 1, yf), u),
 lerp(grad(ab, xf, yf - 1), grad(bb, xf - 1, yf - 1), u),
 v
 );
 };
}

export default function AetherFlowCanvas({
 className,
 particleCount = 120,
 baseHue = 177,
 cursorInfluence = 0.4,
 flowSpeed = 0.8,
}: AetherFlowCanvasProps) {
 const canvasRef = useRef<HTMLCanvasElement>(null);
 const mouseRef = useRef({ x: -1000, y: -1000 });
 const particlesRef = useRef<Particle[]>([]);
 const rafRef = useRef<number>(0);
 const noiseRef = useRef(createNoise());
 const timeRef = useRef(0);
 const dimensionsRef = useRef({ width: 0, height: 0 });

 const createParticle = useCallback(
 (width: number, height: number, reset = false): Particle => {
 const x = reset ? Math.random() * width : Math.random() * width;
 const y = reset ? Math.random() * height : Math.random() * height;
 const maxLife = 200 + Math.random() * 400;
 return {
 x,
 y,
 vx: 0,
 vy: 0,
 life: reset ? Math.random() * maxLife : 0,
 maxLife,
 speed: (0.3 + Math.random() * 0.7) * flowSpeed,
 size: 1 + Math.random() * 2,
 hue: baseHue + (Math.random() - 0.5) * 30,
 saturation: 60 + Math.random() * 30,
 lightness: 50 + Math.random() * 30,
 alpha: 0,
 };
 },
 [baseHue, flowSpeed]
 );

 useEffect(() => {
 const canvas = canvasRef.current;
 if (!canvas) return;

 const ctx = canvas.getContext("2d", { alpha: true });
 if (!ctx) return;

 const resize = () => {
 const dpr = Math.min(window.devicePixelRatio || 1, 2);
 const rect = canvas.getBoundingClientRect();
 canvas.width = rect.width * dpr;
 canvas.height = rect.height * dpr;
 ctx.scale(dpr, dpr);
 dimensionsRef.current = { width: rect.width, height: rect.height };
 };

 resize();
 window.addEventListener("resize", resize);

 // Initialize particles
 const { width, height } = dimensionsRef.current;
 particlesRef.current = Array.from({ length: particleCount }, () =>
 createParticle(width, height, true)
 );

 const handleMouseMove = (e: MouseEvent) => {
 const rect = canvas.getBoundingClientRect();
 mouseRef.current = {
 x: e.clientX - rect.left,
 y: e.clientY - rect.top,
 };
 };

 const handleMouseLeave = () => {
 mouseRef.current = { x: -1000, y: -1000 };
 };

 window.addEventListener("mousemove", handleMouseMove);
 canvas.addEventListener("mouseleave", handleMouseLeave);

 const noiseScale = 0.003;
 const timeScale = 0.0004;

 let isVisible = true;

 const animate = () => {
 if (!isVisible) return;
 
 const { width, height } = dimensionsRef.current;
 if (width === 0 || height === 0) {
 rafRef.current = requestAnimationFrame(animate);
 return;
 }

 timeRef.current += 1;
 const noise = noiseRef.current;
 const time = timeRef.current * timeScale;
 const mouse = mouseRef.current;

 // Fade trail effect — slight transparency clear
 ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
 ctx.fillRect(0, 0, width, height);

 for (let i = 0; i < particlesRef.current.length; i++) {
 const p = particlesRef.current[i];
 p.life++;

 // Fade in/out lifecycle
 const lifeRatio = p.life / p.maxLife;
 if (lifeRatio < 0.1) {
 p.alpha = lifeRatio / 0.1;
 } else if (lifeRatio > 0.85) {
 p.alpha = (1 - lifeRatio) / 0.15;
 } else {
 p.alpha = 1;
 }

 if (p.life >= p.maxLife) {
 particlesRef.current[i] = createParticle(width, height, false);
 // Respawn at edges or random spot
 const edge = Math.random();
 if (edge < 0.25) {
 particlesRef.current[i].x = 0;
 particlesRef.current[i].y = Math.random() * height;
 } else if (edge < 0.5) {
 particlesRef.current[i].x = width;
 particlesRef.current[i].y = Math.random() * height;
 } else if (edge < 0.75) {
 particlesRef.current[i].x = Math.random() * width;
 particlesRef.current[i].y = 0;
 } else {
 particlesRef.current[i].x = Math.random() * width;
 particlesRef.current[i].y = height;
 }
 continue;
 }

 // Flow field angle from noise
 const angle =
 noise(p.x * noiseScale, p.y * noiseScale + time) * Math.PI * 4;

 // Base velocity from flow field
 let fx = Math.cos(angle) * p.speed;
 let fy = Math.sin(angle) * p.speed;

 // Cursor influence — attract or swirl around mouse
 const dx = mouse.x - p.x;
 const dy = mouse.y - p.y;
 const dist = Math.sqrt(dx * dx + dy * dy);
 const cursorRadius = 200;

 if (dist < cursorRadius && dist > 1) {
 const force =
 ((cursorRadius - dist) / cursorRadius) * cursorInfluence;
 // Swirl: perpendicular + slight attraction
 const perpX = -dy / dist;
 const perpY = dx / dist;
 fx += (perpX * force * 2 + (dx / dist) * force * 0.3) * p.speed;
 fy += (perpY * force * 2 + (dy / dist) * force * 0.3) * p.speed;
 }

 p.vx = p.vx * 0.92 + fx * 0.08;
 p.vy = p.vy * 0.92 + fy * 0.08;

 p.x += p.vx;
 p.y += p.vy;

 // Wrap around screen edges
 if (p.x < -10) p.x = width + 10;
 if (p.x > width + 10) p.x = -10;
 if (p.y < -10) p.y = height + 10;
 if (p.y > height + 10) p.y = -10;

 // Draw the particle as a soft glowing dot
 const finalAlpha = Math.max(0, Math.min(1, p.alpha * 0.6));
 if (finalAlpha <= 0) continue;

 ctx.beginPath();
 ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
 ctx.fillStyle = `hsla(${p.hue}, ${p.saturation}%, ${p.lightness}%, ${finalAlpha})`;
 ctx.fill();

 // Glow layer
 const glowSize = p.size * 3;
 const gradient = ctx.createRadialGradient(
 p.x,
 p.y,
 0,
 p.x,
 p.y,
 glowSize
 );
 gradient.addColorStop(
 0,
 `hsla(${p.hue}, ${p.saturation}%, ${p.lightness}%, ${finalAlpha * 0.3})`
 );
 gradient.addColorStop(1, `hsla(${p.hue}, ${p.saturation}%, ${p.lightness}%, 0)`);
 ctx.beginPath();
 ctx.arc(p.x, p.y, glowSize, 0, Math.PI * 2);
 ctx.fillStyle = gradient;
 ctx.fill();
 }

 rafRef.current = requestAnimationFrame(animate);
 };

 const observer = new IntersectionObserver(([entry]) => {
 isVisible = entry.isIntersecting;
 if (isVisible) {
 if (!rafRef.current) {
 rafRef.current = requestAnimationFrame(animate);
 }
 } else {
 if (rafRef.current) {
 cancelAnimationFrame(rafRef.current);
 rafRef.current = 0;
 }
 }
 }, { threshold: 0 });

 if (canvas) {
 observer.observe(canvas);
 }

 return () => {
 observer.disconnect();
 if (rafRef.current) cancelAnimationFrame(rafRef.current);
 window.removeEventListener("resize", resize);
 window.removeEventListener("mousemove", handleMouseMove);
 canvas.removeEventListener("mouseleave", handleMouseLeave);
 };
 }, [particleCount, createParticle, cursorInfluence]);

 return (
 <canvas
 ref={canvasRef}
 className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}
 style={{ mixBlendMode: "screen" }}
 />
 );
}
