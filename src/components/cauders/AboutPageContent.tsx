
'use client';

import { cn } from '@/lib/utils';
import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Image from 'next/image';
import StandardizedHeading from '@/components/cauders/StandardizedHeading';
import placeholderImages from '@/lib/placeholder-images.json';
import VisionMission from '@/components/cauders/VisionMission';
import Principles from '@/components/cauders/Principles';
import TeamPreview from './TeamPreview';
import FAQPreview from './FAQPreview';
import GetAQuote from './GetAQuote';

export default function AboutPageContent() {
    const handleScrollToContent = () => {
        const contentElement = document.getElementById('about-content');
        if (contentElement) {
            contentElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="text-foreground bg-transparent overflow-x-hidden">
            <section className="bg-transparent">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-12">
                        <StandardizedHeading lines={[
                            { text: "Where Vision Meets" },
                            { text: "Digital Excellence", isGradient: true }
                        ]} />
                        <div className="flex flex-col items-start lg:items-end gap-4">
                          <p className="text-sm text-foreground/80 max-w-md lg:text-right">
                              At Cauders, we architect and engineer premium, modern, and dynamic digital solutions that empower businesses to thrive.
                          </p>
                          <Button onClick={handleScrollToContent} size="lg" variant="zinc" className="bg-zinc text-white">
                              Read More
                          </Button>
                        </div>
                    </div>
                    <ScrollFadeIn>
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                           <Image 
                                src={placeholderImages.about.hero.imageUrl}
                                alt="Empowering Your Digital Vision"
                                width={1200}
                                height={600}
                                data-ai-hint={placeholderImages.about.hero.aiHint}
                                className="w-full h-auto object-cover"
                           />
                        </div>
                    </ScrollFadeIn>
                </div>
            </section>

            <div id="about-content">
                <VisionMission />
                <Principles />
                <TeamPreview />
                <FAQPreview />
                <GetAQuote />
            </div>
        </div>
    );
}
