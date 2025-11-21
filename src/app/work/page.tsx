'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

const galleryItems = [
  { id: 'work-gallery-1', title: 'Abstract Sphere', description: 'A 3D abstract rendering exploring light and shadow.', tools: ['Blender', 'Photoshop'], role: '3D Artist' },
  { id: 'work-gallery-2', title: 'Modern Branding', description: 'Complete branding package for a tech startup.', tools: ['Figma', 'Illustrator'], role: 'Brand Designer' },
  { id: 'work-gallery-3', title: 'Event Poster', description: 'Promotional poster for a local music festival.', tools: ['Photoshop', 'InDesign'], role: 'Graphic Designer' },
  { id: 'work-gallery-4', title: 'Product Mockup', description: 'Realistic 3D mockup for a new cosmetic product line.', tools: ['Cinema 4D', 'Octane Render'], role: '3D Visualizer' },
  { id: 'work-gallery-5', title: 'UX Wireframes', description: 'Low-fidelity wireframes for a new mobile banking app.', tools: ['Figma', 'Whimsical'], role: 'UX Designer' },
  { id: 'work-gallery-6', title: 'Character Illustration', description: 'A stylized character illustration for a childrens book.', tools: ['Procreate', 'Photoshop'], role: 'Illustrator' },
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
            A selection of my creative work. Hover over the images for a 3D effect and click to see details.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 [perspective:1000px]">
          {galleryItems.map((item) => {
            const image = getImage(item.id);
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-lg overflow-hidden cursor-pointer transition-transform duration-500 hover:scale-105"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="transition-transform duration-500 group-hover:[transform:rotateY(10deg)_rotateX(3deg)_translateZ(40px)]">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={600}
                      height={400}
                      data-ai-hint={image.imageHint}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <p className="text-white text-lg font-bold">{item.title}</p>
                  </div>
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
