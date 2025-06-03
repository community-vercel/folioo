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
  <div className="overflow-hidden whitespace-nowrap py-6">
    <div
      className={`flex gap-12 ${
        direction === "left" ? "scroll-left" : "scroll-right"
      }`}
    >
      {[...logos, ...logos].map((logo, idx) => (
        <div
          key={idx}
          className="w-48 h-28 flex items-center justify-center shrink-0 bg-white rounded shadow-sm"
        >
          <Image
            src={logo}
            alt={`Logo ${logo}`}
            width={220}
            height={80}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  </div>
);

export default function ScrollingLogos() {
  return (
    <section className="bg-[#f5f5f5] py-14">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-left text-5xl font-bold text-gray-800 mb-3">
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
            animation: scrollLeft 25s linear infinite;
          }

          .scroll-right {
            animation: scrollRight 25s linear infinite;
          }

          .scroll-left:hover,
          .scroll-right:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );}