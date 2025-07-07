'use client';

import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EcommerceGrowth() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2, ease: 'easeOut' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#e6f0ff] via-white to-[#e0f2fe] text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
        {/* Decorative Background Elements */}
        <motion.div
          className="absolute inset-0 opacity-10 pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
        >
          <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 200C200 100, 400 300, 600 200S1000 100, 1200 200V800H0Z"
              fill="url(#waveGradient)"
            />
            <circle cx="15%" cy="10%" r="200" fill="url(#gradient1)" />
            <circle cx="85%" cy="85%" r="150" fill="url(#gradient2)" />
            <defs>
              <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
              </linearGradient>
              <radialGradient id="gradient1" cx="0" cy="0" r="1">
                <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="gradient2" cx="0" cy="0" r="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.div
          className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16 items-center z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Section */}
          <motion.div className="space-y-6 sm:space-y-8" variants={itemVariants}>
            <p className="text-base sm:text-lg font-semibold text-[#1e3a8a] uppercase tracking-widest">
              Unlock eCommerce Excellence
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
              Scale Your <span className="text-gray bg-clip-text bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6]">Online Store</span> to New Heights
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-lg leading-relaxed">
              Partner with us to build <strong>high-converting</strong> eCommerce stores, <strong>drive</strong> revenue with AI-powered insights, and <strong>captivate</strong> customers with seamless experiences.
            </p>

            <ul className="space-y-3 text-gray-800 text-base sm:text-lg">
              {[
                'Blazing-fast, SEO-optimized storefronts',
                'AI-powered personalization for every shopper',
                'Unified B2B, B2C, and marketplace solutions',
                'Proven strategies to maximize sales & retention',
              ].map((feature, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-3"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, x: 8 }}
                >
                  <span className="text-[#446f70] text-xl sm:text-2xl font-bold">✓</span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
           <Link href='/contact'>

            <motion.button
              className="mt-8 inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white rounded-full bg-gradient-to-r from-[#446f70] to-[#446f70] hover:from-[#1e40af] hover:to-[#2563eb] shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transform hover:scale-105 transition-all duration-300"
              variants={itemVariants}
              whileTap={{ scale: 0.95 }}
              role="button"
              aria-label="Launch Your Store Now"
            >
              Launch Your Store Now <FiArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
            </Link>
          </motion.div>

          {/* Right Logos Section */}
          <motion.div
            className="grid grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-6 justify-center items-center"
            variants={containerVariants}
          >
            {[
             
              'shopify',
             
            ].map((logo, idx) => (
              <motion.div
                key={idx}
                className="w-98 h-64 xs:w-24 xs:h-24 p-8 sm:p-3  items-center justify-center "
                variants={itemVariants}
                whileHover={{ rotate: 3 }}
              >
                <Image
                  src={`/salesforce/${logo}.webp`} // Updated path to a more generic /logos/ folder
                  alt={`${logo} logo`}
                  width={448}
                  height={448}
                  className="object-contain"
                  priority={idx < 3} // Prioritize first 3 logos for faster loading
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}