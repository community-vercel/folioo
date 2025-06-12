'use client';
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <footer className="bg-gradient-to-b from-[#1a2a2b] to-[#2a4a4b] text-white pt-20 pb-8 px-6 md:px-12 lg:px-16 font-sans">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Top Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-10"
          variants={containerVariants}
        >
          {/* Logo Column */}
          <motion.div className="col-span-1 md:col-span-2 lg:col-span-1" variants={itemVariants}>
            <Image
              src="/logo.webp"
              alt="Nova Bloom Logo"
              width={128}
              height={40}
              className="w-32 mb-6 transition-transform hover:scale-105"
            />
    
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-5">Company</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              {["About Us", "Case Studies"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-amber-400 transition-all duration-200 hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Platforms */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-5">Platforms</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              {["Shopify", "Magento", "BigCommerce", "WooCommerce", "Wix"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-amber-400 transition-all duration-200 hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-5">Services</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              {["B2B eCommerce", "B2B Demo", "Headless eCommerce", "Automotive eCommerce", "Fashion eCommerce"].map(
                (item, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-amber-400 transition-all duration-200 hover:underline">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-5">Connect</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              {["Partners", "Blog"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-amber-400 transition-all duration-200 hover:underline">
                    {item}
                  </a>
                </li>
              ))}
              <li className="flex items-center space-x-2 mt-4">
                <FiMail className="w-4 h-4 text-amber-400" />
                <a href="mailto:info@novabloom.com" className="hover:text-amber-400 transition-all duration-200">
                  info@novabloom.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FiPhone className="w-4 h-4 text-amber-400" />
                <a href="tel:+14083654638" className="hover:text-amber-400 transition-all duration-200">
                  +1 408 365 4638
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            className="bg-gradient-to-br from-[#446f70] to-[#446f70] p-6 rounded-2xl shadow-xl lg:col-span-1 w-xs"
            variants={itemVariants}
          >
            <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
            <p className="text-sm text-white/90 mb-4">
              Subscribe to our newsletter for the latest eCommerce insights.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
className="px-4 py-2.5 rounded-full text-white border border-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="bg-white text-gray-800 font-semibold px-5 py-2.5 rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </motion.div>

        <hr className="border-gray-600 mb-12" />

        {/* Office Locations */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
        >
          {[
            {
              title: "Canada Office",
              lines: ["2–105 Consumers Dr, Whitby, ON L1N 1C4"],
              icon: <FiMapPin className="w-5 h-5 text-amber-400" />,
            },
            {
              title: "Mexico Office",
              lines: ["Amado Nervo #220, Edificio Esfera 1 Piso 4, Col. Jardines del Sol, CP. 45050, Zapopan, Jalisco"],
              icon: <FiMapPin  className="w-5 h-5 text-amber-400" />,
            },
            {
              title: "Australia Office",
              lines: ["C/- Prime Partners, Level 4, 1 James Place, North Sydney, NSW 2060"],
              icon: <FiMapPin  className="w-5 h-5 text-amber-400" />,
            },
            {
              title: "US Office",
              lines: [
                "160 Bovet Road, Suite #101, San Mateo, CA 94402",
                "6701 Koll Center Parkway, #250, Pleasanton, CA 94566",
                "Tel: +1 408 365 4638",
              ],
              icon: <FiMapPin  className="w-5 h-5 text-amber-400" />,
            },
            {
              title: "UK Office",
              lines: ["Export House, Cawsey Way, Woking, Surrey, GU21 6QX", "Tel: +44 (0) 14 8339 7625"],
              icon: <FiMapPin  className="w-5 h-5 text-amber-400" />,
            },
            {
              title: "UAE Office",
              lines: [
                "Nova Bloom FZ LLC, Dubai Internet City, 1st Floor, Building Number 14, Premises 105, Dubai",
                "Tel: +971 04 2505173",
              ],
              icon: <FiMapPin  className="w-5 h-5 text-amber-400" />,
            },
            {
              title: "Bulgaria Office",
              lines: ["49 Bacho Kiro Street, Sofia 1000"],
              icon: <FiMapPin  className="w-5 h-5 text-amber-400" />,
            },
            {
              title: "Pakistan Office",
              lines: [
                "Nova Bloom Tower, Plot 26, Block B, SMCH Society, Main Shahrah-e-Faisal, Karachi",
                "Tel: +92-21-3432 3721-4",
                "First Floor, Blue Mall 8-R, MM Alam Road, Gulberg III, Lahore",
                "Corporate 7 by Maaksons, Executive Block, Civic Center 1, Gulberg Green, Islamabad",
                "Tel: 0333 5657425",
              ],
              icon: <FiMapPin  className="w-5 h-5 text-amber-400" />,
            },
          ].map((office, i) => (
            <motion.div key={i} variants={itemVariants}>
              <h5 className="text-base font-semibold text-white mb-3 flex items-center space-x-2">
                {office.icon}
                <span>{office.title}</span>
              </h5>
              <ul className="space-y-1 text-gray-300 text-sm">
                {office.lines.map((line, j) => (
                  <li key={j}>{line}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <hr className="border-gray-600 mb-8" />

        {/* Footer Bottom */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
          variants={itemVariants}
        >
          <p>© 2025 Nova Bloom Software Inc. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            {["Privacy Policy", "Sitemap", "Terms of Use", "Cookies Policy", "Contact"].map((item, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-amber-400 transition-all duration-200 hover:underline"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;