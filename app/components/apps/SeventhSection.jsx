'use client'
import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Nova Bloom has developed our award winning cross platform app on the Sencha Touch framework and we are very happy with the implementation and the capabilities of the product.",
      author: "Idrees Shah",
      title: "Project Consultant, Public Authority for Consumer Protection, Government of Oman",
    },
    {
      quote: "Twinstrata has partnered with Nova Bloom for several years since the very early days of our company. We have been able to offload a significant portion of our development effort to their team. They have been reliable and responsive to our needs.",
      author: "Mark Aldred",
      title: "Director, Product Development, Twinstrata",
    },
    {
      quote: "The Nova Bloom team has consistently exceeded our expectations. It felt as if we were working with an onshore team. It was their ability to understand our needs and keep us engaged throughout the entire process that has resulted in an exceptional product and a valued partner.",
      author: "Johnny McGuire",
      title: "Product Manager, TRUETRAC",
    },
    {
      quote: "They have helped us manage engineering work necessary the Airline, Car and Hotel verticals through the entire process that has resulted in an exceptional product.",
      author: "Stewart Kelly",
      title: "Founder & CTO, Sidestep",
    },
    {
      quote: "We were extraordinarily pleased with the functionality and depth of understanding that Nova Bloom's solution exhibited after a relatively brief but incisive, project kickoff meeting. Nova Bloom gets it from the start, relieving us from tedious development discussions drawn out over a long period of time.",
      author: "Anne Thys",
      title: "VP Logistics, Sundia Corporation",
    },
    {
      quote: "The Nova Bloom team did an amazing job. They really look out for the customer and try and do the best for them. Very impressed with the final product they delivered. I really enjoyed working with their team and would highly recommend them.",
      author: "Sarah Schumacher",
      title: "Progressive Beef Program Manager at Zoetis",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Auto-play functionality
  useEffect(() => {
    let interval;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Pause on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Testimonials
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We have delivered highly responsive and feature-rich mobile apps for clients across the globe. Here's what some of them have to say about us:
          </p>
        </div>

        {/* Testimonial Slider */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Slider Container */}
          <div className="relative h-96">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto w-full">
                  <svg
                    className="w-8 h-8 text-gray-400 mb-4"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-600 mb-6 text-lg">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`mx-1 w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;