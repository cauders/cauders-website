import fs from 'fs';

for (const file of ['mb-cd-1.svg', 'mb-cd-2.svg', 'mb-cd-3.svg']) {
  const s = fs.readFileSync('public/images/mobilePortfolio/' + file, 'utf8');
  const m = s.match(/transform="([^"]+)"/);
  console.log(file, 'transform:', m ? m[1] : 'none');
}
