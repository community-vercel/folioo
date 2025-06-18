'use client';
import { useState } from 'react';
import { FiCode, FiSettings, FiBarChart2, FiLayers } from 'react-icons/fi';

const roles = [
  { title: 'ML Engineers', icon: <FiCode className="text-cyan-400" size={48} />, desc: 'Build robust ML models with expertise in TensorFlow and PyTorch.' },
  { title: 'MLOps Specialists', icon: <FiSettings className="text-cyan-400" size={48} />, desc: 'Streamline pipelines for seamless deployment and scalability.' },
  { title: 'Data Scientists', icon: <FiBarChart2 className="text-cyan-400" size={48} />, desc: 'Uncover insights with advanced analytics and modeling.' },
  { title: 'ML Architects', icon: <FiLayers className="text-cyan-400" size={48} />, desc: 'Design scalable AI systems for enterprise success.' },
];

const AugmentMLOpsSection = () => {
  const [hoveredRole, setHoveredRole] = useState(null);

  return (
    <section className="bg-gradient-to-b from-[#0a1a4f] to-[#1f3b57] text-white py-20 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
          Supercharge Your ML Team with Top-Tier Talent
        </h2>
        <p className="text-gray-200 text-lg max-w-3xl mx-auto mb-4 leading-relaxed">
          Struggling to find skilled ML professionals in a competitive market? Our battle-tested experts bring deep industry experience to accelerate your machine learning initiatives.
        </p>
        <p className="text-gray-300 text-base max-w-3xl mx-auto mb-12">
          At nova, we provide elite ML engineers, MLOps specialists, data scientists, and architects to seamlessly augment your operations and drive transformative results.
        </p>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center mb-12">
          {roles.map(({ title, icon, desc }, index) => (
            <div
              key={title}
              className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 ${
                hoveredRole === index ? 'bg-blue-900/50 shadow-xl scale-105' : 'bg-blue-800/20'
              }`}
              onMouseEnter={() => setHoveredRole(index)}
              onMouseLeave={() => setHoveredRole(null)}
            >
              <div className="mb-4">{icon}</div>
              <p className="font-semibold text-white mb-2">{title}</p>
              <p className="text-gray-300 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          Start Building Your Dream Team
        </button>
      </div>
    </section>
  );
};

export default AugmentMLOpsSection;