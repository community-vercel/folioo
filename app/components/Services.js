'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

const services = [
  { label: 'App Development', color: 'bg-[#f70319]' },
  { label: 'Cloud Solutions', color: 'bg-[#6d28d9]' },
  { label: 'AI & Machine Learning', color: 'bg-[#2563eb]' },
  { label: 'NetSuite ERP', color: 'bg-[#14b8a6]' },
  { label: 'Microsoft Dynamics', color: 'bg-[#dc2626]' },
  { label: 'Ecommerce Platforms', color: 'bg-[#f59e0b]' },
  { label: 'AgTech Solutions', color: 'bg-[#ea580c]' },
  { label: 'Digital Health', color: 'bg-[#ec4899]' },
  { label: 'EdTech Innovation', color: 'bg-[#4f46e5]' },
];

const slides = [
  {
    title: 'Nova Bloom Earns AWS Lambda Service Delivery Designation',
    subtitle: 'Pioneering Cloud Excellence',
    description: 'Transform your business with our cutting-edge cloud solutions.',
    image: '/Aws-Lamdba_Rev_banner.webp',
  },
  {
    title: 'Unlock Efficiency with ProperTese',
    subtitle: 'All-in-One Real Estate Platform',
    description: 'Streamline operations with a user-friendly, integrated solution.',
    image: '/Propertese-CTA-NetSuite.webp',
  },
];

export default function WhatsNew() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const serviceVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#f70319] opacity-10 rounded-full blur-3xl -z-10" />

      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 text-center mb-8 sm:mb-12 lg:mb-16"
      >
        What’s New at Nova Bloom
      </motion.h1>

      {/* Swiper Slider */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
          speed={1000}
          className="w-full rounded-xl overflow-hidden"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white p-6 sm:p-8 lg:p-12 rounded-xl">
                {/* Left Content */}
                <div className="sm:w-2/3 space-y-4">
                  {slide.subtitle && (
                    <p className="uppercase text-sm sm:text-base tracking-widest text-blue-200 font-semibold">
                      {slide.subtitle}
                    </p>
                  )}
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-blue-100">
                    {slide.description}
                  </p>
                </div>
                {/* Right Image */}
                <div className="mt-6 sm:mt-0 sm:w-1/3 flex justify-center">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={250}
                    height={250}
                    sizes="(max-width: 640px) 200px, 250px"
                    className="object-contain h-32 sm:h-48 lg:h-60 transition-transform duration-300 hover:scale-105"
                    priority={idx === 0}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-pagination flex justify-center mt-4" />
        </Swiper>
      </motion.div>

      {/* Bottom Grid */}
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mt-12 sm:mt-16 lg:mt-20"
      >
        {/* Left Content */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Your Full-Service Digital Partner
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium max-w-md">
            From startups to enterprises, we empower businesses with innovative digital solutions.
          </p>
          <p className="text-sm sm:text-base text-gray-600 font-medium max-w-md">
            Our expertise spans custom websites, e-commerce platforms, ERP systems, and cloud solutions, driving efficiency, sales, and growth.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-3 bg-[#446f70] text-white text-sm sm:text-base font-semibold rounded-full hover:bg-[#446f70] transition-colors duration-300"
          >
            Unlock Your Potential with Nova Bloom
          </motion.button>
        </div>

        {/* Center Timeline */}
        <div className="hidden sm:flex flex-col items-center relative">
          <div className="absolute top-0 bottom-0 w-px bg-gray-300" />
          {services.map((service, i) => (
            <motion.div
              key={service.label}
              custom={i}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={serviceVariants}
              className="relative z-10 mb-6"
            >
              <div className={`w-4 h-4 rounded-full border-2 border-gray-900 ${service.color}`} />
            </motion.div>
          ))}
        </div>

        {/* Right List */}
        <div className="space-y-3 sm:space-y-4 text-sm sm:text-base font-semibold text-gray-900 sm:-ml-20 lg:-ml-40">
          {services.map((service, i) => (
            <motion.p
              key={service.label}
              custom={i}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={serviceVariants}
            >
              {service.label}
            </motion.p>
          ))}
</div>
      </motion.div>
      </section>
      
      )}