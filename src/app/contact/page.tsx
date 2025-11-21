import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Twitter, Linkedin, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const mapImage = PlaceHolderImages.find(p => p.id === 'map-location');

const contactDetails = [
    { icon: Phone, text: '+1 (123) 456-7890', href: 'tel:+11234567890' },
    { icon: Mail, text: 'hello@neonfolio.com', href: 'mailto:hello@neonfolio.com' },
    { icon: MapPin, text: '123 Creative Lane, Web City, WC 12345', href: '#' },
    { icon: MessageCircle, text: 'WhatsApp', href: 'https://wa.me/11234567890' },
];

const socialLinks = [
  { icon: Twitter, href: '#', name: 'Twitter' },
  { icon: Github, href: '#', name: 'GitHub' },
  { icon: Linkedin, href: '#', name: 'LinkedIn' },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Contact Me</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Have a question or a project in mind? I'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
            <h2 className="text-2xl font-bold font-headline">Get in Touch</h2>
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <Input id="name" type="text" placeholder="Your Name" required />
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <Input id="email" type="email" placeholder="Your Email" required />
                </div>
                <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <Textarea id="message" placeholder="Your Message" rows={5} required />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
            </form>
        </div>
        <div className="space-y-8">
            <h2 className="text-2xl font-bold font-headline">Contact Information</h2>
            <div className="space-y-4">
                {contactDetails.map(detail => (
                     <a key={detail.text} href={detail.href} className="flex items-center gap-4 group">
                        <detail.icon className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">{detail.text}</span>
                    </a>
                ))}
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                    {socialLinks.map((social) => (
                    <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-primary hover:glow-primary rounded-full p-2"
                    >
                        <social.icon className="h-6 w-6" />
                        <span className="sr-only">{social.name}</span>
                    </Link>
                    ))}
                </div>
            </div>
        </div>
      </div>
      
      <div className="mt-20">
        {mapImage && (
            <div className="relative rounded-lg overflow-hidden h-64 md:h-96">
                <Image 
                    src={mapImage.imageUrl}
                    alt={mapImage.description}
                    fill
                    data-ai-hint={mapImage.imageHint}
                    className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <MapPin className="h-12 w-12 text-primary animate-pulse" />
                </div>
            </div>
        )}
      </div>
    </div>
  );
}
