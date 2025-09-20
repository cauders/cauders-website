
'use client';

import StandardizedHeading from '@/components/cauders/StandardizedHeading';
import ScrollFadeIn from '@/components/cauders/ScrollFadeIn';
import ChromaGrid from '@/components/cauders/ChromaGrid';
import { teamData } from '@/lib/team-data';

export default function TeamPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <StandardizedHeading lines={["Meet Our Team"]} />
            <ScrollFadeIn>
              <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
                The creative minds and dedicated professionals driving innovation at Cauders.
              </p>
            </ScrollFadeIn>
          </div>
        </div>
        <div style={{ height: 'auto', position: 'relative' }}>
          <ChromaGrid 
            items={teamData}
            radius={400}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </section>
    </div>
  );
}
