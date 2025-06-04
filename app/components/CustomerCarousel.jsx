'use client';
import Image from "next/image";

const row1 = [
  "/logos/angus-logo.webp",
  "/logos/cactus-feeders-logo.webp",
  "/logos/renewed-logo.webp",
  "/logos/angus-media-logo.webp",
  "/logos/beauty-blender-logo.png",
];

const row2 = [
  "/logos/galvmed-logo.png",
  "/logos/GroAlliance-logo.webp",
  "/logos/hanor-logo.png",
  "/logos/higher-education-logo.webp",
  "/logos/huvepharma-logo.png",
];

const row3 = [
  "/logos/ICIA-logo.webp",
  "/logos/parr-logo.png",
  "/logos/philaz-cofee-logo.png",
  "/logos/progressive-beef-logo-1.png",
  "/logos/growers.png",
];

const LogoRow = ({ logos, direction }) => (
  <div className="overflow-hidden whitespace-nowrap py-4 sm:py-6">
    <div
      className={`flex gap-6 sm:gap-12 ${
        direction === "left" ? "scroll-left" : "scroll-right"
      }`}
    >
      {[...logos, ...logos].map((logo, idx) => (
        <div
          key={idx}
          className="w-32 h-16 sm:w-48 sm:h-28 flex items-center justify-center shrink-0 bg-white rounded shadow-sm"
        >
          <Image
            src={logo}
            alt={`Logo ${logo}`}
            width={140}
            height={50}
            className="object-contain sm:w-[220px] sm:h-[80px]"
          />
        </div>
      ))}
    </div>
  </div>
);

export default function ScrollingLogos() {
  return (
    <section className="bg-[#f5f5f5] py-8 sm:py-14">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
        <h1 className="text-left text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 sm:mb-3">
          Our portfolio of happy customers
        </h1>

        <LogoRow logos={row1} direction="left" />
        <LogoRow logos={row2} direction="right" />
        <LogoRow logos={row3} direction="left" />

        <style jsx global>{`
          @keyframes scrollLeft {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes scrollRight {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }

          .scroll-left {
            animation: scrollLeft 15s linear infinite;
          }

          .scroll-right {
            animation: scrollRight 15s linear infinite;
          }

          @media (min-width: 640px) {
            .scroll-left {
              animation-duration: 25s;
            }
            .scroll-right {
              animation-duration: 25s;
            }
          }

          
          .scroll-left:hover,
          .scroll-right:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
}