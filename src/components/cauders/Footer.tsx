import { Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-foreground">Cauders</h3>
            <p className="mt-2 text-sm text-foreground/70">
              Innovative Digital Solutions.
            </p>
          </div>
          <div className="col-span-1">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-sm text-foreground/70 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-sm text-foreground/70 hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-sm text-foreground/70 hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="font-semibold text-foreground">Follow Us</h4>
             <div className="flex items-center gap-2 mt-4">
              <Button variant="ghost" size="icon" asChild>
                  <Link href="#" aria-label="Twitter">
                      <Twitter className="h-5 w-5 text-foreground/70 hover:text-primary transition-colors" />
                  </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                  <Link href="#" aria-label="GitHub">
                      <Github className="h-5 w-5 text-foreground/70 hover:text-primary transition-colors" />
                  </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                  <Link href="#" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5 text-foreground/70 hover:text-primary transition-colors" />
                  </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-foreground/70">
          <p>&copy; {year} Cauders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
