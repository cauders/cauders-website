"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import MegaMenu from './MegaMenu';
import { Button } from '../ui/button';

export default function Header() {
 const [activeMenu, setActiveMenu] = useState<'services' | 'ai' | 'industries' | 'company' | null>(null);
 const [isScrolled, setIsScrolled] = useState(false);
 const pathname = usePathname();
 const timeoutRef = useRef<NodeJS.Timeout>();
 const headerRef = useRef<HTMLElement>(null);

 useEffect(() => {
 const handleScroll = () => {
 setIsScrolled(window.scrollY > 50);
 };
 window.addEventListener('scroll', handleScroll, { passive: true });
 handleScroll();
 return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 useEffect(() => {
 const handleOpenMegaMenu = (e: CustomEvent) => {
 setActiveMenu(e.detail as 'services' | 'ai' | 'industries' | 'company');
 };
 window.addEventListener('open-mega-menu', handleOpenMegaMenu as EventListener);
 return () => window.removeEventListener('open-mega-menu', handleOpenMegaMenu as EventListener);
 }, []);

 useEffect(() => {
 const handleClickOutside = (event: MouseEvent) => {
 if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
 setActiveMenu(null);
 }
 };
 
 document.addEventListener("mousedown", handleClickOutside);
 return () => {
 document.removeEventListener("mousedown", handleClickOutside);
 };
 }, []);
 
 const isAiActive = pathname.startsWith('/ai');
 const isServicesActive = pathname.startsWith('/services');
 const isIndustriesActive = pathname.startsWith('/industries');
 const isCompanyActive = pathname.startsWith('/about') || pathname.startsWith('/company') || pathname.startsWith('/team') || pathname.startsWith('/contact') || pathname.startsWith('/careers') || pathname.startsWith('/partners');

 const renderUnderline = (isActive: boolean) => {
 if (isActive) {
 return <span className="absolute left-0 bottom-0 w-full h-[2px] bg-zinc-800 dark:bg-zinc-200 rounded-full"></span>;
 }
 return <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-zinc-800 dark:bg-zinc-200 rounded-full transition-all duration-300 group-hover:w-1/2"></span>;
 };

 const handleMouseEnter = (menu: 'services' | 'ai' | 'industries' | 'company') => {
 if (timeoutRef.current) clearTimeout(timeoutRef.current);
 setActiveMenu(menu);
 };

 const handleMouseLeave = () => {
 timeoutRef.current = setTimeout(() => {
 setActiveMenu(null);
 }, 150);
 };

 return (
 <header ref={headerRef} className={cn("fixed top-0 left-0 z-50 w-full px-4 transition-all duration-500", isScrolled ? "pt-4" : "pt-6")} onMouseLeave={handleMouseLeave}>
 <div className={cn(
 "mx-auto relative z-50 w-full rounded-full border border-border/20 shadow-lg bg-white dark:bg-zinc-950 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
 isScrolled ? "max-w-5xl" : "container"
 )}>
 <div className="w-full mx-auto px-4 sm:px-6 lg:px-12">
 <div className="flex items-center justify-between h-14">
 
 {/* Logo */}
 <div className="flex-1 md:flex-none flex items-center justify-start md:w-48">
 <Link href="/" className="hover:opacity-80 transition-opacity">
 <Image 
 src="https://res.cloudinary.com/cauders/image/upload/v1786551887/logo-gd_ulbjsm.png" 
 alt="Cauders Logo"
 width={120}
 height={32}
 className="object-contain"
 priority
 />
 </Link>
 </div>

 {/* Navigation Links */}
 <nav className="hidden md:flex flex-1 items-center justify-center gap-10 text-sm font-medium">
 <div 
 className="relative py-4"
 onMouseEnter={() => handleMouseEnter('ai')}
 >
 <button
 type="button"
 className={cn("relative group py-2 transition-colors duration-300 ease-in-out hover:text-zinc font-medium", activeMenu === 'ai' || isAiActive ? "text-zinc" : "text-")}
 >
 Artificial Intelligence
 {renderUnderline(isAiActive)}
 </button>
 </div>
 <div 
 className="relative py-4"
 onMouseEnter={() => handleMouseEnter('services')}
 >
 <button
 type="button"
 className={cn("relative group py-2 transition-colors duration-300 ease-in-out hover:text-zinc font-medium", activeMenu === 'services' || isServicesActive ? "text-zinc" : "text-")}
 >
 Services
 {renderUnderline(isServicesActive)}
 </button>
 </div>
 <div 
 className="relative py-4"
 onMouseEnter={() => handleMouseEnter('industries')}
 >
 <button
 type="button"
 className={cn("relative group py-2 transition-colors duration-300 ease-in-out hover:text-zinc font-medium", activeMenu === 'industries' || isIndustriesActive ? "text-zinc" : "text-")}
 >
 Industries
 {renderUnderline(isIndustriesActive)}
 </button>
 </div>
 <div 
 className="relative py-4"
 onMouseEnter={() => handleMouseEnter('company')}
 >
 <button
 type="button"
 className={cn("relative group py-2 transition-colors duration-300 ease-in-out hover:text-zinc font-medium", activeMenu === 'company' || isCompanyActive ? "text-zinc" : "text-")}
 >
 Company
 {renderUnderline(isCompanyActive)}
 </button>
 </div>
 </nav>

 {/* CTA Button */}
 <div className="hidden md:flex items-center justify-end w-48" onMouseEnter={handleMouseLeave}>
 <Button asChild variant="zinc">
 <Link href="/contact">
 Contact Us
 </Link>
 </Button>
 </div>

 </div>
 </div>
 </div>
 
 {/* Mega Menu Overlay */}
 <MegaMenu 
 activeMenu={activeMenu} 
 setActiveMenu={setActiveMenu} 
 />
 </header>
 );
}
