'use client';

import { useState, useRef, useEffect } from 'react';
import { Music, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';

interface AudioPlayerProps {
  src: string;
}

export function AudioPlayer({ src }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [canPlay, setCanPlay] = useState(false);
  const [error, setError] = useState(false);

  const togglePlayPause = async () => {
    if (!audioRef.current) return;

    setHasInteracted(true);

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Ensure audio is loaded and ready
        if (audioRef.current.readyState < 2) {
          await new Promise((resolve) => {
            const handleCanPlay = () => {
              audioRef.current?.removeEventListener('canplay', handleCanPlay);
              resolve(void 0);
            };
            audioRef.current?.addEventListener('canplay', handleCanPlay);
            audioRef.current?.load();
          });
        }

        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Audio playback failed:", error);
      setError(true);
      // Reset error after 3 seconds
      setTimeout(() => setError(false), 3000);
    }
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const handleCanPlay = () => setCanPlay(true);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = () => {
      console.error("Audio loading error");
      setError(true);
    };
    const handleLoadStart = () => setError(false);

    audioElement.addEventListener('canplay', handleCanPlay);
    audioElement.addEventListener('play', handlePlay);
    audioElement.addEventListener('pause', handlePause);
    audioElement.addEventListener('error', handleError);
    audioElement.addEventListener('loadstart', handleLoadStart);

    // Set volume to a reasonable level
    audioElement.volume = 0.7;

    return () => {
      audioElement.removeEventListener('canplay', handleCanPlay);
      audioElement.removeEventListener('play', handlePlay);
      audioElement.removeEventListener('pause', handlePause);
      audioElement.removeEventListener('error', handleError);
      audioElement.removeEventListener('loadstart', handleLoadStart);
    };
  }, []);

  const getIcon = () => {
    if (error) return <VolumeX className="h-5 w-5" />;
    if (isPlaying) return <Pause className="h-5 w-5" />;
    return <Music className="h-5 w-5" />;
  };

  const getButtonClass = () => {
    const baseClass = "rounded-full bg-background/80 backdrop-blur-sm border-2 transition-all duration-300 hover:scale-110";
    if (error) return `${baseClass} border-red-300 hover:border-red-400`;
    if (isPlaying) return `${baseClass} border-green-300 hover:border-green-400`;
    return `${baseClass} border-gray-300 hover:border-gray-400`;
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src={src} 
        loop 
        preload="metadata"
        playsInline
        controls={false}
      />
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={togglePlayPause}
          className={getButtonClass()}
          aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
          disabled={!canPlay && !error}
        >
          {getIcon()}
        </Button>
      </div>
    </>
  );
}