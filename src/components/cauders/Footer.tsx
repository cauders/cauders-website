
import Link from 'next/link';
import MagneticLink from './MagneticLink';

const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
];

const legalLinks = [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
];


const socialLinks = [
    { href: '#', label: 'Facebook' },
    { href: '#', label: 'Instagram' },
    { href: '#', label: 'Github' },
    { href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background border-t relative">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: Logo and Copyright */}
            <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
                <Link href="/" className="text-4xl font-bold hover:text-primary transition-colors mb-4">
                    Cauders
                </Link>
                 <p className="text-sm text-background/70 mt-2 max-w-xs">
                    Crafting premium, modern, and dynamic websites and applications to elevate your digital presence.
                </p>
                 <p className="text-sm text-background/70 mt-8">
                    &copy; {year} Cauders. All Rights Reserved.
                </p>
            </div>

            {/* Column 2: Social Links */}
             <div className="col-span-1 md:col-span-2 flex items-center justify-center md:justify-end">
                <nav className="flex items-center justify-center flex-wrap gap-4 md:gap-8">
                    {socialLinks.map((link) => (
                        <MagneticLink key={link.label} href={link.href} className="text-background !text-base">
                            {link.label}
                        </MagneticLink>
                    ))}
                </nav>
            </div>
        </div>
      </div>
    </footer>
  );
}
