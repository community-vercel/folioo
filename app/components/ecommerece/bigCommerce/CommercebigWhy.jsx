'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BsFillRocketFill } from 'react-icons/bs';
import { FiUsers, FiCheckCircle, FiCode, FiAward, FiTarget, FiShield, FiUserPlus, FiTrendingUp, FiLayers, FiGlobe, FiLink } from 'react-icons/fi';

export default function WhyBigCommerce() {
  const [activeSlide, setActiveSlide] = useState(0);

  const reasons = [
    {
      icon: <BsFillRocketFill className="text-[#099f70] text-3xl mb-3" aria-hidden="true" />,
      title: 'BigCommerce Expertise',
      desc: 'As certified BigCommerce partners, we deliver scalable, high-performance stores tailored to your business, from startups to global brands.',
    },
    {
      icon: <FiUsers className="text-[#099f70] text-3xl mb-3" aria-hidden="true" />,
      title: 'Your Growth Ally',
      desc: 'We’re more than developers—we’re strategic partners, crafting solutions to accelerate your BigCommerce store’s success.',
    },
    {
      icon: <FiCheckCircle className="text-[#099f70] text-3xl mb-3" aria-hidden="true" />,
      title: 'Transparent Collaboration',
      desc: 'With clear communication and honest workflows, we keep you in the loop, building trust every step of the way.',
    },
    {
      icon: <FiCode className="text-[#099f70] text-3xl mb-3" aria-hidden="true" />,
      title: 'Innovative BigCommerce Solutions',
      desc: 'Harness headless commerce, open APIs, and AI tools to create cutting-edge BigCommerce stores that stand out.',
    },
    {
      icon: <FiAward className="text-[#099f70] text-3xl mb-3" aria-hidden="true" />,
      title: 'Proven Success',
      desc: 'Our track record of 200+ BigCommerce projects showcases our ability to deliver results that drive growth.',
    },
    {
      icon: <FiTrendingUp className="text-[#099f70] text-3xl mb-3" aria-hidden="true" />,
      title: 'Growth-Focused Strategies',
      desc: 'We design BigCommerce solutions to fuel long-term growth and maximize your ROI.',
    },
    {
      icon: <FiUserPlus className="text-[#099f70] text-3xl mb-3" aria-hidden="true" />,
      title: 'Customer-First Approach',
      desc: 'Every BigCommerce store we build is tailored to your unique goals and customer needs.',
    },
    {
      icon: <FiShield className="text-[#099f70] text-3xl mb-3" aria-hidden="true" />,
      title: 'Secure & Compliant Stores',
      desc: 'We prioritize PCI-DSS compliance and robust security for your BigCommerce platform.',
    },
    {
      icon: <FiTarget className="text-[#099f70] text-3xl mb-3" aria-hidden="true" />,
      title: 'Performance-Driven Results',
      desc: 'Our focus on measurable outcomes ensures your BigCommerce store delivers impact.',
    },
    {
      icon: <FiLayers className="text-[#099f70] text-3xl mb-3" aria-hidden="true" />,
      title: 'BigCommerce Mastery',
      desc: 'We leverage BigCommerce’s best-in-class features to build modern, efficient e-commerce solutions.',
    },
  ];

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <main className="text-gray-800">
      {/* Section 1 - Why BigCommerce with Dot Slider */}
      <section className="relative py-24 text-center bg-gradient-to-b from-[#e6f4f1] to-white overflow-hidden">
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

        <div className="relative max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">
            Why Partner with Us for <span className="text-[#099f70]">BigCommerce</span> Success?
          </h2>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {reasons.map((item, i) => (
                <div
                  key={i}
                  className="min-w-full md:min-w-[50%] lg:min-w-[33.33%] px-4"
                  role="region"
                  aria-label={item.title}
                >
                  <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
                    {item.icon}
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8 mb-2 gap-2">
              {reasons.map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSlide === i ? 'bg-[#099f70] scale-125' : 'bg-gray-300'
                  }`}
                  onClick={() => handleDotClick(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - BigCommerce Advantages */}
      <section className="bg-[#f9fafb] py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Unlock the Power of <span className="text-[#099f70]">BigCommerce</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            BigCommerce’s open SaaS platform delivers unmatched flexibility, scalability, and advanced features to help your business thrive in the global e-commerce market.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: <FiLayers className="text-[#099f70] text-3xl mb-3" aria-hidden="true" />,
                title: 'Customizable Storefronts',
                desc: 'Craft unique, responsive designs with BigCommerce’s Stencil framework to reflect your brand.',
              },
              {
                icon: <FiGlobe className="text-[#099f70] text-3xl mb-3" aria-hidden="true" />,
                title: 'Global Scalability',
                desc: 'Scale effortlessly with BigCommerce’s robust infrastructure, supporting multi-currency and multilingual stores.',
              },
              {
                icon: <FiCode className="text-[#099f70] text-3xl mb-3" aria-hidden="true" />,
                title: 'Headless Commerce',
                desc: 'Leverage open APIs for headless solutions, enabling custom front-ends with a powerful back-end.',
              },
              {
                icon: <FiUsers className="text-[#099f70] text-3xl mb-3" aria-hidden="true" />,
                title: 'Advanced B2B Features',
                desc: 'Streamline B2B operations with custom pricing, bulk ordering, and quote management.',
              },
              {
                icon: <FiLink className="text-[#099f70] text-3xl mb-3" aria-hidden="true" />,
                title: 'Seamless Integrations',
                desc: 'Connect with CRMs, ERPs, and payment gateways for a unified e-commerce ecosystem.',
              },
              {
                icon: <FiShield className="text-[#099f70] text-3xl mb-3" aria-hidden="true" />,
                title: 'PCI-DSS Compliance',
                desc: 'Ensure secure transactions and data protection with BigCommerce’s built-in compliance.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                role="region"
                aria-label={item.title}
              >
                {item.icon}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
           <Link href='/contact'>

          <button
            className="mt-12 bg-gradient-to-r from-[#099f70] to-[#446f70] text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:from-[#077f50] hover:to-[#2a6b54] hover:scale-105 transition-all duration-300"
            aria-label="Launch Your BigCommerce Store"
          >
            Launch Your Store Now <BsFillRocketFill />
          </button>
          </Link>
        </div>
      </section>
    </main>
  );
}