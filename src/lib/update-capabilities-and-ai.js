const fs = require('fs');
const path = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/lib/service-details.ts';
let content = fs.readFileSync(path, 'utf8');

// 1. Replace ALL capabilitiesTitle occurrences using a map
const titles = {
    'web-development': 'Web Engineering Services',
    'mobile-app-development': 'Mobile App Solutions',
    'custom-software-development': 'Bespoke Software Engineering',
    'ui-ux-design': 'Design & User Experience',
    'automation-custom-applications': 'Process Automation Offerings',
    'saas-development': 'SaaS Product Development',
    'cloud-transformation': 'Cloud Modernization Services',
    'digital-consulting-strategy': 'Strategic Consulting Services',
    'business-applications': 'Enterprise Application Services',
    'data-modernization-analytics': 'Data & Analytics Offerings',
    'cybersecurity-compliance': 'Security & Governance Offerings',
    'staff-augmentation': 'Team Augmentation Offerings',
    'ecommerce-development': 'Digital Commerce Solutions',
    'ecommerce-design': 'Commerce Experience Design',
    'quality-assurance': 'Quality Assurance Strategies',
    'software-testing': 'Comprehensive Testing Services',
    'application-maintenance-support': 'Ongoing Application Support',
    'ecommerce-maintenance-support': 'E-Commerce Store Management'
};

// Loop through each service in the object and replace its capabilitiesTitle
for (const [slug, title] of Object.entries(titles)) {
    // We'll use a regex that finds the specific service block and replaces its capabilitiesTitle
    const regex = new RegExp(`('${slug}':[\\s\\S]*?)capabilitiesTitle:\\s*'[^']*'`);
    if (regex.test(content)) {
        content = content.replace(regex, `$1capabilitiesTitle: '${title}'`);
    }
}


// 2. Overwrite the generative-ai-solutions block entirely with the new AI Consulting Services content
function replaceBlock(content, key, newCode) {
    const regex = new RegExp(`'${key}':[\\s\\S]*?(?=\\n\\s+'[a-z0-9-]+': |\\n};)`, 'g');
    if (!regex.test(content)) {
        console.log('Could not find ' + key);
        return content;
    }
    return content.replace(regex, newCode);
}

const aiBlock = `'generative-ai-solutions': {
            slug: 'generative-ai-solutions',
            hero: {
              badge: 'ARTIFICIAL INTELLIGENCE & DATA',
              title: 'AI Consulting Services',
              description: 'Harness the full value of AI with our consulting services, helping enterprises navigate AI adoption and implementation through strategies that reduce risk and maximize ROI.',
              ctaText: 'Let\\'s Connect',
              imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1920',
            },
            overview: {
              heading: 'Turning AI Into Measurable Value',
              paragraphs: [
                'AI creates lasting value when it is embedded into how an organization operates, makes decisions, and delivers work. However, applying new technology to outdated processes doesn\\'t result in meaningful transformation.',
                'We work with leaders to prioritize high-impact AI opportunities, assess organizational readiness, redesign operating models, and establish responsible AI governance. Our AI consulting services turn strategic priorities into coordinated action.'
              ],
              points: [
                'AI Strategy & Roadmap',
                'Workflow Transformation',
                'AI Data & Integration',
                'Generative & Agentic AI'
              ]
            },
            capabilitiesTitle: 'Our AI Consulting Services',
            capabilities: [
              {
                title: 'AI Strategy & Roadmap Development',
                description: 'We identify AI opportunities across your operating model against business KPIs and prioritize them based on value and effort.',
                ctaText: 'Let\\'s Discuss',
                imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Generative AI & LLM Consulting',
                description: 'Bring clarity to your generative AI strategy: model selection, prompt architecture, retrieval design, and integration planning.',
                ctaText: 'Let\\'s Discuss',
                imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Agentic AI & Autonomous Agents',
                description: 'Design and orchestrate AI agents and copilots matched to the risk of the decision they support, from human-in-the-loop to autonomous agents.',
                ctaText: 'Let\\'s Discuss',
                imageUrl: 'https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'AI Readiness & Governance',
                description: 'Evaluate your data and infrastructure while establishing runtime controls that keep every model compliant, auditable, and secure.',
                ctaText: 'Let\\'s Discuss',
                imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800'
              }
            ],
            processTitle: 'Our Approach to AI',
            processSteps: [
              {
                title: 'Understand Operating Reality',
                description: 'We start by assessing your existing workflows, roles, friction points, data, technology, and regulatory requirements.',
                imageUrl: 'https://images.unsplash.com/photo-1507925922837-326f1e29ad27?auto=format&fit=crop&q=80&w=800',
              },
              {
                title: 'Identify Opportunities',
                description: 'We determine where AI can automate tasks end-to-end or solve complex decisions.',
                imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800',
              },
              {
                title: 'Prioritize Investment',
                description: 'We build the business case, define its KPI, score delivery effort, and layer in risk.',
                imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
              },
              {
                title: 'Governed Implementation',
                description: 'Carry the roadmap into risk-matched delivery, governance, and ongoing optimization.',
                imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
              }
            ],
            industriesTitle: 'Industries Transformed by AI',
            industriesDescription: 'Our AI consulting drives measurable outcomes across a diverse range of sectors.',
            industriesCtaText: 'View All Industries',
            industriesCtaLink: '/industries',
            industries: [
              { slug: 'healthcare', subcategories: ['Diagnostic Improvement', 'Virtual Assistants'] },
              { slug: 'banking-financial-services', subcategories: ['Predictive Behavior', 'Core Banking Automation'] },
              { slug: 'retail-ecommerce', subcategories: ['Supply Chain Forecasting', 'Personalized Recommendations'] },
              { slug: 'technology-software', subcategories: ['Automated Object Detection', 'Copilots'] }
            ],
            whyUsTitle: 'Why Partner With Cauders for AI?',
            whyUsDescription: 'We help enterprises navigate AI adoption through strategies that reduce risk and maximize ROI.',
            whyUsCtaText: 'Let\\'s Discuss AI',
            whyUsCtaLink: '/contact',
            whyUsCards: [
              {
                title: 'Outcome-Driven Strategy',
                description: 'Every engagement is anchored to a business KPI your leadership tracks, not usage metrics.',
                stat: { value: 'ROI', label: 'Focused' }
              },
              {
                title: 'Executable Roadmaps',
                description: 'Roadmaps are sequenced by value, effort, and risk so you lead with quick wins.',
                stat: { value: '3x', label: 'Faster to Production' }
              },
              {
                title: 'Governance & Security',
                description: 'Compliance and security are designed in from the first sprint to meet global standards.',
                stat: { value: 'Zero', label: 'Compromises' }
              }
            ],
            techStackTitle: 'AI & Data Ecosystem',
            techStack: [
              { name: 'Python', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
              { name: 'TensorFlow', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
              { name: 'AWS', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
              { name: 'Azure', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' }
            ],
            portfolioTitle: 'Featured AI Transformations',
            portfolioDescription: 'Explore our recent success stories in artificial intelligence.',
            portfolioItems: [
              { title: 'Healthcare Support Platform', imageUrl: 'https://images.unsplash.com/photo-1504439468489-c8920d7f5086?auto=format&fit=crop&q=80&w=800' },
              { title: 'Automated Object Detection', imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800' }
            ],
            ctaHeading: 'Ready to start your project?'
        }`;

content = replaceBlock(content, 'generative-ai-solutions', aiBlock);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully applied contextual capability titles and rewrote the AI service.');
