'use client';
import { Section } from '../ui/section';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Gift, Send, Heart, Compass, MapPin, Copy, Check, CreditCard, Banknote } from 'lucide-react';
import { useState } from 'react';

export function Gifting() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <Section className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full blur-3xl animate-floating"></div>
        <div className="absolute bottom-10 right-20 w-28 h-28 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full blur-2xl animate-floating" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full blur-xl animate-floating" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-16 md:w-24"></div>
            <Gift className="w-8 h-8 md:w-10 md:h-10 text-gray-600 animate-bounce" />
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-16 md:w-24"></div>
          </div>
          
          <h2 className="font-script text-5xl md:text-6xl lg:text-7xl mb-6 text-gradient">
            Un detalle para mí
          </h2>
          
          <div className="glass-morphism rounded-3xl px-8 py-6 md:px-12 md:py-8 max-w-4xl mx-auto border-2 border-gray-300/30">
            <p className="font-body text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              Lo más importante es que vengas a <span className="font-semibold text-gray-800">festejar conmigo</span>.
            </p>
            <p className="font-body text-lg md:text-xl text-gray-700 leading-relaxed">
              Si además querés tener un gesto especial, podés ayudarme con un <span className="font-semibold text-gray-800">regalo en efectivo</span> para seguir cumpliendo mis sueños.
            </p>
          </div>
        </div>

        {/* Dream visualization */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="glass-morphism rounded-2xl p-6 border-2 border-gray-300/30 hover:border-gray-400/50 transition-all duration-300 hover:scale-105 text-center group">
            <Compass className="w-12 h-12 text-gray-600 mx-auto mb-4 group-hover:animate-pulse" />
            <h3 className="font-headline text-xl text-gradient font-bold mb-2">
              Experiencias
            </h3>
            <p className="text-gray-600 text-sm">
              Todo aporte me ayuda a vivir nuevas aventuras.
            </p>
          </div>

          <div className="glass-morphism rounded-2xl p-6 border-2 border-gray-300/30 hover:border-gray-400/50 transition-all duration-300 hover:scale-105 text-center group">
            <MapPin className="w-12 h-12 text-gray-600 mx-auto mb-4 group-hover:animate-pulse" />
            <h3 className="font-headline text-xl text-gradient font-bold mb-2">
              Metas
            </h3>
            <p className="text-gray-600 text-sm">
              Cada regalo suma para alcanzar lo que quiero.
            </p>
          </div>

          <div className="glass-morphism rounded-2xl p-6 border-2 border-gray-300/30 hover:border-gray-400/50 transition-all duration-300 hover:scale-105 text-center group">
            <Heart className="w-12 h-12 text-gray-600 mx-auto mb-4 group-hover:animate-pulse" />
            <h3 className="font-headline text-xl text-gradient font-bold mb-2">
              Recuerdos
            </h3>
            <p className="text-gray-600 text-sm">
              Tu cariño y tu aporte van a estar presentes en cada paso.
            </p>
          </div>
        </div>

        {/* Main CTA */}
        <div className="flex justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white border-0 hover:scale-105 transition-all duration-300 h-14 px-8 text-lg font-semibold shadow-lg">
                <Gift className="mr-3 h-6 w-6" />
                Cómo podés hacer tu regalo
              </Button>
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-[500px] bg-white/95 backdrop-blur-xl border-2 border-gray-400/50 shadow-2xl">
              <DialogHeader className="text-center pb-6">
                <DialogTitle className="font-script text-3xl md:text-4xl bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">
                  Mi Regalo Soñado
                </DialogTitle>
                <DialogDescription className="text-lg text-gray-800 leading-relaxed font-medium">
                  Tu cariño es mi mayor regalo. Si querés tener un gesto especial, podés transferirme a la siguiente cuenta.
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Payment options */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gray-50/80 rounded-2xl p-6 border-2 border-gray-300/50">
                    <div className="flex items-center gap-3 mb-4">
                      <CreditCard className="w-6 h-6 text-gray-700" />
                      <h3 className="font-headline text-lg font-semibold text-gray-900">
                        Transferencia Bancaria
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-white/80 rounded-xl p-4 border-2 border-gray-300/40">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-700 mb-1 font-medium">ALIAS</p>
                            <p className="font-mono text-lg font-bold text-gray-900">more.blanco.xv</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard('more.blanco.xv', 'alias')}
                            className="hover:bg-gray-200/50"
                          >
                            {copiedField === 'alias' ? (
                              <Check className="h-4 w-4 text-green-600" />
                            ) : (
                              <Copy className="h-4 w-4 text-gray-700" />
                            )}
                          </Button>
                        </div>
                      </div>

                      <div className="bg-white/80 rounded-xl p-4 border-2 border-gray-300/40">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-700 mb-1 font-medium">CBU</p>
                            <p className="font-mono text-sm font-bold text-gray-900">XXXXXXXXXXXXXXXXX</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard('XXXXXXXXXXXXXXXXX', 'cbu')}
                            className="hover:bg-gray-200/70"
                          >
                            {copiedField === 'cbu' ? (
                              <Check className="h-4 w-4 text-green-600" />
                            ) : (
                              <Copy className="h-4 w-4 text-gray-700" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Thank you message */}
                <div className="bg-gray-100/90 rounded-2xl p-6 border-2 border-gray-300/50 text-center">
                  <Heart className="w-8 h-8 text-gray-700 mx-auto mb-3 animate-pulse" />
                  <p className="text-gray-900 font-semibold leading-relaxed">
                    ¡Muchísimas gracias por tu regalo! Cada gesto cuenta y me emociona muchísimo. 💕
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Section>
  );
}
