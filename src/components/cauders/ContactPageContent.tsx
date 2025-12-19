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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/app/actions";
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
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  jobTitle: z.string().optional(),
});

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
      name: "",
      email: emailQuery || "",
      message: jobQuery ? `I'm interested in the ${jobQuery} position.` : "",
      jobTitle: jobQuery || "",
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
      form.setValue('email', email);
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
        form.reset({ name: "", email: "", message: "", jobTitle: "" });
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
        <section id="contact-hero" className="h-auto py-24 md:h-screen md:py-0 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <Image
                src="/images/background/overlay-bg-3.svg"
                alt="background overlay"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
                />
                <Image
                src="/images/background/overlay-bg-2.svg"
                alt="background overlay"
                width={500}
                height={500}
                className="w-1/2 h-auto absolute -top-48 -left-48 object-cover"
                />
            </div>
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <StandardizedHeading lines={["Let's Build Something Great Together"]} />
                    <p className="mt-4 text-xs md:text-sm text-foreground/70 max-w-xl mx-auto">
                       Have a project in mind, a question to ask, or just want to say hello? We're here and ready to listen. Let's start a conversation that could lead to the next big thing.
                    </p>
                    <div className="mt-8">
                    <Button onClick={handleScrollToContent} variant="zinc" size="zinc">
                        Get In Touch
                    </Button>
                    </div>
                </div>
            </div>
        </section>
        
        <div id="contact-content" className="relative overflow-hidden">
            <GradientContainer className="py-24 lg:py-32" imageSrc="" >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
                      <div>
                        <ScrollFadeIn>
                            <StandardizedHeading lines={["Send Us a Message"]} className="text-2xl md:text-3xl text-white mb-6"/>
                        </ScrollFadeIn>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <ScrollFadeIn delay={100}>
                                    <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormControl>
                                            <Input placeholder="Enter your name" {...field} className="flex-grow h-12 px-6 rounded-full border-2 border-white/30 bg-white/15 backdrop-blur-[50px] text-white placeholder:text-white/70 transition-all duration-300 hover:bg-white/25 hover:border-white/50 focus:outline-none focus:ring-0 focus:border-white/50 text-base placeholder:text-sm placeholder:font-normal" />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                </ScrollFadeIn>
                                <ScrollFadeIn delay={200}>
                                    <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormControl>
                                            <Input type="email" placeholder="Enter your email" {...field} className="flex-grow h-12 px-6 rounded-full border-2 border-white/30 bg-white/15 backdrop-blur-[50px] text-white placeholder:text-white/70 transition-all duration-300 hover:bg-white/25 hover:border-white/50 focus:outline-none focus:ring-0 focus:border-white/50 text-base placeholder:text-sm placeholder:font-normal" />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                </ScrollFadeIn>
                                <ScrollFadeIn delay={300}>
                                     <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                <Textarea placeholder="How can we help you?" {...field} className="flex-grow h-24 px-6 py-3 rounded-3xl border-2 border-white/30 bg-white/15 backdrop-blur-[50px] text-white placeholder:text-white/70 transition-all duration-300 hover:bg-white/25 hover:border-white/50 focus:outline-none focus:ring-0 focus:border-white/50 text-base placeholder:text-sm placeholder:font-normal" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </ScrollFadeIn>
                                <ScrollFadeIn delay={400}>
                                    <Button type="submit" size="lg" variant="default" className={cn("w-full", "hover-white-to-black")} disabled={isSubmitting}>
                                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    Send Message
                                    </Button>
                                </ScrollFadeIn>
                            </form>
                        </Form>
                      </div>

                      <div>
                            <ScrollFadeIn>
                                <div className="flex flex-col items-start gap-2">
                                    <ArrowBadge href="#" text="Contact Us" />
                                    <StandardizedHeading lines={["Get In Touch"]} className="text-2xl md:text-3xl text-white"/>
                                </div>
                                <p className="text-white/80 mt-4 mb-6">Find us at our office or drop us a line via email or phone. We're always happy to connect.</p>
                            </ScrollFadeIn>
                            <div className="space-y-4">
                               <ScrollFadeIn delay={100}>
                                    <Card className="bg-card border-0 p-4 md:p-6 rounded-2xl shadow-smooth-lift">
                                        <CardContent className="p-0 flex items-center gap-4">
                                            <div className="bg-zinc p-3 rounded-full">
                                                <Mail className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-lg font-medium font-headline text-foreground">Email</CardTitle>
                                                <p className="text-sm text-foreground/80">
                                                    <Link href="mailto:info@cauders.com" className="hover:underline">info@cauders.com</Link>
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </ScrollFadeIn>
                                <ScrollFadeIn delay={200}>
                                    <Card className="bg-card border-0 p-4 md:p-6 rounded-2xl shadow-smooth-lift">
                                        <CardContent className="p-0 flex items-center gap-4">
                                            <div className="bg-zinc p-3 rounded-full">
                                                <Phone className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-lg font-medium font-headline text-foreground">Phone</CardTitle>
                                                <p className="text-sm text-foreground/80">+92 339 0107377</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </ScrollFadeIn>
                                <ScrollFadeIn delay={300}>
                                    <Card className="bg-card border-0 p-4 md:p-6 rounded-2xl shadow-smooth-lift">
                                        <CardContent className="p-0 flex items-center gap-4">
                                            <div className="bg-zinc p-3 rounded-full">
                                                <MapPin className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-lg font-medium font-headline text-foreground">Office</CardTitle>
                                                <p className="text-sm text-foreground/80">DHA, Lahore, Pakistan</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </ScrollFadeIn>
                          </div>
                      </div>
                  </div>
                </div>
            </GradientContainer>

             <section className="py-24 lg:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <ScrollFadeIn>
                        <div className="text-center mb-8">
                            <ArrowBadge href="#" text="Find Us" variant="black" />
                            <StandardizedHeading lines={["Visit Our Office"]} />
                            <p className="mt-4 text-sm text-foreground/70 max-w-xl mx-auto">We're located in the heart of the city, ready to welcome you for a coffee and a conversation about your next big idea.</p>
                        </div>
                        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg mt-12">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54452.87103444026!2d74.37529495147022!3d31.46232393208945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905d6e91f1767%3A0x7a6331a9805cf525!2sDefence%20Housing%20Authority%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1722883981880!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-downgrade"
                                title="Cauders Office Location"
                            ></iframe>
                        </div>
                    </ScrollFadeIn>
                </div>
            </section>
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
