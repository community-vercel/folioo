'use client';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
  {
    question: 'What is computer vision, and how does novabloom apply it?',
    answer: 'Computer vision enables machines to interpret images and videos like humans. At novabloom, we use advanced AI to deliver solutions for object detection, image analysis, and video processing, transforming industries such as retail, healthcare, and manufacturing.',
  },
  {
    question: 'Which industries benefit from novabloom’s vision solutions?',
    answer: 'Our tailored computer vision solutions drive innovation in eCommerce, agritech, healthcare, automotive, sports, manufacturing, and more, enhancing efficiency and unlocking new opportunities.',
  },
  {
    question: 'How does novabloom ensure data privacy in vision projects?',
    answer: 'We prioritize data security with robust encryption, secure cloud platforms, and compliance with GDPR, HIPAA, and other regulations, ensuring your visual data remains protected throughout the project lifecycle.',
  },
  {
    question: 'What vision services does novabloom offer?',
    answer: 'novabloom provides end-to-end services, including AI strategy consulting, custom application development, model optimization, system integration, and cutting-edge research for high-impact vision solutions.',
  },
  {
    question: 'Can novabloom’s solutions integrate with existing systems?',
    answer: 'Yes, our vision solutions seamlessly integrate with your platforms and workflows using APIs and custom connectors, ensuring minimal disruption and maximum efficiency.',
  },
  {
    question: 'How long does a novabloom vision project typically take?',
    answer: 'Project timelines vary by complexity, but most solutions take 3-6 months. We provide detailed timelines during the planning phase to align with your goals.',
  },
  {
    question: 'How does novabloom manage training data for vision projects?',
    answer: 'We source, clean, and annotate high-quality datasets, leveraging synthetic data and augmentation techniques to ensure robust, accurate models tailored to your needs.',
  },
  {
    question: 'What sets novabloom’s vision services apart?',
    answer: 'Our 15+ years of AI expertise, certified engineers, and client-centric approach deliver bespoke solutions that drive measurable results, backed by a proven track record with 1000+ enterprises.',
  },
  {
    question: 'How does novabloom stay ahead in AI and computer vision?',
    answer: 'Our dedicated R&D team actively engages with the latest advancements, collaborates with industry leaders, and contributes to open-source projects to keep our solutions cutting-edge.',
  },
  {
    question: 'What support does novabloom offer after deployment?',
    answer: 'We provide comprehensive post-deployment support, including maintenance, updates, performance monitoring, and 24/7 technical assistance to ensure long-term success.',
  },
];

export default function FaqSection() {
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
          Your Questions About AI Vision, Answered
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
                {/* You can replace this with actual answer content */}
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