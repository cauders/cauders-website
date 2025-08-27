import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/cauders/Header';
import Footer from '@/components/cauders/Footer';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/cauders/ThemeProvider';
import CustomCursor from '@/components/cauders/CustomCursor';
import AnimatedLogo from '@/components/cauders/AnimatedLogo';
import ScrollProgress from '@/components/cauders/ScrollProgress';

export const metadata: Metadata = {
  title: 'Cauders | Innovative Digital Solutions',
  description: 'Cauders crafts premium, modern, and dynamic websites and applications.',
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'flex flex-col min-h-screen bg-background antialiased relative')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CustomCursor />
          <AnimatedLogo />
          <Header />
          <main className="flex-grow pt-24 z-10">
            {children}
          </main>
          <Footer />
          <Toaster />
          <ScrollProgress />
        </ThemeProvider>
      </body>
    </html>
  );
}
