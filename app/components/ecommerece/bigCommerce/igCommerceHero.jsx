'use client';

import Image from 'next/image';
import { motion } from 'framer-motion'; // Optional: for animations
import { useInView } from 'react-intersection-observer'; // For scroll-based animations
import Link from 'next/link';

export default function BigCommerceHero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // Animation variants for stats
  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  return (
    <section className="relative bg-[#446f70] text-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Subtle Background Animation */}
      <div className="absolute inset-0 bg-[url('/salesforce/Frame-14101260s38.svg')] opacity-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Empower Your E-Commerce <br />
            with BigCommerce Expertise
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed max-w-xl">
            Unlock the full potential of your online store with BigCommerce’s Open SaaS platform. Our expert development team delivers tailored solutions for B2B and B2C, driving growth, engagement, and conversions.
          </p>
          <ul className="space-y-4 text-gray-100">
            <li className="flex items-center gap-3">
              <span className="text-blue-400 text-2xl">★</span>
              <span>Scale seamlessly with robust, flexible APIs</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-400 text-2xl">★</span>
              <span>Create unforgettable shopping experiences</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-400 text-2xl">★</span>
              <span>Boost conversions with headless commerce</span>
            </li>
          </ul>
          <motion.a
            href="#consultation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#446f70] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#446f70] transition-all duration-300"
          >
                      <Link href='/contact'>
            
            Get Your Free Strategy Session

            </Link>

          </motion.a>
        </motion.div>

        {/* Right Stats */}
        <motion.div
          ref={ref}
          variants={statVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col items-center lg:items-end gap-8"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { value: '10+', label: 'Years of Excellence' },
              { value: '150+', label: 'Happy Clients' },
              { value: '300+', label: 'Global Projects' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={statVariants}
                className="bg-[#0f172a]/80 backdrop-blur-sm border border-gray-600 rounded-lg p-5 w-28 h-28 flex flex-col justify-center items-center shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-sm text-gray-300 text-center">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-end">
            <motion.div
              variants={statVariants}
              className="bg-[#0f172a]/80 backdrop-blur-sm border border-gray-600 rounded-lg p-5 flex flex-col items-center shadow-md"
            >
              <div className="text-2xl font-bold text-blue-400">80+</div>
              <div className="text-sm text-gray-300">BigCommerce Stores Launched</div>
            </motion.div>
            <motion.div
              variants={statVariants}
              className="bg-[#0f172a]/80 backdrop-blur-sm border border-gray-600 rounded-lg p-5 flex items-center gap-3 shadow-md"
            >
              <Image
                src="/salesforce/Frame-1410126038.svg"

                alt="Certified BigCommerce Partner"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div>
                <div className="text-sm font-semibold text-white">CERTIFIED</div>
                <div className="text-xs text-gray-300">BigCommerce Partner</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={statVariants}
            className="bg-[#0f172a]/80 backdrop-blur-sm border border-gray-600 rounded-lg p-4 w-full flex justify-center shadow-md"
          >
            <Image
                           src="/salesforce/bigcommerce-logo.webp"

              alt="BigCommerce Partner Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Quote Button */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="fixed top-1/3 right-0 z-20"
      >
        <Link
          href="/contact"
          className="bg-[#446f70] text-white px-6 py-3 rounded-l-full text-sm font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 transform -rotate-90 origin-right"
        >
          Request a Quote
        </Link>
      </motion.div>
    </section>
  );
}