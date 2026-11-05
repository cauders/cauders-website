'use client';

import React, { useState } from 'react';
import ScrollFadeIn from './ScrollFadeIn';
import { ArrowRight, CheckCircle2, Briefcase, Handshake, Building2, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { typography } from '@/lib/typography';
import ArrowBadge from './ArrowBadge';
import GlassBadge from './GlassBadge';
import SectionHeading from './SectionHeading';
import GradientContainer from './GradientContainer';
import { submitPartnerForm } from '@/app/actions';
import { trackConversion } from '@/lib/analytics';

interface PartnerProcessStep {
  number: string;
  icon: string;
  title: string;
  description: string;
  meansForYou: string;
}

const processSteps: PartnerProcessStep[] = [
  {
    number: '01',
    icon: 'https://res.cloudinary.com/cauders/image/upload/f_auto,q_auto,w_64/v1792728804/Target_Streamline_Core_zi3exq.png',
    title: 'Apply Online',
    description: 'Fill out the form below and tell us about your market and the partnership model you want to explore.',
    meansForYou: 'Quick submission of your agency background and the collaboration model you want to pursue.',
  },
  {
    number: '02',
    icon: 'https://res.cloudinary.com/cauders/image/upload/f_auto,q_auto,w_64/v1792728810/Graph-Document-Infected-Report_Streamline_Covid_hf4rd5.png',
    title: "Let's Connect",
    description: 'We schedule a discovery call to align on commercial structure, scope boundaries, and working terms.',
    meansForYou: 'Direct call to align on commercial terms, scope boundaries, and confidentiality.',
  },
  {
    number: '03',
    icon: 'https://res.cloudinary.com/cauders/image/upload/f_auto,q_auto,w_64/v1792728803/Desktop-Code_Streamline_Core_sps9gq.png',
    title: 'Enablement',
    description: 'We equip your team with technical collateral, co-branded architecture proposals, and access to lead engineers.',
    meansForYou: 'Immediate access to technical documentation, co-branded collateral, and lead engineers.',
  },
  {
    number: '04',
    icon: 'https://res.cloudinary.com/cauders/image/upload/f_auto,q_auto,w_64/v1792728812/Shield-Check_Streamline_Core_daxhoa.png',
    title: 'Scale & Deliver',
    description: 'You manage client relationships and close opportunities while our engineering teams design, build, and ship.',
    meansForYou: 'Scalable engineering delivery under NDA while you retain full client relationship ownership.',
  },
];

const models = [
  {
    number: '01',
    icon: Briefcase,
    title: 'White-Label Delivery',
    subhead: 'Pitch it, sell it, and we build it under your agency brand.',
    intro:
      'We handle full-lifecycle software engineering while your agency owns the client relationship. Engagements operate under NDA within your preferred project tools.',
    points: [
      'NDA-protected white-label engineering execution',
      'Dedicated pods: full-stack developers, AI engineers & QA',
      'Clean handover with full repository and IP transfer',
    ],
  },
  {
    number: '02',
    icon: Handshake,
    title: 'Referral Program',
    subhead: 'Introduce clients who need AI, cloud, or custom software.',
    intro:
      'Have a client or network connection looking for custom software, workflow automation, or modern web applications? Make the introduction and we handle scoping, proposals, and delivery.',
    points: [
      'No quotas or exclusivity lock-ins',
      'Structured referral commission agreed upfront per engagement',
      'Zero project management overhead for your team',
    ],
  },
  {
    number: '03',
    icon: Building2,
    title: 'Strategic Reseller',
    subhead: 'Expand your consultancy portfolio with senior engineering capacity.',
    intro:
      'Bring specialized engineering and AI capabilities directly to your market. You lead the account while Cauders serves as your technical delivery partner.',
    points: [
      'Transparent partner pricing across web, mobile, and AI systems',
      'Pre-sales architecture scoping, technical discovery & estimation',
      'Protected accounts with clear deal registration',
    ],
  },
];

export default function PartnersPageContent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    country: '',
    model: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      const res = await submitPartnerForm(formData);
      if (res.success) {
        trackConversion('partner_application_submitted', {
          model: formData.model,
          company: formData.company,
        });
        setSubmitStatus('success');
        setStatusMessage(res.message);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          country: '',
          model: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(res.message || 'There was an issue submitting your application.');
      }
    } catch {
      setSubmitStatus('error');
      setStatusMessage('An unexpected error occurred. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full flex flex-col pb-24 lg:pb-32 text-foreground">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[85vh] sm:h-[90vh] md:h-screen overflow-hidden rounded-b-3xl bg-[#011417]">
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920"
            alt="Cauders Strategic Partnerships"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#011417]/95 via-[#011417]/75 to-[#011417]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#011417] via-transparent to-[#011417]/50" />
        </div>

        <div className="relative z-10 flex flex-col justify-center h-full max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full md:w-3/5 lg:w-[60%] text-left pt-16 md:pt-0">
            <div className="mb-6 md:mb-10">
              <GlassBadge text="Cauders Partner Program" />
            </div>

            <h1 className="tracking-tight text-white mt-4 font-headline lg:leading-[1.1]">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] md:leading-[1.1] lg:leading-[1.1]">
                Scale Your Agency,
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] md:leading-[1.1] lg:leading-[1.1]">
                Expand Your Reach,
              </span>
              <span className={`block mt-2 md:mt-4 ${typography.headingMain}`}>
                <span className="text-cyan-radial bg-clip-text text-transparent block leading-tight md:leading-tight lg:leading-tight drop-shadow-sm">
                  With Strategic Partnerships.
                </span>
              </span>
            </h1>

            <p className={`mt-6 md:mt-8 ${typography.bodyLarge} text-white w-[95%] max-w-[40rem] font-light leading-relaxed`}>
              Sell, white-label, or refer. You bring the clients, relationships, and vision — Cauders handles full-lifecycle engineering, architecture, and deployment.
            </p>

            <div className="mt-8 md:mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="#apply"
                className="px-8 py-3.5 rounded-full bg-zinc-gradient text-white text-sm font-medium hover:opacity-95 transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                <span>Apply for Partner Program</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="#models"
                className="px-8 py-3.5 rounded-full border border-white/20 hover:bg-white/10 text-white text-sm font-medium transition-colors"
              >
                Explore Models
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section id="overview" className="py-16 md:py-24 bg-transparent relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 relative z-10">
              <ScrollFadeIn>
                <div className="flex flex-col items-start mb-6">
                  <ArrowBadge href="#overview" text="Program Overview" variant="black" className="mb-4" />
                  <SectionHeading
                    lines={[
                      'Engineered to Help You',
                      '<span class="text-cyan-gradient font-medium inline-block">Grow Without Limits</span>',
                    ]}
                  />
                </div>
                <div className="space-y-6 mt-6">
                  <p className={`text-foreground/80 font-normal ${typography.bodyBase} leading-relaxed`}>
                    Scaling an agency or consultancy is difficult when delivery capacity and hiring cycles slow down client momentum. At Cauders, we provide structured engineering delivery so you can expand your technical offering without adding permanent overhead. We handle full-stack development, cloud architecture, and custom AI integration while you lead client strategy and growth.
                  </p>

                  <div className="grid grid-cols-2 gap-x-8 gap-y-8 pt-8 mt-8 border-t border-border">
                    <div>
                      <p className="text-2xl md:text-3xl font-bold font-headline text-foreground mb-1.5">NDA-Backed</p>
                      <p className="text-sm sm:text-base text-foreground/80 font-medium">Confidential Execution</p>
                    </div>
                    <div>
                      <p className="text-2xl md:text-3xl font-bold font-headline text-foreground mb-1.5">Dedicated Pods</p>
                      <p className="text-sm sm:text-base text-foreground/80 font-medium">Full-Lifecycle Engineering</p>
                    </div>
                    <div>
                      <p className="text-2xl md:text-3xl font-bold font-headline text-foreground mb-1.5">Zero Overhead</p>
                      <p className="text-sm sm:text-base text-foreground/80 font-medium">No Recruiting Bottlenecks</p>
                    </div>
                    <div>
                      <p className="text-2xl md:text-3xl font-bold font-headline text-foreground mb-1.5">100% IP</p>
                      <p className="text-sm sm:text-base text-foreground/80 font-medium">White-Label Ownership</p>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            </div>

            <div className="lg:col-span-6 relative">
              <ScrollFadeIn direction="left" delay={200}>
                <div className="relative aspect-square md:aspect-[4/3] w-full rounded-3xl overflow-hidden border border-primary/20 shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200"
                    alt="Strategic Partnerships"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#011417]/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Models Section */}
      <section id="models" className="py-8">
        <GradientContainer className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[95rem] mx-auto">
            <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
              <ScrollFadeIn>
                <ArrowBadge href="#models" text="Partnership Models" variant="white" className="mb-4" />
              </ScrollFadeIn>
              <SectionHeading
                align="center"
                lines={['Choose Your Partnership Model']}
                headingClassName="!text-white"
                subheadingClassName="!text-white/90 max-w-3xl mx-auto"
                subheading="Every agency and consultancy operates with unique requirements. Pick the model that best matches your client flow, or combine models as your pipeline grows."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {models.map((model, idx) => (
                <ScrollFadeIn key={model.number} delay={idx * 120} className="h-full">
                  <div className="group relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full bg-black/[0.11] border-[0.5px] border-primary/40 hover:border-primary/90 hover:bg-black/[0.16] backdrop-blur-[20px] transform-gpu transition-all duration-300 shadow-none hover:-translate-y-1 overflow-hidden">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-zinc border border-primary/30 flex items-center justify-center shadow-md">
                          <model.icon className="w-7 h-7 text-white" strokeWidth={1.75} aria-hidden="true" />
                        </div>
                        <span className="font-headline font-medium text-4xl sm:text-5xl text-white/35 select-none tracking-tight">
                          {model.number}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
                        {model.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal mb-3">
                        {model.subhead}
                      </p>

                      <p className="text-xs sm:text-[0.825rem] text-white/80 leading-relaxed font-light mb-6">
                        {model.intro}
                      </p>

                      <div className="pt-4 border-t border-white/20">
                        <p className="text-xs sm:text-[0.825rem] font-medium text-white mb-3">
                          Key Deliverables:
                        </p>
                        <ul className="space-y-2 text-xs sm:text-[0.825rem] text-white/90">
                          {model.points.map((point, pointIdx) => (
                            <li key={pointIdx} className="flex items-start gap-2">
                              <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 stroke-[2.5] mt-0.5" aria-hidden="true" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/20">
                      <Link
                        href="#apply"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white hover:text-primary transition-colors group/cta"
                      >
                        <span>Apply For This Model</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-1" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>

            <div className="mt-14 text-center">
              <Link
                href="#apply"
                className="px-10 py-3.5 rounded-full bg-white text-zinc font-semibold text-sm hover:bg-white/90 transition-all shadow-md inline-block"
              >
                Start Partnership Application
              </Link>
            </div>
          </div>
        </GradientContainer>
      </section>

      {/* 4. Process Steps (How It Works) */}
      <section id="how-it-works" className="py-20 lg:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ArrowBadge href="#how-it-works" text="Simple Process" variant="black" className="mb-4" />
            <SectionHeading
              align="center"
              lines={['How Our <span class="text-cyan-gradient font-medium inline-block">Partnership Works</span>']}
              subheading="From your initial inquiry to delivering products, our onboarding process is transparent, structured, and fast."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
            {processSteps.map((step, idx) => (
              <ScrollFadeIn key={step.number} delay={idx * 100} className="h-full">
                <div className="group relative rounded-3xl bg-white text-zinc-900 border-0 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.12)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
                  <div className="p-6 sm:p-7 pb-4 sm:pb-5">
                    <div className="flex items-center justify-between mb-4 sm:mb-5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-darkTeal flex items-center justify-center shadow-md flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={step.icon}
                          alt={step.title}
                          width={26}
                          height={26}
                          sizes="28px"
                          className="w-6 h-6 sm:w-7 sm:h-7 object-contain brightness-0 invert"
                        />
                      </div>

                      <span className="font-headline font-medium text-4xl sm:text-5xl lg:text-6xl text-zinc-300 select-none tracking-tight">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-headline font-semibold text-black !text-black tracking-tight mb-2 sm:mb-2.5">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  <div className="bg-[#F8FAF9] border-t border-zinc-100 px-6 sm:px-7 py-4 sm:py-5">
                    <span className="block text-xs font-headline font-semibold text-darkTeal mb-1 tracking-wide">
                      What this means for you:
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                      {step.meansForYou}
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Application Form Section */}
      <section id="apply" className="py-16 md:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left side description */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <ScrollFadeIn>
                <ArrowBadge href="#apply" text="Apply Now" variant="black" className="mb-4" />
                <SectionHeading
                  lines={[
                    'Join the Cauders',
                    '<span class="text-cyan-gradient font-medium inline-block">Partner Network</span>',
                  ]}
                  subheading="Submit your details below. Our partnerships team will review your information and reach out within 2 business days to schedule an introduction."
                />

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" aria-hidden="true" />
                    <span className="text-sm text-foreground/80 font-medium">Direct access to technical leads and architects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" aria-hidden="true" />
                    <span className="text-sm text-foreground/80 font-medium">Transparent commercial terms &amp; clear scope ownership</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" aria-hidden="true" />
                    <span className="text-sm text-foreground/80 font-medium">Fast pre-sales support and technical proposals</span>
                  </div>
                </div>
              </ScrollFadeIn>
            </div>

            {/* Right side form */}
            <div className="lg:col-span-7">
              <ScrollFadeIn delay={200}>
                <div className="bg-gradient-container rounded-[28px] p-8 md:p-10 shadow-none relative overflow-hidden text-white">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-headline font-semibold text-white mb-2">
                      Partner Application
                    </h3>
                    <p className="text-sm text-white/80 mb-8 font-light">
                      Tell us about your organization and how we can support your client delivery.
                    </p>

                    {submitStatus === 'success' ? (
                      <div className="p-8 text-center bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                        <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" aria-hidden="true" />
                        <p className="text-xl font-headline font-semibold text-white mb-2">Application Received!</p>
                        <p className="text-sm text-white/90 leading-relaxed max-w-md mx-auto">
                          {statusMessage}
                        </p>
                        <button
                          type="button"
                          onClick={() => setSubmitStatus('idle')}
                          className="mt-6 px-8 py-2.5 rounded-full bg-white text-zinc text-xs font-semibold hover:bg-white/90 transition-all"
                        >
                          Submit Another Inquiry
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {submitStatus === 'error' && (
                          <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/40 text-white text-sm" role="alert">
                            {statusMessage}
                          </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="firstName" className="text-xs font-medium text-white/90">
                              First Name *
                            </label>
                            <input
                              required
                              type="text"
                              id="firstName"
                              name="firstName"
                              autoComplete="given-name"
                              value={formData.firstName}
                              onChange={handleChange}
                              className="w-full px-5 py-3 rounded-full border border-white/20 bg-black/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
                              placeholder="Jane"
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="lastName" className="text-xs font-medium text-white/90">
                              Last Name *
                            </label>
                            <input
                              required
                              type="text"
                              id="lastName"
                              name="lastName"
                              autoComplete="family-name"
                              value={formData.lastName}
                              onChange={handleChange}
                              className="w-full px-5 py-3 rounded-full border border-white/20 bg-black/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
                              placeholder="Doe"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="text-xs font-medium text-white/90">
                            Work Email *
                          </label>
                          <input
                            required
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-5 py-3 rounded-full border border-white/20 bg-black/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
                            placeholder="jane@company.com"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="company" className="text-xs font-medium text-white/90">
                              Company Name *
                            </label>
                            <input
                              required
                              type="text"
                              id="company"
                              name="company"
                              autoComplete="organization"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full px-5 py-3 rounded-full border border-white/20 bg-black/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
                              placeholder="Acme Agency"
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="country" className="text-xs font-medium text-white/90">
                              Country / Market *
                            </label>
                            <input
                              required
                              type="text"
                              id="country"
                              name="country"
                              autoComplete="country-name"
                              value={formData.country}
                              onChange={handleChange}
                              className="w-full px-5 py-3 rounded-full border border-white/20 bg-black/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
                              placeholder="United States"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="model" className="text-xs font-medium text-white/90">
                            Desired Partnership Model *
                          </label>
                          <select
                            required
                            id="model"
                            name="model"
                            value={formData.model}
                            onChange={handleChange}
                            className="w-full px-5 py-3 rounded-full border border-white/20 bg-[#003431] text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
                          >
                            <option value="" disabled className="bg-[#003431] text-white/60">
                              Select a model
                            </option>
                            <option value="White-Label Delivery" className="bg-[#003431] text-white">
                              White-Label Delivery
                            </option>
                            <option value="Referral" className="bg-[#003431] text-white">
                              Referral Program
                            </option>
                            <option value="Strategic Reseller" className="bg-[#003431] text-white">
                              Strategic Reseller
                            </option>
                            <option value="Other / Discussion" className="bg-[#003431] text-white">
                              Other / Not sure yet
                            </option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="text-xs font-medium text-white/90">
                            About your clients and current project requirements *
                          </label>
                          <textarea
                            required
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-5 py-4 rounded-2xl border border-white/20 bg-black/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm resize-none"
                            placeholder="Share some details about your typical client profile and the solutions they seek..."
                          />
                        </div>

                        <p className="text-[11px] text-white/75 text-center mt-2 mb-4">
                          We process your business contact information in accordance with our{' '}
                          <Link href="/privacy-policy" className="underline hover:text-white transition-colors">
                            Privacy Policy
                          </Link>{' '}
                          and{' '}
                          <Link href="/terms-of-service" className="underline hover:text-white transition-colors">
                            Terms
                          </Link>
                          .
                        </p>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full flex items-center justify-center gap-2 h-14 rounded-full bg-white text-zinc font-semibold text-sm hover:bg-white/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
                        >
                          {isSubmitting ? (
                            'Submitting Application...'
                          ) : (
                            <>
                              Submit Application
                              <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
