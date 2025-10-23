
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/cauders/Header';
import { Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/cauders/ThemeProvider';
import CustomCursor from '@/components/cauders/CustomCursor';
// import Chatbot from '@/components/cauders/Chatbot';


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
  variable: '--font-body',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(montserrat.variable, 'flex flex-col min-h-screen bg-background antialiased font-body')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <>
              <CustomCursor />
              <Header />
              <main>
                <div className="flex-grow">
                    {children}
                </div>
              </main>
              <Toaster />
              {/* <Chatbot /> */}
            </>
        </ThemeProvider>
      </body>
    </html>
  );
}
