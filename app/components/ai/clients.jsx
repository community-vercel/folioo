'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';

export default function Clients() {
  const testimonials = [
    {
      logo: '/salesforce/barnes-and-noble.webp',
      text: 'Folio3’s AI solutions transformed our operations, delivering innovative tools with unmatched speed and precision.',
      name: 'Mike Do',
      company: 'BARNES & NOBLE',
    },
    {
      logo: '/salesforce/ludex-1.webp',
      text: 'Their dedicated team brought our vision to life with cutting-edge AI, exceeding our expectations every step of the way.',
      name: 'Irshad Khan',
      company: 'FAIRSQUARE UK',
    },
    {
      logo: '/salesforce/autocomplete-2.webp',
      text: 'Folio3’s expertise in AI accelerated our startup’s growth, providing scalable solutions tailored to our needs.',
      name: 'Andrew Clarkson',
      company: 'LOCKED IN LACROSSE',
    },
    {
      logo: '/salesforce/fair-square.webp',
      text: 'The AI chatbot Folio3 built for us boosted engagement by 50%, revolutionizing our customer support.',
      name: 'Sarah Lee',
      company: 'AIGENICS',
    },
  ];

  const insights = [
    {
      img: '/salesforce/The-Complete-Guide-to-Drone-Inspection-scaled.jpg',
      title: 'Mastering Drone Inspection with AI',
      desc: 'Explore how AI-powered drones are revolutionizing safety and efficiency in industrial inspections.',
      author: 'Folio3 Team',
      date: 'June 13, 2025',
      cta: 'Read More',
    },
    {
      img: '/salesforce/drone-infrastructure-inspection .png',
      title: 'AI for Infrastructure: Key Innovations',
      desc: 'Discover the technologies transforming inspections of bridges, railways, and power lines with AI.',
      author: 'Folio3 Team',
      date: 'June 11, 2025',
      cta: 'Learn More',
    },
    {
      img: '/salesforce/drone-utility-inspection.png',
      title: 'AI-Driven Utility Inspections',
      desc: 'See how AI enhances precision and speed in utility inspections, from pipelines to power grids.',
      author: 'Folio3 Team',
      date: 'June 10, 2025',
      cta: 'Explore Now',
    },
  ];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white px-6 py-16">
      {/* Testimonials Slider */}
      <section className="text-center mb-20 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 animate-fade-in">
          Our Clients Rave About Us
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto animate-fade-in delay-100">
          Hear from businesses transformed by our innovative AI solutions.
        </p>

        <div
          className="relative mt-12"
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
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: isHovered,
            }}
            navigation
            pagination={{ clickable: true }}
            className="py-8"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-2xl shadow-lg p-6 h-[320px] flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div>
                    <div className="mb-4">
                      <Image src={t.logo} alt={t.company} width={140} height={40} className="object-contain" />
                    </div>
                    <p className="text-sm text-gray-700 italic leading-relaxed mb-4">"{t.text}"</p>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.company}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* AI Insights and Updates */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 animate-slide-in">
          Latest AI Insights
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((post, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Image
                src={post.img}
                alt={post.title}
                width={400}
                height={240}
                className="w-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{post.desc}</p>
                <div className="text-xs text-gray-500 flex justify-between items-center">
                  <span>By: {post.author}</span>
                  <span>{post.date}</span>
                </div>
                <button className="text-cyan-600 font-medium underline hover:text-cyan-700 transition-colors duration-200 mt-4">
                  {post.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )}