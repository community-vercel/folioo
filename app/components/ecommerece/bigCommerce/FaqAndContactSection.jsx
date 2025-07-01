'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

const faqs = [
  {
    q: 'What services does a BigCommerce development company offer?',
    a: 'Our BigCommerce development services include custom storefront design, Stencil theme development, custom app creation, API integrations, platform migrations, B2B solutions, performance optimization, and ongoing support.',
  },
  {
    q: 'Do you offer support for headless BigCommerce implementations?',
    a: 'Yes, we specialize in headless BigCommerce setups, leveraging open APIs to create custom front-ends while utilizing BigCommerce’s robust back-end for scalability and performance.',
  },
  {
    q: 'Why should I choose BigCommerce for my eCommerce store?',
    a: 'BigCommerce offers a flexible, open SaaS platform with powerful B2B and B2C features, scalability, and seamless integrations, making it ideal for businesses aiming for growth and customization.',
  },
  {
    q: 'How long does it take to develop a BigCommerce store?',
    a: 'Development timelines vary based on complexity, typically ranging from 4-12 weeks for custom stores, including design, development, and testing, tailored to your specific needs.',
  },
  {
    q: 'Can you migrate my existing eCommerce store to BigCommerce?',
    a: 'Absolutely! We provide seamless migration services from platforms like Magento, Shopify, or WooCommerce to BigCommerce, ensuring data integrity and minimal downtime.',
  },
  {
    q: 'What kind of businesses benefit most from BigCommerce?',
    a: 'BigCommerce suits businesses of all sizes, from startups to enterprises, especially those needing B2B features, global scalability, or headless commerce for unique customer experiences.',
  },
  {
    q: 'How customizable is a BigCommerce store?',
    a: 'BigCommerce is highly customizable with its Stencil framework, open APIs, and app ecosystem, allowing tailored designs, features, and integrations to match your brand.',
  },
  {
    q: 'Can BigCommerce handle high-traffic events like Black Friday?',
    a: 'Yes, BigCommerce’s cloud-based infrastructure and CDN ensure your store handles high-traffic events with ease, maintaining speed and reliability during peak sales.',
  },
  {
    q: 'What integrations are possible with BigCommerce?',
    a: 'BigCommerce supports integrations with CRMs (e.g., Salesforce), ERPs (e.g., NetSuite), payment gateways, marketing tools, and more, creating a unified e-commerce ecosystem.',
  },
  {
    q: 'How much does it cost to develop a store with BigCommerce?',
    a: 'Costs depend on project scope, ranging from $10,000 for basic stores to $50,000+ for complex, custom solutions. Contact us for a tailored quote.',
  },
];

export default function FaqAndContactSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="w-full mt-2">
      {/* FAQ Section */}
      <section className="relative max-w-6xl mx-auto px-4 py-20 bg-gradient-to-b from-[#f9fafb] to-white">
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

        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">
            Your <span className="text-[#099f70]">BigCommerce</span> Questions Answered
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  openIndex === i ? 'md:col-span-2' : ''
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex justify-between items-center w-full text-left font-semibold text-gray-900"
                >
                  <span className="text-lg group-hover:text-[#099f70] transition-colors">{faq.q}</span>
                  <span className="text-[#099f70] text-2xl">
                    {openIndex === i ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                </button>
                {openIndex === i && faq.a && (
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gradient-to-r from-[#099f70] to-[#446f70] py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
          {/* Left Text */}
          <div className="flex-1 text-white space-y-4">
                       <Link href='/contact'>

            <h3 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">
              
              Launch Your <span className="text-[#e6f4f1]">BigCommerce</span> Journey
            </h3>
            </Link>
            <p className="text-lg leading-relaxed">
              Connect with our certified BigCommerce experts to start building your dream store today!
            </p>
          </div>

          {/* Right Form */}
          <div className="flex-1 bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-[#099f70] focus:border-transparent transition"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-[#099f70] focus:border-transparent transition"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-[#099f70] focus:border-transparent transition"
              />
              <textarea
                placeholder="Tell Us About Your Project"
                className="w-full border border-gray-200 p-3 rounded-lg h-28 focus:ring-2 focus:ring-[#099f70] focus:border-transparent transition"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#099f70] to-[#446f70] text-white font-semibold py-3 rounded-lg hover:scale-105 hover:from-[#077f50] hover:to-[#2a6b54] transition-all duration-300"
                aria-label="Submit Contact Form"
              >
                Start Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}