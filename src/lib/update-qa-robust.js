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

const qaBlock = `'quality-assurance': {
            slug: 'quality-assurance',
            hero: {
              badge: 'QUALITY ASSURANCE & CYBERSECURITY',
              title: 'Quality Assurance',
              description: 'We define QA strategies, ensure compliance with industry standards, and establish processes that bake quality into your software lifecycle.',
              ctaText: 'Establish QA Processes',
              imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920',
            },
            overview: {
              heading: 'Baking Quality Into the Lifecycle',
              paragraphs: [
                'We help ensure that software is functional, secure, reliable, scalable, accessible, and ready for real-world use.',
                'Our QA services cover the complete software development lifecycle, focusing on risk mitigation, accessibility, and governance.'
              ],
              points: [
                'Test Strategy & Planning',
                'Accessibility Testing (WCAG)',
                'Compliance Audits',
                'QA Process Consulting'
              ]
            },
            capabilitiesTitle: 'Our Core Capabilities',
            capabilities: [
              {
                title: 'QA Consulting & Strategy',
                description: 'We evaluate your testing processes and establish robust QA strategies.',
                ctaText: 'Let\\'s Discuss',
                imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Compliance & Accessibility',
                description: 'Testing for WCAG compliance and adherence to industry regulations.',
                ctaText: 'Let\\'s Discuss',
                imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Security Auditing',
                description: 'Identifying vulnerabilities before they become critical breaches.',
                ctaText: 'Let\\'s Discuss',
                imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
              }
            ],
            processTitle: 'Our QA Process',
            processSteps: [
              {
                title: 'Discovery & Audit',
                description: 'Evaluating current codebases and identifying quality gaps.',
                imageUrl: 'https://images.unsplash.com/photo-1507925922837-326f1e29ad27?auto=format&fit=crop&q=80&w=800',
              },
              {
                title: 'Strategy Definition',
                description: 'Defining risk mitigation strategies and QA standards.',
                imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
              },
              {
                title: 'Implementation',
                description: 'Integrating QA guardrails into your CI/CD pipelines.',
                imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
              }
            ],
            industriesTitle: 'Industries We Empower',
            industriesDescription: 'We provide QA for heavily regulated and demanding sectors.',
            industriesCtaText: 'View All Industries',
            industriesCtaLink: '/industries',
            industries: [
              { slug: 'healthcare', subcategories: ['Compliance Audits', 'HIPAA Testing'] },
              { slug: 'banking-financial-services', subcategories: ['Security Audits', 'Transaction Validation'] },
              { slug: 'startups-high-growth', subcategories: ['Scalability Checks', 'Product Reliability'] }
            ],
            whyUsTitle: 'Why Partner With Cauders?',
            whyUsDescription: 'We bake quality into your software from day one.',
            whyUsCtaText: 'Let\\'s Discuss Your Project',
            whyUsCtaLink: '/contact',
            whyUsCards: [
              {
                title: 'Comprehensive Coverage',
                description: 'End-to-end testing and governance across all layers.',
                stat: { value: '100%', label: 'Commitment to Quality' }
              },
              {
                title: 'Industry Compliance',
                description: 'Deep knowledge of HIPAA, GDPR, and WCAG standards.',
                stat: { value: 'Zero', label: 'Compromises' }
              },
              {
                title: 'Automated Pipelines',
                description: 'We automate checks so you can deploy faster safely.',
                stat: { value: 'CI/CD', label: 'Integration' }
              }
            ],
            techStackTitle: 'QA Tools',
            techStack: [
              { name: 'SonarQube', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sonarqube/sonarqube-original.svg' },
              { name: 'Jira', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg' },
              { name: 'GitLab', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg' }
            ],
            portfolioTitle: 'Featured Projects',
            portfolioDescription: 'Projects that showcase our commitment to quality.',
            portfolioItems: [
              { title: 'Enterprise Dashboard', imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' }
            ],
            ctaHeading: 'Ready to start your project?'
        }`;

