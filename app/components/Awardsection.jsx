'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

// Define arrays with metadata for better accessibility and management
const partners = [
  { src: '/aws-partner-logo.webp', alt: 'AWS Partner' },
  { src: '/oracle-netsuite.webp', alt: 'Oracle NetSuite' },
  { src: '/oracle-netsuite-commerce.webp', alt: 'Oracle NetSuite Commerce' },
  { src: '/aws-partner-logo.webp', alt: 'AWS Partner' },
  { src: '/silver-microsofe-1.webp', alt: 'Microsoft Silver Partner' },
  { src: '/gold-microsofe.webp', alt: 'Microsoft Gold Partner' },
];

const awards = [
  { src: '/award-2023-3.webp', alt: 'Award 2023' },
  { src: '/award-2024.webp', alt: 'Award 2024' },
  { src: '/award-2024-1.webp', alt: 'Award 2024 Secondary' },
  { src: '/award-2023.webp', alt: 'Award 2023 Primary' },
  { src: '/award-2021.webp', alt: 'Award 2021' },
];

// Reusable ScrollSection component
function ScrollSection({ items, title, scrollDirection }) {
  const scrollRef = useRef(null);

  // Pause/resume animation on hover
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleMouseEnter = () => {
      scrollContainer.style.animationPlayState = 'paused';
    };
    const handleMouseLeave = () => {
      scrollContainer.style.animationPlayState = 'running';
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    // Ensure animation starts running on mount
    scrollContainer.style.animationPlayState = 'running';

    return () => {
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">
        {title}
      </h2>
      <div className="relative w-full overflow-hidden">
        <div
          ref={scrollRef}
          className={`flex gap-6 sm:gap-10 w-[200%] ${
            scrollDirection === 'right-to-left'
              ? 'animate-scroll-right-to-left'
              : 'animate-scroll-left-to-right'
          }`}
        >
          {[...items, ...items].map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className="min-w-[120px] sm:min-w-[200px] h-16 sm:h-24 relative flex-shrink-0"
            >
              <Image
                src={item.src}
                alt={index < items.length ? item.alt : `${item.alt} (Repeat)`}
                fill
                sizes="(max-width: 640px) 120px, 200px"
                className="object-contain transition-transform duration-300 hover:scale-105"
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PartnersAwards() {
  return (
    <section className="w-full bg-gray-50 py-8 sm:py-16 space-y-12 overflow-hidden">
      <style jsx global>{`
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
          animation: scroll-right-to-left 15s linear infinite;
        }
        .animate-scroll-left-to-right {
          animation: scroll-left-to-right 15s linear infinite;
        }
        @media (min-width: 640px) {
          .animate-scroll-right-to-left {
            animation-duration: 20s;
          }
          .animate-scroll-left-to-right {
            animation-duration: 20s;
          }
        }
      `}</style>

      <ScrollSection items={partners} title="Our Partners" scrollDirection="right-to-left" />
      <ScrollSection items={awards} title="Our Awards" scrollDirection="left-to-right" />
    </section>
  )}