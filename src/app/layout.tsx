import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/cauders/Header';
import Footer from '@/components/cauders/Footer';
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Cauders',
  description: 'Innovative Digital Solutions by Cauders',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(poppins.className, "flex flex-col min-h-screen bg-background antialiased")}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
