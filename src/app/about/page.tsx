
'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';

const contentSections = [
  {
    title: "At Cauders, we are redefining the future of digital innovation.",
    text: "As a modern IT solutions company, we specialize in creating intelligent, scalable, and high-performance digital ecosystems that empower businesses to grow, adapt, and lead in competitive markets.",
    imageUrl: 'https://picsum.photos/seed/innovation/1000/1200',
    aiHint: 'abstract technology',
  },
  {
    title: "Our expertise spans custom software development, enterprise grade web and mobile applications, UI/UX design, cloud-based solutions, API integrations, AI integrations and performance optimization.",
    text: "delivering technology that is secure, user-centric, and built for long-term impact.",
    imageUrl: 'https://picsum.photos/seed/expertise/1000/1200',
    aiHint: 'software development team',
  },
  {
    title: "Driven by a passion for innovation and excellence, Cauders transforms ideas into powerful digital experiences for startups, enterprises, and global brands.",
    text: "We don’t just build solutions we create future-ready platforms that elevate businesses and inspire growth.",
    imageUrl: 'https://picsum.photos/seed/vision/1000/1200',
    aiHint: 'futuristic city',
  },
];

export default function AboutPage() {
    const textSectionsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const sections = textSectionsRef.current;
            if (!sections) return;

            let currentActiveIndex = -1;
            let maxVisibleRatio = 0;

            sections.forEach((section, index) => {
                if (section) {
                    const { top, bottom, height } = section.getBoundingClientRect();
                    const viewportHeight = window.innerHeight;
                    
                    const visibleHeight = Math.max(0, Math.min(bottom, viewportHeight) - Math.max(top, 0));
                    const visibleRatio = visibleHeight / height;
                    
                    if (visibleRatio > maxVisibleRatio) {
                       maxVisibleRatio = visibleRatio;
                       currentActiveIndex = index;
                    }
                }
            });

            if (currentActiveIndex !== -1) {
                setActiveIndex(currentActiveIndex);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className="bg-background text-foreground">
             <section className="relative py-20 lg:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollFadeIn className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground">About Cauders</h1>
                    </ScrollFadeIn>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        
                        {/* Left Column: Text Content */}
                        <div className="flex flex-col gap-16">
                            {contentSections.map((section, index) => (
                                <div 
                                    key={index}
                                    ref={el => textSectionsRef.current[index] = el}
                                    className="min-h-[60vh] flex items-center"
                                >
                                    <div 
                                        className={cn(
                                            "transition-opacity duration-500",
                                            activeIndex === index ? "opacity-100" : "opacity-20"
                                        )}
                                    >
                                        <h2 className="text-3xl md:text-5xl font-bold text-foreground font-headline mb-6">
                                            {section.title}
                                        </h2>
                                        <p className="text-lg text-foreground/80">
                                            {section.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Column: Sticky Images */}
                        <div className="sticky top-32 w-full h-[80vh] hidden lg:block">
                            <div className="relative w-full h-full">
                                {contentSections.map((section, index) => (
                                    <div
                                        key={index}
                                        className={cn(
                                            'absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out',
                                            activeIndex === index ? 'opacity-100' : 'opacity-0'
                                        )}
                                    >
                                        <Image
                                            src={section.imageUrl}
                                            alt={section.title}
                                            fill
                                            className="object-cover rounded-2xl shadow-2xl"
                                            data-ai-hint={section.aiHint}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
