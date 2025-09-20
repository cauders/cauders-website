
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
    role: 'Lead Developer & Founder',
    imageUrl: 'https://picsum.photos/seed/alex/400/600',
    bio: 'With over a decade of experience in software architecture, Alex leads the team with a passion for clean code and innovative solutions.',
    socials: {
      linkedin: 'https://www.linkedin.com/company/cauders/',
      github: 'https://github.com/cauders',
    },
  },
  {
    name: 'Samantha Lee',
    role: 'Head of Design',
    imageUrl: 'https://picsum.photos/seed/samantha/400/600',
    bio: 'Samantha translates complex ideas into intuitive and beautiful user interfaces. Her user-centric approach ensures every project is a success.',
    socials: {
      linkedin: 'https://www.linkedin.com/company/cauders/',
    },
  },
  {
    name: 'Michael Chen',
    role: 'Senior Frontend Developer',
    imageUrl: 'https://picsum.photos/seed/michael/400/600',
    bio: 'A master of React and Next.js, Michael builds lightning-fast, responsive, and accessible front-end experiences.',
    socials: {
      linkedin: 'https://www.linkedin.com/company/cauders/',
      github: 'https://github.com/cauders',
    },
  },
  {
    name: 'Emily Rodriguez',
    role: 'Project Manager',
    imageUrl: 'https://picsum.photos/seed/emily/400/600',
    bio: 'Emily ensures that projects are delivered on time and on budget, fostering clear communication between clients and the development team.',
    socials: {
      linkedin: 'https://www.linkedin.com/company/cauders/',
    },
  },
  {
    name: 'David Patel',
    role: 'Backend & AI Specialist',
    imageUrl: 'https://picsum.photos/seed/david/400/600',
    bio: 'David architects robust backend systems and integrates cutting-edge AI to build intelligent, scalable applications.',
    socials: {
      linkedin: 'https://www.linkedin.com/company/cauders/',
      github: 'https://github.com/cauders',
    },
  },
  {
    name: 'Jessica Nguyen',
    role: 'Mobile Developer',
    imageUrl: 'https://picsum.photos/seed/jessica/400/600',
    bio: 'Jessica crafts seamless cross-platform mobile applications using React Native and Flutter, focusing on performance and user engagement.',
    socials: {
      linkedin: 'https://www.linkedin.com/company/cauders/',
      github: 'https://github.com/cauders',
    },
  },
];
