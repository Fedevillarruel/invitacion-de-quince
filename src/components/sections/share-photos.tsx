import Image from "next/image";
import { Section } from "../ui/section";
import { Instagram } from "lucide-react";

export function SharePhotos() {
  return (
    <Section className="text-center">
      <h2 className="font-headline text-4xl md:text-5xl mb-4">¿Sacaste fotos o grabaste videos?</h2>
      <p className="text-lg text-muted-foreground mb-8">
        ¡Subilos acá! Así me ayudás a guardar todos los recuerdos de esta noche mágica.
      </p>
      <div className="max-w-xs mx-auto mb-8">
        <Image 
          src="https://firebasestudio.b-cdn.net/proxy/github/content/projects/codec/apps/c8105d15-a740-410e-a4b5-0c153b6f932e/previews/pr-11/1723162788931.png" 
          alt="QR para compartir fotos"
          width={400}
          height={550}
          className="rounded-lg shadow-lg"
        />
      </div>
      <p className="text-muted-foreground">
        Y si subís algo a Instagram, ¡no te olvides de etiquetarme!
      </p>
      <a href="https://www.instagram.com/mmoreena_44" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-2 font-semibold text-primary hover:underline">
        <Instagram className="h-5 w-5" />
        @mmoreena_44
      </a>
    </Section>
  );
}
