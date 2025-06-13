'use client';

import { FiCheckCircle } from 'react-icons/fi';

const features = [
  'Custom Storefront Design',
  'Stencil Theme Development',
  'B2B & Wholesale Solutions',
  'Custom BigCommerce Apps',
  'API & Third-Party Integrations',
  'Performance Optimization',
  'SEO & Conversion Boost',
  'PCI-DSS Compliance',
];

export default function BigCommerceExpertise() {
  return (
    <section className="relative bg-gradient-to-b from-[#e6f4f1] to-white py-24 px-6 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10%" cy="20%" r="200" fill="url(#gradient1)" />
          <circle cx="90%" cy="80%" r="150" fill="url(#gradient2)" />
          <defs>
            <radialGradient id="gradient1" cx="0" cy="0" r="1">
              <stop offset="0%" style={{ stopColor: '#099f70', stopOpacity: 0.5 }} />
              <stop offset="100%" style={{ stopColor: '#099f70', stopOpacity: 0 }} />
            </radialGradient>
            <radialGradient id="gradient2" cx="0" cy="0" r="1">
              <stop offset="0%" style={{ stopColor: '#446f70', stopOpacity: 0.5 }} />
              <stop offset="100%" style={{ stopColor: '#446f70', stopOpacity: 0 }} />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-6 z-10">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Our Expertise in <br />
            <span className="text-[#099f70]">BigCommerce</span> <br />
            Development
          </h2>
          <p className="text-lg text-gray-600 max-w-md leading-relaxed">
            With over 50 BigCommerce-certified experts, we deliver tailored, high-performance stores that drive growth and conversions.
          </p>
          <button
            className="mt-6 px-8 py-3 bg-gradient-to-r from-[#099f70] to-[#446f70] text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:from-[#077f50] hover:to-[#2a6b54] transition-all duration-300"
            aria-label="Get Started with BigCommerce"
          >
            Start Your Project
          </button>
        </div>

        {/* Right Column */}
        <div className="text-gray-800 text-base">
          <p className="mb-8 text-lg font-medium">
            Our team specializes in unlocking BigCommerce’s full potential, crafting scalable solutions for businesses of all sizes. Our expertise includes:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group flex items-center space-x-3 hover:bg-[#e6f4f1] p-2 rounded-lg transition-all duration-300"
              >
                <FiCheckCircle className="text-[#099f70] w-6 h-6 flex-shrink-0" />
                <span className="text-gray-700 group-hover:text-gray-900 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}