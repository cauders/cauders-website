'use client';

import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { submitFeedbackForm } from "@/app/actions";
import { CustomInput, CustomTextarea } from "./CustomFormFields";
import ScrollFadeIn from "./ScrollFadeIn";
import { Loader2, Bug, Lightbulb, Heart, MessageSquare } from "lucide-react";
import StandardizedHeading from "./StandardizedHeading";
import { trackConversion } from "@/lib/analytics";
import ArrowBadge from "./ArrowBadge";
import { Card } from "../ui/card";
import BlurCircle from "./BlurCircle";
import { cn } from "@/lib/utils";
import Link from "next/link";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const feedbackFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  type: z.enum(["bug", "suggestion", "praise", "other"], {
    required_error: "You need to select a feedback type.",
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  file: z.any()
    .refine((file) => !file || file?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (file) => !file || file?.type === '' || ACCEPTED_FILE_TYPES.includes(file?.type),
      "Only .jpg, .png, and .webp files are accepted."
    )
    .optional(),
});

export default function FeedbackPageContent() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof feedbackFormSchema>>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      file: undefined,
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof feedbackFormSchema>) {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('type', values.type);
    formData.append('message', values.message);
    if (values.file) {
      formData.append('file', values.file);
    }
    
    try {
      const result = await submitFeedbackForm(formData);
      if (result.success) {
        trackConversion('feedback_submitted', { type: values.type });
        toast({
          title: "Feedback Submitted!",
          description: result.message,
        });
        form.reset();
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
    <div className="relative overflow-hidden text-foreground">
      <BlurCircle className="absolute top-0 -left-32 w-96 h-96" />
      <BlurCircle className="absolute bottom-0 -right-32 w-96 h-96" />
      
      <div id="feedback-content" className="relative z-10 overflow-hidden py-20 lg:py-32 mt-12 md:mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full items-start">
            
            {/* Left Side: Text and Value Points */}
            <div className="flex flex-col gap-10 lg:col-span-5 lg:sticky lg:top-32">
              <div>
                <ScrollFadeIn>
                  <ArrowBadge href="#feedback-content" text="Feedback" variant="black" className="mb-2 md:mb-4" />
                </ScrollFadeIn>
                <StandardizedHeading as="h1" lines={["Share Your Feedback"]} className="mb-2 md:mb-4 text-left" />
                <ScrollFadeIn delay={100}>
                  <p className="mt-2 md:mt-4 text-xs md:text-base text-foreground/80 leading-relaxed max-w-md">
                    We value your input! Whether you&apos;ve found a bug, have an innovative suggestion, or just want to share some praise, your thoughts help us craft exceptional digital experiences.
                  </p>
                </ScrollFadeIn>
              </div>

              <div className="grid grid-cols-1 gap-y-8">
                <ScrollFadeIn delay={100} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-foreground" />
                    <h4 className="font-bold text-foreground">Continuous Evolution</h4>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed pl-5 max-w-md">
                    Every suggestion is reviewed directly by our design and engineering leads to prioritize improvements.
                  </p>
                </ScrollFadeIn>
                <ScrollFadeIn delay={200} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-foreground" />
                    <h4 className="font-bold text-foreground">Rapid Issue Resolution</h4>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed pl-5 max-w-md">
                    Spotted a bug or visual defect? Attach details or screenshots and our team will investigate promptly.
                  </p>
                </ScrollFadeIn>
                <ScrollFadeIn delay={300} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-foreground" />
                    <h4 className="font-bold text-foreground">Community Driven</h4>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed pl-5 max-w-md">
                    We believe the best platforms are built collaboratively with the people who interact with them every day.
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
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                      <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-white font-normal">What is this about?</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-2 sm:grid-cols-4 gap-3.5"
                              >
                                {[
                                  { value: "bug", label: "Bug Report", icon: Bug },
                                  { value: "suggestion", label: "Suggestion", icon: Lightbulb },
                                  { value: "praise", label: "Praise", icon: Heart },
                                  { value: "other", label: "Other", icon: MessageSquare },
                                ].map(item => (
                                  <FormItem key={item.value} className="space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value={item.value} id={item.value} aria-label={item.label} className="sr-only peer" />
                                    </FormControl>
                                    <FormLabel
                                      htmlFor={item.value}
                                      className={cn(
                                        "flex flex-col items-center justify-center gap-2 p-3.5 sm:p-4 rounded-2xl cursor-pointer select-none",
                                        "border border-white/10 bg-white/10 backdrop-blur-sm text-white/90 font-normal",
                                        "transition-all duration-200 hover:bg-white/15 hover:border-white/20 hover:text-white",
                                        "peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/25 peer-data-[state=checked]:text-white peer-data-[state=checked]:ring-1 peer-data-[state=checked]:ring-primary"
                                      )}
                                    >
                                      <item.icon className="h-5 w-5" />
                                      <span className="text-xs sm:text-sm font-medium text-center">{item.label}</span>
                                    </FormLabel>
                                  </FormItem>
                                ))}
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white font-normal">Your Message</FormLabel>
                            <FormControl>
                              <CustomTextarea placeholder="Please describe your feedback in detail..." {...field} className="min-h-[140px]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="file"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white font-normal">Attach a Screenshot (Optional)</FormLabel>
                            <FormControl>
                              <CustomInput 
                                type="file" 
                                accept=".jpg,.jpeg,.png,.webp"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.onChange(e.target.files ? e.target.files[0] : null)}
                                className="file:text-white file:font-medium file:mt-0.5 cursor-pointer pt-2"
                              />
                            </FormControl>
                            <FormDescription className="text-white/60 text-xs mt-1">
                              If you&apos;re reporting a bug, a screenshot can be very helpful. JPG, PNG, or WEBP up to 5MB.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <p className="text-[11px] text-white/70 mt-2 mb-4">
                        We value your privacy. By submitting feedback, you agree to our <Link href="/terms-of-service" className="underline hover:text-white transition-colors">Terms</Link> and <Link href="/privacy-policy" className="underline hover:text-white transition-colors">Privacy Policy</Link>.
                      </p>

                      <div className="pt-2">
                        <Button type="submit" size="lg" variant="default" className={cn("w-full h-12 text-base", "hover-white-to-black")} disabled={isSubmitting}>
                          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                          Submit Feedback
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
