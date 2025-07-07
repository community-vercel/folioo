'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FiMessageSquare, FiMic, FiBarChart2 } from 'react-icons/fi';

export default function NlpSolutions() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <main className="font-sans">
      {/* NLP Solutions Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray bg-clip-text   mb-6 animate-fade-in">
          Revolutionize with NLP-Powered Solutions
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 animate-fade-in delay-100">
          Novabloom’s Natural Language Processing solutions harness advanced algorithms to analyze text and voice, enabling intelligent chatbots, sentiment analysis, and automated insights for businesses across industries.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <FiMessageSquare className="text-white" size={48} />,
              title: 'Conversational AI',
              desc: 'Build intelligent chatbots and virtual assistants to enhance customer engagement and streamline support.',
            },
            {
              icon: <FiMic className="text-white" size={48} />,
              title: 'Speech Recognition',
              desc: 'Transform voice data into actionable insights with accurate transcription and voice command processing.',
            },
            {
              icon: <FiBarChart2 className="text-white" size={48} />,
              title: 'Text Analytics',
              desc: 'Unlock hidden insights through sentiment analysis, entity recognition, and text summarization.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in ${
                hoveredItem === index ? 'bg-blue-50' : ''
              } flex flex-col items-center`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#446f70] rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <Link href='/portfolio'>
        <button className="mt-12 bg-[#446f70]  text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-in">
          Explore NLP Use Cases
        </button>
        </Link>
      </section>
    </main>
  )}