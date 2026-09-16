const fs = require('fs');
const path = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/lib/service-details.ts';
let content = fs.readFileSync(path, 'utf8');

// Function to replace a block in the object
function replaceBlock(content, key, newCode) {
    const regex = new RegExp(`'${key}':[\\s\\S]*?(?=\\n\\s+'[a-z0-9-]+': |\\n};)`, 'g');
    if (!regex.test(content)) {
        console.log('Could not find ' + key);
        return content;
    }
    return content.replace(regex, newCode);
}

// 1. Replace ecommerce-development
const ecommerceDev = `'ecommerce-development': {
            slug: 'ecommerce-development',
            hero: {
              badge: 'SOFTWARE SOLUTIONS',
              title: 'E-Commerce Development',
              description: 'We build scalable e-commerce backends, payment integrations, custom checkout flows, and complex product catalogs.',
              ctaText: 'Build Your Store',
              imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1920',
            },
            overview: {
              heading: 'Cauders E-Commerce Development',
              paragraphs: [
                'We create secure, conversion-focused e-commerce platforms that support product discovery, shopping, checkout, payments, fulfillment, inventory, and customer engagement.',
                'Whether you need a custom online store, a headless commerce storefront, or omnichannel commerce experiences, our engineering team has the expertise to deliver it.'
              ],
              points: [
                'Headless Commerce Architectures',
                'Custom Online Stores',
                'Payment Gateway Integration',
                'Omnichannel Experiences'
              ]
            },
            capabilitiesTitle: 'E-Commerce Development Capabilities',
            capabilities: [
              {
                title: 'Headless Storefronts',
                description: 'We separate the customer-facing storefront from the commerce backend, enabling greater design flexibility and integration.',
                ctaText: 'Learn More',
                imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Payment Gateway Integration',
                description: 'Secure payment integrations, tax and shipping configurations, and frictionless checkout flows.',
                ctaText: 'Learn More',
                imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Inventory & Order Management',
                description: 'Robust inventory systems that synchronize with CRM, ERP, and fulfillment partners.',
                ctaText: 'Learn More',
                imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c50a30?auto=format&fit=crop&q=80&w=800'
              }
            ],
            processTitle: 'Our E-Commerce Development Process',
            processSteps: [
              {
                title: 'Commerce Strategy',
                description: 'We define the platform architecture and customer journeys.',
                imageUrl: 'https://images.unsplash.com/photo-1507925922837-326f1e29ad27?auto=format&fit=crop&q=80&w=800',
              },
              {
                title: 'Store Development',
                description: 'Our engineers build responsive, accessible storefronts and robust backends.',
                imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
              }
            ],
            industriesTitle: 'E-Commerce Across Industries',
            industriesDescription: 'Our commerce solutions serve a variety of sectors.',
            industriesCtaText: 'View All Industries',
            industriesCtaLink: '/industries',
            industries: [
              { slug: 'retail-ecommerce', subcategories: ['Direct to Consumer', 'B2B Commerce'] }
            ],
            whyUsTitle: 'Why Choose Cauders for E-Commerce?',
            whyUsDescription: 'We deliver platforms that convert visitors into loyal customers.',
            whyUsCtaText: 'Let\\'s Discuss Your Project',
            whyUsCtaLink: '/contact',
            whyUsCards: [
              {
                title: 'Proven Track Record',
                description: 'Successfully delivered complex e-commerce projects.',
                stat: { value: '100+', label: 'Stores Launched' }
              }
            ],
            techStackTitle: 'E-Commerce Tech Stack',
            techStack: [
              { name: 'Shopify', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/shopify/shopify-original.svg' },
              { name: 'WooCommerce', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-original.svg' }
            ],
            portfolioTitle: 'Featured E-Commerce Projects',
            portfolioDescription: 'Explore our recent e-commerce success stories.',
            portfolioItems: [
              { title: 'Global E-Commerce Platform', imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800' }
            ],
            ctaHeading: 'Ready to build your E-Commerce Store? <br class="hidden sm:block"/> Let\\'s Get to Work'
        }`;

// 2. Replace ecommerce-design
const ecommerceDesign = `'ecommerce-design': {
            slug: 'ecommerce-design',
            hero: {
              badge: 'DESIGN & DIGITAL COMMERCE',
              title: 'E-Commerce Design',
              description: 'We design intuitive, high-converting e-commerce experiences that simplify purchasing and build brand loyalty.',
              ctaText: 'Launch Your Store',
              imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1920',
            },
            overview: {
              heading: 'Cauders E-Commerce Design',
              paragraphs: [
                'We build and optimize e-commerce experiences that help businesses attract customers, simplify purchasing, improve conversion rates, and scale across products, channels, and markets.',
                'From strategy and consulting to platform selection and buyer experience design, our solutions are built to maximize growth.'
              ],
              points: [
                'E-Commerce Consulting',
                'Buyer Experience Design',
                'Store Migrations & Redesigns',
                'Omnichannel Commerce'
              ]
            },
            capabilitiesTitle: 'E-Commerce Design Capabilities',
            capabilities: [
              {
                title: 'Buyer Experience Design',
                description: 'We design intuitive, accessible interfaces that focus on buyer journeys, product discovery, and frictionless checkout processes.',
                ctaText: 'Learn More',
                imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'E-Commerce Revamps & Migrations',
                description: 'We redesign or migrate stores while protecting data integrity, SEO performance, product information, and business continuity.',
                ctaText: 'Learn More',
                imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
              }
            ],
            processTitle: 'Our Design Process',
            processSteps: [
              {
                title: 'Commerce Strategy',
                description: 'We define the platform architecture and customer journeys.',
                imageUrl: 'https://images.unsplash.com/photo-1507925922837-326f1e29ad27?auto=format&fit=crop&q=80&w=800',
              },
              {
                title: 'Buyer Experience Design',
                description: 'We create high-converting buyer experiences tailored to your brand.',
                imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800',
              }
            ],
            industriesTitle: 'E-Commerce Across Industries',
            industriesDescription: 'Our commerce solutions serve a variety of sectors.',
            industriesCtaText: 'View All Industries',
            industriesCtaLink: '/industries',
            industries: [
              { slug: 'retail-ecommerce', subcategories: ['Direct to Consumer', 'B2B Commerce'] }
            ],
            whyUsTitle: 'Why Choose Cauders for E-Commerce Design?',
            whyUsDescription: 'We deliver platforms that convert visitors into loyal customers.',
            whyUsCtaText: 'Let\\'s Discuss Your Project',
            whyUsCtaLink: '/contact',
            whyUsCards: [
              {
                title: 'Proven Track Record',
                description: 'Successfully delivered complex e-commerce projects.',
                stat: { value: '100+', label: 'Stores Launched' }
              }
            ],
            techStackTitle: 'E-Commerce Platforms',
            techStack: [
              { name: 'Shopify', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/shopify/shopify-original.svg' }
            ],
            portfolioTitle: 'Featured Projects',
            portfolioDescription: 'Explore our recent e-commerce success stories.',
            portfolioItems: [
              { title: 'Global E-Commerce Platform', imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800' }
            ],
            ctaHeading: 'Ready to design your E-Commerce Store? <br class="hidden sm:block"/> Let\\'s Get to Work'
        }`;

