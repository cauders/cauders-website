
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/cauders/Header';
import { Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/cauders/ThemeProvider';
import CustomCursor from '@/components/cauders/CustomCursor';
import Footer from '@/components/cauders/Footer';
import Script from 'next/script';
import SmoothScroll from '@/components/cauders/SmoothScroll';
// import Chatbot from '@/components/cauders/Chatbot';


export const metadata: Metadata = {
  title: 'Cauders | Innovative Digital Solutions',
  description: 'Cauders crafts premium, modern, and dynamic websites and applications that empower businesses to thrive.',
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: 'Cauders | Innovative Digital Solutions',
    description: 'Cauders crafts premium, modern, and dynamic websites and applications that empower businesses to thrive.',
    url: 'https://www.cauders.com',
    siteName: 'Cauders',
    images: [
      {
        url: '/images/hero/intro-1.png',
        width: 1200,
        height: 630,
        alt: 'Cauders Digital Innovation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-body',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(montserrat.variable, 'flex flex-col min-h-screen antialiased font-body')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <>
              <SmoothScroll />
              <CustomCursor />
              <Header />
              <main>
                <div className="flex-grow">
                    {children}
                </div>
              </main>
              <Footer />
              <Toaster />
              {/* <Chatbot /> */}
            </>
        </ThemeProvider>
        <Script id="linkedin-insight-tag-1" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "8844393";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>
        <Script id="linkedin-insight-tag-2" strategy="afterInteractive">
          {`
            (function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);})(window.lintrk);
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display: 'none'}} alt="" src="https://px.ads.linkedin.com/collect/?pid=8844393&fmt=gif" />
        </noscript>
      </body>
    </html>
  );
}
