
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';

export default function TermsOfServicePage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <ScrollFadeIn>
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Terms of Service</h1>
            <p className="mt-4 text-lg text-foreground/70">Last Updated: {new Date().toLocaleDateString()}</p>
          </header>
        </ScrollFadeIn>

        <div className="max-w-4xl mx-auto">
         <ScrollFadeIn delay="delay-200">
          <Card className="bg-card border shadow-sm">
            <CardContent className="p-8 prose prose-lg dark:prose-invert text-foreground/80 max-w-none">
              <p>
                Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Cauders website (the "Service") operated by Cauders ("us", "we", or "our").
              </p>

              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
              </p>

              <h2>2. Use of Our Service</h2>
              <p>
                You agree not to use the Service for any unlawful purpose or in any way that interrupts, damages, or impairs the service. You agree not to attempt any unauthorized access to any part of the Service.
              </p>

              <h2>3. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of Cauders and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
              </p>

              <h2>4. Links To Other Web Sites</h2>
              <p>
                Our Service may contain links to third-party web sites or services that are not owned or controlled by Cauders. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.
              </p>
              
              <h2>5. Limitation of Liability</h2>
              <p>
                In no event shall Cauders, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>

              <h2>6. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>
              
              <h2>7. Changes</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page.
              </p>

              <h2>8. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at: <a href="mailto:info@cauders.com" className="text-primary hover:underline">info@cauders.com</a>
              </p>
            </CardContent>
          </Card>
          </ScrollFadeIn>
        </div>
      </div>
    </div>
  );
}
