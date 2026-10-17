import fs from 'fs';

// 1. IntroSection
let intro = fs.readFileSync('src/components/cauders/IntroSection.tsx', 'utf8');
if (!intro.includes('sizes=')) {
  intro = intro.replace(
    'fill\n',
    'fill\n          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"\n'
  );
  intro = intro.replace(
    'fill\r\n',
    'fill\r\n          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"\r\n'
  );
  fs.writeFileSync('src/components/cauders/IntroSection.tsx', intro, 'utf8');
  console.log('Added sizes to IntroSection.tsx');
}

// 2. MobilePortfolio
let mobile = fs.readFileSync('src/components/cauders/MobilePortfolio.tsx', 'utf8');
if (!mobile.includes('sizes=')) {
  mobile = mobile.replaceAll(
    'fill\n',
    'fill\n                  sizes="(max-width: 768px) 100vw, 33vw"\n'
  );
  mobile = mobile.replaceAll(
    'fill\r\n',
    'fill\r\n                  sizes="(max-width: 768px) 100vw, 33vw"\r\n'
  );
  fs.writeFileSync('src/components/cauders/MobilePortfolio.tsx', mobile, 'utf8');
  console.log('Added sizes to MobilePortfolio.tsx');
}
