"use client";

import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import ScrollFadeIn from './ScrollFadeIn';
import ContainerCard from './ContainerCard';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function PartnersPageContent() {
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
      
      {/* Hero Section */}
      <section className="relative z-10 w-full pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <ScrollFadeIn>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tight text-foreground mb-6">
                Cauders Partner Program
              </h1>
              <p className="text-xl md:text-2xl font-medium text-foreground mb-8">
                Sell, white-label, or refer. You bring the clients, we handle the tech.
              </p>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-10 max-w-3xl">
                Let's be practical here. Scaling an agency or consultancy is tough when you are always stressed about delivery and managing developers. At Cauders, we are offering you a way to expand your business without the headache of hiring a massive in-house team. We do the heavy lifting in full-stack development, UI/UX design, and AI solutions so you can focus on what you do best: closing deals and keeping clients happy.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#apply" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-zinc text-white font-medium hover:bg-zinc-800 transition-colors">
                  Apply for the Program
                </a>
                <a href="#models" className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-zinc/20 text-foreground font-medium hover:bg-zinc/5 transition-colors">
                  Explore Models
                </a>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="py-20 relative z-10 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <SectionHeader
            badgeText="Partnership Models"
            headingLines={["Choose Your Partnership Model"]}
            description="Every agency works differently, so pick the model that actually suits your workflow. Start with one, or mix and match as you grow."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            
            {/* White-Label */}
            <ScrollFadeIn delay={100}>
              <ContainerCard hoverEffect className="p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold font-headline mb-4">1. White-Label Delivery</h3>
                <p className="text-foreground/80 mb-6 font-medium">(Your Brand, Our Brains)</p>
                <p className="text-foreground/80 leading-relaxed mb-8 flex-grow">
                  You pitch it, you sell it, and we build it completely under your name. We are already successfully executing this model with partners like Prestige Services Group, taking care of the engineering while they take the credit.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-zinc flex-shrink-0 mt-0.5" fill="currentColor" stroke="white" />
                    <span className="text-foreground/80 text-sm"><strong>Invisible integration:</strong> We work strictly under your NDA, using your tools and your Slack channels.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-zinc flex-shrink-0 mt-0.5" fill="currentColor" stroke="white" />
                    <span className="text-foreground/80 text-sm"><strong>Dedicated pods:</strong> From a single UI/UX designer to a full engineering team working on Flutter, Next.js, or Python.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-zinc flex-shrink-0 mt-0.5" fill="currentColor" stroke="white" />
                    <span className="text-foreground/80 text-sm"><strong>Clean handover:</strong> Zero Cauders branding on the final repositories and IP.</span>
                  </li>
                </ul>
              </ContainerCard>
            </ScrollFadeIn>

            {/* Referral */}
            <ScrollFadeIn delay={200}>
              <ContainerCard hoverEffect className="p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold font-headline mb-4">2. The Referral Program</h3>
                <p className="text-foreground/80 mb-6 font-medium">(Easy Finder's Fee)</p>
                <p className="text-foreground/80 leading-relaxed mb-8 flex-grow">
                  Got a connection who urgently needs an app, a fresh web platform, or a custom AI tool? Just make the introduction. We handle the scoping, the meetings, and the actual development.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-zinc flex-shrink-0 mt-0.5" fill="currentColor" stroke="white" />
                    <span className="text-foreground/80 text-sm">No strict targets or exclusivity required.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-zinc flex-shrink-0 mt-0.5" fill="currentColor" stroke="white" />
                    <span className="text-foreground/80 text-sm">You get a handsome commission on the first engagement and trailing shares as the project expands.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-zinc flex-shrink-0 mt-0.5" fill="currentColor" stroke="white" />
                    <span className="text-foreground/80 text-sm">Sit back, relax, and let us do the needful.</span>
                  </li>
                </ul>
              </ContainerCard>
            </ScrollFadeIn>

            {/* Reseller */}
            <ScrollFadeIn delay={300}>
              <ContainerCard hoverEffect className="p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold font-headline mb-4">3. Strategic Reseller</h3>
                <p className="text-foreground/80 mb-6 font-medium">(Revenue Share)</p>
                <p className="text-foreground/80 leading-relaxed mb-8 flex-grow">
                  Take our specialized tech services directly to your local market. You own the client relationship and the contract, and we operate right behind you to make sure the project ships on time.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-zinc flex-shrink-0 mt-0.5" fill="currentColor" stroke="white" />
                    <span className="text-foreground/80 text-sm">Excellent margins on web, mobile, and software solutions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-zinc flex-shrink-0 mt-0.5" fill="currentColor" stroke="white" />
                    <span className="text-foreground/80 text-sm">We support you with technical pre-sales, estimates, and architectural planning.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-zinc flex-shrink-0 mt-0.5" fill="currentColor" stroke="white" />
                    <span className="text-foreground/80 text-sm">Deal registration ensures your pipeline remains completely protected.</span>
                  </li>
                </ul>
              </ContainerCard>
            </ScrollFadeIn>

          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader
                badgeText="Benefits"
                headingLines={["Why Partner with Cauders?"]}
                description="Clients want top-tier quality and they usually want it yesterday. Here is how we make sure you never look bad in front of them:"
              />
            </div>
            <div className="flex flex-col gap-10 lg:pt-8">
              <ScrollFadeIn delay={100}>
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-bold text-foreground">Modern Tech Stack</h4>
                  <p className="text-foreground/80 leading-relaxed">We are dealing in the frameworks that actually matter today. Whether it is React Native, Supabase, PostgreSQL, or integrating AI, we build products that scale.</p>
                </div>
              </ScrollFadeIn>
              <ScrollFadeIn delay={200}>
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-bold text-foreground">Design-Driven Engineering</h4>
                  <p className="text-foreground/80 leading-relaxed">We don't just write code. With our strong background in UI/UX and tools like Figma, the end product looks exactly as good as the mockup.</p>
                </div>
              </ScrollFadeIn>
              <ScrollFadeIn delay={300}>
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-bold text-foreground">Exit-Clean by Design</h4>
                  <p className="text-foreground/80 leading-relaxed">When a project wraps up, the code, docs, and credentials are structured for a proper, hassle-free handover. No strings attached.</p>
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 relative z-10 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <SectionHeader
            badgeText="Process"
            headingLines={["How It Works"]}
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              { num: '01', title: 'Apply', desc: 'Fill out the form and tell us about your market and which model you are eyeing.' },
              { num: '02', title: 'Let\'s Connect', desc: 'We will hop on a call to align on the details, discuss the margins, and put the terms in writing. No vague promises, just a solid plan.' },
              { num: '03', title: 'Enable', desc: 'We equip you with the right technical collateral, co-branded proposals, and direct access to our lead engineers.' },
              { num: '04', title: 'Grow', desc: 'You start bringing in the business, and we start shipping the products.' }
            ].map((step, idx) => (
              <ScrollFadeIn key={idx} delay={idx * 100}>
                <div className="flex flex-col gap-4">
                  <span className="text-4xl font-light text-zinc/30">{step.num}</span>
                  <h4 className="text-xl font-bold text-foreground">{step.title}</h4>
                  <p className="text-foreground/80 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Form */}
      <section id="apply" className="py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <ScrollFadeIn>
            <ContainerCard className="p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Apply for the Partner Program</h2>
                <p className="text-foreground/80">Ready to scale? Drop your details below and we will revert back within two business days.</p>
              </div>

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
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-zinc/20 transition-all"
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
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-zinc/20 transition-all"
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
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-zinc/20 transition-all"
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
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-zinc/20 transition-all"
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
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-zinc/20 transition-all"
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
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background appearance-none focus:outline-none focus:ring-2 focus:ring-zinc/20 transition-all"
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
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-zinc/20 transition-all resize-none"
                      placeholder="Share some details about your typical client profile and the solutions they seek..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 h-14 rounded-xl bg-zinc text-white font-medium hover:bg-zinc-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
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
      </section>

    </div>
  );
}
