import { Section } from "../ui/section";

export function Footer() {
  return (
    <footer className="w-full bg-accent/30">
      <Section className="text-center !py-16">
        <h3 className="font-headline text-2xl md:text-3xl tracking-tight">#MorenaWhiteNight</h3>
        <p className="text-muted-foreground mt-2 mb-8">
          Usa el hashtag en tus publicaciones. ¡Construyamos nuestros recuerdos juntos!
        </p>
        <p className="font-headline text-3xl md:text-4xl">
          Te espero para vivir una noche inolvidable.
        </p>
        <p className="mt-6 text-lg tracking-wider">
          Con mucho cariño,
        </p>
        <p className="font-headline text-2xl">
          Morena Blanco
        </p>
      </Section>
    </footer>
  );
}
