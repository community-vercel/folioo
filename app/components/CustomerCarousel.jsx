"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const row1 = [
  "/logos/angus-logo.webp",
  "/logos/cactus-feeders-logo.webp",
  "/logos/renewed-logo.webp",
  "/logos/angus-media-logo.webp",
  "/logos/beauty-blender-logo.png",
];const row2 = [
  "/logos/galvmed-logo.png",
  "/logos/GroAlliance-logo.webp",
  "/logos/hanor-logo.png",
  "/logos/higher-education-logo.webp",
  "/logos/huvepharma-logo.png",
];const row3 = [
  "/logos/ICIA-logo.webp",
  "/logos/parr-logo.png",
  "/logos/philaz-cofee-logo.png",
  "/logos/progressive-beef-logo-1.png",
  "/logos/growers.png",
];


const LogoRow = ({ logos, direction, isInView }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className="overflow-hidden whitespace-nowrap py-4 sm:py-6"
    >
      <div
        className={`flex gap-6 sm:gap-12 ${
          direction === "left" ? "scroll-left" : "scroll-right"
        }`}
      >
        {[...logos, ...logos].map((logo, idx) => (
          <motion.div
            key={idx}
            className="w-32 h-16 sm:w-40 sm:h-20 lg:w-48 lg:h-24 flex items-center justify-center shrink-0 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            role="img"
            aria-label={`Client logo ${logo.split("/").pop().replace(".webp", "")}`}
          >
            <Image
              src={logo}
              alt=""
              width={120}
              height={40}
              className="object-contain w-[100px] h-[30px] sm:w-[120px] sm:h-[40px] lg:w-[140px] lg:h-[50px]"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default function ScrollingLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants for heading
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-16" ref={ref}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
  className="text-5xl sm:text-5xl md:text-5xl font-extrabold text-navy-900 text-center mb-8 sm:mb-16 lg:mb-8">     Our Trusted Clients
        </motion.h1>

        <LogoRow logos={row1} direction="left" isInView={isInView} />
        <LogoRow logos={row2} direction="right" isInView={isInView} />
        <LogoRow logos={row3} direction="left" isInView={isInView} />

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
            animation: scrollLeft 20s linear infinite;
          }

          .scroll-right {
            animation: scrollRight 20s linear infinite;
          }

          @media (min-width: 640px) {
            .scroll-left {
              animation-duration: 30s;
            }
            .scroll-right {
              animation-duration: 30s;
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