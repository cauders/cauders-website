
import Hero from '@/components/cauders/Hero';
import PortfolioPreview from '@/components/cauders/PortfolioPreview';
import Contact from '@/components/cauders/Contact';
import StickyScrollText from '@/components/cauders/StickyScrollText';

export default function Home() {
  return (
    <>
      <Hero />
      <StickyScrollText />
      <PortfolioPreview />
      <Contact />
    </>
  );
}
