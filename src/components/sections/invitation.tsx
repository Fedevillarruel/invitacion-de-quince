import { Section } from "../ui/section";
import { Heart, Star, Sparkles, Crown } from "lucide-react";

export function Invitation() {
  return (
    <Section className="text-center bg-gradient-to-br from-accent/20 via-background to-card relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-sunset rounded-full blur-2xl animate-floating"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-aurora rounded-full blur-3xl animate-floating" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-royal rounded-full blur-xl animate-floating" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        {/* Decorative header */}
        <div className="flex items-center gap-4 mb-8">
          <Crown className="w-8 h-8 md:w-10 md:h-10 text-primary animate-sparkle" />
          <div className="h-px bg-gradient-primary w-16 md:w-24"></div>
          <Star className="w-6 h-6 md:w-8 md:h-8 text-primary animate-floating" />
          <div className="h-px bg-gradient-primary w-16 md:w-24"></div>
          <Crown className="w-8 h-8 md:w-10 md:h-10 text-primary animate-sparkle" />
        </div>

        {/* Main title */}
        <h2 className="font-script text-6xl md:text-7xl lg:text-8xl mb-6 text-gradient">
          Una noche para brillar
        </h2>

        {/* Elegant card with invitation text */}
        <div className="glass-morphism rounded-3xl p-8 md:p-12 lg:p-16 border-2 border-white/20 hover:border-primary/30 transition-all duration-300 mb-8 group hover:scale-105">
          <div className="relative">
            {/* Quote marks */}
            <div className="absolute -top-4 -left-4 text-6xl text-primary/30 font-serif">"</div>
            <div className="absolute -bottom-8 -right-4 text-6xl text-primary/30 font-serif rotate-180">"</div>
            
            <p className="font-body text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed italic relative z-10">
              Hay momentos en la vida que soñamos una y otra vez. Para mí, esta noche es uno de ellos. 
              Es una celebración de los caminos recorridos y de los que quedan por descubrir.
            </p>
            
            <div className="flex items-center justify-center my-8">
              <div className="h-px bg-gradient-primary w-20"></div>
              <Heart className="mx-4 w-6 h-6 text-primary animate-pulse" />
              <div className="h-px bg-gradient-primary w-20"></div>
            </div>
            
            <p className="font-body text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed italic">
              Me haría la persona más feliz del mundo compartir esta alegría contigo y crear un recuerdo imborrable. 
              <span className="font-semibold text-primary"> Tu presencia es el mejor regalo.</span>
            </p>
          </div>
        </div>

        {/* Signature */}
        <div className="glass-morphism rounded-2xl px-8 py-6 border border-white/20">
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="w-5 h-5 text-primary animate-sparkle" />
            <p className="font-script text-2xl md:text-3xl text-gradient">
              Con amor, More
            </p>
            <Sparkles className="w-5 h-5 text-primary animate-sparkle" />
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="flex items-center gap-6 mt-12">
          <div className="w-2 h-2 bg-primary rounded-full animate-sparkle"></div>
          <div className="w-3 h-3 bg-primary/70 rounded-full animate-floating"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-sparkle" style={{animationDelay: '0.5s'}}></div>
          <div className="w-4 h-4 bg-primary/60 rounded-full animate-floating" style={{animationDelay: '1s'}}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-sparkle"></div>
          <div className="w-3 h-3 bg-primary/70 rounded-full animate-floating" style={{animationDelay: '1.5s'}}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-sparkle" style={{animationDelay: '0.3s'}}></div>
        </div>
      </div>
    </Section>
  );
}
