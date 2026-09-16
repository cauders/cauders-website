const fs = require('fs');

const faqsData = {
  "ai-roadmapping-consulting": [
    { question: "What is an AI roadmap and why do I need one?", answer: "An AI roadmap is a strategic plan that outlines how your organization will adopt and scale AI technologies. It helps prioritize initiatives, manage risks, and align AI projects with your core business objectives." },
    { question: "How long does a typical AI consulting engagement take?", answer: "Our initial roadmapping and strategy engagements typically range from 2 to 6 weeks, depending on the size of your organization and the complexity of your data ecosystem." },
    { question: "Do you help with execution after the roadmap is created?", answer: "Yes, we provide end-to-end services. Once the roadmap is established, our engineering teams can build, deploy, and manage the AI solutions we've recommended." }
  ],
  "ai-readiness-assessments": [
    { question: "What does an AI readiness assessment cover?", answer: "We evaluate your organization's data infrastructure, technical capabilities, security posture, and business processes to determine your preparedness for AI adoption." },
    { question: "What if our data is currently a mess?", answer: "That is exactly what the assessment helps identify. We will provide a step-by-step remediation plan to clean, organize, and structure your data so it is ready for machine learning models." },
    { question: "Who from our team needs to be involved?", answer: "We typically require input from your IT leaders, data engineers, and key business stakeholders to get a comprehensive view of your current state and future goals." }
  ],
  "custom-ai-development": [
    { question: "Can you build AI models completely from scratch?", answer: "Yes, we specialize in training custom models tailored to your proprietary data, ensuring the solution addresses your highly specific business logic and edge cases." },
    { question: "Do I own the IP for the custom AI solution?", answer: "Absolutely. When you partner with Cauders for custom AI development, the final models, source code, and intellectual property belong entirely to your organization." },
    { question: "How do you ensure the AI model is unbiased and accurate?", answer: "We employ rigorous data validation, diverse training sets, and continuous human-in-the-loop testing to minimize bias and maximize the accuracy of the final deployment." }
  ],
  "machine-learning-solutions": [
    { question: "What is the difference between AI and Machine Learning?", answer: "Machine learning is a subset of AI that focuses on training algorithms to learn from data and improve over time without being explicitly programmed for every scenario." },
    { question: "How much data do we need to build a successful ML model?", answer: "While more data is generally better, the quality of the data is paramount. We can often start with a few gigabytes of high-quality, structured data to build a proof of concept." },
    { question: "Can ML integrate with our existing ERP/CRM systems?", answer: "Yes. Our ML solutions are designed to be API-first, allowing seamless integration with legacy systems, modern CRMs, ERPs, and cloud data warehouses." }
  ],
  "ai-integration-apis": [
    { question: "Can you integrate OpenAI or Claude into our existing app?", answer: "Yes, we specialize in seamlessly integrating industry-leading foundation models (like OpenAI, Anthropic, and Gemini) directly into your existing software via secure APIs." },
    { question: "How do you handle rate limits and API costs?", answer: "We implement robust middleware that handles caching, queuing, and failover mechanisms to optimize API calls, minimize latency, and keep your operational costs low." },
    { question: "Is our data safe when sent to third-party AI APIs?", answer: "We strictly utilize enterprise-tier API endpoints which guarantee zero data retention for model training, ensuring your proprietary information remains confidential." }
  ],
  "autonomous-ai-agents": [
    { question: "What is an autonomous AI agent?", answer: "An autonomous AI agent is an advanced system that can plan, execute, and adapt multi-step tasks independently to achieve a specific goal, without requiring constant human prompting." },
    { question: "Can agents browse the web or use our internal tools?", answer: "Yes. We equip our agents with secure tool-calling capabilities, allowing them to browse the internet, query internal databases, or interact with your software stack." },
    { question: "How do we maintain control over autonomous agents?", answer: "We build strict guardrails, role-based access controls, and 'human-in-the-loop' approval checkpoints for any high-stakes actions, ensuring safety and compliance." }
  ],
  "rapid-ai-prototyping": [
    { question: "How fast can you deliver an AI prototype?", answer: "Our rapid prototyping sprints typically deliver a functional, interactive AI proof-of-concept (PoC) within 2 to 4 weeks." },
    { question: "What is the purpose of the prototype?", answer: "Prototyping allows you to validate assumptions, test user interactions, and prove ROI to stakeholders before committing to a massive, full-scale development cycle." },
    { question: "Can the prototype be scaled into a production app later?", answer: "Yes. We build our prototypes on robust, scalable architectures (like Next.js and secure cloud infrastructure) so they can be smoothly transitioned into production products." }
  ],
  "corporate-ai-automation": [
    { question: "What corporate workflows are best suited for AI automation?", answer: "High-volume, repetitive tasks such as invoice processing, customer support triage, data entry, document summarization, and compliance monitoring are prime candidates." },
    { question: "Will AI automation replace our current workforce?", answer: "Our goal is augmentation, not replacement. AI automation frees your employees from mundane tasks, allowing them to focus on high-value, strategic, and creative work." },
    { question: "How do we measure the success of an automation initiative?", answer: "We establish clear KPIs before development begins, such as hours saved, error rate reduction, and improved processing speeds, to guarantee measurable ROI." }
  ],
  "ai-security-compliance": [
    { question: "How do you protect our data from AI hallucinations?", answer: "We implement strict Retrieval-Augmented Generation (RAG) guardrails, output validation layers, and confidence scoring to drastically minimize the risk of hallucinations." },
    { question: "Are your AI solutions HIPAA/SOC2 compliant?", answer: "Yes, we architect our solutions to meet rigorous compliance standards, utilizing secure enclaves, data masking, and enterprise-grade cloud environments to ensure regulatory adherence." },
    { question: "Do you perform security audits on AI models?", answer: "Absolutely. We conduct extensive adversarial testing (red-teaming) to identify vulnerabilities, prompt injection risks, and data leakage vectors before deployment." }
  ],
  "intelligent-process-automation": [
    { question: "How does IPA differ from traditional RPA?", answer: "While Robotic Process Automation (RPA) follows strict rules, Intelligent Process Automation (IPA) incorporates AI to handle unstructured data, make cognitive decisions, and learn from exceptions." },
    { question: "Can IPA read and process physical documents?", answer: "Yes. We utilize advanced optical character recognition (OCR) and natural language processing (NLP) to extract, categorize, and act upon data from physical documents and PDFs." },
    { question: "How long does an IPA implementation take?", answer: "Depending on the complexity of the workflow and legacy system integrations, a typical IPA deployment can take anywhere from 1 to 4 months." }
  ],
  "predictive-analytics": [
    { question: "What can predictive analytics do for my business?", answer: "Predictive analytics utilizes historical data to forecast future outcomes, helping you anticipate customer churn, optimize inventory, predict equipment failures, and increase sales." },
    { question: "Do we need a massive data warehouse to start?", answer: "While a centralized data warehouse is beneficial, we can often begin extracting predictive insights directly from your existing CRM, ERP, or specialized operational databases." },
    { question: "How accurate are the predictive forecasts?", answer: "Accuracy depends on data quality and volume. We use advanced back-testing techniques to tune models until they meet the confidence thresholds required by your business operations." }
  ],
  "data-engineering": [
    { question: "What is data engineering and why is it important for AI?", answer: "Data engineering involves building the infrastructure (pipelines, warehouses, lakes) that collects, cleans, and stores data. It is the crucial foundation required before any reliable AI can be built." },
    { question: "Do you support both batch and streaming data?", answer: "Yes. We architect solutions using modern tools like Apache Kafka for real-time streaming and robust ETL tools for scheduled batch processing." },
    { question: "Which cloud platforms do you build data pipelines on?", answer: "We are cloud-agnostic and have deep expertise in building scalable data infrastructure on AWS, Google Cloud Platform (GCP), and Microsoft Azure." }
  ],
  "computer-vision": [
    { question: "What is computer vision used for in business?", answer: "Computer vision enables machines to interpret visual data. Common applications include quality control in manufacturing, facial recognition for security, and medical image analysis." },
    { question: "Can computer vision models run on edge devices?", answer: "Yes, we specialize in optimizing and compressing computer vision models so they can run locally on edge devices (like cameras and IoT sensors) with minimal latency." },
    { question: "How do you train vision models for niche tasks?", answer: "We use transfer learning on state-of-the-art base models, fine-tuning them with a curated dataset of images or videos specific to your niche operational requirements." }
  ]
};

let content = fs.readFileSync('src/lib/service-details.ts', 'utf8');

for (const [slug, faqs] of Object.entries(faqsData)) {
  const faqString = `faqs: ${JSON.stringify(faqs, null, 4).replace(/"([^"]+)":/g, '$1:')},\n  capabilitiesTitle:`;
  const regex = new RegExp(`('${slug}':\\s*{[\\s\\S]*?)capabilitiesTitle:`, 'g');
  
  if (content.match(regex)) {
    content = content.replace(regex, `$1${faqString}`);
  }
}

fs.writeFileSync('src/lib/service-details.ts', content);
console.log('FAQs added successfully!');
