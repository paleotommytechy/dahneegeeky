import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
  {
    id: 1,
    title: 'E-commerce Platform Redesign',
    image: PlaceHolderImages.find(p => p.id === 'case-study-1'),
    problem: 'The client\'s e-commerce site had an outdated design, poor mobile experience, and a complicated checkout process, leading to high cart abandonment rates.',
    solution: 'We conducted a complete UI/UX overhaul, implementing a modern, responsive design and a streamlined, one-page checkout. We also improved product discovery with better filtering and search functionality.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Stripe', 'GraphQL'],
    result: 'Increased mobile conversion by 40% and reduced cart abandonment by 25%.',
    link: '#',
  },
  {
    id: 2,
    title: 'SaaS Dashboard for Data Analytics',
    image: PlaceHolderImages.find(p => p.id === 'case-study-2'),
    problem: 'A data analytics startup needed an intuitive dashboard to help users visualize complex datasets. Their existing solution was cluttered and difficult to navigate.',
    solution: 'We designed and built a clean, component-based dashboard with customizable widgets and interactive charts. A clear information hierarchy and consistent design language made data more accessible.',
    technologies: ['Django', 'React', 'D3.js', 'PostgreSQL', 'Docker'],
    result: 'User engagement time increased by 30%, and received positive feedback on ease of use.',
    link: '#',
  },
  {
    id: 3,
    title: 'Branding for a New Coffee Shop',
    image: PlaceHolderImages.find(p => p.id === 'case-study-3'),
    problem: 'A new local coffee shop needed a strong brand identity to stand out in a competitive market. They had no logo, color palette, or visual style.',
    solution: 'We developed a complete brand identity, including a memorable logo, a warm and inviting color scheme, and custom typography. We also designed their menus, packaging, and in-store signage.',
    technologies: ['Adobe Illustrator', 'Figma', 'Adobe Photoshop'],
    result: 'Successfully launched with a strong brand presence, attracting a loyal customer base.',
    link: '#',
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Case Studies</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A closer look at some of the challenges I've tackled and the solutions I've delivered.
        </p>
      </div>

      <div className="space-y-24">
        {caseStudies.map((study, index) => (
          <div key={study.id} className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-row-dense' : ''}`}>
            <div className={`relative ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
              {study.image && (
                <Image
                  src={study.image.imageUrl}
                  alt={study.image.description}
                  width={800}
                  height={600}
                  data-ai-hint={study.image.imageHint}
                  className="rounded-lg object-cover shadow-lg hover:shadow-primary/20 transition-shadow duration-300"
                />
              )}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full filter blur-2xl -z-10"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/10 rounded-full filter blur-2xl -z-10"></div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold font-headline">{study.title}</h2>
              <div>
                <h3 className="font-semibold text-lg text-primary mb-2">Problem</h3>
                <p className="text-muted-foreground">{study.problem}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary mb-2">Solution</h3>
                <p className="text-muted-foreground">{study.solution}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map(tech => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary-foreground border-primary/20">{tech}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary mb-2">Result</h3>
                <p className="text-muted-foreground">{study.result}</p>
              </div>
              <Button asChild className="mt-4">
                <Link href={study.link}>
                  View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
