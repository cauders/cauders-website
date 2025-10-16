'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import ScrollFadeIn from "@/components/cauders/ScrollFadeIn";
import StandardizedHeading from "@/components/cauders/StandardizedHeading";
import BlurCircle from "@/components/cauders/BlurCircle";
  
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
    },
    {
        question: "Can you work with an existing codebase?",
        answer: "Absolutely. Our team is experienced in taking over, maintaining, and enhancing existing projects. We can help you modernize your legacy systems, add new features, or improve performance and scalability."
    }
]

export default function FAQPage() {
    return (
        <div className="bg-background text-foreground relative overflow-hidden">
            <BlurCircle className="w-96 h-96 top-[-10rem] right-[-10rem]" />
            <BlurCircle className="w-96 h-96 bottom-[-15rem] left-[-15rem]" />
            <BlurCircle className="w-64 h-64 top-1/2 right-1/4" />
            <section className="py-16 lg:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <StandardizedHeading lines={["Frequently Asked Questions"]} />
                        <ScrollFadeIn>
                            <p className="mt-4 text-sm lg:text-lg text-foreground/70 max-w-2xl mx-auto">
                                Have questions? We've got answers. We've compiled a list of the most common questions we receive to provide clarity and help you understand our process and services better. If you can't find what you're looking for, feel free to contact us.
                            </p>
                        </ScrollFadeIn>
                    </div>

                    <ScrollFadeIn delay={0.2}>
                        <div className="max-w-3xl mx-auto">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger className="text-left text-base lg:text-lg font-semibold hover:text-primary">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm lg:text-base text-foreground/80">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </ScrollFadeIn>
                </div>
            </section>
        </div>
    );
}
