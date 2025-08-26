import { toSlug } from "./utils";
import { Code, Layers, PenTool, Rocket } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A scalable online store with a custom CMS and integrated payment gateways.',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/600/400?random=1',
    aiHint: 'ecommerce website',
    details: `<p>We developed a feature-rich e-commerce platform from the ground up, designed for scalability and performance. The system includes a custom-built Content Management System (CMS) that allows for easy product updates, inventory management, and order tracking. We integrated Stripe for secure and seamless payment processing.</p><p>The frontend was built with Next.js for server-side rendering, ensuring fast page loads and excellent SEO. A responsive design was implemented using Tailwind CSS to provide a consistent user experience across all devices.</p>`,
    testimonial: {
        author: 'Jane Doe, CEO of ShopCo',
        text: 'Cauders delivered an exceptional platform that has significantly boosted our online sales. Their attention to detail and technical expertise were evident throughout the project.'
    },
    gallery: [
        { url: 'https://picsum.photos/800/600?random=11', alt: 'Product page view', aiHint: 'product page' },
        { url: 'https://picsum.photos/800/600?random=12', alt: 'Shopping cart interface', aiHint: 'shopping cart' },
    ]
  },
  {
    title: 'SaaS Dashboard',
    description: 'An analytics dashboard for a B2B software-as-a-service product.',
    tags: ['React', 'D3.js', 'Node.js', 'Express'],
    imageUrl: 'https://picsum.photos/600/400?random=2',
    aiHint: 'analytics dashboard',
    details: `<p>This project involved creating a powerful and intuitive analytics dashboard for a B2B SaaS application. We used React for the frontend to build a highly interactive and component-based UI. For data visualization, we integrated D3.js to create custom, dynamic charts and graphs that provide deep insights into user data.</p><p>The backend was powered by Node.js and Express, providing a robust API for data retrieval and processing. The dashboard is fully responsive and offers a seamless experience on both desktop and mobile devices.</p>`,
    testimonial: null,
    gallery: []
  },
  {
    title: 'Corporate Website',
    description: 'A modern, professional website for a leading financial services firm.',
    tags: ['Gatsby', 'Contentful', 'Animation', 'GraphQL'],
    imageUrl: 'https://picsum.photos/600/400?random=3',
    aiHint: 'corporate business',
    details: `<p>We designed and developed a sophisticated corporate website for a financial services firm, focusing on professionalism and brand identity. The site was built with Gatsby for blazing-fast performance and security. We used Contentful as a headless CMS, allowing the client's marketing team to easily manage content without technical assistance.</p><p>Subtle animations and micro-interactions were implemented to create an engaging user experience. GraphQL was used to efficiently fetch data from Contentful, contributing to the site's speed and reliability.</p>`,
    testimonial: {
        author: 'John Smith, Marketing Director',
        text: 'The new website has elevated our online presence. Cauders team was professional, creative, and delivered a product that exceeded our expectations.'
    },
    gallery: [
        { url: 'https://picsum.photos/800/600?random=13', alt: 'Homepage hero section', aiHint: 'website homepage' },
        { url: 'https://picsum.photos/800/600?random=14', alt: 'About us page', aiHint: 'team page' },
    ]
  },
    {
    title: 'Mobile Banking App',
    description: 'A secure and intuitive mobile application for a new-age digital bank.',
    tags: ['React Native', 'Firebase', 'Biometrics', 'TypeScript'],
    imageUrl: 'https://picsum.photos/600/400?random=4',
    aiHint: 'mobile banking',
    details: `<p>We built a secure and user-friendly mobile banking application for a modern digital bank. The app was developed using React Native, allowing for a single codebase to target both iOS and Android platforms. Firebase was used for the backend, providing services like Authentication, Firestore database, and Cloud Functions.</p><p>Security was a top priority, so we integrated biometric authentication (Face ID and Touch ID) for secure login and transactions. TypeScript was used throughout the project to ensure code quality and maintainability.</p>`,
    testimonial: null,
    gallery: []
  },
  {
    title: 'AI-Powered Chatbot',
    description: 'Customer service chatbot with natural language processing capabilities.',
    tags: ['Genkit', 'Dialogflow', 'TypeScript', 'Next.js'],
    imageUrl: 'https://picsum.photos/600/400?random=5',
    aiHint: 'chatbot interface',
    details: `<p>This project involved developing an intelligent, AI-powered chatbot to handle customer service inquiries. We used Google's Genkit and Dialogflow to build the natural language processing (NLP) core, enabling the chatbot to understand and respond to a wide range of user questions.</p><p>The chatbot was integrated into a Next.js application, providing a seamless user experience. TypeScript ensured that the codebase was robust and easy to scale.</p>`,
    testimonial: {
        author: 'Emily White, Head of Support',
        text: 'The chatbot has revolutionized our customer support, reducing response times and freeing up our agents to handle more complex issues. A fantastic job by Cauders.'
    },
    gallery: []
  },
  {
    title: 'Real-time Analytics',
    description: 'A platform for visualizing real-time data streams for IoT devices.',
    tags: ['Next.js', 'WebSockets', 'BigQuery', 'Grafana'],
    imageUrl: 'https://picsum.photos/600/400?random=6',
    aiHint: 'data visualization',
    details: `<p>We created a high-performance platform for visualizing real-time data from a network of IoT devices. The frontend was built with Next.js, and we used WebSockets to push live data to the client, ensuring that the visualizations were always up-to-date.</p><p>Data was processed and stored in Google BigQuery, and we used Grafana for creating powerful, customizable dashboards. The platform is designed to handle massive data streams while remaining fast and responsive.</p>`,
    testimonial: null,
    gallery: []
  },
].map(p => ({...p, slug: toSlug(p.title)}));

