'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';

export default function AppClients() {
  const testimonials = [
    {
      logo: '/app/growers.webp',
      text: 'Novabloom’s app development transformed our e-commerce platform, boosting sales by 40% with a seamless user experience.',
      name: 'Emma Thompson',
      company: 'SHOPIFY VENTURES',
    },

    {
      logo: '/app/LM.webp',
      text: 'Novabloom’s expertise in cross-platform apps accelerated our market entry, driving user engagement for our startup.',
      name: 'Lisa Chen',
      company: 'FINTECH FLOW',
    },
    {
      logo: '/app/face.png',
      text: 'The custom app Novabloom built for us enhanced customer support, increasing retention rates by 35%.',
      name: 'Mark Alvarez',
      company: 'TRAVELSPARK',
    },
      {
      logo: '/app/the-neuro.webp',
      text: 'The custom app Novabloom built for us enhanced customer support, increasing retention rates by 35%.',
      name: 'Mark Alvarez',
      company: 'TRAVELSPARK',
    },
  ];

  const insights = [
    {
      img: '/app/banner-72.png',
      title: 'Top Mobile App Trends for 2025',
      desc: 'Discover the latest innovations shaping the future of mobile apps, from AI integration to immersive UX.',
      author: 'Novabloom Team',
      date: 'June 15, 2025',
      cta: 'Read More',
    },
    {
      img: '/app/5-Top-Cross-Platform-App-Development-Frameworks_result.webp',
      title: 'Mastering Cross-Platform Development',
      desc: 'Learn how frameworks like Flutter and React Native are revolutionizing app development efficiency.',
      author: 'Novabloom Team',
      date: 'June 12, 2025',
      cta: 'Learn More',
    },
    {
      img: '/app/Gulf-Blue-Simple-Professional-How-To-Improve-Your-SEO-Rankings-Blog-Banner-11-1200x675.png',
      title: 'Optimizing App Performance',
      desc: 'Explore strategies to enhance app speed, scalability, and user satisfaction in competitive markets.',
      author: 'Novabloom Team',
      date: 'June 10, 2025',
      cta: 'Explore Now',
    },
  ];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative bg-gradient-to-b from-[#f8fafc] to-[#e0f0ff] px-6 py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute top-0 left-10 w-[500px] h-[500px] bg-cyan-300 rounded-full filter blur-4xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#446f70] rounded-full filter blur-4xl animate-pulse"></div>
      </div>

      {/* Testimonials Slider */}
      <section className="text-center mb-24 max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray animate-slide-up">
          Clients Love Our Apps
        </h2>
        <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto animate-slide-up delay-100">
          Hear from businesses empowered by Novabloom’s innovative mobile and web app solutions.
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
                <div className="bg-white rounded-2xl shadow-lg p-8 h-[340px] flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
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

      {/* App Insights and Updates */}
      <section className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold  text-center mb-12 animate-slide-up">
          Latest App Development Insights
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((post, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 150}ms` }}
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
                <button className="text-white font-medium text-sm hover:text-white transition-colors duration-200 mt-4">
                  {post.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )}