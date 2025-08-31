
import Link from 'next/link';
import MagneticLink from './MagneticLink';

const socialLinks = [
    { href: '#', label: 'Facebook' },
    { href: '#', label: 'Instagram' },
    { href: '#', label: 'Github' },
    { href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background border-t min-h-screen flex flex-col items-center justify-center relative">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center z-10">
        <div className="flex-grow flex flex-col items-center justify-center gap-4">
           <Link href="/" className="text-4xl font-bold hover:text-primary transition-colors">
              Cauders
            </Link>
          <p className="text-sm text-background/70 mt-4">
            &copy; {year} Cauders. All Rights Reserved.
          </p>
        </div>

        <nav className="flex items-center justify-center flex-wrap gap-4 md:gap-8 mt-16">
            {socialLinks.map((link) => (
                <MagneticLink key={link.label} href={link.href} className="text-background !text-base">
                    {link.label}
                </MagneticLink>
            ))}
        </nav>
      </div>
    </footer>
  );
}
