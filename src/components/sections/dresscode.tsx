import Image from "next/image";
import { Section } from "../ui/section";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const outfits = [
  { src: "/1.jpg", hint: "elegant dress silver" },
  { src: "/2.jpg", hint: "elegant suit silver" },
  { src: "/3.jpg", hint: "evening gown silver" },
  { src: "/4.jpg", hint: "cocktail dress silver" },
];

export function DressCode() {
  return (
    <Section className="text-center">
      <h2 className="font-headline text-4xl md:text-5xl mb-4">Dress Code</h2>
      <p className="text-lg text-muted-foreground mb-12">Elegante Sport. Anímate a incluir un toque de plata en tu look para brillar conmigo.</p>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-xs sm:max-w-sm md:max-w-2xl mx-auto"
      >
        <CarouselContent>
          {outfits.map((outfit, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden">
                  <CardContent className="flex aspect-[2/3] items-center justify-center p-0">
                    <Image
                      src={outfit.src}
                      alt={`Inspiración de outfit ${index + 1}`}
                      width={400}
                      height={600}
                      className="w-full h-full object-cover"
                      data-ai-hint={outfit.hint}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </Section>
  );
}
