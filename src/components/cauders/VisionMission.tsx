
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollFadeIn from "./ScrollFadeIn";
import BlurCircle from "./BlurCircle";
import ArrowBadge from "./ArrowBadge";

const VisionIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="hsl(var(--zinc))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="hsl(var(--zinc))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6.34315V3" stroke="hsl(var(--zinc))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.6569 6.34315L19.7782 4.22183" stroke="hsl(var(--zinc))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.6569 17.6569L19.7782 19.7782" stroke="hsl(var(--zinc))" strokeWidth="1.fs" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 17.6569V21" stroke="hsl(var(--zinc))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.34315 17.6569L4.22183 19.7782" stroke="hsl(var(--zinc))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.34315 6.34315L4.22183 4.22183" stroke="hsl(var(--zinc))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 12H6.34315" stroke="hsl(var(--zinc))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12H17.6569" stroke="hsl(var(--zinc))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const MissionIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V3C20 3 19 4 16 4C13 4 11 2 8 2C5 2 4 3 4 3V15Z" stroke="hsl(var(--zinc))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 22V15" stroke="hsl(var(--zinc))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

export default function VisionMission() {
    return (
        <section className="py-16 lg:py-24 relative">
             <BlurCircle className="w-96 h-96 top-0 -right-48" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-8 items-start">
                    <div className="md:col-span-7">
                        <ScrollFadeIn>
                            <div className="max-w-xl">
                                <ArrowBadge href="/about" text="About Us" variant="black" />
                                <p className="text-2xl lg:text-3xl font-medium mt-4 text-foreground">
                                    Cauders was founded to make digital innovation accessible, turning complex challenges into elegant, high-performance solutions.
                                </p>
                            </div>
                        </ScrollFadeIn>
                    </div>

                    <div className="md:col-span-9 md:col-start-4 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                      <ScrollFadeIn delay={200}>
                           
                              <Card className="h-full bg-zinc border-0 flex flex-col hover:-translate-y-2 transition-transform duration-300 group p-4 md:p-6 text-left rounded-2xl shadow-smooth-lift">
                                  <CardHeader className="p-0 flex-row justify-start">
                                      <div className="flex-shrink-0 bg-white rounded-full p-2 md:p-3 border border-white/20 group-hover:bg-white/90 transition-colors w-fit">
                                          <VisionIcon />
                                      </div>
                                  </CardHeader>
                                  <CardContent className="flex-grow p-0 mt-4">
                                      <CardTitle className="text-lg md:text-xl lg:text-2xl font-medium font-headline text-white">Vision</CardTitle>
                                      <p className="text-xs text-white mt-2">
                                          To become a globally trusted partner in digital innovation, known for transforming visionary ideas into tangible, high-impact realities.
                                      </p>
                                  </CardContent>
                              </Card>
                      </ScrollFadeIn>
                      <ScrollFadeIn delay={300}>
                              <Card className="h-full bg-zinc border-0 flex flex-col hover:-translate-y-2 transition-transform duration-300 group p-4 md:p-6 text-left rounded-2xl shadow-smooth-lift">
                                  <CardHeader className="p-0 flex-row justify-start">
                                      <div className="flex-shrink-0 bg-white rounded-full p-2 md:p-3 border border-white/20 group-hover:bg-white/90 transition-colors w-fit">
                                         <MissionIcon />
                                      </div>
                                  </CardHeader>
                                  <CardContent className="flex-grow p-0 mt-4">
                                      <CardTitle className="text-lg md:text-xl lg:text-2xl font-medium font-headline text-white">Mission</CardTitle>
                                      <p className="text-xs text-white mt-2">
                                          To craft exceptional digital solutions that empower businesses, drive growth, and deliver an unparalleled user experience through expertise and collaboration.
                                      </p>
                                  </CardContent>
                              </Card>
                      </ScrollFadeIn>
                    </div>
                </div>
            </div>
        </section>
    )
}
