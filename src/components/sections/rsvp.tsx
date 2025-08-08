'use client';

import Link from 'next/link';
import { Section } from '../ui/section';
import { Button } from '../ui/button';
import { Send } from 'lucide-react';

export function Rsvp() {
  const googleFormUrl = 'https://forms.gle/GXYRc88Q3s9khtCNA';

  return (
    <Section className="text-center">
      <h2 className="font-headline text-4xl md:text-5xl mb-4">Confirma tu Asistencia</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Por favor, necesito tu confirmación antes del 15 de Noviembre para que todo sea perfecto. ¡Muchas gracias!
      </p>

      <Button asChild size="lg">
        <Link href={googleFormUrl} target="_blank" rel="noopener noreferrer">
          <Send className="mr-2 h-5 w-5" />
          Confirmar asistencia
        </Link>
      </Button>
    </Section>
  );
}
