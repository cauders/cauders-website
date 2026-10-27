'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';
import { ArrowRight, Briefcase, Puzzle, TrendingUp, Send, FileText, UserCheck, Handshake, MapPin, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import GlassBadge from '@/components/cauders/GlassBadge';
import GradientContainer from '@/components/cauders/GradientContainer';
import SectionHeading from '@/components/cauders/SectionHeading';
import ArrowBadge from '@/components/cauders/ArrowBadge';
import BlurCircle from '@/components/cauders/BlurCircle';
import SplitButton from '@/components/cauders/SplitButton';
import AnimatedList from '@/components/cauders/AnimatedList';
import { jobOpenings } from '@/lib/data';
import InfoCard from '@/components/cauders/InfoCard';
import ImageCard from '@/components/cauders/ImageCard';
import placeholderImages from '@/lib/placeholder-images.json';
import { typography } from '@/lib/typography';

const benefits = [
  {
    icon: TrendingUp,
    title: "Meaningful Work",
    subheading: "Make a Real Impact",
    description: "Contribute to projects that have a real impact on our clients' success and shape the future of digital interaction.",
    imageUrl: placeholderImages.expertise.imageUrl
  },
  {
    icon: Briefcase,
    title: "Continuous Learning",
    subheading: "Grow With Us",
    description: "We support your growth with access to the latest technologies, courses, and conferences.",
    imageUrl: placeholderImages.innovation.imageUrl
  },
  {
    icon: Puzzle,
    title: "Flexible Culture",
    subheading: "Work-Life Balance",
    description: "Enjoy a healthy work-life balance with flexible hours and remote work opportunities.",
    imageUrl: placeholderImages.vision.imageUrl
  }
];

const hiringSteps = [
  {
    icon: Send,
    number: '01',
    title: 'Apply',
    description: 'Browse our openings and submit your application. We review every single one.',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Evaluate',
    description: 'Our team carefully matches your skills and experience with the right opportunity.',
  },
  {
    icon: UserCheck,
    number: '03',
    title: 'Connect',
    description: 'A conversational interview to understand your aspirations and showcase your potential.',
  },
  {
    icon: Handshake,
    number: '04',
    title: 'Welcome',
    description: 'A thoughtful onboarding experience to set you up for a strong start.',
  },
];

export default function CareersPageContent() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleCTASubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/careers/apply?email=${encodeURIComponent(email)}`);
  };

  return (
    <div className="text-foreground">
      {/* ===== SECTION 1: HERO (Homepage Aesthetics) ===== */}
      <section className="relative w-full h-[85vh] sm:h-[90vh] md:h-screen overflow-hidden rounded-b-3xl bg-[#011417]">
        {/* Background Image with Dark Teal overlays matching Homepage Hero */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="https://res.cloudinary.com/cauders/image/upload/v1786803238/workspace_byyhyg.png"
            alt="Cauders Careers Workspace"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#011417]/95 via-[#011417]/75 to-[#011417]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#011417] via-transparent to-[#011417]/50" />
        </div>

        {/* Content Column */}
        <div className="relative z-10 flex flex-col justify-center h-full max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full md:w-3/5 lg:w-[60%] text-left pt-16 md:pt-0">
            <div className="mb-6 md:mb-10">
              <GlassBadge text="Careers at Cauders" />
            </div>

            <h1 className="tracking-tight text-white mt-4 font-headline lg:leading-[1.1]">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] md:leading-[1.1] lg:leading-[1.1]">
                Where Ambition
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] md:leading-[1.1] lg:leading-[1.1]">
                Meets Future,
              </span>
              <span className={`block mt-2 md:mt-4 ${typography.headingMain}`}>
                <span className="text-cyan-radial bg-clip-text text-transparent block leading-tight md:leading-tight lg:leading-tight drop-shadow-sm">
                  And Opportunity Unfolds.
                </span>
              </span>
            </h1>

            <p className={`mt-6 md:mt-8 ${typography.bodyLarge} text-white w-[95%] max-w-[40rem] font-light leading-relaxed`}>
              We are shaping the future of digital platforms, AI systems, and automated workflows. We are looking for relentless builders and innovators to build it with us.
            </p>

            <div className="mt-8 md:mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="#open-positions"
                className="px-8 py-3.5 rounded-full bg-zinc-gradient text-white text-sm font-medium hover:opacity-95 transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                <span>Explore Openings</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#culture"
                className="px-8 py-3.5 rounded-full border border-white/20 hover:bg-white/10 text-white text-sm font-medium transition-colors"
              >
                Our Culture
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div id="careers-content">
        {/* ===== SECTION 2: CULTURE INTRO ===== */}
        <section id="culture" className="py-16 lg:py-24 relative">
          <BlurCircle className="w-96 h-96 top-0 -right-48" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Text */}
              <div>
                <ScrollFadeIn>
                  <ArrowBadge href="#culture" text="Life at Cauders" variant="black" className="mb-4" />
                  <SectionHeading 
                    lines={[
                      'Built for People <span class="text-cyan-gradient font-medium inline-block">Who Build</span>'
                    ]}
                    subheading="Designers, engineers, strategists, and dreamers. If you are driven by purpose and energized by innovation, you have found your people. At Cauders, every voice shapes the product, and every idea gets a seat at the table."
                  />
                  <div className="space-y-4 mt-6">
                    <p className="text-base lg:text-lg text-foreground/80 leading-relaxed font-light">
                      Whether you are a seasoned professional seeking your next defining chapter or a fresh graduate ready to make your mark, we provide the platform, mentorship, and high-trust autonomy to help you do the most meaningful work of your career.
                    </p>
                  </div>
                </ScrollFadeIn>
              </div>

              {/* Right Column: Visual */}
              <div className="lg:pl-8 xl:pl-16">
                <ScrollFadeIn delay={200}>
                  <div className="relative w-full aspect-video md:aspect-[4/3] lg:aspect-[3/2] rounded-3xl overflow-hidden shadow-2xl border border-primary/20">
                    <Image
                      src="https://res.cloudinary.com/cauders/image/upload/v1786803238/workspace_byyhyg.png"
                      alt="Life at Cauders"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#011417]/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </ScrollFadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: WHY CAUDERS (Benefits) ===== */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 md:mb-16">
              <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
                <ArrowBadge href="#open-positions" text="Our Values" variant="black" className="mb-4" />
                <SectionHeading 
                  align="center"
                  lines={[
                    'Why You Will Love <span class="text-cyan-gradient font-medium inline-block">Working Here</span>'
                  ]}
                  subheading="A culture designed around rapid growth, genuine ownership, and high-impact digital initiatives."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <ScrollFadeIn key={benefit.title} delay={index * 100} className="h-full">
                  <ImageCard
                    heading={benefit.title}
                    subheading={benefit.subheading}
                    description={benefit.description}
                    imageUrl={benefit.imageUrl}
                    altText={benefit.title}
                    href="#open-positions"
                    className="aspect-square md:aspect-[4/5]"
                    icon={<benefit.icon className="w-5 h-5 text-white" />}
                  />
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: HIRING PROCESS (Using consistent Zinc Gradient Container) ===== */}
        <section className="py-8">
          <GradientContainer className="py-16 md:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
                {/* Left Column: Text */}
                <div className="lg:pr-8">
                  <ScrollFadeIn>
                    <div className="flex flex-col items-start gap-4">
                      <ArrowBadge href="#open-positions" text="How It Works" variant="white" />
                      <SectionHeading 
                        lines={['Your Path to Cauders']} 
                        headingClassName="!text-white"
                        subheadingClassName="!text-white/90"
                        subheading="A streamlined, transparent process designed with respect for your time. From first application to your first sprint, we keep communication direct and prompt."
                      />
                    </div>
                  </ScrollFadeIn>
                </div>

                {/* Right Column: Step Cards */}
                <div>
                  <ScrollFadeIn delay={200}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                      {hiringSteps.map((step, index) => (
                        <div key={index} className="h-full">
                          <InfoCard
                            icon={step.icon}
                            title={step.title}
                            description={step.description}
                            stepNumber={step.number}
                          />
                        </div>
                      ))}
                    </div>
                  </ScrollFadeIn>
                </div>
              </div>
            </div>
          </GradientContainer>
        </section>

        {/* ===== SECTION 5: OPEN POSITIONS ===== */}
        <section id="open-positions" className="py-16 lg:py-24 relative">
          <BlurCircle className="absolute top-0 -left-32 w-96 h-96" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Side: Sticky Heading */}
              <div className="lg:col-span-5 lg:sticky lg:top-32 text-left mb-8 lg:mb-0">
                <ArrowBadge href="#open-positions" text="Current Openings" variant="black" className="mb-4" />
                <SectionHeading 
                  lines={[
                    'Explore <span class="text-cyan-gradient font-medium inline-block">What\'s Open</span>'
                  ]}
                  subheading="Discover your next challenge and grow with us. We are constantly searching for curious minds and passionate software engineers."
                />
              </div>

              {/* Right Side: Job List */}
              <div className="lg:col-span-7">
                <div className="flex flex-col gap-4">
                  <AnimatedList 
                    items={jobOpenings}
                    disableLocalScroll={true}
                    onItemSelect={(job) => router.push(`/careers/apply?role=${encodeURIComponent(job.title)}`)}
                    renderItem={(job, index, isSelected) => (
                      <div 
                        className={`group bg-card border-0 rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-smooth-lift flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer ${isSelected ? 'ring-2 ring-primary ring-offset-2 -translate-y-1' : 'hover:-translate-y-1'}`} 
                      >
                        <div className="flex flex-col gap-3">
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-heading-section font-headline font-medium text-foreground">{job.title}</h3>
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 font-medium tracking-wide rounded-full px-3">{job.type}</Badge>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-foreground/80">
                            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-foreground/60" /> {job.location}</span>
                            <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-foreground/60" /> {job.department}</span>
                            <span className="flex items-center gap-1.5"><GraduationCap className="w-4 h-4 text-foreground/60" /> {job.level}</span>
                          </div>
                        </div>
                        
                        <div className="shrink-0">
                          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 ${isSelected ? 'bg-primary text-white' : 'bg-darkTeal text-white group-hover:bg-primary'}`}>
                            <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isSelected ? '-rotate-45' : 'group-hover:-rotate-45'}`} />
                          </div>
                        </div>
                      </div>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 6: CTA ===== */}
        <section className="pt-0 pb-16 md:pb-20 lg:pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollFadeIn>
              <GradientContainer 
                className="rounded-3xl py-16 md:py-20 px-6 md:px-12 text-center relative overflow-hidden"
              >
                <div className="relative z-10">
                  <SectionHeading 
                    align="center"
                    lines={['Ready To Push Boundaries?']}
                    headingClassName="!text-white text-3xl sm:text-4xl md:text-5xl"
                    subheadingClassName="!text-white/90 max-w-2xl mx-auto"
                    subheading="Are you ready to explore new frontiers of technology and applied AI? Let's build something extraordinary together."
                  />
                  <form onSubmit={handleCTASubmit} className="mt-8 md:mt-12 max-w-sm md:max-w-md mx-auto">
                    <SplitButton 
                      emailValue={email}
                      onEmailChange={(e) => setEmail(e.target.value)}
                    />
                  </form>
                </div>
              </GradientContainer>
            </ScrollFadeIn>
          </div>
        </section>
      </div>
    </div>
  );
}
