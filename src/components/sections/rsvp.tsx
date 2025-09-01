'use client';

import Link from 'next/link';
import { Section } from '../ui/section';
import { Button } from '../ui/button';
import { Send, Clock, Users, CheckCircle, Calendar } from 'lucide-react';

export function Rsvp() {
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScGImMclpHCgWHqk6ysP8lRnjGRfgGSuN9zQ9HRseu_YFtVGg/viewform?usp=dialog';

  const rsvpFeatures = [
    { 
      icon: Users, 
      title: "Cantidad de invitados", 
      description: "Cuántos van a acompañarte" 
    },
    { 
      icon: Calendar, 
      title: "Fecha límite", 
      description: "Antes del 15 de Noviembre" 
    },
    { 
      icon: CheckCircle, 
      title: "Confirmación rápida", 
      description: "Solo toma 2 minutos" 
    }
  ];

  return (
    <Section className="bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 right-10 w-32 h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full blur-3xl animate-floating"></div>
        <div className="absolute bottom-20 left-16 w-28 h-28 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full blur-2xl animate-floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full blur-xl animate-floating" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-16 md:w-24"></div>
            <Send className="w-8 h-8 md:w-10 md:h-10 text-gray-600 animate-pulse" />
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-16 md:w-24"></div>
          </div>
          
          <h2 className="font-script text-5xl md:text-6xl lg:text-7xl mb-6 text-gradient">
            ¿Venís a festejar conmigo?
          </h2>
          
          <div className="glass-morphism rounded-3xl px-8 py-6 md:px-12 md:py-8 max-w-4xl mx-auto border-2 border-gray-300/30">
            <p className="font-body text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              Me ayudás un montón completando la <span className="font-semibold text-gray-800">confirmación</span> antes del 15 de noviembre.
            </p>
            <p className="font-body text-lg md:text-xl text-gray-700 leading-relaxed">
              ¡Gracias por ser parte de esta noche especial! 💕
            </p>
          </div>
        </div>

        {/* RSVP Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {rsvpFeatures.map((feature, index) => {
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

        {/* Deadline reminder */}
        <div className="glass-morphism rounded-3xl p-6 md:p-8 max-w-2xl mx-auto border-2 border-gray-300/30 mb-12 text-center">
          <Clock className="w-10 h-10 text-gray-600 mx-auto mb-4 animate-bounce" />
          <h3 className="font-headline text-2xl text-gradient font-bold mb-3">
            Fecha Límite
          </h3>
          <p className="text-gray-700 text-lg font-medium mb-2">
            15 de Noviembre de 2025
          </p>
          <p className="text-gray-600 text-sm">
            No te olvides de confirmar así planifico todo perfecto ✨
          </p>
        </div>

        {/* Main CTA */}
        <div className="flex justify-center">
          <div className="glass-morphism rounded-3xl p-8 md:p-10 border-2 border-gray-300/30 hover:border-gray-400/50 transition-all duration-300 hover:scale-105">
            <Button asChild className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white border-0 hover:scale-105 transition-all duration-300 h-14 px-8 text-lg font-semibold shadow-lg w-full">
              <Link href={googleFormUrl} target="_blank" rel="noopener noreferrer">
                <Send className="mr-3 h-6 w-6" />
                Confirmar Asistencia
              </Link>
            </Button>
            
            <p className="text-gray-600 text-sm mt-4 text-center">
              🎉 Te lleva 2 minutitos completar el formulario 🎉
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
