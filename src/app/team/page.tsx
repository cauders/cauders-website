
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';
import { teamMembers, type TeamMember } from '@/lib/team-data';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, TrendingUp, Brush, TestTube2 } from 'lucide-react';
import StandardizedHeading from '@/components/cauders/StandardizedHeading';
import { cn } from '@/lib/utils';
import GetAQuote from '@/components/cauders/GetAQuote';
import TeamCarousel from '@/components/cauders/TeamCarousel';
import { Card } from '@/components/ui/card';
import CoreCompetencies from '@/components/cauders/CoreCompetencies';
import placeholderImages from '@/lib/placeholder-images.json';

const handleScrollToContent = () => {
    const contentElement = document.getElementById('team-content');
    if (contentElement) {
        contentElement.scrollIntoView({ behavior: 'smooth' });
    }
};

const floatingMembers = teamMembers.slice(0, 6);

const competencies = [
    {
        icon: TrendingUp,
        name: 'Strategy & Planning',
        description: 'Defining the roadmap to success.'
    },
    {
        icon: Brush,
        name: 'UI/UX Design',
        description: 'Crafting intuitive and beautiful experiences.'
    },
    {
        icon: TestTube2,
        name: 'Development & Testing',
        description: 'Building robust and reliable solutions.'
    }
];

export default function TeamPage() {
    
  return (
    <div className="text-foreground relative overflow-x-hidden">
      <section className="py-24 sm:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-3xl mx-auto text-center px-4 sm:px-0">
                {floatingMembers.map((member, index) => {
                    const positions = [
                        "top-0 left-[-20%] md:left-[-15%] lg:left-[-25%]", 
                        "top-0 right-[-20%] md:right-[-15%] lg:right-[-25%]",
                        "top-1/2 left-[-25%] md:left-[-20%] lg:left-[-30%]", 
                        "top-1/2 right-[-25%] md:right-[-20%] lg:right-[-30%]",
                        "bottom-0 left-[-15%] md:left-[-10%] lg:left-[-20%]", 
                        "bottom-0 right-[-15%] md:right-[-10%] lg:right-[-20%]"
                    ];
                    const sizes = ["w-16 h-16", "w-16 h-16", "w-16 h-16", "w-16 h-16", "w-16 h-16", "w-16 h-16"];
                    const delays = [0, 200, 400, 100, 300, 500];

                    return (
                        <ScrollFadeIn 
                            key={member.name}
                            delay={delays[index]}
                            className={cn(
                                "absolute rounded-full overflow-hidden shadow-lg animate-chat-icon-float",
                                "hidden md:block",
                                positions[index % positions.length],
                                sizes[index % sizes.length]
                            )}
                            style={{ animationDelay: `${delays[index]}ms`, animationDuration: `${4 + index * 0.5}s`}}
                        >
                            <Image
                                src={member.imageUrl}
                                alt={member.name}
                                width={80}
                                height={80}
                                className="object-cover w-full h-full"
                            />
                        </ScrollFadeIn>
                    );
                })}

                <div className="relative z-10">
                    <StandardizedHeading lines={["The Minds Behind Our Success"]} />
                    <p className="mt-4 text-sm md:text-base text-foreground/70 max-w-xl mx-auto">
                        Our success is driven by a team of passionate experts who transform visionary ideas into powerful digital realities. Meet the minds behind our innovation.
                    </p>
                    <div className="mt-8">
                        <Button onClick={handleScrollToContent} variant="zinc" size="lg">
                            Explore Our Team
                        </Button>
                    </div>
                </div>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                <ScrollFadeIn className="md:col-span-4 h-full">
                    <div className="relative aspect-video h-full w-full">
                        <Image 
                            src={placeholderImages.team.meeting.imageUrl}
                            alt="Team collaborating in a meeting"
                            fill
                            className="object-cover rounded-tl-2xl rounded-bl-2xl rounded-br-2xl"
                            data-ai-hint={placeholderImages.team.meeting.aiHint}
                        />
                    </div>
                </ScrollFadeIn>
                <ScrollFadeIn delay={200} className="md:col-span-4 h-full">
                    <Card className="w-full h-full rounded-2xl p-6 bg-card flex flex-col border-0 shadow-smooth-lift">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-headline text-lg font-semibold text-foreground">Core Competencies</h3>
                                <p className="text-xs text-foreground/60 mb-4">How we bring ideas to life.</p>
                            </div>
                             <Link href="/services" className="group -mt-1 -mr-1">
                                <div className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
                                    <div className="absolute inset-0 bg-zinc rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <ArrowUpRight className="w-5 h-5 text-zinc relative z-10 group-hover:text-white transition-colors duration-300" />
                                </div>
                            </Link>
                        </div>
                        <div className="space-y-4">
                            {competencies.map(c => (
                                <div key={c.name} className="flex items-start gap-3">
                                    <div className="bg-zinc text-white p-2 rounded-full">
                                        <c.icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-foreground">{c.name}</p>
                                        <p className="text-xs text-foreground/70">{c.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </ScrollFadeIn>
                <ScrollFadeIn delay={400} className="md:col-span-4 h-full">
                    <div className="relative aspect-video h-full w-full">
                        <Image 
                            src={placeholderImages.team.dataChart.imageUrl}
                            alt="Data chart on a laptop"
                            fill
                            className="object-cover rounded-tr-2xl rounded-bl-2xl rounded-br-2xl"
                            data-ai-hint={placeholderImages.team.dataChart.aiHint}
                        />
                    </div>
                </ScrollFadeIn>
            </div>
        </div>
      </section>

      <div id="team-content">
        <TeamCarousel />
      </div>
      <CoreCompetencies />
      <GetAQuote />
    </div>
  );
}
