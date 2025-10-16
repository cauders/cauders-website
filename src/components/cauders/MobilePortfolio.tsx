
'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import ScrollFadeIn from './ScrollFadeIn';
import { cn } from '@/lib/utils';
import StandardizedHeading from './StandardizedHeading';

export default function MobilePortfolio() {
  return (
    <section className="bg-background text-foreground py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <div className="text-center max-w-4xl mx-auto">
            <StandardizedHeading lines={["Let Cauders Simplify Your Workflow"]} className="text-3xl sm:text-4xl md:text-5xl font-medium" />
            <p className="mt-4 text-sm text-foreground/70">
              We design and develop intuitive mobile applications that consolidate your tools and streamline your processes.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="relative mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-8">
                <div className="bg-gradient-container rounded-2xl p-6 flex flex-col justify-between text-white min-h-[200px]">
                    <div>
                        <p className="text-base">We design seamless mobile experiences that drive results.</p>
                    </div>
                    <div className="flex items-end justify-between">
                        <h3 className="text-3xl font-medium">Unlock Potential</h3>
                        <Link href="#" className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition-colors">
                            <ArrowUpRight className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
                <div className="min-h-[300px] bg-card rounded-2xl"></div>
            </div>
            <div className="min-h-[300px] bg-card rounded-2xl"></div>
            <div className="min-h-[300px] bg-card rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
