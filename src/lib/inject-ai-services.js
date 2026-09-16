const fs = require('fs');

const aiServicesData = {
  'ai-roadmapping-consulting': `
  'ai-roadmapping-consulting': {
    slug: 'ai-roadmapping-consulting',
    hero: {
      badge: 'AI STRATEGY',
      title: 'AI Roadmapping & Consulting',
      description: 'Navigate the complexities of AI adoption. We work with your stakeholders to identify high-impact use cases, evaluate feasibility, and build a phased implementation plan.',
      ctaText: 'Build Your Roadmap',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920',
    },
    overview: {
      heading: 'Strategic AI Consulting',
      paragraphs: [
        'Adopting Artificial Intelligence is no longer a luxury—it is a necessity. However, successful AI implementation requires more than just deploying the latest model. It demands a strategic approach that aligns technology with business objectives, identifies the most impactful use cases, and mitigates risks.',
        'At Cauders, we help organizations cut through the hype. Our AI experts collaborate closely with your leadership teams to assess your readiness, map out technical requirements, and develop a phased roadmap for AI integration that delivers measurable ROI.'
      ],
      points: [
        'Strategic Alignment with Business Goals',
        'Identification of High-ROI Use Cases',
        'Technical Feasibility Assessment',
        'Phased Implementation Planning'
      ]
    },
    capabilitiesTitle: 'Consulting Services',
    capabilities: [
      {
        title: 'Use Case Identification',
        description: 'We workshop with your teams to uncover operational bottlenecks and customer friction points where AI can drive the most significant value.'
      },
      {
        title: 'Feasibility Studies',
        description: 'Before writing a single line of code, we evaluate data availability, technical constraints, and organizational readiness.'
      },
      {
        title: 'ROI Modeling',
        description: 'We build financial models to forecast the expected return on your AI investments, ensuring they make sound business sense.'
      }
    ],
    processTitle: 'Our Strategic Approach',
    processSteps: [
      { title: 'Discovery', description: 'Deep dive into your business model and operational challenges.' },
      { title: 'Assessment', description: 'Evaluate your current data ecosystem and technical infrastructure.' },
      { title: 'Roadmap Design', description: 'Develop a step-by-step plan for AI adoption.' },
      { title: 'Execution Planning', description: 'Align resources and set timelines for the first pilot projects.' }
    ],
    industriesTitle: 'Transforming Industries',
    industries: [
      { slug: 'healthcare' },
      { slug: 'banking-financial-services' },
      { slug: 'retail-ecommerce' }
    ],
    techStackTitle: 'Consulting Frameworks',
    techStack: [
      { name: 'Miro', logoUrl: '/images/tech/miro.svg' },
      { name: 'Notion', logoUrl: '/images/tech/notion.svg' }
    ],
    portfolioTitle: 'Strategy in Action',
    portfolioDescription: 'See how our strategic consulting has paved the way for successful AI transformations.',
    portfolioItems: []
  }`,
  'ai-readiness-assessments': `
  'ai-readiness-assessments': {
    slug: 'ai-readiness-assessments',
    hero: {
      badge: 'AI STRATEGY',
      title: 'AI Readiness Assessments',
      description: 'Evaluate your current data infrastructure, team capabilities, and security posture to ensure you are ready to scale AI safely.',
      ctaText: 'Assess Your Readiness',
      imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1920',
    },
    overview: {
      heading: 'Is Your Organization AI-Ready?',
      paragraphs: [
        'The foundation of any successful AI initiative is a robust, secure, and compliant data infrastructure. Rushing into AI without the right groundwork often leads to failed projects, security vulnerabilities, and wasted resources.',
        'Our AI Readiness Assessment provides a comprehensive audit of your organization\\'s technical architecture, data governance policies, and team capabilities. We identify gaps and provide actionable recommendations to prepare your business for scalable AI adoption.'
      ],
      points: [
        'Comprehensive Data Audits',
        'Security and Compliance Checks',
        'Infrastructure Evaluation',
        'Skills Gap Analysis'
      ]
    },
    capabilitiesTitle: 'Assessment Services',
    capabilities: [
      {
        title: 'Data Quality Audits',
        description: 'We analyze your data silos, formats, and cleanliness to ensure your data is ready to train or augment AI models.'
      },
      {
        title: 'Security & Compliance',
        description: 'We review your data governance policies to ensure future AI initiatives comply with regulations like GDPR and HIPAA.'
      },
      {
        title: 'Skills Gap Analysis',
        description: 'We evaluate your internal team\\'s capabilities and recommend training or staff augmentation to support AI adoption.'
      }
    ],
    processTitle: 'Assessment Process',
    processSteps: [
      { title: 'Audit', description: 'Reviewing current systems and data structures.' },
      { title: 'Analysis', description: 'Identifying gaps in security, data quality, and infrastructure.' },
      { title: 'Reporting', description: 'Delivering a comprehensive readiness report.' },
      { title: 'Recommendations', description: 'Providing a clear action plan for remediation.' }
    ],
    industriesTitle: 'Ensuring Readiness Across Sectors',
    industries: [
      { slug: 'healthcare' },
      { slug: 'banking-financial-services' }
    ],
    techStackTitle: 'Assessment Tools',
    techStack: [],
    portfolioTitle: 'Readiness Success',
    portfolioDescription: 'Explore organizations we have prepared for the AI era.',
    portfolioItems: []
  }`,
  'custom-ai-development': `
  'custom-ai-development': {
    slug: 'custom-ai-development',
    hero: {
      badge: 'PRODUCT ENGINEERING',
      title: 'Custom AI Development',
      description: 'We design and develop bespoke AI applications tailored to your specific operational workflows, ensuring seamless integration.',
      ctaText: 'Build Your AI',
      imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1920',
    },
    overview: {
      heading: 'Bespoke AI Engineering',
      paragraphs: [
        'Off-the-shelf AI solutions rarely address the unique complexities of a specific business. To gain a true competitive advantage, organizations need bespoke AI applications engineered to integrate flawlessly with their existing systems and operational workflows.',
        'Our engineering teams build custom, end-to-end AI applications. From specialized machine learning models to intelligent web applications, we focus on performance, scalability, and delivering measurable business value.'
      ],
      points: [
        'Tailored AI Architectures',
        'Seamless System Integration',
        'Scalable and Secure Deployment',
        'Performance-Driven Engineering'
      ]
    },
    capabilitiesTitle: 'Engineering Capabilities',
    capabilities: [
      {
        title: 'End-to-End Development',
        description: 'From initial concept and architectural design to full-stack development and cloud deployment.'
      },
      {
        title: 'Cloud AI Services',
        description: 'Leveraging AWS, GCP, and Azure to build scalable, high-availability AI infrastructure.'
      },
      {
        title: 'Algorithm Design',
        description: 'Creating specialized algorithms optimized for your specific datasets and use cases.'
      }
    ],
    processTitle: 'How We Build',
    processSteps: [
      { title: 'Architecture Design', description: 'Designing the technical foundation and data pipelines.' },
      { title: 'Model Development', description: 'Building and training custom AI models.' },
      { title: 'Integration', description: 'Connecting the AI application with your existing systems.' },
      { title: 'Deployment', description: 'Releasing the solution on a secure, scalable cloud infrastructure.' }
    ],
    industriesTitle: 'AI Engineering by Industry',
    industries: [
      { slug: 'technology-software' },
      { slug: 'startups-high-growth' }
    ],
    techStackTitle: 'Core Technologies',
    techStack: [
      { name: 'Python', logoUrl: '/images/tech/python.svg' },
      { name: 'TensorFlow', logoUrl: '/images/tech/tensorflow.svg' },
      { name: 'AWS', logoUrl: '/images/tech/aws.svg' }
    ],
    portfolioTitle: 'Custom AI Products',
    portfolioDescription: 'Discover bespoke AI applications we have engineered for our clients.',
    portfolioItems: []
  }`,
  'machine-learning-solutions': `
  'machine-learning-solutions': {
    slug: 'machine-learning-solutions',
    hero: {
      badge: 'PRODUCT ENGINEERING',
      title: 'Machine Learning Solutions',
      description: 'Leverage your historical data to predict trends, automate complex decision-making, and uncover hidden patterns with advanced ML models.',
      ctaText: 'Leverage ML',
      imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1920',
    },
    overview: {
      heading: 'Predictive Intelligence',
      paragraphs: [
        'Your historical data holds the key to future success. Machine Learning (ML) transforms dormant datasets into predictive engines that can forecast demand, identify anomalies, and automate complex decision-making processes.',
        'We build, train, and deploy sophisticated ML models tailored to your business needs. Whether you need classification algorithms, recommendation engines, or time-series forecasting, we deliver solutions that turn data into actionable intelligence.'
      ],
      points: [
        'Predictive Analytics & Forecasting',
        'Anomaly and Fraud Detection',
        'Personalized Recommendation Engines',
        'Automated Decision Systems'
      ]
    },
    capabilitiesTitle: 'ML Capabilities',
    capabilities: [
      {
        title: 'Predictive Analytics',
        description: 'Forecasting market trends, inventory requirements, and customer behavior based on historical patterns.'
      },
      {
        title: 'Classification Models',
        description: 'Automatically categorizing data, from support tickets to medical images, to streamline operations.'
      },
      {
        title: 'Recommendation Engines',
        description: 'Driving engagement and sales by delivering hyper-personalized content and product suggestions.'
      }
    ],
    processTitle: 'The ML Lifecycle',
    processSteps: [
      { title: 'Data Preparation', description: 'Cleaning, structuring, and feature engineering.' },
      { title: 'Model Training', description: 'Selecting algorithms and training models on historical data.' },
      { title: 'Evaluation', description: 'Testing models against unseen data to ensure accuracy.' },
      { title: 'MLOps & Deployment', description: 'Deploying models to production and setting up continuous monitoring.' }
    ],
    industriesTitle: 'Applied Machine Learning',
    industries: [
      { slug: 'retail-ecommerce' },
      { slug: 'banking-financial-services' }
    ],
    techStackTitle: 'ML Stack',
    techStack: [
      { name: 'PyTorch', logoUrl: '/images/tech/pytorch.svg' },
      { name: 'Scikit-Learn', logoUrl: '/images/tech/scikit-learn.svg' }
    ],
    portfolioTitle: 'ML in Action',
    portfolioDescription: 'See how predictive intelligence is transforming our clients businesses.',
    portfolioItems: []
  }`,
  'ai-integration-apis': `
  'ai-integration-apis': {
    slug: 'ai-integration-apis',
    hero: {
      badge: 'PRODUCT ENGINEERING',
      title: 'AI Integration & APIs',
      description: 'Embed intelligence into your current software stack. We seamlessly integrate leading AI APIs into your web and mobile apps.',
      ctaText: 'Integrate Intelligence',
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920',
    },
    overview: {
      heading: 'Seamlessly Connect Intelligence',
      paragraphs: [
        'You don\\'t always need to build AI from scratch to reap its benefits. Integrating powerful, pre-trained AI models via APIs can rapidly transform your existing web and mobile applications with intelligent capabilities.',
        'We specialize in connecting your legacy systems and modern platforms with industry-leading AI services from OpenAI, Anthropic, Google, and others. We handle the complex microservices architecture required to ensure real-time processing and seamless user experiences.'
      ],
      points: [
        'Rapid Feature Enhancement',
        'Secure API Connectivity',
        'Microservices Architecture',
        'Real-time Data Processing'
      ]
    },
    capabilitiesTitle: 'Integration Services',
    capabilities: [
      {
        title: 'Third-Party AI APIs',
        description: 'Integrating GPT-4, Claude, Gemini, and specialized cognitive services into your applications.'
      },
      {
        title: 'Legacy System Enhancement',
        description: 'Adding modern AI capabilities to older enterprise software without requiring a complete rebuild.'
      },
      {
        title: 'Microservices Architecture',
        description: 'Building robust, scalable middleware to handle API orchestration and data flow.'
      }
    ],
    processTitle: 'Integration Workflow',
    processSteps: [
      { title: 'API Selection', description: 'Choosing the right AI service for your specific usecase.' },
      { title: 'Middleware Dev', description: 'Building secure bridges between your app and the AI APIs.' },
      { title: 'Testing & Optimization', description: 'Ensuring low latency and reliable real-time performance.' },
      { title: 'Go-Live', description: 'Monitoring API usage and managing rate limits.' }
    ],
    industriesTitle: 'Cross-Industry Integrations',
    industries: [
      { slug: 'technology-software' },
      { slug: 'education-elearning' }
    ],
    techStackTitle: 'Integration Tech',
    techStack: [
      { name: 'Node.js', logoUrl: '/images/tech/nodejs.svg' },
      { name: 'OpenAI', logoUrl: '/images/tech/openai.svg' }
    ],
    portfolioTitle: 'Integration Showcase',
    portfolioDescription: 'Examples of applications supercharged by our AI integrations.',
    portfolioItems: []
  }`,
  'autonomous-ai-agents': `
  'autonomous-ai-agents': {
    slug: 'autonomous-ai-agents',
    hero: {
      badge: 'GENERATIVE AI',
      title: 'Autonomous AI Agents',
      description: 'Design and orchestrate AI agents that do more than just chat. We build systems that can execute multi-step workflows and interact with APIs.',
      ctaText: 'Deploy Agents',
      imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1920',
    },
    overview: {
      heading: 'Beyond Chatbots: Systems That Act',
      paragraphs: [
        'While conversational AI is powerful, Autonomous AI Agents represent the next leap forward. These systems don\\'t just answer questions; they reason, plan, and execute multi-step tasks by interacting directly with your software tools and APIs.',
        'We design robust, agentic workflows. By providing LLMs with "tools" (API access to your CRM, databases, or ERP), we create autonomous systems capable of executing complex business processes with minimal human supervision.'
      ],
      points: [
        'Multi-Step Reasoning and Planning',
        'Direct API and Tool Integration',
        'Human-in-the-Loop Safeguards',
        'Multi-Agent Orchestration'
      ]
    },
    capabilitiesTitle: 'Agentic Capabilities',
    capabilities: [
      {
        title: 'Tool Use & API Calling',
        description: 'Equipping LLMs with the ability to trigger actions, update records, and fetch real-time data.'
      },
      {
        title: 'Multi-Agent Systems',
        description: 'Orchestrating teams of specialized AI agents that collaborate to solve complex, multi-faceted problems.'
      },
      {
        title: 'Human-in-the-Loop',
        description: 'Designing approval gates so humans retain control over critical, high-stakes agent actions.'
      }
    ],
    processTitle: 'Orchestrating Agents',
    processSteps: [
      { title: 'Workflow Mapping', description: 'Identifying the exact steps a human takes to complete a task.' },
      { title: 'Tool Development', description: 'Building the APIs and permissions the agent needs to act.' },
      { title: 'Agent Prompting', description: 'Designing the reasoning loop (ReAct) for the agent.' },
      { title: 'Supervised Testing', description: 'Running the agent in a sandbox before production release.' }
    ],
    industriesTitle: 'Automating Complex Industries',
    industries: [
      { slug: 'logistics-supply-chain' },
      { slug: 'technology-software' }
    ],
    techStackTitle: 'Agent Frameworks',
    techStack: [
      { name: 'Python', logoUrl: '/images/tech/python.svg' },
      { name: 'OpenAI', logoUrl: '/images/tech/openai.svg' }
    ],
    portfolioTitle: 'Agentic Workflows',
    portfolioDescription: 'See how autonomous agents are accelerating business processes.',
    portfolioItems: []
  }`,
  'rapid-ai-prototyping': `
  'rapid-ai-prototyping': {
    slug: 'rapid-ai-prototyping',
    hero: {
      badge: 'GENERATIVE AI',
      title: 'Rapid AI Prototyping (MVP)',
      description: 'Test your AI hypothesis in weeks, not months. We rapidly build Minimum Viable Products to validate use cases before full-scale development.',
      ctaText: 'Start Prototyping',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920',
    },
    overview: {
      heading: 'Validate Ideas at Speed',
      paragraphs: [
        'Innovation requires experimentation, but enterprise development cycles are often too slow for the fast-paced world of AI. Rapid prototyping allows you to test hypotheses, demonstrate value to stakeholders, and validate technical feasibility quickly and cost-effectively.',
        'Our dedicated prototyping team builds functional AI MVPs in a matter of weeks. We focus on core functionality, providing a tangible product that you can test with real users before committing to a massive engineering budget.'
      ],
      points: [
        'Speed to Market Validation',
        'Cost-Effective Proof of Concepts',
        'Functional UI/UX for Testing',
        'Stakeholder Buy-In Demonstrations'
      ]
    },
    capabilitiesTitle: 'Prototyping Focus',
    capabilities: [
      {
        title: 'Concept Validation',
        description: 'Quickly determining if an AI solution is technically possible with your current data.'
      },
      {
        title: 'Rapid UI/UX',
        description: 'Building sleek, functional frontends so users can interact with the AI model immediately.'
      },
      {
        title: 'MVP Development',
        description: 'Delivering a scaled-down, working version of the product focused solely on the primary value proposition.'
      }
    ],
    processTitle: 'The Prototyping Sprint',
    processSteps: [
      { title: 'Ideation', description: 'Scoping the MVP to focus only on essential features.' },
      { title: 'Rapid Build', description: 'Developing the core AI integration and user interface in weeks.' },
      { title: 'User Testing', description: 'Putting the prototype in the hands of real users.' },
      { title: 'Iterate or Scale', description: 'Using feedback to refine the concept or secure funding for V1.' }
    ],
    industriesTitle: 'Innovation for Startups & Enterprises',
    industries: [
      { slug: 'startups-high-growth' },
      { slug: 'technology-software' }
    ],
    techStackTitle: 'Rapid Build Stack',
    techStack: [
      { name: 'Next.js', logoUrl: '/images/tech/nextjs.svg' },
      { name: 'Vercel', logoUrl: '/images/tech/vercel.svg' }
    ],
    portfolioTitle: 'Prototypes that Scaled',
    portfolioDescription: 'Discover MVPs we built that evolved into enterprise-grade platforms.',
    portfolioItems: []
  }`,
  'corporate-ai-automation': `
  'corporate-ai-automation': {
    slug: 'corporate-ai-automation',
    hero: {
      badge: 'GOVERNANCE',
      title: 'Corporate AI Automation',
      description: 'Streamline enterprise operations by automating complex, data-heavy workflows across HR, finance, legal, and customer support.',
      ctaText: 'Automate Workflows',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920',
    },
    overview: {
      heading: 'Intelligent Enterprise Operations',
      paragraphs: [
        'Large enterprises are often bogged down by repetitive, manual, and data-heavy processes. Corporate AI Automation replaces these bottlenecks with intelligent workflows, freeing your workforce to focus on high-value, strategic initiatives.',
        'We build secure, internal-facing AI tools tailored for corporate departments. Whether it is automating invoice processing in Finance, parsing resumes in HR, or summarizing contracts in Legal, we deploy AI that integrates securely with your ERP and CRM systems.'
      ],
      points: [
        'Internal Knowledge Bases & Search',
        'Automated Document Processing (OCR & NLP)',
        'Department-Specific Copilots',
        'Secure ERP/CRM Integrations'
      ]
    },
    capabilitiesTitle: 'Automation Use Cases',
    capabilities: [
      {
        title: 'Document Processing',
        description: 'Using AI to instantly extract data, categorize, and route invoices, contracts, and applications.'
      },
      {
        title: 'Enterprise Search',
        description: 'Allowing employees to search across all internal SharePoint, Google Drive, and Confluence docs instantly via natural language.'
      },
      {
        title: 'Departmental Copilots',
        description: 'Building custom AI assistants trained specifically on departmental policies and procedures.'
      }
    ],
    processTitle: 'Enterprise Deployment',
    processSteps: [
      { title: 'Process Mining', description: 'Identifying manual workflows ripe for automation.' },
      { title: 'Secure Integration', description: 'Connecting AI safely to internal enterprise databases.' },
      { title: 'Automation Build', description: 'Developing the intelligent routing and processing logic.' },
      { title: 'Change Management', description: 'Training staff to work alongside their new AI tools.' }
    ],
    industriesTitle: 'Enterprise Applications',
    industries: [
      { slug: 'banking-financial-services' },
      { slug: 'healthcare' }
    ],
    techStackTitle: 'Enterprise Stack',
    techStack: [
      { name: 'Azure', logoUrl: '/images/tech/azure.svg' },
      { name: 'AWS', logoUrl: '/images/tech/aws.svg' }
    ],
    portfolioTitle: 'Enterprise Success',
    portfolioDescription: 'See how we have streamlined operations for large-scale organizations.',
    portfolioItems: []
  }`,
  'ai-security-compliance': `
  'ai-security-compliance': {
    slug: 'ai-security-compliance',
    hero: {
      badge: 'GOVERNANCE',
      title: 'AI Security & Compliance',
      description: 'Deploy AI with confidence. We implement strict data boundaries, role-based access controls, and compliance frameworks.',
      ctaText: 'Secure Your Data',
      imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920',
    },
    overview: {
      heading: 'Safe, Compliant, Responsible AI',
      paragraphs: [
        'As AI adoption accelerates, so do the risks of data leakage, prompt injection, and regulatory non-compliance. Enterprise AI must be built on a foundation of zero-trust security and strict governance to protect proprietary data and maintain customer trust.',
        'We implement comprehensive AI security architectures. We ensure your LLMs respect role-based access controls (RBAC), prevent sensitive data from leaking into model training, and comply with strict industry regulations like HIPAA, GDPR, and SOC2.'
      ],
      points: [
        'Data Privacy and Boundary Controls',
        'LLM Vulnerability and Penetration Testing',
        'Bias, Fairness, and Hallucination Audits',
        'Regulatory Compliance Mapping'
      ]
    },
    capabilitiesTitle: 'Security Measures',
    capabilities: [
      {
        title: 'Data Privacy Controls',
        description: 'Ensuring private company data never leaves your secure cloud environment or trains public models.'
      },
      {
        title: 'LLM Red Teaming',
        description: 'Actively testing your AI systems against prompt injection, jailbreaks, and data extraction attacks.'
      },
      {
        title: 'Compliance Mapping',
        description: 'Architecting AI solutions to meet the strict data handling requirements of GDPR and HIPAA.'
      }
    ],
    processTitle: 'Securing the Stack',
    processSteps: [
      { title: 'Threat Modeling', description: 'Identifying potential AI-specific attack vectors.' },
      { title: 'Architecture Review', description: 'Ensuring data flows respect enterprise boundaries.' },
      { title: 'Guardrail Implementation', description: 'Applying content filters and RBAC at the AI application layer.' },
      { title: 'Continuous Auditing', description: 'Ongoing monitoring of model outputs and security logs.' }
    ],
    industriesTitle: 'Critical Security Sectors',
    industries: [
      { slug: 'banking-financial-services' },
      { slug: 'healthcare' }
    ],
    techStackTitle: 'Security Tech',
    techStack: [],
    portfolioTitle: 'Secure Implementations',
    portfolioDescription: 'Learn how we secure AI infrastructure for highly regulated clients.',
    portfolioItems: []
  }`,
  'intelligent-process-automation': `
  'intelligent-process-automation': {
    slug: 'intelligent-process-automation',
    hero: {
      badge: 'AUTOMATION',
      title: 'Intelligent Process Automation',
      description: 'Combine RPA with Machine Learning to automate complex workflows that require cognitive decision-making.',
      ctaText: 'Automate Processes',
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920',
    },
    overview: {
      heading: 'Cognitive Automation',
      paragraphs: [
        'Traditional Robotic Process Automation (RPA) is great for repetitive, rule-based tasks. But modern business processes often require unstructured data processing and decision-making. That is where Intelligent Process Automation (IPA) comes in.',
        'We blend traditional automation with machine learning and natural language processing. This allows systems to read emails, extract data from PDFs, make context-aware decisions, and execute end-to-end workflows without human intervention.'
      ],
      points: [
        'Integration of RPA and AI',
        'Unstructured Data Processing (OCR/NLP)',
        'Cognitive Decision-Making Engines',
        'End-to-End Workflow Automation'
      ]
    },
    capabilitiesTitle: 'Automation Features',
    capabilities: [
      {
        title: 'Document Intelligence',
        description: 'Extracting key data from invoices, contracts, and forms automatically using Computer Vision and NLP.'
      },
      {
        title: 'Workflow Orchestration',
        description: 'Connecting disjointed legacy systems and modern SaaS apps into seamless automated pipelines.'
      },
      {
        title: 'Cognitive Bots',
        description: 'Deploying software bots that can handle exceptions and make decisions based on historical ML models.'
      }
    ],
    processTitle: 'Automation Implementation',
    processSteps: [
      { title: 'Process Mining', description: 'Identifying the most time-consuming and error-prone tasks.' },
      { title: 'Solution Design', description: 'Mapping out the automated workflow and required AI models.' },
      { title: 'Bot Development', description: 'Building the RPA bots and training the ML extraction models.' },
      { title: 'Deployment', description: 'Releasing the automation and monitoring for exceptions.' }
    ],
    industriesTitle: 'Streamlining Sectors',
    industries: [
      { slug: 'banking-financial-services' },
      { slug: 'healthcare' }
    ],
    techStackTitle: 'Automation Tech',
    techStack: [
      { name: 'Python', logoUrl: '/images/tech/python.svg' }
    ],
    portfolioTitle: 'Automation Success',
    portfolioDescription: 'Explore workflows we have successfully automated for our enterprise clients.',
    portfolioItems: []
  }`,
  'predictive-analytics': `
  'predictive-analytics': {
    slug: 'predictive-analytics',
    hero: {
      badge: 'DATA',
      title: 'Predictive Analytics',
      description: 'Use historical data to forecast trends and optimize business decisions with advanced statistical models.',
      ctaText: 'Forecast the Future',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920',
    },
    overview: {
      heading: 'Anticipate Market Shifts',
      paragraphs: [
        'Predictive analytics allows businesses to move from a reactive posture to a proactive strategy. By analyzing historical data, statistical algorithms can identify the likelihood of future outcomes with remarkable accuracy.',
        'We help organizations build predictive models for demand forecasting, customer churn, dynamic pricing, and risk management. By turning hindsight into foresight, we empower leaders to make data-driven decisions that outpace the competition.'
      ],
      points: [
        'Demand and Sales Forecasting',
        'Customer Churn Prediction',
        'Dynamic Pricing Optimization',
        'Risk and Fraud Modeling'
      ]
    },
    capabilitiesTitle: 'Analytics Capabilities',
    capabilities: [
      {
        title: 'Time Series Forecasting',
        description: 'Predicting future values based on previously observed, time-stamped data.'
      },
      {
        title: 'Churn Prediction',
        description: 'Identifying users likely to cancel subscriptions so you can intervene proactively.'
      },
      {
        title: 'Dynamic Pricing',
        description: 'Algorithms that adjust prices in real-time based on supply, demand, and market conditions.'
      }
    ],
    processTitle: 'Modeling Process',
    processSteps: [
      { title: 'Data Gathering', description: 'Collecting and cleaning historical datasets.' },
      { title: 'Feature Engineering', description: 'Selecting the variables that most impact the predicted outcome.' },
      { title: 'Model Build', description: 'Training statistical and ML models.' },
      { title: 'Integration', description: 'Feeding predictions directly into BI dashboards or business applications.' }
    ],
    industriesTitle: 'Predictive Sectors',
    industries: [
      { slug: 'retail-ecommerce' },
      { slug: 'banking-financial-services' }
    ],
    techStackTitle: 'Analytics Tech',
    techStack: [
      { name: 'Python', logoUrl: '/images/tech/python.svg' },
      { name: 'Scikit-Learn', logoUrl: '/images/tech/scikit-learn.svg' }
    ],
    portfolioTitle: 'Analytics Case Studies',
    portfolioDescription: 'See how forecasting models have driven ROI for our clients.',
    portfolioItems: []
  }`,
  'data-engineering': `
  'data-engineering': {
    slug: 'data-engineering',
    hero: {
      badge: 'DATA',
      title: 'Data Engineering',
      description: 'Design and build the robust data pipelines required for advanced analytics and artificial intelligence.',
      ctaText: 'Build Pipelines',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920',
    },
    overview: {
      heading: 'The Backbone of AI',
      paragraphs: [
        'Without strong data engineering, data science is impossible. Data engineering focuses on practical applications of data collection and analysis, building the pipelines that transport, clean, and store data securely.',
        'We design scalable data architectures. We build the ETL/ELT pipelines that ingest high-volume data from multiple sources, transform it into usable formats, and load it into centralized warehouses or lakes, ensuring it is ready for BI and ML applications.'
      ],
      points: [
        'Scalable ETL/ELT Pipeline Development',
        'Real-time Data Streaming Architecture',
        'Data Warehouse and Data Lake Design',
        'Data Quality and Governance'
      ]
    },
    capabilitiesTitle: 'Engineering Expertise',
    capabilities: [
      {
        title: 'Pipeline Automation',
        description: 'Building resilient, automated workflows to move data across your enterprise seamlessly.'
      },
      {
        title: 'Real-time Streaming',
        description: 'Implementing Kafka or Kinesis for applications that require millisecond data processing.'
      },
      {
        title: 'Architecture Design',
        description: 'Designing scalable, cost-effective storage solutions using Snowflake, BigQuery, or Redshift.'
      }
    ],
    processTitle: 'Engineering Workflow',
    processSteps: [
      { title: 'Source Audit', description: 'Identifying all data sources and required formats.' },
      { title: 'Pipeline Architecture', description: 'Designing the ingestion and transformation logic.' },
      { title: 'Development', description: 'Coding the ETL jobs and setting up orchestration.' },
      { title: 'Monitoring', description: 'Implementing alerts for pipeline failures or data quality issues.' }
    ],
    industriesTitle: 'Data-Heavy Industries',
    industries: [
      { slug: 'logistics-supply-chain' },
      { slug: 'technology-software' }
    ],
    techStackTitle: 'Engineering Stack',
    techStack: [
      { name: 'Python', logoUrl: '/images/tech/python.svg' },
      { name: 'AWS', logoUrl: '/images/tech/aws.svg' }
    ],
    portfolioTitle: 'Data Engineering Portfolio',
    portfolioDescription: 'Explore the data architectures we have built for scale.',
    portfolioItems: []
  }`,
  'computer-vision': `
  'computer-vision': {
    slug: 'computer-vision',
    hero: {
      badge: 'PRODUCT ENGINEERING',
      title: 'Computer Vision',
      description: 'Develop intelligent systems that can interpret, analyze, and act upon visual data from images and video.',
      ctaText: 'Explore Vision AI',
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920',
    },
    overview: {
      heading: 'Teaching Machines to See',
      paragraphs: [
        'Computer Vision (CV) enables machines to extract meaningful information from digital images, videos, and other visual inputs. It is transforming industries by automating quality control, enhancing security, and enabling entirely new product features.',
        'Our engineers build robust CV applications for object detection, facial recognition, image classification, and automated inspection. We deploy these models on the edge or in the cloud to provide real-time visual intelligence.'
      ],
      points: [
        'Real-time Object Detection and Tracking',
        'Image Classification and Segmentation',
        'Facial Recognition and Biometrics',
        'Automated Visual Inspection'
      ]
    },
    capabilitiesTitle: 'Vision Capabilities',
    capabilities: [
      {
        title: 'Object Detection',
        description: 'Identifying and tracking specific objects within images or live video feeds.'
      },
      {
        title: 'Visual Inspection',
        description: 'Automating quality assurance in manufacturing by detecting defects in real-time.'
      },
      {
        title: 'Biometrics',
        description: 'Implementing secure facial recognition for access control or identity verification.'
      }
    ],
    processTitle: 'CV Development',
    processSteps: [
      { title: 'Data Collection', description: 'Gathering and annotating a robust dataset of images/video.' },
      { title: 'Model Selection', description: 'Choosing the right CNN or vision transformer architecture.' },
      { title: 'Training & Tuning', description: 'Training the model for high accuracy and low false positives.' },
      { title: 'Edge/Cloud Deployment', description: 'Deploying the model to hardware for real-time inference.' }
    ],
    industriesTitle: 'Vision Applications',
    industries: [
      { slug: 'healthcare' },
      { slug: 'logistics-supply-chain' }
    ],
    techStackTitle: 'Vision Stack',
    techStack: [
      { name: 'OpenCV', logoUrl: '/images/tech/opencv.svg' },
      { name: 'PyTorch', logoUrl: '/images/tech/pytorch.svg' }
    ],
    portfolioTitle: 'Computer Vision Case Studies',
    portfolioDescription: 'See how we have deployed visual intelligence in the real world.',
    portfolioItems: []
  }`
};

const filePath = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/lib/service-details.ts';
let content = fs.readFileSync(filePath, 'utf8');

const toInject = [];
for (const [slug, data] of Object.entries(aiServicesData)) {
    if (!content.includes(`'${slug}': {`)) {
        toInject.push(data);
    } else {
        console.log(`Skipping ${slug} because it already exists.`);
    }
}

if (toInject.length > 0) {
    const injectionPoint = content.lastIndexOf('};');
    if (injectionPoint !== -1) {
        content = content.substring(0, injectionPoint) + ',' + toInject.join(',') + '\n' + content.substring(injectionPoint);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Successfully injected ${toInject.length} AI services into service-details.ts`);
    }
} else {
    console.log('No new services to inject.');
}
