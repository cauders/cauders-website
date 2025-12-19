
'use client';

import { Handshake, ShieldCheck, Zap, Lightbulb, Star, Award } from "lucide-react";
import ArrowBadge from "./ArrowBadge";
import StandardizedHeading from "./StandardizedHeading";
import ScrollFadeIn from "./ScrollFadeIn";
import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";
import { Card } from "../ui/card";
import BlurCircle from "./BlurCircle";
import { useState, useRef } from "react";

const principles = [
    {
        icon: Handshake,
        title: "Client-Centric",
        description: "Your success drives us. We build lasting partnerships through collaboration and understanding.",
    },
    {
        icon: Award,
        title: "Quality",
        description: "Excellence is our standard. We deliver robust, scalable, and polished solutions.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "We are forward-thinkers, using cutting-edge technology to build future-ready digital products.",
    },
    {
        icon: ShieldCheck,
        title: "Integrity",
        description: "We operate with transparency and honesty, with security foundational to all we do.",
    },
];

const PlayButton = ({ onPlay }: { onPlay: () => void }) => (
    <div 
        className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300 cursor-pointer"
        onClick={onPlay}
    >
        <div className="relative w-24 h-24 md:w-32 md:h-32 text-white">
            <svg viewBox="0 0 100 100" className="absolute inset-0 animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}>
                <defs>
                    <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text dy="5">
                    <textPath xlinkHref="#circle" className="text-[9px] uppercase tracking-widest font-mono">
                        Play Video • Play Video • Play Video •
                    </textPath>
                </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-12 h-12 md:w-16 md:h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8 text-white ml-1">
                        <path d="M8 5v14l11-7z" fill="currentColor" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
);


export default function Principles() {
  const { principles: principlesImage } = placeholderImages;
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
        setIsPlaying(true);
        videoRef.current.play();
    }
  }

  return (
    <section className="py-16 md:py-20 lg:py-32 relative overflow-hidden">
      <BlurCircle className="w-96 h-96 top-1/2 -translate-y-1/2 -left-48" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          {/* Left Column */}
          <div className="flex flex-col justify-between">
            <ScrollFadeIn>
              <div className="flex flex-col items-start gap-2">
                <ArrowBadge href="#" text="Core Values" variant="black" />
                <StandardizedHeading lines={["The <span class='bg-gradient-text text-transparent bg-clip-text'>Values</span> That Define Us"]} />
              </div>
            </ScrollFadeIn>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-8 lg:mt-0">
                {principles.map((principle, index) => (
                    <ScrollFadeIn key={principle.title} delay={index * 100}>
                        <Card className="bg-card p-4 md:p-6 rounded-2xl shadow-smooth-lift h-full border-0">
                           <div className="bg-zinc text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-4">
                             <principle.icon className="w-5 h-5 md:w-6 md:h-6" />
                           </div>
                           <h3 className="font-semibold text-base md:text-lg text-foreground font-headline">{principle.title}</h3>
                           <p className="text-xs text-foreground/70 mt-1">{principle.description}</p>
                        </Card>
                    </ScrollFadeIn>
                ))}
            </div>
          </div>

          {/* Right Column */}
          <ScrollFadeIn direction="right">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden group shadow-lg">
                {!isPlaying && (
                     <Image
                        src={principlesImage.imageUrl}
                        alt="Modern architecture representing solid principles"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={principlesImage.aiHint}
                    />
                )}
                <video
                    ref={videoRef}
                    src="/video/Logo_Video_Demonstrating_Core_Values.mp4"
                    className="object-cover w-full h-full transition-transform duration-500"
                    loop
                    playsInline
                    controls={isPlaying}
                />
                {!isPlaying && <PlayButton onPlay={handlePlay} />}
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
