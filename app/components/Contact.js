"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaPhone, FaHeadset } from "react-icons/fa";

export default function ContactUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="w-full lg:w-1/2"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy-900 mb-4 sm:mb-6 leading-tight">
              Let’s Build Together
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-lg mb-6 sm:mb-8">
              At Sharplogicians, we partner with startups, SMBs, and enterprises to create innovative software and AI solutions. Ready to transform your ideas into reality? Reach out today!
            </p>
            <div className="space-y-4 text-gray-900 text-base sm:text-lg">
              <div className="flex items-center">
                <FaPhone className="w-5 h-5 text-teal-500 mr-3" aria-hidden="true" />
                <span>
                  <strong>Tel:</strong> +1 (415) 789-1234
                </span>
              </div>
              <div className="flex items-center">
                <FaHeadset className="w-5 h-5 text-teal-500 mr-3" aria-hidden="true" />
                <span>
                  <strong>Support:</strong> +1 (415) 789-5678
                </span>
              </div>
            </div>
          
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={formVariants}
            className="w-full lg:w-1/2 bg-white shadow-xl rounded-2xl p-6 sm:p-8 lg:p-10"
          >
            <form className="space-y-6" aria-label="Contact Sharplogicians form">
              {[
                { type: "text", name: "name", placeholder: "Your Name", ariaLabel: "Your name" },
                { type: "email", name: "email", placeholder: "Your Email", ariaLabel: "Your email" },
                { type: "tel", name: "phone", placeholder: "Your Phone", ariaLabel: "Your phone number" },
                { type: "text", name: "organization", placeholder: "Your Organization", ariaLabel: "Your organization" },
              ].map((input, index) => (
                <div key={index}>
                  <input
                    type={input.type}
                    name={input.name}
                    placeholder={input.placeholder}
                    aria-label={input.ariaLabel}
                    className="w-full border border-gray-200 rounded-lg py-3 px-4 text-sm sm:text-base text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all duration-300"
                    required={input.type === "email"}
                  />
                </div>
              ))}
              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your project"
                  aria-label="Project details"
                  rows={5}
                  className="w-full border border-gray-200 rounded-lg py-3 px-4 text-sm sm:text-base text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none resize-none transition-all duration-300"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-500 text-white font-semibold text-base sm:text-lg py-3 px-6 rounded-full w-full hover:bg-teal-600 transition-colors duration-300 shadow-md hover:shadow-lg"
                aria-label="Submit contact form"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        section {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </section>
  );
}