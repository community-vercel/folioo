"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaUsers, FaGlobe, FaTrophy, FaCode, FaRocket } from "react-icons/fa";

// Sharplogicians.com milestones
const stats = [
  {
    value: "5K+",
    label: "Happy Clients",
    color: "bg-teal-500",
    icon: <FaUsers className="text-teal-500 w-6 h-6" />,
    description: "Empowering businesses with cutting-edge software solutions.",
  },
  {
    value: "40+",
    label: "Global Markets",
    color: "bg-navy-800",
    icon: <FaGlobe className="text-navy-800 w-6 h-6" />,
    description: "Serving clients across diverse industries worldwide.",
  },
  {
    value: "25+",
    label: "Industry Awards",
    color: "bg-coral-500",
    icon: <FaTrophy className="text-coral-500 w-6 h-6" />,
    description: "Recognized for excellence in AI and software innovation.",
  },
  {
    value: "500K+",
    label: "Code Commits",
    color: "bg-indigo-600",
    icon: <FaCode className="text-indigo-600 w-6 h-6" />,
    description: "Building robust, scalable applications with precision.",
  },
  {
    value: "15+",
    label: "Years of Innovation",
    color: "bg-amber-500",
    icon: <FaRocket className="text-amber-500 w-6 h-6" />,
    description: "Pioneering transformative tech solutions since 2010.",
  },
];

export default function MilestonesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants for stats
  const statVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: index * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Animation for heading
  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="bg-gradient-to-br from-navy-50 to-teal-50 py-16 sm:py-24 lg:py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingVariants}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h1   className="text-5xl sm:text-5xl md:text-5xl font-extrabold text-navy-900 text-center mb-8 sm:mb-16 lg:mb-8">
          Nova Boom Milestones
          </h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-xl text-gray-600 font-medium max-w-3xl mx-auto">
            Driving innovation and excellence in software solutions for over a decade.
          </p>
        </motion.div>

        {/* Stats */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={statVariants}
              className="relative bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center transform hover:scale-105 hover:shadow-xl transition-all duration-300"
              role="listitem"
            >
              <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full ${stat.color} flex items-center justify-center`}>
                {stat.icon}
              </div>
              <p className="mt-8 text-3xl sm:text-4xl font-bold text-navy-900">{stat.value}</p>
              <h3 className="mt-2 text-base sm:text-lg font-semibold text-gray-800">{stat.label}</h3>
              <p className="mt-2 text-sm text-gray-500">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        section {
          position: relative;
          overflow: hidden;
        }
        section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1), transparent 70%);
          z-index: 0;
        }
      `}</style>
    </section>
  );
}