import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="https://placehold.co/1200x1200.png"
        alt="Morena Blanco"
        layout="fill"
        objectFit="cover"
        className="z-0"
        data-ai-hint="ethereal portrait silver"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center text-white animate-in fade-in slide-in-from-bottom-12 duration-1000">
        <h1 className="font-headline text-7xl md:text-9xl tracking-tighter">
          Morena
        </h1>
        <h2 className="mt-2 text-3xl md:text-5xl font-light tracking-widest uppercase">
          Mis XV Años
        </h2>
        <p className="mt-6 text-2xl md:text-3xl font-light">
          28.11.2025
        </p>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <ArrowDown className="h-8 w-8 text-white animate-bounce" />
      </div>
    </section>
  )
}
