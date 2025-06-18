'use client';
import Image from 'next/image';
import { useState } from 'react';

const ContactForm = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" bg-gradient-to-b from-gray-50 to-white px-6 py-16 flex flex-col items-center justify-center">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 animate-fade-in mb-12">
        Bring Your Vision to Life with AI
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-7xl w-full">
        {/* Left: Map with Locations */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative rounded-2xl shadow-2xl overflow-hidden">
            <Image
              src="/salesforce/map.png"
              alt="Global Locations"
              width={600}
              height={400}
              className="object-cover w-full h-[400px] hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-semibold">Our Global Reach</h3>
              <p className="text-sm mt-2 max-w-md">
                Connect with our AI experts across North America, Europe, and Asia to transform your business.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="w-full md:w-1/2 bg-gradient-to-br from-blue-900 to-cyan-800 text-white p-8 rounded-2xl shadow-lg space-y-6 animate-slide-in">
          <div>
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full p-3 rounded-lg bg-white/10 border border-gray-300/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              required
            />
          </div>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Your Email*"
              className="w-1/2 p-3 rounded-lg bg-white/10 border border-gray-300/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone*"
              className="w-1/2 p-3 rounded-lg bg-white/10 border border-gray-300/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Tell Us About Your Project*"
              className="w-full p-3 h-36 rounded-lg bg-white/10 border border-gray-300/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Connect Now
          </button>
          <p className="text-xs text-gray-300 text-center">
            By submitting, you agree to our{' '}
            <a href="#" className="underline text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="#" className="underline text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
              Terms of Service
            </a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;