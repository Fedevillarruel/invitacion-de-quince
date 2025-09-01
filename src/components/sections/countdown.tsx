'use client';

import { useState, useEffect } from 'react';
import { Section } from '../ui/section';
import { Clock, Calendar, Heart, Sparkles } from 'lucide-react';

export function Countdown() {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2025-11-28T21:00:00');
    const difference = +eventDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    // Set initial time left on mount to avoid hydration mismatch
    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = Object.keys(timeLeft).map((interval, index) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return null;
    }

    const icons = [Calendar, Clock, Heart, Sparkles];
    const IconComponent = icons[index % icons.length];

    return (
      <div key={interval} className="flex flex-col items-center group">
        <div className="glass-morphism rounded-3xl p-6 md:p-8 mb-4 border-2 border-gray-300/30 hover:border-gray-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex flex-col items-center">
            <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-gray-600 mb-3 animate-sparkle" />
            <span className="font-headline text-4xl md:text-6xl lg:text-7xl text-gradient font-bold">
              {timeLeft[interval].toString().padStart(2, '0')}
            </span>
          </div>
        </div>
        <span className="text-gray-600 uppercase text-sm md:text-base tracking-[0.2em] font-medium group-hover:text-gray-700 transition-colors">
          {interval}
        </span>
      </div>
    );
  });

  return (
    <Section className="text-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full blur-3xl animate-floating"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full blur-3xl animate-floating" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full blur-2xl animate-floating" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Header with modern styling */}
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-12 md:w-20"></div>
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-gray-600 animate-sparkle" />
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-12 md:w-20"></div>
          </div>
          
          <h2 className="font-script text-5xl md:text-6xl lg:text-7xl mb-4 text-gradient">
            La cuenta regresiva
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Cada segundo que pasa nos acerca más a esta noche mágica llena de sueños, música y momentos inolvidables
          </p>
        </div>

        {/* Countdown display */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 mb-12">
          {timerComponents.length ? timerComponents : (
            <div className="glass-morphism rounded-3xl px-12 py-8 border-2 border-gray-400/40">
              <div className="flex items-center gap-4">
                <Heart className="w-8 h-8 text-gray-600 animate-pulse" />
                <span className="font-headline text-2xl md:text-3xl text-gradient font-bold">
                  ¡El gran día ha llegado!
                </span>
                <Heart className="w-8 h-8 text-gray-600 animate-pulse" />
              </div>
            </div>
          )}
        </div>

        {/* Call to action */}
        <div className="glass-morphism rounded-2xl px-8 py-6 md:px-12 md:py-8 max-w-lg mx-auto border border-gray-300/30">
          <p className="font-body text-base md:text-lg text-gray-700 font-medium">
            💫 Prepárate para una noche que brillará en nuestros corazones para siempre 💫
          </p>
        </div>
      </div>
    </Section>
  );
}
