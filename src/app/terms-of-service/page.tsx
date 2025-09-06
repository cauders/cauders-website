
'use client';

import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';


const WordHighlighter = ({ text }: { text: string }) => {
  return (
    <p className="text-highlight-group">
      {text.split(' ').map((word, index) => (
        <React.Fragment key={index}>
          <span className="word-highlight">{word}</span>{' '}
        </React.Fragment>
      ))}
    </p>
  );
};


const termsSections = [
  {
    title: "Definitions",
    content: (
      <>
        <WordHighlighter text='"Cauders," "we," "us," or "our" refers to the IT company, Cauders.' />
        <WordHighlighter text='"Client" or "you" refers to the individual or entity engaging with our services.' />
        <WordHighlighter text='"Services" refers to all IT services provided by Cauders, including but not limited to software development, network solutions, cybersecurity, and consulting, as outlined in the Statement of Work (SOW).' />
        <WordHighlighter text='"Project" refers to the specific work or engagement detailed in the SOW.' />
        <WordHighlighter text='"Intellectual Property Rights" refers to all patents, copyrights, trademarks, trade secrets, and other proprietary rights.' />
      </>
    )
  },
  {
    title: "Scope of Services",
    content: <WordHighlighter text="The scope of all services will be precisely defined in a formal Statement of Work (SOW) or a separate contractual agreement. Any requests for changes or additions to the scope of work will be managed through a formal Change Order process, which may impact the project timeline and cost." />
  },
  {
    title: "Intellectual Property",
    content: <WordHighlighter text="Upon receiving full and final payment for a Project, all Intellectual Property Rights for any custom software, code, and other deliverables created specifically for the Client will be transferred to you, unless otherwise stated in the SOW. Cauders retains the right to use its pre-existing tools, libraries, and frameworks that are not unique to your Project." />
  },
  {
    title: "Confidentiality",
    content: <WordHighlighter text="Both parties agree to treat all non-public information—including business plans, technical data, financial information, and client data as strictly confidential." />
  },
  {
    title: "Data Protection and Security",
    content: <WordHighlighter text="Cauders is committed to protecting the integrity and confidentiality of your data. We implement industry-standard security protocols and best practices to guard against unauthorized access, disclosure, or alteration. However, Cauders is not liable for data loss caused by factors beyond our reasonable control, such as third-party actions or force majeure events." />
  },
  {
    title: "Governing Law",
    content: <WordHighlighter text="This agreement shall be governed by and interpreted in accordance with the laws of Pakistan. Any disputes arising from these terms and conditions will be subject to the exclusive jurisdiction of the courts located in Islamabad, Pakistan." />
  },
  {
    title: "Termination",
    content: <WordHighlighter text="Either party may terminate a Project or the agreement with 30 days' written notice, provided all outstanding payments and obligations are settled. Upon termination, the Client will be responsible for payment for all services rendered up to the date of termination." />
  },
  {
    title: "Entire Agreement",
    content: <WordHighlighter text="These Terms and Conditions, along with the executed SOW and any other mutually agreed-upon contractual documents, constitute the entire agreement between the parties and supersede all prior discussions or understandings." />
  },
  {
    title: "Contact Us",
    content: <p className="text-highlight-group"><span className="word-highlight">If</span> <span className="word-highlight">you</span> <span className="word-highlight">have</span> <span className="word-highlight">any</span> <span className="word-highlight">questions</span> <span className="word-highlight">about</span> <span className="word-highlight">these</span> <span className="word-highlight">Terms</span> <span className="word-highlight">and</span> <span className="word-highlight">Conditions,</span> <span className="word-highlight">please</span> <span className="word-highlight">contact</span> <span className="word-highlight">us</span> <span className="word-highlight">at</span> <a href="mailto:info@cauders.com" className="text-primary hover:underline word-highlight">info@cauders.com</a>.</p>
  }
];


export default function TermsOfServicePage() {
  return (
    <div className="bg-background text-foreground relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-[-10rem] right-[-10rem] w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-[-15rem] left-[-15rem] w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl -z-10"></div>


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <ScrollFadeIn>
          <header className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground font-headline">Terms of Service</h1>
            <p className="mt-4 text-lg text-foreground/70">Last Updated: September 1, 2025</p>
          </header>
        </ScrollFadeIn>

        <div className="max-w-4xl mx-auto">
            <Card className="glass-effect shadow-lg rounded-2xl">
                <CardContent className="p-8 md:p-12 space-y-10">
                    <ScrollFadeIn>
                        <WordHighlighter text="Please read these Terms of Service carefully before using our services. Your access to and use of the service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the service." />
                    </ScrollFadeIn>
                    
                    {termsSections.map((section, index) => (
                         <ScrollFadeIn key={index} style={{ animationDelay: `${(index + 1) * 100}ms`}}>
                            <section>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 text-primary font-bold text-2xl mt-1">
                                        {index + 1}.
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-foreground mb-3 font-headline">{section.title}</h2>
                                        <div className="text-foreground/80 space-y-4">
                                            {section.content}
                                        </div>
                                    </div>
                                </div>
                            </section>
                         </ScrollFadeIn>
                    ))}
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
