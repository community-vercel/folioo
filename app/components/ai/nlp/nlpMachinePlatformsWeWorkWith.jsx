'use client';
import Image from 'next/image';
import { useState } from 'react';

const platformSections = [
  {
    title: 'Programming Languages',
    logos: ['/logos/logos-v2-125x125.jpg', '/logos/java-logo-125x125.jpg', '/logos/c-logo-125x125.jpg'],
  },
  {
    title: 'AI Development Tools',
    logos: ['/logos/jupyter-logo-125x125.jpg', '/logos/anaconda-logo-125x125.jpg', '/logos/matplotlib-124x124.webp'],
  },
  {
    title: 'Integration & Deployment',
    logos: ['/logos/docker-logo-125x125.jpg', '/logos/container-logo-125x125.jpg', '/logos/jubernetes-logo-125x125.jpg', '/logos/logos-v2-124x125.webp'],
  },
  {
    title: 'Cloud Computing',
    logos: ['/logos/google-logo-125x125.jpg', '/logos/a-logo-125x125.jpg', '/logos/aws-logo-125x125.jpg'],
  },
  {
    title: 'Logging & Monitoring',
    logos: ['/logos/grafana-logo-125x125.jpg', '/logos/prometheus-logo-125x125.jpg', '/logos/faust-logo-125x125.jpg', '/logos/tensorboard-124x125.webp'],
  },
  {
    title: 'Messaging & Cache',
    logos: ['/logos/kafka-logo-125x125.jpg', '/logos/redis-logo-125x125.jpg', '/logos/celery-125x125.jpg'],
  },
  {
    title: 'Machine & Deep Learning',
    logos: ['/logos/pytorch-logo-125x125.jpg', '/logos/keras-logo-125x125.jpg', '/logos/learn-logo-125x125.jpg', '/logos/onnx-logo-125x125.jpg', '/logos/caffe2-124x124.webp', '/logos/nvidia-124x124.webp'],
  },
  {
    title: 'Large Language Models',
    logos: ['/logos/open-AI-125x125.webp', '/logos/longchain-125x125.webp', '/logos/hugging-face-125x125.webp'],
  },
];

export default function nlpPlatformsWeWorkWith() {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 animate-fade-in">
          Platforms Powering Our AI Vision
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in delay-100">
          Our expert team leverages cutting-edge tools and frameworks to build high-performance computer vision solutions tailored to your needs.
        </p>

        {/* Platforms Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformSections.map((section, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-2xl"></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">{section.title}</h3>
              <div className="flex justify-center flex-wrap gap-6">
                {section.logos.map((logo, i) => (
                  <div
                    key={i}
                    className="relative w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                  >
                    <Image
                      src={logo}
                      alt={`${section.title} logo ${i + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 animate-slide-in">
          <button
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            onMouseEnter={() => setIsHovered('cta')}
            onMouseLeave={() => setIsHovered(null)}
            aria-label="Connect with our experts"
          >
            Connect with Our Experts
          </button>
        </div>
      </div>
    </section>
  );
}