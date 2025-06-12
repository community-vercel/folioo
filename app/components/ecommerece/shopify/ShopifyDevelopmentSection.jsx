"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";
import { FiShoppingBag, FiZap, FiGlobe } from "react-icons/fi"; // Feather Icons

// Mock AnimatedText component (adjust based on your actual implementation)
const AnimatedText = ({ text, className }) => {
  return (
    <span className={clsx("inline-block overflow-hidden", className)}>
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </span>
  );
};

export default function ShopifyDevelopmentSection() {
  const logos = [
    "https://ecommerce.folio3.com/wp-content/uploads/2024/11/growing-brands-bird-b-gone.webp",
    "https://ecommerce.folio3.com/wp-content/uploads/2024/11/growing-brands-easilocks.webp",
    "https://ecommerce.folio3.com/wp-content/uploads/2024/11/growing-brands-vudoo-gun-works.webp",
    "https://ecommerce.folio3.com/wp-content/uploads/2024/11/growing-brands-cp-lighting.webp",
    "https://ecommerce.folio3.com/wp-content/uploads/2024/11/growing-brands-bird-b-gone.webp",
    "https://ecommerce.folio3.com/wp-content/uploads/2024/11/growing-brands-cp-lighting.webp",
  ];


const features = [
  {
    icon: FiShoppingBag,
    title: "You want an intuitive Shopify store that scales with your business",
    description:
      "We ensure your Shopify solution aligns with your business goals, with mobile-friendly UX and fast-loading structure for more conversions.",
  },
  {
    icon: FiZap,
    title: "You want to enhance your Shopify store’s performance and UX",
    description:
      "We specialize in optimizing Shopify stores for better speed, engagement, and conversion rate.",
  },
  {
    icon: FiGlobe,
    title: "You want an omnichannel Shopify eCommerce platform",
    description:
      "We offer scalable Shopify platforms with POS and multichannel integrations tailored to enterprise growth.",
  },
];
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    hover: {
      y: -8,
      scale: 1.03,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  // Icon animation variants
  const iconVariants = {
    hidden: { scale: 0, rotate: -10 },
    visible: { scale: 1, rotate: 0, transition: { duration: 0.5, type: "spring" } },
    hover: { scale: 1.2, rotate: 5, transition: { duration: 0.3 } },
  };
  return (
    <section className=" text-center px-6 py-16 md:px-12 lg:px-24 bg-white">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          Trusted by <span className="text-teal-600">150+ Fast-Growing Brands</span> for Shopify Development
        </h2>
        <div className="mt-4">
          <AnimatedText
            text="Premier Shopify Solutions"
            className="text-xs text-[#6BE18F] uppercase font-medium tracking-wider"
          />
        </div>
      </motion.div>

      {/* Logo Grid */}
      <div className="flex justify-center items-center flex-wrap gap-8 mb-12">
        {logos.map((logo, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="relative"
          >
            <img
              src={logo}
              alt={`Brand logo ${idx + 1}`}
              width={120}
              height={60}
              className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              loading="lazy"
              onError={(e) => (e.currentTarget.src = "https://ecommerce.folio3.com/wp-content/uploads/2024/11/purelife-testimonial-video-thumb-300x181.webp")}
            />
          </motion.div>
        ))}
      </div>

      {/* Testimonial Videos */}
      <div className="flex justify-center gap-8 flex-wrap mb-16">
        {[
          { src: "https://ecommerce.folio3.com/wp-content/uploads/2024/11/facereality-testimonial-video-thumb-300x181.webp", alt: "Face Reality Testimonial" },
          { src: "https://ecommerce.folio3.com/wp-content/uploads/2024/11/purelife-testimonial-video-thumb-300x181.webp", alt: "Purelife Testimonial" },
        ].map((video, idx) => (
          <motion.div
            key={idx}
            className="w-[320px] relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <img
              src={video.src}
              alt={video.alt}
              width={320}
              height={192}
              className="rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <button
              className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-all duration-300 rounded-xl"
              aria-label={`Play ${video.alt}`}
            >
           
            </button>
            <p className="bg-teal-600 text-white mb-2 text-sm mt-3 px-4 py-1.5 inline-block rounded-full font-semibold shadow-sm">
              Customer Testimonial
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
className="bg-gradient-to-r from-teal-800 to-teal-600 max-w-6xl mx-auto text-center text-white p-8 md:p-12 rounded-2xl mb-16 text-left shadow-xl relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute max-w-6xl inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight relative z-10">
          Request a No-Cost Estimate Today!
        </h3>
        <p className="mb-6 text-gray-100 leading-relaxed max-w-6xl relative z-10">
          Connect with us for a free consultation to explore the ideal Shopify development solution for your unique business needs and goals.
        </p>
        <button
          className="bg-lime-400 text-teal-900 font-semibold py-3 px-8 rounded-full hover:bg-lime-500 hover:shadow-lg transition-all duration-300 relative z-10"
          aria-label="Request a free consultation"
        >
          Let’s Build & Scale Your eCommerce Store
        </button>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-900">
          Why Choose <span className="text-teal-600">Nova Bloom</span> for Shopify Development?
        </h3>
      </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 px-6 md:px-0 max-w-6xl mx-auto">
      {features.map((feature, idx) => (
        <motion.div
          key={idx}
          className={clsx(
            "relative border border-gray-200 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300",
            idx === 2
              ? "bg-gradient-to-br from-teal-50 to-teal-100"
              : "bg-gradient-to-br from-white to-gray-50",
            "overflow-hidden"
          )}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ duration: 0.5, delay: idx * 0.2 }}
          role="region"
          aria-labelledby={`feature-title-${idx}`}
        >
          {/* Decorative Border Glow */}
          <div
            className={clsx(
              "absolute inset-0 border-2 border-transparent rounded-2xl",
              "hover:border-teal-400/50 hover:transition-all hover:duration-300"
            )}
          ></div>

          {/* Icon */}
          <motion.div
            className="mb-5 relative z-10 flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <feature.icon className="w-6 h-6 text-teal-600" aria-hidden="true" />
          </motion.div>

          {/* Title */}
          <h4
            id={`feature-title-${idx}`}
            className="font-bold text-xl md:text-2xl text-gray-900 mb-3 tracking-tight"
          >
            {feature.title}
          </h4>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-600 leading-relaxed relative z-10">
            {feature.description}
          </p>

          {/* Decorative Element */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-teal-200/20 rounded-full -translate-y-12 translate-x-12 blur-2xl"></div>
        </motion.div>
      ))}
    </div>
    </section>
  );
}