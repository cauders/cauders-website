
'use client';

import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ShieldCheck } from 'lucide-react';

const policySections = [
  {
    title: "Information We Collect",
    content: (
      <>
        <p>
          We may collect personal and non-personal information through various methods, including:
        </p>
        <ul className="list-disc list-outside space-y-2 pl-6 mt-4">
          <li><strong>Information you provide to us:</strong> This includes data you voluntarily submit when you contact us, request a quote, subscribe to a newsletter, or fill out a form. This may include your name, company name, email address, phone number, and any other information you choose to provide.</li>
          <li><strong>Information we collect automatically:</strong> When you visit our website, we may automatically collect certain technical data about your device and browsing activity. This may include your IP address, browser type, operating system, pages viewed, and the duration of your visit. This data is collected using standard technologies such as cookies and log files.</li>
        </ul>
      </>
    )
  },
  {
    title: "How We Use Your Information",
    content: (
        <>
            <p>
                We use the collected information for a variety of purposes, including:
            </p>
            <ul className="list-disc list-outside space-y-2 pl-6 mt-4">
                <li><strong>To provide and improve our services:</strong> We use your information to fulfill your requests, manage our relationship with you, and enhance the functionality and quality of our services.</li>
                <li><strong>For communication:</strong> We may use your contact details to respond to your inquiries, send you project updates, and provide you with information about our services.</li>
                <li><strong>For marketing and analytics:</strong> We may use non-personal data to analyze website traffic, understand user behavior, and improve our marketing strategies. We may also use your contact information to send you promotional materials about our services, which you can opt-out of at any time.</li>
                <li><strong>For security and legal compliance:</strong> We use your data to detect and prevent fraud, protect the security of our systems, and to comply with our legal obligations.</li>
            </ul>
      </>
    )
  },
  {
    title: "Data Sharing and Disclosure",
    content: <p>Cauders will not sell, rent, or lease your personal information to third parties. We may, however, share your information with trusted third-party service providers who assist us in operating our business and delivering our services, such as web hosting, analytics, and payment processing. These providers are bound by strict confidentiality agreements and are only permitted to use your information for the purposes for which it was shared. We may also disclose your information if required by law or a valid legal process.</p>
  },
  {
    title: "Data Security",
    content: <p>We implement a range of industry-standard security measures, including encryption, firewalls, and secure access controls, to protect your personal information from unauthorized access, loss, or misuse. While we strive to protect your data, no method of transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.</p>
  },
  {
    title: "Your Rights",
    content: <p>You have the right to access, update, and request the deletion of your personal information that we hold. If you wish to exercise these rights, please contact us at <a href="mailto:info@cauders.com" className="text-primary hover:underline">info@cauders.com</a>. We will respond to your request in a timely manner and in accordance with applicable laws.</p>
  },
  {
    title: "Changes to this Privacy Policy",
    content: <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.</p>
  }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background text-foreground relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-[-10rem] right-[-10rem] w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-[-15rem] left-[-15rem] w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl -z-10"></div>


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <ScrollFadeIn>
          <header className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground font-headline">Privacy Policy</h1>
            <p className="mt-4 text-lg text-foreground/70">Last Updated: September 1, 2025</p>
          </header>
        </ScrollFadeIn>

        <div className="max-w-4xl mx-auto">
            <Card className="glass-effect shadow-lg">
                <CardContent className="p-8 md:p-12 space-y-10">
                    <ScrollFadeIn>
                        <div className="text-highlight-group">
                            <p className="text-lg text-foreground/80">
                                Your privacy is critically important to us. Cauders ("we," "us," or "our") is committed to protecting the confidentiality and security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide when you interact with our website, services, and digital platforms.
                            </p>
                        </div>
                    </ScrollFadeIn>
                    
                    {policySections.map((section, index) => (
                         <ScrollFadeIn key={index} delay={`delay-${(index + 1) * 100}`}>
                            <section>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 text-primary font-bold text-2xl mt-1">
                                        {index + 1}.
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-foreground mb-3">{section.title}</h2>
                                        <div className="text-foreground/80 space-y-4 text-highlight-group">
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
