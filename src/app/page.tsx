
import Hero from '@/components/cauders/Hero';
import PortfolioPreview from '@/components/cauders/PortfolioPreview';
import Contact from '@/components/cauders/Contact';
import StickyScrollText from '@/components/cauders/StickyScrollText';
import ServicesPreview from '@/components/cauders/ServicesPreview';

export default function Home() {
  return (
    <>
      <Hero />
      <StickyScrollText />
      <ServicesPreview />
      <PortfolioPreview />
      <Contact />
    </>
  );
}
