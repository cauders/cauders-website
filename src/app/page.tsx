import Header from '@/components/cauders/Header';
import Hero from '@/components/cauders/Hero';
import Services from '@/components/cauders/Services';
import Portfolio from '@/components/cauders/Portfolio';
import Contact from '@/components/cauders/Contact';
import Footer from '@/components/cauders/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
