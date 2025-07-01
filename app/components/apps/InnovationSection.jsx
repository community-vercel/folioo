'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FiPenTool, FiCode, FiGlobe, FiBarChart2, FiZap } from 'react-icons/fi';
import Link from 'next/link';

const features = [
  {
    title: 'Stunning UI/UX Design',
    desc: 'Creating visually captivating, user-friendly app interfaces that align with your brand and delight users.',
    icon: <FiPenTool className="text-cyan-500 text-3xl" />,
    position: 'top-left',
  },
  {
    title: 'Seamless Development',
    desc: 'Delivering robust, cross-platform apps from ideation to deployment with unmatched precision.',
    icon: <FiCode className="text-blue-500 text-3xl" />,
    position: 'bottom-left',
  },
  {
    title: 'Worldwide Scalability',
    desc: 'Building apps that scale effortlessly, connecting businesses to global audiences with innovative features.',
    icon: <FiGlobe className="text-purple-500 text-3xl" />,
    position: 'bottom-center',
  },
  {
    title: 'Smart Analytics',
    desc: 'Integrating powerful analytics to uncover user behavior insights and boost app performance.',
    icon: <FiBarChart2 className="text-blue-600 text-3xl" />,
    position: 'top-right',
  },
  {
    title: 'Swift Agile Deployment',
    desc: 'Launching apps faster with agile workflows, ensuring rapid market entry and continuous updates.',
    icon: <FiZap className="text-yellow-400 text-3xl" />,
    position: 'bottom-right',
  },
];

export default function AppInnovationSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#f8fafc] to-[#e0f0ff] overflow-hidden text-center">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute top-0 left-10 w-[500px] h-[500px] bg-cyan-300 rounded-full filter blur-4xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600 rounded-full filter blur-4xl animate-pulse"></div>
      </div>

      {/* Header */}
      <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700 animate-slide-up">
        Revolutionizing App Development
      </h2>
      <p className="text-xl text-gray-700 mt-6 max-w-3xl mx-auto animate-slide-up delay-100">
        Unleash your vision with Novabloom’s expertise in stunning app design, smart analytics, and swift deployment, crafting mobile and web solutions that redefine success.
      </p>

      {/* Radial Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[1100px] h-[1100px] rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 opacity-40 animate-spin-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-24 flex justify-center">
        <div className="relative w-[650px] h-[650px]">
          {/* Center Icon/Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <Image
              src="/salesforce/center-img-1.webp"
              width={140}
              height={140}
              alt="App Innovation Hub"
              className="hover:scale-110 transition-transform duration-500 animate-pulse-slow"
            />
          </div>

          {/* Feature Cards */}
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              feature={feature}
              index={idx}
              isHovered={hoveredCard}
              setHovered={() => setHoveredCard(idx)}
              setUnhovered={() => setHoveredCard(null)}
            />
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-16 flex justify-center gap-4 animate-slide-up delay-300">
                     <Link href="/contact">
       
        <button className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-semibold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
          Start Your App Journey
        </button>
        </Link>
        <button className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-10 py-4 rounded-full font-semibold transition-all duration-300">
          Explore Our Expertise
        </button>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index, isHovered, setHovered, setUnhovered }) {
  const positions = {
    'top-left': 'top-[2%] left-[2%]',
    'bottom-left': 'bottom-[2%] left-[0%] right-[2%]',
    'bottom-center': 'bottom-[0%] left-1/2 -translate-x-1/2',
    'top-right': 'top-[2%] right-[2%]',
    'bottom-right': 'bottom-[2%] right-[0%]',
  };

  return (
    <div
      className={`absolute w-[260px] bg-white rounded-2xl shadow-xl p-8 text-left transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
        isHovered ? 'bg-cyan-100/50 scale-105' : ''
      } ${positions[feature.position]} animate-fade-in`}
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={setHovered}
      onMouseLeave={setUnhovered}
    >
      <div className="flex items-center gap-4 mb-4">
        {feature.icon}
        <h4 className="text-lg font-bold text-cyan-700">{feature.title}</h4>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
    </div>
  );
}