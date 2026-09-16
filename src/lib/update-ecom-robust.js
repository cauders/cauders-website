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
              heading: 'Robust E-Commerce Architectures',
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
            capabilitiesTitle: 'Our Core Capabilities',
            capabilities: [
              {
                title: 'Headless Storefronts',
                description: 'We separate the customer-facing storefront from the commerce backend, enabling greater design flexibility and integration.',
                ctaText: 'Let\\'s Discuss',
                imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Payment Gateway Integration',
                description: 'Secure payment integrations, tax and shipping configurations, and frictionless checkout flows.',
                ctaText: 'Let\\'s Discuss',
                imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Inventory & Order Management',
                description: 'Robust inventory systems that synchronize with CRM, ERP, and fulfillment partners.',
                ctaText: 'Let\\'s Discuss',
                imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c50a30?auto=format&fit=crop&q=80&w=800'
              }
            ],
            processTitle: 'Our Development Process',
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
              },
              {
                title: 'Integration & Testing',
                description: 'We connect inventory and payment systems, ensuring flawless transaction flows.',
                imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
              },
              {
                title: 'Launch & Optimization',
                description: 'Deploying your store and optimizing for peak traffic events.',
                imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
              }
            ],
            industriesTitle: 'Industries We Empower',
            industriesDescription: 'Our commerce solutions serve a variety of sectors, from direct retail to complex B2B.',
            industriesCtaText: 'View All Industries',
            industriesCtaLink: '/industries',
            industries: [
              { slug: 'retail-ecommerce', subcategories: ['Direct to Consumer', 'Marketplaces'] },
              { slug: 'healthcare', subcategories: ['Medical Supply Stores', 'B2B Procurement'] },
              { slug: 'logistics-supply-chain', subcategories: ['Wholesale Distribution'] },
              { slug: 'technology-software', subcategories: ['Digital Goods & Subscriptions'] }
            ],
            whyUsTitle: 'Why Partner With Cauders?',
            whyUsDescription: 'We build digital storefronts engineered for high conversion and massive scale.',
            whyUsCtaText: 'Let\\'s Discuss Your Project',
            whyUsCtaLink: '/contact',
            whyUsCards: [
              {
                title: 'Platform Expertise',
                description: 'Deep knowledge of Shopify Plus, WooCommerce, and custom headless stacks.',
                stat: { value: '100+', label: 'Stores Launched' }
              },
              {
                title: 'Scalable Architecture',
                description: 'Built to handle peak holiday traffic without downtime.',
                stat: { value: '99.9%', label: 'Uptime' }
              },
              {
                title: 'Conversion Focused',
                description: 'Every engineering decision is aimed at reducing cart abandonment.',
                stat: { value: '3x', label: 'ROI Potential' }
              }
            ],
            techStackTitle: 'E-Commerce Tech Stack',
            techStack: [
              { name: 'Shopify', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/shopify/shopify-original.svg' },
              { name: 'WooCommerce', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-original.svg' },
              { name: 'React', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
              { name: 'Node.js', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' }
            ],
            portfolioTitle: 'Featured E-Commerce Projects',
            portfolioDescription: 'Explore our recent success stories in digital retail.',
            portfolioItems: [
              { title: 'Global E-Commerce Platform', imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800' }
            ],
            ctaHeading: 'Ready to start your project?'
        }`;

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
              heading: 'High-Converting Storefronts',
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
            capabilitiesTitle: 'Our Core Capabilities',
            capabilities: [
              {
                title: 'Buyer Experience Design',
                description: 'We design intuitive, accessible interfaces that focus on buyer journeys, product discovery, and frictionless checkout processes.',
                ctaText: 'Let\\'s Discuss',
                imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'E-Commerce Revamps & Migrations',
                description: 'We redesign or migrate stores while protecting data integrity, SEO performance, product information, and business continuity.',
                ctaText: 'Let\\'s Discuss',
                imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
              }
            ],
            processTitle: 'Our Design Process',
            processSteps: [
              {
                title: 'Commerce Strategy',
                description: 'We analyze your target audience and map out intuitive customer journeys.',
                imageUrl: 'https://images.unsplash.com/photo-1507925922837-326f1e29ad27?auto=format&fit=crop&q=80&w=800',
              },
              {
                title: 'UX Wireframing',
                description: 'Prototyping clear pathways from product discovery to checkout.',
                imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800',
              },
              {
                title: 'UI & Brand Design',
                description: 'Applying stunning visuals that elevate your brand and build trust.',
                imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
              }
            ],
            industriesTitle: 'Industries We Empower',
            industriesDescription: 'Designing commerce experiences for a diverse range of sectors.',
            industriesCtaText: 'View All Industries',
            industriesCtaLink: '/industries',
            industries: [
              { slug: 'retail-ecommerce', subcategories: ['Direct to Consumer', 'B2B Commerce'] },
              { slug: 'healthcare', subcategories: ['Telepharmacy', 'Health Products'] },
              { slug: 'real-estate', subcategories: ['Property Marketplaces'] }
            ],
            whyUsTitle: 'Why Partner With Cauders?',
            whyUsDescription: 'We merge aesthetic excellence with conversion-rate optimization.',
            whyUsCtaText: 'Let\\'s Discuss Your Project',
            whyUsCtaLink: '/contact',
            whyUsCards: [
              {
                title: 'Design That Sells',
                description: 'Every layout choice is backed by e-commerce psychology and data.',
                stat: { value: '+40%', label: 'Avg Conversion Lift' }
              },
              {
                title: 'Mobile-First Approach',
                description: 'Flawless shopping experiences on any device.',
                stat: { value: '100%', label: 'Responsive' }
              },
              {
                title: 'Frictionless Checkout',
                description: 'We eliminate barriers to purchase to maximize revenue.',
                stat: { value: 'Fast', label: 'Transactions' }
              }
            ],
            techStackTitle: 'Design & Prototyping Tools',
            techStack: [
              { name: 'Figma', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
              { name: 'Illustrator', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg' }
            ],
            portfolioTitle: 'Featured Projects',
            portfolioDescription: 'Explore our recent e-commerce success stories.',
            portfolioItems: [
              { title: 'Global E-Commerce Platform', imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800' }
            ],
            ctaHeading: 'Ready to start your project?'
        }`;

content = replaceBlock(content, 'ecommerce-development', ecommerceDev);
content = replaceBlock(content, 'ecommerce-design', ecommerceDesign);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated ecommerce details.');
