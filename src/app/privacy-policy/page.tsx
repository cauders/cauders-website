
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <ScrollFadeIn>
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Privacy Policy</h1>
            <p className="mt-4 text-lg text-foreground/70">Last Updated: {new Date().toLocaleDateString()}</p>
          </header>
        </ScrollFadeIn>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border shadow-sm">
            <CardContent className="p-8 prose prose-lg dark:prose-invert text-foreground/80 max-w-none">
              <p>
                Welcome to Cauders. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                We may collect personal information that you voluntarily provide to us when you fill out a contact form, such as your name, email address, and message. We may also collect non-personal information, such as browser type, operating system, and web pages visited to help us understand how visitors use our site.
              </p>

              <h2>2. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Respond to your inquiries and provide customer support.</li>
                <li>Improve our website and services.</li>
                <li>Send you marketing and promotional communications, if you have opted in.</li>
                <li>Monitor and analyze usage and trends to improve your experience.</li>
              </ul>

              <h2>3. Disclosure of Your Information</h2>
              <p>
                We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
              </p>

              <h2>4. Data Security</h2>
              <p>
                We have implemented administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
              </p>

              <h2>5. Your Rights</h2>
              <p>
                You have the right to access, update, or delete the personal information we have on you. If you wish to exercise these rights, please contact us at the email address below.
              </p>
              
              <h2>6. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>

              <h2>7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:info@cauders.com" className="text-primary hover:underline">info@cauders.com</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
