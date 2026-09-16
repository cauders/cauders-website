const { Project, SyntaxKind } = require('ts-morph');

const project = new Project();
const sourceFile = project.addSourceFileAtPath('src/lib/service-details.ts');

const detailedServicesDecl = sourceFile.getVariableDeclaration('detailedServices');
const initializer = detailedServicesDecl.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

const properties = initializer.getProperties();

const serviceSpecificData = {
  'web-development': {
    cta: 'Ready to build your web platform?',
    whyUs: [
      { title: 'Scalable Architectures', desc: 'We build platforms designed to handle massive traffic and complex data without slowing down.', icon: 'Layers' },
      { title: 'Full-Stack Mastery', desc: 'From responsive front-ends to secure back-ends, our engineers deliver end-to-end excellence.', icon: 'Code2' },
      { title: 'Security First', desc: 'Rigorous compliance and security standards are baked into every layer of our code.', icon: 'ShieldCheck' }
    ],
    tech: ['react', 'nextjs', 'nodejs', 'typescript', 'aws']
  },
  'mobile-app-development': {
    cta: 'Ready to launch your mobile app?',
    whyUs: [
      { title: 'Native & Cross-Platform', desc: 'We select the right mobile architecture for your goals, whether it\'s React Native, Swift, or Kotlin.', icon: 'Smartphone' },
      { title: 'Fluid User Experiences', desc: 'We design intuitive mobile interfaces that users love to interact with every day.', icon: 'MousePointerClick' },
      { title: 'App Store Success', desc: 'We handle the complexities of App Store and Google Play deployments and optimizations.', icon: 'Rocket' }
    ],
    tech: ['react', 'apple', 'android', 'firebase']
  },
  'custom-software-development': {
    cta: 'Ready to build your custom software?',
    whyUs: [
      { title: 'Bespoke Solutions', desc: 'We engineer software that fits your exact business workflows, not the other way around.', icon: 'Settings' },
      { title: 'Agile Delivery', desc: 'We use iterative agile methodologies to deliver value quickly and adapt to changing needs.', icon: 'RefreshCw' },
      { title: 'Enterprise Integration', desc: 'Seamlessly connect your new software with legacy systems and third-party APIs.', icon: 'Network' }
    ],
    tech: ['python', 'nodejs', 'java', 'docker', 'kubernetes']
  },
  'ui-ux-design': {
    cta: 'Ready to transform your user experience?',
    whyUs: [
      { title: 'User-Centric Approach', desc: 'We base our design decisions on real user research and behavioral data, not guesswork.', icon: 'Users' },
      { title: 'Design Systems', desc: 'We build scalable, reusable design systems that ensure consistency across all your products.', icon: 'LayoutTemplate' },
      { title: 'Conversion Focused', desc: 'Our interfaces are crafted to reduce friction and drive measurable business outcomes.', icon: 'TrendingUp' }
    ],
    tech: ['figma', 'xd', 'sketch']
  },
  'ecommerce-design-development': {
    cta: 'Ready to scale your e-commerce business?',
    whyUs: [
      { title: 'Conversion Optimization', desc: 'Every product page and checkout flow is optimized to maximize your sales and reduce cart abandonment.', icon: 'ShoppingCart' },
      { title: 'Headless Commerce', desc: 'We build decoupled storefronts that provide lightning-fast performance and ultimate flexibility.', icon: 'Zap' },
      { title: 'Complex Integrations', desc: 'Seamlessly integrate your store with inventory, ERP, and global payment gateways.', icon: 'Link' }
    ],
    tech: ['shopify', 'magento', 'woocommerce', 'react', 'nextjs']
  },
  'ecommerce-maintenance-support': {
    cta: 'Ready to secure your e-commerce store?',
    whyUs: [
      { title: '24/7 Monitoring', desc: 'We proactively monitor your store to prevent downtime during critical sales periods.', icon: 'Activity' },
      { title: 'Security Patching', desc: 'Continuous updates to protect your customer data and ensure PCI compliance.', icon: 'Shield' },
      { title: 'Performance Tuning', desc: 'Ongoing optimizations to keep your site loading fast as your catalog grows.', icon: 'Gauge' }
    ],
    tech: ['shopify', 'magento', 'woocommerce', 'aws']
  },
  'automation-custom-applications': {
    cta: 'Ready to automate your workflows?',
    whyUs: [
      { title: 'Process Optimization', desc: 'We identify bottlenecks and replace manual tasks with intelligent, automated workflows.', icon: 'Workflow' },
      { title: 'Seamless Connectivity', desc: 'We build custom connectors to ensure your disparate business tools talk to each other.', icon: 'Plug' },
      { title: 'Scalable Operations', desc: 'Our automation solutions grow with you, allowing your team to focus on high-value work.', icon: 'TrendingUp' }
    ],
    tech: ['python', 'nodejs', 'aws', 'googlecloud']
  },
  'generative-ai-solutions': {
    cta: 'Ready to build your AI solution?',
    whyUs: [
      { title: 'LLM Expertise', desc: 'Deep experience integrating, fine-tuning, and deploying cutting-edge language models for enterprise use cases.', icon: 'BrainCircuit' },
      { title: 'Data Privacy & Security', desc: 'We build private, secure AI environments ensuring your proprietary data never leaks to public models.', icon: 'Lock' },
      { title: 'End-to-End Delivery', desc: 'From AI strategy to robust MLOps and deployment, we handle the entire lifecycle.', icon: 'Rocket' }
    ],
    tech: ['python', 'tensorflow', 'pytorch', 'openai']
  },
  'saas-development': {
    cta: 'Ready to launch your SaaS platform?',
    whyUs: [
      { title: 'Multi-Tenant Mastery', desc: 'We architect secure, isolated, and scalable multi-tenant databases and infrastructure.', icon: 'Database' },
      { title: 'Subscription Logic', desc: 'Complex billing, metered usage, and role-based access control built flawlessly.', icon: 'CreditCard' },
      { title: 'High Availability', desc: 'Cloud-native architectures designed for 99.99% uptime and zero-downtime deployments.', icon: 'Server' }
    ],
    tech: ['react', 'nodejs', 'postgresql', 'aws', 'docker']
  },
  'cloud-transformation': {
    cta: 'Ready to modernize your infrastructure?',
    whyUs: [
      { title: 'Cloud-Native Architecture', desc: 'We don\'t just lift and shift; we refactor applications to fully leverage cloud scalability.', icon: 'Cloud' },
      { title: 'Cost Optimization', desc: 'We design efficient infrastructure that maximizes performance while minimizing monthly cloud spend.', icon: 'PieChart' },
      { title: 'DevOps Excellence', desc: 'Automated CI/CD pipelines and infrastructure-as-code for rapid, reliable deployments.', icon: 'Terminal' }
    ],
    tech: ['aws', 'googlecloud', 'azure', 'kubernetes', 'docker']
  },
  'digital-consulting-strategy': {
    cta: 'Ready to define your digital roadmap?',
    whyUs: [
      { title: 'Business-First Approach', desc: 'We align technology investments directly with your strategic business objectives and ROI targets.', icon: 'Target' },
      { title: 'Industry Expertise', desc: 'Our consultants bring decades of cross-industry experience to solve complex operational challenges.', icon: 'Briefcase' },
      { title: 'Actionable Roadmaps', desc: 'We deliver clear, phased execution plans rather than theoretical presentations.', icon: 'Map' }
    ],
    tech: ['jira', 'confluence', 'figma']
  },
  'business-applications': {
    cta: 'Ready to optimize your business apps?',
    whyUs: [
      { title: 'Unified Ecosystems', desc: 'We break down data silos by seamlessly integrating your core business applications.', icon: 'Blocks' },
      { title: 'Custom CRM/ERP Solutions', desc: 'Tailored implementations that fit your unique sales, marketing, and operational workflows.', icon: 'Settings2' },
      { title: 'User Adoption Focus', desc: 'We prioritize intuitive interfaces and comprehensive training to ensure high employee adoption.', icon: 'Users' }
    ],
    tech: ['salesforce', 'microsoft', 'oracle']
  },
  'data-modernization-analytics': {
    cta: 'Ready to modernize your data?',
    whyUs: [
      { title: 'Modern Data Stacks', desc: 'We implement scalable data lakes and warehouses that break down silos and enable real-time insights.', icon: 'Database' },
      { title: 'Actionable Intelligence', desc: 'We transform raw data into intuitive, interactive dashboards that drive strategic decision-making.', icon: 'LineChart' },
      { title: 'Data Governance', desc: 'We establish robust quality controls and security policies to ensure data integrity and compliance.', icon: 'ShieldCheck' }
    ],
    tech: ['python', 'postgresql', 'mysql', 'googlecloud', 'aws']
  },
  'quality-assurance-testing': {
    cta: 'Ready to ensure flawless software?',
    whyUs: [
      { title: 'Comprehensive Coverage', desc: 'From exploratory manual testing to complex automated regression suites, we catch bugs early.', icon: 'CheckSquare' },
      { title: 'Performance Testing', desc: 'We simulate heavy traffic loads to ensure your application remains stable under peak stress.', icon: 'Activity' },
      { title: 'Shift-Left QA', desc: 'We integrate testing into the earliest stages of development to reduce costs and accelerate delivery.', icon: 'FastForward' }
    ],
    tech: ['selenium', 'cypress', 'jest']
  },
  'cybersecurity-compliance': {
    cta: 'Ready to secure your digital assets?',
    whyUs: [
      { title: 'Proactive Defense', desc: 'We identify and remediate vulnerabilities before they can be exploited by malicious actors.', icon: 'ShieldAlert' },
      { title: 'Regulatory Compliance', desc: 'We ensure your systems meet stringent industry standards including GDPR, HIPAA, and PCI-DSS.', icon: 'FileCheck' },
      { title: 'Zero-Trust Architecture', desc: 'We implement robust identity and access management solutions across your entire ecosystem.', icon: 'Lock' }
    ],
    tech: ['linux', 'amazonwebservices', 'googlecloud'] // generic representations
  },
  'staff-augmentation-offshoring': {
    cta: 'Ready to scale your tech team?',
    whyUs: [
      { title: 'Top-Tier Talent', desc: 'We provide access to rigorously vetted senior engineers, designers, and data scientists.', icon: 'Award' },
      { title: 'Seamless Integration', desc: 'Our professionals adapt to your tools, timezones, and agile ceremonies as true team members.', icon: 'Puzzle' },
      { title: 'Flexible Scaling', desc: 'Rapidly ramp up or scale down your team size based on project demands without long-term overhead.', icon: 'Scaling' }
    ],
    tech: ['react', 'python', 'nodejs', 'aws', 'figma']
  },
  'application-maintenance-support': {
    cta: 'Ready for reliable app support?',
    whyUs: [
      { title: 'Proactive Monitoring', desc: 'We detect and resolve performance issues before they impact your users.', icon: 'Eye' },
      { title: 'Continuous Evolution', desc: 'Beyond bug fixes, we continuously refactor and enhance your application to meet new demands.', icon: 'RefreshCcw' },
      { title: 'SLA-Driven Resolution', desc: 'Guaranteed response times and dedicated support teams for business-critical applications.', icon: 'Clock' }
    ],
    tech: ['docker', 'kubernetes', 'aws', 'nodejs', 'react']
  }
};

