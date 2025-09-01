import { Hero } from '@/components/sections/hero';
import { Countdown } from '@/components/sections/countdown';
import { Invitation } from '@/components/sections/invitation';
import { Location } from '@/components/sections/location';
import { DressCode } from '@/components/sections/dresscode';
import { Playlist } from '@/components/sections/playlist';
import { Gifting } from '@/components/sections/gifting';
import { Rsvp } from '@/components/sections/rsvp';
import { Footer } from '@/components/sections/footer';
import { SharePhotos } from '@/components/sections/share-photos';

export default function Home() {
  return (
    <main className="overflow-x-hidden relative">
      {/* Modern animated background with silver tones */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 opacity-95"></div>
      
      {/* Floating particles with silver theme */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-400/30 rounded-full animate-floating"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-gray-500/25 rounded-full animate-floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-gray-600/35 rounded-full animate-sparkle"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-gray-400/30 rounded-full animate-floating" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 right-1/5 w-1 h-1 bg-gray-500/40 rounded-full animate-sparkle" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Smooth scroll sections with modern dividers */}
      <Hero />
      
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent via-gray-200/10 to-transparent"></div>
        <Countdown />
      </div>
      
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-400/40 to-transparent"></div>
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-100/10 to-transparent"></div>
        <Invitation />
      </div>
      
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-400/40 to-transparent"></div>
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-100/10 to-transparent"></div>
        <Location />
      </div>
      
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-400/40 to-transparent"></div>
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-100/10 to-transparent"></div>
        <DressCode />
      </div>
      
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-400/40 to-transparent"></div>
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-100/10 to-transparent"></div>
        <Playlist />
      </div>
      
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-400/40 to-transparent"></div>
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-100/10 to-transparent"></div>
        <Gifting />
      </div>
      
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-400/40 to-transparent"></div>
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-100/10 to-transparent"></div>
        <Rsvp />
      </div>
      
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-400/40 to-transparent"></div>
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-100/10 to-transparent"></div>
        <SharePhotos />
      </div>
      
      <Footer />
    </main>
  );
}
