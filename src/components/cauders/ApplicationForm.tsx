'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { CustomInput, CustomTextarea, CustomSelect } from './CustomFormFields';
import { useToast } from '@/hooks/use-toast';
import { submitApplicationForm } from '@/app/actions';
import { jobOpenings } from '@/lib/data';
import { Loader2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ScrollFadeIn from './ScrollFadeIn';
import { cn } from '@/lib/utils';
import { trackConversion } from '@/lib/analytics';
import BlurCircle from './BlurCircle';
import ArrowBadge from './ArrowBadge';
import { Card } from "../ui/card";

const MAX_RESUME_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_RESUME_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

const applicationFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  portfolioUrl: z.union([z.string().url({ message: "Please enter a valid URL." }), z.literal("")]).optional(),
  position: z.string({ required_error: "Please select a position."}),
  message: z.string().min(10, { message: "Your cover message must be at least 10 characters." }),
  resume: z.any()
    .refine((file) => file?.size > 0, "A resume/CV is required.")
    .refine((file) => file?.size <= MAX_RESUME_SIZE, `Max file size is 5MB.`)
    .refine(
      (file) => ACCEPTED_RESUME_TYPES.includes(file?.type),
      "Only .pdf and .doc/.docx files are accepted."
    ),
});

function ApplicationFormContent() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const jobQuery = searchParams.get('role') || searchParams.get('job');

  const form = useForm<z.infer<typeof applicationFormSchema>>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      portfolioUrl: "",
      position: jobQuery || "",
      message: "",
      resume: undefined,
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof applicationFormSchema>) {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    if (values.phone) formData.append('phone', values.phone);
    if (values.portfolioUrl) formData.append('portfolioUrl', values.portfolioUrl);
    formData.append('position', values.position);
    formData.append('message', values.message);
    if (values.resume) {
      formData.append('resume', values.resume);
    }

    try {
      const result = await submitApplicationForm(formData);
      if (result.success) {
        toast({
          title: "Application Submitted!",
          description: result.message,
        });
        trackConversion('career_application_submitted', { position: values.position });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: result.message || "There was a problem with your submission.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "An unexpected server error occurred. Please try again.",
      });
    }
  }

  const positionOptions = jobOpenings.map(job => ({
    label: job.title,
    value: job.title
  }));

  return (
    <div className="relative overflow-hidden text-foreground">
      <BlurCircle className="absolute top-0 -left-32 w-96 h-96" />
      <BlurCircle className="absolute bottom-0 -right-32 w-96 h-96" />
      
      <div id="apply-content" className="relative z-10 overflow-hidden py-20 lg:py-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full items-start">
            
            {/* Left Side: Text and Bullets */}
            <div className="flex flex-col gap-12 lg:col-span-5 lg:sticky lg:top-32">
              <div>
                <ArrowBadge href="#apply-content" text="Application" variant="black" className="mb-2 md:mb-4" />
                <SectionHeading 
                  as="h1"
                  lines={[
                    { text: "Join Our Team" }
                  ]}
                  subheading="We are excited to learn more about you. Please fill out the form to apply for an open position at Cauders. Share your experience, skills, and what drives you to build the next generation of AI and software solutions."
                  className="mb-2 md:mb-4 text-left"
                />
              </div>

              <div className="grid grid-cols-1 gap-y-8">
                <ScrollFadeIn delay={100} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-foreground" />
                    <h4 className="font-bold text-foreground">Tell us your story</h4>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed pl-5 font-light">
                    We don't just look at resumes; we look at the people behind them. Show us your passion and projects.
                  </p>
                </ScrollFadeIn>
                <ScrollFadeIn delay={200} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-foreground" />
                    <h4 className="font-bold text-foreground">Fast feedback</h4>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed pl-5 font-light">
                    We respect your time. Our hiring team reviews applications promptly and keeps you updated.
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
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10 text-white">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white font-normal">Full Name</FormLabel>
                              <FormControl>
                                <CustomInput placeholder="Enter your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white font-normal">Email Address</FormLabel>
                              <FormControl>
                                <CustomInput type="email" placeholder="Enter your email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FormField
                          control={form.control}
                          name="phone"
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
                        <FormField
                          control={form.control}
                          name="portfolioUrl"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white font-normal">Portfolio / LinkedIn URL</FormLabel>
                              <FormControl>
                                <CustomInput type="url" placeholder="https://..." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="position"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white font-normal">Position Applying For</FormLabel>
                            <CustomSelect 
                              value={field.value} 
                              onValueChange={field.onChange} 
                              defaultValue={field.value} 
                              placeholder="Select the position" 
                              options={positionOptions}
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
                            <FormLabel className="text-white font-normal">Cover Message</FormLabel>
                            <FormControl>
                              <CustomTextarea placeholder="Tell us why you'd be a great fit for this role..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="resume"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white font-normal">Resume/CV</FormLabel>
                            <FormControl>
                              <CustomInput 
                                type="file" 
                                accept=".pdf,.doc,.docx"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.onChange(e.target.files ? e.target.files[0] : null)}
                                className="file:text-white file:font-medium file:mt-1 cursor-pointer pt-2"
                              />
                            </FormControl>
                            <FormDescription className="text-white/70">
                              Required. PDF, DOC, or DOCX files only. Max size: 5MB.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <p className="text-[11px] text-white/80 mt-2 mb-4">
                        By submitting your application, you authorize Cauders to process your personal data and resume strictly for recruitment purposes in accordance with our <Link href="/privacy-policy" className="underline hover:text-white transition-colors">Privacy Policy</Link>.
                      </p>

                      <div className="text-left pt-2">
                        <Button type="submit" size="lg" variant="default" className={cn("w-full h-12 text-base", "hover-white-to-black")} disabled={isSubmitting}>
                          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                          Submit Application
                        </Button>
                      </div>
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

export default function ApplicationForm() {
  return (
    <Suspense>
      <ApplicationFormContent />
    </Suspense>
  );
}
