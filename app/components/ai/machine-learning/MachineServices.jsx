'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  FiBarChart2,
  FiDatabase,
  FiCpu,
  FiLink,
  FiTrendingUp,
} from 'react-icons/fi';

const services = [
  {
    title: 'Machine Learning Strategy & Consulting',
    description: 'Collaborate with us to align advanced machine learning solutions with your business objectives, leveraging optimal datasets and algorithms.',
    icon: <FiBarChart2 className="text-white" size={40} />,
  },
  {
    title: 'Custom ML Applications',
    description: 'Develop scalable, AI-driven machine learning applications that enhance user experiences, from ideation to seamless deployment.',
    icon: <FiDatabase className="text-white" size={40} />,
  },
  {
    title: 'Advanced Model Development',
    description: 'Create high-performance ML models using TensorFlow, PyTorch, and GPU acceleration for predictive analytics and automation.',
    icon: <FiCpu className="text-white" size={40} />,
  },
  {
    title: 'Seamless System Integration',
    description: 'Integrate our ML solutions into your workflows and platforms to optimize operations and achieve strategic goals.',
    icon: <FiLink className="text-white" size={40} />,
  },
  {
    title: 'ML Research & Innovation',
    description: 'Stay ahead with cutting-edge machine learning advancements, powered by the latest breakthroughs in AI research.',
    icon: <FiTrendingUp className="text-white" size={40} />,
  },
];

export default function MachineServices() {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-6 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#446f70] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray bg-clip-text  ">
          Transform Your Business with Machine Learning
        </h2>

        {/* Services */}
        <div className="mt-6">
          <p className="text-gray-600 text-lg max-w-6xl mx-auto mb-12">
            Accelerate your AI journey with tailored machine learning solutions designed for innovation and impact.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1   rounded-t-2xl"></div>
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
              className="bg-[#446f70] text-white font-semibold px-8 py-3 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
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