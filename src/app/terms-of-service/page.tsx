
'use client';

import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';

export default function TermsOfServicePage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <ScrollFadeIn>
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Terms and Conditions</h1>
          </header>
        </ScrollFadeIn>

        <div className="max-w-4xl mx-auto">
         <ScrollFadeIn delay="delay-200">
            <div className="prose prose-lg dark:prose-invert text-foreground/80 max-w-none">
              
              <h2>1. Definitions</h2>
              <p><strong>"Cauders," "we," "us," or "our"</strong> refers to the IT company, Cauders.</p>
              <p><strong>"Client" or "you"</strong> refers to the individual or entity engaging with our services.</p>
              <p><strong>"Services"</strong> refers to all IT services provided by Cauders, including but not limited to software development, network solutions, cybersecurity, and consulting, as outlined in the Statement of Work (SOW).</p>
              <p><strong>"Project"</strong> refers to the specific work or engagement detailed in the SOW.</p>
              <p><strong>"Intellectual Property Rights"</strong> refers to all patents, copyrights, trademarks, trade secrets, and other proprietary rights.</p>

              <h2>2. Scope of Services</h2>
              <p>
                The scope of all services will be precisely defined in a formal Statement of Work (SOW) or a separate contractual agreement. Any requests for changes or additions to the scope of work will be managed through a formal Change Order process, which may impact the project timeline and cost.
              </p>

              <h2>3. Intellectual Property</h2>
              <p>
                Upon receiving full and final payment for a Project, all Intellectual Property Rights for any custom software, code, and other deliverables created specifically for the Client will be transferred to you, unless otherwise stated in the SOW. Cauders retains the right to use its pre-existing tools, libraries, and frameworks that are not unique to your Project.
              </p>

              <h2>4. Confidentiality</h2>
              <p>
                Both parties agree to treat all non-public information—including business plans, technical data, financial information, and client data as strictly confidential.
              </p>
              
              <h2>5. Data Protection and Security</h2>
              <p>
                Cauders is committed to protecting the integrity and confidentiality of your data. We implement industry-standard security protocols and best practices to guard against unauthorized access, disclosure, or alteration. However, Cauders is not liable for data loss caused by factors beyond our reasonable control, such as third-party actions or force majeure events.
              </p>

              <h2>6. Governing Law</h2>
              <p>
                This agreement shall be governed by and interpreted in accordance with the laws of Pakistan. Any disputes arising from these terms and conditions will be subject to the exclusive jurisdiction of the courts located in Islamabad, Pakistan.
              </p>
              
              <h2>7. Termination</h2>
              <p>
                Either party may terminate a Project or the agreement with 30 days' written notice, provided all outstanding payments and obligations are settled. Upon termination, the Client will be responsible for payment for all services rendered up to the date of termination.
              </p>

              <h2>8. Entire Agreement</h2>
              <p>
                These Terms and Conditions, along with the executed SOW and any other mutually agreed-upon contractual documents, constitute the entire agreement between the parties and supersede all prior discussions or understandings.
              </p>

              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:info@cauders.com" className="text-primary hover:underline">info@cauders.com</a>.
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </div>
  );
}
