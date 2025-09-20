
'use client';

import { cn } from '@/lib/utils';
import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import StandardizedHeading from '@/components/cauders/StandardizedHeading';
import placeholderImages from '@/lib/placeholder-images.json';


const contentSections = [
  {
    title: "Redefining Digital Innovation",
    text: "At Cauders, we are redefining the future of digital innovation. As a modern IT solutions company, we specialize in creating intelligent, scalable, and high-performance digital ecosystems that empower businesses to grow, adapt, and lead in competitive markets.",
    layout: 'text-left',
    imageUrl: '/images/about/digital-innovation.jpg',
    aiHint: placeholderImages.innovation.aiHint
  },
  {
    title: "Our Core Expertise",
    text: "Our expertise spans custom software development, enterprise grade web and mobile applications, UI/UX design, cloud-based solutions, API integrations, AI integrations and performance optimization delivering technology that is secure, user-centric, and built for long-term impact.",
    layout: 'text-right',
    imageUrl: '/images/about/software-development.jpg',
    aiHint: placeholderImages.expertise.aiHint
  },
  {
    title: "Vision for the Future",
    text: "Driven by a passion for innovation and excellence, Cauders transforms ideas into powerful digital experiences for startups, enterprises, and global brands. We don’t just build solutions we create future-ready platforms that elevate businesses and inspire growth.",
    layout: 'text-left',
    imageUrl: '/images/about/future-ready.jpg',
    aiHint: placeholderImages.vision.aiHint
  },
];

export default function AboutPage() {
    return (
        <div className="bg-background text-foreground">
            <section className="py-16 lg:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 lg:mb-24">
                        <StandardizedHeading lines={["About Cauders"]} />
                    </div>

                    <div className="flex flex-col gap-16 lg:gap-32">
                        {contentSections.map((section, index) => (
                            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className={cn("lg:order-1 text-center lg:text-left", section.layout === 'text-right' && "lg:order-2 lg:text-right")}>
                                    <div className="max-w-lg mx-auto lg:mx-0 lg:ml-auto">
                                        <ScrollFadeIn direction={section.layout === 'text-left' ? 'left' : 'right'}>
                                            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 font-headline">
                                                {section.title}
                                            </h2>
                                        </ScrollFadeIn>
                                        <ScrollFadeIn direction="up" style={{ animationDelay: '200ms' }}>
                                            <p className="text-sm text-foreground/80">
                                                {section.text}
                                            </p>
                                        </ScrollFadeIn>
                                    </div>
                                </div>
                                <div className={cn("lg:order-2", section.layout === 'text-right' && "lg:order-1")}>
                                   <ScrollFadeIn direction="up">
                                        <div className="flex items-center justify-center rounded-lg overflow-hidden shadow-lg">
                                            <Image 
                                                src={section.imageUrl}
                                                alt={section.title}
                                                width={800}
                                                height={600}
                                                data-ai-hint={section.aiHint}
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>
                                    </ScrollFadeIn>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
             <section className="py-16 lg:py-32 bg-secondary/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollFadeIn>
                        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 font-headline">Let's Create Together</h2>
                        <p className="max-w-2xl mx-auto text-sm text-foreground/70 mb-8">
                            Have an idea that could redefine your industry? We're the team to help you build it. Let's start a conversation.
                        </p>
                        <Button asChild size="lg">
                            <Link href="/contact">
                                Get in Touch <ArrowRight className="ml-2" />
                            </Link>
                        </Button>
                    </ScrollFadeIn>
                </div>
            </section>
        </div>
    );
}
