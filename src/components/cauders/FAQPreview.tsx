
'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import ScrollFadeIn from "@/components/cauders/ScrollFadeIn";
import StandardizedHeading from "@/components/cauders/StandardizedHeading";
import ArrowBadge from "./ArrowBadge";
import { Plus } from "lucide-react";
  
const faqs = [
    {
        question: "What kind of services does Cauders offer?",
        answer: "Cauders specializes in a wide range of IT solutions including custom web and mobile application development, AI integrations, UI/UX design, cloud solutions, and enterprise-grade software. We build future-ready platforms that help businesses grow and innovate."
    },
    {
        question: "What technologies do you specialize in?",
        answer: "Our team is proficient in a modern tech stack that includes Next.js, React, React Native, and Flutter for frontend development, and Node.js, Python, and .NET for backend systems. We are also experts in AI/ML technologies like Genkit and cloud platforms such as AWS and Google Cloud."
    },
    {
        question: "How long does it take to build a website or an application?",
        answer: "The timeline for a project varies depending on its scope and complexity. A simple website might take a few weeks, while a complex enterprise application could take several months. We provide a detailed project timeline after an initial consultation and discovery phase."
    },
    {
        question: "How much will my project cost?",
        answer: "Project costs are tailored to the specific requirements of each client. We offer a detailed proposal with a transparent cost breakdown after discussing your needs. Our goal is to provide maximum value and a clear return on your investment."
    },
    {
        question: "Do you offer support and maintenance after the project is launched?",
        answer: "Yes, we offer ongoing support and maintenance packages to ensure your application remains secure, up-to-date, and performs optimally. We believe in building long-term partnerships with our clients."
    }
]

export default function FAQPreview() {
    return (
        <div className="py-20 lg:py-32 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <ScrollFadeIn>
                        <div className="flex flex-col items-start justify-center gap-4">
                            <ArrowBadge href="/faq" text="FAQ" variant="black" />
                            <StandardizedHeading 
                                lines={[
                                    { text: "You Have Questions," },
                                    { text: "We Have Answers" }
                                ]} 
                                className="font-medium text-3xl sm:text-4xl md:text-5xl"
                            />
                        </div>
                    </ScrollFadeIn>

                    <ScrollFadeIn delay="delay-200">
                        <div className="max-w-3xl mx-auto">
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-2xl px-6 shadow">
                                        <AccordionTrigger
                                            className="text-left text-base text-foreground font-medium hover:no-underline"
                                            icon={<Plus className="h-5 w-5 text-foreground" />}
                                        >
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-foreground/70">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </ScrollFadeIn>
                </div>
            </div>
        </div>
    );
}
