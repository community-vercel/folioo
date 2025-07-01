'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const MachineSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative bg-gradient-to-r from-[#0a1e3b] to-[#2a4b8c] text-white py-0 px-0 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="relative w-full md:h-[450px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in delay-100">
        <Image
          src="/salesforce/machine-learning-solutions-banner.webp"
          alt="Machine Learning Technology"
          fill
          className="object-cover hover:scale-110 transition-transform duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 relative z-10">
          {/* Text Section */}
          <div className="space-y-6 animate-slide-in">
            <p className="text-sm font-semibold uppercase text-cyan-300 tracking-wider">
              Advanced Machine Learning Solutions
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Empower Your Business with Machine Learning
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              Leverage our state-of-the-art machine learning services to uncover patterns, predict outcomes, and automate decisions. From predictive analytics to personalized recommendations, drive innovation with data.
            </p>
                      <Link href='/contact'>

            <button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Schedule a Free Consultation
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachineSection;