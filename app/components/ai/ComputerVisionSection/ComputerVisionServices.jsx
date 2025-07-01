'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  FiTarget,
  FiSmartphone,
  FiCpu,
  FiLink,
  FiSearch,
} from 'react-icons/fi';

const services = [
  {
    title: 'AI Vision Strategy & Consulting',
    description: 'Partner with us to align cutting-edge computer vision solutions with your business goals, leveraging optimal datasets and models.',
    icon: <FiTarget className="text-cyan-600" size={40} />,
  },
  {
    title: 'Custom Vision Applications',
    description: 'Build scalable, AI-powered computer vision apps that redefine user experiences, from concept to seamless deployment.',
    icon: <FiSmartphone className="text-cyan-600" size={40} />,
  },
  {
    title: 'Advanced Model Development',
    description: 'Design high-performance vision models using OpenCV, TensorFlow, and GPU acceleration for mission-critical applications.',
    icon: <FiCpu className="text-cyan-600" size={40} />,
  },
  {
    title: 'Seamless System Integration',
    description: 'Integrate our vision solutions into your workflows and products to drive efficiency and achieve strategic objectives.',
    icon: <FiLink className="text-cyan-600" size={40} />,
  },
  {
    title: 'Vision Research & Innovation',
    description: 'Stay ahead with pioneering visual recognition technologies backed by the latest advancements in AI research.',
    icon: <FiSearch className="text-cyan-600" size={40} />,
  },
];

export default function ComputerVisionServices() {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-6 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
          Transform Your Business with Computer Vision
        </h2>
        

        {/* Services */}
        <div className="mt-6">
        
          <p className="text-gray-600 text-lg max-w-6xl mx-auto mb-12">
            Accelerate your AI journey with tailored vision solutions designed for innovation and impact.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-2xl"></div>
                <div className="mb-4">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
                      <Link href='/contact'>

            <button
              className="bg-transparent border-2 border-cyan-500 text-cyan-500 font-semibold px-8 py-3 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
              onMouseEnter={() => setIsHovered('project')}
              onMouseLeave={() => setIsHovered(null)}
            >
              Start Your Project Today
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}