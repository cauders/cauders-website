import type React from 'react';
import placeholderImages from './placeholder-images.json';

export type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  fullBio?: string;
  imageClassName?: string;
  imageStyle?: React.CSSProperties;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
};

export const teamMembers: TeamMember[] = [
  {
    name: 'Anees Ahmad',
    role: 'Founder',
    imageUrl: 'https://res.cloudinary.com/cauders/image/upload/v1792275675/anees1_xh2e1t.jpg',
    bio: 'Helping startups and growing companies turn ideas into reliable digital products.',
    fullBio: `Building software is not the hardest part.
The real challenge is building the right product, choosing a reliable technical direction, avoiding unnecessary complexity, and creating a system that can continue to grow with the business.
I help startups and growing companies turn ideas, business requirements, and existing technology challenges into reliable digital products.

As the Founder of Cauders, I work with companies that need a dependable technology partner for:
• Web and mobile product development
• SaaS platform development
• AI integration and practical automation
• Fintech and business software solutions
• Product improvement and technical modernization
• Quality assurance and software testing
• Scalable architecture and long-term engineering support

Our focus is not simply delivering code. We focus on understanding the business objective, identifying the real technical challenge, and building a solution that is useful, maintainable, secure, and ready to grow.

We can help when you are:
• Preparing to launch a new digital product
• Struggling with an unreliable or difficult-to-maintain application
• Experiencing delays because of technical debt
• Looking to add AI to an existing product or workflow
• Scaling a SaaS or web platform
• Replacing disconnected or inefficient systems
• Searching for a long-term engineering partner

The best technology decisions begin with clarity. Before recommending a solution, we aim to understand your users, processes, priorities, constraints, and expected business outcome.
If you are planning a software product, improving an existing platform, or evaluating an AI opportunity, send me a message with the word “PRODUCT.” I will be happy to understand the situation and share whether Cauders may be a suitable fit.

If you are evaluating a technology project, I am always open to exchanging ideas and helping you identify the right next step.

For business inquiries and strategic collaborations:
anees.ahmad@cauders.com`,
    imageClassName: 'img-zoom-top object-top scale-[2.10] origin-top',
    imageStyle: {
      transform: 'scale(2.10)',
      transformOrigin: 'top center',
      objectPosition: 'top center',
    },
    socials: {
      linkedin: 'https://www.linkedin.com/in/aneesahmad1/',
      github: 'https://github.com/cauders',
    },
  },
  {
    name: 'Muryam Naveed',
    role: 'Cofounder and CEO',
    imageUrl: 'https://res.cloudinary.com/cauders/image/upload/v1792264624/muryam_m28ybv.jpg',
    bio: 'Building systems and infrastructure that help businesses scale.',
    fullBio: `I lead Cauders, a software development company focused on building the systems and infrastructure that help businesses scale.

My role spans company direction, client partnerships, and the development of engineering capabilities across platform modernization, custom SaaS, enterprise AI, and workflow automation.

At Cauders, we partner with business leaders, scaling SaaS platforms, and non-technical growth agencies to solve complex operational and architectural bottlenecks. Our work focuses on designing and evolving systems that can support growing operational demands while remaining maintainable, secure, and scalable.

I lead a team of specialists focused on modernizing complex systems, addressing fragile infrastructure, and building digital infrastructure designed to scale with the business.

Core delivery capabilities:
  ● Platform Modernization
  ● Custom B2B SaaS Development 
  ● Enterprise AI & Workflow Automation
  ● White-Label Engineering Partnerships

I stay closely involved in translating business requirements into practical technical architectures and production-ready systems.`,
    imageClassName: 'scale-[1.20] origin-top object-center',
    imageStyle: {
      transform: 'scale(1.20)',
      transformOrigin: 'top center',
      objectPosition: 'center',
    },
    socials: {
      linkedin: 'https://www.linkedin.com/in/muryamnaveed/',
      github: 'https://github.com/cauders',
    },
  },
];
