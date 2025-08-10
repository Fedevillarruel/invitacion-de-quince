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
  const [hasInteracted, setHasInteracted] = useState(false);

  // Function to toggle play/pause
  const togglePlayPause = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // We only try to play if the user has interacted
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
        });
      }
    }
  };

  // Effect to handle initial playback after user interaction
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const attemptPlay = () => {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // If autoplay is blocked, we wait for user interaction.
        setIsPlaying(false);
      });
    };

    // Browsers often block autoplay until the user interacts with the page.
    // We'll try to play, but handle the failure gracefully.
    attemptPlay();

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handlePause); // For loop behavior

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
