'use client';
import { motion } from 'framer-motion';

export default function MilestonesSection() {
  const stats = [
    {
      value: '5000+',
      label: 'Projects Delivered',
      color: 'bg-[#7b2cf3]',
    },
    {
      value: '1000+',
      label: 'Companies Served',
      color: 'bg-[#e02628]',
    },
    {
      value: '20+',
      label: 'Global Awards Won',
      color: 'bg-[#0072f0]',
    },
    {
      value: '700+',
      label: 'Employees Across the ',
      color: 'bg-[#ffce0]',
    },
    {
      value: '17+',
      label: 'Years of Excellence',
      color: 'bg-[#00c2b3]',
    },
  ];

  return (
    <section className="bg-[#e7e8e9] py-8 sm:py-12 lg:py-20">
      <div className="w-full max-w-5xl mx-auto px-2 sm:px-4 text-center">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-left font-bold text-[#0d0d0d] leading-tight">
          What do we  
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-left font-bold text-[#0d0d0d] leading-tight mb-2 sm:mb-4">
          have to show it all
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-left text-[#0d0d0d] font-bold mb-4 sm:mb-8 lg:mb-12">
          Our Milestones
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.4 }}
            >
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0d0d0d]">
                {stat.value}
              </p>
              <div className="flex items-center mt-1 sm:mt-2">
                <span
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${stat.color} mr-2`}
                  aria-hidden="true"
                />
                <span className="text-xs sm:text-sm text-black font-medium">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )}