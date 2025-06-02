'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

const services = [

  { label: '', color: 'bg-black' },
    { label: 'App Development', color: 'bg-yellow-400' },
  { label: 'Cloud Solutions', color: 'bg-yellow-400' },
  { label: 'AI', color: 'bg-black' },
  { label: 'NetSuite', color: 'bg-blue-500' },
  { label: 'Microsoft Dynamics', color: 'bg-red-500' },
  { label: 'Ecommerce', color: 'bg-cyan-500' },
  { label: 'AgTech', color: 'bg-orange-400' },
  { label: 'Digital Health', color: 'bg-pink-500' },
  { label: 'EdTech', color: 'bg-indigo-500' },
];

const slides = [
  {
    title: 'Folio3 Achieves AWS Lambda Service Delivery Designation',
    subtitle: 'ELEVATING CLOUD INNOVATION',
    description: 'Accelerate your business growth with our expert cloud services',
    image: '/Aws-Lamdba_Rev_banner.webp',
  },
  {
    title: 'Discover What ProperTese Can Do For You',
    subtitle: 'Platform Designed to address all aspects of real estate operations',
    description: 'in a single, user-friendly interface',
    image: '/Propertese-CTA-NetSuite.webp',
  },
  // Duplicate slides for smoother looping

];

export default function WhatsNew() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 max-w-screen-xl mx-auto">
      {/* Section Title */}
      <h1 className="text-5xl font-extrabold mb-10">What's new at Folio3</h1>

      {/* Top Banner Image */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        loop
        speed={1000}
        className="w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 md:p-12 rounded-lg">
              {/* Left Content */}
              <div className="md:w-2/3 space-y-4">
                {slide.subtitle && (
                  <p className="uppercase text-sm tracking-widest text-blue-300 font-semibold">
                    {slide.subtitle}
                  </p>
                )}
                <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
                <p className="text-sm md:text-base text-blue-100">{slide.description}</p>
              </div>

              {/* Right Image */}
              <div className="mt-6 h-40 md:mt-0 md:w-1/3 flex justify-center">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={300}
                  height={600}
                  className="object-contain "
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mt-16">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Your full service</h2>
          <p className="text-2xl font-semibold text-gray-800 -mt-3">
            digital and software partner
          </p>
          <p className="text-sm text-black-600  font-semibold">
            Dedicated to helping you and your business grow from inception to success.
          </p>
          <p className="text-sm text-black-600  font-semibold">
            We specialize in crafting cutting-edge digital solutions, enhancing your online presence that drive sales with websites and e-commerce stores, optimize your operations for greater efficiency and profitability through ERP and cloud solutions.
          </p>
          <p className="text-sm text-black-600  font-semibold">
            With our expertise, creativity, and commitment, we turn your ideas into reality, ensuring your business thrives in the digital age.
          </p>
          <button className="mt-4 px-4 py-3 border border-black text-sm font-medium rounded-full hover:bg-black hover:text-white transition">
            Ask Folio3 experts how to unlock your full potential.
          </button>
        </div>

        {/* Center Timeline */}
        <div className="hidden md:flex flex-col items-center relative h-full">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 w-px bg-black/50" />
          {services.map((s, i) => (
            <div key={i} className="relative z-10 mb-6">
              <div className={`w-3 h-3 rounded-full border-2 border-black ${s.color}`} />
            </div>
          ))}
          
        </div>
 <div className="space-y-4 text-sm font-bold text-gray-900 -ml-40 mt-4">
          {services.map((s, i) => (
            <p key={i}>{s.label}</p>
          ))}
        </div>
        {/* Right List */}
       
      </div>
    </section>
  );
}