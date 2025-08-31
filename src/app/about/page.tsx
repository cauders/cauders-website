
'use client';

import { cn } from '@/lib/utils';
import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';
import AnimatedLine from '@/components/cauders/AnimatedLine';
import Contact from '@/components/cauders/Contact';

const contentSections = [
  {
    title: "Redefining Digital Innovation",
    text: "At Cauders, we are redefining the future of digital innovation. As a modern IT solutions company, we specialize in creating intelligent, scalable, and high-performance digital ecosystems that empower businesses to grow, adapt, and lead in competitive markets.",
    layout: 'text-left'
  },
  {
    title: "Our Core Expertise",
    text: "Our expertise spans custom software development, enterprise grade web and mobile applications, UI/UX design, cloud-based solutions, API integrations, AI integrations and performance optimization delivering technology that is secure, user-centric, and built for long-term impact.",
    layout: 'text-right'
  },
  {
    title: "Vision for the Future",
    text: "Driven by a passion for innovation and excellence, Cauders transforms ideas into powerful digital experiences for startups, enterprises, and global brands. We don’t just build solutions we create future-ready platforms that elevate businesses and inspire growth.",
    layout: 'text-left'
  },
];

export default function AboutPage() {
    return (
        <div className="bg-background text-foreground">
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollFadeIn className="text-center mb-20 lg:mb-24">
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground font-headline">About Cauders</h1>
                    </ScrollFadeIn>

                    <div className="flex flex-col gap-24 lg:gap-32">
                        {contentSections.map((section, index) => (
                            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                                <div className={cn("lg:order-1", section.layout === 'text-right' && "lg:order-2")}>
                                    <div className="max-w-lg mx-auto">
                                        <ScrollFadeIn direction={section.layout === 'text-left' ? 'left' : 'right'}>
                                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-headline">
                                                {section.title}
                                            </h2>
                                        </ScrollFadeIn>
                                        <ScrollFadeIn direction="up" style={{ animationDelay: '200ms' }}>
                                            <p className="text-lg text-foreground/80">
                                                {section.text}
                                            </p>
                                        </ScrollFadeIn>
                                    </div>
                                </div>
                                <div className={cn("lg:order-2", section.layout === 'text-right' && "lg:order-1")}>
                                   <ScrollFadeIn direction="up">
                                        <div className="flex items-center justify-center h-64">
                                            <AnimatedLine reverse={section.layout === 'text-right'} />
                                        </div>
                                    </ScrollFadeIn>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Contact />
        </div>
    );
}
