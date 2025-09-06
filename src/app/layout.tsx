
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/cauders/Header';
import Footer from '@/components/cauders/Footer';
import { Montserrat, Work_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/cauders/ThemeProvider';
import CustomCursor from '@/components/cauders/CustomCursor';
import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';
import Chatbot from '@/components/cauders/Chatbot';


export const metadata: Metadata = {
  title: 'Cauders | Innovative Digital Solutions',
  description: 'Cauders crafts premium, modern, and dynamic websites and applications.',
  icons: {
    icon: '/icon.png',
  },
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-headline',
});

const garet = Work_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-body',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(montserrat.variable, garet.variable, 'flex flex-col min-h-screen bg-background antialiased relative font-body')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <>
              <CustomCursor />
              <Header />
              <main className="flex-grow pt-24 z-10">
                {children}
              </main>
              <ScrollFadeIn direction="stretch-up">
                <Footer />
              </ScrollFadeIn>
              <Toaster />
              <Chatbot />
            </>
        </ThemeProvider>
      </body>
    </html>
  );
}
