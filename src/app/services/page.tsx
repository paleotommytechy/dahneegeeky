import { ArrowRight, MonitorSmartphone, Palette, PenTool, ImageIcon, Code, Database, Rocket } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: MonitorSmartphone,
    title: 'Web Design',
    description: 'Creating visually stunning and highly functional websites that provide an exceptional user experience across all devices. From concept to launch, we ensure your online presence is powerful and professional.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'We focus on creating intuitive, engaging, and aesthetically pleasing user interfaces. Through user research and thoughtful design, we build products that are a joy to use and solve real problems.'
  },
  {
    icon: PenTool,
    title: 'Branding / Logo Design',
    description: 'Your brand is your story. We help you tell it through memorable logos and a cohesive brand identity that resonates with your target audience and sets you apart from the competition.'
  },
  {
    icon: ImageIcon,
    title: 'Graphics Design',
    description: 'From digital assets to print materials, we create compelling graphics that communicate your message effectively. We handle everything from social media posts to marketing collateral.'
  },
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Building fast, responsive, and accessible web applications using the latest technologies. We write clean, maintainable code to bring your designs to life with pixel-perfect accuracy.'
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Developing robust and scalable server-side logic, databases, and APIs to power your applications. We ensure your backend is secure, efficient, and ready to grow with your business.'
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Services</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We provide a comprehensive suite of digital services to elevate your brand and business. Explore what we can do for you.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col bg-secondary/50 border-border/70 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-md">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <CardDescription className="mb-6">{service.description}</CardDescription>
              <Button variant="link" asChild className="p-0 self-start text-primary">
                <Link href="#">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

       <div className="mt-20 text-center">
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <Rocket className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">Have a project in mind?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Let's work together to create something amazing. We are ready to turn your vision into a reality.</p>
            <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
            </Button>
        </Card>
      </div>
    </div>
  );
}
