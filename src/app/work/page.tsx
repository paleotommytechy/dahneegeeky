'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

const galleryItems = [
  { id: 'work-gallery-1', title: 'Threat Intelligence', description: 'Analyzing and mitigating threats before they impact your organization.', tools: ['Splunk', 'Wireshark'], role: 'Security Analyst' },
  { id: 'work-gallery-2', title: 'Data Encryption', description: 'Implementing robust encryption to protect data at rest and in transit.', tools: ['OpenSSL', 'HashCalc'], role: 'Security Engineer' },
  { id: 'work-gallery-3', title: 'Firewall Configuration', description: 'Configuring and managing firewalls to control network traffic and prevent unauthorized access.', tools: ['pfSense', 'iptables'], role: 'Network Security Specialist' },
  { id: 'work-gallery-4', title: 'Application Security', description: 'Identifying and remediating security vulnerabilities in web and mobile applications.', tools: ['OWASP ZAP', 'Burp Suite'], role: 'Application Security Analyst' },
  { id: 'work-gallery-5', title: 'SOC Dashboard', description: 'Developing and maintaining dashboards for real-time security monitoring.', tools: ['Splunk', 'Kibana'], role: 'SOC Analyst' },
  { id: 'work-gallery-6', title: 'Penetration Testing', description: 'Performing authorized simulated cyberattacks on computer systems to evaluate their security.', tools: ['Metasploit', 'Nmap'], role: 'Penetration Tester' },
];

type GalleryItem = (typeof galleryItems)[0];

export default function WorkGalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const getImage = (id: string) => PlaceHolderImages.find(p => p.id === id);

  return (
    <>
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Work Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A selection of my cybersecurity projects. Click to see details.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => {
            const image = getImage(item.id);
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={600}
                    height={400}
                    data-ai-hint={image.imageHint}
                    className="object-cover w-full h-full aspect-[3/2] rounded-lg"
                  />
                )}
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <h3 className="text-white text-lg font-bold text-center">{item.title}</h3>
                  <p className="text-sm text-gray-300 mt-1 text-center">{item.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="max-w-3xl bg-background border-primary/20">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-headline text-primary">{selectedItem.title}</DialogTitle>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div>
                  {getImage(selectedItem.id) && (
                    <Image
                      src={getImage(selectedItem.id)!.imageUrl}
                      alt={getImage(selectedItem.id)!.description}
                      width={600}
                      height={400}
                      data-ai-hint={getImage(selectedItem.id)!.imageHint}
                      className="rounded-lg object-cover w-full"
                    />
                  )}
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">{selectedItem.description}</p>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Role</h3>
                    <p className="text-muted-foreground">{selectedItem.role}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Tools Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.tools.map(tool => (
                        <Badge key={tool} variant="secondary">{tool}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
