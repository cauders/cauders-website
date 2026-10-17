import fs from 'fs';

for (const file of ['mb-cd-1.svg', 'mb-cd-2.svg', 'mb-cd-3.svg']) {
  const s = fs.readFileSync('public/images/mobilePortfolio/' + file, 'utf8');
  const match = s.match(/data:image\/png;base64,([A-Za-z0-9+/=]+)/);
  if (match) {
    const buf = Buffer.from(match[1], 'base64');
    const outName = file.replace('.svg', '-raw.png');
    fs.writeFileSync('public/images/mobilePortfolio/' + outName, buf);
    console.log(`Extracted ${outName}: ${(buf.length / 1024 / 1024).toFixed(2)} MB`);
  }
}
