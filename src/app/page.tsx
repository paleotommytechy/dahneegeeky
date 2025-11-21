import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, MonitorSmartphone, Palette } from 'lucide-react';

const ownerHeroImage = PlaceHolderImages.find(p => p.id === 'owner-hero');

const featuredServices = [
  {
    icon: MonitorSmartphone,
    title: 'Web Design',
    description: 'Crafting beautiful and functional websites tailored to your needs.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Designing intuitive and engaging user experiences for your digital products.',
  },
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Building responsive and performant web applications with modern technologies.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-float opacity-50"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-float [animation-delay:4s] opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter">
                <span className="text-primary text-glow-primary">Creative Developer</span> & Designer
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
                I build beautiful, functional, and user-centric digital experiences. Let's turn your ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild size="lg" className="hover:glow-primary transition-shadow">
                  <Link href="/contact">Hire Me</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-primary/30 rounded-full filter blur-2xl"></div>
              {ownerHeroImage && (
                <Image
                  src={ownerHeroImage.imageUrl}
                  alt={ownerHeroImage.description}
                  width={400}
                  height={400}
                  data-ai-hint={ownerHeroImage.imageHint}
                  className="rounded-full object-cover z-10 w-64 h-64 md:w-80 md:h-80 border-4 border-primary/50"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">What I Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I offer a range of services to help you achieve your digital goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Card key={index} className="bg-background/50 border-border/50 hover:border-primary/50 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <CardHeader className="items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-lg text-primary">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
