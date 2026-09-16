const fs = require('fs');
const path = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/lib/data.tsx';

let content = fs.readFileSync(path, 'utf8');

// The new aiCategories definition to insert
const newAiBlock = `
export const aiCategories: ServiceCategory[] = [
  {
    slug: 'ai-strategy-advisory',
    title: 'AI Strategy & Advisory',
    description: 'Guiding your AI journey with clear roadmaps and readiness assessments.',
    icon: Compass,
    heroDescription: 'We help leadership teams demystify AI, evaluate organizational readiness, and build actionable roadmaps that align technology investments with business KPIs.',
    services: [
      {
        slug: 'ai-roadmapping-consulting',
        title: 'AI Roadmapping & Consulting',
        description: 'Navigate the complexities of AI adoption. We work with your stakeholders to identify high-impact use cases, evaluate feasibility, and build a phased implementation plan.',
        capabilities: ['Use Case Identification', 'Feasibility Studies', 'ROI Modeling', 'Technology Stack Selection', 'Phased Implementation Planning'],
        icon: Compass,
        ctaText: 'Build Your Roadmap'
      },
      {
        slug: 'ai-readiness-assessments',
        title: 'AI Readiness Assessments',
        description: 'Before deploying AI, you need the right foundation. We evaluate your current data infrastructure, team capabilities, and security posture to ensure you are ready to scale AI safely.',
        capabilities: ['Data Quality Audits', 'Infrastructure Evaluation', 'Security & Compliance Reviews', 'Skills Gap Analysis', 'Governance Frameworks'],
        icon: CheckCircle2,
        ctaText: 'Assess Your Readiness'
      }
    ]
  },
  {
    slug: 'ai-product-engineering',
    title: 'AI Product Engineering',
    description: 'Custom AI applications, predictive models, and intelligent integrations.',
    icon: Code,
    heroDescription: 'Turn AI concepts into production-ready software. Our engineering teams build custom machine learning models, embed AI features into existing applications, and develop end-to-end intelligent platforms.',
    services: [
      {
        slug: 'custom-ai-development',
        title: 'Custom AI Development',
        description: 'We design and develop bespoke AI applications tailored to your specific operational workflows, ensuring seamless integration with your existing digital ecosystem.',
        capabilities: ['End-to-End AI Engineering', 'Algorithm Design', 'Cloud AI Services', 'Performance Tuning', 'Scalable Deployment'],
        icon: Code,
        ctaText: 'Develop Custom AI'
      },
      {
        slug: 'machine-learning-solutions',
        title: 'Machine Learning Solutions',
        description: 'Leverage your historical data to predict trends, automate complex decision-making, and uncover hidden patterns with advanced machine learning models.',
        capabilities: ['Predictive Analytics', 'Classification Models', 'Anomaly Detection', 'Recommendation Engines', 'Time Series Forecasting'],
        icon: TrendingUp,
        ctaText: 'Explore ML Solutions'
      },
      {
        slug: 'ai-integration-apis',
        title: 'AI Integration & APIs',
        description: 'Embed intelligence into your current software stack. We seamlessly integrate leading AI APIs (like OpenAI, Anthropic, or specialized models) into your web and mobile apps.',
        capabilities: ['API Integration', 'Microservices Architecture', 'Legacy System Enhancement', 'Third-Party AI Services', 'Real-time Processing'],
        icon: Blocks,
        ctaText: 'Integrate AI'
      }
    ]
  },
  {
    slug: 'generative-ai-llms',
    title: 'Generative AI & LLMs',
    description: 'Custom language models, autonomous agents, and rapid prototyping.',
    icon: Brain,
    heroDescription: 'Harness the power of foundational models. We specialize in Retrieval-Augmented Generation (RAG), fine-tuning custom language models, and orchestrating autonomous AI agents that act on your behalf.',
    services: [
      {
        slug: 'generative-ai-solutions',
        title: 'Generative AI Solutions',
        description: 'We design and integrate generative AI into your products and workflows. From LLM-powered assistants and retrieval-augmented generation to vector semantic search and AI-driven content generation.',
        capabilities: ['LLM Integration', 'AI Assistants & Chatbots', 'Vector Semantic Search', 'AI-Powered Text Generation', 'Model Fine-Tuning'],
        icon: Brain,
        ctaText: 'Explore Gen AI'
      },
      {
        slug: 'autonomous-ai-agents',
        title: 'Autonomous AI Agents',
        description: 'Design and orchestrate AI agents that do more than just chat. We build systems that can execute multi-step workflows, interact with APIs, and make supervised decisions.',
        capabilities: ['Agentic Workflows', 'Tool Use & API Calling', 'Multi-Agent Systems', 'Human-in-the-loop Controls', 'Task Automation'],
        icon: Bot,
        ctaText: 'Build AI Agents'
      },
      {
        slug: 'rapid-ai-prototyping',
        title: 'Rapid AI Prototyping (MVP)',
        description: 'Test your AI hypothesis in weeks, not months. We rapidly build Minimum Viable Products to validate use cases, measure accuracy, and secure stakeholder buy-in before full-scale development.',
        capabilities: ['Concept Validation', 'Rapid UI/UX', 'Proof of Concept (PoC)', 'MVP Development', 'User Testing'],
        icon: Rocket,
        ctaText: 'Prototype Your Idea'
      }
    ]
  },
  {
    slug: 'enterprise-ai-governance',
    title: 'Enterprise AI & Governance',
    description: 'Scaling AI safely with corporate automation, security, and compliance.',
    icon: Shield,
    heroDescription: 'As AI scales across the enterprise, security and governance become critical. We build robust frameworks to automate corporate workflows securely, ensuring data privacy and regulatory compliance.',
    services: [
      {
        slug: 'corporate-ai-automation',
        title: 'Corporate AI Automation',
        description: 'Streamline enterprise operations by automating complex, data-heavy workflows across HR, finance, legal, and customer support with secure, internal-facing AI tools.',
        capabilities: ['Internal Knowledge Bases', 'Document Processing', 'Workflow Automation', 'Enterprise Search', 'Departmental Copilots'],
        icon: Server,
        ctaText: 'Automate Operations'
      },
      {
        slug: 'ai-security-compliance',
        title: 'AI Security & Compliance',
        description: 'Deploy AI with confidence. We implement strict data boundaries, role-based access controls, and compliance frameworks to protect your proprietary data from leakage and misuse.',
        capabilities: ['Data Privacy Controls', 'LLM Vulnerability Testing', 'Bias & Fairness Audits', 'Compliance Mapping (GDPR/HIPAA)', 'Red Teaming'],
        icon: ShieldCheck,
        ctaText: 'Secure Your AI'
      }
    ]
  },
  {
    slug: 'data-intelligent-automation',
    title: 'Data & Intelligent Automation',
    description: 'Data modernization, analytics, and custom business applications.',
    icon: Database,
    heroDescription: 'AI is only as good as the data powering it. We modernize your data infrastructure, build analytics platforms, and develop the custom applications that connect your business systems.',
    services: [
      {
        slug: 'data-modernization-analytics',
        title: 'Data Modernization & Analytics',
        description: 'We transform fragmented, outdated data environments into reliable, governed, and analytics-ready platforms. From data strategy and integration to warehousing and business intelligence.',
        capabilities: ['Data Platform Strategy', 'Data Integration & Ingestion', 'Data Warehousing', 'Business Intelligence & Reporting', 'Data Lakehouse Architecture'],
        icon: Database,
        ctaText: 'Modernize Your Data'
      },
      {
        slug: 'automation-custom-applications',
        title: 'Automation & Custom Applications',
        description: 'We automate repetitive work, connect business systems, and develop applications that improve efficiency, accuracy, and scalability. From order processing to CRM integrations.',
        capabilities: ['Workflow Automation', 'System Integration', 'Order & Invoicing Automation', 'CRM & ERP Connectors', 'Custom Business Apps'],
        icon: Zap,
        ctaText: 'Automate Your Workflow'
      }
    ]
  }
];

export const serviceCategories: ServiceCategory[] = [
`;

// Regex to find and replace the whole AI & Data block from serviceCategories
const regex = /export const serviceCategories:\s*ServiceCategory\[\]\s*=\s*\[\s*\/\/\s*──\s*1\.\s*ARTIFICIAL INTELLIGENCE & DATA\s*──[\s\S]*?(?=\/\/\s*──\s*2\.\s*SOFTWARE DEVELOPMENT\s*──)/;

if (regex.test(content)) {
  content = content.replace(regex, newAiBlock + '\n  // ── SOFTWARE DEVELOPMENT ──\n');
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully updated data.tsx with aiCategories.');
} else {
  console.log('Failed to find AI & Data block in data.tsx.');
}
