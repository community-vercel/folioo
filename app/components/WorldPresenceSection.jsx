import Image from 'next/image';

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
  return (
    <section className="bg-white py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-10">
          Take on the <br className="sm:hidden" /> world with us
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {locations.map((location) => (
            <div
              key={location.name}
              className="relative h-64 group overflow-hidden rounded shadow-lg"
            >
              <Image
                src={location.image}
                alt={location.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dim background */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition duration-300" />

              {/* Name */}
              <div className="absolute bottom-4 left-4 right-4 text-white font-medium text-lg z-10 transition-opacity duration-300 group-hover:opacity-0">
                {location.name}
              </div>

              {/* Address on hover */}
              {location.address && (
                <div className="absolute inset-0 text-white z-20 flex items-center justify-center text-sm px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>{location.address}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Optional globe */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 z-0 opacity-10 pointer-events-none hidden md:block">
        <Image
          src="/locations/globe-overlay.png"
          alt="globe background"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
}