
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, submitApplicationForm } from "@/app/actions";
import ScrollFadeIn from "./ScrollFadeIn";
import { Loader2, Mail, MapPin, Phone, Github, Instagram, Linkedin, Briefcase } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const applicationFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    jobTitle: z.string(),
    cv: z.instanceof(File).refine(file => file.size > 0, 'CV is required.'),
});


export default function ContactPageContent() {
    const searchParams = useSearchParams();
    const jobTitle = searchParams.get('job');
  
    return (
      <section id="contact" className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollFadeIn className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {jobTitle ? `Apply for ${jobTitle}` : "Let's Build Together"}
                </h2>
                <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
                    {jobTitle 
                        ? "Please fill out the form below to apply. We're excited to learn more about you."
                        : "Have a project in mind or just want to say hello? We'd love to hear from you."
                    }
                </p>
            </ScrollFadeIn>
  
          <ScrollFadeIn delay="delay-200">
             <Card className="overflow-hidden shadow-lg bg-card border">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                      {/* Left Side: Info */}
                      <div className="p-8 md:p-12 bg-secondary/30">
                          <h3 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h3>
                          <p className="text-foreground/70 mb-8">
                              We're here to help and answer any question you might have. We look forward to hearing from you.
                          </p>
                          <div className="space-y-6">
                              <div className="flex items-center gap-4">
                                  <Mail className="w-6 h-6 text-primary" />
                                  <a href="mailto:info@cauders.com" className="text-foreground/80 hover:text-primary transition-colors">info@cauders.com</a>
                              </div>
                              <div className="flex items-center gap-4">
                                  <Phone className="w-6 h-6 text-primary" />
                                  <span className="text-foreground/80">(123) 456-7890</span>
                              </div>
                              <div className="flex items-start gap-4">
                                  <MapPin className="w-6 h-6 text-primary mt-1" />
                                  <span className="text-foreground/80">123 Design Street, Creative City, 10101</span>
                              </div>
                          </div>
                          <Separator className="my-8" />
                          <div className="flex items-center gap-2">
                             <Button variant="ghost" size="icon" asChild>
                                  <Link href="https://www.instagram.com/ccauders/" aria-label="Instagram">
                                      <Instagram className="h-5 w-5 text-foreground/70 hover:text-primary transition-colors" />
                                  </Link>
                              </Button>
                              <Button variant="ghost" size="icon" asChild>
                                  <Link href="https://github.com/cauders" aria-label="GitHub">
                                      <Github className="h-5 w-5 text-foreground/70 hover:text-primary transition-colors" />
                                  </Link>
                              </Button>
                              <Button variant="ghost" size="icon" asChild>
                                  <Link href="https://www.linkedin.com/company/108785409/admin/dashboard/" aria-label="LinkedIn">
                                      <Linkedin className="h-5 w-5 text-foreground/70 hover:text-primary transition-colors" />
                                  </Link>
                              </Button>
                          </div>
                      </div>
  
                      {/* Right Side: Form */}
                      <div className="p-8 md:p-12">
                          {jobTitle ? <ApplicationForm jobTitle={jobTitle} /> : <GeneralContactForm />}
                      </div>
                  </div>
             </Card>
          </ScrollFadeIn>
        </div>
      </section>
    );
  }

function GeneralContactForm() {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof contactFormSchema>>({
      resolver: zodResolver(contactFormSchema),
      defaultValues: {
        name: "",
        email: "",
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
        <>
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-foreground">Name</FormLabel>
                        <FormControl>
                        <Input placeholder="Your Name" {...field} />
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
                        <FormLabel className="text-foreground">Email</FormLabel>
                        <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
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
                        <FormLabel className="text-foreground">Message</FormLabel>
                        <FormControl>
                        <Textarea placeholder="Tell us about your project..." className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Send Message
                </Button>
                </form>
            </Form>
        </>
    );
}

function ApplicationForm({ jobTitle }: { jobTitle: string }) {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof applicationFormSchema>>({
        resolver: zodResolver(applicationFormSchema),
        defaultValues: {
          name: "",
          email: "",
          jobTitle: jobTitle,
          cv: undefined,
        },
    });

    useEffect(() => {
        form.setValue('jobTitle', jobTitle);
    }, [jobTitle, form]);
    
    const { isSubmitting } = form.formState;

    async function onSubmit(values: z.infer<typeof applicationFormSchema>) {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('jobTitle', values.jobTitle);
        formData.append('cv', values.cv);

        try {
            const result = await submitApplicationForm(formData);
            if (result.success) {
                toast({
                    title: "Application Sent!",
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
                title: "An Error Occurred",
                description: "Could not submit your application. Please try again.",
            });
        }
    }

    return (
        <>
            <h3 className="text-2xl font-bold text-foreground mb-6">Your Information</h3>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-foreground">Full Name</FormLabel>
                        <FormControl>
                        <Input placeholder="Your Name" {...field} />
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
                        <FormLabel className="text-foreground">Email Address</FormLabel>
                        <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name="jobTitle"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-foreground">Applying for</FormLabel>
                        <FormControl>
                            <Input {...field} readOnly disabled />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="cv"
                    render={({ field: { onChange, value, ...rest } }) => (
                        <FormItem>
                            <FormLabel>CV / Resume</FormLabel>
                            <FormControl>
                                <Input 
                                    type="file" 
                                    accept=".pdf,.doc,.docx"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        onChange(file);
                                    }}
                                    {...rest}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Submit Application
                </Button>
                </form>
            </Form>
        </>
    );
}
