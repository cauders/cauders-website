
'use client';

import { Suspense } from 'react';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { submitApplicationForm } from '@/app/actions';
import { jobOpenings } from '@/lib/data';
import { Loader2 } from 'lucide-react';
import StandardizedHeading from './StandardizedHeading';
import GradientContainer from './GradientContainer';
import ScrollFadeIn from './ScrollFadeIn';
import { cn } from '@/lib/utils';
import BlurCircle from './BlurCircle';

const MAX_RESUME_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_RESUME_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

const applicationFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
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
  const jobQuery = searchParams.get('job');

  const form = useForm<z.infer<typeof applicationFormSchema>>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      name: "",
      email: "",
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

  return (
    <div className="relative overflow-hidden text-foreground">
      <BlurCircle className="absolute top-0 -left-32 w-96 h-96" />
      <BlurCircle className="absolute bottom-0 -right-32 w-96 h-96" />
      <section className="pt-32 pb-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <StandardizedHeading lines={[{ text: "Apply for a Position" }]} />
            <p className="mt-4 text-sm md:text-base text-foreground/70 max-w-2xl mx-auto">
                We're excited to learn more about you. Please fill out the form below to apply for an open position at Cauders.
            </p>
        </div>
      </section>
      
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <GradientContainer className="rounded-2xl p-8 md:p-12">
            <ScrollFadeIn>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} className="bg-white/10 border-white/30 placeholder:text-white/70 focus:border-white" />
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
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} className="bg-white/10 border-white/30 placeholder:text-white/70 focus:border-white" />
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
                        <FormLabel>Position Applying For</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/10 border-white/30 placeholder:text-white/70 focus:border-white">
                              <SelectValue placeholder="Select the position" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {jobOpenings.map(job => (
                              <SelectItem key={job.title} value={job.title}>{job.title}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cover Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us why you'd be a great fit for this role..." {...field} className="min-h-[150px] bg-white/10 border-white/30 placeholder:text-white/70 focus:border-white" />
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
                        <FormLabel>Resume/CV</FormLabel>
                        <FormControl>
                          <Input 
                            type="file" 
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => field.onChange(e.target.files ? e.target.files[0] : null)}
                            className="bg-white/10 border-white/30 file:text-white"
                          />
                        </FormControl>
                        <FormDescription className="text-white/60">
                          Required. PDF, DOC, or DOCX files only. Max size: 5MB.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="text-center pt-4">
                    <Button type="submit" size="lg" variant="default" className={cn("w-full md:w-auto", "hover-white-to-black")} disabled={isSubmitting}>
                      {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Submit Application
                    </Button>
                  </div>
                </form>
              </Form>
            </ScrollFadeIn>
          </GradientContainer>
        </div>
      </section>
    </div>
  );
}

export default function ApplicationForm() {
    return (
        <Suspense>
            <ApplicationFormContent />
        </Suspense>
    )
}
