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
              heading: 'Cauders Quality Assurance',
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
            capabilitiesTitle: 'QA Capabilities',
            capabilities: [
              {
                title: 'QA Consulting & Strategy',
                description: 'We evaluate your testing processes and establish robust QA strategies.',
                ctaText: 'Learn More',
                imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Compliance & Accessibility',
                description: 'Testing for WCAG compliance and adherence to industry regulations.',
                ctaText: 'Learn More',
                imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
              }
            ],
            processTitle: 'Our QA Process',
            processSteps: [
              {
                title: 'Strategy Definition',
                description: 'Defining risk mitigation strategies and QA standards.',
                imageUrl: 'https://images.unsplash.com/photo-1507925922837-326f1e29ad27?auto=format&fit=crop&q=80&w=800',
              }
            ],
            industriesTitle: 'QA Across Industries',
            industriesDescription: 'We provide QA for heavily regulated and demanding sectors.',
            industriesCtaText: 'View All Industries',
            industriesCtaLink: '/industries',
            industries: [
              { slug: 'healthcare', subcategories: ['Compliance Audits', 'HIPAA Testing'] }
            ],
            whyUsTitle: 'Why Choose Cauders for QA?',
            whyUsDescription: 'We bake quality into your software from day one.',
            whyUsCtaText: 'Let\\'s Discuss Your Project',
            whyUsCtaLink: '/contact',
            whyUsCards: [
              {
                title: 'Comprehensive Coverage',
                description: 'End-to-end testing and governance.',
                stat: { value: '100%', label: 'Commitment to Quality' }
              }
            ],
            techStackTitle: 'QA Tools',
            techStack: [
              { name: 'UserTesting', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg' }
            ],
            portfolioTitle: 'Featured Projects',
            portfolioDescription: 'Projects that showcase our commitment to quality.',
            portfolioItems: [
              { title: 'Enterprise Dashboard', imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' }
            ],
            ctaHeading: 'Ready to elevate your QA? <br class="hidden sm:block"/> Let\\'s Get to Work'
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
              heading: 'Cauders Software Testing',
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
            capabilitiesTitle: 'Testing Capabilities',
            capabilities: [
              {
                title: 'Automated Testing',
                description: 'We automate functional, regression, integration, browser, and mobile test scenarios.',
                ctaText: 'Learn More',
                imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Performance & Load Testing',
                description: 'Validating responsiveness and stability under normal and peak traffic.',
                ctaText: 'Learn More',
                imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'UI/UX & Usability Testing',
                description: 'We evaluate navigation, accessibility, and user satisfaction.',
                ctaText: 'Learn More',
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
              }
            ],
            industriesTitle: 'Testing Across Industries',
            industriesDescription: 'We provide software testing for various sectors.',
            industriesCtaText: 'View All Industries',
            industriesCtaLink: '/industries',
            industries: [
              { slug: 'healthcare', subcategories: ['Privacy Testing', 'Availability Testing'] }
            ],
            whyUsTitle: 'Why Choose Cauders for Software Testing?',
            whyUsDescription: 'We help you ship with confidence.',
            whyUsCtaText: 'Let\\'s Discuss Your Project',
            whyUsCtaLink: '/contact',
            whyUsCards: [
              {
                title: 'Faster Releases',
                description: 'Automated pipelines reduce testing time.',
                stat: { value: 'CI/CD', label: 'Integration' }
              }
            ],
            techStackTitle: 'Testing Tools',
            techStack: [
              { name: 'Selenium', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg' },
              { name: 'Cypress', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Cypress.png' }
            ],
            portfolioTitle: 'Featured Projects',
            portfolioDescription: 'Projects that showcase our rigorous testing processes.',
            portfolioItems: [
              { title: 'Enterprise Dashboard', imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' }
            ],
            ctaHeading: 'Ready to test your software? <br class="hidden sm:block"/> Let\\'s Get to Work'
        }`;

content = replaceBlock(content, 'quality-assurance', qaBlock);
content = replaceBlock(content, 'software-testing', softwareTestingBlock);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated QA and Testing details.');
