import { SpeedInsights } from '@vercel/speed-insights/next';
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
import { DEFAULT_OG_IMAGE, SITE_URL } from '@/lib/seo';

export const viewport: Viewport = {
  themeColor: '#011417',
  width: 'device-width',
  initialScale: 1,
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-headline',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Cauders | AI, Automation & Software Solutions',
    template: '%s | Cauders',
  },
  description:
    'Cauders designs, builds, and modernizes custom software, SaaS products, applied AI, and workflow automations engineered around your business operations.',
  keywords: [
    'AI solutions',
    'workflow automation',
    'custom software development',
    'Cauders',
    'SaaS development',
    'enterprise AI',
    'platform modernization',
    'web application development',
  ],
  authors: [{ name: 'Cauders', url: SITE_URL }],
  creator: 'Cauders',
  publisher: 'CAUDERS (PRIVATE) LIMITED',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Cauders | AI, Automation & Software Solutions',
    description:
      'Cauders designs, builds, and modernizes custom software, SaaS products, applied AI, and workflow automations engineered around your business operations.',
    url: SITE_URL,
    siteName: 'Cauders',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Cauders — AI, Automation & Software Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cauders | AI, Automation & Software Solutions',
    description:
      'Cauders designs, builds, and modernizes custom software, SaaS products, applied AI, and workflow automations engineered around your business operations.',
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48', type: 'image/x-icon' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
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
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Cauders',
      legalName: 'CAUDERS (PRIVATE) LIMITED',
      identifier: '0351558',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/icon-512.png`,
        width: 512,
        height: 512,
      },
      description:
        'Cauders designs, builds, and modernizes custom software, SaaS products, applied AI, and workflow automations engineered around business operations.',
      email: 'info@cauders.com',
      telephone: '+92-339-0107377',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'F1 Block Phase 2, Pak Arab Housing Society, Ferozpur Road',
        addressLocality: 'Lahore',
        addressRegion: 'Punjab',
        addressCountry: 'PK',
      },
      founder: [
        {
          '@type': 'Person',
          name: 'Muryam Naveed',
          jobTitle: 'Founder & CEO',
        },
        {
          '@type': 'Person',
          name: 'Anees Ahmad',
          jobTitle: 'Founder & CTO',
        },
      ],
      sameAs: [
        'https://www.linkedin.com/company/cauders/',
        'https://www.facebook.com/people/Cauders/61580041683735/',
        'https://www.instagram.com/ccauders/',
        'https://github.com/cauders',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@cauders.com',
        telephone: '+92-339-0107377',
        contactType: 'sales',
        availableLanguage: ['English'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Cauders',
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={cn(
          montserrat.variable,
          inter.variable,
          'flex flex-col min-h-screen antialiased font-body overflow-x-clip'
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
          <>
            <Suspense fallback={null}>
              <NavigationProgress />
            </Suspense>
            <SmoothScroll />
            <CustomCursor />
            <Header />
            <main>
              <div className="flex-grow">{children}</div>
            </main>
            <Footer />
            <Toaster />
            {(process.env.VERCEL === '1' || Boolean(process.env.NEXT_PUBLIC_VERCEL_ENV)) && <SpeedInsights />}
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
      </body>
    </html>
  );
}
