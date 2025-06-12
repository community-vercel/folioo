'use client';
import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiDollarSign, FiGrid, FiHeadphones, FiLayers, FiMessageSquare, FiPauseCircle, FiSettings, FiTrendingUp } from "react-icons/fi";


const benefits = [
  {
    icon: FiPauseCircle,
    title: "Expert Magento Developers",
    desc: "Our skilled team harnesses cutting-edge Magento technologies to deliver high-performance, tailored solutions.",
  },
  {
    icon: FiLayers,
    title: "All-Inclusive Services",
    desc: "From design and customization to migration and support, we provide comprehensive Magento solutions.",
  },
  {
    icon: FiSettings,
    title: "Tailored Solutions",
    desc: "We build custom Magento stores crafted to align with your unique business goals and drive success.",
  },
  {
    icon: FiMessageSquare,
    title: "Clear Communication",
    desc: "Stay updated with transparent, regular communication throughout your project’s journey.",
  },
  {
    icon: FiDollarSign,
    title: "Cost-Effective Pricing",
    desc: "Maximize value with affordable Magento solutions that maintain exceptional quality.",
  },
  {
    icon: FiCheckCircle,
    title: "Trusted Expertise",
    desc: "As a top Magento agency, we have a proven record of delivering impactful eCommerce solutions.",
  },
  {
    icon: FiGrid,
    title: "Flexible Models",
    desc: "Select from engagement models designed to fit your organization’s needs and budget.",
  },
  {
    icon: FiHeadphones,
    title: "Dedicated Support",
    desc: "Benefit from ongoing support and prompt assistance for any challenges.",
  },
  {
    icon: FiTrendingUp,
    title: "Scalable Platforms",
    desc: "Our Magento solutions are built to grow seamlessly with your business.",
  },
];

export default function WhyChooseUs() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-24 bg-white">
      <motion.div
        className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h1
          className="text-xl md:text-4xl lg:text-xl font-extrabold text-gray-900 mb-4 tracking-tight"
          variants={itemVariants}
        >
Why Choose Nova Bloom as Your Magento Development Agency?
    </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-6xl mx-auto mb-12 leading-relaxed"
          variants={itemVariants}
        >
When it comes to reliable and experienced Magento 2 development, Nova Bloom rises as the top choice. Here’s why Nova Bloom stands out as the ideal partner for your requirements:    
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10"
          variants={containerVariants}
        >
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50/50 overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              {/* Subtle background accent */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-amber-100/30 rounded-full -translate-x-12 -translate-y-12" />
              <div className="relative flex items-start space-x-4">
                <item.icon className="w-10 h-10 text-[#446f70] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  <a
                    href="#"
                    className="text-[#446f70] text-sm font-medium mt-4 inline-block hover:underline hover:text-amber-500 transition"
                  >
                    Explore More
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <button className="mt-12 bg-gradient-to-r from-[#446f70] to-[#446f70] text-white font-semibold text-base px-12 py-4 rounded-full hover:from-amber-500 hover:to-[#446f70] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Get Started Today
          </button>
        </motion.div>
      </motion.div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}