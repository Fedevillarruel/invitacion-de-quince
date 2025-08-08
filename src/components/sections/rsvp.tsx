'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Section } from '../ui/section';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

type FormFields = {
  fullName: string;
  attendance: 'yes' | 'no';
};

export function Rsvp() {
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<FormFields>();
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    setSubmitted(true);
    toast({
      title: '¡Confirmación enviada!',
      description: `Gracias, ${data.fullName}. Hemos registrado tu respuesta.`,
    });
  };

  if (submitted) {
    return (
      <Section className="text-center">
        <h2 className="font-headline text-4xl md:text-5xl mb-4">¡Gracias por confirmar!</h2>
        <p className="text-lg text-muted-foreground">Tu respuesta ha sido guardada. ¡Nos vemos en la fiesta!</p>
      </Section>
    );
  }

  return (
    <Section className="text-center">
      <h2 className="font-headline text-4xl md:text-5xl mb-4">Confirma tu Asistencia</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Por favor, necesito tu confirmación antes del 15 de Noviembre para que todo sea perfecto. ¡Muchas gracias!
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto space-y-4">
        <div>
          <Input
            {...register('fullName', { required: 'El nombre y apellido son requeridos.' })}
            placeholder="Nombre y Apellido"
            className="bg-white text-center"
            disabled={isSubmitting}
          />
          {errors.fullName && <p className="text-destructive text-sm mt-2">{errors.fullName.message}</p>}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            type="submit"
            size="lg"
            className="flex-1"
            onClick={() => setValue('attendance', 'yes')}
            disabled={isSubmitting}
          >
            {isSubmitting && <Loader2 className="animate-spin mr-2" />}
            Sí, allí estaré
          </Button>
          <Button
            type="submit"
            size="lg"
            variant="outline"
            className="flex-1"
            onClick={() => setValue('attendance', 'no')}
            disabled={isSubmitting}
          >
            No podré asistir
          </Button>
        </div>
      </form>
    </Section>
  );
}
