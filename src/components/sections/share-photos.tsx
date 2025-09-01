import { Section } from "../ui/section";
import { Camera, Instagram, Upload, Images, Share2, Heart } from "lucide-react";
import { Button } from "../ui/button";
import { QRCodeComponent } from "../ui/qr-code";
import Link from "next/link";

export function SharePhotos() {
  const driveUrl = "https://drive.google.com/drive/folders/1-0xte2VFv75oqX_GGJNhcE42SaTpgjqF";

  const shareFeatures = [
    {
      icon: Camera,
      title: "Fotos",
      description: "Captura cada momento especial"
    },
    {
      icon: Images,
      title: "Videos",
      description: "Guarda los mejores momentos en movimiento"
    },
    {
      icon: Share2,
      title: "Recuerdos",
      description: "Ayudanos a preservar esta noche mágica"
    }
  ];

  return (
    <Section className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full blur-3xl animate-floating"></div>
        <div className="absolute bottom-16 right-10 w-28 h-28 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full blur-2xl animate-floating" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 left-1/2 w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full blur-xl animate-floating" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-16 md:w-24"></div>
            <Camera className="w-8 h-8 md:w-10 md:h-10 text-gray-600 animate-pulse" />
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-16 md:w-24"></div>
          </div>
          
          <h2 className="font-script text-4xl md:text-5xl lg:text-6xl mb-6 text-gradient">
            ¿Sacaste fotos o grabaste videos?
          </h2>
          
          <div className="glass-morphism rounded-3xl px-8 py-6 md:px-12 md:py-8 max-w-4xl mx-auto border-2 border-gray-300/30">
            <p className="font-body text-lg md:text-xl text-gray-700 leading-relaxed">
              ¡Subilos acá! Así me ayudás a guardar todos los <span className="font-semibold text-gray-800">recuerdos</span> de esta noche mágica. 📸✨
            </p>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {shareFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="glass-morphism rounded-2xl p-6 border-2 border-gray-300/30 hover:border-gray-400/50 transition-all duration-300 hover:scale-105 text-center group"
              >
                <IconComponent className="w-12 h-12 text-gray-600 mx-auto mb-4 group-hover:animate-pulse" />
                <h3 className="font-headline text-xl text-gradient font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16 max-w-6xl mx-auto">
          {/* QR Code */}
          <div className="flex-shrink-0">
            <div className="glass-morphism rounded-3xl p-8 border-2 border-gray-300/30 hover:border-gray-400/50 transition-all duration-300 hover:scale-105">
              <div className="max-w-[280px] flex justify-center">
                <QRCodeComponent 
                  value={driveUrl}
                  size={280}
                />
              </div>
              <p className="text-gray-600 text-sm mt-4 text-center font-medium">
                📱 Escaneá para acceso rápido
              </p>
            </div>
          </div>

          {/* Upload section */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="glass-morphism rounded-3xl p-8 border-2 border-gray-300/30 mb-6">
              <Upload className="w-16 h-16 text-gray-600 mx-auto mb-6 animate-bounce" />
              <h3 className="font-headline text-2xl text-gradient font-bold mb-4">
                Sube tus Recuerdos
              </h3>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Escaneá el QR o usá el botón para subir todas las fotos y videos de la fiesta
              </p>
              
              <Button asChild className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white border-0 hover:scale-105 transition-all duration-300 h-12 px-6 text-lg font-semibold shadow-lg">
                <Link href={driveUrl} target="_blank" rel="noopener noreferrer">
                  <Camera className="mr-3 h-5 w-5" />
                  Subir a Drive
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Instagram section */}
        <div className="glass-morphism rounded-3xl p-8 md:p-10 max-w-2xl mx-auto border-2 border-gray-300/30 text-center">
          <Instagram className="w-12 h-12 text-gray-600 mx-auto mb-6 animate-pulse" />
          <h3 className="font-headline text-2xl text-gradient font-bold mb-4">
            ¡Etiquetame en Instagram!
          </h3>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Si subís algo a Instagram, ¡no te olvides de etiquetarme para que pueda ver todos los momentos! 💕
          </p>
          
          <a 
            href="https://www.instagram.com/mmoreena_44" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 font-semibold text-lg shadow-lg"
          >
            <Instagram className="h-6 w-6" />
            @mmoreena_44
            <Heart className="h-5 w-5 animate-pulse" />
          </a>
        </div>
      </div>
    </Section>
  );
}
