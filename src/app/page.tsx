import Hero from '@/components/cauders/Hero';
import PortfolioPreview from '@/components/cauders/PortfolioPreview';
import ServicesPreview from '@/components/cauders/ServicesPreview';
import Contact from '@/components/cauders/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <PortfolioPreview />
      <Contact />
    </>
  );
}
