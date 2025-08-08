// This file is machine-generated - edit with caution!
'use server';
import { generateTrendingPlaylist } from '@/ai/flows/generate-trending-playlist';
import { suggestSongForPlaylist } from '@/ai/flows/playlist-curator';

export async function handleSongSuggestion(song: string) {
  if (!song || typeof song !== 'string') {
    return { error: 'Sugerencia de canción inválida.' };
  }
  try {
    const [title, artist] = song.split(/ by | - /i);
    await suggestSongForPlaylist({
      songTitle: title?.trim() || song,
      artist: artist?.trim() || 'Desconocido',
      userId: 'guest',
    });
    return { success: true, message: '¡Gracias por tu sugerencia!' };
  } catch (e) {
    console.error(e);
    return { error: 'No se pudo guardar la sugerencia.' };
  }
}

export async function handleGeneratePlaylist(suggestedSongs: string[]) {
    if (!suggestedSongs || suggestedSongs.length === 0) {
        return { error: 'Por favor, sugiere al menos una canción.' };
    }
    try {
        const result = await generateTrendingPlaylist({ suggestedSongs });
        return { playlist: result };
    } catch (e) {
        console.error(e);
        return { error: 'No se pudo generar la playlist. Intenta de nuevo.' };
    }
}
