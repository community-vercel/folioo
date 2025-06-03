'use client';
import { motion } from 'framer-motion'; // For animations

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
      label: 'Employees Across the Globe',
      color: 'bg-[#ffce00]',
    },
    {
      value: '17+',
      label: 'Years of Excellence',
      color: 'bg-[#00c2b3]',
    },
  ];

  return (
    <section className="bg-[#e7e8e9] py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-4xl text-left sm:text-4xl font-bold text-[#0d0d0d] leading-tight ">
          What do we  
        </h1>
              <h1 className="text-4xl text-left sm:text-4xl font-bold text-[#0d0d0d] leading-tight mb-4">
                  have to show for it all

        </h1>
        <p className="text-base sm:text-lg text-left text-[#0d0d0d] font-bold mb-8 sm:mb-12">
          Our Milestones
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
            >
              <p className="text-3xl sm:text-4xl font-bold text-[#0d0d0d]">
                {stat.value}
              </p>
              <div className="flex items-center mt-2">
                <span
                  className={`w-3 h-3 rounded-full ${stat.color} mr-2`}
                  aria-hidden="true"
                />
                <span className="text-sm text-black font-medium">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}