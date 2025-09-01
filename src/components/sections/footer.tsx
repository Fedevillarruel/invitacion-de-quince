import { Section } from "../ui/section";
import { Heart, Sparkles, Star, Copyright } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 relative overflow-hidden">
      {/* Decorative background elements (subtle) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-28 h-28 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full blur-3xl animate-floating"></div>
        <div className="absolute bottom-16 right-12 w-24 h-24 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full blur-2xl animate-floating" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <Section className="text-center !py-16 relative z-10">
        {/* Short and sweet message */}
        <div className="glass-morphism rounded-3xl px-8 py-10 md:px-12 md:py-12 max-w-3xl mx-auto border-2 border-gray-600/30 bg-white/5">
          <Star className="w-10 h-10 text-gray-300 mx-auto mb-4" />
          <h2 className="font-script text-4xl md:text-5xl text-white mb-4 leading-tight">
            ¡Gracias por ser parte!
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            Me hace muy feliz compartir este momento con vos. 💫
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 opacity-80">
            <Heart className="w-5 h-5 text-pink-400" />
            <span className="text-gray-200">Morena</span>
            <Sparkles className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Credit */}
        <div className="mt-8 flex items-center justify-center">
          <a
            href="https://fedini.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-colors"
          >
            <Copyright className="w-3.5 h-3.5" />
            <span>Invitación hecha por Fedini</span>
          </a>
        </div>
      </Section>
    </footer>
  );
}
