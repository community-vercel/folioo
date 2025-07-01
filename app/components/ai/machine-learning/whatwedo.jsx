

'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FiCode, FiTool, FiStar } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaBrain } from 'react-icons/fa';
import { BsRocket } from 'react-icons/bs';
import Link from 'next/link';

export default function MachineLearningWhatWeDo() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <main className="font-sans">
      {/* What We Do Right Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 mb-6 animate-fade-in">
          Why We Excel in Machine Learning
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 animate-fade-in delay-100">
          Harness the power of machine learning with our cutting-edge solutions, designed to boost efficiency, unlock insights, and drive innovation for your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: 'Unmatched Technical Expertise',
              desc: 'Leverage our deep ML knowledge to build robust, future-proof solutions for sustainable growth.',
              icon: <FiCode className="text-cyan-500" size={32} />,
            },
            {
              title: 'Tailored ML Solutions',
              desc: 'Our iterative approach delivers customized ML models that align perfectly with your goals.',
              icon: <FaBrain className="text-cyan-500" size={32} />,
            },
            {
              title: 'Innovative Feature Development',
              desc: 'Incorporate advanced ML features like predictive analytics and automation to maximize efficiency.',
              icon: <FiTool className="text-cyan-500" size={32} />,
            },
            {
              title: 'Transformative ML Applications',
              desc: 'Create powerful ML apps for predictive insights, personalization, and operational excellence.',
              icon: <BsRocket className="text-cyan-500" size={32} />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`border rounded-lg bg-white shadow-lg p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in ${
                hoveredItem === index ? 'bg-blue-50' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 rounded-full mb-4 mx-auto">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <Link href='/contact'>
        
        <button className="mt-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-in">
          Start Your ML Journey
        </button>
        </Link>
      </section>


      {/* Our Customers Section with Swiper */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10 animate-fade-in">Trusted by Industry Leaders</h2>
        <div className="max-w-6xl mx-auto px-4">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            navigation
            className="pb-12"
          >
     {[
              { name: 'fairsquare', logo: '/logos/kingdom-gray_1.webp' },
              { name: 'squaretrade', logo: '/logos/techgrow-gray_1.webp' },
              { name: 'ludex', logo: '/logos/teamtables-gray_1.webp' },
              { name: 'aiden', logo: '/logos/symbphony-gray_1.webp' },
               { name: 'Opsis-Health', logo: '/logos/genucel-gray_1.webp' },
              { name: 'AutoComplete-OCR', logo: '/logos/satechi-gray_1.webp' },
             
            ].map((customer, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className={`p-4 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                    hoveredItem === `customer-${idx}` ? 'bg-blue-50' : ''
                  }`}
                  onMouseEnter={() => setHoveredItem(`customer-${idx}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Image
                    src={customer.logo}
                    alt={`${customer.name} logo`}
                    width={120}
                    height={60}
                    className="object-contain mx-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Hear From Our Clients Section with Swiper */}
      <section className="py-20 bg-gradient-to-b from-[#0b1736] to-[#1a3558] text-white text-center">
        <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 mb-10 animate-fade-in">
          What Our Clients Say
        </h2>
        <div className="max-w-6xl mx-auto px-4">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            navigation
            className="pb-12"
          >
            {[
              {
                text: '“Nova transformed our business with a predictive analytics platform that delivered results beyond expectations. Their team’s expertise and collaboration made all the difference.”',
                name: 'Mike Do',
                company: 'Darics & Nobile',
                color: 'bg-blue-600/80',
              },
              {
                text: '“The Nova team’s commitment to our ML project was outstanding. Their iterative approach and focus on quality delivered a robust solution that we highly recommend.”',
                name: 'Irshad',
                company: 'FairSquare UK',
                color: 'bg-[#0e1c3c]/80',
              },
              {
                text: '“Nova’s rapid delivery and open-minded approach turned our vision into a scalable ML system with minimal issues. Their expertise made the process seamless and enjoyable.”',
                name: 'Amy Wei',
                company: 'AutoComplete',
                color: 'bg-blue-700/80',
              },
                 {
                text: '“ delivery and open-minded approach turned our vision into a scalable ML system with minimal issues. Their expertise made the process seamless and enjoyable.”',
                name: 'Anis',
                company: 'AutoComplete',
                color: 'bg-blue-700/80',
              },
            ].map((item, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className={`p-6 rounded-xl ${item.color} hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                  onMouseEnter={() => setHoveredItem(`testimonial-${idx}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="flex justify-center mb-4">
                    <FiStar className="text-yellow-400" size={24} />
                  </div>
                  <p className="italic text-sm mb-4">{item.text}</p>
                  <h4 className="font-semibold text-lg">{item.name}</h4>
                  <p className="text-xs text-gray-300">{item.company}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  );
}

