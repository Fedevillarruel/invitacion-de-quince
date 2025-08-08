import Image from "next/image";
import { Section } from "../ui/section";
import { Camera, Instagram } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function SharePhotos() {
  const driveUrl = "https://drive.google.com/drive/folders/1v2c9M3BBRKUqphnQMD6kD2aX99rwrhXo?usp=drive_link";

  return (
    <Section className="text-center">
      <h2 className="font-headline text-4xl md:text-5xl mb-4">¿Sacaste fotos o grabaste videos?</h2>
      <p className="text-lg text-muted-foreground mb-8">
        ¡Subilos acá! Así me ayudás a guardar todos los recuerdos de esta noche mágica.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
        <div className="max-w-[250px]">
          <Image 
            src="https://firebasestudio.b-cdn.net/proxy/github/content/projects/codec/apps/c8105d15-a740-410e-a4b5-0c153b6f932e/previews/pr-11/1723162788931.png" 
            alt="QR para compartir fotos"
            width={400}
            height={550}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="mb-4 text-muted-foreground">Escaneá el QR o usá el botón</p>
          <Button asChild size="lg">
            <Link href={driveUrl} target="_blank" rel="noopener noreferrer">
              <Camera className="mr-2 h-5 w-5" />
              Subir a Drive
            </Link>
          </Button>
        </div>
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