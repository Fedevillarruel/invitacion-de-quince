import { Hero } from '@/components/sections/hero';
import { Countdown } from '@/components/sections/countdown';
import { Invitation } from '@/components/sections/invitation';
import { Location } from '@/components/sections/location';
import { DressCode } from '@/components/sections/dresscode';
import { Playlist } from '@/components/sections/playlist';
import { Gifting } from '@/components/sections/gifting';
import { Rsvp } from '@/components/sections/rsvp';
import { Footer } from '@/components/sections/footer';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main>
      <Hero />
      <Countdown />
      <Invitation />
      <Separator className="my-8 bg-accent/50" />
      <Location />
      <Separator className="my-8 bg-accent/50" />
      <DressCode />
      <Separator className="my-8 bg-accent/50" />
      <Playlist />
      <Separator className="my-8 bg-accent/50" />
      <Gifting />
      <Separator className="my-8 bg-accent/50" />
      <Rsvp />
      <Footer />
    </main>
  );
}
