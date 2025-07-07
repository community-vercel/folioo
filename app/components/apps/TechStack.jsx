'use client';
import { useState } from 'react';
import Image from 'next/image';

const tabs = ['Backend', 'Frontend', 'Cloud', 'Data', 'All'];

const tools = {
  Backend: [
    { name: 'Node.js', icon: '/app/Node-Js-1.webp' },
    { name: 'Django', icon: '/app/Django.webp' },
    { name: 'Ruby on Rails', icon: '/app/Ruby-on-Rails.webp' },
    { name: 'Spring Boot', icon: '/app/Spring-Boot.webp' },
    { name: 'Express.js', icon: '/app/Express-Js.webp' },
    { name: 'Laravel', icon: '/app/Flask.webp' },
    { name: 'NestJS', icon: '/app/Laravel.webp' },
    { name: 'Go', icon: '/app/Golang.webp' },
  ],
  Frontend: [
    { name: 'React', icon: '/app/react.webp' },
    { name: 'Alpine', icon: '/app/ALPINE.webp' },
    { name: 'Vue.js', icon: '/app/BACKBONE.webp' },
    { name: 'Bootstrap', icon: '/app/bootsrP.webp' },
    { name: 'Svelte', icon: '/app/svelite.webp' },
  ],
  Cloud: [
    { name: 'AWS', icon: '/app/aws-1.webp' },
    { name: 'Vultr', icon: '/app/lultr.webp' },
    { name: 'Google Cloud', icon: '/app/cloud-flare.webp' },
    { name: 'Digital Web', icon: '/app/diigtal-ocrean.webp' },
  ],
  Data: [
    { name: 'Elastic Search', icon: '/app/elastic-search.webp' },
    { name: 'MongoDB', icon: '/app/mango-db.webp' },
    { name: 'MySQL', icon: '/app/my-sql.webp' },
    { name: 'Redis', icon: '/app/redis (1).webp' },
  ],

};

export default function AppTechStack() {
  const [activeTab, setActiveTab] = useState('Backend');
  const [hoveredTool, setHoveredTool] = useState(null);

  const displayedTools =
    activeTab === 'All' ? Object.values(tools).flat() : tools[activeTab] || [];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#f8fafc] to-[#e0f0ff] text-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute top-0 left-10 w-[500px] h-[500px] bg-cyan-300 rounded-full filter blur-4xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#446f70] rounded-full filter blur-4xl animate-pulse"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold  bg-clip-text text-gray animate-slide-up">
          Our App Development Tech Stack
        </h2>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto animate-slide-up delay-100">
          Novabloom leverages cutting-edge technologies to build high-performance mobile and web apps tailored to your needs.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mt-10 mb-12 flex-wrap animate-slide-up delay-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#446f70] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 md:px-12">
          {displayedTools.map((tool, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col items-center justify-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                hoveredTool === idx ? 'scale-105 bg-cyan-50' : ''
              } animate-fade-in`}
              style={{ animationDelay: `${idx * 100}ms` }}
              onMouseEnter={() => setHoveredTool(idx)}
              onMouseLeave={() => setHoveredTool(null)}
            >
              <Image
                src={tool.icon}
                alt={tool.name}
                width={60}
                height={60}
                className="object-contain mb-3 hover:scale-110 transition-transform duration-300"
              />
              <p className="text-sm font-semibold text-gray-800">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )}