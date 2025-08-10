'use client';
import { Section } from '../ui/section';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ListMusic } from 'lucide-react';

export function Playlist() {
  const spotifyPlaylistUrl = "https://open.spotify.com/playlist/4pmVadOCzkSRj2RqpTJG0V?si=Rp8rZZ8_Rq2iFfJ-R_sYJg&pi=3tFgGwbTRuGS6";

  return (
    <Section className="text-center">
      <h2 className="font-headline text-4xl md:text-5xl mb-4">Dale Play a la Fiesta</h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        ¡Esta noche no será la misma sin tus canciones! Entrá a la playlist de Spotify y sumá los temas que no pueden faltar para que bailemos todos.
      </p>
      
      <Button asChild size="lg">
        <Link href={spotifyPlaylistUrl} target="_blank" rel="noopener noreferrer">
          <ListMusic className="mr-2 h-5 w-5" />
          Abrir Playlist en Spotify
        </Link>
      </Button>
    </Section>
  );
}
