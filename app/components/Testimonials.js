"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function TestimonialsSlider() {
  const testimonials = [
    {
logo: '/logos/progresive.png',

      content:
        "Nova Bloom transformed our vision into a stunning mobile app. Their team’s expertise and dedication ensured a seamless user experience that our customers love. We couldn’t be happier with the results!",
      name: "Emma Larson",
      title: "Chief Product Officer",
      company: "TechWave Solutions",
    },

    {
      logo: '/logos/achelois.png',

      content:
        "Nova Bloom’s AI expertise helped us optimize our supply chain like never before. Their team was responsive, creative, and delivered a solution that’s driving real business impact.",
      name: "Sophie Nguyen",
      title: "Operations Manager",
      company: "GreenPulse Logistics",
    },
    {
      logo: '/logos/Twin.png',

      content:
        "Our e-commerce platform saw a 40% increase in conversions after Nova Bloom revamped our Shopify store. Their design and development skills are top-notch, and they’re a pleasure to work with!",
      name: "Liam Carter",
      title: "E-commerce Strategist",
      company: "BrightCart",
    },
    {
      logo: '/logos/Truetrac-1.png',

      content:
        "Nova Bloom’s cloud migration services were flawless. They made a complex process feel effortless, and our team is now more productive thanks to their robust infrastructure solutions.",
      name: "Olivia Mendes",
      title: "IT Director",
      company: "CloudSpire Technologies",
    },
    {
      logo: '/logos/maestro.webp',

      content:
        "The Nova Bloom team brought our e-learning platform to life with a vibrant, intuitive design. Their commitment to quality and user experience has made our platform a student favorite!",
      name: "Noah Kim",
      title: "Founder",
      company: "LearnVibe Academy",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 mb-8 sm:mb-12 text-center">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
          className="pb-12"
        >
          
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white border border-gray-100 shadow-lg rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <Image
                  src={t.logo}
                  alt={`${t.company} logo`}
                  width={120}
                  height={40}
                  className="mx-auto mb-6 h-10 object-contain"
                />
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 text-center">
                  {t.content}
                </p>
                <div className="text-center">
                  <p className="font-semibold text-base text-navy-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.title}, {t.company}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            className="swiper-button-prev w-10 h-10 flex items-center justify-center bg-navy-900 text-white rounded-full hover:bg-coral-500 transition-colors duration-200"
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="swiper-pagination !static" />
          <button
            className="swiper-button-next w-10 h-10 flex items-center justify-center bg-navy-900 text-white rounded-full hover:bg-coral-500 transition-colors duration-200"
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <style jsx global>{`
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #d1d5db; /* gray-300 */
            opacity: 0.4;
            transition: all 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            width: 12px;
            height: 12px;
            background: #446f70; /* navy-900 */
            opacity: 1;
          }
          .swiper-button-prev,
          .swiper-button-next {
            outline: none;
          }
          .swiper-button-prev:after,
          .swiper-button-next:after {
            display: none;
          }
          @media (max-width: 639px) {
            .swiper-pagination-bullet {
              width: 8px;
              height: 8px;
            }
            .swiper-pagination-bullet-active {
              width: 10px;
              height: 10px;
            }
          }
        `}</style>
      </div>
    </section>
  




)}