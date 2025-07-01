'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const modules = [
  {
    icon: "💸",
    title: "Fixed Cost",
    desc: "Ideal for projects with defined objectives, budgets, and timelines, our Fixed Cost Model ensures predictable, high-quality Magento development.",
  },
  {
    icon: "👨‍💻",
    title: "Dedicated Hiring",
    desc: "Augment your team with dedicated Magento developers for ongoing maintenance, updates, and seamless application support.",
  },
  {
    icon: "🧑‍🤝‍🧑",
    title: "Build Your Team",
    desc: "Tailored for startups and enterprises, this model lets you assemble a custom Magento development team to meet your specific needs.",
  },
];

const categories = [
  "Business",
  "ERP/CRM",
  "Marketplaces",
  "Marketing",
  "Payment/Currency",
  "Shipping",
  "Social Media",
];

const integrations = [
  { name: "JSON based REST API", logo: "https://ecommerce.Nova Bloom.com/wp-content/uploads/2019/07/logo-ei-son-based-rest-api.jpg" },
  { name: "Magento Marketplace", logo: "https://ecommerce.Nova Bloom.com/wp-content/uploads/2019/07/logo-ei-marketplace-percent-fpl-integration.jpg" },
  { name: "Google Fonts", logo: "https://ecommerce.Nova Bloom.com/wp-content/uploads/2019/07/logo-ei-google-fonts.jpg" },
  { name: "Mercent", logo: "https://ecommerce.Nova Bloom.com/wp-content/uploads/2019/07/logo-ei-mercent.jpg" },
  { name: "ExactTarget", logo: "https://ecommerce.Nova Bloom.com/wp-content/uploads/2019/07/logo-ei-exactarget-integration.jpg" },
  { name: "jQuery", logo: "https://ecommerce.Nova Bloom.com/wp-content/uploads/2019/07/logo-ei-jQuery-zoom-integration.jpg" },
  { name: "DevExpress", logo: "https://ecommerce.Nova Bloom.com/wp-content/uploads/2019/07/logo-ei-express-checkout.jpg" },
  { name: "GPS", logo: "https://ecommerce.Nova Bloom.com/wp-content/uploads/2019/07/logo-ei-gps-integration.jpg" },
  { name: "Cloud Integration", logo: "https://ecommerce.Nova Bloom.com/wp-content/uploads/2019/07/logo-ei-custom-communication.jpg" },
  { name: "Twilio", logo: "https://ecommerce.Nova Bloom.com/wp-content/uploads/2019/07/logo-ei-twilio-Message-sending-API.jpg" },
  { name: "iDevAffiliate", logo: "https://ecommerce.Nova Bloom.com/wp-content/uploads/2019/07/logo-ei-shopping-cart-integration.jpg" },
  { name: "Print Menu Extension", logo: "https://ecommerce.Nova Bloom.com/wp-content/uploads/2019/07/logo-ei-print-menu-extension.jpg" },
  { name: "Google Tag Manager", logo: "https://ecommerce.Nova Bloom.com/wp-content/uploads/2019/07/logo-ei-lime-light-CRM-API.jpg" },
  { name: "Google Translate", logo: "https://ecommerce.Nova Bloom.com/wp-content/uploads/2019/07/logo-ei-google-translator.jpg" },
  { name: "Cin7", logo: "https://ecommerce.Nova Bloom.com/wp-content/uploads/2019/07/logo-ei-free-gift-module.jpg" },
  { name: "Brightpearl", logo: "https://ecommerce.Nova Bloom.com/wp-content/uploads/2019/07/logo-ei-brightpearl.jpg" },
  { name: "Blogengine.net", logo: "https://ecommerce.Nova Bloom.com/wp-content/uploads/2019/07/logo-ei-custom-media-player.jpg" },
].filter((item, index, self) => // Remove duplicates
  index === self.findIndex((t) => t.name === item.name && t.logo === item.logo)
);

export default function TopQuoteBanner() {
  const [activeTab, setActiveTab] = useState("Business");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      {/* Quote Banner Section */}
      <section className="relative bg-gradient-to-r from-[#2a4a4b] to-[#446f70] text-white py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-400/10 rounded-full -translate-x-32 -translate-y-32 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full translate-x-32 translate-y-32 blur-3xl" />
        <motion.div
          className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="max-w-lg space-y-6" variants={itemVariants}>
                      <Link href='/contact'>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Get Your Free Quote Today!
            </h2>
            </Link>
            <p className="text-lg text-white/90 leading-relaxed">
              At Nova Bloom, we empower your eCommerce journey with tailored Magento 2 solutions. Request a complimentary quote to experience our expertise.
            </p>
                                  <Link href='/contact'>

            <button className="bg-[#446f70] text-white font-semibold px-8 py-3 rounded-full hover:bg-amber-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Talk to Our Experts
            </button>
            </Link>
          </motion.div>
          <motion.div className="mt-10 md:mt-0" variants={itemVariants}>
            <img
              src="https://ecommerce.Nova Bloom.com/wp-content/uploads/2023/09/floral_fantasy_screenshot.png"
              alt="Magento Quote Banner"
              width={320}
              height={240}
              className="w-80 h-auto rounded-xl shadow-lg"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-gray-50">
        <motion.div
          className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight"
            variants={itemVariants}
          >
            Choose Your Magento Development Model
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-6xl mx-auto mb-12 leading-relaxed"
            variants={itemVariants}
          >
            Select the perfect hiring model to partner with a Magento development company that aligns with your business goals.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10"
            variants={containerVariants}
          >
            {modules.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                <a
                  href="#"
                  className="text-[#446f70] text-sm font-medium mt-4 inline-block hover:underline"
                >
                  Learn More
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            className="mt-12 bg-[#446f70] text-white font-semibold px-10 py-3 rounded-full hover:bg-amber-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            variants={itemVariants}
          >
            <Link href='/contact'>
            Hire Magento Developers
            </Link>
          </motion.button>
        </motion.div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-white">
        <motion.div
          className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
            variants={itemVariants}
          >
            Seamless Magento Integrations
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-6xl mx-auto mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Enhance your Magento store with our robust integration solutions for business, marketing, and more.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-10"
            variants={itemVariants}
          >
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeTab === cat
                    ? "bg-[#446f70] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {integrations.map((logo, i) => (
              <motion.div
                key={i}
                className="bg-gray-50 rounded-xl p-4 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  width={120}
                  height={48}
                  className="w-full h-12 object-contain"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            className="mt-12 bg-[#446f70] text-white font-semibold px-10 py-3 rounded-full hover:bg-amber-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            variants={itemVariants}
          >
            <Link href='/contact'>
            Explore Integrations
              </Link>
          </motion.button>
        
        </motion.div>
      </section>
    </>
  );
}