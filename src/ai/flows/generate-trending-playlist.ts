// This file is machine-generated - edit with caution!
'use server';
/**
 * @fileOverview A trending playlist generator AI agent.
 *
 * - generateTrendingPlaylist - A function that handles the trending playlist generation process.
 * - GenerateTrendingPlaylistInput - The input type for the generateTrendingPlaylist function.
 * - GenerateTrendingPlaylistOutput - The return type for the generateTrendingPlaylist function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTrendingPlaylistInputSchema = z.object({
  suggestedSongs: z
    .array(z.string())
    .describe('A list of songs suggested by guests.'),
});
export type GenerateTrendingPlaylistInput = z.infer<typeof GenerateTrendingPlaylistInputSchema>;

const GenerateTrendingPlaylistOutputSchema = z.object({
  playlistDescription: z.string().describe('A description of the generated playlist.'),
  recommendedSongs: z.array(z.string()).describe('A list of recommended songs based on the trending songs.'),
});
export type GenerateTrendingPlaylistOutput = z.infer<typeof GenerateTrendingPlaylistOutputSchema>;

export async function generateTrendingPlaylist(input: GenerateTrendingPlaylistInput): Promise<GenerateTrendingPlaylistOutput> {
  return generateTrendingPlaylistFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTrendingPlaylistPrompt',
  input: {schema: GenerateTrendingPlaylistInputSchema},
  output: {schema: GenerateTrendingPlaylistOutputSchema},
  prompt: `You are a professional DJ who specializes in creating playlists for quinceañeras.

You have been provided a list of songs suggested by the guests.

Songs Suggested: {{suggestedSongs}}

Analyze the suggested songs and recommend songs based on popular trends to create a playlist that excites the guests.

Also, provide a description of the generated playlist.

Return the playlist description and the list of recommended songs.`,
});

const generateTrendingPlaylistFlow = ai.defineFlow(
  {
    name: 'generateTrendingPlaylistFlow',
    inputSchema: GenerateTrendingPlaylistInputSchema,
    outputSchema: GenerateTrendingPlaylistOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
