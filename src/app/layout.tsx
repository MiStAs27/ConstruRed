import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { AppLayout } from '@/components/app-layout';

export const metadata: Metadata = {
  title: 'TechConnect | Red de Profesionales Certificados',
  description: 'La plataforma líder para conectar clientes con expertos certificados en tecnología y construcción.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased selection:bg-primary/10">
        <AppLayout>{children}</AppLayout>
        <Toaster />
      </body>
    </html>
  );
}