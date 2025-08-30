import { Github, Twitter, Linkedin, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import FooterCurve from './FooterCurve';
import { Input } from '../ui/input';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground relative pt-20">
      <FooterCurve />
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-12 gap-8 md:gap-16 lg:gap-32">
          {/* Newsletter */}
          <div className="md:col-span-5 lg:col-span-5 mb-12 md:mb-0">
            <span className="text-sm uppercase tracking-widest opacity-80">Stay up to date</span>
            <h3 className="text-4xl md:text-5xl font-bold mt-2">
              <span>Get our</span><br />
              <span>Newsletter</span>
            </h3>
            <form className="mt-8 relative">
              <Input 
                id="footer-form-email" 
                type="email" 
                placeholder="Your email" 
                className="input-line bg-transparent border-0 border-b-2 border-primary-foreground/50 rounded-none p-0 text-lg placeholder:text-primary-foreground/70"
              />
              <label className="sr-only" htmlFor="footer-form-email">Your email</label>
              <Button size="icon" className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-12 h-12">
                <ArrowRight />
              </Button>
            </form>
          </div>

          {/* Branding in middle */}
          <div className="md:col-span-2 lg:col-span-2 flex items-center justify-center mb-12 md:mb-0">
            <h3 className="text-4xl font-bold -rotate-90 md:rotate-0">Cauders</h3>
          </div>

          {/* Get in touch */}
          <div className="md:col-span-5 lg:col-span-5 text-left md:text-right">
            <span className="text-sm uppercase tracking-widest opacity-80">Get in touch</span>
            <div className="mt-4 text-2xl font-medium">
              <a href="mailto:hello@cauders.com" className="hover:underline">hello@cauders.com</a><br/>
              <a href="tel:+1234567890" className="hover:underline">(123) 456-7890</a>
            </div>
            <address className="mt-4 text-lg not-italic opacity-90">
              <p>123 Design Street<br />Creative City, 10101</p>
            </address>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm opacity-80">
                 <Link href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
                 <Link href="#" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
                 <span>&copy; {year} Cauders</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm opacity-80 hidden md:inline">See what we're up to</span>
               <div className="flex items-center gap-1">
                 <Button variant="ghost" size="icon" asChild className="hover:bg-primary-foreground/10">
                    <Link href="#" aria-label="Facebook">
                        <Facebook className="h-5 w-5" />
                    </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover:bg-primary-foreground/10">
                    <Link href="#" aria-label="Twitter">
                        <Twitter className="h-5 w-5" />
                    </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover:bg-primary-foreground/10">
                    <Link href="#" aria-label="Instagram">
                        <Instagram className="h-5 w-5" />
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
      </div>
    </footer>
  );
}
