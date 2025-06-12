'use client';
import React from "react";
import { motion } from "framer-motion";

import { FiAtSign, FiAward, FiCode, FiFilePlus, FiLayout, FiPower, FiRotateCw, FiSettings, FiShare, FiTrendingUp } from "react-icons/fi";

const services = [
  {
    title: "Magento Design Services",
    description:
      "Our design team crafts bespoke themes and user interfaces, delivering an exceptional shopping experience tailored to your brand.",
    icon: FiLayout,
  },
  {
    title: "Magento Development Services",
    description:
      "From building new online stores to upgrading existing platforms, we deliver robust, high-performance Magento solutions.",
    icon: FiCode,
  },
  {
    title: "Magento Integration Services",
    description:
      "Seamlessly connect Magento with payment gateways, shipping providers, and third-party apps for a unified ecosystem.",
    icon: FiPower,
  },
  {
    title: "Custom Magento Development",
    description:
      "Tailor your store with custom features and functionality to create a unique, customer-centric purchasing experience.",
    icon: FiSettings,
  },
  {
    title: "Magento Extensions & Modules",
    description:
      "Enhance your store with custom extensions and modules, designed to boost functionality and user engagement.",
    icon: FiShare,
  },
  {
    title: "Magento Migration & Upgrade",
    description:
      "Simplify complex migrations and upgrades to Magento 2 with our expert support, ensuring a smooth transition.",
    icon: FiRotateCw,
  },
  {
    title: "Performance Optimization",
    description:
      "Boost your store’s speed and reliability with our Magento performance optimization services for better conversions.",
    icon: FiTrendingUp,
  },
  {
    title: "Support & Maintenance",
    description:
      "Keep your store running smoothly with comprehensive support, maintenance, and troubleshooting services.",
    icon: FiAward,
  },
  {
    title: "Magento–ERP Integration",
    description:
      "Streamline operations and reduce costs by integrating Magento with ERP systems like NetSuite or Dynamics 365.",
    icon: FiAtSign,
  },
];

export default function MagentoServices() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-20 bg-white">
      <motion.div
        className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-2xl lg:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Comprehensive Magento Services
          </h2>
          <p className="text-lg text-gray-600 max-w-6xl mx-auto leading-relaxed">
            Transform your eCommerce vision with Nova Bloom’s expert Magento solutions, tailored to drive growth and efficiency.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50/50 overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              {/* Subtle background accent */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-amber-100/30 rounded-full -translate-x-12 -translate-y-12" />
              <div className="relative flex flex-col space-y-4">
                <service.icon className="w-8 h-8 text-[#446f70]" />
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                <a
                  href="#"
                  className="text[#446f70] text-sm font-medium hover:underline hover:text-amber-500 transition"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center mt-12" variants={itemVariants}>
          <button className="bg-gradient-to-r from-[#446f70] to-[#446f70] text-white font-semibold text-base px-10 py-3 rounded-full hover:from-amber-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Start Your eCommerce Journey
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}