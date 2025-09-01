import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { AudioPlayer } from '@/components/audio-player';

export const metadata: Metadata = {
  title: "Mis 15s - Morena Blanco",
  description: "Te invito a celebrar mis XV años. Una noche para brillar.",
  openGraph: {
    title: "Mis 15s - Morena Blanco",
    description: "Te invito a celebrar mis XV años. Una noche para brillar.",
    url: "quincemore.info",
    siteName: "Mis 15s - Morena Blanco",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mis 15s - Morena Blanco",
    description: "Te invito a celebrar mis XV años. Una noche para brillar.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        <AudioPlayer src="/music/Andy Grammer - Don't Give Up On Me [Official Video from the Five Feet Apart Film].mp3" />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
