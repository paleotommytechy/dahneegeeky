import AnimationSuggestionTool from '@/components/animation-suggestion-tool';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Trash2, Edit, Upload } from 'lucide-react';

const existingWork = [
  { id: 1, title: 'Abstract Sphere', category: '3D Art' },
  { id: 2, title: 'Modern Branding', category: 'Branding' },
  { id: 3, title: 'Event Poster', category: 'Graphic Design' },
];

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Admin Dashboard</h1>
        <p className="text-lg text-muted-foreground">Manage your portfolio content.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <Card>
            <CardHeader>
              <CardTitle>Add/Edit Portfolio Work</CardTitle>
              <CardDescription>Fill out the form to add a new piece to your gallery or edit an existing one.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Project Title</Label>
                  <Input id="title" placeholder="e.g., E-commerce Redesign" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="A short description of the project." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tools">Tools Used</Label>
                  <Input id="tools" placeholder="Figma, React, Next.js (comma separated)" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image">Project Image</Label>
                  <div className="flex items-center gap-4">
                    <Input id="image" type="file" className="flex-grow" />
                    <Button variant="outline" size="icon"><Upload className="h-4 w-4" /></Button>
                  </div>
                </div>
                <Button type="submit">Save Project</Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Existing Work</CardTitle>
              <CardDescription>A list of your current portfolio pieces.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {existingWork.map(work => (
                    <TableRow key={work.id}>
                      <TableCell className="font-medium">{work.title}</TableCell>
                      <TableCell>{work.category}</TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive"><Trash2 className="h-4 w-4" /></Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <AnimationSuggestionTool />
        </div>
      </div>
    </div>
  );
}
