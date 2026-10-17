import fs from 'fs';

const files = [
  { name: 'mb-cd-1', w: 795, h: 749 },
  { name: 'mb-cd-2', w: 796, h: 1178 },
  { name: 'mb-cd-3', w: 795, h: 751 }
];

for (const f of files) {
  const webpBuf = fs.readFileSync(`public/images/mobilePortfolio/${f.name}.webp`);
  const webpBase64 = webpBuf.toString('base64');

  // Lightweight SVG that directly displays the optimized image at the exact viewBox
  const newSvg = `<svg width="${f.w}" height="${f.h}" viewBox="0 0 ${f.w} ${f.h}" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <image width="${f.w}" height="${f.h}" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/webp;base64,${webpBase64}"/>
</svg>
`;

  fs.writeFileSync(`public/images/mobilePortfolio/${f.name}.svg`, newSvg, 'utf8');
  console.log(`Updated ${f.name}.svg: ${(newSvg.length / 1024).toFixed(1)} KB`);
}
