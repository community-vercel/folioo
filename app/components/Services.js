"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

const services = [
  { label: "AI & Machine Learning", color: "bg-teal-500" },
  { label: "Custom Software Development", color: "bg-navy-800" },
  { label: "Cloud Solutions", color: "bg-coral-500" },
  { label: "E-commerce Platforms", color: "bg-indigo-600" },
  { label: "Digital Transformation", color: "bg-amber-500" },
  { label: "Mobile App Development", color: "bg-teal-600" },
  { label: "DevOps Consulting", color: "bg-navy-900" },
  { label: "Data Analytics", color: "bg-coral-600" },
  { label: "Cybersecurity Solutions", color: "bg-indigo-700" },
];

const slides = [
  {
    title: "Nova Bloom Wins Global AI Innovation Award",
    subtitle: "Leading the Future of AI",
    description: "Our AI solutions are transforming industries with cutting-edge innovation.",
 image: '/Aws-Lamdba_Rev_banner.webp',
  },
  {
    title: "Launch of NextGen Cloud Platform",
    subtitle: "Scalable, Secure, Seamless",
    description: "Empowering businesses with our state-of-the-art cloud infrastructure.",
    image: '/Propertese-CTA-NetSuite.webp'
  
  },
];

export default function WhatsNew() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
    },
  };

  const serviceVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-5xl sm:text-5xl md:text-5xl font-extrabold text-navy-900 text-center mb-8 sm:mb-16 lg:mb-8"
      >
        What’s New at Nova Bloom 
      </motion.h1>


      {/* Swiper Slider */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative"
      >
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
          speed={800}
          className="w-full rounded-2xl overflow-hidden shadow-lg"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col lg:flex-row items-center justify-between bg-white text-navy-900 p-6 sm:p-8 lg:p-12">
                {/* Left Content */}
                <div className="lg:w-1/2 space-y-4">
                  {slide.subtitle && (
                    <p className="uppercase text-sm sm:text-base tracking-widest text-teal-500 font-semibold">
                      {slide.subtitle}
                    </p>
                  )}
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                    {slide.description}
                  </p>
                  
                  <motion.a
                    href="/portfolio"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block mt-4 px-6 py-3 bg-[#446f70] text-white text-sm sm:text-base font-semibold rounded-full hover:bg-teal-600 transition-colors duration-300"
                    aria-label={`Learn more about ${slide.title}`}
                  >
                    Discover More
                  </motion.a>
                </div>
                {/* Right Image */}
                <div className="mt-6 lg:mt-0 lg:w-1/2 flex justify-center">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={350}
                    height={350}
                    sizes="(max-width: 640px) 250px, 350px"
                    className="object-contain h-40 sm:h-56 lg:h-72 transition-transform duration-300 hover:scale-105"
                    priority={idx === 0}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}


          <div className="flex justify-center items-center mt-6 space-x-4">
            <button
              className="swiper-button-prev w-10 h-10 flex items-center justify-center bg-navy-900 text-white rounded-full hover:bg-teal-500 transition-colors duration-200"
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="custom-pagination" />
            <button
              className="swiper-button-next w-10 h-10 flex items-center justify-center bg-navy-900 text-white rounded-full hover:bg-teal-500 transition-colors duration-200"
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </Swiper>
      </motion.div>

      {/* Bottom Grid */}
      {/* <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-12 sm:mt-16 lg:mt-20"
      >
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
            Your Trusted Tech Partner
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium max-w-md">
            Nova Bloom empowers businesses with innovative software and AI solutions tailored to your needs.
          </p>
          <p className="text-sm sm:text-base text-gray-600 font-medium max-w-md">
            From AI-driven insights to scalable cloud platforms, we deliver end-to-end solutions that drive growth and efficiency.
          </p>
         
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.label}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={serviceVariants}
              className="flex items-center space-x-3"
            >
              <div className={`w-3 h-3 rounded-full ${service.color}`} />
              <p className="text-sm sm:text-base font-semibold text-gray-900">{service.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div> */}

     
    </section>
  );
}