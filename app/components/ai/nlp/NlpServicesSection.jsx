'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FiMessageSquare, FiMic, FiBarChart2, FiUsers } from 'react-icons/fi';
import {
  FiHeart,
  FiDollarSign,
  FiBookOpen,
  FiShoppingCart,
  FiFileText,
  FiHeadphones,
  FiTrendingUp,
  FiCpu,
} from 'react-icons/fi';
import Link from 'next/link';
export default function NlpSolutionsSection() {
  const industries = [
  { name: 'Healthcare', icon: FiHeart },
  { name: 'Finance', icon: FiDollarSign },
  { name: 'Education', icon: FiBookOpen },
  { name: 'Retail', icon: FiShoppingCart },
  { name: 'Legal', icon: FiFileText },
  { name: 'Customer Support', icon: FiHeadphones },
  { name: 'Marketing', icon: FiTrendingUp },
  { name: 'Technology', icon: FiCpu },
];
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="bg-gradient-to-b from-[#0b1736] to-[#1a3558] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 animate-fade-in">
          Unleash Insights with Novabloom’s NLP Solutions
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6 animate-fade-in delay-100">
          Novabloom’s cutting-edge Natural Language Processing services transform text and voice data into actionable insights, empowering businesses with intelligent chatbots, sentiment analysis, and more.
        </p>
        <p className="text-base text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in delay-200">
          Our advanced NLP applications leverage state-of-the-art algorithms to understand language, detect patterns, and deliver tailored solutions for professional and everyday use.
        </p>

        {/* Icons Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center text-center mb-16">
          {[
            { label: 'Conversational AI', icon: <FiMessageSquare className="text-cyan-400" size={40} /> },
            { label: 'Speech Recognition', icon: <FiMic className="text-cyan-400" size={40} /> },
            { label: 'Sentiment Analysis', icon: <FiBarChart2 className="text-cyan-400" size={40} /> },
            { label: 'Audience Insights', icon: <FiUsers className="text-cyan-400" size={40} /> },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center hover:-translate-y-2 transition-all duration-300 ${
                hoveredItem === `icon-${index}` ? 'opacity-100' : 'opacity-80'
              }`}
              onMouseEnter={() => setHoveredItem(`icon-${index}`)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <p className="text-sm font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Solutions Section */}
      <div className="bg-white text-center py-16 text-gray-800">
        <h3 className="text-3xl font-extrabold text-gray-900 mb-4 animate-fade-in">
          Tailored NLP Solutions
        </h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 animate-fade-in delay-100">
          Discover our powerful NLP tools designed to enhance productivity and insights across personal and professional applications.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12 px-4">
          {[
            {
              label: 'Intelligent Chatbots',
              img: '/salesforce/Audio-Transcription-Software-351x240.png',
              desc: 'Automate customer support with AI-powered conversational agents.',
            },
            {
              label: 'Voice Analytics',
              img: '/salesforce/Video-Transcription-Software-351x240.png',
              desc: 'Extract insights from voice data with real-time transcription.',
            },
            {
              label: 'Text Sentiment Analysis',
              img: '/salesforce/Sentiment-Analysis-Solution-1-351x240.png',
              desc: 'Understand customer emotions through advanced text analysis.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in ${
                hoveredItem === `solution-${index}` ? 'bg-blue-50' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredItem(`solution-${index}`)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Image
                src={item.img}
                alt={item.label}
                width={400}
                height={200}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <p className="font-semibold text-lg mb-2">{item.label}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
                  <Link href='/contact'>

        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-in">
          Connect with Our Experts
        </button>
        </Link>
      </div>

      {/* Industry Section */}
   <div className="bg-[#0a1a33] text-white py-16 text-center">
      <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 animate-fade-in">
        Empowering Diverse Industries with NLP
      </h3>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in delay-100">
        Our innovative NLP solutions are tailored to drive transformation across a wide range of industries.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {industries.map((industry, idx) => {
          const Icon = industry.icon;
          return (
            <div
              key={idx}
              className={`flex flex-col items-center hover:-translate-y-2 transition-all duration-300 ${
                hoveredItem === `industry-${idx}` ? 'opacity-100' : 'opacity-80'
              }`}
              onMouseEnter={() => setHoveredItem(`industry-${idx}`)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="w-12 h-12 bg-cyan-900/30 rounded-full flex items-center justify-center mb-2">
                <Icon className="text-cyan-400" size={24} />
              </div>
              <p className="text-sm font-medium">{industry.name}</p>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}