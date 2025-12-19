'use client';

import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { teamMembers, type TeamMember } from '@/lib/team-data';
import StandardizedHeading from './StandardizedHeading';
import ScrollFadeIn from './ScrollFadeIn';
import { ArrowRight, Linkedin, X } from 'lucide-react';
import ArrowBadge from './ArrowBadge';
import BlurCircle from './BlurCircle';

export default function TeamCarousel() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(teamMembers[0]);

    const handleMemberSelect = (member: TeamMember) => {
        setSelectedMember(member);
        setTimeout(() => {
            document.getElementById('team-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }

  return (
    <>
    <section className="py-16 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <ScrollFadeIn>
                <ArrowBadge href="/team" text="Our Team" variant="black" className="mb-4" />
                <StandardizedHeading lines={["Meet With <span class='bg-gradient-text text-transparent bg-clip-text'>Our Experts</span>"]} />
                <p className="mt-4 text-sm text-foreground/70">
                    Our success is driven by a team of passionate experts who transform visionary ideas into powerful digital realities. Meet the minds behind our innovation.
                </p>
            </ScrollFadeIn>
          </div>
          <div className="lg:col-span-2">
            <ScrollFadeIn delay={200}>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {teamMembers.map((member, index) => (
                        <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                            <div className="p-1 h-full" onClick={() => handleMemberSelect(member)}>
                                <Card className="group relative overflow-hidden rounded-2xl border-0 shadow-smooth-lift cursor-pointer h-full">
                                    <div className="aspect-[4/5] w-full h-full relative">
                                        <Image
                                            src={member.imageUrl}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                                    </div>
                                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                                        <div>
                                            <h4 className="text-lg font-bold text-white font-headline">{member.name}</h4>
                                            <p className="text-sm text-primary">{member.role}</p>
                                        </div>
                                        {member.socials.linkedin && (
                                            <div className="mt-4">
                                                <Link href={member.socials.linkedin} target="_blank" aria-label="LinkedIn">
                                                    <Linkedin className="h-5 w-5 text-white/70 hover:text-white" />
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <CarouselPrevious className="static -translate-x-1 bg-card border-border text-foreground hover:bg-muted" />
                        <CarouselNext className="static translate-x-1 bg-card border-border text-foreground hover:bg-muted" />
                    </div>
                </Carousel>
            </ScrollFadeIn>
          </div>
        </div>
      </div>
    </section>
    
    <div className="relative">
        <BlurCircle className="w-96 h-96 top-[-10rem] right-[-10rem]" />
        {selectedMember && (
            <section id="team-detail" className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div key={selectedMember.name} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center animate-fade-in-up">
                        <div className="relative aspect-square md:aspect-[4/5] w-full max-w-md mx-auto">
                            <Image 
                                src={selectedMember.imageUrl} 
                                alt={selectedMember.name} 
                                fill
                                className="object-cover rounded-3xl shadow-2xl"
                            />
                        </div>
                        <div className="text-left md:row-start-auto row-start-1">
                            <ArrowBadge href="#" text="Specialist" variant="black" className="mb-4" />
                            <h3 className="text-3xl lg:text-4xl font-bold font-headline text-foreground">{selectedMember.name}</h3>
                            <p className="text-foreground/80 mt-1">{selectedMember.role}</p>
                            <p className="text-foreground/70 mt-4 max-w-lg">{selectedMember.bio}</p>
                            
                            <div className="mt-8 flex items-center gap-4">
                                <Button asChild size="lg" variant="zinc">
                                    <Link href="/contact">
                                        Contact <ArrowRight className="ml-2"/>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )}
    </div>
    </>
  );
}
