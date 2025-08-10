'use client';

import Image from 'next/image';
import { Section } from '../ui/section';
import { Button } from '../ui/button';
import { Camera } from 'lucide-react';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';

const salonName = "La Sofía Eventos";
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
        <div className="aspect-[4/3] md:aspect-auto md:h-full rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.359010271526!2d-58.478171599999996!3d-34.822064999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd10020799d23%3A0xc492bc8d21172c87!2sLa%20Sof%C3%ADa%20Eventos!5e0!3m2!1ses-419!2sar!4v1754858034702!5m2!1ses-419!2sar" 
            width="100%" 
            height="100%" 
            style={{ border:0 }} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
