'use client';

import { Button } from '../ui/button';
import { Calendar, MapPin, Clock, Navigation } from 'lucide-react';
import Link from 'next/link';
import { Section } from '../ui/section';

const salonName = "La Sofía Eventos";
const salonAddress = "Almirante Brown 239, Monte Grande, Buenos Aires";
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${salonName}, ${salonAddress}`)}`;

const eventDetails = {
  title: "XV Años de More",
  details: "¡Estás invitado a la celebración de mis XV años! Una noche para brillar y crear recuerdos inolvidables.",
  location: salonAddress,
  startDate: "20251128T210000",
  endDate: "20251129T050000"
};

const formatGoogleCalendarUrl = () => {
  const { title, details, location, startDate, endDate } = eventDetails;
  const baseUrl = "https://www.google.com/calendar/render?action=TEMPLATE";
  const params = new URLSearchParams({
    text: title,
    details: details,
    location: location,
    dates: `${startDate}/${endDate}`.replace(/-/g, '').replace(/:/g, '').replace(/\.\d{3}/, ''),
  });
  return `${baseUrl}&${params.toString()}`;
};

export function Location() {
  return (
    <Section className="bg-gradient-to-br from-card via-background to-accent/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-primary rounded-full blur-2xl animate-floating"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-secondary rounded-full blur-3xl animate-floating" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-sunset rounded-full blur-xl animate-floating" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-gradient-primary w-16 md:w-24"></div>
            <MapPin className="w-8 h-8 md:w-10 md:h-10 text-primary animate-sparkle" />
            <div className="h-px bg-gradient-primary w-16 md:w-24"></div>
          </div>
          
          <h2 className="font-script text-5xl md:text-6xl lg:text-7xl mb-4 text-gradient">
            Nuestro encuentro
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Un lugar especial donde viviremos momentos únicos y crearemos recuerdos para toda la vida
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Map Section - Left Column (2/5 width) */}
          <div className="order-2 lg:order-1 lg:col-span-2">
            <div className="glass-morphism rounded-3xl p-6 border-2 border-gray-300/30 hover:border-gray-400/40 transition-colors">
              <h3 className="font-headline text-xl md:text-2xl text-gradient font-bold mb-4 text-center">
                📍 Ubicación
              </h3>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.359010271526!2d-58.478171599999996!3d-34.822064999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd10020799d23%3A0xc492bc8d21172c87!2sLa%20Sof%C3%ADa%20Eventos!5e0!3m2!1ses-419!2sar!4v1754858034702!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Event Details - Right Column (3/5 width) */}
          <div className="order-1 lg:order-2 lg:col-span-3 space-y-6">
            {/* Venue Information */}
            <div className="glass-morphism rounded-3xl p-6 md:p-8 border-2 border-gray-300/30 hover:border-gray-400/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-gray-400 to-gray-500 rounded-2xl">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-headline text-xl md:text-2xl text-gradient font-bold mb-2">
                    {salonName}
                  </h3>
                  <Link href={mapUrl} target="_blank" rel="noopener noreferrer" className="group">
                    <p className="text-gray-600 hover:text-gray-700 transition-colors cursor-pointer text-base group-hover:underline">
                      {salonAddress}
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Time Information */}
            <div className="glass-morphism rounded-3xl p-6 md:p-8 border-2 border-gray-300/30 hover:border-gray-400/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-gray-500 to-gray-600 rounded-2xl">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-headline text-xl md:text-2xl text-gradient font-bold mb-2">
                    Recepción & Fiesta
                  </h3>
                  <p className="text-gray-600 text-base mb-2">
                    <span className="font-semibold text-gray-700">21:00 hs</span> · Te esperamos para empezar juntos
                  </p>
                  <p className="text-gray-600 text-sm">28 de Noviembre, 2025</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                asChild 
                className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white border-0 transition-all duration-300 h-12 text-base font-semibold shadow-lg"
              >
                <Link href={formatGoogleCalendarUrl()} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-3 h-4 w-4" />
                  Agendar en mi Calendario
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline"
                className="w-full glass-morphism border-2 border-gray-400/50 hover:border-gray-500/70 text-gray-700 hover:text-gray-800 hover:bg-gray-100/50 transition-all duration-300 h-12 text-base font-semibold"
              >
                <Link href={mapUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="mr-3 h-4 w-4" />
                  Cómo llegar
                </Link>
              </Button>
            </div>

            {/* Additional Info */}
            <div className="glass-morphism rounded-2xl p-4 border border-gray-300/30 text-center">
              <p className="text-gray-600 font-medium text-sm">
                ✨ Llegá con tiempo así disfrutamos cada momento desde el principio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
