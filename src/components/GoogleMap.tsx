'use client';

import { useEffect, useRef } from 'react';

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeMap = () => {
      if (mapRef.current && window.google) {
        new window.google.maps.Map(mapRef.current, {
          center: { lat: -23.55052, lng: -46.633308 },
          zoom: 12,
        });
      }
    };

    // Verifica se o script do Google Maps já foi carregado
    if (window.google) {
      initializeMap();
    } else {
      // Adiciona um event listener para inicializar o mapa quando o script for carregado
      window.addEventListener('google-maps-loaded', initializeMap);
    }

    return () => {
      window.removeEventListener('google-maps-loaded', initializeMap);
    };
  }, []);

  return <div ref={mapRef} className="h-96 w-full"></div>;
};

export default GoogleMap;
