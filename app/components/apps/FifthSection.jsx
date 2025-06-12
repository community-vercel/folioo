'use client';
import React, { useState, useRef, useEffect } from 'react';

const FifthSection = () => {
  const slides = [
    {
      title: "Jaguar",
      description: "A one-touch conference calling app to use with Jaguar Incontrol Apps.",
      buttonText: "Learn More",
      imageUrl: "/assets/meeting-mogul-casestudy.png",
    },
    {
      title: "App for Automotive Giant",
      description: "Mobile app integration with Samsung SmartThings platform for a German automotive giant.",
      buttonText: "Learn More",
      imageUrl: "/assets/global-automobile-casestudy.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSlideClick = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    if (clickX < rect.width / 2) {
      handlePrev();
    } else {
      handleNext();
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    section.addEventListener('click', handleSlideClick);
    return () => section.removeEventListener('click', handleSlideClick);
  }, []);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.classList.remove('animate-slide-in');
      void textRef.current.offsetWidth;
      setTimeout(() => {
        textRef.current.classList.add('animate-slide-in');
      }, 10);
    }
  }, [currentSlide]);

  return (
    <section
      ref={sectionRef}
      className="bg-gray-200 text-black py-8 sm:py-10 lg:py-16 px-4 sm:px-6 lg:px-10 relative"
      style={{ minHeight: '300px' }}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left lg:ml-10">
        Success Stories
      </h2>
      <div className="w-16 h-1 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
      <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between max-w-6xl mx-auto transition-all duration-500 ease-in-out gap-6 sm:gap-8">
        <div
          ref={textRef}
          className="w-full md:w-1/2 pr-0 md:pr-4 lg:pr-8 text-center md:text-left"
          style={{ transform: 'translateX(-100%)', opacity: 0 }}
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">
            {slides[currentSlide].title}
          </h3>
          <p className="text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">
            {slides[currentSlide].description}
          </p>
          <button className="bg-blue-600 text-white px-4 sm:px-5 lg:px-6 py-1.5 sm:py-2 lg:py-2 rounded hover:bg-blue-700 text-xs sm:text-sm lg:text-base">
            {slides[currentSlide].buttonText}
          </button>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="flex items-center justify-center">
            <img
              key={currentSlide}
              src={slides[currentSlide].imageUrl}
              alt={slides[currentSlide].title}
              className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] object-contain"
            />
          </div>
          <div className="flex justify-center mt-3 sm:mt-4 space-x-2">
            <button
              onClick={handlePrev}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer ${currentSlide === 0 ? 'bg-blue-600' : 'bg-white hover:bg-blue-800'}`}
            ></button>
            <button
              onClick={handleNext}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer ${currentSlide === 1 ? 'bg-blue-600' : 'bg-white hover:bg-blue-800'}`}
            ></button>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes slideIn {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { transform: translateX(0); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in {
          animation: slideIn 1s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default FifthSection;