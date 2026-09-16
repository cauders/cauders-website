const fs = require('fs');
const path = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/lib/data.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Maintenance & Support
// We need to merge Application Maintenance and E-Commerce Maintenance into one service.
// Let's create a single service object.
const maintenanceBlock = `
    services: [
      {
        slug: 'application-maintenance-support',
        title: 'Application Maintenance & Support',
        description: 'We keep your applications and e-commerce platforms secure, stable, current, and ready for ongoing growth. From monitoring and bug fixes to performance optimization, security patching, infrastructure support, and continuous feature enhancements.',
        capabilities: ['Application Monitoring', 'Security Patching', 'Bug Fixes', 'Performance & Conversion Optimization', 'Infrastructure Support', 'Store & Platform Configuration', 'Feature Enhancements', 'Third-Party Integrations'],
        icon: Wrench,
        ctaText: 'Get Ongoing Support',
      },
    ],
`;
// Replace the old maintenance services array
content = content.replace(/services: \[\s*\{\s*slug: 'application-maintenance-support'[\s\S]*?slug: 'ecommerce-maintenance-support'[\s\S]*?\},?\s*\],/, maintenanceBlock.trim() + ',');

// 2. Design & Digital Commerce -> Design (remove e-commerce design)
// The user says "for the design we can have a main design heading but we don't want a separate heading for ecommerce design".
// Let's rename the category title if needed, or just remove the e-commerce design service.
// Let's remove E-Commerce Design. We will merge its capabilities into UI/UX Design.
const designBlock = `
    title: 'UI & Experience Design',
    description: 'We design intuitive and engaging digital experiences across platforms, products, and commerce storefronts.',
    icon: Palette,
    heroDescription: 'Great software starts with great design. We blend aesthetics with deep user research to create intuitive, accessible, and high-converting interfaces for web applications, mobile apps, SaaS platforms, and e-commerce stores.',
    services: [
      {
        slug: 'ui-ux-design',
        title: 'UI/UX & Product Design',
        description: 'We create user-centric designs that drive engagement and conversions. Whether you are building a SaaS product, a mobile app, or a digital storefront, we ensure every interaction is meaningful.',
        capabilities: ['User Research & Testing', 'Wireframing & Prototyping', 'Visual Interface Design', 'Design Systems', 'Customer Journey Mapping', 'E-Commerce UX Optimization', 'Conversion Rate Optimization (CRO)'],
        icon: Palette,
        ctaText: 'Design Your Product',
      },
    ],
`;
content = content.replace(/title: 'Design & Digital Commerce',[\s\S]*?slug: 'ecommerce-design'[\s\S]*?\},?\s*\],/, designBlock.trim() + ',');
// Wait, the slug for category is still 'design-digital-commerce', but let's change it to 'design-experience' if needed, but it might break routes.
// Let's keep the slug 'design-digital-commerce' to not break URLs, or we can just let Next.js handle it since it dynamically routes based on what is in data.tsx!
// Actually, modifying category slugs dynamically generates new routes, but any hardcoded links might break.
// Let's keep `design-digital-commerce` as the slug just in case, but change the title to 'Design'.
content = content.replace(/title: 'UI & Experience Design',/, "title: 'Design',");

// 3. Software Solutions -> Remove E-Commerce Development
// E-Commerce Development is the last item in Software Solutions.
const softwareRegex = /\{\s*slug: 'ecommerce-development',[\s\S]*?\},?\s*/;
content = content.replace(softwareRegex, '');

fs.writeFileSync(path, content, 'utf8');
console.log('Updated data.tsx to merge e-commerce items.');
