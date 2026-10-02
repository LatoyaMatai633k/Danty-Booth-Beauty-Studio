'use client';

import { useEffect, useRef } from 'react';

const locations = [
  { city: 'Vryheid', coordinates: [-27.7695, 30.7917] },
  { city: 'Ladysmith', coordinates: [-28.5597, 29.7808] },
  { city: 'Newcastle', coordinates: [-27.7576, 29.9318] },
  { city: 'Johannesburg', coordinates: [-26.2041, 28.0473] },
  { city: 'Durban', coordinates: [-29.8587, 31.0218] },
];

type LeafletMap = { remove: () => void; fitBounds: (bounds: unknown, options?: unknown) => void };
type LeafletApi = {
  map: (element: HTMLDivElement, options: unknown) => LeafletMap;
  tileLayer: (url: string, options: unknown) => { addTo: (map: LeafletMap) => void };
  divIcon: (options: unknown) => unknown;
  marker: (coordinates: number[], options: unknown) => { addTo: (map: LeafletMap) => { bindTooltip: (label: string, options: unknown) => void } };
  latLngBounds: (coordinates: number[][]) => unknown;
};

declare global {
  interface Window { L?: LeafletApi }
}

export default function LocationMap() {
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: LeafletMap | undefined;
    const stylesheetId = 'leaflet-stylesheet';
    const scriptId = 'leaflet-script';

    const initialiseMap = () => {
      if (!mapElement.current || !window.L || map) return;
      const leaflet = window.L;
      map = leaflet.map(mapElement.current, { scrollWheelZoom: false, zoomControl: true });
      leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors', maxZoom: 18,
      }).addTo(map);
      const pin = leaflet.divIcon({
        className: 'dainty-map-pin',
        html: '<span aria-hidden="true"></span>',
        iconSize: [18, 18], iconAnchor: [9, 9], tooltipAnchor: [0, -12],
      });
      locations.forEach((location) => leaflet.marker(location.coordinates, { icon: pin }).addTo(map!).bindTooltip(location.city, { direction: 'top', offset: [0, -6] }));
      map.fitBounds(leaflet.latLngBounds(locations.map((location) => location.coordinates)), { padding: [42, 42], maxZoom: 7 });
    };

    if (!document.getElementById(stylesheetId)) {
      const stylesheet = document.createElement('link');
      stylesheet.id = stylesheetId;
      stylesheet.rel = 'stylesheet';
      stylesheet.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(stylesheet);
    }
    if (window.L) initialiseMap();
    else {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = initialiseMap;
      document.body.appendChild(script);
    }
    return () => map?.remove();
  }, []);

  return <div ref={mapElement} className="location-map" aria-label="Map of Dainty Booth pop up locations in South Africa" />;
}
