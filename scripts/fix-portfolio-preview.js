const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'components', 'cauders', 'PortfolioPreview.tsx');
let c = fs.readFileSync(file, 'utf8');

c = c.replace(
  'className="absolute w-[80vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] h-full top-0 left-0 pointer-events-auto"',
  'className="absolute w-[80vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] h-full top-0 left-0 pointer-events-auto">'
);

fs.writeFileSync(file, c, 'utf8');
console.log('Fixed > on line 312 in PortfolioPreview.tsx');
