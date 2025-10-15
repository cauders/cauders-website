
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
import { Loader2 } from "lucide-react";
import ArrowBadge from "./ArrowBadge";
import StandardizedHeading from "./StandardizedHeading";


const formSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty." }),
  job: z.string().min(1, { message: "Job cannot be empty." }),
  city: z.string().min(1, { message: "City cannot be empty." }),
  question: z.string().min(1, { message: "Question cannot be empty." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export default function HomePageContact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      job: "",
      city: "",
      question: "",
      email: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
        const result = await submitContactForm({
            name: values.name,
            email: values.email,
            message: `From: ${values.job} in ${values.city}. Question: ${values.question}`,
        });
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
    <section id="contact" className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <ScrollFadeIn className="h-full flex flex-col">
                    <div className="w-full">
                        <ArrowBadge href="/contact" text="Contact Us" variant="black" className="mb-4" />
                        <StandardizedHeading lines={["Reach Out Your Way"]} className="font-medium text-3xl sm:text-4xl md:text-5xl" />
                        <p className="mt-4 text-base text-foreground/70">
                            We're here to answer your questions and help you get started on your next big idea.
                        </p>
                    </div>
                </ScrollFadeIn>
                <ScrollFadeIn delay="delay-200" className="h-full flex flex-col justify-center text-foreground">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full text-[28px] font-medium">
                            <div>
                                <div className="flex items-center gap-4 flex-wrap">
                                    Hi I'm
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                        <FormItem className="inline-block">
                                            <FormControl>
                                            <Input placeholder="Your Name" {...field} className="bg-background border-input rounded-full h-10 px-6 text-sm" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-4 flex-wrap">
                                    a
                                    <FormField
                                        control={form.control}
                                        name="job"
                                        render={({ field }) => (
                                        <FormItem className="inline-block">
                                            <FormControl>
                                            <Input placeholder="Your Job" {...field} className="bg-background border-input rounded-full h-10 px-6 text-sm" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                    />
                                    from
                                    <FormField
                                        control={form.control}
                                        name="city"
                                        render={({ field }) => (
                                        <FormItem className="inline-block">
                                            <FormControl>
                                            <Input placeholder="Your City" {...field} className="bg-background border-input rounded-full h-10 px-6 text-sm" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                    />
                                    that need help. I have a question which are
                                </div>
                                 <FormField
                                    control={form.control}
                                    name="question"
                                    render={({ field }) => (
                                    <FormItem className="mt-2">
                                        <FormControl>
                                        <Textarea placeholder="State your question here" className="bg-background border-input rounded-3xl min-h-[80px] p-6 text-sm" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                            </div>
                            <div>
                                <div className="flex items-center gap-4 flex-wrap">
                                    You can reach me, at
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                        <FormItem className="inline-block">
                                            <FormControl>
                                            <Input type="email" placeholder="Email address" {...field} className="bg-background border-input rounded-full h-10 px-6 text-sm" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                    />
                                    to get things started.
                                </div>
                            </div>
                            <div className="text-left pt-4">
                                <Button type="submit" size="lg" className="bg-zinc text-white" disabled={isSubmitting}>
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
  )
}
