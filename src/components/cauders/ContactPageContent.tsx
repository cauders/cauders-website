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
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/app/actions";
import { CustomInput, CustomTextarea, CustomSelect } from "./CustomFormFields";
import ScrollFadeIn from "./ScrollFadeIn";
import { Loader2, Mail, Phone, MapPin } from "lucide-react";
import StandardizedHeading from "./StandardizedHeading";
import { Suspense, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardTitle, CardHeader } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import ArrowBadge from "./ArrowBadge";
import GradientContainer from "./GradientContainer";
import SplitButton from "./SplitButton";
import { cn } from "@/lib/utils";

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

function ContactForm() {
 const { toast } = useToast();
 const searchParams = useSearchParams();
 const jobQuery = searchParams.get('job');
 const emailQuery = searchParams.get('email');

 const form = useForm<z.infer<typeof contactFormSchema>>({
 resolver: zodResolver(contactFormSchema),
 defaultValues: {
 workEmail: emailQuery || "",
 firstName: "",
 lastName: "",
 companyName: "",
 jobTitle: jobQuery || "",
 companySize: "",
 timeline: "Immediately",
 phoneNumber: "",
 message: jobQuery ? `I'm interested in the ${jobQuery} position.` : "",
 },
 });

 useEffect(() => {
 const jobTitle = searchParams.get('job');
 if (jobTitle) {
 form.setValue('jobTitle', jobTitle);
 form.setValue('message', `I am applying for the ${jobTitle} position.`);
 }
 const email = searchParams.get('email');
 if (email) {
 form.setValue('workEmail', email);
 }
 }, [searchParams, form]);


 const { isSubmitting } = form.formState;

 async function onSubmit(values: z.infer<typeof contactFormSchema>) {
 try {
 const result = await submitContactForm(values);
 if (result.success) {
 toast({
 title: "Success!",
 description: result.message,
 });
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
 <div className="text-foreground">
 <section id="contact-hero" className="h-auto py-20 md:py-0 md:h-[50vh] flex items-center justify-center relative overflow-hidden mt-16 md:mt-24">
 <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <div className="max-w-4xl mx-auto">
 <StandardizedHeading lines={["Let's Build Something Great Together"]} />
 <p className="mt-4 text-body-base text- max-w-xl mx-auto">
 Have a project in mind, a question to ask, or just want to say hello? We're here and ready to listen. Let's start a conversation that could lead to the next big thing.
 </p>
 <div className="mt-8">
 <Button onClick={handleScrollToContent} variant="zinc" size="lg">
 Get In Touch
 </Button>
 </div>
 </div>
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
 <StandardizedHeading lines={[
 { text: "Tell Us About" },
 { text: "Your Vision", isGradient: true }
 ]} className="mb-2 md:mb-4"/>
 <ScrollFadeIn delay={100}>
 <p className="mt-2 md:mt-4 text-xs md:text-base text-foreground max-w-md">
 Connect with our specialists to explore custom digital solutions. Share your vision with us, and we'll help map out the perfect strategy to accelerate your growth.
 </p>
 </ScrollFadeIn>
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
 )
}

export default function ContactPageContent() {
 return (
 <Suspense fallback={<div>Loading...</div>}>
 <ContactForm />
 </Suspense>
 )
}
