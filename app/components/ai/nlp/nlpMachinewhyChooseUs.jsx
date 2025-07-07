'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FiTarget, FiZap, FiClock, FiUsers, FiStar } from 'react-icons/fi';

const features = [
  {
    title: 'Precision NLP Insights',
    description: 'Unlock actionable insights with advanced NLP models, enabling smarter text and voice analysis for industries like customer support and healthcare.',
    icon: FiTarget,
  },
  {
    title: 'Scalable NLP Solutions',
    description: 'Build robust, scalable NLP pipelines for chatbots, sentiment analysis, and language processing with state-of-the-art frameworks.',
    icon: FiZap,
  },
  {
    title: '15+ Years of Expertise',
    description: 'Rely on our proven track record in delivering high-impact NLP solutions tailored to your unique business challenges.',
    icon: FiClock,
  },
  {
    title: 'Elite NLP Specialists',
    description: 'Our certified NLP experts and engineers craft innovative language solutions to accelerate your business transformation.',
    icon: FiUsers,
  },
  {
    title: 'Trusted by 1000+ Enterprises',
    description: 'Join global leaders who trust Novabloom’s NLP expertise to power innovation and achieve measurable success.',
    icon: FiStar,
  },
];

export default function NlpWhyChooseUs() {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#446f70] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray bg-clip-text   animate-fade-in">
          Why Choose Novabloom for NLP?
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in delay-100">
          Partner with us to harness the power of natural language processing, delivering transformative solutions that enhance communication and drive growth.
        </p>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in ${
                  hoveredFeature === index ? 'bg-blue-50' : ''
                } w-full max-w-sm`}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="absolute top-0 left-0 w-full h-1   rounded-t-2xl"></div>
                <div className="flex items-center justify-center w-14 h-14 bg-[#446f70] rounded-full mb-4 mx-auto group">
                  <Icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 animate-slide-in">
          <Link href='/portfolio'>
          <button
            className=" bg-[#446f70] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            onMouseEnter={() => setHoveredFeature('cta')}
            onMouseLeave={() => setHoveredFeature(null)}
            aria-label="Request a demo"
          >
            Discover Our NLP Solutions
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}