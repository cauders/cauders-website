"use client";

import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import ScrollFadeIn from './ScrollFadeIn';
import ContainerCard from './ContainerCard';
import { ArrowRight, CheckCircle2, Briefcase, Handshake, Users, Shield, Wallet, Heart, Building2, Zap, Settings2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { typography } from '@/lib/typography';
import ProcessHoverSection from './ProcessHoverSection';
import ImageContainerHero from './ImageContainerHero';
import ArrowBadge from './ArrowBadge';
import StandardizedHeading from './StandardizedHeading';

export default function PartnersPageContent() {
  const processSteps = [
    { title: 'Apply', description: 'Fill out the form and tell us about your market and which model you are eyeing.' },
    { title: "Let's Connect", description: 'We will hop on a call to align on the details, discuss the margins, and put the terms in writing. No vague promises, just a solid plan.' },
    { title: 'Enable', description: 'We equip you with the right technical collateral, co-branded proposals, and direct access to our lead engineers.' },
    { title: 'Grow', description: 'You start bringing in the business, and we start shipping the products.' }
  ];

  const models = [
    {
      icon: Briefcase,
      title: '1. White-Label Delivery',
      intro: 'You pitch it, you sell it, and we build it completely under your name. We are already successfully executing this model with partners like Prestige Services Group, taking care of the engineering while they take the credit.',
      points: [
        { icon: Shield, title: 'Invisible integration', desc: 'We work strictly under your NDA, using your tools and your Slack channels.' },
        { icon: Users, title: 'Dedicated pods', desc: 'From a single UI/UX designer to a full engineering team working on Flutter, Next.js, or Python.' },
        { icon: CheckCircle2, title: 'Clean handover', desc: 'Zero Cauders branding on the final repositories and IP.' }
      ]
    },
    {
      icon: Handshake,
      title: '2. The Referral Program',
      intro: 'Got a connection who urgently needs an app, a fresh web platform, or a custom AI tool? Just make the introduction. We handle the scoping, the meetings, and the actual development.',
      points: [
        { icon: CheckCircle2, title: 'No strict targets', desc: 'No strict targets or exclusivity required.' },
        { icon: Wallet, title: 'Handsome commission', desc: 'You get a handsome commission on the first engagement and trailing shares as the project expands.' },
        { icon: Heart, title: 'Sit back, relax', desc: 'Sit back, relax, and let us do the needful.' }
      ]
    },
    {
      icon: Building2,
      title: '3. Strategic Reseller',
      intro: 'Take our specialized tech services directly to your local market. You own the client relationship and the contract, and we operate right behind you to make sure the project ships on time.',
      points: [
        { icon: Zap, title: 'Excellent margins', desc: 'Excellent margins on web, mobile, and software solutions.' },
        { icon: Settings2, title: 'Technical support', desc: 'We support you with technical pre-sales, estimates, and architectural planning.' },
        { icon: Shield, title: 'Deal registration', desc: 'Deal registration ensures your pipeline remains completely protected.' }
      ]
    }
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    country: '',
    model: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call for now. In reality, this could hit a formspree endpoint or custom API.
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        country: '',
        model: '',
        message: ''
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full flex flex-col pb-24 lg:pb-32">
      
      {/* 1. Centered "Command Center" Hero */}
      <ImageContainerHero 
        imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920"
        imageAlt="Cauders Partner Program"
        badgeText="Partner Program"
        badgeHref="#overview"
        headingLines={["Cauders Partner Program"]}
        description="Sell, white-label, or refer. You bring the clients, we handle the tech."
        ctaText="Apply for the Program"
        ctaHref="#apply"
        secondaryCtaText="Explore Models"
        secondaryCtaHref="#models"
      />

      {/* 2. Floating "Vision" Overview */}
      <section id="overview" className="py-16 md:py-20 bg-transparent relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 relative z-10">
              <ScrollFadeIn>
                <div className="flex flex-col items-start mb-6">
                  <ArrowBadge href="#overview" text="Overview" variant="black" className="mb-4" />
                </div>
                <div className="space-y-6 mt-6">
                  <p className={`text-foreground font-normal ${typography.bodyBase}`}>
                    Let's be practical here. Scaling an agency or consultancy is tough when you are always stressed about delivery and managing developers. At Cauders, we are offering you a way to expand your business without the headache of hiring a massive in-house team. We do the heavy lifting in full-stack development, UI/UX design, and AI solutions so you can focus on what you do best: closing deals and keeping clients happy.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-8 mt-8 border-t border-zinc-200 dark:border-zinc-800">
                    <div>
                      <h4 className="text-4xl md:text-5xl font-bold font-headline text-foreground mb-2">40%</h4>
                      <p className="text-base text-foreground/80 font-medium">Avg. Profit Margin</p>
                    </div>
                    <div>
                      <h4 className="text-4xl md:text-5xl font-bold font-headline text-foreground mb-2">100+</h4>
                      <p className="text-base text-foreground/80 font-medium">Engineers on Demand</p>
                    </div>
                    <div>
                      <h4 className="text-4xl md:text-5xl font-bold font-headline text-foreground mb-2">Zero</h4>
                      <p className="text-base text-foreground/80 font-medium">Hiring Headaches</p>
                    </div>
                    <div>
                      <h4 className="text-4xl md:text-5xl font-bold font-headline text-foreground mb-2">100%</h4>
                      <p className="text-base text-foreground/80 font-medium">White-Labeled</p>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            </div>
            <div className="lg:col-span-6 relative">
              <ScrollFadeIn direction="left" delay={200}>
                <div className="relative aspect-square md:aspect-[4/3] w-full rounded-3xl overflow-hidden border border-primary/10">
                  <Image 
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200"
                    alt="Overview"
                    fill
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

      {/* Models Section */}
      <section id="models" className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="Partnership Models"
            headingLines={[{ text: "Choose Your Partnership Model", gradientLastWords: 2 }]}
            description="Every agency works differently, so pick the model that actually suits your workflow. Start with one, or mix and match as you grow."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mt-16">
            {models.map((model, index) => (
              <ScrollFadeIn key={index} delay={index * 0.1}>
                <ContainerCard hoverEffect className="rounded-3xl p-8 md:p-10 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-zinc border border-primary/20 flex items-center justify-center mb-8">
                    <model.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-headline font-medium text-foreground mb-4">
                    {model.title}
                  </h3>
                  <p className="text-foreground/80 mb-8 leading-relaxed">
                    {model.intro}
                  </p>
                  <ul className="space-y-6">
                    {model.points.map((point, i) => (
                      <li key={i} className="flex flex-col">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex-shrink-0 bg-zinc rounded-full p-2 border border-primary/20 flex items-center justify-center">
                            <point.icon className="w-4 h-4 text-white" strokeWidth={2} />
                          </div>
                          <h4 className="text-lg font-medium text-foreground">{point.title}</h4>
                        </div>
                        <p className="text-sm text-foreground/80 leading-relaxed pl-11">{point.desc}</p>
                      </li>
                    ))}
                  </ul>
                </ContainerCard>
              </ScrollFadeIn>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild variant="zinc" size="lg">
              <Link href="#apply">
                Apply for the Program
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24 relative z-10 text-foreground bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative">
            
            {/* Left Column (Sticky Heading) */}
            <div className="lg:col-span-5 relative">
              <div className="lg:sticky lg:top-32">
                <ScrollFadeIn>
                  <SectionHeader
                    badgeText="Benefits"
                    headingLines={[{ text: "Why Partner with Cauders?", gradientLastWords: 2 }]}
                    description="Clients want top-tier quality and they usually want it yesterday. Here is how we make sure you never look bad in front of them:"
                    align="left"
                  />
                </ScrollFadeIn>
              </div>
            </div>
            
            {/* Right Column (Scrolling List) */}
            <div className="lg:col-span-7 flex flex-col">
              {[
                {
                  title: 'Modern Tech Stack',
                  desc: 'We are dealing in the frameworks that actually matter today. Whether it is React Native, Supabase, PostgreSQL, or integrating AI, we build products that scale.'
                },
                {
                  title: 'Design-Driven Engineering',
                  desc: 'We don\'t just write code. With our strong background in UI/UX and tools like Figma, the end product looks exactly as good as the mockup.'
                },
                {
                  title: 'Exit-Clean by Design',
                  desc: 'When a project wraps up, the code, docs, and credentials are structured for a proper, hassle-free handover. No strings attached.'
                }
              ].map((item, idx, arr) => {
                const isFirst = idx === 0;
                const isLast = idx === arr.length - 1;
                return (
                  <ScrollFadeIn key={idx} delay={idx * 100}>
                    <div className={`pb-10 lg:pb-16 ${isFirst ? '' : 'pt-10 lg:pt-16'} ${isLast ? '' : 'border-b border-border'}`}>
                      <h4 className={`${typography.headingSection} font-medium font-headline text-foreground mb-4`}>{item.title}</h4>
                      <p className="text-foreground font-normal text-body-large ">
                        {item.desc}
                      </p>
                    </div>
                  </ScrollFadeIn>
                );
              })}
            </div>
            
          </div>
        </div>
      </section>

      {/* How It Works */}
      <ProcessHoverSection title="How It Works" steps={processSteps} />

      {/* Apply Form */}
      <section id="apply" className="py-24 relative z-10 overflow-hidden bg-gradient-container">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full items-start">
            
            {/* Left Side: Text and Bullets */}
            <div className="flex flex-col mt-4 lg:col-span-5">
              <ScrollFadeIn>
                <SectionHeader
                  theme="dark"
                  badgeText="Application"
                  badgeHref="#apply"
                  headingLines={[
                    { text: "Apply For The", isGradient: false },
                    { text: "Partner Program", isGradient: false }
                  ]}
                  description="Ready to scale? Drop your details below and we will revert back within two business days to map out the perfect technical architecture for your needs."
                  align="left"
                  className="mb-8 lg:mb-12"
                />
              </ScrollFadeIn>

              <div className="grid grid-cols-1 gap-y-10">
                <ScrollFadeIn delay={100} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <h4 className="font-bold text-white">Tell us about you</h4>
                  </div>
                  <p className="text-sm text-white/80 pl-5 max-w-md">
                    Fill out the form with your current challenges and client requirements.
                  </p>
                </ScrollFadeIn>
                <ScrollFadeIn delay={200} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <h4 className="font-bold text-white">Discovery Call</h4>
                  </div>
                  <p className="text-sm text-white/80 pl-5 max-w-md">
                    We will hop on a call to align on the details, discuss margins, and put terms in writing.
                  </p>
                </ScrollFadeIn>
                <ScrollFadeIn delay={300} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <h4 className="font-bold text-white">Start Scaling</h4>
                  </div>
                  <p className="text-sm text-white/80 pl-5 max-w-md">
                    You start bringing in the business, and we start shipping the products.
                  </p>
                </ScrollFadeIn>
              </div>
            </div>

            {/* Right Side: Form Card */}
            <div className="w-full lg:col-span-7 lg:col-start-6">
              <ScrollFadeIn delay={200}>
                <ContainerCard className="p-8 md:p-12 relative overflow-hidden bg-white dark:bg-zinc-950 border-0 shadow-xl shadow-black/5">

              {submitStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
                  <h3 className="text-2xl font-bold mb-2">Application Received!</h3>
                  <p className="text-foreground/80 max-w-md">
                    Thank you for your interest in partnering with Cauders. We will review your application and revert back within two business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">First Name <span className="text-red-500">*</span></label>
                      <input 
                        required
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-6 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-zinc/20 transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">Last Name <span className="text-red-500">*</span></label>
                      <input 
                        required
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-6 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-zinc/20 transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address <span className="text-red-500">*</span></label>
                    <input 
                      required
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-zinc/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">Company Name <span className="text-red-500">*</span></label>
                      <input 
                        required
                        type="text" 
                        id="company" 
                        name="company" 
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-6 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-zinc/20 transition-all"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="country" className="text-sm font-medium">Country / Market <span className="text-red-500">*</span></label>
                      <input 
                        required
                        type="text" 
                        id="country" 
                        name="country" 
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-6 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-zinc/20 transition-all"
                        placeholder="United States"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="model" className="text-sm font-medium">Partnership Model <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <select 
                        required
                        id="model" 
                        name="model" 
                        value={formData.model}
                        onChange={handleChange}
                        className="w-full px-6 py-3 rounded-full border border-border bg-background appearance-none focus:outline-none focus:ring-2 focus:ring-zinc/20 transition-all"
                      >
                        <option value="" disabled>Select a model</option>
                        <option value="White-Label Delivery">White-Label Delivery</option>
                        <option value="Referral">Referral</option>
                        <option value="Strategic Reseller">Strategic Reseller</option>
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-foreground/50">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Tell us a bit about your clients and market <span className="text-red-500">*</span></label>
                    <textarea 
                      required
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-6 py-4 rounded-3xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-zinc/20 transition-all resize-none"
                      placeholder="Share some details about your typical client profile and the solutions they seek..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 h-14 rounded-full bg-zinc text-white font-medium hover:bg-zinc-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : (
                      <>
                        Submit Application
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-sm text-foreground/60 mt-4">
                    Alternatively, email us directly at <a href="mailto:info@cauders.com" className="text-zinc hover:underline">info@cauders.com</a>
                  </p>
                </form>
              )}
                </ContainerCard>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
