"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  const socialVariants = {
    hover: { scale: 1.2, transition: { duration: 0.3 } },
  };

  return (
    <footer className="bg-gradient-to-br from-[#1c2526] to-[#446f70] text-white text-sm">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Logo & Social Icons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between mb-8"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h1 className="text-2xl font-bold mb-4 sm:mb-0">
          Nova<span className="text-[#446f70]">Bloom</span> eCommerce
          </h1>
          <div className="flex space-x-6">
            {[
              { icon: <FaFacebookF className="w-6 h-6" />, link: "#" },
              { icon: <FaTwitter className="w-6 h-6" />, link: "#" },
              { icon: <FaLinkedinIn className="w-6 h-6" />, link: "#" },
              { icon: <FaInstagram className="w-6 h-6" />, link: "#" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                custom={idx}
                variants={socialVariants}
                whileHover="hover"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Horizontal Rule */}
        <hr className="border-gray-600 mb-8" />

        {/* Navigation & Services */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* About & Platforms */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-100">About</h3>
                <ul className="space-y-2">
                  {["Our Story", "Success Stories"].map((item, idx) => (
                    <motion.li
                      key={idx}
                      custom={idx}
                      initial="hidden"
                      animate="visible"
                      variants={itemVariants}
                      className="hover:text-blue-400 cursor-pointer transition-colors duration-300"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-100">Platforms</h3>
                <ul className="space-y-2">
                  {["Shopify Plus", "Adobe Commerce", "WooCommerce", "BigCommerce", "Wix eCommerce"].map(
                    (item, idx) => (
                      <motion.li
                        key={idx}
                        custom={idx}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                        className="hover:text-blue-400 cursor-pointer transition-colors duration-300"
                      >
                        {item}
                      </motion.li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Services & Connect */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-100">eCommerce Solutions</h3>
                <ul className="space-y-2">
                  {[
                    "B2B Commerce",
                    "B2C Commerce",
                    "Headless Commerce",
                    "Retail eCommerce",
                    "Fashion & Apparel",
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      custom={idx}
                      initial="hidden"
                      animate="visible"
                      variants={itemVariants}
                      className="hover:text-blue-400 cursor-pointer transition-colors duration-300"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-100">Connect</h3>
                <ul className="space-y-2">
                  {["Our Partners", "eCommerce Blog"].map((item, idx) => (
                    <motion.li
                      key={idx}
                      custom={idx}
                      initial="hidden"
                      animate="visible"
                      variants={itemVariants}
                      className="hover:text-blue-400 cursor-pointer transition-colors duration-300"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="col-span-1 lg:col-span-2"
          >
            <h3 className="font-semibold text-lg mb-3 text-gray-100">Stay in the Loop</h3>
            <p className="mb-4 text-gray-300">
              Subscribe for exclusive eCommerce insights and updates.
            </p>
            <form className="w-full max-w-md mx-auto mt-6 flex shadow-lg rounded-xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/10">
              <motion.div
                className="flex items-center pl-4 bg-white/10 text-white"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiMail className="text-blue-300 text-xl" />
              </motion.div>
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-3 text-sm text-white bg-transparent placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              />
              <motion.button
                type="submit"
                className="bg-[#446f70] text-white px-6 py-3 font-medium text-sm tracking-wide hover:bg-blue-700 transition-all duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Join Now
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Horizontal Rule */}
        <hr className="border-gray-600 my-8" />

        {/* Address Section */}
        <motion.div
          className="py-10 px-4 max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-gray-300"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          {[
            { office: "USA", address: "1600 N Rose Blvd, 4th Floor, Kalamazoo, MI 49007" },
            { office: "Pakistan", address: "504, The Plaza, Clifton Block 9, Karachi" },
            { office: "UK", address: "Coventry, CV6 5NY, United Kingdom" },
          ].map((location, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <h4 className="font-semibold text-lg mb-2 text-gray-100">{location.office} Office</h4>
              <p>{location.address}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="border-t border-gray-600 py-6 text-center text-gray-400 text-xs"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <p>©2025  Nova eCommerce Solutions. All Rights Reserved.</p>
          <div className="mt-3 flex flex-wrap justify-center gap-6">
            {["Privacy Policy", "Sitemap", "Terms of Service", "Cookie Policy", "Contact Us"].map(
              (item, idx) => (
                <motion.span
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  className="hover:text-blue-400 cursor-pointer transition-colors duration-300"
                >
                  {item}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}