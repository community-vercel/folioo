'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const NlpSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative bg-gradient-to-r from-[#0a1e3b] to-[#2a4b8c] text-white py-0 px-0 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="relative w-full md:h-[450px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in delay-100">
        <Image
          src="/salesforce/Natural-Language-Processing-Header.png"
          alt="Natural Language Processing Technology"
          fill
          className="object-cover hover:scale-110 transition-transform duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 relative z-10">
          {/* Text Section */}
          <div className="space-y-6 animate-slide-in">
            <p className="text-sm font-semibold uppercase text-white tracking-wider">
              Advanced NLP Solutions
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold  text-white">
              Transform Your Business with NLP
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              Unlock the power of natural language processing to analyze text, automate conversations, and enhance customer experiences. From chatbots to sentiment analysis, revolutionize your operations with intelligent language solutions.
            </p>
                      <Link href='/contact'>

            <button
              className="bg-[#446f70]  text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
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

export default NlpSection;