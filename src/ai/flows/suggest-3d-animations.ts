'use server';

/**
 * @fileOverview A Genkit flow for suggesting 3D animations to apply to portfolio items.
 *
 * - suggest3DAnimations - A function that suggests 3D animations for portfolio items, incorporating past choices.
 * - Suggest3DAnimationsInput - The input type for the suggest3DAnimations function.
 * - Suggest3DAnimationsOutput - The return type for the suggest3DAnimations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const Suggest3DAnimationsInputSchema = z.object({
  portfolioItemDescription: z
    .string()
    .describe('Description of the portfolio item to be animated.'),
  pastAnimationChoices: z
    .array(z.string())
    .describe('List of past animation choices made by the user.'),
});
export type Suggest3DAnimationsInput = z.infer<typeof Suggest3DAnimationsInputSchema>;

const Suggest3DAnimationsOutputSchema = z.object({
  suggestedAnimations: z
    .array(z.string())
    .describe('List of suggested 3D animations for the portfolio item.'),
});
export type Suggest3DAnimationsOutput = z.infer<typeof Suggest3DAnimationsOutputSchema>;

export async function suggest3DAnimations(input: Suggest3DAnimationsInput): Promise<Suggest3DAnimationsOutput> {
  return suggest3DAnimationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggest3DAnimationsPrompt',
  input: {schema: Suggest3DAnimationsInputSchema},
  output: {schema: Suggest3DAnimationsOutputSchema},
  prompt: `You are a creative 3D animation consultant. Given a description of a portfolio item and a list of past animation choices the user has made, suggest a list of 3D animations that would be appropriate for the item.

Portfolio Item Description: {{{portfolioItemDescription}}}
Past Animation Choices: {{#each pastAnimationChoices}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

Consider the user's past animation choices to maintain a consistent style. Suggest at least 3 animation options.

Output the results as a JSON array of strings.`, // Corrected syntax here
});

const suggest3DAnimationsFlow = ai.defineFlow(
  {
    name: 'suggest3DAnimationsFlow',
    inputSchema: Suggest3DAnimationsInputSchema,
    outputSchema: Suggest3DAnimationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
