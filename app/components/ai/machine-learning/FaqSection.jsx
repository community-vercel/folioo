'use client';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
  {
    question: 'What is machine learning, and how does Novabloom apply it?',
    answer: 'Machine learning enables systems to learn from data and make predictions or decisions. At Novabloom, we leverage advanced ML algorithms for predictive analytics, personalization, and automation, transforming industries like finance, healthcare, and retail.',
  },
  {
    question: 'Which industries benefit from Novabloom’s ML solutions?',
    answer: 'Our tailored machine learning solutions empower sectors such as eCommerce, healthcare, finance, logistics, manufacturing, and more, driving efficiency and unlocking new business opportunities.',
  },
  {
    question: 'How does Novabloom ensure data privacy in ML projects?',
    answer: 'We prioritize data security with robust encryption, secure cloud platforms, and compliance with GDPR, HIPAA, and other regulations, ensuring your data remains protected throughout the ML project lifecycle.',
  },
  {
    question: 'What ML services does Novabloom offer?',
    answer: 'Novabloom provides end-to-end ML services, including strategy consulting, custom model development, pipeline optimization, system integration, and cutting-edge research for high-impact solutions.',
  },
  {
    question: 'Can Novabloom’s ML solutions integrate with existing systems?',
    answer: 'Yes, our ML solutions seamlessly integrate with your platforms and workflows using APIs and custom connectors, ensuring minimal disruption and maximum efficiency.',
  },
  {
    question: 'How long does a Novabloom ML project typically take?',
    answer: 'Project timelines vary by complexity, but most ML solutions take 3-6 months. We provide detailed timelines during the planning phase to align with your goals.',
  },
  {
    question: 'How does Novabloom manage training data for ML projects?',
    answer: 'We source, clean, and preprocess high-quality datasets, using techniques like data augmentation and synthetic data generation to ensure robust, accurate ML models tailored to your needs.',
  },
  {
    question: 'What sets Novabloom’s ML services apart?',
    answer: 'Our 15+ years of ML expertise, certified data scientists, and client-centric approach deliver bespoke solutions that drive measurable results, backed by trust from 1000+ enterprises.',
  },
  {
    question: 'How does Novabloom stay ahead in machine learning?',
    answer: 'Our dedicated R&D team engages with the latest ML advancements, collaborates with industry leaders, and contributes to open-source projects to keep our solutions cutting-edge.',
  },
  {
    question: 'What support does Novabloom offer after ML deployment?',
    answer: 'We provide comprehensive post-deployment support, including model maintenance, updates, performance monitoring, and 24/7 technical assistance to ensure long-term success.',
  },
];

export default function MachineLearningFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto px-4 py-12 relative bg-gradient-to-b from-gray-50 to-white py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#446f70] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray bg-clip-text   text-center mb-12 animate-fade-in">
          Your Questions About Machine Learning, Answered
        </h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded bg-white">
            <button
              onClick={() => toggleIndex(index)}
              className="flex justify-between items-center w-full px-4 py-3 text-left font-medium text-blue-900 hover:bg-blue-50"
            >
                <span className="text-lg">{faq.question}</span>
              {openIndex === index ? (
                <FiChevronUp className="h-5 w-5" />
              ) : (
                <FiChevronDown className="h-5 w-5" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-sm text-gray-700">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}