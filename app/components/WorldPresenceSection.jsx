'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const locations = [
  {
    name: 'United States',
    image: '/locations/usa2.jpg',
    address: (
      <>
        Nova Bloom 116-33,<br />
        135th Street ,<br />
        South Ozone Park,NY 11420<br />
        <strong>Tel:</strong>+1 (347) 716-9944
      </>
    ),
  },
  {
    name: 'Canada',
    image: '/locations/canada.jpg',
    address: (
      <>
        Nova Bloom FZ LLC Dubai, UAE – Dubai Internet City,<br />
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
       Export House, ,<br />
       Cawsey Way, Woking, Surrey, GU21 6QX,<br />
        Surrey<br />
        <strong>Tel:</strong> +971 (04) 575 7041
      </>
    ),
  },
  {
    name: 'Pakistan',
    image: '/locations/Paskistan.jpg',
    address: (
      <>
        Sharplogician ,<br />
        4th Floor, Building Number 153,<br />
        Civic Center Phase 4 Islamabad<br />
        <strong>Tel:</strong> +971 (04) 575 7041
      </>
    ),
  },
];

export default function WorldPresenceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-white py-0 relative overflow-hidden" ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={titleVariants}
        className="text-center mb-8"
      >
        <h2   className="text-5xl sm:text-5xl md:text-5xl font-extrabold text-navy-900 text-center mb-8 sm:mb-16 lg:mb-8">
          Our Global Presence
        </h2>
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-600 font-medium max-w-6xl mx-auto">
          Nova Bloom connects with clients worldwide, delivering innovative software and AI solutions from our offices across four continents.
        </p>
      </motion.div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {locations.map((location, idx) => (
            <motion.div
              key={location.name}
              className="relative h-56 sm:h-72 group overflow-hidden rounded-2xl shadow-xl"
              variants={cardVariants}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              transition={{ delay: idx * 0.1 }}
            >
              <Image
                src={location.image}
                alt={`${location.name} location`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent transition-all duration-300 group-hover:from-black/80" />

              {/* Country Name */}
              <div className="absolute bottom-4 left-4 right-4 text-white font-bold text-lg z-10 transition-opacity duration-300 group-hover:opacity-0">
                {location.name}
              </div>

              {/* Address on Hover */}
              <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4 text-sm sm:text-base z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>{location.address}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Globe */}
      <div className="absolute right-0 top-0 bottom-0 -mb-16 w-1/2 z-0 opacity-10 pointer-events-none hidden md:block">
        <Image
          src="/locations/globe.gif"
          alt="globe background"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}