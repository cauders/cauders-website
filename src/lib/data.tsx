
import { toSlug } from "./utils";
import { Code, Layers, PenTool, Rocket, type LucideProps, Bot, AppWindow, ShoppingCart, TrendingUp, Shield, Server } from 'lucide-react';
import type { ComponentType, FC } from "react";
import placeholderImages from './placeholder-images.json';


type ServiceIcon = ComponentType<LucideProps>;
type ProjectCategory = 'Web App' | 'Mobile App' | 'AI/ML';

export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'Web App' | 'Mobile App' | 'AI/ML';
  imageUrl: string;
  technologies?: string[];
  gallery: string[];
  featured: boolean;
  url: string;
  industry: string;
  status: string;
  year: number;
  implementation: string[];
  mobileScreenshots?: string[];
  testimonial?: {
      author: string;
      text: string;
  } | null;
  aiHint?: string;
  details?: string;
};


const projects: Project[] = [
  {
    id: 1,
    slug: 'wokine',
    title: 'Wokine',
    description: 'A digital and creative agency with a focus on ethical and creative solutions.',
    longDescription: 'Wokine is a digital and creative agency based in Lille, France, that has been operating since 2004. They specialize in digital strategy, data, e-commerce, and web development, with a focus on combining creativity, technology, and ethical commitment to design digital solutions.',
    category: 'Web App',
    imageUrl: placeholderImages.wokine.imageUrl,
    aiHint: 'creative agency website',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    gallery: [
      placeholderImages['wokine-1'].imageUrl,
      placeholderImages['wokine-2'].imageUrl,
      placeholderImages['wokine-3'].imageUrl,
    ],
    featured: true,
    url: 'https://www.wokine.com/',
    industry: 'Digital Agency',
    status: 'Live',
    year: 2023,
    implementation: ['UI/UX', 'Development', 'Strategy'],
    testimonial: {
        author: "J. Dupont, CEO of Wokine",
        text: "Cauders delivered a visually stunning and technically robust website that perfectly captures our brand's ethos. Their attention to detail is unmatched."
    }
  },
  {
    id: 2,
    slug: 'fcinq',
    title: 'FCINQ',
    description: 'An award-winning digital agency specializing in "global experiences".',
    longDescription: 'FCINQ is a digital agency with 17 years of experience, specializing in Design & Code, Production & Motion, Social Media, and Branding. The agency has received numerous awards and is known for its creative strength, with a focus on "global experiences."',
    category: 'Web App',
    imageUrl: placeholderImages.fcinq.imageUrl,
    aiHint: 'digital agency website',
    technologies: ['React', 'GSAP', 'Three.js', 'WebGL', 'Contentful'],
    gallery: [
      placeholderImages['fcinq-1'].imageUrl,
      placeholderImages['fcinq-2'].imageUrl,
      placeholderImages['fcinq-3'].imageUrl,
    ],
    featured: true,
    url: 'https://www.fcinq.com/',
    industry: 'Creative Agency',
    status: 'Live',
    year: 2022,
    implementation: ['Design', 'Code', 'Motion'],
    testimonial: null
  },
  {
    id: 3,
    slug: 'tasweerkash',
    title: 'Tasweerkash',
    description: 'A media production company led by a National Award winner.',
    longDescription: 'Tasweerkash is a photography and media production company led by a National Award winner. The company offers services including wedding, event, and portrait photography, as well as photo education. The website features a portfolio and client testimonials.',
    category: 'Web App',
    imageUrl: placeholderImages.tasweerkash.imageUrl,
    aiHint: 'photography website',
    technologies: ['Wordpress', 'PHP', 'jQuery', 'MySQL', 'Elementor'],
    gallery: [
       placeholderImages['tasweerkash-1'].imageUrl,
       placeholderImages['tasweerkash-2'].imageUrl,
    ],
    featured: false,
    url: 'https://www.tasweerkash.com/',
    industry: 'Photography',
    status: 'Live',
    year: 2021,
    implementation: ['Branding', 'Development'],
    testimonial: {
        author: "A. Khan, Tasweerkash",
        text: "The new website is both beautiful and functional, providing a great platform to showcase our work. The team was professional and responsive throughout."
    }
  },
  {
    id: 4,
    slug: 'association-of-learning',
    title: 'Association of Learning',
    description: 'An online provider of flexible home learning courses for adults in the UK.',
    longDescription: 'Association of Learning is a UK-based organization offering affordable and flexible home learning courses for adults. They provide a wide range of courses, including A Levels, GCSEs, and Diplomas, with a focus on personalized tutor support.',
    category: 'Web App',
    imageUrl: placeholderImages.aol.imageUrl,
    aiHint: 'elearning platform',
    technologies: ['LMS', 'PHP', 'Moodle', 'MySQL', 'JavaScript'],
    gallery: [
      placeholderImages['aol-1'].imageUrl,
    ],
    featured: false,
    url: 'https://associationoflearning.com/about/',
    industry: 'Education',
    status: 'Live',
    year: 2020,
    implementation: ['LMS Integration', 'Development'],
    testimonial: null
  },
  {
    id: 5,
    slug: 'peveril-podiatry',
    title: 'Peveril Podiatry',
    description: 'A local podiatry clinic providing expert foot and ankle care.',
    longDescription: 'Peveril Podiatry is a local podiatry clinic in the UK that provides assessments, diagnoses, and treatments for various foot and ankle issues. Their services include nail care, skin care, orthotics, and pain management, and they have an experienced team including a podiatric surgeon.',
    category: 'Web App',
    imageUrl: placeholderImages.podiatry.imageUrl,
    aiHint: 'healthcare website',
    gallery: [
        placeholderImages['podiatry-1'].imageUrl,
    ],
    featured: false,
    url: 'https://peverilpodiatry.co.uk/',
    industry: 'Healthcare',
    status: 'Live',
    year: 2022,
    implementation: ['Web Design', 'Development'],
    testimonial: null
  },
  {
    id: 6,
    slug: 'itc-app',
    title: 'IT Centre App',
    description: 'An ERP solution for computer training institutes.',
    longDescription: 'An app that serves as a complete ERP solution for computer training institutes and digital skills academies. It helps simplify daily operations, manage admissions, track attendance, and provide a dashboard for students and staff.',
    category: 'Mobile App',
    imageUrl: placeholderImages['itc-app'].imageUrl,
    aiHint: 'education app',
    technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
    gallery: [
        placeholderImages['itc-app-1'].imageUrl,
        placeholderImages['itc-app-2'].imageUrl,
    ],
    featured: true,
    url: 'https://play.google.com/store/apps/details?id=com.itcentre',
    industry: 'Education Technology',
    status: 'Live',
    year: 2023,
    implementation: ['Mobile Dev', 'Backend', 'UI/UX'],
    mobileScreenshots: [
      placeholderImages['itc-app-mob-1'].imageUrl,
      placeholderImages['itc-app-mob-2'].imageUrl, 
    ],
    testimonial: {
        author: "M. Ali, IT Centre",
        text: "The ERP app has transformed how we manage our institute. It's intuitive, efficient, and has saved us countless hours of administrative work."
    }
  },
  {
    id: 7,
    slug: 'fajira-admin',
    title: 'Fajira Admin',
    description: 'An e-commerce management app for grocery store owners.',
    longDescription: 'A mobile app solution for small businesses and online e-commerce companies in the grocery sector. It allows store owners to manage orders, products, categories, and promotions directly from their phones.',
    category: 'Mobile App',
    imageUrl: placeholderImages['fajira-admin'].imageUrl,
    aiHint: 'ecommerce admin app',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Stripe'],
    gallery: [
        placeholderImages['fajira-admin-1'].imageUrl, 
    ],
    featured: false,
    url: 'https://play.google.com/store/apps/details?id=com.grocery.admin',
    industry: 'E-commerce',
    status: 'Live',
    year: 2022,
    implementation: ['Mobile Dev', 'Firebase'],
     mobileScreenshots: [
      placeholderImages['fajira-admin-mob-1'].imageUrl,
      placeholderImages['fajira-admin-mob-2'].imageUrl,
    ]
  },
  {
    id: 8,
    slug: 'reachi-kds',
    title: 'Reachi KDS',
    description: 'A Kitchen Display System to streamline restaurant orders.',
    longDescription: 'A digital screen app designed for commercial kitchens to replace paper order tickets. It helps restaurants manage, prioritize, and track customer orders, aiming to make operations more efficient.',
    category: 'Mobile App',
    imageUrl: placeholderImages['reachi-kds'].imageUrl,
    aiHint: 'kitchen display system',
    technologies: ['Android', 'Kotlin', 'Socket.IO', 'REST APIs'],
    gallery: [
      placeholderImages['reachi-kds-1'].imageUrl,
      placeholderImages['reachi-kds-2'].imageUrl,
    ],
    featured: true,
    url: 'https://play.google.com/store/apps/details?id=com.reachikds',
    industry: 'Restaurant Tech',
    status: 'Live',
    year: 2023,
    implementation: ['Android Dev', 'API'],
    mobileScreenshots: [ 
    ]
  },
  {
    id: 9,
    slug: 'binof-trainer',
    title: 'BINOF Trainer',
    description: 'A demo app for trainers to manage clients and track performance.',
    longDescription: 'A demo app for trainers who use the BINOF system. It provides a platform for trainers to manage their clients, with features for communication, exercise tracking, and performance evaluation.',
    category: 'Mobile App',
    imageUrl: placeholderImages['binof-trainer'].imageUrl,
    aiHint: 'fitness app',
    technologies: ['React Native', 'GraphQL', 'Apollo Client', 'PostgreSQL'],
    gallery: [ 
        placeholderImages['binof-trainer-1'].imageUrl,
    ],
    featured: false,
    url: 'https://play.google.com/store/apps/details?id=com.binofapp.trainer',
    industry: 'Fitness',
    status: 'Demo',
    year: 2021,
    implementation: ['Mobile Dev', 'GraphQL'],
    mobileScreenshots: [
      placeholderImages['binof-trainer-mob-1'].imageUrl,
      placeholderImages['binof-trainer-mob-2'].imageUrl,
    ],
    testimonial: {
        author: "John Doe, Fitness Coach",
        text: "This app is an amazing tool for managing my clients. The performance tracking is a game-changer for personalized training plans."
    }
  },
  {
    id: 10,
    slug: 'diamond-gym-trainer',
    title: 'Diamond Gym Trainer',
    description: 'A fitness app for workout routines, progress tracking, and nutritional guidance.',
    longDescription: 'This is a fitness app that serves as a comprehensive companion for individuals aiming for a healthier lifestyle. It includes workout routines, exercise demonstrations, progress tracking, and nutritional guidance.',
    category: 'Mobile App',
    imageUrl: placeholderImages['diamond-gym'].imageUrl,
    aiHint: 'gym app',
    technologies: ['React Native', 'Firebase', 'Chart.js', 'Realm'],
    gallery: [
        placeholderImages['diamond-gym-1'].imageUrl, 
    ],
    featured: false,
    url: 'https://play.google.com/store/apps/details?id=com.diamondgymrd.trainer',
    industry: 'Fitness',
    status: 'Live',
    year: 2022,
    implementation: ['Mobile Dev', 'Firebase'],
     mobileScreenshots: [
      placeholderImages['diamond-gym-mob-1'].imageUrl, 
      placeholderImages['diamond-gym-mob-2'].imageUrl, 
    ]
  },
  {
    id: 11,
    slug: 'clipinn',
    title: 'Clipinn',
    description: 'HR software to simplify human resources management.',
    longDescription: 'An HR software designed to simplify human resources management. It offers a range of features, including attendance tracking, task management, employee and lead management, hiring tools, and a payroll system. The platform also includes collaboration tools and a mobile app.',
    category: 'Web App',
    imageUrl: placeholderImages.clipinn.imageUrl,
    aiHint: 'hr software',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redux', 'AWS'],
    gallery: [ 
      placeholderImages['clipinn-1'].imageUrl, 
    ],
    featured: false,
    url: 'https://clipinn.com/',
    industry: 'HR Tech',
    status: 'Live',
    year: 2021,
    implementation: ['Full-stack Dev', 'SaaS'],
    testimonial: {
        author: 'Jane Smith, HR Manager',
        text: 'Clipinn streamlined our HR processes perfectly. The task management and payroll features are incredibly powerful yet easy to use.'
    }
  },
  {
    id: 12,
    slug: 'the-kabul-grill',
    title: 'The Kabul Grill',
    description: 'A website for a restaurant, providing menu and catering information.',
    longDescription: 'The website for a restaurant, providing information on its menu, catering services, and location.',
    category: 'Web App',
    imageUrl: placeholderImages['kabul-grill'].imageUrl,
    aiHint: 'restaurant website',
    technologies: ['Wordpress', 'PHP', 'MySQL', 'Elementor', 'Google Maps API'],
    gallery: [
      placeholderImages['kabul-grill-1'].imageUrl, 
    ],
    featured: false,
    url: 'https://thekabulgrill.com/',
    industry: 'Restaurant',
    status: 'Live',
    year: 2020,
    implementation: ['Web Design', 'Development'],
    testimonial: null
  },
  {
    id: 13,
    slug: 'snipbyte',
    title: 'Snipbyte',
    description: 'A private limited company based in the UK.',
    longDescription: 'A private limited company registered in the UK. No further information about its purpose or services was publicly available.',
    category: 'Web App',
    imageUrl: placeholderImages.snipbyte.imageUrl,
    aiHint: 'tech company website',
    technologies: ['React', 'Next.js', 'Vercel', 'TypeScript'],
    gallery: [ 
      placeholderImages['snipbyte-1'].imageUrl, 
    ],
    featured: false,
    url: 'https://snipbyte.com/',
    industry: 'Technology',
    status: 'Live',
    year: 2023,
    implementation: ['Web Development'],
    testimonial: null
  },
  {
    id: 14,
    slug: 'fajira-ecommerce',
    title: 'Fajira Ecommerce',
    description: 'An ordering solution for businesses, including user, delivery, and admin apps.',
    longDescription: 'A mobile app designed as an ordering solution for businesses, specifically an "Ecommerce order app." It is part of a multi-platform solution that includes a user app, a delivery app, and an admin app to manage the business.',
    category: 'Mobile App',
    imageUrl: placeholderImages['fajira-ecom'].imageUrl,
    aiHint: 'ecommerce app',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Node.js'],
    gallery: [
        placeholderImages['fajira-ecom-1'].imageUrl,
    ],
    featured: false,
    url: 'https://play.google.com/store/apps/details?id=com.fajira.ecommerce',
    industry: 'E-commerce',
    status: 'Live',
    year: 2022,
    implementation: ['Mobile Dev', 'Backend'],
     mobileScreenshots: [
      placeholderImages['fajira-ecom-mob-1'].imageUrl,
      placeholderImages['fajira-ecom-mob-2'].imageUrl,
    ]
  },
  {
    id: 15,
    slug: 'portia-fabrics',
    title: 'Portia Fabrics',
    description: 'An online store for Pakistani designer brand fabrics.',
    longDescription: 'An online store that provides Pakistani designer brand fabrics, dresses, and outfits. They specialize in a wide range of products including shawls, laces, and bridal couture, with a focus on quality, customer service, and unique selections. The website serves as a worldwide fashion store.',
    category: 'Web App',
    imageUrl: placeholderImages.portia.imageUrl,
    aiHint: 'fashion website',
    technologies: ['Shopify', 'eCommerce', 'Liquid', 'Payment Gateway Integration'],
    gallery: [
      placeholderImages['portia-1'].imageUrl,
    ],
    featured: false,
    url: 'https://www.portia.pk/',
    industry: 'Fashion',
    status: 'Live',
    year: 2019,
    implementation: ['eCommerce Dev', 'Branding'],
    testimonial: {
        author: "S. Ahmed, Portia Fabrics",
        text: "The e-commerce solution provided by Cauders has been instrumental in our online growth. The platform is stable, fast, and easy to manage."
    }
  },
  {
    id: 16,
    slug: 'direct-coops',
    title: 'Direct Co-ops',
    description: 'A group-buying platform for small businesses.',
    longDescription: 'A group-buying platform and marketplace for small and medium-sized businesses and co-ops. It allows local independent businesses to leverage their group buying power to achieve better prices and compete with larger chains and online retailers.',
    category: 'Web App',
    imageUrl: placeholderImages['direct-coops'].imageUrl,
    aiHint: 'b2b marketplace',
    technologies: ['React', 'Node.js', 'Marketplace', 'E-commerce'],
    gallery: [
      placeholderImages['direct-coops-1'].imageUrl,
    ],
    featured: false,
    url: 'https://www.directcoops.com/',
    industry: 'B2B Marketplace',
    status: 'Live',
    year: 2020,
    implementation: ['Platform Dev', 'Strategy'],
    testimonial: null
  },
  {
    id: 17,
    slug: 'domene-no',
    title: 'Domene.no',
    description: 'A domain registration and web hosting service.',
    longDescription: 'Domene.no is a leading provider of domain registration and web hosting services in Norway. It offers a wide range of services for individuals and businesses to establish and maintain their online presence.',
    category: 'Web App',
    imageUrl: placeholderImages.domene.imageUrl,
    aiHint: 'web hosting website',
    gallery: [
      placeholderImages['domene-1'].imageUrl,
    ],
    featured: false,
    url: 'https://www.domene.no/',
    industry: 'Web Services',
    status: 'Live',
    year: 2018,
    implementation: ['Backend', 'Infrastructure'],
    testimonial: null
  }
].map(p => ({...p, slug: toSlug(p.title)} as Project));

