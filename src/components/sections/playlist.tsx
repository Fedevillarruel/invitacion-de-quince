'use client';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Section } from '../ui/section';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useToast } from '@/hooks/use-toast';
import { handleSongSuggestion, handleGeneratePlaylist } from '@/lib/actions';
import type { GenerateTrendingPlaylistOutput } from '@/ai/flows/generate-trending-playlist';
import { Heart, ListMusic, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { AnimatePresence, motion } from 'framer-motion';

type FormFields = {
  song: string;
};

export function Playlist() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<FormFields>();
  const { toast } = useToast();
  const [suggestedSongs, setSuggestedSongs] = useState<string[]>([]);
  const [trendingPlaylist, setTrendingPlaylist] = useState<GenerateTrendingPlaylistOutput | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [upvotedSongs, setUpvotedSongs] = useState<Set<string>>(new Set());

  const onSuggest: SubmitHandler<FormFields> = async (data) => {
    const result = await handleSongSuggestion(data.song);
    if (result.error) {
      toast({
        title: 'Error',
        description: result.error,
        variant: 'destructive',
      });
    } else {
      toast({
        title: '¡Sugerencia enviada!',
        description: `"${data.song}" fue añadida a la lista.`,
      });
      if (!suggestedSongs.includes(data.song)) {
        setSuggestedSongs((prev) => [...prev, data.song]);
      }
      reset();
    }
  };

  const onGenerate = async () => {
    setIsGenerating(true);
    const result = await handleGeneratePlaylist(suggestedSongs);
    if (result.error) {
      toast({
        title: 'Error al generar',
        description: result.error,
        variant: 'destructive',
      });
    } else if(result.playlist) {
      setTrendingPlaylist(result.playlist);
      toast({
        title: '¡Playlist generada!',
        description: 'La AI ha creado una lista de temas en tendencia.',
      });
    }
    setIsGenerating(false);
  };

  const toggleUpvote = (song: string) => {
    setUpvotedSongs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(song)) {
        newSet.delete(song);
      } else {
        newSet.add(song);
      }
      return newSet;
    });
  };

  return (
    <Section className="text-center">
      <h2 className="font-headline text-4xl md:text-5xl mb-4">Dale Play a la Fiesta</h2>
      <p className="text-lg text-muted-foreground mb-8">Esta noche no será la misma sin tus canciones. ¡Ayúdame a crear la playlist perfecta!</p>
      
      <form onSubmit={handleSubmit(onSuggest)} className="flex gap-2 max-w-lg mx-auto mb-8">
        <Input 
          {...register('song', { required: true })}
          placeholder="Canción y Artista"
          className="bg-white"
          disabled={isSubmitting}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="animate-spin" /> : 'Sugerir'}
        </Button>
      </form>

      {suggestedSongs.length > 0 && (
        <div className="mb-12">
          <Button onClick={onGenerate} disabled={isGenerating}>
            {isGenerating ? <Loader2 className="animate-spin mr-2" /> : <ListMusic className="mr-2" />}
            Generar Playlist con IA
          </Button>
          <p className="text-sm text-muted-foreground mt-2">La IA usará las sugerencias para crear una lista de temas en tendencia.</p>
        </div>
      )}

      {trendingPlaylist && (
        <Card className="text-left mt-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-500">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">La Playlist de la Noche</CardTitle>
            <CardDescription>{trendingPlaylist.playlistDescription}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <AnimatePresence>
              {trendingPlaylist.recommendedSongs.map((song, index) => (
                <motion.li
                  key={song}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center justify-between p-3 rounded-md bg-background hover:bg-accent/50"
                >
                  <span className="font-medium">{song}</span>
                  <Button variant="ghost" size="icon" onClick={() => toggleUpvote(song)}>
                    <Heart className={`h-5 w-5 ${upvotedSongs.has(song) ? 'text-red-500 fill-current' : 'text-muted-foreground'}`} />
                  </Button>
                </motion.li>
              ))}
              </AnimatePresence>
            </ul>
          </CardContent>
        </Card>
      )}
    </Section>
  );
}
