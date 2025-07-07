"use client";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // Added for animations

const logos = [
  "/salesforce/growing-companies-tjm-logo.webp",
  "/salesforce/growing-companies-colgate-logo.webp",
  "/salesforce/growing-companies-hiplink-logo.webp",
  "/salesforce/growing-companies-SAP-logo.webp",
  "/salesforce/growing-companies-barnes-logo.webp",
  "/salesforce/growing-companies-honda-logo.webp",
  "/salesforce/growing-companies-angus-logo.webp",
  "/salesforce/growing-companies-srixon-logo.webp",
  "/salesforce/growing-companies-agribeef-logo.webp",
  "/salesforce/growing-companies-fair-squared-logo.webp",
];

const testimonials = [
  {
    logo: "/salesforce/testimonial-majorkey-logo.webp",
    name: "TechWave Innovations",
    stars: 5,
    text: "Partnering with Nova Boom transformed our Salesforce ecosystem. Their team streamlined our complex workflows and delivered a seamless integration that boosted our productivity by 40%. Their expertise and proactive communication made the entire process smooth and stress-free. We now rely on them for ongoing optimizations!",
  },
  {
    logo: "/salesforce/testimonial-sunhero-logo.webp",
    name: "GrowEasy Analytics",
    stars: 4,
    text: "Nova Boom exceeded our expectations with their Salesforce consulting. They tackled our unique challenges with creative solutions and kept us informed at every step. Their ability to break down technical complexities into actionable insights was a game-changer for our team. Highly recommended!",
  },
  {
    logo: "/salesforce/growing-companies-SAP-logo.webp",
    name: "Zenith Enterprises",
    stars: 5,
    text: "The Nova Boom team delivered an exceptional Salesforce implementation for our growing business. Their attention to detail and commitment to our success were evident in every milestone. We’ve seen a significant improvement in our CRM efficiency, and their support continues to drive our growth.",
  },
];

export default function Testimonials() {
  const [logoIndex, setLogoIndex] = useState(0);

  const scrollLeft = () => {
    setLogoIndex((prev) => (prev === 0 ? logos.length - 1 : prev - 1));
  };

  const scrollRight = () => {
    setLogoIndex((prev) => (prev === logos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-gray-100 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12"
        >
          Empowering Growth with Expert Salesforce Solutions
        </motion.h2>

        {/* Logos Carousel */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <button
            onClick={scrollLeft}
            className="text-blue-600 text-2xl p-3 rounded-full bg-white shadow-md hover:bg-[#446f70] hover:text-white transition-colors duration-300"
            aria-label="Scroll left"
          >
            <FaChevronLeft />
          </button>
          <div className="flex gap-8 overflow-hidden">
            <AnimatePresence>
              {logos.slice(logoIndex, logoIndex + 5).map((src, i) => (
                <motion.img
                  key={`${logoIndex}-${i}`}
                  src={src}
                  alt="Client logo"
                  className="h-12 object-contain"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                />
              ))}
            </AnimatePresence>
          </div>
          <button
            onClick={scrollRight}
            className="text-blue-600 text-2xl p-3 rounded-full bg-white shadow-md hover:bg-[#446f70] hover:text-white transition-colors duration-300"
            aria-label="Scroll right"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img src={t.logo} alt={t.name} className="h-12 mb-4" />
              <h3 className="font-semibold text-xl text-gray-800 mb-2">{t.name}</h3>
              <div className="flex text-yellow-400 mb-4">
                {"★★★★★".slice(0, t.stars)}
                {t.stars < 5 && "☆".repeat(5 - t.stars)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}