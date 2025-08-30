import { Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import FooterCurve from './FooterCurve';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground relative pt-20">
      <FooterCurve />
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold">Cauders</h3>
            <p className="mt-2 text-sm opacity-80">
              Innovative Digital Solutions.
            </p>
          </div>
          <div className="col-span-1">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Home</Link></li>
              <li><Link href="/services" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Services</Link></li>
              <li><Link href="/portfolio" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Portfolio</Link></li>
              <li><Link href="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="font-semibold">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="font-semibold">Follow Us</h4>
             <div className="flex items-center gap-2 mt-4">
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary-foreground/10">
                  <Link href="#" aria-label="Twitter">
                      <Twitter className="h-5 w-5" />
                  </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary-foreground/10">
                  <Link href="#" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                  </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary-foreground/10">
                  <Link href="#" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                  </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; {year} Cauders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
