'use client';
import Image from 'next/image';

const partners = [
  '/aws-partner-logo.webp',
  '/oracle-netsuite.webp',
  '/oracle-netsuite-commerce.webp',
  '/aws-partner-logo.webp',
  '/silver-microsofe-1.webp',
  '/gold-microsofe.webp',
];

const awards = [
  '/award-2023-3.webp',
  '/award-2024.webp',
  '/award-2024-1.webp',
  '/award-2023.webp',
  '/award-2021.webp',
];

export default function PartnersAwards() {
  return (
    <section className="w-full bg-white py-16 space-y-12 overflow-hidden">
      <style jsx>{`
        @keyframes scroll-right-to-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-left-to-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-right-to-left {
          animation: scroll-right-to-left 20s linear infinite;
        }
        .animate-scroll-left-to-right {
          animation: scroll-left-to-right 20s linear infinite;
        }
      `}</style>

      {/* Partners (scroll right to left) */}
      <div className="w-fixed max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-6">Partners</h2>
        <div className="relative w-full overflow-x-hidden">
          <div className="flex animate-scroll-right-to-left gap-10 w-max">
            {partners.map((src, index) => (
              <div key={index} className="min-w-[330px] h-24 relative">
                <Image
                  src={src}
                  alt={`Partner ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
            {/* Repeat for seamless scroll */}
            {partners.map((src, index) => (
              <div key={`repeat-${index}`} className="min-w-[300px] h-16 relative">
                <Image
                  src={src}
                  alt={`Partner Repeat ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Awards (scroll left to right) */}
      <div className="w-fixed max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-6">Awards</h2>
        <div className="relative w-full overflow-x-hidden">
          <div className="flex animate-scroll-left-to-right gap-10 w-max">
            {awards.map((src, index) => (
              <div key={index} className="min-w-[330px] h-32 relative">
                <Image
                  src={src}
                  alt={`Award ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
            {/* Repeat for seamless scroll */}
            {awards.map((src, index) => (
              <div key={`repeat-${index}`} className="min-w-[300px] h-24 relative">
                <Image
                  src={src}
                  alt={`Award Repeat ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}