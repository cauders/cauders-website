const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'components', 'cauders', 'Footer.tsx');
let c = fs.readFileSync(file, 'utf8');

// Replace the address block regardless of CRLF or LF
const addressRegex = /\s*<div className="flex items-start gap-3">\s*<MapPin[\s\S]*?<\/div>/;
if (addressRegex.test(c)) {
  c = c.replace(addressRegex, '');
  fs.writeFileSync(file, c, 'utf8');
  console.log('Successfully removed address from Footer.tsx');
} else {
  console.error('Could not find address block in Footer.tsx');
}
