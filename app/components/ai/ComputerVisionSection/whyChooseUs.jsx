

'use client';
import { useState } from 'react';
import {
  FiTarget,
  FiVideo,
  FiClock,
  FiUsers,
  FiStar,
} from 'react-icons/fi';

const features = [
  {
    title: 'Accurate Data Insights',
    description: 'Extract precise data from images with our advanced AI, delivering actionable insights to fuel your business growth.',
    icon: FiTarget,
  },
  {
    title: 'Advanced Vision Analysis',
    description: 'Leverage AI for object classification, segmentation, and detection, creating powerful image and video applications.',
    icon: FiVideo,
  },
  {
    title: 'Over 15 Years of Expertise',
    description: 'Benefit from our proven track record in crafting high-performance AI vision solutions tailored to your needs.',
    icon: FiClock,
  },
  {
    title: 'Certified AI Specialists',
    description: 'Our expert engineers deliver innovative, custom solutions to overcome your toughest business challenges.',
    icon: FiUsers,
  },
  {
    title: 'Trusted by 1000+ Enterprises',
    description: 'Join a global client base that relies on our cutting-edge vision solutions for success.',
    icon: FiStar,
  },
];

export default function WhyChooseUs() {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 animate-fade-in">
          Why Partner with nova for AI Vision?
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in delay-100">
          Our tailored computer vision solutions empower businesses to stay ahead with industry-leading expertise and innovation.
        </p>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in group w-full max-w-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-2xl"></div>
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 rounded-full mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-cyan-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 animate-slide-in">
          <button
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            onMouseEnter={() => setIsHovered('cta')}
            onMouseLeave={() => setIsHovered(null)}
            aria-label="Request a demo"
          >
            See Our Solutions in Action
          </button>
        </div>
      </div>
    </section>
  )}

