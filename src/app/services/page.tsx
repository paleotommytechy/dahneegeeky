import { ArrowRight, ShieldCheck, Bug, Network, Shield, Fingerprint, Server } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: ShieldCheck,
    title: 'Threat Intelligence & SOC',
    description: 'Proactive threat hunting, analysis, and Security Operations Center management to detect and respond to incidents in real-time.'
  },
  {
    icon: Bug,
    title: 'Vulnerability Management',
    description: 'Comprehensive scanning, assessment, and remediation of vulnerabilities across web applications, networks, and systems to minimize attack surfaces.'
  },
  {
    icon: Shield,
    title: 'Penetration Testing (VAPT)',
    description: 'Simulating real-world attacks on web applications, APIs, and networks to identify and fix critical security weaknesses before attackers do.'
  },
  {
    icon: Network,
    title: 'Network & System Security',
    description: 'Hardening network infrastructure and systems, configuring firewalls, and implementing security best practices to prevent unauthorized access.'
  },
  {
    icon: Fingerprint,
    title: 'API Security',
    description: 'Securing the full lifecycle of your APIs, from design and testing to deployment and monitoring, against modern threats.'
  },
  {
    icon: Server,
    title: 'Email Gateway & Security',
    description: 'Implementing and managing secure email gateways to protect against phishing, malware, and other email-based threats.'
  },
  {
    icon: Bug,
    title: 'Bug Bounty',
    description: 'Setting up and managing bug bounty programs to crowdsource vulnerability discovery from ethical hackers.'
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">My Services</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          I provide a comprehensive suite of cybersecurity services to protect your digital assets and infrastructure.
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
                <Link href="/contact">
                  Request Service <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

       <div className="mt-20 text-center">
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">Have a security concern?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Let's work together to secure your digital environment. I'm ready to tackle your security challenges.</p>
            <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
            </Button>
        </Card>
      </div>
    </div>
  );
}
