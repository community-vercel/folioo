'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaGlobe, FaUsers, FaMobileAlt, FaSmile, FaFlag } from 'react-icons/fa';

const stats = [
  { value: '15+', label: 'Years Crafting Apps', icon: <FaMobileAlt />, color: 'text-cyan-500' },
  { value: '900+', label: 'App Experts', icon: <FaUsers />, color: 'text-blue-600' },
  { value: '2500+', label: 'Apps Delivered', icon: <FaGlobe />, color: 'text-purple-600' },
  { value: '1800+', label: 'Happy Clients', icon: <FaSmile />, color: 'text-yellow-400' },
  { value: '30+', label: 'Countries Served', icon: <FaFlag />, color: 'text-teal-500' },
];

export default function AppGlobalReach() {
  const [hoveredPin, setHoveredPin] = useState(null);

  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50 py-24 px-6 md:px-16 overflow-hidden">
      {/* Background Circles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
          Novabloom’s <span className="text-blue-600">Global App Impact</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Powering innovation with custom mobile and web apps across{' '}
          <span className="text-cyan-600 font-semibold">10+ Countries</span>
        </p>

        {/* World Map Image */}
        {/* <div className="rounded-xl overflow-hidden shadow-2xl mb-16 border border-gray-200"> */}
          <Image
            src="/salesforce/map-1-768x306.webp"
            alt="Global App Reach"
            width={1000}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
        {/* </div> */}

        {/* Stats with Icons */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center transform hover:-translate-y-2"
            >
              <div className={`text-3xl mb-2 ${stat.color}`}>{stat.icon}</div>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-sm font-medium text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )}