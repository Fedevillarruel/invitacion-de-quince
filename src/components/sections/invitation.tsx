import { Section } from "../ui/section";

export function Invitation() {
  return (
    <Section className="text-center flex flex-col items-center">
      <h2 className="font-headline text-4xl md:text-5xl mb-4">Una noche para brillar</h2>
      <p className="font-body text-lg max-w-2xl text-muted-foreground leading-relaxed">
        Hay momentos en la vida que soñamos una y otra vez. Para mí, esta noche es uno de ellos. Es una celebración de los caminos recorridos y de los que quedan por descubrir. Me haría la persona más feliz del mundo compartir esta alegría contigo y crear un recuerdo imborrable. Tu presencia es el mejor regalo.
      </p>
    </Section>
  );
}
