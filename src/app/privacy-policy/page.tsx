
'use client';

import { Card, CardContent } from '@/components/ui/card';
import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <ScrollFadeIn>
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Privacy Policy</h1>
            <p className="mt-4 text-lg text-foreground/70">Last Updated: September 1, 2025</p>
          </header>
        </ScrollFadeIn>

        <div className="max-w-4xl mx-auto">
          <ScrollFadeIn delay="delay-200">
            <div className="prose prose-lg dark:prose-invert text-foreground/80 max-w-none">
                <p>
                  Your privacy is critically important to us. Cauders ("we," "us," or "our") is committed to protecting the confidentiality and security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide when you interact with our website, services, and digital platforms.
                </p>

                <h2>1. Information We Collect</h2>
                <p>
                  We may collect personal and non-personal information through various methods, including:
                </p>
                <p><strong>Information you provide to us:</strong> This includes data you voluntarily submit when you contact us, request a quote, subscribe to a newsletter, or fill out a form. This may include your name, company name, email address, phone number, and any other information you choose to provide.</p>
                <p><strong>Information we collect automatically:</strong> When you visit our website, we may automatically collect certain technical data about your device and browsing activity. This may include your IP address, browser type, operating system, pages viewed, and the duration of your visit. This data is collected using standard technologies such as cookies and log files.</p>

                <h2>2. How We Use Your Information</h2>
                <p>
                  We use the collected information for a variety of purposes, including:
                </p>
                <p><strong>To provide and improve our services:</strong> We use your information to fulfill your requests, manage our relationship with you, and enhance the functionality and quality of our services.</p>
                <p><strong>For communication:</strong> We may use your contact details to respond to your inquiries, send you project updates, and provide you with information about our services.</p>
                <p><strong>For marketing and analytics:</strong> We may use non-personal data to analyze website traffic, understand user behavior, and improve our marketing strategies. We may also use your contact information to send you promotional materials about our services, which you can opt-out of at any time.</p>
                <p><strong>For security and legal compliance:</strong> We use your data to detect and prevent fraud, protect the security of our systems, and comply with our legal obligations.</p>


                <h2>3. Data Sharing and Disclosure</h2>
                <p>
                  Cauders will not sell, rent, or lease your personal information to third parties. We may, however, share your information with trusted third-party service providers who assist us in operating our business and delivering our services, such as web hosting, analytics, and payment processing. These providers are bound by strict confidentiality agreements and are only permitted to use your information for the purposes for which it was shared. We may also disclose your information if required by law or a valid legal process.
                </p>

                <h2>4. Data Security</h2>
                <p>
                  We implement a range of industry-standard security measures, including encryption, firewalls, and secure access controls, to protect your personal information from unauthorized access, loss, or misuse. While we strive to protect your data, no method of transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.
                </p>

                <h2>5. Your Rights</h2>
                <p>
                  You have the right to access, update, and request the deletion of your personal information that we hold. If you wish to exercise these rights, please contact us at info@cauders.com. We will respond to your request in a timely manner and in accordance with applicable laws.
                </p>
                
                <h2>6. Changes to this Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
                </p>

            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </div>
  );
}
