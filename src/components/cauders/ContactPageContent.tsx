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
import { Loader2 } from 'lucide-react';
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
  { value: 'Just exploring', label: 'Just exploring / Planning' },
];

const budgetOptions = [
  { value: '< $25,000 USD', label: '< $25,000 USD' },
  { value: '$25,000 - $50,000 USD', label: '$25,000 – $50,000 USD' },
  { value: '$50,000 - $100,000 USD', label: '$50,000 – $100,000 USD' },
  { value: '$100,000 - $250,000+ USD', label: '$100,000 – $250,000+ USD' },
  { value: 'To Be Determined', label: 'To Be Determined' },
];

const consultationPoints = [
  {
    title: 'Strategic Consultation',
    description:
      "Share your goals and constraints — we'll map out a resilient technical architecture tailored to your needs.",
  },
  {
    title: 'Custom Solutions',
    description:
      "Discover how our engineering capabilities and services align directly with your team's specific priorities.",
  },
  {
    title: 'Enterprise Readiness',
    description:
      'Discuss security, performance, and seamless scalability directly with our senior engineers.',
  },
  {
    title: 'Proof Of Value',
    description:
      'Leave with clear project timelines, transparent pricing context, and a practical rollout path.',
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
            <div className="w-full max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="w-full max-w-[620px] lg:max-w-[660px] xl:max-w-[700px]">
                <ScrollFadeIn>
                  <ArrowBadge href="#contact-hero" text="Reach Out Today" variant="black" className="mb-2 md:mb-4" />
                </ScrollFadeIn>
                <ScrollFadeIn delay={100}>
                  <SectionHeading
                    as="h1"
                    align="left"
                    lines={[
                      "Let's Build Something",
                      '<span class="text-cyan-gradient font-medium inline-block">Great Together</span>',
                    ]}
                    subheading="Whether you are modernizing core systems, scaling an engineering team, or launching a new venture, our team is ready to help."
                    className="mb-6 md:mb-8"
                  />
                </ScrollFadeIn>
                <ScrollFadeIn delay={200}>
                  <div className="flex flex-wrap items-center gap-4">
                    <DarkTealButton href="#contact-content" size="md">
                      Discuss Your Project
                    </DarkTealButton>
                    <Link
                      href="/careers"
                      className="px-6 py-3 rounded-full text-sm font-semibold text-foreground/80 hover:text-foreground hover:bg-black/5 transition-all inline-flex items-center gap-2"
                    >
                      Explore Careers
                    </Link>
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
            {/* Left Side: Strategic Consultation Points (Unboxed list, matching homepage typography) */}
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
                  subheading="Connect with our solutions architects to explore custom digital solutions. Share your vision and constraints with us, and we'll help map out the technical strategy to accelerate your growth."
                  subheadingClassName="max-w-[480px] text-foreground/75 text-sm md:text-base leading-relaxed"
                  className="mb-2 md:mb-4"
                />
              </div>

              <div className="grid grid-cols-1 gap-y-8">
                {consultationPoints.map((point, idx) => (
                  <ScrollFadeIn key={point.title} delay={(idx + 1) * 80} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-darkTeal shrink-0" />
                      <h3 className="font-headline font-semibold text-base sm:text-lg text-foreground tracking-tight">
                        {point.title}
                      </h3>
                    </div>
                    <p className="text-sm text-foreground/75 pl-5.5 leading-relaxed font-normal max-w-md">
                      {point.description}
                    </p>
                  </ScrollFadeIn>
                ))}
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
                      <FormField
                        control={form.control}
                        name="workEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white font-normal">Work Email</FormLabel>
                            <FormControl>
                              <CustomInput type="email" placeholder="jane@company.com" autoComplete="email" {...field} />
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
                            <FormLabel className="text-white font-normal">Phone Number (Optional)</FormLabel>
                            <FormControl>
                              <CustomInput type="tel" placeholder="+1 (555) 000-0000" autoComplete="tel" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
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
                                <CustomInput placeholder="VP of Engineering" autoComplete="organization-title" {...field} />
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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                placeholder="Select USD budget"
                                options={budgetOptions}
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white font-normal">Project Details &amp; Requirements</FormLabel>
                            <FormControl>
                              <CustomTextarea placeholder="Tell us about your technical challenges, timeline, or architecture requirements." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <p className="text-[11px] text-white/80 mt-2 mb-6">
                        We respect your privacy and only use your details to respond to your technical inquiry. By submitting, you agree to our{' '}
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
                        Submit Inquiry
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