const services = [
  {
    icon: PenTool,
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    description: 'Crafting intuitive and beautiful user interfaces that provide an exceptional user experience.',
    details: `<p>Our UI/UX design process is centered around the user. We begin with in-depth research to understand your audience's needs and behaviors. From there, we create wireframes and prototypes to map out user flows and information architecture. The result is a visually stunning and highly functional design that not only looks great but also drives user engagement and conversions.</p><p>We use modern design tools like Figma to collaborate and iterate, ensuring the final product is polished and pixel-perfect.</p>`,
    included: ['User Research & Personas', 'Wireframing & Prototyping', 'High-Fidelity UI Design', 'Interaction Design', 'Usability Testing'],
    caseStudy: {
      title: 'Corporate Website Redesign',
      projectSlug: toSlug('Corporate Website'),
      description: 'See how our UI/UX expertise transformed a dated website into a modern, user-friendly platform.',
      imageUrl: 'https://picsum.photos/800/450?random=3'
    }
  },
  {
    icon: Code,
    title: 'Web Development',
    slug: 'web-development',
    description: 'Building responsive, high-performance websites and applications using modern technologies.',
    details: `<p>We specialize in building robust and scalable web solutions. Our development team is proficient in a wide range of modern technologies, including Next.js, React, and Node.js. We follow best practices to write clean, maintainable, and well-documented code.</p><p>Whether you need a simple marketing website or a complex web application, we have the skills and experience to deliver a product that meets your needs and exceeds your expectations. Performance, security, and scalability are at the core of everything we build.</p>`,
    included: ['Frontend Development', 'Backend Development', 'API Integration', 'CMS Implementation', 'Performance Optimization'],
    caseStudy: {
      title: 'E-commerce Platform Development',
      projectSlug: toSlug('E-commerce Platform'),
      description: 'Discover how we built a scalable e-commerce solution from the ground up.',
      imageUrl: 'https://picsum.photos/800/450?random=1'
    }
  },
  {
    icon: Layers,
    title: 'Full-Stack Solutions',
    slug: 'full-stack-solutions',
    description: 'From database to deployment, we provide end-to-end development for your complex projects.',
    details: `<p>Our full-stack development services cover the entire application lifecycle. We handle everything from database design and server-side logic to client-side development and deployment. This holistic approach ensures that all parts of your application work together seamlessly.</p><p>We are experienced in a variety of database technologies, both SQL and NoSQL, and are experts in cloud deployment on platforms like Vercel and AWS. We take care of the technical details so you can focus on your business.</p>`,
    included: ['Database Architecture', 'Server-side Logic', 'Client-side Development', 'CI/CD & DevOps', 'Cloud Deployment'],
     caseStudy: {
      title: 'SaaS Dashboard Creation',
      projectSlug: toSlug('SaaS Dashboard'),
      description: 'Learn about the end-to-end development of a complex B2B analytics platform.',
      imageUrl: 'https://picsum.photos/800/450?random=2'
    }
  },
  {
    icon: Rocket,
    title: 'SEO & Performance',
    slug: 'seo-performance',
    description: 'Optimizing your digital presence to rank higher and load faster, ensuring maximum reach.',
    details: `<p>A great website is only effective if people can find it. Our SEO and performance optimization services are designed to increase your visibility in search engine rankings and provide a lightning-fast user experience. We conduct comprehensive technical SEO audits, optimize on-page content, and implement strategies to improve site speed and Core Web Vitals.</p><p>By focusing on both technical and content aspects of SEO, we help you attract more organic traffic and convert visitors into customers.</p>`,
    included: ['Technical SEO Audits', 'On-Page SEO', 'Performance Analysis', 'Image Optimization', 'Core Web Vitals Improvement'],
    caseStudy: null
  },
];

export const getProjects = () => projects;
export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);

export const getServices = () => services;
export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug);
