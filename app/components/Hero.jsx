
'use client';
import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

const slides = [
  {
    label: 'Folio3',
    title: 'Folio3 is your trusted,\nfull-service digital &\nsoftware company.',
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
    <section className="w-full h-screen relative overflow-hidden antialiased">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* First slide full-width image */}
      {activeIndex === 0 && (
        <div className="absolute h-188 inset-0 z-15">
          <Image
            src={slides[0].image}
            alt={slides[0].label}
            fill
            className="w-full  transition-opacity duration-500"
            priority
          />
        </div>
      )}

      {/* Main content */}
      <div className="relative z-20 max-w-screen-xl mx-auto h-full px-10 grid grid-cols-2 items-center">
        {/* Left text */}
        {activeIndex === 0 && (
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight whitespace-pre-line">
              {slides[activeIndex].title}
            </h1>
            <p className="mt-6 text-lg font-semibold">
              {slides[activeIndex].description}
            </p>
          </div>
        )}
        {activeIndex !== 0 && (
          <div className="text-black">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight whitespace-pre-line">
              {slides[activeIndex].title}
            </h1>
            <p className="mt-6 text-lg font-semibold">
              {slides[activeIndex].description}
            </p>
          </div>
        )}
        {/* Right image (for slides other than the first) */}
        {activeIndex !== 0 && (
          <div className="relative h-[400px] w-full flex justify-center items-center z-20">
            <Image
              src={slides[activeIndex].image}
              alt={slides[activeIndex].label}
              fill
              className={clsx(
                'object-contain',
                'transition-opacity duration-500'
              )}
              priority
            />
          </div>
        )}
      </div>

      {/* Navigation dots with labels */}
      <div
        className={clsx(
          'absolute left-1/2 -translate-x-1/2 z-20 flex space-x-6',
          activeIndex === 0 ? 'bottom-10' : 'bottom-10'
        )}
      >
        {slides.map((slide, index) => (
          <button
            key={slide.label}
            onClick={() => setActiveIndex(index)}
            className="flex items-center space-x-1 text-md"
          >
            <span
              className={clsx(
                'h-3 w-3 rounded-full',
                index===0 &&index === activeIndex ? 'bg-red-600' :    index===1 &&index === activeIndex ? 'bg-yellow-600':    index===2 &&index === activeIndex ? 'bg-blue-600':   index===3 &&index === activeIndex ? 'bg-green-600': 'bg-gray-400'
              )}
            />
            <span
              className={clsx(
                'ml-1 font-extrabold',
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
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

