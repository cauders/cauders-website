import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/cauders/Header';
import { Montserrat, Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/cauders/ThemeProvider';
import CustomCursor from '@/components/cauders/CustomCursor';
import Footer from '@/components/cauders/Footer';
import Script from 'next/script';
import SmoothScroll from '@/components/cauders/SmoothScroll';
import { Suspense } from 'react';
import NavigationProgress from '@/components/cauders/NavigationProgress';

export const viewport: Viewport = {
  themeColor: '#011417',
  width: 'device-width',
  initialScale: 1,
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-headline',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Cauders | AI, Automation & Software Solutions',
    template: '%s | Cauders'
  },
  description: 'Cauders designs, builds, and modernizes custom software, SaaS products, applied AI, and workflow automations engineered around your business operations.',
  keywords: ['AI solutions', 'workflow automation', 'custom software development', 'Cauders', 'business automation', 'enterprise AI', 'digital transformation', 'web development'],
  authors: [{ name: 'Cauders', url: 'https://www.cauders.com' }],
  creator: 'Cauders',
  publisher: 'Cauders',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.cauders.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cauders | AI, Automation & Software Solutions',
    description: 'Cauders designs, builds, and modernizes custom software, SaaS products, applied AI, and workflow automations engineered around your business operations.',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Cauders | AI, Automation & Software Solutions',
    description: 'Cauders designs, builds, and modernizes custom software, SaaS products, applied AI, and workflow automations engineered around your business operations.',
    creator: '@cauders',
    images: ['/images/hero/intro-1.png'],
  },
  icons: {
    icon: 'https://res.cloudinary.com/cauders/image/upload/v1786551887/logo_rgtpg7.png',
    shortcut: 'https://res.cloudinary.com/cauders/image/upload/v1786551887/logo_rgtpg7.png',
    apple: 'https://res.cloudinary.com/cauders/image/upload/v1786551887/logo_rgtpg7.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'google-site-verification-token',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Cauders',
  url: 'https://www.cauders.com',
  logo: 'https://res.cloudinary.com/cauders/image/upload/v1786551887/logo_rgtpg7.png',
  description: 'Cauders designs, builds, and modernizes custom software, SaaS products, applied AI, and workflow automations.',
  sameAs: [
    'https://www.linkedin.com/company/cauders',
    'https://twitter.com/cauders',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@cauders.com',
    contactType: 'customer support',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://res.cloudinary.com/cauders/image/upload/v1786551887/logo_rgtpg7.png" sizes="any" />
        <link rel="shortcut icon" href="https://res.cloudinary.com/cauders/image/upload/v1786551887/logo_rgtpg7.png" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/cauders/image/upload/v1786551887/logo_rgtpg7.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn(montserrat.variable, inter.variable, 'flex flex-col min-h-screen antialiased font-body overflow-x-clip')}>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
          <>
            <Suspense fallback={null}>
              <NavigationProgress />
            </Suspense>
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
          </>
        </ThemeProvider>
        <Script id="linkedin-insight-tag-1" strategy="lazyOnload">
          {`
            _linkedin_partner_id = "8844393";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>
        <Script id="linkedin-insight-tag-2" strategy="lazyOnload">
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
