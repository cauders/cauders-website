const fs = require('fs');

const filePath = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/lib/service-details.ts';
let content = fs.readFileSync(filePath, 'utf8');

const aiSlugs = [
  'ai-roadmapping-consulting',
  'ai-readiness-assessments',
  'custom-ai-development',
  'machine-learning-solutions',
  'ai-integration-apis',
  'autonomous-ai-agents',
  'rapid-ai-prototyping',
  'corporate-ai-automation',
  'ai-security-compliance',
  'intelligent-process-automation',
  'predictive-analytics',
  'data-engineering',
  'computer-vision'
];

aiSlugs.forEach(slug => {
    const searchString = `industriesTitle:`;
    // Find the industriesTitle inside the slug's object
    // A bit hacky but we know the structure:
    const regex = new RegExp(`('${slug}'\\s*:\\s*{[\\s\\S]*?)(industriesTitle:\\s*'.*?',)`, 'g');
    
    content = content.replace(regex, (match, p1, p2) => {
        // Only replace if it doesn't already have industriesDescription right after
        if (match.includes('industriesDescription:')) return match;
        
        return `${p1}${p2}
    industriesDescription: 'Our expertise in AI and advanced analytics serves a diverse range of sectors, providing tailored solutions that address unique business challenges.',
    industriesCtaText: 'View All Industries',
    industriesCtaLink: '/industries',`;
    });
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully added missing descriptions and CTAs to AI services.');
