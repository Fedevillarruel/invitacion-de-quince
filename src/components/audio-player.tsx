'use client';

import { useState, useRef, useEffect } from 'react';
import { Music, Pause } from 'lucide-react';
import { Button } from './ui/button';

interface AudioPlayerProps {
  src: string;
}

export function AudioPlayer({ src }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to toggle play/pause
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

  // Effect to handle audio state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handlePause); // For loop behavior

    // Attempt to play on mount, gracefully handling autoplay restrictions.
    audio.play().catch(() => {
        setIsPlaying(false);
    });

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handlePause);
    };
  }, [src]);


  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" />
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={togglePlayPause}
          className="rounded-full bg-background/50 backdrop-blur-sm"
          aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Music className="h-5 w-5" />}
        </Button>
      </div>
    </>
  );
}
