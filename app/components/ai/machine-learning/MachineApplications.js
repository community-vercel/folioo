'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';


const applications = [
  {
    title: 'Predictive Analytics',
    description: 'Forecast trends and behaviors with ML models, empowering retail, finance, and healthcare to make data-driven decisions.',
    image:  '/salesforce/Detection-351x241.webp',


  },
  {
    title: 'Healthcare',
    description: 'Find the right treatment for every patient and elevate your patient care. With the capabilities to automate key practices and processes, Machine Learning services are being used to solve the healthcare problems of today.',
    image:  '/salesforce/Healthcare-2-352x240.webp',
  },
  {
    title: 'Retail',
    description: 'Identify fraudulent transactions in real-time with ML, enhancing security for banking and fintech industries.',
    image:  '/salesforce/retail-352x240.webp',
  },
  {
    title: 'Recommendation Systems',
    description: 'Drive engagement with personalized recommendations for media, retail, and streaming platforms using advanced ML.',
    image:  '/salesforce/ecommerce-1-352x240.webp',
  },
  {
    title: 'Demand Forecasting',
    description: 'Optimize inventory and supply chain with ML-driven demand predictions for retail and logistics.',
    image:  '/salesforce/transportation-352x240.webp',
  },
  {
    title: 'Natural Language Processing',
    description: 'Automate customer support with chatbots and sentiment analysis, transforming service in telecom and e-commerce.',
    image:  '/salesforce/manufacturing-352x240.webp',
  },
  {
    title: 'Churn Prediction',
    description: 'Reduce customer churn with ML models that predict and address at-risk customers in SaaS and subscriptions.',
    image:  '/salesforce/logistics-352x240.webp',
  },
  
];
export default function MachineFApplications() {
  const [isHovered, setIsHovered] = useState(false);

  // Select a subset of applications for the featured slider
  const featuredApps = applications.slice(0, 6);

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 animate-fade-in">
          Revolutionize Industries with AI Vision
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-6xl mx-auto animate-fade-in delay-100">
          Discover how our advanced computer vision applications drive innovation across sectors, from healthcare to smart cities.
        </p>


       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {applications.map((app, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-2xl"></div>
              <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{app.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{app.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 animate-slide-in">
          <button
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Launch Your Vision Project
          </button>
        </div>
      </div>
    </section>
  )}