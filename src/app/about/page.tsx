import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Progress } from '@/components/ui/progress';
import { Briefcase, GraduationCap } from 'lucide-react';

const ownerAboutImage = PlaceHolderImages.find(p => p.id === 'owner-about');

const skills = [
  { name: 'React', value: 95 },
  { name: 'Django', value: 80 },
  { name: 'UI/UX Design', value: 90 },
  { name: 'Python', value: 85 },
  { name: 'Next.js', value: 90 },
  { name: 'Tailwind CSS', value: 98 },
];

const history = [
    { type: 'work', icon: Briefcase, title: 'Lead Developer', org: 'Creative Agency', period: '2020 - Present' },
    { type: 'education', icon: GraduationCap, title: 'B.Sc. in Computer Science', org: 'University of Technology', period: '2016 - 2020' },
    { type: 'work', icon: Briefcase, title: 'Frontend Developer', org: 'Tech Startup', period: '2018 - 2020' },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-1 flex flex-col items-center">
          <div className="relative w-64 h-64">
            {ownerAboutImage && (
              <Image
                src={ownerAboutImage.imageUrl}
                alt={ownerAboutImage.description}
                width={256}
                height={256}
                data-ai-hint={ownerAboutImage.imageHint}
                className="rounded-full object-cover w-full h-full border-4 border-primary"
              />
            )}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full filter blur-lg"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 rounded-full filter blur-lg"></div>
          </div>
          <h1 className="text-3xl font-bold font-headline mt-6">John Doe</h1>
          <p className="text-muted-foreground">Full Stack Developer & UI/UX Designer</p>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold font-headline mb-6 text-primary">About Me</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I am a passionate and results-driven developer and designer with over 5 years of experience in creating dynamic, user-friendly web applications. My mission is to bridge the gap between aesthetics and functionality, delivering products that are not only visually stunning but also highly intuitive and performant. I thrive in collaborative environments and am always eager to learn new technologies and tackle challenging problems.
          </p>

          <h3 className="text-2xl font-bold font-headline mb-6">My Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm font-medium text-primary">{skill.value}%</span>
                </div>
                <Progress value={skill.value} className="h-2" />
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold font-headline mb-6">Career & Education</h3>
          <div className="relative border-l-2 border-primary/30 pl-8">
            {history.map((item, index) => (
                <div key={index} className="mb-8 last:mb-0">
                    <div className="absolute -left-4 mt-1.5 h-8 w-8 bg-background rounded-full border-2 border-primary flex items-center justify-center">
                        <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground">{item.org}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
