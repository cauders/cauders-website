const fs = require('fs');

const filePath = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/lib/service-details.ts';
let content = fs.readFileSync(filePath, 'utf8');

const aiSlugs = [
  'generative-ai-solutions',
  'data-modernization-analytics',
  'automation-custom-applications'
];

aiSlugs.forEach(slug => {
    const searchString = `industriesTitle:`;
    const regex = new RegExp(`('${slug}'\\s*:\\s*{[\\s\\S]*?)(industriesTitle:\\s*'.*?',)`, 'g');
    
    content = content.replace(regex, (match, p1, p2) => {
        if (match.includes('industriesDescription:')) return match;
        
        return `${p1}${p2}
    industriesDescription: 'Our expertise in AI and advanced analytics serves a diverse range of sectors, providing tailored solutions that address unique business challenges.',
    industriesCtaText: 'View All Industries',
    industriesCtaLink: '/industries',`;
    });
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully added missing descriptions and CTAs to original AI services.');
