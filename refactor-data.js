const fs = require('fs');

let content = fs.readFileSync('src/lib/data.tsx', 'utf8');

// 1. Rename Software Development to Software Solutions
content = content.replace(/slug: 'software-development',/g, "slug: 'software-solutions',");
content = content.replace(/title: 'Software Development',/g, "title: 'Software Solutions',");

// 2. Add E-Commerce Development to Software Solutions
// The Software Solutions services array ends around "ctaText: 'Launch Your SaaS',"
const newEcommerceDev = `
      {
        slug: 'ecommerce-development',
        title: 'E-Commerce Development',
        description: 'We build scalable e-commerce backends, payment integrations, custom checkout flows, and complex product catalogs. We specialize in headless storefronts and API-driven commerce platforms built to scale.',
        capabilities: ['Headless Commerce', 'Payment Gateway Integration', 'API & ERP Sync', 'Checkout Optimization', 'Subscription Logic', 'Backend Performance Tuning'],
        icon: ShoppingCart,
        ctaText: 'Build Your Store',
      },`;
content = content.replace(/(ctaText: 'Launch Your SaaS',\s*},\s*)(],)/, `$1${newEcommerceDev}\n    $2`);

// 3. Rename E-Commerce Design & Development to E-Commerce Design
content = content.replace(/slug: 'ecommerce-design-development',/g, "slug: 'ecommerce-design',");
content = content.replace(/title: 'E-Commerce Design & Development',/g, "title: 'E-Commerce Design',");
content = content.replace(/description: 'We build and optimize e-commerce experiences that help businesses attract customers, simplify purchasing, improve conversion rates, and scale across products, channels, and markets. From Shopify and Magento to custom headless storefronts, we handle platform selection, buyer experience design, payment integration, and compliance.',/g, "description: 'We design intuitive, high-converting e-commerce experiences that simplify purchasing and build brand loyalty. We focus on buyer journeys, product discovery, visual identity, and accessible UI for modern digital storefronts.',");

// 4. Split Quality Assurance & Software Testing
// First, find the Quality Assurance & Cybersecurity category
// Inside it, replace the quality-assurance-testing block with two blocks
const oldQATesting = `{
        slug: 'quality-assurance-testing',
        title: 'Quality Assurance & Software Testing',
        description: 'We identify defects, ensure compliance, and validate that applications meet performance and security requirements before they reach users. We implement automated testing, conduct manual exploratory testing, and establish CI/CD pipelines to ensure continuous quality.',
        capabilities: ['Automated Testing (Web & Mobile)', 'Manual Exploratory Testing', 'API & Integration Testing', 'Performance & Load Testing', 'Security Vulnerability Scanning', 'Accessibility Testing (WCAG)', 'CI/CD Pipeline Integration', 'Test Strategy & Planning'],
        icon: ShieldCheck,
        ctaText: 'Ensure Product Quality',
      },`;
const newQAAndTesting = `{
        slug: 'quality-assurance',
        title: 'Quality Assurance',
        description: 'We define QA strategies, ensure compliance with industry standards, and establish processes that bake quality into your software lifecycle from day one. We focus on risk mitigation, accessibility, and governance.',
        capabilities: ['Test Strategy & Planning', 'Accessibility Testing (WCAG)', 'Compliance Audits', 'QA Process Consulting', 'Risk Mitigation', 'Quality Governance'],
        icon: ShieldCheck,
        ctaText: 'Establish QA Processes',
      },
      {
        slug: 'software-testing',
        title: 'Software Testing',
        description: 'We identify defects and validate that applications meet performance requirements before they reach users. We implement robust automated testing, exploratory manual testing, load testing, and seamless CI/CD pipeline integration.',
        capabilities: ['Automated Testing (Web & Mobile)', 'Manual Exploratory Testing', 'API & Integration Testing', 'Performance & Load Testing', 'CI/CD Pipeline Integration', 'Regression Testing'],
        icon: CheckCircle2,
        ctaText: 'Test Your Software',
      },`;
content = content.replace(oldQATesting, newQAAndTesting);

// 5. Merge Application Maintenance and E-Commerce Maintenance
const oldMaintenanceCatContentRegex = /slug: 'maintenance-support',[\s\S]*?services: \[\s*\{[\s\S]*?slug: 'application-maintenance-support',[\s\S]*?\},[\s\S]*?\{[\s\S]*?slug: 'ecommerce-maintenance-support',[\s\S]*?\}\s*\]/g;
const newMaintenanceCatContent = `slug: 'maintenance-support',
    title: 'Maintenance & Support',
    description: 'Ongoing technical support to keep systems secure, compliant, and operational.',
    icon: Headphones,
    heroDescription: 'We provide the ongoing technical support, updates, and monitoring necessary to keep your systems secure, compliant, and fully operational. By proactively managing infrastructure and codebases, we prevent downtime and ensure your digital assets continue to deliver value.',
    services: [
      {
        slug: 'maintenance-support',
        title: 'Maintenance & Support',
        description: 'We take ownership of your application health, providing continuous monitoring, security patching, bug fixes, and performance optimization for web, mobile, and e-commerce platforms. We ensure your systems stay reliable and scale seamlessly without tying up your internal team.',
        capabilities: ['24/7 Monitoring & Alerting', 'Security Patching & Updates', 'Bug Tracking & Resolution', 'Performance Optimization', 'Legacy Code Maintenance', 'Version Upgrades', 'Infrastructure Management', 'SLA-Backed Support'],
        icon: Headphones,
        ctaText: 'Get Reliable Support',
      }
    ]`;
content = content.replace(oldMaintenanceCatContentRegex, newMaintenanceCatContent);

fs.writeFileSync('src/lib/data.tsx', content);
console.log('Done modifying data.tsx');
