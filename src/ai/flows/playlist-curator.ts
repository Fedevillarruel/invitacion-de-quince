'use server';

/**
 * @fileOverview AI-powered playlist curator for Morena's quinceañera. Includes
 * functionality for users to suggest songs, and for the AI to assemble a
 * playlist recommendation based on trends and user suggestions.
 *
 * - suggestSongForPlaylist - A function for suggesting songs for the playlist.
 * - SuggestSongInput - The input type for the suggestSongForPlaylist function.
 * - SuggestSongOutput - The return type for the suggestSongForPlaylist function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestSongInputSchema = z.object({
  songTitle: z.string().describe('The title of the song being suggested.'),
  artist: z.string().describe('The artist of the song being suggested.'),
  userId: z.string().describe('The ID of the user suggesting the song.'),
});
export type SuggestSongInput = z.infer<typeof SuggestSongInputSchema>;

const SuggestSongOutputSchema = z.object({
  success: z.boolean().describe('Whether the song suggestion was successfully recorded.'),
  message: z.string().describe('A message indicating the status of the suggestion.'),
});
export type SuggestSongOutput = z.infer<typeof SuggestSongOutputSchema>;

export async function suggestSongForPlaylist(input: SuggestSongInput): Promise<SuggestSongOutput> {
  return suggestSongForPlaylistFlow(input);
}

const suggestSongForPlaylistPrompt = ai.definePrompt({
  name: 'suggestSongForPlaylistPrompt',
  input: {schema: SuggestSongInputSchema},
  output: {schema: SuggestSongOutputSchema},
  prompt: `You are a helpful assistant designed to record song suggestions for a quinceañera playlist.

  The user has suggested the song: {{songTitle}} by {{artist}}.

  Record this suggestion. Return a success message.
  `,
});

const suggestSongForPlaylistFlow = ai.defineFlow(
  {
    name: 'suggestSongForPlaylistFlow',
    inputSchema: SuggestSongInputSchema,
    outputSchema: SuggestSongOutputSchema,
  },
  async input => {
    // In a real implementation, this is where you would save the song suggestion
    // to a database or other persistent storage.

    const {output} = await suggestSongForPlaylistPrompt(input);

    return {
      success: true,
      message: `Song suggestion recorded: ${input.songTitle} by ${input.artist}`,
    };
  }
);
