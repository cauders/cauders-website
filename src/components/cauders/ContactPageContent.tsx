'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/actions';
import { CustomInput, CustomTextarea, CustomSelect } from './CustomFormFields';
import ScrollFadeIn from './ScrollFadeIn';
import { Loader2, Cpu, Layers, ShieldCheck, CheckCircle2, type LucideIcon } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card } from '../ui/card';
import Link from 'next/link';
import ArrowBadge from './ArrowBadge';
import { trackConversion } from '@/lib/analytics';
import DarkTealButton from './DarkTealButton';

const contactFormSchema = z.object({
  workEmail: z.string().email({ message: 'Please enter a valid email address.' }),
  firstName: z.string().min(2, { message: 'First name is required.' }),
  lastName: z.string().min(2, { message: 'Last name is required.' }),
  companyName: z.string().min(2, { message: 'Company name is required.' }),
  jobTitle: z.string().min(2, { message: 'Job title is required.' }),
  companySize: z.string().min(1, { message: 'Company size is required.' }),
  timeline: z.string().min(1, { message: 'Timeline is required.' }),
  estimatedBudget: z.string().optional(),
  engagementType: z.string().optional(),
  ndaRequired: z.boolean().optional(),
  phoneNumber: z.string().optional(),
  message: z.string().optional(),
});

const companySizeOptions = [
  { value: '1-10', label: '1-10 employees' },
  { value: '11-50', label: '11-50 employees' },
  { value: '51-200', label: '51-200 employees' },
  { value: '201-500', label: '201-500 employees' },
  { value: '500+', label: '500+ employees' },
];

const timelineOptions = [
  { value: 'Immediately', label: 'Immediately' },
  { value: 'Within 1 - 3 months', label: 'Within 1 - 3 months' },
  { value: 'Within 3 - 6 months', label: 'Within 3 - 6 months' },
  { value: 'Just exploring', label: 'Just exploring / RFP planning' },
];

const budgetOptions = [
  { value: '< $25,000 USD', label: '< $25,000 USD (Advisory / Small Pilot)' },
  { value: '$25,000 - $50,000 USD', label: '$25,000 – $50,000 USD (MVP / Targeted Modernization)' },
  { value: '$50,000 - $100,000 USD', label: '$50,000 – $100,000 USD (Full Product Build / Platform)' },
  { value: '$100,000 - $250,000+ USD', label: '$100,000 – $250,000+ USD (Enterprise Transformation / Dedicated Pod)' },
  { value: 'To Be Determined', label: 'Exploring / Budget To Be Determined' },
];

const engagementTypeOptions = [
  { value: 'Custom Software & Platform Engineering', label: 'Custom Software & Platform Engineering' },
  { value: 'Applied AI & Workflow Automation', label: 'Applied AI & Workflow Automation' },
  { value: 'Cloud & System Modernization', label: 'Cloud & System Modernization' },
  { value: 'Dedicated Engineering Team / Pod', label: 'Dedicated Engineering Team / Pod' },
  { value: 'Strategic Advisory / Architecture Review', label: 'Strategic Advisory / Architecture Review' },
  { value: 'White-Label / Agency Delivery', label: 'White-Label / Agency Delivery' },
];

interface ConsultationPillar {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  takeaway: string;
}

const consultationPillars: ConsultationPillar[] = [
  {
    number: '01',
    icon: Cpu,
    title: 'Strategic Architecture & Advisory',
    description:
      "Share your operational constraints and engineering objectives — our lead solutions architects design a resilient system topology, integration boundaries, and technology selection tailored to your business model.",
    takeaway: 'Resilient system architecture & technical roadmap',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Production-Grade Custom Solutions',
    description:
      'End-to-end web, mobile, and applied AI systems engineered for high concurrency, zero technical debt, and seamless connection to your existing data infrastructure.',
    takeaway: 'Custom engineering with 100% code ownership',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Enterprise Security & Compliance',
    description:
      'Review data governance protocols, SOC-2 / GDPR compliance posture, fault-tolerant infrastructure, and security baselines directly with senior technical leads.',
    takeaway: 'Strict confidentiality, mutual NDAs & data protection',
  },
  {
    number: '04',
    icon: CheckCircle2,
    title: 'Deterministic Scope & Proof of Value',
    description:
      'Conclude discovery with an actionable technical blueprint: milestone-governed delivery phases, transparent USD investment estimates, and a predictable rollout path.',
    takeaway: 'Transparent USD pricing, milestones & SLA commitments',
  },
];

const handleScrollToContent = () => {
  const contentElement = document.getElementById('contact-content');
  if (contentElement) {
    contentElement.scrollIntoView({ behavior: 'smooth' });
  }
};

function SearchParamsSync({ setValue }: { setValue: (name: any, value: any) => void }) {
  const searchParams = useSearchParams();
  useEffect(() => {
    const jobTitle = searchParams?.get('job');
    if (jobTitle) {
      setValue('jobTitle', jobTitle);
      setValue('message', `I am applying for the ${jobTitle} position.`);
    }
    const email = searchParams?.get('email');
    if (email) {
      setValue('workEmail', email);
    }
  }, [searchParams, setValue]);
  return null;
}

function ContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      workEmail: '',
      firstName: '',
      lastName: '',
      companyName: '',
      jobTitle: '',
      companySize: '',
      timeline: 'Immediately',
      estimatedBudget: '',
      engagementType: '',
      ndaRequired: false,
      phoneNumber: '',
      message: '',
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    try {
      const result = await submitContactForm(values);
      if (result.success) {
        toast({
          title: 'Success!',
          description: result.message,
        });
        trackConversion('contact_form_submitted', { company: values.companyName, timeline: values.timeline, budget: values.estimatedBudget });
        form.reset({
          workEmail: '',
          firstName: '',
          lastName: '',
          companyName: '',
          jobTitle: '',
          companySize: '',
          timeline: 'Immediately',
          estimatedBudget: '',
          engagementType: '',
          ndaRequired: false,
          phoneNumber: '',
          message: '',
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: result.message || 'There was a problem with your submission.',
        });
      }
    } catch {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'An unexpected error occurred. Please try again.',
      });
    }
  }

  return (
    <div suppressHydrationWarning className="relative w-full bg-gradient-to-b from-white via-white to-transparent text-foreground">
      <Suspense fallback={null}>
        <SearchParamsSync setValue={form.setValue} />
      </Suspense>

      {/* Hero section */}
      <section id="contact-hero" className="relative w-full bg-transparent overflow-hidden">
        <div className="relative w-full overflow-hidden min-h-[420px] sm:min-h-[480px] lg:min-h-[550px] aspect-[4320/1674]">
          <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[60%] xl:w-[58%] flex items-center justify-end overflow-hidden pointer-events-none select-none z-0">
            <Image
              src="https://res.cloudinary.com/cauders/image/upload/f_auto,q_auto,w_1920/v1793102442/contact_us_km2pwe.jpg"
              alt="Contact Cauders - Let's Build Something Great Together"
              fill
              priority
              unoptimized
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center lg:object-[center_right] opacity-90 lg:opacity-100"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 12%, rgba(0,0,0,1) 32%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 12%, rgba(0,0,0,1) 32%)',
              }}
            />
          </div>

          <div className="absolute inset-0 z-10 flex items-center">
            <div className="max-w-[95rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-xl lg:max-w-2xl text-left">
                <ScrollFadeIn>
                  <ArrowBadge
                    href="#contact-content"
                    text="Contact Cauders"
                    variant="black"
                    className="mb-3 sm:mb-5"
                  />
                </ScrollFadeIn>

                <SectionHeading
                  as="h1"
                  lines={[
                    "Let's Build Something",
                    '<span class="text-cyan-gradient font-medium inline-block">Great Together</span>',
                  ]}
                  subheading="Have a project in mind, an architectural challenge to solve, or ready to scale your software engineering? Connect with our team and let's map out a solution."
                  align="left"
                  subheadingMaxWidth="max-w-xl"
                  subheadingClassName="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/80 dark:text-zinc-300 leading-relaxed font-normal mb-6 sm:mb-8"
                  className="mb-0"
                />

                <ScrollFadeIn delay={250}>
                  <div className="pt-1">
                    <DarkTealButton href="#contact-content" onClick={handleScrollToContent} size="md">
                      Start A Conversation
                    </DarkTealButton>
                  </div>
                </ScrollFadeIn>
              </div>
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="w-full absolute bottom-0 inset-x-0 z-30 pointer-events-none">
          <div className="w-full h-[8px] sm:h-[10px] bg-gradient-to-r from-[#8CEAE5] via-[#00645F] to-[#003B38]" />
        </div>
      </section>

      <div id="contact-content" className="relative overflow-hidden py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full items-start">
            {/* Left Side: Numbered Bento Cards Matching Homepage */}
            <div className="flex flex-col gap-8 mt-2 lg:col-span-5">
              <div className="flex flex-col items-start">
                <ScrollFadeIn>
                  <ArrowBadge href="#contact-content" text="Enterprise Discovery" variant="black" className="mb-2 md:mb-4" />
                </ScrollFadeIn>
                <SectionHeading
                  lines={[
                    'Architected For Scale,',
                    '<span class="text-cyan-gradient font-medium inline-block">Scoped With Precision</span>',
                  ]}
                  subheading="Engage directly with our senior solutions architects to evaluate technical feasibility, system architecture, and delivery scope. We collaborate with leadership teams to design resilient, production-ready software solutions engineered around operational realities."
                  subheadingClassName="max-w-[480px] text-foreground/75 text-xs sm:text-sm md:text-base leading-relaxed"
                  className="mb-2 md:mb-4"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-4.5">
                {consultationPillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <ScrollFadeIn key={pillar.number} delay={idx * 80}>
                      <div className="group relative rounded-2xl bg-white dark:bg-card text-zinc-900 dark:text-zinc-100 border border-zinc-200/90 dark:border-zinc-800 p-5 sm:p-5.5 shadow-[0_4px_18px_rgba(0,49,46,0.04)] hover:shadow-md hover:border-darkTeal/40 transition-all duration-300 overflow-hidden">
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-darkTeal text-teal-300 flex items-center justify-center shadow-sm flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="font-mono text-2xl sm:text-3xl font-extrabold text-zinc-300 dark:text-zinc-700 select-none tracking-tight">
                            {pillar.number}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-headline font-semibold text-foreground tracking-tight mb-1.5">
                          {pillar.title}
                        </h3>

                        <p className="text-xs sm:text-[0.825rem] text-muted-foreground leading-relaxed font-normal">
                          {pillar.description}
                        </p>

                        <div className="bg-[#F8FAF9] dark:bg-zinc-900/60 -mx-5 -mb-5 sm:-mx-5.5 sm:-mb-5.5 mt-3.5 px-5 sm:px-5.5 py-2.5 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                          <span className="text-[11px] sm:text-xs font-medium text-darkTeal dark:text-teal-400">
                            {pillar.takeaway}
                          </span>
                          <span className="text-xs text-darkTeal/60 dark:text-teal-400/60 font-mono">✓</span>
                        </div>
                      </div>
                    </ScrollFadeIn>
                  );
                })}
              </div>
            </div>

            {/* Right Side: Form Card */}
            <div className="w-full lg:col-span-7 lg:col-start-6">
              <ScrollFadeIn delay={200}>
                <Card className="bg-gradient-container border-0 rounded-[24px] p-8 md:p-10 shadow-none relative overflow-hidden backdrop-blur-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white font-normal">First Name</FormLabel>
                              <FormControl>
                                <CustomInput placeholder="Jane" autoComplete="given-name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white font-normal">Last Name</FormLabel>
                              <FormControl>
                                <CustomInput placeholder="Doe" autoComplete="family-name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="workEmail"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white font-normal">Work Email</FormLabel>
                              <FormControl>
                                <CustomInput type="email" placeholder="you@company.com" autoComplete="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phoneNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white font-normal">Phone Number</FormLabel>
                              <FormControl>
                                <CustomInput type="tel" placeholder="+1 555 000 1234" autoComplete="tel" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white font-normal">Company Name</FormLabel>
                            <FormControl>
                              <CustomInput placeholder="Example Company" autoComplete="organization" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="jobTitle"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white font-normal">Job Title</FormLabel>
                              <FormControl>
                                <CustomInput placeholder="Product Manager" autoComplete="organization-title" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="companySize"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white font-normal">Company Size</FormLabel>
                              <CustomSelect
                                value={field.value}
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                placeholder="Please select"
                                options={companySizeOptions}
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="timeline"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white font-normal">Estimated Project Timeline</FormLabel>
                            <CustomSelect
                              value={field.value}
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              placeholder="Please select"
                              options={timelineOptions}
                            />
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="estimatedBudget"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white font-normal">
                                Estimated Budget (USD) <span className="text-white/60 text-xs font-light">(Optional)</span>
                              </FormLabel>
                              <CustomSelect
                                value={field.value}
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                placeholder="Select USD budget range"
                                options={budgetOptions}
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="engagementType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white font-normal">
                                Engagement Scope <span className="text-white/60 text-xs font-light">(Optional)</span>
                              </FormLabel>
                              <CustomSelect
                                value={field.value}
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                placeholder="Select engagement model"
                                options={engagementTypeOptions}
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="ndaRequired"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-2xl border border-white/20 bg-black/15 p-4">
                            <FormControl>
                              <input
                                type="checkbox"
                                id="nda-checkbox"
                                checked={field.value || false}
                                onChange={(e) => field.onChange(e.target.checked)}
                                className="mt-1 h-4 w-4 rounded border-white/30 bg-white/20 text-teal-500 focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#8CEAE5]"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <label htmlFor="nda-checkbox" className="text-white text-xs sm:text-sm font-medium cursor-pointer block">
                                Request a countersigned Mutual NDA before technical architecture disclosure
                              </label>
                              <p className="text-[11px] text-white/70">
                                We execute bilateral NDAs prior to discussing proprietary codebases, data models, or infrastructure.
                              </p>
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white font-normal">Technical Scope &amp; Requirements</FormLabel>
                            <FormControl>
                              <CustomTextarea placeholder="Describe the technical challenges, current architecture, data systems, or delivery milestones you need executed." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <p className="text-[11px] text-white/80 mt-2 mb-6">
                        We respect your privacy and never share your data. By submitting, you agree to our{' '}
                        <Link href="/terms-of-service" className="underline hover:text-white transition-colors">
                          Terms
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy-policy" className="underline hover:text-white transition-colors">
                          Privacy Policy
                        </Link>
                        .
                      </p>

                      <Button type="submit" variant="default" size="lg" className="w-full h-12 text-base hover-white-to-black" disabled={isSubmitting}>
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Request Discovery Consultation
                      </Button>
                    </form>
                  </Form>
                </Card>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPageContent() {
  return <ContactForm />;
}
