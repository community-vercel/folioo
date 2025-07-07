'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FiCode, FiDatabase, FiCloud, FiBarChart2, FiCpu, FiLayers } from 'react-icons/fi';
import Link from 'next/link';

const leftItems = [
  {
    title: 'Algorithms',
    content:
      'Supervised Learning (Regression, Classification) | Unsupervised Learning (Clustering, Dimensionality Reduction) | Deep Learning (CNNs, RNNs, Transformers) | Reinforcement Learning | Bayesian Methods | Optimization Techniques',
    icon: <FiCpu className="text-white" size={24} />,
  },
  {
    title: 'Languages',
    content: 'Python | R | Julia | Scala | C++',
    icon: <FiCode className="text-white" size={24} />,
  },
  {
    title: 'ML Frameworks',
    content: 'TensorFlow | PyTorch | Scikit-learn | XGBoost | Hugging Face',
    icon: <FiLayers className="text-white" size={24} />,
  },
];

const rightItems = [
  {
    title: 'Visualization Tools',
    content: 'Matplotlib | Seaborn | Plotly | Tableau | Power BI',
    icon: <FiBarChart2 className="text-white" size={24} />,
  },
  {
    title: 'Databases',
    content: 'MySQL | PostgreSQL | MongoDB | Snowflake | Redis',
    icon: <FiDatabase className="text-white" size={24} />,
  },
  {
    title: 'Cloud Platforms',
    content: 'AWS | Google Cloud | Azure | Databricks | IBM Cloud',
    icon: <FiCloud className="text-white" size={24} />,
  },
];

const MachineLearningTechStack = () => {
  const [activeLeft, setActiveLeft] = useState(null);
  const [activeRight, setActiveRight] = useState(null);

  const toggleLeft = (title) => setActiveLeft(activeLeft === title ? null : title);
  const toggleRight = (title) => setActiveRight(activeRight === title ? null : title);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 text-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#446f70] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray bg-clip-text   mb-8 animate-fade-in">
          Power Your ML Vision with Our Cutting-Edge Tech Stack
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 animate-fade-in delay-100">
          From advanced algorithms to scalable cloud platforms, our robust tech stack empowers transformative machine learning solutions tailored to your business.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left Accordion */}
          <div className="flex flex-col gap-4 w-full lg:w-1/3">
            {leftItems.map(({ title, content, icon }, index) => (
              <div
                key={title}
                className={`border rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  activeLeft === title ? 'bg-blue-50' : ''
                } animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  className="w-full flex items-center gap-3 p-4 font-semibold text-gray-900"
                  onClick={() => toggleLeft(title)}
                >
                  <span className="flex-shrink-0">{icon}</span>
                  <span className="flex-grow text-left">{title}</span>
                  <span className="flex-shrink-0">{activeLeft === title ? '−' : '+'}</span>
                </button>
                {activeLeft === title && (
                  <div className="text-sm text-left px-4 pb-4 text-gray-600 leading-relaxed">
                    {content}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="relative w-80 h-80 rounded-full border-8 border-dotted border-cyan-400/30 overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500 animate-fade-in delay-200">
            <Image
              src="/salesforce/2-section-ml-475x475.webp" // Placeholder: Replace with ML-themed image
              alt="Machine Learning Tech Stack"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Accordion */}
          <div className="flex flex-col gap-4 w-full lg:w-1/3">
            {rightItems.map(({ title, content, icon }, index) => (
              <div
                key={title}
                className={`border rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  activeRight === title ? 'bg-blue-50' : ''
                } animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  className="w-full flex items-center gap-3 p-4 font-semibold text-gray-900"
                  onClick={() => toggleRight(title)}
                >
                  <span className="flex-shrink-0">{icon}</span>
                  <span className="flex-grow text-left">{title}</span>
                  <span className="flex-shrink-0">{activeRight === title ? '−' : '+'}</span>
                </button>
                {activeRight === title && (
                  <div className="text-sm text-left px-4 pb-4 text-gray-600 leading-relaxed">
                    {content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 animate-slide-in">
          <Link href='/contact'>
          <button className="bg-[#446f70]  text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Build Your ML Solution Now
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MachineLearningTechStack;