// 3. Replace maintenance-support with application-maintenance-support and ecommerce-maintenance-support
const maintenanceSupport = `'application-maintenance-support': {
            slug: 'application-maintenance-support',
            hero: {
              badge: 'MAINTENANCE & SUPPORT',
              title: 'Application Maintenance & Support',
              description: 'We keep your applications secure, stable, current, and ready for ongoing growth.',
              ctaText: 'Get Support',
              imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1920',
            },
            overview: {
              heading: 'Ongoing Technical Support',
              paragraphs: [
                'Our relationship with clients continues after launch. We provide ongoing technical support to protect your investment and ensure your digital products remain secure, functional, and competitive.',
                'We keep your software stable, patched, and optimized so your team can focus on business growth rather than technical debt.'
              ],
              points: [
                'Application Monitoring',
                'Security Patching',
                'Performance Optimization',
                'Continuous Enhancements'
              ]
            },
            capabilitiesTitle: 'Support Services',
            capabilities: [
              {
                title: 'Application Monitoring',
                description: 'We monitor application health, infrastructure, availability, errors, performance, and resource usage to help maintain uptime.',
                ctaText: 'Learn More',
                imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Security Patching & Updates',
                description: 'Security updates and vulnerability remediation to safeguard your applications against emerging threats.',
                ctaText: 'Learn More',
                imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
              }
            ],
            processTitle: 'Our Maintenance Process',
            processSteps: [
              {
                title: 'Monitoring & Auditing',
                description: 'Continuous monitoring of system health, security, and performance.',
                imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
              }
            ],
            industriesTitle: 'Support Across Industries',
            industriesDescription: 'We support mission-critical applications across various sectors.',
            industriesCtaText: 'View All Industries',
            industriesCtaLink: '/industries',
            industries: [
              { slug: 'healthcare', subcategories: ['Health Information Systems'] }
            ],
            whyUsTitle: 'Why Choose Us for Maintenance?',
            whyUsDescription: 'Reliable, proactive support that protects your digital investment.',
            whyUsCtaText: 'Let\\'s Discuss Support',
            whyUsCtaLink: '/contact',
            whyUsCards: [
              {
                title: 'Reliable Uptime',
                description: 'Keeping systems available and performant.',
                stat: { value: '24/7', label: 'Monitoring' }
              }
            ],
            techStackTitle: 'Monitoring Tools',
            techStack: [
              { name: 'Prometheus', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg' }
            ],
            portfolioTitle: 'Maintained Applications',
            portfolioDescription: 'Applications we actively support and optimize.',
            portfolioItems: [
              { title: 'Enterprise Dashboard', imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' }
            ],
            ctaHeading: 'Ready to secure your application? <br class="hidden sm:block"/> Let\\'s Get Started'
        },
    'ecommerce-maintenance-support': {
            slug: 'ecommerce-maintenance-support',
            hero: {
              badge: 'MAINTENANCE & SUPPORT',
              title: 'E-Commerce Maintenance & Support',
              description: 'We manage the technical and operational needs of online stores to maintain availability, security, usability, and performance.',
              ctaText: 'Maintain Your Store',
              imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1920',
            },
            overview: {
              heading: 'E-Commerce Store Management',
              paragraphs: [
                'We manage the technical and operational needs of online stores to maintain availability, security, usability, and performance.',
                'From product uploads and inventory updates to third-party integrations, Shopify app configuration, and conversion optimization, we handle the technical lifting so you can focus on sales.'
              ],
              points: [
                'Product & Inventory Updates',
                'Technical Troubleshooting',
                'Security & Performance',
                'Shopify App Configuration'
              ]
            },
            capabilitiesTitle: 'E-Commerce Maintenance Services',
            capabilities: [
              {
                title: 'Ongoing Enhancements',
                description: 'We continuously improve store functionality, integrations, design, performance, and customer experience.',
                ctaText: 'Learn More',
                imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Third-Party Integrations',
                description: 'We connect stores with payment gateways, shipping providers, CRM platforms, ERP systems, and analytics tools.',
                ctaText: 'Learn More',
                imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800'
              }
            ],
            processTitle: 'Our Maintenance Workflow',
            processSteps: [
              {
                title: 'Store Audits',
                description: 'Regular checks on performance, security, and conversion metrics.',
                imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
              }
            ],
            industriesTitle: 'E-Commerce Support',
            industriesDescription: 'Supporting online retailers globally.',
            industriesCtaText: 'View All Industries',
            industriesCtaLink: '/industries',
            industries: [
              { slug: 'retail-ecommerce', subcategories: ['Online Storefronts'] }
            ],
            whyUsTitle: 'Why Choose Us for E-Commerce Support?',
            whyUsDescription: 'We keep your online store fast, secure, and converting.',
            whyUsCtaText: 'Let\\'s Discuss Support',
            whyUsCtaLink: '/contact',
            whyUsCards: [
              {
                title: 'Dedicated Support',
                description: 'Expert help when you need it.',
                stat: { value: '24/7', label: 'Availability' }
              }
            ],
            techStackTitle: 'Supported Platforms',
            techStack: [
              { name: 'Shopify', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/shopify/shopify-original.svg' }
            ],
            portfolioTitle: 'Supported Stores',
            portfolioDescription: 'E-commerce platforms we maintain and optimize.',
            portfolioItems: [
              { title: 'Global E-Commerce Platform', imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800' }
            ],
            ctaHeading: 'Need reliable e-commerce support? <br class="hidden sm:block"/> Contact Us Today'
        }`;

content = replaceBlock(content, 'ecommerce-development', ecommerceDev);
content = replaceBlock(content, 'ecommerce-design', ecommerceDesign);
content = replaceBlock(content, 'maintenance-support', maintenanceSupport);

// Fix quality-assurance and software-testing slugs
content = content.replace(/'quality-assurance': \\{\n\\s+slug: 'web-development',/g, "'quality-assurance': {\\n            slug: 'quality-assurance',");
content = content.replace(/'software-testing': \\{\n\\s+slug: 'web-development',/g, "'software-testing': {\\n            slug: 'software-testing',");

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated service details.');
