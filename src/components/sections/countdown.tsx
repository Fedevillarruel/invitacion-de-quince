'use client';

import { useState, useEffect } from 'react';
import { Section } from '../ui/section';

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

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return null;
    }

    return (
      <div key={interval} className="flex flex-col items-center">
        <span className="font-headline text-5xl md:text-7xl text-primary">
          {timeLeft[interval].toString().padStart(2, '0')}
        </span>
        <span className="text-muted-foreground uppercase text-sm tracking-widest">{interval}</span>
      </div>
    );
  });

  return (
    <Section className="text-center">
      <h2 className="font-headline text-4xl md:text-5xl mb-4">La noche se acerca...</h2>
      <p className="text-lg text-muted-foreground mb-12">Prepárate para una noche llena de magia y recuerdos.</p>
      <div className="flex justify-center gap-8 md:gap-16">
        {timerComponents.length ? timerComponents : <span>¡El gran día ha llegado!</span>}
      </div>
    </Section>
  );
}
