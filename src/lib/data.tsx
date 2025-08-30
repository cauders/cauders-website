
import { toSlug } from "./utils";
import { Code, Layers, PenTool, Rocket, type LucideProps } from 'lucide-react';
import { type ModelProps } from "@/components/cauders/ServiceCard3DIcon";
import type { ComponentType, FC } from "react";

type ServiceIcon = ComponentType<LucideProps> | ComponentType<ModelProps>;

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
    title: 'VR Training Simulation',
    description: 'An immersive VR simulation for training industrial machine operators.',
    tags: ['Unity', 'Oculus SDK', 'C#', '3D Modeling'],
    imageUrl: 'https://picsum.photos/600/400?random=7',
    aiHint: 'virtual reality simulation',
    details: `<p>Developed a highly realistic virtual reality simulation to train operators of complex industrial machinery. Using Unity and the Oculus SDK, we created a safe, controlled environment where trainees can learn procedures and handle emergency scenarios without risk. C# scripting powers the interactive elements and training modules. Our team also handled the complete 3D modeling and texturing of the machinery and environment.</p>`,
    testimonial: {
        author: 'Safety Manager, IndusCorp',
        text: 'This VR training has drastically reduced onboarding time and improved safety compliance. The realism is astounding.'
    },
    gallery: [
        { url: 'https://picsum.photos/800/600?random=15', alt: 'User in VR headset', aiHint: 'vr headset' },
        { url: 'https://picsum.photos/800/600?random=16', alt: 'Machine interface in VR', aiHint: 'vr interface' },
    ]
  },
  {
    title: 'Cloud Migration & DevOps',
    description: 'Migrated a monolithic legacy system to a microservices architecture on AWS.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
    imageUrl: 'https://picsum.photos/600/400?random=8',
    aiHint: 'cloud infrastructure',
    details: `<p>We led the complete overhaul of a legacy enterprise application, migrating it from an on-premise monolith to a modern, cloud-native microservices architecture on Amazon Web Services. We containerized services using Docker, orchestrated them with Kubernetes (EKS), and built a full CI/CD pipeline with Jenkins to automate testing and deployment. The result was improved scalability, reliability, and development velocity.</p>`,
    testimonial: null,
    gallery: []
  },
  {
    title: 'Healthcare Management',
    description: 'A HIPAA-compliant electronic health record (EHR) system for clinics.',
    tags: ['Angular', '.NET Core', 'SQL Server', 'Azure'],
    imageUrl: 'https://picsum.photos/600/400?random=9',
    aiHint: 'healthcare system',
    details: `<p>This project involved the creation of a secure and comprehensive Electronic Health Record (EHR) system for medical clinics. Built with a robust .NET Core backend and an Angular frontend, the platform is fully HIPAA-compliant. Hosted on Microsoft Azure, it ensures data security and availability. Features include patient records management, appointment scheduling, and billing integration.</p>`,
    testimonial: {
      author: 'Dr. Alisha Chen',
      text: 'The EHR system is intuitive and has streamlined our clinic\'s entire workflow. Data security was our biggest concern, and Cauders delivered.'
    },
    gallery: []
  },
  {
    title: 'Logistics Optimization',
    description: 'An AI-driven mobile app for optimizing delivery routes in real-time.',
    tags: ['Python', 'Flutter', 'Google Maps API', 'AI/ML'],
    imageUrl: 'https://picsum.photos/600/400?random=10',
    aiHint: 'delivery route map',
    details: `<p>We developed an intelligent mobile application for a logistics company to optimize their delivery routes dynamically. The backend, built in Python, uses a machine learning model to calculate the most efficient routes based on traffic, delivery windows, and vehicle capacity. The cross-platform mobile app was built with Flutter, providing a native experience on both iOS and Android, with live map integration using the Google Maps API.</p>`,
    testimonial: null,
    gallery: [
        { url: 'https://picsum.photos/800/600?random=17', alt: 'App showing optimized route', aiHint: 'map route' },
    ]
  },
  {
    title: 'Fintech Security Suite',
    description: 'A multi-factor authentication and fraud detection system for financial apps.',
    tags: ['Java', 'Spring Boot', 'Kafka', 'Cybersecurity'],
    imageUrl: 'https://picsum.photos/600/400?random=11',
    aiHint: 'cyber security',
    details: `<p>We engineered a high-performance security suite for a fintech client. Using Java and Spring Boot, we built a scalable system for multi-factor authentication (MFA) and real-time fraud detection. Apache Kafka was implemented to process millions of transactions asynchronously, feeding data into a rules engine that flags suspicious activity instantly. The suite provides a set of APIs that can be easily integrated into any financial application.</p>`,
    testimonial: null,
    gallery: []
  },
  {
    title: 'Data Analytics Platform',
    description: 'A big data platform for processing and visualizing marketing campaign data.',
    tags: ['Spark', 'Hadoop', 'Tableau', 'Data Science'],
    imageUrl: 'https://picsum.photos/600/400?random=12',
    aiHint: 'data analytics chart',
    details: `<p>We constructed a powerful data platform to help a major marketing firm analyze campaign performance. The backend utilizes Apache Spark and Hadoop to process terabytes of data efficiently. We then integrated Tableau to create rich, interactive visualizations and dashboards, enabling the client to derive actionable insights and measure ROI effectively. Our data science team also developed models to predict campaign success.</p>`,
    testimonial: {
      author: 'Marketing Head, AdWave',
      text: 'This platform gave us the insights we were missing. We can now make data-driven decisions with confidence.'
    },
    gallery: []
  },
  {
    title: 'Real-time Collaboration Tool',
    description: 'A web-based platform for teams to collaborate on documents in real-time, similar to Google Docs.',
    tags: ['WebSockets', 'React', 'Node.js', 'MongoDB'],
    imageUrl: 'https://picsum.photos/600/400?random=6',
    aiHint: 'collaboration software interface',
    details: `<p>We built a real-time document collaboration platform enabling multiple users to edit the same document simultaneously. The application uses WebSockets for instant communication between clients and a Node.js server. A React frontend provides a responsive and intuitive editing experience, while MongoDB stores document data. The platform supports rich text formatting, comments, and revision history.</p>`,
    testimonial: null,
    gallery: []
  }
].map(p => ({...p, slug: toSlug(p.title)}));

const services = [
  {
    icon: PenTool,
    iconGeometry: 'Torus' as ModelProps['geometry'],
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
    iconGeometry: 'Box' as ModelProps['geometry'],
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
    iconGeometry: 'Octahedron' as ModelProps['geometry'],
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
    iconGeometry: 'Cone' as ModelProps['geometry'],
    title: 'SEO & Performance',
    slug: 'seo-performance',
    description: 'Optimizing your digital presence to rank higher and load faster, ensuring maximum reach.',
    details: `<p>A great website is only effective if people can find it. Our SEO and performance optimization services are designed to increase your visibility in an search engine rankings and provide a lightning-fast user experience. We conduct comprehensive technical SEO audits, optimize on-page content, and implement strategies to improve site speed and Core Web Vitals.</p><p>By focusing on both technical and content aspects of SEO, we help you attract more organic traffic and convert visitors into customers.</p>`,
    included: ['Technical SEO Audits', 'On-Page SEO', 'Performance Analysis', 'Image Optimization', 'Core Web Vitals Improvement'],
    caseStudy: null
  },
];

export const getProjects = () => projects;
export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);

export const getServices = () => services;
export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug);