// Map names to devicon URLs
const getDevicon = (name) => {
  const deviconMap = {
    'react': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    'nextjs': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    'nodejs': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    'typescript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    'python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    'aws': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    'amazonwebservices': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    'googlecloud': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg',
    'azure': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
    'shopify': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-original.svg', // generic
    'magento': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/magento/magento-original.svg',
    'woocommerce': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-original.svg',
    'figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
    'xd': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-plain.svg',
    'sketch': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sketch/sketch-original.svg',
    'tensorflow': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
    'pytorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg',
    'openai': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-original.svg', // generic
    'java': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    'docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    'kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg',
    'apple': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg',
    'android': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg',
    'firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg',
    'postgresql': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    'mysql': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    'salesforce': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg',
    'jira': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg',
    'confluence': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg',
    'selenium': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg',
    'jest': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
    'cypress': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-original.svg', // generic
    'linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
    'microsoft': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
    'oracle': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg',
  };
  return deviconMap[name] || 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-original.svg';
};


for (const prop of properties) {
  if (prop.getKind() === SyntaxKind.PropertyAssignment) {
    const serviceKey = prop.getName();
    const serviceObj = prop.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);
    const specificData = serviceSpecificData[serviceKey];
    
    if (specificData) {
      // 1. Update ctaHeading
      const ctaProp = serviceObj.getProperty('ctaHeading');
      if (ctaProp) {
        ctaProp.getInitializer().replaceWithText(`'${specificData.cta}'`);
      } else {
        serviceObj.addPropertyAssignment({ name: 'ctaHeading', initializer: `'${specificData.cta}'` });
      }

      // 2. Update whyUsCards
      const whyUsProp = serviceObj.getProperty('whyUsCards');
      if (whyUsProp) {
        whyUsProp.getInitializer().replaceWithText(JSON.stringify(specificData.whyUs).replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'"));
      } else {
        serviceObj.addPropertyAssignment({ name: 'whyUsCards', initializer: JSON.stringify(specificData.whyUs).replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'") });
      }

      // 3. Update techStack
      const techProp = serviceObj.getProperty('techStack');
      if (techProp) {
        const techArrayStr = specificData.tech.map(t => `{ name: '${t.charAt(0).toUpperCase() + t.slice(1)}', logoUrl: '${getDevicon(t)}' }`).join(', ');
        techProp.getInitializer().replaceWithText(`[ ${techArrayStr} ]`);
      } else {
        const techArrayStr = specificData.tech.map(t => `{ name: '${t.charAt(0).toUpperCase() + t.slice(1)}', logoUrl: '${getDevicon(t)}' }`).join(', ');
        serviceObj.addPropertyAssignment({ name: 'techStack', initializer: `[ ${techArrayStr} ]` });
      }
    }
  }
}

sourceFile.saveSync();
console.log('Successfully tailored all services data.');
