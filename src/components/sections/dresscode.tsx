import Image from "next/image";
import { Section } from "../ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart, Star, Crown, Shirt, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const outfitsByCategory = {
  women: [
    { 
      src: "/sport/woman 1.png",
      alt: "Blusa satinada con pantalón negro elegante",
      description: "Blusa satinada con pantalón negro elegante."
    },
    { 
      src: "/sport/woman 2.png",
      alt: "Vestido cruzado en tono neutro",
      description: "Vestido cruzado en tono neutro, simple y sofisticado."
    },
    { 
      src: "/sport/woman 3.png",
      alt: "Conjunto de blazer y falda midi",
      description: "Conjunto de blazer y falda midi, look pulido."
    },
    { 
      src: "/sport/woman 4.png",
      alt: "Enterito negro minimalista",
      description: "Enterito negro, minimalista y moderno."
    }
  ],
  men: [
    { 
      src: "/sport/man 1.png",
      alt: "Saco azul con pantalón beige",
      description: "Saco azul con pantalón beige, clásico elegante sport."
    },
    { 
      src: "/sport/man 2.png",
      alt: "Polo claro con jeans oscuros",
      description: "Polo claro con jeans oscuros, cómodo y prolijo."
    },
    { 
      src: "/sport/man 3.png",
      alt: "Blazer gris con camisa celeste",
      description: "Blazer gris con camisa celeste, sobrio y versátil."
    },
    { 
      src: "/sport/man 4.png",
      alt: "Campera negra con remera blanca",
      description: "Campera negra con remera blanca y pantalón oscuro, relajado con estilo."
    }
  ]
};

export function DressCode() {
  return (
    <Section className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full blur-2xl animate-floating"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full blur-3xl animate-floating" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full blur-xl animate-floating" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-16 md:w-24"></div>
            <Shirt className="w-8 h-8 md:w-10 md:h-10 text-gray-600 animate-sparkle" />
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-16 md:w-24"></div>
          </div>
          
          <h2 className="font-script text-5xl md:text-6xl lg:text-7xl mb-6 text-gradient">
            Dress Code
          </h2>
          
          <div className="glass-morphism rounded-3xl px-8 py-6 md:px-12 md:py-8 max-w-3xl mx-auto border-2 border-gray-300/30">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Crown className="w-6 h-6 text-gray-600 animate-sparkle" />
              <h3 className="font-headline text-2xl md:text-3xl text-gradient font-bold">
                Elegante Sport
              </h3>
              <Crown className="w-6 h-6 text-gray-600 animate-sparkle" />
            </div>
            <p className="font-body text-lg md:text-xl text-gray-700 leading-relaxed">
              Anímate a incluir un <span className="font-semibold text-gray-800">toque de plata</span> en tu look para brillar conmigo en esta noche especial
            </p>
          </div>
        </div>

        {/* Women's Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Heart className="w-6 h-6 text-gray-600 animate-sparkle" />
            <h3 className="font-headline text-3xl md:text-4xl text-gradient font-bold">
              Para Ellas
            </h3>
            <Heart className="w-6 h-6 text-gray-600 animate-sparkle" />
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {outfitsByCategory.women.map((outfit, index) => (
                <CarouselItem key={`women-${index}`} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="group">
                    <Card className="glass-morphism border-2 border-gray-300/30 hover:border-gray-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-[3/4] relative overflow-hidden">
                          <Image
                            src={outfit.src}
                            alt={outfit.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-sm opacity-95 leading-relaxed">{outfit.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 glass-morphism border-gray-300/30" />
            <CarouselNext className="hidden md:flex -right-12 glass-morphism border-gray-300/30" />
          </Carousel>
        </div>

        {/* Men's Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Star className="w-6 h-6 text-gray-600 animate-sparkle" />
            <h3 className="font-headline text-3xl md:text-4xl text-gradient font-bold">
              Para Ellos
            </h3>
            <Star className="w-6 h-6 text-gray-600 animate-sparkle" />
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {outfitsByCategory.men.map((outfit, index) => (
                <CarouselItem key={`men-${index}`} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="group">
                    <Card className="glass-morphism border-2 border-gray-300/30 hover:border-gray-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-[3/4] relative overflow-hidden">
                          <Image
                            src={outfit.src}
                            alt={outfit.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-sm opacity-95 leading-relaxed">{outfit.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 glass-morphism border-gray-300/30" />
            <CarouselNext className="hidden md:flex -right-12 glass-morphism border-gray-300/30" />
          </Carousel>
        </div>

        {/* Style Tips */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass-morphism rounded-3xl p-8 border-2 border-gray-300/30 hover:border-gray-400/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-gray-600 animate-sparkle" />
              <h4 className="font-headline text-xl md:text-2xl text-gradient font-bold">
                Tips de Estilo
              </h4>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Sumá detalles metálicos: reloj, cinturón, aros.
              </p>
              <p>
                Telas con brillo sutil para levantar el look.
              </p>
            </div>
          </div>

          <div className="glass-morphism rounded-3xl p-8 border-2 border-gray-300/30 hover:border-gray-400/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-gray-600 animate-sparkle" />
              <h4 className="font-headline text-xl md:text-2xl text-gradient font-bold">
                Para Todos
              </h4>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Estar elegante pero cómodo: cada edad con su estilo.
              </p>
              <p>
                Armá un look para toda la noche, desde la entrada hasta el último baile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
