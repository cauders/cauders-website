
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
import { usePathname } from "next/navigation";
import ContactPageContent from "./ContactPageContent";


const formSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(1, { message: "Message cannot be empty." }),
});

function HomePageContact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
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
      <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollFadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Let's Talk!</h2>
                <p className="mt-4 text-lg text-foreground/70">
                    The best testimonials paint a picture with words so readers can learn exactly.
                </p>
                <div className="mt-8 space-y-2 text-foreground/80">
                    <p>+1 347-790-1115</p>
                    <p>contact@exclusiveprs.info</p>
                </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay="delay-200">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                <Input placeholder="Name" {...field} className="input-line" />
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
                                <FormControl>
                                <Input type="email" placeholder="Email" {...field} className="input-line"/>
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
                                <FormControl>
                                <Textarea placeholder="Message" className="input-line min-h-[40px]" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <div className="text-right">
                           <Button type="submit" variant="link" size="lg" className="text-lg" disabled={isSubmitting}>
                                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Send
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

export default function Contact() {
    const pathname = usePathname();
    
    if (pathname === '/contact') {
        return <ContactPageContent />;
    }

    return <HomePageContact />;
}
