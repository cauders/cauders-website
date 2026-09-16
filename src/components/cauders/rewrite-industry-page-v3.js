const fs = require('fs');

const content = `import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Industry } from '@/lib/data';
import { DetailedIndustryData } from '@/lib/industry-details';
import StandardizedHeading from './StandardizedHeading';
import ScrollFadeIn from './ScrollFadeIn';
import SectionHeader from './SectionHeader';
import FAQPreview from './FAQPreview';
import HowWeDoIt from './HowWeDoIt';
import GetAQuote from './GetAQuote';
import ImageContainerHero from './ImageContainerHero';
import ArrowBadge from './ArrowBadge';
import ImageCard from './ImageCard';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import placeholderImages from '@/lib/placeholder-images.json';

interface IndustryPageProps {
  industry: Industry;
  detailedData: DetailedIndustryData;
}

const splitForGradient = (text: string) => {
  if (!text) return [];
  const words = text.split(' ');
  if (words.length <= 2) return [{ text, isGradient: true }];
  return [{ text, gradientLastWords: 2 }];
};

export default function IndustryPage({ industry, detailedData }: IndustryPageProps) {
  return (
    <div className="selection:bg-primary/30">
      {/* 1. Centered "Command Center" Hero */}
      <ImageContainerHero 
        imageUrl={placeholderImages.hero.main.imageUrl}
        imageAlt={detailedData.hero.title}
        badgeText="Industry Focus"
        badgeHref="#overview"
        headingLines={detailedData.hero.subtitle ? [detailedData.hero.title, detailedData.hero.subtitle] : [detailedData.hero.title]}
        description=""
        ctaText="Consult an Expert"
        ctaHref="#contact"
      />

      {/* 2. Floating "Vision" Overview */}
      <section id="overview" className="py-24 md:py-32 bg-transparent relative z-20">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
               <div className="lg:col-span-6">
                  <ScrollFadeIn>
                     <div className="flex flex-col items-start mb-6">
                        <ArrowBadge href="#overview" text="Overview" variant="black" className="mb-4" />
                     </div>
                     <StandardizedHeading lines={splitForGradient(detailedData.overview.title)} className="mb-6" />
                     <div className="space-y-6 mt-6">
                        <p className="text-foreground font-light leading-relaxed text-lg">
                          {detailedData.overview.description}
                        </p>
                     </div>
                  </ScrollFadeIn>
               </div>
               <div className="lg:col-span-6 relative">
                  <ScrollFadeIn direction="left" delay={200}>
                     <div className="relative aspect-square md:aspect-[4/3] w-full rounded-3xl overflow-hidden border border-primary/10">
                        <Image 
                           src={placeholderImages.team.meeting.imageUrl}
                           alt={detailedData.overview.title}
                           fill
                           className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent pointer-events-none" />
                     </div>
                  </ScrollFadeIn>
               </div>
            </div>
         </div>
      </section>

      {/* 3. Core Capabilities (Mapped from servicesBuiltForIndustry to match ServiceDetailPage's ImageCards) */}
      <section id="capabilities" className="py-24 md:py-32 bg-transparent">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center mb-16 text-center">
               <ScrollFadeIn>
                  <ArrowBadge href="#capabilities" text="Our Capabilities" variant="black" className="mb-4" />
               </ScrollFadeIn>
               <ScrollFadeIn delay={100}>
                  <StandardizedHeading lines={splitForGradient(detailedData.servicesBuiltForIndustry.title)} />
               </ScrollFadeIn>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
               {detailedData.servicesBuiltForIndustry.items.map((svc, idx) => (
                  <ScrollFadeIn key={idx} delay={idx * 50} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-1.125rem)]">
                     <ImageCard 
                        imageUrl={placeholderImages.services.aiChatbot.imageUrl}
                        altText={svc.title}
                        heading={svc.title}
                        subheading="Learn More"
                        description={svc.description}
                        href="#"
                        className="aspect-[4/5] sm:aspect-square"
                     />
                  </ScrollFadeIn>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Sub Services List (Extra Section) */}
      <section className="py-24 md:py-32 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
             badgeText="Specialized Services"
             badgeHref="#specialized"
             headingLines={splitForGradient(detailedData.customServicesIntro.title)}
             description={detailedData.customServicesIntro.description}
          />
          <div className="space-y-24 mt-16">
            {detailedData.subServices.map((sub, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                <ScrollFadeIn delay={0.1}>
                  <div className="sticky top-32">
                    <h3 className="text-2xl md:text-3xl font-headline font-medium text-foreground mb-6">
                      {sub.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed text-lg font-light">
                      {sub.description}
                    </p>
                  </div>
                </ScrollFadeIn>
                <ScrollFadeIn delay={0.2}>
                  <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-smooth-lift">
                    <ul className="space-y-4">
                      {sub.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                           <div className="shrink-0 mt-1">
                              <CheckCircle2 className="w-5 h-5 text-primary" />
                           </div>
                           <span className="text-foreground font-medium leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollFadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Challenges & Expertise (Extra Section) */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <ScrollFadeIn>
              <p className="text-xl md:text-2xl font-light text-foreground/90 leading-relaxed italic border-l-4 border-primary pl-6 text-left">
                "{detailedData.industryRevolution}"
              </p>
            </ScrollFadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5 sticky top-32">
               <SectionHeader 
                 badgeText="Challenges"
                 badgeHref="#challenges"
                 headingLines={splitForGradient(detailedData.challenges.title)}
                 description={detailedData.challenges.intro}
              />
               <div className="mt-8 space-y-4">
                 {detailedData.challenges.items.map((challenge, idx) => {
                   const ChalIcon = challenge.icon ? (LucideIcons as any)[challenge.icon] : CheckCircle2;
                   return (
                     <ScrollFadeIn key={idx} delay={idx * 0.1}>
                       <div className="flex gap-4 p-4 rounded-xl hover:bg-accent/50 transition-colors border border-transparent hover:border-border/50">
                         <ChalIcon className="w-6 h-6 text-primary shrink-0 mt-1" />
                         <div>
                           <h4 className="font-medium text-foreground mb-1">{challenge.title}</h4>
                           <p className="text-foreground/70 text-sm leading-relaxed">{challenge.description}</p>
                         </div>
                       </div>
                     </ScrollFadeIn>
                   );
                 })}
               </div>
            </div>

            <div className="lg:col-span-7">
               <div className="mb-8">
                  <h3 className="text-2xl font-headline font-medium text-foreground">{detailedData.expertise.title}</h3>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {detailedData.expertise.items.map((exp, idx) => {
                    const ExpIcon = exp.icon ? (LucideIcons as any)[exp.icon] : CheckCircle2;
                    return (
                      <ScrollFadeIn key={idx} delay={idx * 0.1}>
                        <div className="bg-card border border-border/50 p-6 md:p-8 rounded-2xl h-full shadow-smooth-lift flex flex-col items-start hover:-translate-y-1 transition-transform">
                          <ExpIcon className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
                          <h4 className="text-lg font-medium text-foreground mb-3">{exp.title}</h4>
                          <p className="text-foreground/70 text-sm leading-relaxed">{exp.description}</p>
                        </div>
                      </ScrollFadeIn>
                    )
                 })}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us Section (Matches Services) */}
      <section className="relative">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-24 md:py-32">
               <SectionHeader 
                  badgeText="Why Cauders"
                  badgeHref="#why-us"
                  headingLines={splitForGradient(detailedData.whyChooseUs.title)}
                  description={detailedData.whyChooseUs.intro}
               />

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                  {detailedData.whyChooseUs.items.map((card, index) => {
                     const Icon = card.icon ? (LucideIcons as any)[card.icon] : LucideIcons.CheckCircle;
                     return (
                        <ScrollFadeIn key={index} delay={index * 0.1} className="h-full">
                           <div className="h-full bg-card border-0 flex flex-col hover:-translate-y-2 transition-transform duration-300 group p-6 md:p-8 text-left rounded-2xl shadow-smooth-lift">
                              <div className="flex-shrink-0 bg-zinc rounded-full p-3 md:p-4 border border-primary/20 group-hover:bg-zinc/90 transition-colors w-fit mb-6">
                                 <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                              </div>
                              <h3 className="text-xl md:text-2xl font-medium font-headline text-foreground mb-3">
                                 {card.title}
                              </h3>
                              <p className="text-sm md:text-base text-foreground leading-relaxed">
                                 {card.description}
                              </p>
                           </div>
                        </ScrollFadeIn>
                     );
                  })}
               </div>
            </div>
         </div>
      </section>

      {/* 7. Partnership Benefits (Matches Services Why Choose Us layout) */}
      <section className="relative">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-24 md:py-32">
               <SectionHeader 
                  badgeText="Partnership"
                  badgeHref="#partnership"
                  headingLines={splitForGradient(detailedData.partnership.title)}
                  description={detailedData.partnership.intro}
               />

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                  {detailedData.partnership.items.map((card, index) => {
                     const Icon = card.icon ? (LucideIcons as any)[card.icon] : LucideIcons.CheckCircle;
                     return (
                        <ScrollFadeIn key={index} delay={index * 0.1} className="h-full">
                           <div className="h-full bg-card border-0 flex flex-col hover:-translate-y-2 transition-transform duration-300 group p-6 md:p-8 text-left rounded-2xl shadow-smooth-lift">
                              <div className="flex-shrink-0 bg-primary/10 rounded-full p-3 md:p-4 border border-primary/20 transition-colors w-fit mb-6">
                                 <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" strokeWidth={1.5} />
                              </div>
                              <h3 className="text-xl md:text-2xl font-medium font-headline text-foreground mb-3">
                                 {card.title}
                              </h3>
                              <p className="text-sm md:text-base text-foreground leading-relaxed">
                                 {card.description}
                              </p>
                           </div>
                        </ScrollFadeIn>
                     );
                  })}
               </div>
            </div>
         </div>
      </section>

      {/* How We Do It Standard Section */}
      <HowWeDoIt />

      {/* FAQ Section */}
      {detailedData.faqs && detailedData.faqs.length > 0 && (
          <FAQPreview 
              faqs={detailedData.faqs}
              titleLines={[
                  { text: "Your Questions About" },
                  { text: industry.title, gradientLastWords: 2 }
              ]}
              badgeText="FAQ"
              className="py-16 md:py-24"
          />
      )}

      {/* CTA Section */}
      <GetAQuote 
        title="Let's Get to Work"
      />
    </div>
  );
}
`;

fs.writeFileSync('src/components/cauders/IndustryPage.tsx', content);
console.log('Successfully rewrote IndustryPage to strictly match Services layout!');
