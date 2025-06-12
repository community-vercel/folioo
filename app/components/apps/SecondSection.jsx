'use client';
import { useState } from 'react';

export default function SecondSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 7; // Number of logos

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div>
      <section className="bg-gray-100 py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-black mb-4 text-center lg:text-left lg:ml-10">
            We develop Automotive mobility solutions for great<br /> brands
          </h2>
          {/* Horizontal Line */}
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>
          {/* Slider Container */}
          <div className="relative max-w-5xl">
            <div className="overflow-hidden w-full px-4 sm:px-10 lg:px-2">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${(currentSlide * 100) / totalSlides}%)` }}
              >
                <div className="flex shrink-0 w-[700%] sm:w-[350%] lg:w-[200%] space-x-6 sm:space-x-12 lg:space-x-10">
                  <img src="/assets/brand_sony.png" alt="Sony" className="h-8 sm:h-10 lg:h-12" />
                  <img src="/assets/brand_square-trade.png" alt="Square Trade" className="h-8 sm:h-10 lg:h-12" />
                  <img src="/assets/brand_standard-chartered.png" alt="Standard Chartered" className="h-8 sm:h-10 lg:h-12" />
                  <img src="/assets/brand_winkk.png" alt="WINKK" className="h-8 sm:h-10 lg:h-12" />
                  <img src="/assets/brand_zoetis.png" alt="Zoetis" className="h-8 sm:h-10 lg:h-12" />
                  <img src="/assets/brand_cisco.png" alt="Cisco" className="h-8 sm:h-10 lg:h-12" />
                  <img src="/assets/brand_jaguar.png" alt="Jaguar" className="h-8 sm:h-10 lg:h-12" />

                  <img src="/assets/brand_sony.png" alt="Sony" className="h-8 sm:h-10 lg:h-12" />
                  <img src="/assets/brand_square-trade.png" alt="Square Trade" className="h-8 sm:h-10 lg:h-12" />
                  <img src="/assets/brand_standard-chartered.png" alt="Standard Chartered" className="h-8 sm:h-10 lg:h-12" />
                  <img src="/assets/brand_winkk.png" alt="WINKK" className="h-8 sm:h-10 lg:h-12" />
                  <img src="/assets/brand_zoetis.png" alt="Zoetis" className="h-8 sm:h-10 lg:h-12" />
                  <img src="/assets/brand_cisco.png" alt="Cisco" className="h-8 sm:h-10 lg:h-12" />
                  <img src="/assets/brand_jaguar.png" alt="Jaguar" className="h-8 sm:h-10 lg:h-12" />
                </div>

                
              </div>
            </div>
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-1 sm:left-4 lg:left-1 top-1/2 transform -translate-y-1/2 bg-white p-1 sm:p-2 rounded-sm hover:bg-gray-400"
            >
              <svg
                className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 lg:right-1 top-1/2 transform -translate-y-1/2 bg-white p-1 sm:p-2 rounded-sm hover:bg-gray-400"
            >
              <svg
                className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      {/* Subheading and Text */}
    <div className="bg-white py-8 sm:py-12 lg:pt-13">
        <h3 className="text-xl sm:text-2xl lg:text-[36px] font-bold text-black mb-4 text-center sm:text-center lg:text-left lg:ml-46 lg:mx-auto lg:max-w-4xl">
          Slick Automotive Mobility Solutions Designed for Excellence
        </h3>
        {/* Horizontal Line */}
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>
        <div className="text-left max-w-8xl mx-auto px-4 sm:px-10">
          <p className="text-sm sm:text-base lg:text-base text-black leading-relaxed lg:pl-36 lg:pr-64">
            Our services are designed from scratch to help businesses solve key problems, identify underlying issues, and drive innovation with digital disruption. Organizations leverage technology and mobile applications to keep up with the next consumer shift; we help our clients navigate through a volatile business environment and create superior driving experiences.
          </p>
          <p className="text-sm sm:text-base lg:text-base text-black leading-relaxed mt-4 lg:pl-36 lg:pr-64">
            We help manufacturers break through barriers and create truly connected cars leveraging IoT and the latest in mobile technology. Our services are aimed at transforming vehicles into digital hubs and creating apps that evolve the whole driving experience, ultimately leading to smarter and safer driving experiences.
          </p>
        </div>
      </div>
    </div>
  );
}