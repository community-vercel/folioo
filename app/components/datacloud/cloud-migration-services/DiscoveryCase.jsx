'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';

export default function DiscoveryCase() {
  // State for FAQ toggle
  const [openIndex, setOpenIndex] = useState(null);

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, x: 5, transition: { duration: 0.3 } },
  };

  const faqs = [
    {
      question: 'What does a cloud migration consultant do?',
      answer:
        'Our consultants assess your infrastructure, design tailored cloud strategies, and guide seamless migrations to optimize performance and cost.',
    },
    {
      question: 'What are cloud migration services?',
      answer:
        'Cloud migration services include planning, executing, and managing the transition of your applications and data to cloud platforms like AWS, Azure, or GCP.',
    },
    {
      question: 'How much do cloud migration consultants charge?',
      answer:
        'Costs vary based on project scope. Contact us for a free consultation to get a customized quote tailored to your needs.',
    },
    {
      question: 'What are the five phases of cloud migration?',
      answer:
        'The phases include assessment, planning, migration, testing, and optimization to ensure a smooth and efficient cloud transition.',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#f8fbff] to-white py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Testimonial Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white mt-20 py-16 px-4 sm:px-8 lg:px-20 rounded-2xl shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h6 className="uppercase text-sm tracking-widest text-blue-300 mb-3 font-semibold">
                Client Success
              </h6>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
                Real Results from Our{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                  Cloud Expertise
                </span>
              </h2>
              <p className="text-base text-gray-200 mb-6 leading-relaxed">
                Our clients achieve seamless integrations, reduced downtime, and lower costs through our tailored cloud migration solutions.
              </p>
              <motion.a
                href="/portfolio"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                variants={buttonVariants}
                whileHover="hover"
                aria-label="View client reviews"
              >
                Explore Reviews
                <FiArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </div>
            <motion.div
              className="bg-white text-blue-900 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <p className="text-5xl font-bold text-blue-600 mb-4">“</p>
              <h4 className="font-semibold text-lg text-blue-900 mb-2">Transformative Partnership</h4>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                Nova Bloom’s cloud solution revolutionized our animal welfare tracking, replacing inefficient paper records with a streamlined platform. Their expertise ensured compliance with the Progressive Beef program, saving us time and resources.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <Image
                    src="/app/progressive_new_logo.png" // Replace with actual avatar image
                    alt="Heather Donley"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-sm text-blue-900">Heather Donley</p>
                  <p className="text-xs text-blue-500">VP of Operations, AgriTech Solutions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* FAQs Section */}
        <motion.div
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <h6 className="uppercase text-sm tracking-widest text-blue-500 font-semibold mb-3">
            Your Questions Answered
          </h6>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            Cloud Migration{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              FAQs
            </span>
          </h2>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-200 last:border-b-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-medium text-gray-800 text-base">{faq.question}</span>
                  <FiChevronDown
                    className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-40 p-6 pt-0' : 'max-h-0'
                  }`}
                >
                  <p className="text-sm text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

