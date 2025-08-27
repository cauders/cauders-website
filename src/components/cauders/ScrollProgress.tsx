"use client";

import { useState, useEffect } from 'react';

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    const navItems = [
        { id: 'hero', label: 'Home' },
        { id: 'services-preview', label: 'Services' },
        { id: 'portfolio-preview', label: 'Portfolio' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPosition = window.scrollY;
            setProgress(scrollPosition / totalHeight);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if(element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-4">
            <div className="relative h-48 w-px bg-foreground/20">
                <div 
                    className="absolute top-0 left-0 w-full bg-primary transition-all duration-200"
                    style={{ height: `${progress * 100}%`}}
                ></div>
            </div>
            <div className="flex flex-col gap-2">
                {navItems.map(item => (
                    <button 
                        key={item.id} 
                        onClick={() => scrollToSection(item.id)}
                        className="group relative flex items-center"
                        aria-label={`Scroll to ${item.label}`}
                    >
                        <span className="absolute right-full mr-4 text-xs uppercase tracking-widest text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {item.label}
                        </span>
                        <div className="w-2 h-2 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors"></div>
                    </button>
                ))}
            </div>
        </div>
    )
}
