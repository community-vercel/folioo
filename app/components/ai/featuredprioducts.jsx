'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';

export default function FeaturedProducts() {
  const products = [
    {
      title: 'SmartScribe AI',
      description: 'Convert audio into actionable insights with real-time transcription, sentiment analysis, and topic extraction powered by advanced AI.',
      image: '/salesforce/converse.webp',
      cta: 'Start Free Trial',
    },
    {
      title: 'EngageBot AI',
      description: 'Streamline customer engagement with an AI chatbot that automates support, drives conversions, and integrates across multiple platforms.',
      image: '/salesforce/chatbudyd.webp',
      cta: 'Try Now',
    },
  ];

  const successStories = [
    {
      client: 'MindSpace AI',
      title: 'Mental Wellness Chatbot',
      description: 'Our AI chatbot boosted MindSpace AI’s user engagement by 45%, providing 24/7 mental health support with personalized interactions.',
      image: '/salesforce/Automated-Authentication-for-Drive-Thrus.webp',
      cta: 'View Case Study',
    },
    {
      client: 'RetailFlow',
      title: 'AI Customer Support',
      description: 'RetailFlow reduced response times by 65% with EngageBot AI, enhancing customer satisfaction across their global e-commerce platform.',
      image: '/salesforce/road-traffic-analysis-1.webp',
      cta: 'Read Success Story',
    },
    {
      client: 'HealthTech Innovations',
      title: 'AI Medical Imaging',
      description: 'We delivered a computer vision solution for HealthTech, improving diagnostic accuracy by 30% with real-time imaging analysis.',
      image: '/salesforce/aigenics-2.webp',
      cta: 'Explore Case Study',
    },
      {
      client: 'Ai Agriculture Innovations',
      title: 'AI Agricultur Imaging',
      description: 'We delivered a computer vision solution for HealthTech, improving diagnostic accuracy by 30% with real-time imaging analysis.',
      image: '/salesforce/facial-recognition.webp',
      cta: 'Explore Case Study',
    },
  ];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="px-6 py-16 max-w-6xl mx-auto bg-gradient-to-b from-gray-50 to-white py-20">
      {/* Header */}
      <section className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 animate-fade-in">
          Unleash Innovation with Our AI Solutions
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto animate-fade-in delay-100">
          Cutting-edge AI products designed to empower businesses, from startups to global leaders, with transformative results.
        </p>
      </section>

      {/* Featured Products */}
      {products.map((product, index) => (
        <div
          key={index}
          className={`md:flex items-center justify-between mb-20 text-left ${
            index % 2 === 1 ? 'md:flex-row-reverse' : ''
          } animate-slide-in`}
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={350}
              className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="md:w-1/2 px-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">{product.description}</p>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              {product.cta}
            </button>
          </div>
        </div>
      ))}

      {/* Success Stories Slider */}
      <section className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 animate-slide-in">
          Proven Success Stories
        </h3>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto animate-slide-in delay-100">
          Discover how our AI solutions are driving real-world impact for businesses worldwide.
        </p>
      </section>

      <section
        className="relative"
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
          {successStories.map((story, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white  rounded-2xl shadow-lg p-6 h-[420px] flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div>
                  <Image
                    src={story.image}
                    alt={story.client}
                    width={300}
                    height={180}
                    className="rounded-lg w-full object-cover mb-4"
                  />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{story.client}</h4>
                  <h5 className="text-sm font-semibold text-cyan-600 mb-2">{story.title}</h5>
                  {/* <p className="text-gray-600 text-sm leading-relaxed">{story.description}</p> */}
                </div>
                {/* <button className="text-cyan-600 font-medium underline hover:text-cyan-700 transition-colors duration-200 mt-4">
                  {story.cta}
                </button> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}