
import { Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background border-t min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center justify-center gap-4">
           <Link href="/" className="text-4xl font-bold hover:text-primary transition-colors">
              Cauders
            </Link>
          <p className="text-sm text-background/70">
            &copy; {year} Cauders. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild className="text-background/70 hover:text-primary">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-background/70 hover:text-primary">
              <Link href="#" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-background/70 hover:text-primary">
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
