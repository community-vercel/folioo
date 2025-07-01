'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiActivity, FiArrowRight, FiDollarSign, FiMove, FiShield, FiSliders } from 'react-icons/fi';
import { useState } from 'react';
import { GiMovementSensor } from 'react-icons/gi';

const benefitItems = [
  {
    title: 'Seamless Migration',
    icon:GiMovementSensor,
    desc: 'Effortless transitions with minimal disruption, customized for your business.',
  },
  {
    title: 'Cost Savings',
    icon: FiDollarSign,
    desc: 'Maximize efficiency with optimized cloud spend and reduced costs.',
  },
  {
    title: 'Flexibility',
    icon: FiSliders,
    desc: 'Scalable solutions that adapt to your evolving business needs.',
  },
  {
    title: 'Security',
    icon: FiShield,
    desc: 'Robust, enterprise-grade security and compliance protocols.',
  },
  {
    title: 'Efficiency in Monitoring',
    icon: FiActivity,
    desc: 'Advanced tools for superior visibility and cloud performance.',
  },
];

export default function AdataMigrationService() {
  // State for active tab
  const [activeTab, setActiveTab] = useState('SAP Migration');

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
    }),
  };

  const buttonVariants = {
    hover: { scale: 1.05, x: 5, transition: { duration: 0.3 } },
  };

  const tabs = [
    'Assessment and Planning',
    'Cloud Execution Strategy',
    'SAP Migration',
    'Application Migration & Modernization',
    'Optimization',
    'Platform Upgrades',
    'Seamless Migration',
    'Infrastructure Migration',
    'Legacy Systems',
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#e8f0ff] to-[#f8fbff] py-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Unrivaled <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Cloud Migration Expertise
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            Partner with Folio3 for secure, tailored cloud migrations with expert support at every step.
          </p>
        </motion.div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap gap-2 mb-16 justify-center">
          {tabs.map((tab, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-sm font-medium rounded-lg shadow-sm transition-all ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-blue-50 hover:text-blue-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Select ${tab} tab`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* SAP Migration Section (Dynamic Content Placeholder) */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">{activeTab}</h3>
            {activeTab === 'SAP Migration' ? (
              <>
                <ul className="list-disc pl-6 text-gray-700 text-base space-y-3">
                  <li>SAP to AWS for enhanced scalability and cost efficiency</li>
                  <li>Modernize legacy SAP into S/4HANA seamlessly</li>
                  <li>Zero-downtime migration architecture</li>
                  <li>Security-first SAP deployment approach</li>
                  <li>Comprehensive SAP services from audit to optimization</li>
                </ul>
                <p className="mt-4 text-base text-gray-600">
                  Migrate SAP to Azure, AWS, GCP, or hybrid cloud with Folio3’s expertise and precision.
                </p>
              </>
            ) : (
              <p className="text-base text-gray-600">
                Explore our tailored solutions for {tab.toLowerCase()}. Contact us to learn how we can support your unique needs.
              </p>
            )}
          </motion.div>
          <motion.div
            className="relative h-64 sm:h-72 md:h-96 group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/app/shutterstock_1937485459-1-4.webp"
              alt={activeTab}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </motion.div>
        </div>

        {/* Cloud Migration Benefits */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <p className="text-sm tracking-widest text-blue-500 uppercase mb-3">
              Cloud Migration Benefits
            </p>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Elevate Your Business with <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Folio3 Cloud Experts
              </span>
            </h3>
            <p className="text-base text-gray-600 mt-4 leading-relaxed">
              Our consultants deliver secure, high-performance cloud strategies, focusing on cost efficiency and scalability.
            </p>
            <motion.a
              href="/portfolio"
              className="mt-6 inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              variants={buttonVariants}
              whileHover="hover"
              aria-label="Learn more about cloud migration services"
            >
              Discover More
              <FiArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefitItems.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 hover:shadow-xl hover:bg-blue-50/50 transition-all duration-300"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-base text-blue-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}