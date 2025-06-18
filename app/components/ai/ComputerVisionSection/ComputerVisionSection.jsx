'use client';
import Image from 'next/image';
import { useState } from 'react';

const ComputerVisionSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative bg-gradient-to-r from-[#0a1e3b] to-[#2a4b8c] text-white py-0 px-0 overflow-hidden">
      {/* Background Decorative Elements */}
    
 <div className="relative w-full  md:h-[450px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in delay-100">
          <Image
            src="/salesforce/cv.webp"
            alt="AI Vision Technology"
            fill
            className="object-cover hover:scale-110 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
        
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 relative z-10">
        {/* Text Section */}
        <div className="space-y-6 animate-slide-in">
          <p className="text-sm font-semibold uppercase text-cyan-300 tracking-wider">
            Advanced Computer Vision Solutions
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Unlock Insights with AI-Powered Vision
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            Transform raw images and videos into actionable intelligence with our cutting-edge computer vision services. Detect objects, analyze patterns, and track movements to drive smarter decisions.
          </p>
          <button
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Schedule a Free Consultation
          </button>
        </div>
   </div>
        {/* Image Section */}
    
      </div>
    </section>
  );
};

export default ComputerVisionSection;