'use client';
import { useState } from 'react';
import {
  FiSearch,
  FiLayout,
  FiCode,
  FiCheckCircle,
  FiUploadCloud,
  FiGlobe,
  FiMapPin,
  FiClock,
} from 'react-icons/fi';

const methodologySteps = [
  {
    icon: <FiSearch className="text-cyan-600 text-3xl" />,
    title: 'Discovery & Planning',
    description: 'Aligning with your vision to create a strategic app roadmap.',
  },
  {
    icon: <FiLayout className="text-cyan-600 text-3xl" />,
    title: 'UI/UX Design',
    description: 'Designing intuitive, visually stunning app interfaces.',
  },
  {
    icon: <FiCode className="text-cyan-600 text-3xl" />,
    title: 'App Development',
    description: 'Building robust, scalable apps with cutting-edge tech.',
  },
  {
    icon: <FiCheckCircle className="text-cyan-600 text-3xl" />,
    title: 'Testing & QA',
    description: 'Ensuring flawless performance through rigorous testing.',
  },
  {
    icon: <FiUploadCloud className="text-cyan-600 text-3xl" />,
    title: 'Launch & Maintenance',
    description: 'Deploying your app with ongoing support for success.',
  },
];

const engagementModels = [
  {
    icon: <FiGlobe className="text-blue-600 text-3xl" />,
    title: 'Offshore Development',
    description: 'Cost-effective, high-quality app development from global hubs.',
  },
  {
    icon: <FiMapPin className="text-blue-600 text-3xl" />,
    title: 'Onshore Development',
    description: 'Local expertise for seamless collaboration and delivery.',
  },
  {
    icon: <FiClock className="text-blue-600 text-3xl" />,
    title: 'Nearshore Development',
    description: 'Flexible, timezone-aligned teams for efficient workflows.',
  },
];

export default function MethodologyAndEngagement() {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [hoveredModel, setHoveredModel] = useState(null);

  return (
    <div className="relative bg-gradient-to-b from-[#f8fafc] to-[#e0f0ff] py-20 px-6 md:px-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute top-0 left-10 w-[500px] h-[500px] bg-cyan-300 rounded-full filter blur-4xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600 rounded-full filter blur-4xl animate-pulse"></div>
      </div>

      {/* Methodology Section */}
      <section className="text-center mb-24 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700 animate-slide-up">
          Our App Development Process
        </h2>
        <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto animate-slide-up delay-100">
          Novabloom’s proven methodology delivers exceptional mobile and web apps from vision to victory.
        </p>

        <div className=" flex flex-col md:flex-row justify-between items-start md:items-center border-t border-cyan-200 pt-12 gap-8 md:gap-0 mt-12">
          {methodologySteps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center w-full md:w-auto text-center transition-all duration-300 ${
                hoveredStep === index ? 'scale-105' : ''
              } animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <span className="text-2xl font-bold text-cyan-600 mb-2">{`0${index + 1}`}</span>
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mb-4 rounded-full" />
              <div className="mb-4 hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-800">{step.title}</h4>
              <p className="text-sm text-gray-600 mt-2 max-w-[200px]">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Models */}
      <section className="text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700 animate-slide-up">
          Flexible Engagement Models
        </h2>
        <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto animate-slide-up delay-100">
          Choose the perfect model for your app project with Novabloom’s tailored, scalable solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {engagementModels.map((model, index) => (
            <div
              key={index}
              className={`bg-white border border-cyan-100 rounded-2xl p-8 flex flex-col items-center hover:shadow-xl transition-all duration-300 ${
                hoveredModel === index ? 'scale-105 bg-cyan-50' : ''
              } animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredModel(index)}
              onMouseLeave={() => setHoveredModel(null)}
            >
              <div className="mb-4 hover:scale-110 transition-transform duration-300">
                {model.icon}
              </div>
              <h4 className="text-lg font-semibold text-cyan-700 mb-2">{model.title}</h4>
              <p className="text-sm text-gray-600 max-w-[220px]">{model.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )}