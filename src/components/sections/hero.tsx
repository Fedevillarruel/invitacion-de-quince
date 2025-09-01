import { ArrowDown, Sparkles, Heart, Star, Crown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex items-center justify-center py-8 md:py-0">
      {/* Animated background elements with silver tones */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-4 h-4 bg-gray-300/40 rounded-full animate-sparkle"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-gray-400/30 rounded-full animate-floating"></div>
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-gray-500/35 rounded-full animate-sparkle"></div>
        <div className="absolute top-60 left-1/3 w-5 h-5 bg-gray-300/30 rounded-full animate-floating"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-gray-400/40 rounded-full animate-sparkle"></div>
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-gray-500/30 rounded-full animate-floating"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-gray-300/35 rounded-full animate-sparkle"></div>
      </div>

      {/* Elegant geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 border border-gray-300/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-24 h-24 border border-gray-400/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-gray-500/20 rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-20 text-center text-gray-800 px-4 md:px-12 max-w-4xl mx-auto w-full">
        {/* Decorative crown */}
        <div className="flex justify-center mb-4 md:mb-8 animate-in fade-in slide-in-from-top-8 duration-1000">
          <div className="relative">
            <Crown className="w-10 h-10 md:w-20 md:h-20 text-gray-600 animate-pulse" />
            <div className="absolute -top-1 md:-top-2 -right-1 md:-right-2">
              <Sparkles className="w-3 h-3 md:w-6 md:h-6 text-gray-500 animate-sparkle" />
            </div>
            <div className="absolute -bottom-1 md:-bottom-2 -left-1 md:-left-2">
              <Star className="w-2 h-2 md:w-5 md:h-5 text-gray-600 animate-sparkle" />
            </div>
          </div>
        </div>

        {/* Main title with elegant typography */}
        <div className="mb-6 md:mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          <h1 className="font-script text-4xl sm:text-5xl md:text-9xl lg:text-[12rem] font-bold tracking-tight mb-3 md:mb-6 text-gradient drop-shadow-lg leading-none">
            More
          </h1>
          
          {/* Elegant separator */}
          <div className="flex items-center justify-center gap-3 md:gap-6 mb-4 md:mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-12 md:w-32"></div>
            <div className="relative">
              <Heart className="w-5 h-5 md:w-10 md:h-10 text-gray-600 animate-pulse" />
              <div className="absolute inset-0 w-5 h-5 md:w-10 md:h-10 border border-gray-400/30 rounded-full animate-ping"></div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-12 md:w-32"></div>
          </div>
          
          <h2 className="font-headline text-lg sm:text-xl md:text-4xl lg:text-5xl font-light tracking-[0.1em] md:tracking-[0.3em] uppercase text-gray-700 mb-2 md:mb-4">
            Mis XV Años
          </h2>
          
          <p className="font-body text-sm md:text-xl text-gray-600 italic">
            Una celebración única e inolvidable
          </p>
        </div>

        {/* Date and location cards */}
        <div className="space-y-3 md:space-y-6 mb-6 md:mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          {/* Date card */}
          <div className="glass-morphism rounded-3xl px-4 py-3 md:px-12 md:py-8 border-2 border-gray-300/30 hover:border-gray-400/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center gap-2 md:gap-4 mb-1 md:mb-3">
              <Star className="w-3 h-3 md:w-6 md:h-6 text-gray-600 animate-sparkle" />
              <p className="font-headline text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gradient">
                28 • 11 • 2025
              </p>
              <Star className="w-3 h-3 md:w-6 md:h-6 text-gray-600 animate-sparkle" />
            </div>
            <p className="font-body text-sm md:text-xl text-gray-600 tracking-wide">
              21:00 horas
            </p>
          </div>

          {/* Venue card */}
          <div className="glass-morphism rounded-3xl px-4 py-3 md:px-12 md:py-8 border-2 border-gray-300/30 hover:border-gray-400/40 transition-all duration-300 hover:scale-105">
            <p className="font-headline text-lg md:text-3xl text-gradient font-semibold mb-1 md:mb-2">
              La Sofía Eventos
            </p>
            <p className="font-body text-xs md:text-lg text-gray-600">
              Monte Grande, Buenos Aires
            </p>
          </div>
        </div>

        {/* Invitation message */}
        <div className="glass-morphism rounded-2xl px-4 py-3 md:px-12 md:py-8 border border-gray-300/30 mb-6 md:mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
          <p className="font-body text-sm md:text-xl text-gray-700 font-medium italic">
            ✨ Te invito a ser parte de esta noche mágica ✨
          </p>
        </div>

        {/* Decorative elements */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-in fade-in duration-1000 delay-900">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-sparkle"></div>
          <div className="w-3 h-3 bg-gray-500/70 rounded-full animate-floating"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-sparkle" style={{animationDelay: '0.5s'}}></div>
          <div className="w-4 h-4 bg-gray-600/60 rounded-full animate-floating" style={{animationDelay: '1s'}}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-sparkle"></div>
          <div className="w-3 h-3 bg-gray-500/70 rounded-full animate-floating" style={{animationDelay: '1.5s'}}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-sparkle" style={{animationDelay: '0.3s'}}></div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-in fade-in duration-1000 delay-1000">
        <div className="flex flex-col items-center gap-3">
          <p className="text-gray-600 text-sm font-body tracking-wide font-medium">Desliza para descubrir más</p>
          <div className="glass-morphism rounded-full p-4 border border-gray-300/30 animate-bounce">
            <ArrowDown className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-200/30 to-transparent z-10" />
    </section>
  )
}
