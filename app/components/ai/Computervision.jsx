'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import clsx from 'clsx';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';

export default function ComputerVision() {
  const industries = [
    'Healthcare', 'Sports', 'Transportation', 'Agtech',
    'Manufacturing', 'Logistics', 'Retail', 'Ecommerce',
    'Aviation', 'Restaurants', 'Fitness', 'Telecom',
    'Travel', 'Education',
  ];

  const models = [
    { title: 'Activity Detection', image: '/salesforce/vehicle-detection.webp' },
    { title: 'Anonymization', image: '/salesforce/activity-detection.webp' },
    { title: 'PPE Detection', image: '/salesforce/ppe-services.png' },
    { title: 'Object Recognition', image: '/salesforce/anonymyzation.webp' },
  ];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white px-6 py-16">
      {/* Header */}
      <section className="text-center max-w-5xl mx-auto mb-12">
        <h2
          className={clsx(
            'text-4xl md:text-5xl font-extrabold text-gray-900',
            'bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 animate-fade-in'
          )}
        >
          Transform Industries with Cutting-Edge Computer Vision
        </h2>
        <p
          className={clsx(
            'text-lg text-gray-600 mt-4 max-w-3xl mx-auto',
            'animate-fade-in delay-100'
          )}
        >
          Leverage our prebuilt AI vision models to unlock powerful insights with minimal setup.
        </p>
      </section>

      {/* Prebuilt Models Carousel */}
      <section
        className="relative mb-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: isHovered,
          }}
          navigation
          pagination={{ clickable: true }}
          className="py-4  max-w-6xl"
        >
          {models.map((model, index) => (
            <SwiperSlide key={index}>
              <div
                className={clsx(
                  'bg-white rounded-xl shadow-lg ',
                  'hover:shadow-xl hover:-translate-y-2 transition-all duration-300'
                )}
              >
                <div className="h-40 w-full relative rounded-t-xl overflow-hidden">
                  <Image
                    src={model.image}
                    alt={model.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-gray-800">{model.title}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div className="flex justify-center mb-16">
        <button
          className={clsx(
            'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold',
            'px-8 py-3 rounded-full shadow-lg',
            'hover:shadow-xl hover:scale-105 transition-all duration-300'
          )}
        >
          Explore AI Models
        </button>
      </div>

      {/* Industry Services */}
      <section className="text-center mb-8">
        <h3
          className={clsx(
            'text-3xl font-bold text-gray-900',
            'animate-slide-in'
          )}
        >
          Innovating Across Sectors
        </h3>
        <p
          className={clsx(
            'text-gray-600 mt-2 max-w-2xl mx-auto',
            'animate-slide-in delay-100'
          )}
        >
          Our AI vision solutions drive efficiency and growth in diverse industries.
        </p>
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
        {industries.map((industry, index) => (
          <div
            key={industry}
            className={clsx(
              'relative bg-white rounded-lg p-4 text-sm font-medium text-gray-700',
              'shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300',
              'animate-fade-in'
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-lg"></div>
            {industry}
          </div>
        ))}
      </section>

      <div className="flex justify-center">
        <button
          className={clsx(
            'bg-transparent border-2 border-cyan-500 text-cyan-500 font-semibold',
            'px-8 py-3 rounded-full',
            'hover:bg-cyan-500 hover:text-white transition-all duration-300'
          )}
        >
          Consult Our Experts
        </button>
      </div>
    </div>
  );
}