'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import clsx from 'clsx';
import 'swiper/css';
import 'swiper/css/navigation';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const slides = [
  {
    logo: '/salesforce/electrocore-logo.webp',
    title: 'electroCore',
    description: `Nova Boom helped Electrocore enhance their Salesforce CRM by improving sales cycle tracking and service delivery while ensuring HIPAA compliance. We integrated Salesforce with marketing automation and Oracle NetSuite ERP for a streamlined order-to-cash process. The solution also improved data synchronization and provided better insights for customer engagement.`,
    laptopImg: '/salesforce/electrocore-img-grid.webp',
  },
  {
    logo: '/salesforce/majorkey-logo.webp',
    title: 'MajorKey',
    description: `Major Key Technologies, our success is measured by the milestones our clients achieve. Explore how we've empowered businesses with cutting-edge solutions, driving growth and innovation.`,
    laptopImg: '/salesforce/majorkey-cs-img-grid.webp',
  },
];

export default function SalesforceSuccessSlider() {
  return (
    <section className="bg-[#eaf6ff] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Leading Enterprises Trust Salesforce + Nova Boom Expertise to <br />
          Accelerate Digital Transformation
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-next',
              prevEl: '.swiper-prev',
            }}
            loop
            spaceBetween={40}
            className="px-4"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="grid md:grid-cols-2 items-center gap-8">
                  <div>
                    <img src={slide.logo} alt={`${slide.title} logo`} className="h-10 mb-6" />
                    <p className="text-gray-700 mb-6 text-lg">{slide.description}</p>
                    <button className="bg-[#446f70] text-white px-6 py-3 rounded-full font-medium shadow hover:bg-[#001d3a] transition">
                      Speak With A Salesforce Specialist
                    </button>
                  </div>
                  <div className="flex justify-center items-end relative">
                    <img src={slide.laptopImg} alt="Laptop view" className="z-10 w-[90%] max-w-[500px]" />
                   
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-center mt-10">
            <button className="swiper-prev bg-[#446f70] text-white rounded-full p-3 hover:bg-[#001d3a] transition">
              <FiChevronLeft size={20} />
            </button>
            <button className="swiper-next bg-[#446f70] text-white rounded-full p-3 hover:bg-[#001d3a] transition">
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
