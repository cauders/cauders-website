import { execSync } from 'child_process';
import fs from 'fs';

const targetFiles = [
  'src/app/careers/page.tsx',
  'src/app/faq/page.tsx',
  'src/app/privacy-policy/page.tsx',
  'src/app/team/page.tsx',
  'src/components/cauders/AboutPageContent.tsx',
  'src/components/cauders/ChromaGrid.tsx',
  'src/components/cauders/ContactPageContent.tsx',
  'src/components/cauders/CoreCompetencies.tsx',
  'src/components/cauders/FAQPage.tsx',
  'src/components/cauders/FAQPreview.tsx',
  'src/components/cauders/Footer.tsx',
  'src/components/cauders/GetAQuote.tsx',
  'src/components/cauders/Header.tsx',
  'src/components/cauders/Hero.tsx',
  'src/components/cauders/HomePageContact.tsx',
  'src/components/cauders/ImageCard.tsx',
  'src/components/cauders/IntroSection.tsx',
  'src/components/cauders/Loader.tsx',
  'src/components/cauders/MobilePortfolio.tsx',
  'src/components/cauders/PartnersPageContent.tsx',
  'src/components/cauders/PortfolioPreview.tsx',
  'src/components/cauders/PortfolioSection.tsx',
  'src/components/cauders/Principles.tsx',
  'src/components/cauders/Services.tsx',
  'src/components/cauders/ServicesPreview.tsx',
  'src/components/cauders/TeamCarousel.tsx',
  'src/components/cauders/TeamPreview.tsx',
  'src/components/cauders/Testimonials.tsx',
  'src/components/cauders/VisionMission.tsx',
  'src/components/cauders/WhyChooseUs.tsx',
];

for (const file of targetFiles) {
  try {
    const diff = execSync(`git diff 00278a31e181c81b4c7d42f13106405bd273bc47 -- "${file}"`, { maxBuffer: 10 * 1024 * 1024, encoding: 'utf-8' });
    console.log(`\n=================== FILE: ${file} ===================`);
    console.log(diff.slice(0, 1500));
    if (diff.length > 1500) console.log(`... [truncated ${diff.length - 1500} bytes]`);
  } catch (err) {
    console.error(`Error on ${file}:`, err.message);
  }
}
