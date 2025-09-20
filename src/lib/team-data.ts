
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
    imageUrl: 'https://picsum.photos/seed/alex/400/400',
    bio: 'With over a decade of experience in software architecture, Alex leads the team with a passion for clean code and innovative solutions.',
    socials: {
      linkedin: 'https://linkedin.com/in/alexjohnson',
      github: 'https://github.com/alexjohnson',
      twitter: 'https://twitter.com/alexjohnson',
    },
  },
  {
    name: 'Samantha Lee',
    role: 'Head of Design',
    imageUrl: 'https://picsum.photos/seed/samantha/400/400',
    bio: 'Samantha translates complex ideas into intuitive and beautiful user interfaces. Her user-centric approach ensures every project is a success.',
    socials: {
      linkedin: 'https://linkedin.com/in/samanthalee',
      twitter: 'https://twitter.com/samanthalee',
    },
  },
  {
    name: 'Michael Chen',
    role: 'Senior Frontend Developer',
    imageUrl: 'https://picsum.photos/seed/michael/400/400',
    bio: 'A master of React and Next.js, Michael builds lightning-fast, responsive, and accessible front-end experiences.',
    socials: {
      linkedin: 'https://linkedin.com/in/michaelchen',
      github: 'https://github.com/michaelchen',
    },
  },
  {
    name: 'Emily Rodriguez',
    role: 'Project Manager',
    imageUrl: 'https://picsum.photos/seed/emily/400/400',
    bio: 'Emily ensures that projects are delivered on time and on budget, fostering clear communication between clients and the development team.',
    socials: {
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
    },
  },
  {
    name: 'David Patel',
    role: 'Backend & AI Specialist',
    imageUrl: 'https://picsum.photos/seed/david/400/400',
    bio: 'David architects robust backend systems and integrates cutting-edge AI to build intelligent, scalable applications.',
    socials: {
      linkedin: 'https://linkedin.com/in/davidpatel',
      github: 'https://github.com/davidpatel',
    },
  },
  {
    name: 'Jessica Nguyen',
    role: 'Mobile Developer',
    imageUrl: 'https://picsum.photos/seed/jessica/400/400',
    bio: 'Jessica crafts seamless cross-platform mobile applications using React Native and Flutter, focusing on performance and user engagement.',
    socials: {
      linkedin: 'https://linkedin.com/in/jessicanguyen',
      github: 'https://github.com/jessicanguyen',
    },
  },
];

const gradients = [
  "linear-gradient(145deg, #3B82F6, transparent)",
  "linear-gradient(180deg, #10B981, transparent)",
  "linear-gradient(210deg, #4F46E5, transparent)",
  "linear-gradient(165deg, #F59E0B, transparent)",
  "linear-gradient(195deg, #EF4444, transparent)",
  "linear-gradient(225deg, #8B5CF6, transparent)",
  "linear-gradient(135deg, #06B6D4, transparent)",
];

const borderColors = [
  "#3B82F6",
  "#10B981",
  "#4F46E5",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#06B6D4",
]

export const teamData = teamMembers.map((member, index) => ({
  image: member.imageUrl,
  title: member.name,
  subtitle: member.role,
  handle: `@${member.name.split(' ')[0].toLowerCase()}`,
  borderColor: borderColors[index % borderColors.length],
  gradient: gradients[index % gradients.length],
  url: member.socials.linkedin || member.socials.github || member.socials.twitter
}));
