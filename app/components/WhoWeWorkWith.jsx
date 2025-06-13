"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaBuilding, FaRocket, FaBriefcase } from "react-icons/fa";

// Updated categories for Sharplogicians.com
const categories = [
  {
    title: "Global Enterprises",
    description: "Delivering scalable software solutions to Fortune 500 companies, enhancing efficiency and innovation.",
    icon: <FaBuilding className="w-12 h-12 text-teal-500" />,
  },
  {
    title: "Tech Startups",
    description: "Partnering with innovative startups to build cutting-edge apps and AI-driven platforms.",
    icon: <FaRocket className="w-12 h-12 text-coral-500" />,
  },
  {
    title: "Growing SMBs",
    description: "Empowering small and medium businesses with tailored digital strategies for growth.",
    icon: <FaBriefcase className="w-12 h-12 text-navy-800" />,
  },
];

export default function WhoWeWorkWith() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h1         className="text-5xl sm:text-5xl md:text-5xl font-extrabold text-navy-900 text-center mb-8 sm:mb-16 lg:mb-8"
>
            Who We Work With
          </h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-600 font-medium max-w-4xl mx-auto">
            Partnering with innovative organizations to drive digital transformation at Nova Bloom .
          </p>
        </motion.div>

        {/* Grid of Cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12"
        >
          {categories.map((item, idx) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              role="listitem"
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-navy-900 mb-3">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 inline-block bg-teal-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-teal-600 transition-colors duration-200"
                aria-label={`Learn more about ${item.title}`}
              >
                Learn More
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        section {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </section>
  );
}