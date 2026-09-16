const fs = require('fs');

const content = `import { Industry } from '@/lib/data';
import { DetailedIndustryData } from '@/lib/industry-details';
import Image from 'next/image';
import StandardizedHeading from './StandardizedHeading';
import ScrollFadeIn from './ScrollFadeIn';
import SectionHeader from './SectionHeader';
import FAQPreview from './FAQPreview';
import HowWeDoIt from './HowWeDoIt';
import GetAQuote from './GetAQuote';
import * as LucideIcons from 'lucide-react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface IndustryPageProps {
  industry: Industry;
  detailedData: DetailedIndustryData;
}

const splitForGradient = (text: string, words: number = 2) => {
  if (!text) return [];
  return [{ text, gradientLastWords: words }];
};

export default function IndustryPage({ industry, detailedData }: IndustryPageProps) {
  const Icon = industry.icon;

  return (
    <div className="pt-24 md:pt-32 bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 flex items-center justify-center">
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
            <Image
              src="/images/background/overlay-bg-3.svg"
              alt="background overlay"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
            <Image
              src="/images/background/overlay-bg-2.svg"
              alt="background overlay"
              width={500}
              height={500}
              className="w-1/2 h-auto absolute -top-48 -left-48 object-cover opacity-60"
            />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="w-20 h-20 rounded-2xl bg-zinc border border-primary/20 flex items-center justify-center mb-8 shadow-smooth-lift">
               <Icon className="w-10 h-10 text-primary" />
            </div>
            <StandardizedHeading lines={[{ text: detailedData.hero.title }]} />
            <p className="mt-6 text-base md:text-lg text-foreground max-w-2xl mx-auto font-light leading-relaxed">
              {detailedData.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-accent/30 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <ScrollFadeIn>
            <StandardizedHeading lines={splitForGradient(detailedData.overview.title, 2)} className="mb-6" />
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-light">
              {detailedData.overview.description}
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Custom Services & SubServices */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16">
            <SectionHeader 
               badgeText="Our Services"
               badgeHref="#services"
               headingLines={splitForGradient(detailedData.customServicesIntro.title, 2)}
               description={detailedData.customServicesIntro.description}
            />
          </div>

          <div className="space-y-24">
            {detailedData.subServices.map((sub, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                <ScrollFadeIn delay={0.1}>
                  <div className="sticky top-32">
                    <h3 className="text-2xl md:text-3xl font-headline font-medium text-foreground mb-6">
                      {sub.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed mb-8">
                      {sub.description}
                    </p>
                  </div>
                </ScrollFadeIn>
                <ScrollFadeIn delay={0.2}>
                  <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-10 shadow-smooth-lift">
                    <ul className="space-y-4">
                      {sub.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 group">
                           <div className="shrink-0 mt-1">
                              <CheckCircle2 className="w-5 h-5 text-primary group-hover:text-primary/80 transition-colors" />
                           </div>
                           <span className="text-foreground/90 font-medium leading-relaxed">{item}</span>
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

      {/* How We Deliver / Why Choose Us */}
      <section className="py-24 md:py-32 bg-zinc text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16 text-left">
            <StandardizedHeading lines={splitForGradient(detailedData.whyChooseUs.title, 2)} gradientType="light" />
            <p className="text-white/80 mt-6 text-lg font-light leading-relaxed">
              {detailedData.whyChooseUs.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedData.whyChooseUs.items.map((item, index) => {
              const ItemIcon = item.icon ? (LucideIcons as any)[item.icon] : CheckCircle2;
              return (
                <ScrollFadeIn key={index} delay={index * 0.1}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                      <ItemIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-medium mb-3">{item.title}</h4>
                    <p className="text-white/70 leading-relaxed text-sm">{item.description}</p>
                  </div>
                </ScrollFadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl mb-16 mx-auto text-center">
            <StandardizedHeading lines={splitForGradient(detailedData.partnership.title, 2)} />
            <p className="text-foreground/80 mt-6 text-lg font-light leading-relaxed">
              {detailedData.partnership.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedData.partnership.items.map((item, index) => {
              const ItemIcon = item.icon ? (LucideIcons as any)[item.icon] : CheckCircle2;
              return (
                <ScrollFadeIn key={index} delay={index * 0.1}>
                  <div className="h-full bg-card rounded-2xl p-8 border border-border/50 shadow-smooth-lift hover:-translate-y-1 transition-transform">
                    <ItemIcon className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
                    <h4 className="text-xl font-headline font-medium text-foreground mb-4">{item.title}</h4>
                    <p className="text-foreground/80 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </ScrollFadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industry Revolution & Challenges */}
      <section className="py-24 md:py-32 bg-accent/30 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="max-w-4xl mx-auto text-center mb-24">
              <p className="text-xl md:text-2xl font-light text-foreground/90 leading-relaxed italic">
                "{detailedData.industryRevolution}"
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="sticky top-32">
              <StandardizedHeading lines={splitForGradient(detailedData.challenges.title, 2)} />
              <p className="mt-6 text-lg text-foreground/80 leading-relaxed font-light">
                {detailedData.challenges.intro}
              </p>
            </div>

            <div className="space-y-6">
              {detailedData.challenges.items.map((challenge, idx) => {
                const ChalIcon = challenge.icon ? (LucideIcons as any)[challenge.icon] : CheckCircle2;
                return (
                  <ScrollFadeIn key={idx} delay={idx * 0.1}>
                    <div className="flex gap-6 bg-card p-6 md:p-8 rounded-2xl border border-border/50 shadow-smooth-lift">
                      <div className="shrink-0 w-12 h-12 bg-zinc rounded-full flex items-center justify-center">
                        <ChalIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-foreground mb-2">{challenge.title}</h4>
                        <p className="text-foreground/80 leading-relaxed text-sm md:text-base">{challenge.description}</p>
                      </div>
                    </div>
                  </ScrollFadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Services Built for Industry */}
      <section className="py-24 md:py-32 relative">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-24">
              <div className="max-w-3xl mb-12">
                 <StandardizedHeading lines={splitForGradient(detailedData.expertise.title, 2)} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {detailedData.expertise.items.map((exp, idx) => {
                    const ExpIcon = exp.icon ? (LucideIcons as any)[exp.icon] : CheckCircle2;
                    return (
                      <ScrollFadeIn key={idx} delay={idx * 0.1}>
                        <div className="bg-card border border-border/50 p-8 rounded-2xl h-full shadow-smooth-lift">
                          <ExpIcon className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
                          <h4 className="text-lg font-medium text-foreground mb-3">{exp.title}</h4>
                          <p className="text-foreground/70 text-sm leading-relaxed">{exp.description}</p>
                        </div>
                      </ScrollFadeIn>
                    )
                 })}
              </div>
            </div>

            <div>
              <div className="max-w-3xl mb-12 text-center mx-auto">
                 <StandardizedHeading lines={splitForGradient(detailedData.servicesBuiltForIndustry.title, 2)} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {detailedData.servicesBuiltForIndustry.items.map((svc, idx) => {
                    const SvcIcon = svc.icon ? (LucideIcons as any)[svc.icon] : CheckCircle2;
                    return (
                      <ScrollFadeIn key={idx} delay={idx * 0.1}>
                        <div className="bg-card p-8 md:p-10 rounded-3xl border border-border/50 shadow-smooth-lift h-full flex flex-col justify-between group hover:-translate-y-1 transition-transform">
                          <div>
                            <SvcIcon className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
                            <h4 className="text-2xl font-headline font-medium text-foreground mb-4">{svc.title}</h4>
                            <p className="text-foreground/80 leading-relaxed mb-8">{svc.description}</p>
                          </div>
                          <Link href="/contact" className="inline-flex items-center text-primary font-medium group-hover:underline">
                            Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </div>
                      </ScrollFadeIn>
                    )
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
      <GetAQuote />
    </div>
  );
}
`;

fs.writeFileSync('src/components/cauders/IndustryPage.tsx', content);
console.log('Successfully wrote IndustryPage.tsx!');
