'use client';

import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import Head from 'next/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.onload = () => {
      window.dispatchEvent(new Event('google-maps-loaded'));
    };
    document.head.appendChild(script);
  }, []);

  return (
    <html lang="pt-br">
      <Head>
        <title>Mapa de Ciclovias de Cabo Frio/RJ</title>
        <meta name="description" content="Mapa personalizado das ciclovias do município." />
      </Head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
