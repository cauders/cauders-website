
'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import ScrollFadeIn from './ScrollFadeIn';
import { cn } from '@/lib/utils';
import StandardizedHeading from './StandardizedHeading';
import placeholderImages from '@/lib/placeholder-images.json';

export default function MobilePortfolio() {
  return (
    <section className="text-foreground pt-0 lg:pt-16 pb-12 md:pb-20 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <div className="text-center max-w-4xl mx-auto">
            <StandardizedHeading lines={["Let Cauders Simplify Your Workflow"]} />
            <p className="mt-2 md:mt-4 text-xs md:text-base text-foreground/70 max-w-2xl mx-auto">
              We design and develop intuitive mobile applications that consolidate your tools and streamline your processes.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="relative mt-8 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="flex flex-col gap-4">
                <div className="bg-gradient-container rounded-2xl p-6 md:p-8 flex flex-col justify-between text-white min-h-[150px] md:min-h-[200px]">
                    <div>
                        <p className="text-sm md:text-base max-w-[80%]">We design seamless mobile experiences that drive results.</p>
                    </div>
                    <div className="flex items-end mt-4">
                        <h3 className="text-2xl md:text-3xl font-medium">Unlock Potential</h3>
                        <Link href="https://www.portfolio.cauders.com/" className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition-colors ml-auto">
                            <ArrowUpRight className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
                <div className="relative min-h-[250px] md:min-h-[350px] bg-card rounded-2xl overflow-hidden">
                  <Image
                    src={placeholderImages.mobilePortfolio.screen1.imageUrl}
                    alt="Mobile app screenshot"
                    fill
                    className="object-cover"
                    data-ai-hint={placeholderImages.mobilePortfolio.screen1.aiHint}
                  />
                </div>
            </div>
            <div className="relative min-h-[300px] md:min-h-[550px] bg-card rounded-2xl overflow-hidden flex flex-col justify-end px-4 pb-4 md:px-6 md:pb-6">
                  <Image
                    src={placeholderImages.mobilePortfolio.screen2.imageUrl}
                    alt="Mobile app screenshot"
                    fill
                    className="object-cover"
                    data-ai-hint={placeholderImages.mobilePortfolio.screen2.aiHint}
                  />
                  <div className="relative z-10 mb-4 md:mb-6">
                    <div className="glass-effect backdrop-blur-2xl rounded-2xl p-4 md:p-6 flex flex-col text-black">
                        <div>
                            <p className="text-base md:text-sm mb-2 md:mb-4 max-w-[80%]">We create tailored interfaces for your specific business needs.</p>
                        </div>
                        <div className="mt-2 md:mt-12">
                            <div className="flex items-end">
                                <h3 className="text-3xl font-medium">Custom Dashboards</h3>
                                <Link href="https://www.portfolio.cauders.com/" className="bg-gradient-container text-white rounded-full p-2 hover:opacity-90 transition-opacity ml-auto">
                                    <ArrowUpRight className="w-6 h-6" />
                                </Link>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            <div className="flex flex-col gap-4">
                <div className="relative min-h-[250px] md:min-h-[350px] bg-card rounded-2xl overflow-hidden">
                  <Image
                    src={placeholderImages.mobilePortfolio.screen3.imageUrl}
                    alt="Mobile app screenshot"
                    fill
                    className="object-cover"
                    data-ai-hint={placeholderImages.mobilePortfolio.screen3.aiHint}
                  />
                </div>
                <div className="bg-gradient-container rounded-2xl p-6 md:p-8 flex flex-col justify-between text-white min-h-[150px] md:min-h-[200px]">
                    <div>
                        <p className="text-base max-w-[80%]">We create intuitive designs for complex workflows.</p>
                    </div>
                    <div className="flex items-end mt-4">
                        <h3 className="text-3xl font-medium">Streamline</h3>
                        <Link href="https://www.portfolio.cauders.com/" className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition-colors ml-auto">
                            <ArrowUpRight className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
