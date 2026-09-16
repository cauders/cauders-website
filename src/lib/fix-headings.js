const fs = require('fs');
const path = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/lib/service-details.ts';
let content = fs.readFileSync(path, 'utf8');

// 1. Fix ctaHeading
content = content.replace(/ctaHeading:\s*'Ready to[^']*'/g, "ctaHeading: 'Ready to start your project?'");
content = content.replace(/ctaHeading:\s*'Need reliable[^']*'/g, "ctaHeading: 'Ready to get started?'");

// 2. Fix whyUsTitle
content = content.replace(/whyUsTitle:\s*'Why Choose Cauders for[^']*'/g, "whyUsTitle: 'Why Partner With Cauders?'");
content = content.replace(/whyUsTitle:\s*'Why Choose Us for[^']*'/g, "whyUsTitle: 'Why Partner With Cauders?'");

// 3. Fix capabilitiesTitle
content = content.replace(/capabilitiesTitle:\s*'[^']*Capabilities'/g, "capabilitiesTitle: 'Our Core Capabilities'");
content = content.replace(/capabilitiesTitle:\s*'Support Services'/g, "capabilitiesTitle: 'Our Core Capabilities'");
content = content.replace(/capabilitiesTitle:\s*'E-Commerce Maintenance Services'/g, "capabilitiesTitle: 'Our Core Capabilities'");
content = content.replace(/capabilitiesTitle:\s*'Testing Capabilities'/g, "capabilitiesTitle: 'Our Core Capabilities'");

// 4. Fix industriesTitle
content = content.replace(/industriesTitle:\s*'[^']*Industries'/g, "industriesTitle: 'Industries We Empower'");
content = content.replace(/industriesTitle:\s*'E-Commerce Support'/g, "industriesTitle: 'Industries We Empower'");

// 5. Fix ctaText in capabilities (Learn More -> Let's Discuss)
content = content.replace(/ctaText:\s*'Learn More'/g, "ctaText: 'Let\\'s Discuss'");

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated generic headings.');
