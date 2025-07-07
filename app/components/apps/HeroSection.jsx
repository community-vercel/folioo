'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AppHeroSections() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#0b1736] to-[#1a3558] overflow-hidden">
      <div className="max-w-full mx-auto flex flex-col lg:flex-row items-center justify-center">
        {/* Full-width Background with Overlay Content */}
        <div className="relative w-full h-[650px]  overflow-hidden shadow-2xl animate-fade-in">
          {/* Background Image */}
          <Image
            src="/salesforce/unnamed.webp"
            alt="App Development Innovation"
            fill
            className="object-cover"
            // hover:scale-105
            // transition-transform
            duration-700
            priority
          />

          {/* Overlay Content */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center text-white bg-gradient-to-t from-black/60 to-transparent px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold  bg-clip-text animate-slide-in">
              Innovate with <br />
              <span className="">Custom App Solutions</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl animate-slide-in delay-100">
              Elevate your business with Novabloom’s bespoke mobile and web applications. From intuitive user interfaces to robust, scalable platforms, our solutions drive engagement, streamline operations, and fuel unprecedented growth.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-slide-in delay-200">
              <button
                className="bg-[#446f70] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Start Your App Journey →
              </button>
              <Link href="/contact">
              <button className=" bg-[#446f70]   hover:bg-[#446f70]  hover:text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 transition-all duration-300">
                Book a Free Consultation
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}