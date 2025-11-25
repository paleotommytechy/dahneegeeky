import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Dahneegeeky', name: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/aladtun', name: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="font-bold font-headline text-lg text-primary">
              Dahneegeeky
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Cybersecurity Expert Portfolio
            </p>
          </div>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <social.icon className="h-6 w-6" />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Alade Tunde Adewumi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
