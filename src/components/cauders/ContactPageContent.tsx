"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/app/actions";
import { CustomInput, CustomTextarea, CustomSelect } from "./CustomFormFields";
import ScrollFadeIn from "./ScrollFadeIn";
import { Loader2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Suspense, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import { Card } from "../ui/card";
import Link from "next/link";
import ArrowBadge from "./ArrowBadge";
import { trackConversion } from "@/lib/analytics";
import DarkTealButton from "./DarkTealButton";

const contactFormSchema = z.object({
  workEmail: z.string().email({ message: "Please enter a valid email address." }),
  firstName: z.string().min(2, { message: "First name is required." }),
  lastName: z.string().min(2, { message: "Last name is required." }),
  companyName: z.string().min(2, { message: "Company name is required." }),
  jobTitle: z.string().min(2, { message: "Job title is required." }),
  companySize: z.string().min(1, { message: "Company size is required." }),
  timeline: z.string().min(1, { message: "Timeline is required." }),
  phoneNumber: z.string().optional(),
  message: z.string().optional(),
});

const companySizeOptions = [
  { value: "1-10", label: "1-10 employees" },
  { value: "11-50", label: "11-50 employees" },
  { value: "51-200", label: "51-200 employees" },
  { value: "201-500", label: "201-500 employees" },
  { value: "500+", label: "500+ employees" },
];

const timelineOptions = [
  { value: "Immediately", label: "Immediately" },
  { value: "Within 1 - 3 months", label: "Within 1 - 3 months" },
  { value: "Within 3 - 6 months", label: "Within 3 - 6 months" },
  { value: "Just exploring", label: "Just exploring" },
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
      workEmail: "",
      firstName: "",
      lastName: "",
      companyName: "",
      jobTitle: "",
      companySize: "",
      timeline: "Immediately",
      phoneNumber: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    try {
      const result = await submitContactForm(values);
      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        });
        trackConversion('contact_form_submitted', { company: values.companyName, timeline: values.timeline });
        form.reset({ workEmail: "", firstName: "", lastName: "", companyName: "", jobTitle: "", companySize: "", timeline: "Immediately", phoneNumber: "", message: "" });
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: result.message || "There was a problem with your submission.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "An unexpected error occurred. Please try again.",
      });
    }
  }

  return (
    <div suppressHydrationWarning className="relative w-full bg-gradient-to-b from-white via-white to-transparent text-foreground">
      <Suspense fallback={null}>
        <SearchParamsSync setValue={form.setValue} />
      </Suspense>
      {/* Hero section: Height matches Services Overview hero section exactly */}
      <section id="contact-hero" className="relative w-full bg-transparent overflow-hidden">
        {/* Exact same height mechanism as Services Overview: uses identical reference image bounds */}
        <div className="relative w-full overflow-hidden min-h-[420px] sm:min-h-[480px] lg:min-h-[550px] aspect-[4320/1674]">
          {/* Reference spacer: invisible identical image that sets the exact height of Services Overview on every screen width */}
          <div className="w-full flex justify-center overflow-hidden pointer-events-none select-none">
            <img
              src="https://res.cloudinary.com/cauders/image/upload/v1792742641/Group_4654_t9qwca.png"
              alt=""
              aria-hidden="true"
              width={4320}
              height={1674}
              style={{ aspectRatio: '4320 / 1674' }}
              className="w-[110%] max-w-none h-auto block opacity-0 pointer-events-none select-none"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Background illustration aligned to right - properly scaled to fill height and eliminate top empty space */}
          <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[60%] xl:w-[58%] flex items-center justify-end overflow-hidden pointer-events-none select-none z-0">
            <img
              src="https://res.cloudinary.com/cauders/image/upload/v1793102442/contact_us_km2pwe.jpg"
              alt="Contact Cauders - Let's Build Something Great Together"
              className="w-full h-full object-cover object-center lg:object-[center_right] max-w-none opacity-90 lg:opacity-100"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 12%, rgba(0,0,0,1) 32%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 12%, rgba(0,0,0,1) 32%)',
              }}
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Content on the left side of the hero */}
          <div className="absolute inset-0 z-10 flex items-center">
            <div className="max-w-[95rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl lg:max-w-2xl text-left">
              {/* ArrowBadge: > Contact Cauders < */}
              <ScrollFadeIn>
                <ArrowBadge
                  href="#contact-content"
                  text="Contact Cauders"
                  variant="black"
                  className="mb-3 sm:mb-5"
                />
              </ScrollFadeIn>

              {/* Standardized SectionHeading */}
              <SectionHeading
                as="h1"
                lines={[
                  "Let's Build Something",
                  '<span class="text-cyan-gradient font-medium inline-block">Great Together</span>'
                ]}
                subheading="Have a project in mind, an architectural challenge to solve, or ready to scale your software engineering? Connect with our team and let's map out a solution."
                align="left"
                subheadingMaxWidth="max-w-xl"
                subheadingClassName="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/80 dark:text-zinc-300 leading-relaxed font-normal mb-6 sm:mb-8"
                className="mb-0"
              />

              {/* CTA Button */}
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

        {/* Full-width Vibrant Cyan Gradient Divider directly attached to bottom of Hero */}
        <div
          aria-hidden="true"
          className="w-full absolute bottom-0 inset-x-0 z-30 pointer-events-none"
        >
          <div className="w-full h-[8px] sm:h-[10px] bg-gradient-to-r from-[#8CEAE5] via-[#00645F] to-[#003B38]" />
        </div>
      </section>
      
      <div id="contact-content" className="relative overflow-hidden py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full items-start">
            
            {/* Left Side: Text and Bullets */}
            <div className="flex flex-col gap-12 mt-4 lg:col-span-5">
              <div className="flex flex-col items-start">
                <ScrollFadeIn>
                  <ArrowBadge href="#contact-content" text="Consultation" variant="black" className="mb-2 md:mb-4" />
                </ScrollFadeIn>
                <SectionHeading 
                  lines={[
                    'Tell Us About',
                    '<span class="text-cyan-gradient font-medium inline-block">Your Vision</span>'
                  ]}
                  subheading="Connect with our specialists to explore custom digital solutions. Share your vision with us, and we'll help map out the perfect strategy to accelerate your growth."
                  subheadingClassName="max-w-[418px] text-foreground/75"
                  className="mb-2 md:mb-4"
                />
              </div>

              <div className="grid grid-cols-1 gap-y-10">
                <ScrollFadeIn delay={100} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-foreground" />
                    <h4 className="font-bold text-foreground">Strategic Consultation</h4>
                  </div>
                  <p className="text-sm text-foreground/80 pl-5 max-w-md">
                    Share your goals and constraints — we'll map out the perfect technical architecture for your needs.
                  </p>
                </ScrollFadeIn>
                <ScrollFadeIn delay={200} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-foreground" />
                    <h4 className="font-bold text-foreground">Custom Solutions</h4>
                  </div>
                  <p className="text-sm text-foreground/80 pl-5 max-w-md">
                    Discover how our capabilities and services align perfectly with your team's specific priorities.
                  </p>
                </ScrollFadeIn>
                <ScrollFadeIn delay={300} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-foreground" />
                    <h4 className="font-bold text-foreground">Enterprise Readiness</h4>
                  </div>
                  <p className="text-sm text-foreground/80 pl-5 max-w-md">
                    Discuss security, performance, and seamless scalability directly with our expert engineers.
                  </p>
                </ScrollFadeIn>
                <ScrollFadeIn delay={400} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-foreground" />
                    <h4 className="font-bold text-foreground">Proof Of Value</h4>
                  </div>
                  <p className="text-sm text-foreground/80 pl-5 max-w-md">
                    Leave with clear project timelines, transparent pricing context, and a practical rollout path.
                  </p>
                </ScrollFadeIn>
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
                                <CustomInput placeholder="Jane" {...field} />
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
                                <CustomInput placeholder="Doe" {...field} />
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
                                <CustomInput type="email" placeholder="you@company.com" {...field} />
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
                                <CustomInput type="tel" placeholder="+1 555 000 1234" {...field} />
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
                              <CustomInput placeholder="Example Company" {...field} />
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
                                <CustomInput placeholder="Product Manager" {...field} />
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
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white font-normal">Project Details & Requirements</FormLabel>
                            <FormControl>
                              <CustomTextarea placeholder="Tell us about your current process, timeline, or requirements." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <p className="text-[11px] text-white mt-2 mb-6">
                        We only use your details to contact you about our products and services. By submitting, you agree to our <Link href="/terms-of-service" className="underline hover:text-white transition-colors">Terms</Link> and <Link href="/privacy-policy" className="underline hover:text-white transition-colors">Privacy Policy</Link>.
                      </p>

                      <Button type="submit" variant="default" size="lg" className="w-full h-12 text-base hover-white-to-black" disabled={isSubmitting}>
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Submit
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
