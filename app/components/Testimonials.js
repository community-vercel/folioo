'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialsSlider() {
  const testimonials = [
    {
      logo: '/logos/progresive.png',
      content:
        'I am happy to recognize the work that was done by the Folio3 team. Our end users are very satisfied with the user interface and the performance of the app – and are excited to be more mobile. I appreciate the hard work and commitment to deliver a top quality solution.',
      name: 'Sandy Kabat',
      title: 'Systems Administrator',
    },
    {
      logo: '/logos/air-med.png',
      content:
        'We have successfully been able to accept orders via Magento, sync to AX, create manual orders in AX, send the shipping files to EGS, receive back the confirmation file and update Magento with shipping information. Thank you to the entire team!',
      name: 'Maridee Lemieux',
      title: 'IT Project Manager',
    },
    {
      logo: '/logos/achelois.png',
      content:
        'I would like to give a special shout-out to the team. You are doing a great job as a team. I’m very proud of you guys. You all are making my ideas come to life. All your efforts are highly appreciated.',
      name: 'Robin Mehdee',
      title: 'Manager Web Development Team',
    },
    {
      logo: '/logos/Twin.png',
      content:
        'Twinstrata has partnered with Folio3 for several years since the very early days of our company. We have been able to offload a significant portion of our development effort to their team. They have been reliable and responsive to our needs.',
      name: 'Mark Aldred',
      title: 'Director, Product Development',
    },
    {
      logo: '/logos/Truetrac-1.png',
      content:
        'The Folio3 team has consistently exceeded our expectations. It felt as if we were working with an onshore team. It was their ability to understand our needs and keep us engaged throughout the entire process that has resulted in an exceptional product and a valued partner.',
      name: 'Johnny McGuire',
      title: 'Product Manager',
    },
    {
      logo: '/logos/maestro.webp',
      content:
        'Folio3 nails it again and again. Their development & QA work is absolutely flawless, couldn’t have asked for a better technology partner.',
      name: 'Thais Forneret',
      title: 'Back Office Manager',
    },
  ];

  return (
    <section className="bg-white py-8 sm:py-14">
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 sm:mb-10 text-center">
          Customer Testimonials
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { spaceBetween: 20, slidesPerView: 1 },
            768: { spaceBetween: 30, slidesPerView: 2 },
            1024: { spaceBetween: 30, slidesPerView: 3 },
          }}
          className="pb-8 sm:pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white border border-gray-200 shadow-sm rounded-md p-4 sm:p-6 h-full flex flex-col justify-between text-center">
                <Image
                  src={t.logo}
                  alt={`${t.name} company logo`}
                  width={100}
                  height={40}
                  className="mx-auto mb-4 h-8 sm:h-10 object-contain"
                />
                <p className="text-gray-700 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed text-left">
                  {t.content}
                </p>
                <div className="text-left">
                  <p className="font-bold text-xs sm:text-sm text-black">{t.name}</p>
                  <p className="text-[0.65rem] sm:text-xs text-gray-500">{t.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .swiper {
            margin-left: auto;
            position: relative;
            overflow: hidden;
            list-style: none;
            padding: revert-layer !important;
            z-index: 2;
            display: block;
          }
          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: #d1d5db; /* gray-300 */
            opacity: 0.5;
          }
          .swiper-pagination-bullet-active {
            background: #1f2937; /* gray-800 */
            opacity: 1;
          }
          @media (max-width: 639px) {
            .swiper-pagination-bullet {
              width: 6px;
              height: 6px;
            }
          }
        `}</style>
        <div className="flex justify-center mt-4">
          <div className="swiper-pagination !static" />
        </div>
      </div>
    </section>
  );
}