'use client';

import Image from 'next/image';
import { Section } from '../ui/section';
import { Button } from '../ui/button';
import { Camera, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';

const salonName = "Salón de Fiestas 'El Encanto'";
const salonAddress = "Almirante Brown 239, Monte Grande, Buenos Aires";
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${salonName}, ${salonAddress}`)}`;

const venueImages = [
  { trigger: "Ver la Entrada", src: "https://placehold.co/800x600.png", hint: "elegant venue entrance" },
  { trigger: "Ver la Pista", src: "https://placehold.co/800x600.png", hint: "party dance floor" },
  { trigger: "Ver el Interior", src: "https://placehold.co/800x600.png", hint: "luxury event interior" },
]

export function Location() {
  return (
    <Section className="text-center">
      <h2 className="font-headline text-4xl md:text-5xl mb-12">Punto de Encuentro</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square md:aspect-auto md:h-full rounded-lg overflow-hidden group shadow-lg">
          <Link href={mapUrl} target="_blank" rel="noopener noreferrer" aria-label="Abrir en Google Maps">
            <Image
              src="https://placehold.co/600x600.png"
              alt="Mapa del lugar del evento"
              width={600}
              height={600}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="city map"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <MapPin className="h-16 w-16 text-white" />
            </div>
          </Link>
        </div>
        <div className="text-left flex flex-col justify-center h-full">
          <h3 className="font-headline text-3xl mb-2">Recepción y Fiesta</h3>
          <p className="text-muted-foreground text-lg mb-4">21:00 hs.</p>
          <p className="font-semibold text-xl text-primary">{salonName}</p>
          <Link href={mapUrl} target="_blank" rel="noopener noreferrer">
            <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">{salonAddress}</p>
          </Link>
          <div className="mt-8 flex flex-wrap gap-4">
            {venueImages.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <Camera className="mr-2 h-4 w-4" />
                    {image.trigger}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-0">
                  <DialogHeader className="p-4">
                    <DialogTitle>{image.trigger}</DialogTitle>
                  </DialogHeader>
                  <Image
                    src={image.src}
                    alt={image.trigger}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    data-ai-hint={image.hint}
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
