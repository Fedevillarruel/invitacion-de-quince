'use client';
import { Section } from '../ui/section';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Gift, Send } from 'lucide-react';

export function Gifting() {
  return (
    <Section className="text-center">
      <h2 className="font-headline text-4xl md:text-5xl mb-4">Un Detalle para Mí</h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Lo único indispensable es que vengas a celebrar. Si además quieres hacerme un regalo, puedes ayudarme a cumplir mi sueño de mi viaje de estudios.
      </p>

      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Gift className="mr-2 h-4 w-4" /> Ver Detalles
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="font-headline text-2xl">Mi Regalo Soñado</DialogTitle>
            <DialogDescription>
              Tu cariño es mi mayor regalo. Si deseas obsequiarme algo más, puedes contribuir a mi viaje de estudios.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <p>Puedes realizar una transferencia al siguiente alias o CBU.</p>
            <div className="p-4 bg-muted rounded-md text-center">
              <p className="font-mono text-sm">ALIAS: more.blanco.xv</p>
              <p className="font-mono text-xs mt-1">CBU: 0000123456789012345678</p>
            </div>
            <p className="text-sm text-muted-foreground">¡Muchísimas gracias por tu apoyo para alcanzar mi meta!</p>
          </div>
        </DialogContent>
      </Dialog>
    </Section>
  );
}