const softwareTestingBlock = `'software-testing': {
            slug: 'software-testing',
            hero: {
              badge: 'QUALITY ASSURANCE & CYBERSECURITY',
              title: 'Software Testing',
              description: 'We identify defects and validate that applications meet performance requirements before they reach users.',
              ctaText: 'Test Your Software',
              imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1920',
            },
            overview: {
              heading: 'Rigorous Software Testing',
              paragraphs: [
                'We combine structured human testing with automation to identify defects, validate requirements, reduce testing time, and improve release confidence.',
                'We simulate realistic traffic and user behavior to identify performance bottlenecks and validate responsiveness under normal, peak, and stress conditions.'
              ],
              points: [
                'Automated & Manual Testing',
                'Performance & Load Testing',
                'API & Integration Testing',
                'Continuous Quality Assurance'
              ]
            },
            capabilitiesTitle: 'Our Core Capabilities',
            capabilities: [
              {
                title: 'Automated Testing',
                description: 'We automate functional, regression, integration, browser, and mobile test scenarios.',
                ctaText: 'Let\\'s Discuss',
                imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Performance & Load Testing',
                description: 'Validating responsiveness and stability under normal and peak traffic.',
                ctaText: 'Let\\'s Discuss',
                imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'UI/UX & Usability Testing',
                description: 'We evaluate navigation, accessibility, and user satisfaction.',
                ctaText: 'Let\\'s Discuss',
                imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
              }
            ],
            processTitle: 'Our Testing Process',
            processSteps: [
              {
                title: 'Test Planning',
                description: 'Creating comprehensive test cases for functional and non-functional requirements.',
                imageUrl: 'https://images.unsplash.com/photo-1507925922837-326f1e29ad27?auto=format&fit=crop&q=80&w=800',
              },
              {
                title: 'Execution & Automation',
                description: 'Running manual tests and implementing automated test suites.',
                imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
              },
              {
                title: 'Reporting & Remediation',
                description: 'Filing clear bug reports and verifying fixes prior to release.',
                imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
              }
            ],
            industriesTitle: 'Industries We Empower',
            industriesDescription: 'We provide software testing for various sectors.',
            industriesCtaText: 'View All Industries',
            industriesCtaLink: '/industries',
            industries: [
              { slug: 'healthcare', subcategories: ['Privacy Testing', 'Availability Testing'] },
              { slug: 'technology-software', subcategories: ['SaaS Reliability', 'API Load Testing'] },
              { slug: 'retail-ecommerce', subcategories: ['Checkout Flows', 'Traffic Surges'] }
            ],
            whyUsTitle: 'Why Partner With Cauders?',
            whyUsDescription: 'We help you ship with confidence.',
            whyUsCtaText: 'Let\\'s Discuss Your Project',
            whyUsCtaLink: '/contact',
            whyUsCards: [
              {
                title: 'Faster Releases',
                description: 'Automated pipelines significantly reduce manual testing time.',
                stat: { value: 'Speed', label: 'Optimized' }
              },
              {
                title: 'Uncompromising Quality',
                description: 'Our dual approach of manual and automated testing catches edge cases.',
                stat: { value: 'Reliability', label: 'Guaranteed' }
              },
              {
                title: 'Performance Under Load',
                description: 'We stress-test systems so they don\\'t break when it matters most.',
                stat: { value: 'Scale', label: 'Tested' }
              }
            ],
            techStackTitle: 'Testing Tools',
            techStack: [
              { name: 'Selenium', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg' },
              { name: 'Jest', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg' },
              { name: 'Mocha', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mocha/mocha-original.svg' }
            ],
            portfolioTitle: 'Featured Projects',
            portfolioDescription: 'Projects that showcase our rigorous testing processes.',
            portfolioItems: [
              { title: 'Enterprise Dashboard', imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' }
            ],
            ctaHeading: 'Ready to start your project?'
        }`;

content = replaceBlock(content, 'quality-assurance', qaBlock);
content = replaceBlock(content, 'software-testing', softwareTestingBlock);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated QA and Testing details.');
