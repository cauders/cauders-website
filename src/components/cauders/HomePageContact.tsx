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
import { submitHomePageContactForm } from "@/app/actions";
import ScrollFadeIn from "./ScrollFadeIn";
import { Loader2 } from "lucide-react";
import ArrowBadge from "./ArrowBadge";
import StandardizedHeading from "./StandardizedHeading";
import { typography } from "@/lib/typography";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty." }),
  company: z.string().min(1, { message: "Company cannot be empty." }),
  project: z.string().min(1, { message: "Please describe your project or challenge." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export default function HomePageContact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      project: "",
      email: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const result = await submitHomePageContactForm({
        name: values.name,
        company: values.company,
        project: values.project,
        email: values.email,
        job: values.company,
        city: values.company,
        question: values.project,
      });
      if (result.success) {
        toast({
          title: "Success!",
          description: result.message || "Thank you for getting in touch. We will respond promptly.",
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Submission Issue",
          description: result.message || "There was a problem with your submission.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Unexpected Error",
        description: "An unexpected error occurred. Please try again.",
      });
    }
  }

  return (
    <section id="contact" className="py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="h-full flex flex-col">
            <div className="w-full flex flex-col items-start">
              <ScrollFadeIn>
                <ArrowBadge href="/contact" text="Contact Us" variant="black" className="mb-2 md:mb-4" />
              </ScrollFadeIn>
              <StandardizedHeading lines={["Reach Out Your Way"]} />
              <ScrollFadeIn delay={100}>
                <p className={`mt-2 md:mt-4 ${typography.bodyBase} font-normal text-foreground max-w-[85%]`}>
                  We're here to answer your questions and help you get started on your next big idea.
                </p>
              </ScrollFadeIn>
            </div>
          </div>

          <ScrollFadeIn delay="delay-200" className="h-full flex flex-col justify-center text-foreground">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                {/* Continuous Conversational Paragraph */}
                <div className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-medium text-foreground tracking-tight leading-[2.1] sm:leading-[2.3] md:leading-[2.4]">
                  <span>Hi, I&apos;m</span>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="inline-block space-y-0 align-middle -translate-y-0.5 my-1 mx-1.5">
                        <FormControl>
                          <Input 
                            placeholder="Your Name" 
                            {...field} 
                            className="inline-block w-[135px] sm:w-[160px] md:w-[190px] bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 rounded-full h-8 sm:h-9 md:h-10 px-3.5 sm:px-4 text-sm sm:text-base md:text-lg text-foreground placeholder:text-zinc-400 placeholder:font-normal shadow-[0_1px_4px_rgba(0,0,0,0.03)] focus-visible:ring-1 focus-visible:ring-zinc-400" 
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <span>from</span>
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem className="inline-block space-y-0 align-middle -translate-y-0.5 my-1 mx-1.5">
                        <FormControl>
                          <Input 
                            placeholder="Company" 
                            {...field} 
                            className="inline-block w-[140px] sm:w-[170px] md:w-[200px] bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 rounded-full h-8 sm:h-9 md:h-10 px-3.5 sm:px-4 text-sm sm:text-base md:text-lg text-foreground placeholder:text-zinc-400 placeholder:font-normal shadow-[0_1px_4px_rgba(0,0,0,0.03)] focus-visible:ring-1 focus-visible:ring-zinc-400" 
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <span>. I&apos;m looking for help with</span>
                  <FormField
                    control={form.control}
                    name="project"
                    render={({ field }) => (
                      <FormItem className="inline-block space-y-0 align-middle -translate-y-0.5 my-1 mx-1.5">
                        <FormControl>
                          <Input 
                            placeholder="State your project or challenge here..." 
                            {...field} 
                            className="inline-block w-[270px] sm:w-[330px] md:w-[390px] bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 rounded-full h-8 sm:h-9 md:h-10 px-3.5 sm:px-4 text-sm sm:text-base md:text-lg text-foreground placeholder:text-zinc-400 placeholder:font-normal shadow-[0_1px_4px_rgba(0,0,0,0.03)] focus-visible:ring-1 focus-visible:ring-zinc-400" 
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <span>. You can reach me at</span>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="inline-block space-y-0 align-middle -translate-y-0.5 my-1 mx-1.5">
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="Email address" 
                            {...field} 
                            className="inline-block w-[185px] sm:w-[225px] md:w-[265px] bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 rounded-full h-8 sm:h-9 md:h-10 px-3.5 sm:px-4 text-sm sm:text-base md:text-lg text-foreground placeholder:text-zinc-400 placeholder:font-normal shadow-[0_1px_4px_rgba(0,0,0,0.03)] focus-visible:ring-1 focus-visible:ring-zinc-400" 
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <span>to get things started.</span>
                </div>

                {/* Validation error display */}
                {Object.keys(form.formState.errors).length > 0 && (
                  <p className="text-sm font-medium text-destructive mt-3">
                    Please fill out all blanks with valid information.
                  </p>
                )}

                {/* Submit Button */}
                <div className="text-left pt-4 sm:pt-6">
                  <Button 
                    type="submit" 
                    variant="zinc" 
                    size="lg"
                    className="rounded-full px-9 py-4 h-auto text-base sm:text-lg font-semibold shadow-sm hover:shadow transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
