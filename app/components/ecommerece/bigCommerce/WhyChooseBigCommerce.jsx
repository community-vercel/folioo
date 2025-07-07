'use client';

import Link from 'next/link';
import { FiCloud, FiUsers, FiCode } from 'react-icons/fi';

const features = [
  {
    number: '01',
    title: 'Scalable Open SaaS',
    description:
      'BigCommerce’s cloud-based SaaS platform lets you scale effortlessly. Customize your store, integrate with top tools, and grow without limits, all while enjoying robust security and performance.',
    icon: <FiCloud className="text-gray-800 text-2xl" />,
  },
  {
    number: '02',
    title: 'Powerful B2B Tools',
    description:
      'Unlock advanced B2B features like custom pricing, bulk orders, and account management to deliver tailored experiences that streamline operations and boost client satisfaction.',
    icon: <FiUsers className="text-gray-800 text-2xl" />,
  },
  {
    number: '03',
    title: 'Headless Commerce APIs',
    description:
      'Leverage BigCommerce’s open APIs for headless commerce, giving you full control over front-end design while harnessing a scalable, high-performance back-end for unique customer experiences.',
    icon: <FiCode className="text-gray-800 text-2xl" />,
  },
];

export default function WhyChooseBigCommerce() {
  return (
    <section className="relative bg-gradient-to-b from-[#e6f4f1] to-white py-20 px-6 overflow-hidden">
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
        {/* Left Content */}
        <div className="space-y-6 z-10">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Why <span className="text-gray-800">BigCommerce</span> Stands Out
          </h2>
          <p className="text-lg text-gray-600 max-w-md leading-relaxed">
            BigCommerce empowers your business with a flexible, scalable platform packed with advanced tools. From robust B2B features to headless commerce, we help you unlock its full potential for growth and success.
          </p>
                                <Link href='/contact'>

          <button
            className="mt-6 px-8 py-3 bg-gradient-to-r from-[#099f70] to-[#446f70] text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:from-[#077f50] hover:to-[#2a6b54] transition-all duration-300"
            aria-label="Get Started with BigCommerce"
          >
            Get Started Now
          </button>
          </Link>
        </div>

        {/* Right Feature Boxes */}
        <div className="space-y-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl border border-gray-100 shadow-md p-6 flex items-start gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-[#e6f4f1] text-gray-800 font-bold text-sm px-3 py-1 rounded flex items-center gap-2">
                {item.icon}
                <span>{item.number}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}