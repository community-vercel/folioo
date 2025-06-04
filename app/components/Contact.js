'use client';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ContactUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3, ease: 'easeOut' } },
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="w-full lg:w-1/2"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Let’s Connect
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-md mb-6 sm:mb-8">
              Whether you’re a startup building from scratch, an SME scaling up, or an enterprise seeking expert solutions, we’re your digital growth partner.
            </p>
            <div className="space-y-3 text-gray-900 text-base sm:text-lg">
              <div className="flex items-center">
                <span className="material-icons mr-2 text-[#f70319]">phone</span>
                <strong>Tel:</strong>&nbsp;+1 408 365 4638
              </div>
              <div className="flex items-center">
                <span className="material-icons mr-2 text-[#f70319]">support_agent</span>
                <strong>Support:</strong>&nbsp;+1 (408) 512 1812
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 sm:mt-16"
            >
              <Image
                src="/locations/contact-plane.webp"
                alt="Paper Plane Illustration"
                width={250}
                height={250}
                sizes="(max-width: 640px) 200px, 250px"
                className="object-contain w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] transition-transform duration-300 hover:scale-105"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={formVariants}
            className="w-full lg:w-1/3 bg-white shadow-lg rounded-xl p-6 sm:p-8 lg:p-10"
          >
            <form className="space-y-5" aria-label="Contact us form">
              {[
                { type: 'text', placeholder: 'Name', ariaLabel: 'Name' },
                { type: 'email', placeholder: 'Email', ariaLabel: 'Email' },
                { type: 'tel', placeholder: 'Phone', ariaLabel: 'Phone number' },
                { type: 'text', placeholder: 'Organization', ariaLabel: 'Organization' },
              ].map((input, index) => (
                <input
                  key={index}
                  type={input.type}
                  placeholder={input.placeholder}
                  aria-label={input.ariaLabel}
                  className="w-full border-b-2 border-gray-200 py-2 text-sm sm:text-base text-gray-900 focus:border-[#f70319] outline-none transition-colors duration-300"
                />
              ))}
              <textarea
                placeholder="Tell us about your project"
                aria-label="Project details"
                rows={4}
                className="w-full border-b-2 border-gray-200 py-2 text-sm sm:text-base text-gray-900 focus:border-[#f70319] outline-none resize-none transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-[#446f70] text-white font-semibold text-base sm:text-lg py-3 px-6 rounded-full w-full hover:bg-[#446f70] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#f70319] opacity-10 rounded-full blur-3xl -z-10" />
    </section>
  )}