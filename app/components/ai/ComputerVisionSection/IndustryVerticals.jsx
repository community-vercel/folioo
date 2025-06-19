'use client';
import { useState } from 'react';
import { BsCarFront } from 'react-icons/bs';
import { FaStore } from 'react-icons/fa';
import {
  FiShoppingCart,
  FiTool,
  FiHeart,
  FiPlayCircle,
  FiActivity,
 
  FiMapPin,
} from 'react-icons/fi';
import { GiPlantWatering } from 'react-icons/gi';
import { MdPrecisionManufacturing } from 'react-icons/md';
import { SiDrone } from 'react-icons/si';

const useCases = [
  {
    title: 'eCommerce',
    description: 'Transform online retail with virtual try-ons, AI recommendations, and visual search for seamless shopping experiences.',
    icon: FiShoppingCart,
  },
  {
    title: 'Retail',
    description: 'Boost store efficiency with smart shelves, customer analytics, and cashier-less checkouts for a modern retail experience.',
    icon: FaStore,
  },
  {
    title: 'Agritech',
    description: 'Enhance farming with drone crop monitoring, pest detection, and AI insights for sustainable, high-yield agriculture.',
    icon: GiPlantWatering,
  },
  {
    title: 'Drones',
    description: 'Power autonomous drones for inspections, surveillance, and obstacle detection with cutting-edge vision technology.',
    icon: SiDrone,
  },
  {
    title: 'Manufacturing',
    description: 'Achieve flawless production with AI defect detection, predictive maintenance, and automated quality control.',
    icon: MdPrecisionManufacturing,
  },
  {
    title: 'Healthcare',
    description: 'Revolutionize diagnostics with AI-powered medical imaging for faster, more accurate patient outcomes.',
    icon: FiHeart,
  },
  {
    title: 'Sports',
    description: 'Elevate performance with real-time player and ball tracking, delivering actionable game insights.',
    icon: FiPlayCircle,
  },
  {
    title: 'Fitness',
    description: 'Personalize fitness with posture analysis, movement tracking, and real-time workout feedback.',
    icon: FiActivity,
  },
  {
    title: 'Automotive',
    description: 'Enhance safety with driver monitoring, object detection, and AI-assisted driving systems.',
    icon: BsCarFront,
  },
  {
    title: 'Transportation',
    description: 'Optimize travel with traffic monitoring, vehicle tracking, and secure facial recognition systems.',
    icon: FiMapPin,
  },
];

export default function IndustryVerticals() {
  const [isHovered, setIsHovered] = useState(null);

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
          AI Vision for Every Industry
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in delay-100">
          Unlock innovation with our tailored computer vision solutions, delivering impact across diverse sectors.
        </p>

        {/* Use Cases Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon || FiTool; // Fallback to FiTool if icon is undefined
            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-2xl"></div>
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 rounded-full mb-4">
                  <Icon className="w-6 h-6 text-cyan-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{useCase.description}</p>
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
            aria-label="Explore industry solutions"
          >
            Discover Your Solution
          </button>
        </div>
      </div>
    </section>
  )}