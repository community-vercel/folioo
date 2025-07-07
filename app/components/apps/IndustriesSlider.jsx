'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const industries = [
  {
    title: 'HealthTech Apps',
    description:
      'Developed a cutting-edge mobile app for a leading healthtech provider, enabling seamless patient engagement.',
    image: '/salesforce/brightonpark-2-1-1.webp',
    logo: '/salesforce/Group-1-6.webp',
  },
  {
    title: 'FinTech Solutions',
    description:
      'Created a secure, user-friendly banking app for a global fintech leader, streamlining transactions and enhancing customer experiences.',
    image: '/salesforce/hiplink-1-300x271.webp',
    logo: '/salesforce/SQUARE-TRADE-1-1.webp',
  },
  {
    title: 'E-Commerce Platforms',
    description:
      'Built a high-performance e-commerce app with personalized shopping features, driving sales for a top retail brand.',
    image: '/salesforce/slb.webp',
    logo: '/salesforce/SLB-2-1.webp',
  },
    {
    title: 'HealthTech Apps',
    description:
      'Developed a cutting-edge mobile app for a leading healthtech provider, enabling seamless patient engagement .',
    image: '/salesforce/brightonpark-2-1-1.webp',
    logo: '/salesforce/Group-1-6.webp',
  },
  {
    title: 'FinTech Solutions',
    description:
      'Created a secure, user-friendly banking app for a global fintech leader, streamlining transactions and enhancing customer experiences.',
    image: '/salesforce/hiplink-1-300x271.webp',
    logo: '/salesforce/SQUARE-TRADE-1-1.webp',
  },
  {
    title: 'E-Commerce Platforms',
    description:
      'Built a high-performance e-commerce app with personalized shopping features, driving sales for a top retail brand.',
    image: '/salesforce/slb.webp',
    logo: '/salesforce/SLB-2-1.webp',
  },
];

const logos = [
  '/logos/kingdom-gray_1.webp',
  '/logos/techgrow-gray_1.webp',
  '/logos/teamtables-gray_1.webp',
  '/logos/symbphony-gray_1.webp',
  '/logos/genucel-gray_1.webp',
  '/logos/shoot-gray_1.webp',
  '/logos/satechi-gray_1.webp',
];

export default function AppIndustriesSlider() {
  const [hoveredTag, setHoveredTag] = useState(null);

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#446f70] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      {/* Top Logos Slider */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text   animate-fade-in">
          Trusted by Leading Brands
        </h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={4}
          spaceBetween={20}
          navigation
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="mt-8 max-w-6xl"
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-20">
                <Image
                  src={logo}
                  alt="Brand logo"
                  width={120}
                  height={60}
                  className="object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Industries Section */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 animate-fade-in delay-100">
          App Development Across Industries
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in delay-200">
          With expertise in building tailored mobile and web apps for <strong>HealthTech</strong>, <strong>FinTech</strong>, <strong>E-Commerce</strong>,
          and more, Novabloom delivers innovative solutions that drive success.
        </p>

        {/* Filter Tags (Static) */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in delay-300">
          {['HealthTech', 'FinTech', 'E-Commerce', 'EdTech', 'Retail', 'Logistics', 'Travel', 'Entertainment'].map((tag, index) => (
            <button
              key={tag}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                hoveredTag === index
                  ? '  text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onMouseEnter={() => setHoveredTag(index)}
              onMouseLeave={() => setHoveredTag(null)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Card Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {industries.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="border rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative w-full h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 right-3 bg-white p-2 rounded-lg shadow">
                    <Image src={item.logo} alt={`${item.title} Logo`} width={80} height={30} className="object-contain" />
                  </div>
                </div>
                <div className="p-6 text-left">
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="mt-12 bg-[#446f70] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-in">
          Explore Our App Solutions
        </button>
      </div>
    </section>
  );
}