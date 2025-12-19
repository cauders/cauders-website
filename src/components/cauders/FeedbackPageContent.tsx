
'use client';

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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { submitFeedbackForm } from "@/app/actions";
import ScrollFadeIn from "./ScrollFadeIn";
import { Loader2, Bug, Lightbulb, Heart, MessageSquare } from "lucide-react";
import StandardizedHeading from "./StandardizedHeading";
import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";
import GradientContainer from "./GradientContainer";
import { Card } from "../ui/card";
import BlurCircle from "./BlurCircle";
import { cn } from "@/lib/utils";

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
    <div className="text-foreground relative overflow-hidden">
      <BlurCircle className="absolute top-0 -left-32 w-96 h-96" />
      <BlurCircle className="absolute bottom-0 -right-32 w-96 h-96" />
      <section className="pt-32 pb-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <StandardizedHeading lines={[{ text: "Share Your Feedback" }]} />
            <p className="mt-4 text-sm md:text-base text-foreground/70 max-w-2xl mx-auto">
                We value your input! Whether you've found a bug, have a suggestion, or just want to share some praise, your feedback helps us improve.
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
                                name="type"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                    <FormLabel>What is this about?</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="grid grid-cols-2 md:grid-cols-4 gap-4"
                                        >
                                            {[
                                                { value: "bug", label: "Bug Report", icon: Bug },
                                                { value: "suggestion", label: "Suggestion", icon: Lightbulb },
                                                { value: "praise", label: "Praise", icon: Heart },
                                                { value: "other", label: "Other", icon: MessageSquare },
                                            ].map(item => (
                                                <FormItem key={item.value}>
                                                    <FormControl>
                                                        <RadioGroupItem value={item.value} id={item.value} className="sr-only peer" />
                                                    </FormControl>
                                                    <FormLabel htmlFor={item.value} className="flex flex-col items-center justify-center rounded-md border-2 border-white/30 bg-white/10 p-4 hover:bg-white/20 hover:text-white peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/20 [&:has([data-state=checked])]:border-primary cursor-pointer">
                                                        <item.icon className="mb-2 h-6 w-6" />
                                                        {item.label}
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
                                        <FormLabel>Your Message</FormLabel>
                                        <FormControl>
                                        <Textarea placeholder="Please describe your feedback in detail..." {...field} className="min-h-[150px] bg-white/10 border-white/30 placeholder:text-white/70 focus:border-white" />
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
                                    <FormLabel>Attach a Screenshot (Optional)</FormLabel>
                                    <FormControl>
                                        <Input 
                                            type="file" 
                                            accept=".jpg, .jpeg, .png, .webp"
                                            onChange={(e) => field.onChange(e.target.files ? e.target.files[0] : null)}
                                            className="bg-white/10 border-white/30 file:text-white"
                                        />
                                    </FormControl>
                                    <FormDescription className="text-white/60">
                                        If you're reporting a bug, a screenshot can be very helpful. Max file size: 5MB.
                                    </FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="text-center pt-4">
                                <Button type="submit" size="lg" variant="default" className={cn("w-full md:w-auto", "hover-white-to-black")} disabled={isSubmitting}>
                                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    Submit Feedback
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
