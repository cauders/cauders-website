
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
 name: 'Anees Ahmad',
 role: 'Founder',
 imageUrl: placeholderImages.team.members.alex,
 bio: 'Expert software architect uniting technology with compassion.',
 socials: {
 linkedin: 'https://www.linkedin.com/company/cauders/',
 github: 'https://github.com/cauders',
 },
 },
 {
 name: 'Muryam Naveed',
 role: 'Cofounder and CEO',
 imageUrl: placeholderImages.team.members.samantha,
 bio: 'Translates complex ideas into beautiful user interfaces.',
 socials: {
 linkedin: 'https://www.linkedin.com/company/cauders/',
 github: 'https://github.com/cauders',
 },
 },
 {
 name: 'Michael Chen',
 role: 'Sr. Frontend Dev',
 imageUrl: placeholderImages.team.members.michael,
 bio: 'Builds lightning-fast, accessible front-end experiences.',
 socials: {
 linkedin: 'https://www.linkedin.com/company/cauders/',
 github: 'https://github.com/cauders',
 },
 },
 {
 name: 'Emily Rodriguez',
 role: 'Project Manager',
 imageUrl: placeholderImages.team.members.emily,
 bio: 'Delivers projects on time with clear communication.',
 socials: {
 linkedin: 'https://www.linkedin.com/company/cauders/',
 },
 },
];
