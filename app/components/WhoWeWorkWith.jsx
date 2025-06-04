'use client';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const categories = [
  {
    title: 'Global Enterprises',
    description: 'Partnering to enhance your teams with cutting-edge solutions.',
    icon: '/logos/enterprise.svg', // Ensure these icons exist in /public
  },
  {
    title: 'Growing Businesses',
    description: 'Empowering SMEs to scale with innovative digital strategies.',
    icon: '/logos/business.svg',
  },
  {
    title: 'Innovative Startups',
    description: 'Building your vision from concept to reality with tech expertise.',
    icon: '/logos/Startup-Solo-16.svg',
  },
];

export default function WhoWeWorkWith() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#446f70] via-[#16213e] to-[#446f70] py-10 sm:py-24 lg:py-10 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#446f70]/20 to-[#446f70]/20 opacity-50 z-0" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#e94560]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#446f70]/10 rounded-full blur-3xl animate-pulse" />

      {/* Section Title */}
      <motion.h1
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white text-center px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20 relative"
      >
        <span className="relative z-10">
          Our Valued Partners
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#446f70] to-[#446f70] rounded-full" />
        </span>
      </motion.h1>

      {/* Grid of Cards */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {categories.map((item, idx) => (
          <motion.div
            key={item.title}
            variants={cardVariants}
            custom={idx}
            className="relative group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-72 sm:h-80 lg:h-96"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            {/* Card Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#446f70]/10 to-[#446f70]/10 opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 + 0.2, duration: 0.5 }}
              className="absolute top-6 left-6 w-12 h-12 sm:w-16 sm:h-16"
            >
              <Image
                src={item.icon}
                alt={`${item.title} icon`}
                width={64}
                height={64}
                className="object-contain"
              />
            </motion.div>

            {/* Hover Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-gradient-to-t from-[#446f70]/90 to-[#e94560]/50 flex flex-col justify-end p-6 sm:p-8 text-white z-20"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm sm:text-base lg:text-lg max-w-xs mb-4">{item.description}</p>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#446f70' }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#446f70] text-white px-6 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-colors duration-300 shadow-md hover:shadow-lg"
                aria-label={`Explore more about ${item.title}`}
              >
                Explore Now
              </motion.button>
            </motion.div>

            {/* Default Content */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-2xl lg:text-3xl font-bold bg-black/30 group-hover:opacity-0 transition-opacity duration-500">
              {item.title}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}