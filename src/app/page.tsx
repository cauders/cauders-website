
import Hero from '@/components/cauders/Hero';
import PortfolioScrollText from '@/components/caoders/PortfolioScrollText';
import Contact from '@/components/cauders/Contact';
import StickyScrollText from '@/components/cauders/StickyScrollText';
import ServicesPreview from '@/components/cauders/ServicesPreview';

export default function Home() {
  return (
    <>
      <Hero />
      <StickyScrollText />
      <ServicesPreview />
      <PortfolioScrollText />
      <Contact />
    </>
  );
}
