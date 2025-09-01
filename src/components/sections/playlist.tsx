'use client';
import { Section } from '../ui/section';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ListMusic, Music, Play, Headphones, Radio, Disc3 } from 'lucide-react';

export function Playlist() {
  const spotifyPlaylistUrl = "https://open.spotify.com/playlist/4pmVadOCzkSRj2RqpTJG0V?si=Rp8rZZ8_Rq2iFfJ-R_sYJg&pi=3tFgGwbTRuGS6";

  const musicGenres = [
    { icon: Disc3, name: "Pop Hits", description: "Los éxitos que nos hacen bailar" },
    { icon: Radio, name: "Reggaeton", description: "Para mover el esqueleto" },
    { icon: Music, name: "Clásicos", description: "Canciones que nunca pasan de moda" },
    { icon: Headphones, name: "Electronic", description: "Beats que elevan la energía" }
  ];

  return (
    <Section className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-28 h-28 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full blur-2xl animate-floating"></div>
        <div className="absolute bottom-20 left-10 w-36 h-36 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full blur-3xl animate-floating" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full blur-xl animate-floating" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-16 md:w-24"></div>
            <Play className="w-8 h-8 md:w-10 md:h-10 text-gray-600 animate-pulse" />
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-16 md:w-24"></div>
          </div>
          
          <h2 className="font-script text-5xl md:text-6xl lg:text-7xl mb-6 text-gradient">
            Dale Play a la Fiesta
          </h2>
          
          <div className="glass-morphism rounded-3xl px-8 py-6 md:px-12 md:py-8 max-w-3xl mx-auto border-2 border-gray-300/30 mb-12">
            <p className="font-body text-lg md:text-xl text-gray-700 leading-relaxed">
              ¡Esta noche no será la misma sin <span className="font-semibold text-gray-800">tus canciones</span>! 
              Entrá a la playlist de Spotify y sumá los temas que no pueden faltar para que bailemos todos juntos.
            </p>
          </div>
        </div>

        {/* Music Genres Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          {musicGenres.map((genre, index) => {
            const IconComponent = genre.icon;
            return (
              <div 
                key={index}
                className="glass-morphism rounded-2xl p-6 border-2 border-gray-300/30 hover:border-gray-400/50 transition-all duration-300 hover:scale-105 text-center group"
              >
                <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-gray-600 mx-auto mb-3 group-hover:animate-pulse" />
                <h3 className="font-headline text-lg md:text-xl text-gradient font-bold mb-2">
                  {genre.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {genre.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main CTA */}
        <div className="flex flex-col items-center gap-6">
          <div className="glass-morphism rounded-3xl p-8 md:p-10 border-2 border-gray-300/30 hover:border-gray-400/50 transition-all duration-300 hover:scale-105 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <ListMusic className="w-12 h-12 text-gray-600 animate-bounce" />
              <div className="text-left">
                <h3 className="font-headline text-xl md:text-2xl text-gradient font-bold">
                  Playlist Colaborativa
                </h3>
                <p className="text-gray-600 text-sm">
                  Spotify • XV Años de More
                </p>
              </div>
            </div>
            
            <Button 
              asChild 
              className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white border-0 hover:scale-105 transition-all duration-300 h-12 text-lg font-semibold shadow-lg"
            >
              <Link href={spotifyPlaylistUrl} target="_blank" rel="noopener noreferrer">
                <Play className="mr-3 h-5 w-5" />
                Abrir en Spotify
              </Link>
            </Button>
          </div>

          {/* Instructions */}
          <div className="glass-morphism rounded-2xl px-6 py-4 border border-gray-300/30 max-w-lg mx-auto text-center">
            <p className="text-gray-700 font-medium text-sm md:text-base">
              🎵 Agrega tus canciones favoritas y hagamos de esta noche una fiesta inolvidable 🎵
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