const findProject = (slug: string) => {
    const project = projects.find(p => p.slug === slug);
    if (!project) {
      throw new Error(`Project with slug "${slug}" not found.`);
    }
    return project;
  };
  
  const services = [
      {
          icon: Code,
          title: 'Web Development',
          description: 'We build high-performance, secure, and scalable web applications using cutting-edge technologies. From custom portals to enterprise-grade solutions, we create seamless digital experiences that drive engagement and conversion.',
          details: 'Our development team specializes in building custom solutions from the ground up. Using modern frameworks like Next.js and React Native, we deliver applications that are not only fast and reliable but also tailored to your specific business needs. We handle everything from backend architecture to frontend development, ensuring a seamless digital experience.',
          included: [
              'Custom Web Applications',
              'Scalable Architectures',
              'API Development & Integration',
              'Cloud-Native Solutions',
              'Ongoing Performance Optimization'
          ],
          caseStudy: {
              title: findProject('fcinq').title,
              projectSlug: findProject('fcinq').slug,
              description: findProject('fcinq').description,
              imageUrl: findProject('fcinq').imageUrl
          }
      },
      {
          icon: AppWindow,
          title: 'Mobile App Development',
          description: 'Our mobile apps are designed for iOS and Android with a focus on speed, usability, and flawless performance. Whether it’s a startup MVP or a fully-featured enterprise application, we ensure smooth navigation and optimized functionality for end users.',
          details: 'We build native and cross-platform mobile applications that offer a rich user experience. From ideation to launch, we cover the entire development lifecycle, including backend development, API integration, and post-launch support. Our focus is on creating apps that are not only functional but also engaging and intuitive.',
          included: [
              'iOS & Android App Development',
              'React Native & Flutter Expertise',
              'User-Centric Design',
              'Seamless API Integration',
              'App Store Deployment & Support'
          ],
          caseStudy: {
              title: findProject('itc-app').title,
              projectSlug: findProject('itc-app').slug,
              description: findProject('itc-app').description,
              imageUrl: findProject('itc-app').imageUrl
          }
      },
      {
          icon: Bot,
          title: 'AI Integrations',
          description: 'Our AI-powered solutions bring automation, personalization, and predictive analytics to your digital products. From chatbots and machine learning models to business intelligence systems, we turn data into intelligent business outcomes.',
          details: 'We integrate cutting-edge AI and machine learning technologies to unlock new capabilities for your business. From intelligent chatbots that enhance customer service to predictive analytics that drive business decisions, our AI solutions are designed to automate processes, personalize experiences, and provide valuable insights.',
          included: [
              'AI-Powered Chatbots & Virtual Assistants',
              'Custom Machine Learning Models',
              'Natural Language Processing (NLP)',
              'Computer Vision & Image Analysis',
              'Predictive Analytics & Data Insights'
          ],
          caseStudy: {
              title: 'AI-Powered Chatbot',
              projectSlug: 'ai-powered-chatbot',
              description: 'This chatbot uses Genkit to understand and respond to customer queries, significantly improving support efficiency.',
              imageUrl: placeholderImages.chatbot.imageUrl
          }
      },
      {
          icon: Shield,
          title: 'Fintech Solutions',
          description: 'We develop secure, compliant, and intelligent fintech platforms for banking, payments, and digital finance. With advanced encryption, API integrations, and AI-driven insights, we empower businesses to deliver next-generation financial services.',
          details: 'In the highly regulated fintech industry, security and compliance are paramount. We build robust solutions that meet these standards while delivering innovative features. Our expertise includes payment gateways, digital wallets, lending platforms, and insure-tech, all designed for scalability and security.',
          included: [
              'Secure Payment Gateway Integration',
              'Digital Wallet & P2P Payments',
              'AI-driven Fraud Detection',
              'Regulatory Compliance (e.g., PCI DSS)',
              'Blockchain & Crypto Solutions'
          ],
          caseStudy: {
              title: findProject('wokine').title,
              projectSlug: findProject('wokine').slug,
              description: "This project showcases our ability to handle complex data and business logic, a core component of any FinTech solution.",
              imageUrl: findProject('wokine').imageUrl
          }
      },
      {
          icon: ShoppingCart,
          title: 'E-commerce Development',
          description: 'We build feature-rich online stores with secure payment systems, inventory management, and personalized shopping experiences. Our e-commerce solutions are optimized for speed, SEO, and scalability, ensuring higher sales and smoother customer journeys.',
          details: 'We create end-to-end e-commerce solutions that drive sales and provide a seamless shopping experience. Our platforms include custom features like advanced search, product recommendations, and loyalty programs. We integrate with major payment gateways and shipping providers to streamline your operations.',
          included: [
              'Custom E-commerce Storefronts',
              'Secure Payment Integrations',
              'Inventory & Order Management',
              'SEO & Performance Optimization',
              'Personalized Shopping Experiences'
          ],
          caseStudy: {
              title: findProject('portia-fabrics').title,
              projectSlug: findProject('portia-fabrics').slug,
              description: findProject('portia-fabrics').description,
              imageUrl: findProject('portia-fabrics').imageUrl
          }
      },
      {
          icon: Server,
          title: 'ERP Systems',
          description: 'Our enterprise-grade ERP systems streamline operations by integrating core business processes such as finance, inventory, HR, and supply chain into a single, intelligent platform.',
          details: 'We develop custom Enterprise Resource Planning (ERP) systems that unify your business processes and provide a single source of truth. Our ERP solutions are modular, scalable, and tailored to your industry, helping you improve efficiency, reduce costs, and make data-driven decisions.',
          included: [
              'Custom ERP Module Development',
              'Finance & Accounting Integration',
              'HR & Payroll Management',
              'Supply Chain & Inventory Control',
              'Business Intelligence & Reporting'
          ],
          caseStudy: {
              title: findProject('clipinn').title,
              projectSlug: findProject('clipinn').slug,
              description: "This analytics dashboard showcases our ability to handle complex data and business logic, a core component of any ERP.",
              imageUrl: findProject('clipinn').imageUrl
          }
      },
      {
          icon: TrendingUp,
          title: 'Banking Solutions',
          description: 'Our enterprise-grade banking solutions focus on security, compliance, and seamless customer experience. From core banking systems to digital wallets and mobile banking apps, we help financial institutions stay ahead of innovation.',
          details: 'We specialize in developing secure and scalable solutions for the banking sector. Our offerings include core banking modernization, digital account opening, loan origination systems, and treasury management. We ensure compliance with industry regulations while delivering a superior customer experience.',
          included: [
              'Core Banking System Modernization',
              'Digital & Mobile Banking Platforms',
              'Loan & Mortgage Origination Systems',
              'Compliance & Regulatory Reporting',
              'Wealth & Asset Management Tools'
          ],
          caseStudy: {
              title: findProject('itc-app').title,
              projectSlug: findProject('itc-app').slug,
              description: 'This secure mobile banking app provides a seamless user experience for managing accounts, transfers, and payments.',
              imageUrl: findProject('itc-app').imageUrl
          }
      },
      {
          icon: PenTool,
          title: 'UI/UX Designing',
          description: 'User experience defines product success. Our UI/UX design team creates intuitive, engaging, and visually stunning interfaces that elevate user satisfaction while driving conversions and brand loyalty.',
          details: 'A great product starts with a great user experience. Our UI/UX design process is centered around the user, from initial wireframes and prototypes to final visual design. We focus on creating interfaces that are not only beautiful but also intuitive and easy to navigate, leading to higher user satisfaction and engagement.',
          included: [
              'User Research & Persona Development',
              'Interactive Wireframing & Prototyping',
              'Pixel-Perfect Visual Design',
              'Mobile-First & Responsive Design',
              'Comprehensive Usability Testing'
          ],
          caseStudy: {
              title: findProject('fcinq').title,
              projectSlug: findProject('fcinq').slug,
              description: 'The design for this financial services firm focused on a clean, professional aesthetic to build trust and credibility.',
              imageUrl: findProject('fcinq').imageUrl
          }
      }
].map(s => ({...s, slug: toSlug(s.title)}));

export const getProjects = (): Project[] => projects.map(p => ({ ...p }));
export const getProjectBySlug = (slug: string): Project | undefined => projects.find(p => p.slug === slug);

export const getServices = () => services;
export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug);

export const getProjectCategories = (): ProjectCategory[] => {
    const categories = projects.map(p => p.category);
    return [...new Set(categories)];
}

export const featuredProjects = projects.filter((project) => project.featured);

export const projectCategories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

