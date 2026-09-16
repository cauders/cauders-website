
'use client';

import Hero from '@/components/cauders/Hero';
import WhyChooseUs from './WhyChooseUs';
import ServicesPreview from './ServicesPreview';
import HomePageContact from './HomePageContact';
import PortfolioSection from './PortfolioSection';
import FAQPreview from './FAQPreview';
import MobilePortfolio from './MobilePortfolio';
import Testimonials from './Testimonials';
import GetAQuote from './GetAQuote';
import BlurCircle from './BlurCircle';
import ScrollFadeIn from './ScrollFadeIn';

export default function HomePage() {
 return (
 <div>
 <div className="relative overflow-x-clip">
 <BlurCircle className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] top-1/2 -translate-y-1/2 right-[-200px]" />
 <BlurCircle className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] bottom-[-20rem] left-[-20rem]" />
 <Hero />
 </div>
 <WhyChooseUs />
 <ServicesPreview />
 <div className="relative overflow-x-clip">
 <BlurCircle className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] top-[-15rem] right-[-15rem]" />
 <HomePageContact />
 </div>
 <PortfolioSection />
 <FAQPreview />
 <div className="relative overflow-x-clip">
 <BlurCircle className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] bottom-[-15rem] right-[-15rem]" />
 <MobilePortfolio />
 </div>
 <Testimonials />
 <GetAQuote />
 </div>
 );
}
