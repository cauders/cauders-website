const fs = require('fs');
const path = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/lib/service-details.ts';
let content = fs.readFileSync(path, 'utf8');

function replaceBlock(content, key, newCode) {
    const regex = new RegExp(`'${key}':[\\s\\S]*?(?=\\n\\s+'[a-z0-9-]+': |\\n};)`, 'g');
    if (!regex.test(content)) {
        console.log('Could not find ' + key);
        return content;
    }
    return content.replace(regex, newCode);
}

const maintenanceBlock = `'application-maintenance-support': {
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
            capabilitiesTitle: 'Our Core Capabilities',
            capabilities: [
              {
                title: 'Application Monitoring',
                description: 'We monitor application health, infrastructure, availability, errors, performance, and resource usage to help maintain uptime.',
                ctaText: 'Let\\'s Discuss',
                imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Security Patching & Updates',
                description: 'Security updates and vulnerability remediation to safeguard your applications against emerging threats.',
                ctaText: 'Let\\'s Discuss',
                imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Cloud Infrastructure Optimization',
                description: 'We ensure your cloud resources are running efficiently to minimize unnecessary costs.',
                ctaText: 'Let\\'s Discuss',
                imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
              }
            ],
            processTitle: 'Our Maintenance Process',
            processSteps: [
              {
                title: 'Monitoring Setup',
                description: 'We establish 24/7 proactive monitoring on your key infrastructure.',
                imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
              },
              {
                title: 'Routine Auditing',
                description: 'Continuous auditing of system health, security, and performance metrics.',
                imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
              },
              {
                title: 'Patch Deployment',
                description: 'Safely rolling out security patches and library updates without downtime.',
                imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
              }
            ],
            industriesTitle: 'Industries We Empower',
            industriesDescription: 'We support mission-critical applications across various sectors.',
            industriesCtaText: 'View All Industries',
            industriesCtaLink: '/industries',
            industries: [
              { slug: 'healthcare', subcategories: ['Health Information Systems', 'Telemedicine Portals'] },
              { slug: 'banking-financial-services', subcategories: ['Fintech Backends', 'Secure Transactions'] },
              { slug: 'technology-software', subcategories: ['SaaS Platforms'] }
            ],
            whyUsTitle: 'Why Partner With Cauders?',
            whyUsDescription: 'Reliable, proactive support that protects your digital investment.',
            whyUsCtaText: 'Let\\'s Discuss Support',
            whyUsCtaLink: '/contact',
            whyUsCards: [
              {
                title: 'Proactive Resolution',
                description: 'We fix potential issues before they impact your end-users.',
                stat: { value: '24/7', label: 'Monitoring' }
              },
              {
                title: 'Security First',
                description: 'Constant vigilance against emerging threats and vulnerabilities.',
                stat: { value: 'Zero', label: 'Breaches' }
              },
              {
                title: 'Cost Optimization',
                description: 'We identify resource bloat to save you money on cloud hosting.',
                stat: { value: 'Optimized', label: 'Cloud Costs' }
              }
            ],
            techStackTitle: 'Monitoring Tools',
            techStack: [
              { name: 'Prometheus', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg' },
              { name: 'Grafana', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg' },
              { name: 'Docker', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' }
            ],
            portfolioTitle: 'Maintained Applications',
            portfolioDescription: 'Applications we actively support and optimize.',
            portfolioItems: [
              { title: 'Enterprise Dashboard', imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' }
            ],
            ctaHeading: 'Ready to start your project?'
        }`;

const ecomMaintenanceBlock = `'ecommerce-maintenance-support': {
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
            capabilitiesTitle: 'Our Core Capabilities',
            capabilities: [
              {
                title: 'Ongoing Enhancements',
                description: 'We continuously improve store functionality, integrations, design, performance, and customer experience.',
                ctaText: 'Let\\'s Discuss',
                imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Third-Party Integrations',
                description: 'We connect stores with payment gateways, shipping providers, CRM platforms, ERP systems, and analytics tools.',
                ctaText: 'Let\\'s Discuss',
                imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Conversion Optimization',
                description: 'A/B testing layouts, improving page speed, and reducing cart abandonment.',
                ctaText: 'Let\\'s Discuss',
                imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
              }
            ],
            processTitle: 'Our Maintenance Workflow',
            processSteps: [
              {
                title: 'Store Audits',
                description: 'Regular checks on performance, security, and conversion metrics.',
                imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
              },
              {
                title: 'Catalog Updates',
                description: 'Managing seasonal inventory swaps, pricing updates, and new product lines.',
                imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c50a30?auto=format&fit=crop&q=80&w=800',
              },
              {
                title: 'App Management',
                description: 'Auditing and updating third-party plugins to ensure compatibility.',
                imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800',
              }
            ],
            industriesTitle: 'Industries We Empower',
            industriesDescription: 'Supporting online retailers globally.',
            industriesCtaText: 'View All Industries',
            industriesCtaLink: '/industries',
            industries: [
              { slug: 'retail-ecommerce', subcategories: ['Online Storefronts', 'Marketplaces'] },
              { slug: 'technology-software', subcategories: ['Digital Subscriptions'] },
              { slug: 'healthcare', subcategories: ['B2B Medical Supply'] }
            ],
            whyUsTitle: 'Why Partner With Cauders?',
            whyUsDescription: 'We keep your online store fast, secure, and converting.',
            whyUsCtaText: 'Let\\'s Discuss Support',
            whyUsCtaLink: '/contact',
            whyUsCards: [
              {
                title: 'Dedicated Support',
                description: 'Expert help when you need it, especially during peak seasons.',
                stat: { value: '24/7', label: 'Availability' }
              },
              {
                title: 'Performance Focus',
                description: 'We ensure your site loads instantly, preventing lost sales.',
                stat: { value: 'Speed', label: 'Optimized' }
              },
              {
                title: 'Seamless Integrations',
                description: 'We keep your ERP, CRM, and fulfillment tools perfectly synced.',
                stat: { value: 'Flawless', label: 'Sync' }
              }
            ],
            techStackTitle: 'Supported Platforms',
            techStack: [
              { name: 'Shopify', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/shopify/shopify-original.svg' },
              { name: 'WooCommerce', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-original.svg' },
              { name: 'Magento', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/magento/magento-original.svg' }
            ],
            portfolioTitle: 'Supported Stores',
            portfolioDescription: 'E-commerce platforms we maintain and optimize.',
            portfolioItems: [
              { title: 'Global E-Commerce Platform', imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800' }
            ],
            ctaHeading: 'Ready to start your project?'
        }`;

content = replaceBlock(content, 'application-maintenance-support', maintenanceBlock);
content = replaceBlock(content, 'ecommerce-maintenance-support', ecomMaintenanceBlock);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated maintenance details.');
