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
  const [hasInteracted, setHasInteracted] = useState(false);

  const togglePlayPause = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
    
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      
      audioElement.addEventListener('play', handlePlay);
      audioElement.addEventListener('pause', handlePause);

      // Attempt to play on interaction
      if(hasInteracted) {
        audioElement.play().catch(error => {
           // This catch is important for browsers that might still block autoplay
           console.error("Autoplay after interaction failed:", error);
        });
      }

      return () => {
        audioElement.removeEventListener('play', handlePlay);
        audioElement.removeEventListener('pause', handlePause);
      };
    }
  }, [hasInteracted]);


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