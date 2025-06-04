'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Updated stats data
const stats = [
  { value: '10K+', label: 'Clients Empowered', color: 'bg-[#6d28d9]' },
  { value: '50+', label: 'Countries Served', color: 'bg-[#dc2626]' },
  { value: '30+', label: 'Industry Awards', color: 'bg-[#2563eb]' },
  { value: '1M+', label: 'Users Impacted', color: 'bg-[#f59e0b]' },
  { value: '20+', label: 'Years Innovating', color: 'bg-[#14b8a6]' },
];

export default function MilestonesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Animation variants for stats
  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.5, ease: 'easeOut' },
    }),
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-12 sm:py-16 lg:py-24">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Our Journey of Impact
          </h1>
          <p className="mt-2 text-base sm:text-lg lg:text-xl text-gray-600 font-medium max-w-3xl mx-auto">
            Celebrating milestones that define our commitment to excellence and innovation.
          </p>
        </motion.div>

        {/* Stats */}
        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              custom={index}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={statVariants}
              className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                {stat.value}
              </p>
              <div className="flex items-center mt-2">
                <span
                  className={`w-3 h-3 rounded-full ${stat.color} mr-2`}
                  aria-hidden="true"
                />
                <span className="text-sm sm:text-base text-gray-700 font-medium">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}