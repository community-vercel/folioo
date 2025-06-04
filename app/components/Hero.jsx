'use client';
import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

const slides = [
  {
    label: 'Nova Bloom',
    title: 'Nova Bloom is your trusted,\nfull-service digital &\nsoftware company.',
    description: 'From  infancy to growth, we are your growth partners',
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
    <section className="w-full h-screen relative overflow-hidden antialiased">
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
          'relative z-20 max-w-screen-xl mx-auto h-full px-4 sm:px-10',
          'grid grid-cols-1 sm:grid-cols-2 items-center'
        )}
      >
        {/* Left text */}
        <div className="text-white">
          <h1
            className={clsx(
              'text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight whitespace-pre-line',
              'px-4 sm:px-0',
              // Change text color for slides 2-4 on small screens
              activeIndex !== 0 && 'text-gray-800'
            )}
          >
            {slides[activeIndex].title}
          </h1>
          <p 
            className={clsx(
              "mt-4 sm:mt-6 text-base sm:text-lg font-semibold px-4 sm:px-0",
              // Change text color for slides 2-4 on small screens
              activeIndex !== 0 && 'text-gray-700'
            )}
          >
            {slides[activeIndex].description}
          </p>
        </div>
        {/* Right image (for slides other than the first) */}
        {activeIndex !== 0 && (
        <div
className={clsx(
  'relative w-full flex justify-center items-center z-20 mt-6 sm:mt-0',
  'h-[200px] sm:h-[500px]' // Mobile first - base style comes before responsive variant
)}
>
            <Image
              src={slides[activeIndex].image}
              alt={slides[activeIndex].label}
              fill
              className={clsx(
                'object-contain sm:object-contain', // Maintain object-contain for consistency
                'transition-opacity duration-500',
                'px-4' // Add padding on small screens for better spacing
              )}
              priority
            />
          </div>
        )}
      </div>

      {/* Navigation dots with labels */}
      <div
        className={clsx(
          'absolute left-1/2 -translate-x-1/2 z-20 flex flex-wrap justify-center space-x-3 sm:space-x-6',
          'bottom-6 sm:bottom-10'
        )}
      >
        {slides.map((slide, index) => (
          <button
            key={slide.label}
            onClick={() => setActiveIndex(index)}
            className="flex items-center space-x-1 text-sm sm:text-md"
          >
            <span
              className={clsx(
                'h-2 w-2 sm:h-3 sm:w-3 rounded-full',
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
                'ml-1 font-extrabold text-sm sm:text-base',
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
          className="w-full h-auto object-cover"
        />
      </div>
    </section>)}