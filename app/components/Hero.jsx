'use client';
import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

const slides = [
  {
    label: 'Nova Bloom',
    title: 'Nova Bloom is your trusted,\nfull-service digital &\nsoftware company.',
    description: 'From infancy to growth, we are your growth partners',
    image: '/home-slide-1-bg.webp',
  },
  {
    label: 'Build',
    title: 'Helping you build',
    description: 'We build cutting-edge custom digital solutions and software products to bring your vision to life.',
    image: '/help-build-iterate-img-updated.webp',
  },
  {
    label: 'Sell',
    title: 'Helping you sell',
    description: 'Empowering your ecommerce with scalable and high-performance platforms to boost sales.',
    image: '/Bigcommerce-logo-added.webp',
  },
  {
    label: 'Scale',
    title: 'Helping you scale',
    description: 'Accelerate growth through automation, AI, and enterprise integrations built for the future.',
    image: '/unlock-growth-potential-img.webp',
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full min-h-screen relative overflow-hidden antialiased">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* First slide full-width image */}
      {activeIndex === 0 && (
        <div className="absolute inset-0 z-15">
          <Image
            src={slides[0].image}
            alt={slides[0].label}
            fill
            className="w-full h-full object-cover transition-opacity duration-500"
            priority
          />
        </div>
      )}

      {/* Main content */}
      <div
        className={clsx(
          'relative z-20 max-w-screen-xl mx-auto px-4 sm:px-10 py-4 xs:py-6 sm:py-0', // Added top padding for small screens
          'flex flex-col justify-start sm:grid sm:grid-cols-2 sm:items-center min-h-[80vh] sm:min-h-screen' // Changed to justify-start and min-h-[80vh]
        )}
      >
        {/* Left text */}
        <div
          className={clsx(
            'text-white flex flex-col justify-start', // Align text to top
            activeIndex === 0 ? 'h-full sm:h-auto' : 'h-auto mt-0' // No top margin for slides 2–4
          )}
        >
          <h1
            className={clsx(
              'text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight whitespace-pre-line',
               activeIndex !== 0 ? 'text-gray-800' : 'mt-0 xs:mt-10',
              'px-4 sm:px-0'
            )}
          >
            {slides[activeIndex].title}
          </h1>
          <p
            className={clsx(
              'mt-1 xs:mt-2 sm:mt-6 text-sm xs:text-base sm:text-lg font-semibold px-4 sm:px-0',
              activeIndex !== 0 && 'sm:text-gray-700'
            )}
          >
            {slides[activeIndex].description}
          </p>
        </div>

        {/* Right image (for slides 2–4) */}
        {activeIndex !== 0 && (
          <div
            className={clsx(
              'relative w-full flex justify-center items-center z-20 mt-2 xs:mt-4 sm:mt-0', // Reduced margin significantly
              'h-[150px] xs:h-[180px] sm:h-[500px]' // Reduced height for small screens
            )}
          >
            <div className="relative w-full h-full max-w-[80%] xs:max-w-[70%] sm:max-w-full">
              <Image
                src={slides[activeIndex].image}
                alt={slides[activeIndex].label}
                fill
                className={clsx(
                  'object-contain transition-opacity duration-500',
                  'px-6 xs:px-8 sm:px-0'
                )}
                priority
              />
            </div>
          </div>
        )}
      </div>

      {/* Navigation dots with labels */}
      <div
        className={clsx(
          'absolute left-1/2 -translate-x-1/2 z-20 flex flex-wrap justify-center gap-x-2 xs:gap-x-3 sm:gap-x-6 gap-y-2',
          'bottom-6 xs:bottom-8 sm:bottom-12' // Adjusted to avoid overlap with content
        )}
      >
        {slides.map((slide, index) => (
          <button
            key={slide.label}
            onClick={() => setActiveIndex(index)}
            className="flex items-center space-x-1 text-xs xs:text-sm sm:text-base"
            aria-label={`Slide ${index + 1}: ${slide.label}`}
          >
            <span
              className={clsx(
                'h-2 w-2 xs:h-2.5 xs:w-2.5 sm:h-3 sm:w-3 rounded-full',
                index === 0 && index === activeIndex
                  ? 'bg-red-600'
                  : index === 1 && index === activeIndex
                  ? 'bg-yellow-600'
                  : index === 2 && index === activeIndex
                  ? 'bg-blue-600'
                  : index === 3 && index === activeIndex
                  ? 'bg-green-600'
                  : 'bg-gray-400'
              )}
            />
            <span
              className={clsx(
                'ml-1 font-extrabold text-xs xs:text-sm sm:text-base',
                index === activeIndex ? 'text-black' : 'text-gray-300'
              )}
            >
              {slide.label}
            </span>
          </button>
        ))}
      </div>

      {/* Bottom wave graphic */}
      <div className="absolute bottom-0 w-full z-10">
        <Image
          src="/homepage-bg.jpg"
          alt="Wave Overlay"
          width={1920}
          height={200}
          className="w-full h-auto object-cover object-bottom"
        />
      </div>
    </section>
  );
}