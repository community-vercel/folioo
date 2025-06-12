'use client';
import React from "react";
import { motion } from "framer-motion";

const TrustedEcommercecustomer = () => {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-24">
      {/* Top Section */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Text Content */}
        <motion.div variants={itemVariants}>
          <h1 className="text-3xl sm:text-4xl lg:text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Why Nova Bloom is Your Trusted eCommerce Partner
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 max-w-md">
            Our expert team delivers tailored Magento solutions, from bespoke themes and storefronts to seamless integrations, perfectly aligned with your business goals.
          </p>
          <button className="bg-[#446f70] text-white font-semibold text-sm px-8 py-3 rounded-full hover:bg-amber-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
            Start Your Project
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
        >
          {[
            { value: "158+", label: "Magento Websites Launched" },
            { value: "203+", label: "Satisfied Customers" },
            { value: "10+", label: "Years of Experience" },
            { value: "97%", label: "Client Retention" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              variants={itemVariants}
            >
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-600 mt-2 text-sm text-center">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        className="max-w-6xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left Text */}
        <motion.div variants={itemVariants}>
          <h1 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Supercharge Your Magento Store with AI
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 max-w-md">
            Leverage cutting-edge AI tools to enhance your Magento store. From AI-powered chatbots and product recommendations to automated inventory management and fraud prevention, our solutions drive performance and efficiency.
          </p>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 max-w-md">
            Stay ahead of the competition with our innovative Magento AI integrations. Contact us for a free consultation to transform your eCommerce business.
          </p>
          <button className="bg-[#446f70] text-white font-semibold text-sm px-8 py-3 rounded-full hover:bg-amber-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
            Talk to Us Now
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div variants={itemVariants}>
          <img
            src="https://ecommerce.folio3.com/wp-content/uploads/2023/09/Ecommerce-web-page-pana-1.png"
            alt="AI-powered Magento Store Illustration"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default TrustedEcommercecustomer;