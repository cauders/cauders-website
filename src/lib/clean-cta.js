const fs = require('fs');
const path = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/lib/service-details.ts';
let content = fs.readFileSync(path, 'utf8');

// Replace all occurrences of <br...> and the text following it inside ctaHeading
const regex = / <br class="hidden sm:block"\/> Let\\'s Get (?:to Work|Started)| <br class="hidden sm:block"\/> Contact Us Today/g;
content = content.replace(regex, '');

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully removed second lines from ctaHeadings.');
