'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsFillRocketFill } from 'react-icons/bs';
import { FiUsers, FiDatabase, FiCpu,  FiZap, FiCode, FiSettings } from 'react-icons/fi';

const MachineLearningSection = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <section className="bg-gradient-to-b from-[#0b1f36] to-[#1a3558] text-white">
      {/* Top Section: ML Development Process */}
      <div className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
          Crafting World-Class Machine Learning Solutions
        </h2>
        <p className="text-gray-200 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
          We partner with you to build tailored ML solutions that drive innovation and deliver measurable results. Our iterative, feedback-driven approach ensures your vision becomes reality, optimized for your unique business goals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          {[
            {
              step: '01',
              desc: 'Deep-Dive Collaboration & Strategy',
              detail: 'We align with your team to define goals and craft a roadmap fueled by continuous feedback.',
              icon: <FiUsers className="text-cyan-400" size={32} />,
            },
            {
              step: '02',
              desc: 'Data-Driven Feasibility & Scope',
              detail: 'Using CRISP-DM and proven ML frameworks, we ensure scalable, impactful solutions.',
              icon: <FiDatabase className="text-cyan-400" size={32} />,
            },
            {
              step: '03',
              desc: 'Cutting-Edge Model Development',
              detail: 'From lightweight to complex models, we leverage TensorFlow, PyTorch, and more.',
              icon: <FiCpu className="text-cyan-400" size={32} />,
            },
            {
              step: '04',
              desc: 'Seamless Deployment & Scale',
              detail: 'Deliver pilots and production-ready systems with robust, automated pipelines.',
              icon: <BsFillRocketFill className="text-cyan-400" size={32} />,
            },
          ].map(({ step, desc, detail, icon }, index) => (
            <div
              key={step}
              className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 ${
                hoveredStep === index ? 'bg-blue-900/50 shadow-xl scale-105' : 'bg-blue-800/20'
              }`}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="mb-3">{icon}</div>
              <div className="text-xl font-bold text-cyan-400 mb-2">{step}</div>
              <p className="text-center font-semibold text-white mb-1">{desc}</p>
              <p className="text-center text-gray-300 text-xs">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Story Section */}
      <div className="bg-[#1f3b57] py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-cyan-300 mb-3">Revolutionizing Retail with Predictive Analytics</h3>
            <p className="mb-6 text-gray-200 text-base leading-relaxed">
              A global fashion retailer transformed their inventory management with our ML-driven predictive analytics pipeline on Databricks. Our team automated data processing from S3 to Delta Tables, enabling real-time insights and a 30% reduction in stockouts.
            </p>
            <div className="mb-4 text-sm text-gray-300">
              <strong>Expertise:</strong> Databricks, Predictive ML, Automation<br />
              <strong>Industry:</strong> Retail & Fashion<br />
              <strong>Region:</strong> North America
            </div>
            <Link href='/portfolio'>
            <button className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Explore the Case Study
            </button>
            </Link>
          </div>

          {/* Image */}
          <div className="flex-1">
            <Image
              src="/salesforce/kinship-thumbnail.webp" // Suggested: Use a relevant ML-themed image
              alt="Retail Predictive Analytics"
              width={400}
              height={400}
              className="rounded-xl shadow-2xl object-cover hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom Call-to-Action Section */}
      <div className="bg-white text-center py-20 px-6">
        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
          Supercharge Your Business with Machine Learning
        </h3>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
          Our ML development services empower you to automate processes, unlock predictive insights, and scale intelligently. From streamlined MLOps to bespoke models, we deliver end-to-end solutions for maximum impact.
        </p>

        <div className="flex justify-center gap-12 mb-10 text-gray-800 text-sm">
          {[
            {
              title: 'MLOps Excellence',
              desc: 'Automate and optimize your ML pipelines.',
              icon: <FiZap className="text-blue-700 mb-2" size={28} />,
            },
            {
              title: 'Custom ML Models',
              desc: 'Tailored solutions for your unique challenges.',
              icon: <FiCode className="text-blue-700 mb-2" size={28} />,
            },
            {
              title: 'Intelligent Automation',
              desc: 'Boost efficiency with AI-driven workflows.',
              icon: <FiSettings className="text-blue-700 mb-2" size={28} />,
            },
          ].map(({ title, desc, icon }) => (
            <div key={title} className="flex flex-col items-center max-w-xs">
              <div className="mb-2">{icon}</div>
              <span className="font-semibold text-blue-700">{title}</span>
              <span className="text-gray-600 text-xs mt-1">{desc}</span>
            </div>
          ))}
        </div>
          <Link href='/contact'>

        <button className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          Connect with Our Experts
        </button>
        </Link>
      </div>
    </section>
  );
};

export default MachineLearningSection;