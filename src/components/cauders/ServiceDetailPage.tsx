import React from 'react';
import Image from 'next/image';
import { DetailedServiceData } from '@/lib/service-details';
import ScrollFadeIn from './ScrollFadeIn';
import LogoLoop from './LogoLoop';
import { CheckCircle2 } from 'lucide-react';
import { industries as mainIndustries } from '@/lib/data';
import ArrowBadge from './ArrowBadge';
import ContainerCard from './ContainerCard';
import BlurCircle from './BlurCircle';
import ImageCard from './ImageCard';
import { typography } from '@/lib/typography';
import ProcessHoverSection from './ProcessHoverSection';
import SectionHeader from './SectionHeader';
import SplitSectionHeader from './SplitSectionHeader';
import ImageContainerHero from './ImageContainerHero';
import FAQPreview from './FAQPreview';
import GetAQuote from './GetAQuote';
import IndustriesSection from './IndustriesSection';
import TechLogo from './TechLogo';
import { optimizeCloudinaryUrl } from '@/lib/seo';

interface ServiceDetailPageProps {
  data: DetailedServiceData;
}

const splitForGradient = (text: string) => {
  if (!text) return [];
  const words = text.split(' ');
  if (words.length <= 2) return [{ text, isGradient: true }];
  return [{ text, gradientLastWords: 2 }];
};

export default async function ServiceDetailPage({ data }: ServiceDetailPageProps) {
  if (data.slug === 'custom-software-development') {
    const { default: CustomSoftwareHero } = await import('./CustomSoftwareHero');
    return (
      <div className="selection:bg-primary/30">
        <CustomSoftwareHero />
      </div>
    );
  }

  if (data.slug === 'mobile-app-development') {
    const { default: MobileAppDevelopment } = await import('./MobileAppDevelopment');
    return (
      <div className="selection:bg-primary/30">
        <MobileAppDevelopment />
      </div>
    );
  }

  if (data.slug === 'web-development') {
    const { default: WebApplicationDevelopment } = await import('./WebApplicationDevelopment');
    return (
      <div className="selection:bg-primary/30">
        <WebApplicationDevelopment />
      </div>
    );
  }

  if (data.slug === 'saas-development') {
    const { default: SaaSDevelopment } = await import('./SaaSDevelopment');
    return (
      <div className="selection:bg-primary/30">
        <SaaSDevelopment />
      </div>
    );
  }

  if (data.slug === 'cloud-transformation' || data.slug === 'platform-modernization') {
    const { default: PlatformModernization } = await import('./PlatformModernization');
    return (
      <div className="selection:bg-primary/30">
        <PlatformModernization />
      </div>
    );
  }

  if (data.slug === 'staff-augmentation-offshoring' || data.slug === 'staff-augmentation') {
    const { default: DedicatedTeams } = await import('./DedicatedTeams');
    return (
      <div className="selection:bg-primary/30">
        <DedicatedTeams />
      </div>
    );
  }

  if (data.slug === 'generative-ai-solutions' || data.slug === 'generative-ai-llms') {
    const { default: GenerativeAiPage } = await import('./GenerativeAiPage');
    return (
      <div className="selection:bg-primary/30">
        <GenerativeAiPage />
      </div>
    );
  }

  if (data.slug === 'autonomous-ai-agents') {
    const { default: AiAgentsPage } = await import('./AiAgentsPage');
    return (
      <div className="selection:bg-primary/30">
        <AiAgentsPage />
      </div>
    );
  }

  if (data.slug === 'custom-ai-development') {
    const { default: CustomAiPage } = await import('./CustomAiPage');
    return (
      <div className="selection:bg-primary/30">
        <CustomAiPage />
      </div>
    );
  }

  if (data.slug === 'automation-custom-applications') {
    const { default: ProcessAutomationPage } = await import('./ProcessAutomationPage');
    return (
      <div className="selection:bg-primary/30">
        <ProcessAutomationPage />
      </div>
    );
  }

  if (data.slug === 'data-modernization-analytics') {
    const { default: DataEngineeringPage } = await import('./DataEngineeringPage');
    return (
      <div className="selection:bg-primary/30">
        <DataEngineeringPage />
      </div>
    );
  }

  if (data.slug === 'ai-roadmapping-consulting') {
    const { default: AiStrategyPage } = await import('./AiStrategyPage');
    return (
      <div className="selection:bg-primary/30">
        <AiStrategyPage />
      </div>
    );
  }

  const heroImageUrl = optimizeCloudinaryUrl(
    data.hero.imageUrl || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1920',
    1920
  );
  const overviewImageUrl = optimizeCloudinaryUrl(
    data.overview?.imageUrl || 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200',
    1200
  );

  return (
    <div className="selection:bg-primary/30">
      {/* 1. Hero Section */}
      <ImageContainerHero
        imageUrl={heroImageUrl}
        imageAlt={data.hero.title}
        badgeText={data.hero.badge}
        badgeHref="#overview"
        headingLines={data.hero.subtitle ? [data.hero.title, data.hero.subtitle] : [data.hero.title]}
        description={data.hero.description}
        ctaText="Explore Capabilities"
        ctaHref="#capabilities"
      />

      {/* 2. Floating "Vision" Overview */}
      <section id="overview" className="py-16 md:py-20 bg-transparent relative z-20">
        <BlurCircle className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] top-[100%] -translate-y-[25%] left-[-20rem]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 relative z-10">
              <ScrollFadeIn>
                <div className="flex flex-col items-start mb-4">
                  <ArrowBadge href="#overview" text="Overview" variant="black" className="mb-4" />
                  {data.overview.heading && (
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium font-headline tracking-tight text-foreground">
                      {data.overview.heading}
                    </h2>
                  )}
                </div>
                <div className="space-y-4 mt-4">
                  {data.overview.paragraphs.map((paragraph, idx) => (
                    <p key={idx} className="text-black font-normal text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {data.overview.points && data.overview.points.length > 0 && (
                  <ul className="mt-6 space-y-3.5 max-w-[85%]">
                    {data.overview.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1 text-zinc" fill="currentColor" stroke="white" />
                        <div className="flex flex-col gap-1">
                          <h3 className="text-lg md:text-xl font-bold text-black">{point.title}</h3>
                          <p className="text-base text-black font-normal leading-relaxed">{point.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </ScrollFadeIn>
            </div>
            <div className="lg:col-span-6 relative">
              <ScrollFadeIn direction="left" delay={200}>
                <div className="relative aspect-square md:aspect-[4/3] w-full rounded-3xl overflow-hidden border border-primary/10">
                  <Image
                    src={overviewImageUrl}
                    alt={data.overview.heading || data.hero.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  {/* Inner glassmorphism glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Capabilities / Offerings */}
      <section id="capabilities" className="py-16 md:py-20 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            headingLines={[{ text: data.capabilitiesTitle, gradientLastWords: 2 }]}
            description={data.capabilitiesDescription}
            align="center"
            className="mb-16"
          />

          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {data.capabilities.map((capability, idx) => (
              <ScrollFadeIn key={idx} delay={idx * 50} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-1.125rem)]">
                <ImageCard
                  imageUrl={optimizeCloudinaryUrl(
                    capability.imageUrl || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600',
                    600
                  )}
                  altText={capability.title}
                  heading={capability.title}
                  subheading="Talk to an Expert"
                  description={capability.description}
                  href="/contact"
                  className="aspect-[4/5] sm:aspect-square"
                />
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Deep-Dive Industries Grid */}
      <IndustriesSection
        title={data.industriesTitle}
        description={data.industriesDescription}
        ctaText={data.industriesCtaText}
        ctaLink={data.industriesCtaLink}
        industries={
          data.industries
            .map((ind) => {
              const i = mainIndustries.find((item) => item.slug === ind.slug);
              return i ? { slug: i.slug, title: i.title, heroDescription: i.heroDescription } : null;
            })
            .filter(Boolean) as { slug: string; title: string; heroDescription: string }[]
        }
      />

      {/* 5. Tech Stack Banner */}
      {data.techStack && data.techStack.length > 0 && (
        <section className="py-16 md:py-20 relative z-10 bg-transparent">
          <BlurCircle className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] top-0 -translate-y-[25%] right-[-20rem]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[3rem] bg-gradient-container text-white py-16 px-4 md:px-12 overflow-hidden">
              <SectionHeader
                headingLines={[{ text: data.techStackTitle, gradientType: 'light' }]}
                description="We leverage a modern and robust technology stack to build scalable, high-performance, and secure digital solutions."
                align="center"
                theme="dark"
                className="mb-16 relative z-10"
              />
              <div className="relative z-10 -mx-4 md:-mx-12">
                <LogoLoop
                  speed={80}
                  direction="left"
                  pauseOnHover={false}
                  gap={40}
                  logoHeight={60}
                  fadeOut={true}
                  fadeOutColor="transparent"
                  logos={data.techStack.map((tech) => ({
                    node: <TechLogo name={tech.name} logoUrl={tech.logoUrl} />,
                  }))}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Process / Capabilities Flow */}
      <ProcessHoverSection title={data.processTitle} steps={data.processSteps} />

      <section className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* 7. Why Choose Us Section */}
          {data.whyUsTitle && data.whyUsCards && data.whyUsCards.length > 0 && (
            <div id="why-us" className="py-16 md:py-20">
              <SplitSectionHeader
                badgeText="Why Choose Cauders"
                badgeHref="#why-us"
                headingLines={splitForGradient(data.whyUsTitle)}
                description={data.whyUsDescription}
                ctaText={data.whyUsCtaText}
                ctaLink={data.whyUsCtaLink}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {data.whyUsCards.map((card, index) => (
                  <ScrollFadeIn key={index} delay={index * 0.1} className="h-full">
                    <ContainerCard hoverEffect className="h-full min-h-[300px] flex flex-col justify-center group p-6 md:p-8 text-left">
                      <div className="flex-shrink-0 bg-zinc rounded-full p-3 md:p-4 border border-primary/20 group-hover:bg-zinc/90 transition-colors w-fit mb-10">
                        {card.imageUrl ? (
                          <div className="relative w-8 h-8 md:w-10 md:h-10">
                            <Image
                              src={optimizeCloudinaryUrl(card.imageUrl, 128)}
                              fill
                              sizes="40px"
                              alt={card.title}
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                        )}
                      </div>

                      <h3 className="text-heading-card font-medium font-headline text-foreground mb-3">
                        {card.title}
                      </h3>
                      <p className={`${typography.bodyBase} text-foreground`}>{card.description}</p>
                    </ContainerCard>
                  </ScrollFadeIn>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      {data.faqs && data.faqs.length > 0 && (
        <div id="faq">
          <FAQPreview faqs={data.faqs} badgeText="FAQ" badgeHref="#faq" className="py-16 md:py-20" />
        </div>
      )}

      {/* CTA Section */}
      <GetAQuote title={data.ctaHeading || "Let's Get To Work"} />
    </div>
  );
}
