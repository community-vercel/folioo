'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const caseStudies = [
  {
    id: 1,
    image: '/salesforce/bird-b-gone-img-grid-bigcommerce-cs.webp',
    logo: '/salesforce/bird-b-gone-logo-bigcommerce-cs.webp',
    tags: ['Manufacturing', 'BigCommerce'],
    title: 'Bird B Gone’s Seamless Magento to BigCommerce Migration',
    services: ['Migration', 'Analytics Setup', 'Optimization'],
    tech: ['BigCommerce', 'Google Analytics'],
    description:
      'Bird B Gone transitioned from Magento to BigCommerce, unlocking advanced analytics and a streamlined store for enhanced performance and scalability.',
  },
  {
    id: 2,
    image: '/salesforce/metroshoes-img-cs-grid.webp',
    logo: '/salesforce/metroshoes-logo-white.webp',
    tags: ['Manufacturing', 'BigCommerce', 'B2B'],
    title: 'Eco Products’ Global Expansion with BigCommerce',
    services: ['Replatforming', 'B2B eCommerce', 'App Development', 'Integration'],
    tech: ['BigCommerce', 'ShipperHQ', 'NetSuite'],
    description:
      'Eco Products replatformed to BigCommerce, reducing costs and downtime while enabling global B2B growth with seamless integrations.',
  },
];

export default function CaseStudySlider() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-[#f9fafb] to-white overflow-hidden">
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

      <div className="relative text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Our <span className="text-[#099f70]">BigCommerce</span> Success Stories
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          As certified BigCommerce partners, we’ve empowered 50+ businesses with transformative solutions. Explore our case studies showcasing expertise and results.
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pb-12"
        >
          {caseStudies.map((caseItem) => (
            <SwiperSlide key={caseItem.id}>
              <div className="group flex flex-col lg:flex-row bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Image + Logo + Tags */}
                <div className="relative w-full lg:w-1/2 h-80 lg:h-[400px]">
                  <Image
                    src={caseItem.image}
                    alt={caseItem.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    {caseItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          tag === 'BigCommerce'
                            ? 'bg-[#099f70] text-white'
                            : 'bg-white text-gray-800 border border-gray-200'
                        }`}
                      >
                        {tag.toUpperCase()}
                      </span>
                    ))}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Image
                      src={caseItem.logo}
                      alt={`${caseItem.title} Logo`}
                      width={120}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{caseItem.title}</h3>
                    <div className="flex gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm w-1/2">
                        <h4 className="text-sm font-bold text-gray-800 mb-2">Service{caseItem.services.length > 1 && 's'}</h4>
                        <ul className="text-sm text-gray-600 list-disc pl-4 space-y-1">
                          {caseItem.services.map((s, i) => (
                            <li key={i}>{s}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg shadow-sm w-1/2">
                        <h4 className="text-sm font-bold text-gray-800 mb-2">Tech Stack</h4>
                        <ul className="text-sm text-gray-600 list-disc pl-4 space-y-1">
                          {caseItem.tech.map((t, i) => (
                            <li key={i}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-6 leading-relaxed">{caseItem.description}</p>
                  </div>
                  <button
                    className="px-6 py-3 bg-gradient-to-r from-[#099f70] to-[#446f70] text-white font-semibold rounded-full hover:scale-105 hover:from-[#077f50] hover:to-[#2a6b54] transition-all duration-300"
                    aria-label={`View ${caseItem.title} Case Study`}
                  >
                    Explore Case Study
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}