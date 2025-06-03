'use client';
import Image from 'next/image';
import { useState } from 'react';

const locations = [
  {
    name: 'United States',
    image: '/locations/usa.jpg',
    address: (
      <>
        Folio3 FZ LLC Dubai, UAE – Dubai Internet City,<br />
        1st Floor, Building Number 14,<br />
        Premises 105, Dubai, UAE<br />
        <strong>Tel:</strong> +971 (04) 575 7041
      </>
    ),
  },
  {
    name: 'Canada',
    image: '/locations/canada.jpg',
    address: (
      <>
        Folio3 FZ LLC Dubai, UAE – Dubai Internet City,<br />
        1st Floor, Building Number 14,<br />
        Premises 105, Dubai, UAE<br />
        <strong>Tel:</strong> +971 (04) 575 7041
      </>
    ),
  },
  {
    name: 'United Kingdom',
    image: '/locations/united-kingdom-new.jpg',
    address: (
      <>
        Folio3 FZ LLC Dubai, UAE – Dubai Internet City,<br />
        1st Floor, Building Number 14,<br />
        Premises 105, Dubai, UAE<br />
        <strong>Tel:</strong> +971 (04) 575 7041
      </>
    ),
  },
  {
    name: 'UAE',
    image: '/locations/UAE.jpg',
    address: (
      <>
        Folio3 FZ LLC Dubai, UAE – Dubai Internet City,<br />
        1st Floor, Building Number 14,<br />
        Premises 105, Dubai, UAE<br />
        <strong>Tel:</strong> +971 (04) 575 7041
      </>
    ),
  },
  {
    name: 'Australia',
    image: '/locations/australia-new.jpg',
    address: (
      <>
        Folio3 FZ LLC Dubai, UAE – Dubai Internet City,<br />
        1st Floor, Building Number 14,<br />
        Premises 105, Dubai, UAE<br />
        <strong>Tel:</strong> +971 (04) 575 7041
      </>
    ),
  },
  {
    name: 'Mexico',
    image: '/locations/Mexico.jpg',
    address: (
      <>
        Folio3 FZ LLC Dubai, UAE – Dubai Internet City,<br />
        1st Floor, Building Number 14,<br />
        Premises 105, Dubai, UAE<br />
        <strong>Tel:</strong> +971 (04) 575 7041
      </>
    ),
  },
  {
    name: 'Bulgaria',
    image: '/locations/bulgaria-image-2.webp',
    address: (
      <>
        Folio3 FZ LLC Dubai, UAE – Dubai Internet City,<br />
        1st Floor, Building Number 14,<br />
        Premises 105, Dubai, UAE<br />
        <strong>Tel:</strong> +971 (04) 575 7041
      </>
    ),
  },
  {
    name: 'Pakistan',
    image: '/locations/Paskistan.jpg',
    address: (
      <>
        Folio3 FZ LLC Dubai, UAE – Dubai Internet City,<br />
        1st Floor, Building Number 14,<br />
        Premises 105, Dubai, UAE<br />
        <strong>Tel:</strong> +971 (04) 575 7041
      </>
    ),
  },
];

export default function WorldPresenceSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-white py-8 sm:py-16 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:mb-10">
          Take on the <br className="sm:hidden" /> world with us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {locations.map((location, idx) => (
            <div
              key={location.name}
              className="relative h-48 sm:h-64 group overflow-hidden rounded shadow-lg"
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            >
              <Image
                src={location.image}
                alt={`${location.name} location`}
                fill
                className="object-cover transition-transform duration-500 sm:group-hover:scale-105"
              />

              {/* Dim background */}
              <div
                className={`absolute inset-0 bg-black/40 ${
                  activeIndex === idx ? 'bg-black/70' : 'sm:group-hover:bg-black/70'
                } transition duration-300`}
              />

              {/* Name */}
              <div
                className={`absolute bottom-4 left-4 right-4 text-white font-medium text-base sm:text-lg z-10 transition-opacity duration-300 ${
                  activeIndex === idx ? 'opacity-0' : 'sm:group-hover:opacity-0'
                }`}
              >
                {location.name}
              </div>

              {/* Address on hover/tap */}
              {location.address && (
                <div
                  className={`absolute inset-0 text-white z-20 flex items-center justify-center text-xs sm:text-sm px-2 sm:px-4 text-center ${
                    activeIndex === idx ? 'opacity-100' : 'opacity-0 sm:group-hover:opacity-100'
                  } transition-opacity duration-300`}
                >
                  <div>{location.address}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Optional globe */}
      <div className="absolute right-0 top-0 bottom-0 -mb-10 w-1/2 z-0 opacity-10 pointer-events-none hidden md:block">
        <Image
          src="/locations/globe.gif"
          alt="globe background"
          fill
          className="object-contain"
        />
      </div>
    </section>
  )}