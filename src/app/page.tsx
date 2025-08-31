
import Hero from '@/components/cauders/Hero';
import PortfolioSection from '@/components/cauders/PortfolioSection';
import Contact from '@/components/cauders/Contact';
import StickyScrollText from '@/components/cauders/StickyScrollText';
import ServicesPreview from '@/components/cauders/ServicesPreview';

export default function Home() {
  return (
    <>
      <Hero />
      <StickyScrollText />
      <ServicesPreview />
      <PortfolioSection />
      <Contact />
    </>
  );
}
