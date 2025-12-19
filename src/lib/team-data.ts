
import placeholderImages from './placeholder-images.json';

export type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
};

export const teamMembers: TeamMember[] = [
  {
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    imageUrl: placeholderImages.team.members.alex,
    bio: 'With over a decade of experience in software architecture and leadership, Alex believes in uniting technology with compassion to build solutions that make a real difference.',
    socials: {
      linkedin: 'https://www.linkedin.com/company/cauders/',
      github: 'https://github.com/cauders',
    },
  },
  {
    name: 'Samantha Lee',
    role: 'Co-founder & CTO',
    imageUrl: placeholderImages.team.members.samantha,
    bio: 'Samantha translates complex ideas into intuitive and beautiful user interfaces. Her user-centric approach ensures every project is a success, uniting technology with compassion.',
    socials: {
      linkedin: 'https://www.linkedin.com/company/cauders/',
      github: 'https://github.com/cauders',
    },
  },
  {
    name: 'Michael Chen',
    role: 'Sr. Frontend Dev',
    imageUrl: placeholderImages.team.members.michael,
    bio: 'A master of React and Next.js, Michael builds lightning-fast, responsive, and accessible front-end experiences, always uniting technology with compassion.',
    socials: {
      linkedin: 'https://www.linkedin.com/company/cauders/',
      github: 'https://github.com/cauders',
    },
  },
  {
    name: 'Emily Rodriguez',
    role: 'Project Manager',
    imageUrl: placeholderImages.team.members.emily,
    bio: 'Emily ensures that projects are delivered on time and on budget, fostering clear communication and uniting technology with compassion.',
    socials: {
      linkedin: 'https://www.linkedin.com/company/cauders/',
    },
  },
  {
    name: 'David Patel',
    role: 'Backend & AI Specialist',
    imageUrl: placeholderImages.team.members.david,
    bio: 'David architects robust backend systems and integrates cutting-edge AI to build intelligent, scalable applications, uniting technology with compassion.',
    socials: {
      linkedin: 'https://www.linkedin.com/company/cauders/',
      github: 'https://github.com/cauders',
    },
  },
  {
    name: 'Jessica Nguyen',
    role: 'Mobile Dev',
    imageUrl: placeholderImages.team.members.jessica,
    bio: 'Jessica crafts seamless cross-platform mobile applications using React Native and Flutter, focusing on performance and uniting technology with compassion.',
    socials: {
      linkedin: 'https://www.linkedin.com/company/cauders/',
      github: 'https://github.com/cauders',
    },
  },
];
