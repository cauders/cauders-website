const fs = require('fs');
let content = fs.readFileSync('src/lib/service-details.ts', 'utf8');

// Instead of regex, I'll just find all duplicate occurrences of the industriesDescription in an object
// The error reported exactly these three blocks of duplicates: lines 639-641, 719-721, 1268-1270.
// Let's just do a string replacement on exactly those duplicated strings from the end of the objects.

const str1 = `      industriesDescription: "Our expertise in automation custom applications serves a diverse range of sectors, providing tailored solutions that address unique business challenges.",
      industriesCtaText: 'View All Industries',
      industriesCtaLink: '/industries'`;

const str2 = `      industriesDescription: 'Our expertise in data modernization serves a diverse range of sectors, providing tailored solutions that address unique business challenges.',
      industriesCtaText: 'View All Industries',
      industriesCtaLink: '/industries'`;

const str3 = `      industriesDescription: "Our expertise in AI solutions serves a diverse range of sectors, providing tailored solutions that address unique business challenges.",
      industriesCtaText: 'View All Industries',
      industriesCtaLink: '/industries'`;

content = content.replace(str1, '');
content = content.replace(str2, '');
content = content.replace(str3, '');

fs.writeFileSync('src/lib/service-details.ts', content);
