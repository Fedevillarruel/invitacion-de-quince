'use client';

import { useState, useRef, useEffect } from 'react';
import { Music, Pause } from 'lucide-react';
import { Button } from './ui/button';

interface AudioPlayerProps {
  src: string;
}

export function AudioPlayer({ src }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReadyToPlay, setIsReadyToPlay] = useState(false);

  useEffect(() => {
    // We create the audio element only on the client side.
    const audio = new Audio(src);
    audio.loop = true;
    audioRef.current = audio;

    const handleCanPlay = () => setIsReadyToPlay(true);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.pause();
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [src]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
        });
      }
    }
  };

  return (
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={togglePlayPause}
          className="rounded-full bg-background/50 backdrop-blur-sm"
          aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
          disabled={!isReadyToPlay}
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Music className="h-5 w-5" />}
        </Button>
      </div>
  );
}
