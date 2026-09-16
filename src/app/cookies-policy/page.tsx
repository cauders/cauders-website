'use client';

import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';
import { cn } from '@/lib/utils';
import React from 'react';
import StandardizedHeading from '@/components/cauders/StandardizedHeading';
import BlurCircle from '@/components/cauders/BlurCircle';

const WordHighlighter = ({ text }: { text: string }) => {
 return (
 <p className="text-highlight-group text-sm lg:text-base">
 {text.split(' ').map((word, index) => (
 <React.Fragment key={index}>
 <span className="word-highlight">{word}</span>{' '}
 </React.Fragment>
 ))}
 </p>
 );
};


const policySections = [
 {
 title: "What Are Cookies?",
 content: <WordHighlighter text="Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information." />
 },
 {
 title: "How We Use Cookies",
 content: (
 <>
 <WordHighlighter text="We use cookies to understand how you interact with our website, to remember your preferences, and to improve your overall experience. Specifically, we use:" />
 <ul className="list-disc list-outside space-y-2 pl-6 mt-4 text-sm lg:text-base">
 <li><strong className="word-highlight">Essential Cookies:</strong> <WordHighlighter text="These cookies are strictly necessary to provide you with services available through our website and to use some of its features." /></li>
 <li><strong className="word-highlight">Performance and Analytics Cookies:</strong> <WordHighlighter text="These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you." /></li>
 </ul>
 </>
 )
 },
 {
 title: "Your Choices Regarding Cookies",
 content: <WordHighlighter text="You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted." />
 },
 {
 title: "Changes to this Cookies Policy",
 content: <WordHighlighter text="We may update this Cookies Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookies Policy regularly to stay informed about our use of cookies and related technologies." />
 }
];

export default function CookiesPolicyPage() {
 return (
 <div className="bg-transparent text-foreground relative overflow-hidden">
 {/* Background decorative elements */}
 <BlurCircle className="absolute top-[-10rem] right-[-10rem] w-96 h-96 -z-10" />
 <BlurCircle className="absolute bottom-[-15rem] left-[-15rem] w-96 h-96 -z-10" />


 <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
 <ScrollFadeIn>
 <header className="mb-12 text-center">
 <StandardizedHeading lines={["Cookies Policy"]} />
 <p className="mt-4 text-sm text-foreground">Last Updated: September 1, 2025</p>
 </header>
 </ScrollFadeIn>

 <div className="max-w-4xl mx-auto space-y-8">
 <ScrollFadeIn>
 <WordHighlighter text="This Cookies Policy explains how Cauders uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them." />
 </ScrollFadeIn>
 
 {policySections.map((section, index) => (
 <ScrollFadeIn key={index} style={{ animationDelay: `${(index + 1) * 100}ms`}}>
 <section>
 <div className="flex items-start gap-4">
 <div className="flex-shrink-0 text-primary font-bold text-xl lg:text-2xl mt-1">
 {index + 1}.
 </div>
 <div>
 <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-3 font-headline">{section.title}</h2>
 <div className="text-foreground space-y-4 text-sm lg:text-base">
 {section.content}
 </div>
 </div>
 </div>
 </section>
 </ScrollFadeIn>
 ))}
 </div>
 </div>
 </div>
 );
}
