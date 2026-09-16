
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
 title: {
 default: 'Cauders | AI, Automation & Software Solutions',
 template: '%s | Cauders'
 },
 description: 'Cauders builds high-performance AI integrations, custom software, and workflow automation solutions designed to help modern businesses scale, adapt, and lead their industries.',
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
 description: 'Cauders builds high-performance AI integrations, custom software, and workflow automation solutions designed to help modern businesses scale, adapt, and lead their industries.',
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
 description: 'Cauders builds high-performance AI integrations, custom software, and workflow automation solutions designed to help modern businesses scale, adapt, and lead their industries.',
 creator: '@cauders',
 images: ['/images/hero/intro-1.png'],
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
 <html lang="en" suppressHydrationWarning className="overflow-x-clip">
 <body className={cn(montserrat.variable, 'flex flex-col min-h-screen antialiased font-body overflow-x-clip')}>
 <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
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
