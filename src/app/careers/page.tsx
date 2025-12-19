
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';
import { ArrowRight, Briefcase, Coffee, Puzzle, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import StandardizedHeading from '@/components/cauders/StandardizedHeading';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import GradientContainer from '@/components/cauders/GradientContainer';
import GetAQuote from '@/components/cauders/GetAQuote';
import ArrowBadge from '@/components/cauders/ArrowBadge';
import BlurCircle from '@/components/cauders/BlurCircle';
import placeholderImages from '@/lib/placeholder-images.json';
import { jobOpenings } from '@/lib/data';

const benefits = [
    {
        icon: TrendingUp,
        title: "Meaningful Work",
        description: "Contribute to projects that have a real impact on our clients' success and shape the future of digital interaction."
    },
    {
        icon: Briefcase,
        title: "Continuous Learning",
        description: "We support your growth with access to the latest technologies, courses, and conferences."
    },
    {
        icon: Puzzle,
        title: "Flexible Culture",
        description: "Enjoy a healthy work-life balance with flexible hours and remote work opportunities."
    }
];

const handleScrollToContent = () => {
    const contentElement = document.getElementById('careers-content');
    if (contentElement) {
        contentElement.scrollIntoView({ behavior: 'smooth' });
    }
};

export default function CareersPage() {
  return (
    <div className="text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image
                src={placeholderImages.careers.hero.imageUrl}
                alt="Modern office environment"
                fill
                className="object-cover"
                priority
                data-ai-hint={placeholderImages.careers.hero.aiHint}
           />
        </div>

        <div className="relative z-10 flex flex-col h-full items-center justify-center text-center text-white px-4">
            <div className="glass-effect rounded-3xl p-8 md:p-12 border-white/20">
                <StandardizedHeading lines={["Join Our Team"]} className="text-white" />
                <p className="mt-4 text-sm md:text-base text-white/80 max-w-2xl mx-auto">
                    At Cauders, we're not just building products; we're building the future of digital interaction. We are looking for passionate, creative, and driven individuals to join us on our journey.
                </p>
                <div className="mt-8">
                <Button onClick={handleScrollToContent} variant="zinc" size="lg">
                    View Openings
                </Button>
                </div>
            </div>
        </div>
      </section>

      <div id="careers-content">
        {/* Why Work With Us Section */}
        <section className="py-16 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollFadeIn className="text-center mb-12">
                  <ArrowBadge href="#" text="Why Join Us" variant="black" />
                  <StandardizedHeading lines={["Why Join Cauders?"]} />
                  <p className="mt-4 text-sm md:text-lg text-foreground/70 max-w-2xl mx-auto">
                      We're committed to creating an environment where our team can thrive, innovate, and do their best work. By fostering a culture of collaboration, respect, and continuous growth, we empower every member to make a meaningful impact.
                  </p>
              </ScrollFadeIn>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {benefits.map((benefit, index) => (
                      <ScrollFadeIn key={benefit.title} delay={index * 100} className="group h-full">
                          <Card className="bg-card h-full text-left border-0 flex flex-col p-6 rounded-2xl shadow-smooth-lift relative overflow-hidden md:min-h-[250px]">
                              <GradientContainer className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                              <div className="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                  <div className="bg-zinc rounded-full p-3 border border-primary/20 group-hover:bg-white transition-colors w-fit mb-4">
                                      <benefit.icon className="w-6 h-6 text-white group-hover:text-zinc" />
                                  </div>
                                </div>
                                <div>
                                  <CardTitle className="text-xl lg:text-2xl font-headline text-foreground group-hover:text-white mt-2">{benefit.title}</CardTitle>
                                  <p className="text-sm text-foreground/80 mt-2 group-hover:text-white/90">{benefit.description}</p>
                                </div>
                              </div>
                          </Card>
                      </ScrollFadeIn>
                  ))}
              </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-16 lg:py-32 relative">
          <BlurCircle className="absolute top-0 -left-32 w-96 h-96" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <ArrowBadge href="#" text="Current Openings" variant="black" />
                <StandardizedHeading lines={["Find Your Next Opportunity with Us"]} />
                <p className="mt-4 text-sm md:text-lg text-foreground/70 max-w-2xl mx-auto">
                Find your next challenge and grow with us. We're always looking for great talent.
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {jobOpenings.map((job, index) => (
                    <ScrollFadeIn key={job.title} delay={index * 100} className="group">
                        <Link href={`/careers/apply?job=${encodeURIComponent(job.title)}`} className="block">
                            <Card className="bg-card rounded-2xl transition-all duration-300 ease-out hover:border-primary hover:shadow-lg hover:shadow-primary/10 card-tilt border-0">
                                <div className="p-6">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div className="flex-grow flex items-start justify-between">
                                            <div>
                                                <CardTitle className="text-lg md:text-xl text-foreground font-headline">{job.title}</CardTitle>
                                                <CardDescription className="text-sm text-foreground/70 mt-1">{job.location} &middot; {job.type}</CardDescription>
                                            </div>
                                            <div className="md:hidden flex items-center justify-end gap-4">
                                                <div className="bg-zinc text-white rounded-full p-3 group-hover:bg-primary transition-colors">
                                                    <ArrowRight className="w-5 h-5" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-foreground/80 md:mt-0 md:max-w-md">{job.description}</p>
                                        <div className="hidden md:flex items-center justify-end gap-4">
                                            <span className="text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Apply Now</span>
                                            <div className="bg-zinc text-white rounded-full p-3 group-hover:bg-primary transition-colors">
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </ScrollFadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>
        <GetAQuote />
      </div>
    </div>
  );
}
