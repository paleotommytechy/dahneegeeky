'use client';

import { suggest3DAnimations, Suggest3DAnimationsInput } from '@/ai/flows/suggest-3d-animations';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Loader2, Wand2 } from 'lucide-react';
import { Badge } from './ui/badge';
import { useToast } from '@/hooks/use-toast';

const FormSchema = z.object({
  portfolioItemDescription: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }),
});

export default function AnimationSuggestionTool() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [pastChoices, setPastChoices] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      portfolioItemDescription: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setSuggestions([]);
    try {
      const input: Suggest3DAnimationsInput = {
        portfolioItemDescription: data.portfolioItemDescription,
        pastAnimationChoices: pastChoices,
      };
      const result = await suggest3DAnimations(input);
      setSuggestions(result.suggestedAnimations);
    } catch (error) {
      console.error('Error fetching animation suggestions:', error);
      toast({
        title: 'Error',
        description: 'Failed to get animation suggestions. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  }

  function handleSuggestionClick(suggestion: string) {
    if (!pastChoices.includes(suggestion)) {
      setPastChoices([...pastChoices, suggestion]);
    }
  }

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="text-primary" />
          3D Animation Suggester
        </CardTitle>
        <CardDescription>
          Get AI-powered suggestions for 3D animations for your portfolio items. The AI considers your past choices.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="portfolioItemDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Portfolio Item Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., A minimalist logo for a coffee shop, with clean lines and a warm color palette."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
              Suggest Animations
            </Button>
          </form>
        </Form>

        {suggestions.length > 0 && (
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Suggestions:</h4>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion, index) => (
                <Button key={index} variant="outline" size="sm" onClick={() => handleSuggestionClick(suggestion)} title="Click to add to past choices">
                  {suggestion}
                </Button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2">Click a suggestion to use it as context for future suggestions.</p>
          </div>
        )}

        {pastChoices.length > 0 && (
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Past Choices:</h4>
            <div className="flex flex-wrap gap-2">
              {pastChoices.map((choice, index) => (
                <Badge key={index} variant="secondary">{choice}</Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
