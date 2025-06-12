"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import clsx from "clsx";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion"; // For animations

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      logo: "https://ecommerce.folio3.com/wp-content/uploads/2025/04/zinco-2-1.webp",
      category: "RETAIL",
      label: "SHOPIFY",
      title: "Upgrading to Shopify 2.0 for Better Performance & Usability",
      stats: [
        { value: "25%", label: "Increase in Conversion Rates" },
        { value: "40%", label: "Growth in Mobile App Engagement" },
      ],
      background: "https://ecommerce.folio3.com/wp-content/uploads/2025/04/Frame-2147223979-1.webp",
    },
    {
      id: 2,
      logo: "https://ecommerce.folio3.com/wp-content/uploads/2025/04/ROSE-INC-1-1.webp",
      category: "COSMETICS",
      label: "SHOPIFY",
      title: "Boosting Conversions & Upsells with Custom Product Bundles",
      stats: [
        { value: "15%", label: "Increase in Sales" },
        { value: "20%", label: "Improved User Engagement" },
      ],
      background: "https://ecommerce.folio3.com/wp-content/uploads/2025/04/Frame-2147223981-1.png",
    },
    {
      id: 3,
      logo: "https://ecommerce.folio3.com/wp-content/uploads/2025/04/Frame-2147223964-3-1.webp",
      category: "BEAUTY & HAIRCARE",
      label: "SHOPIFY PLUS",
      title: "Creating a Unified Platform for B2B and B2C Commerce",
      stats: [
        { value: "20%", label: "Growth in Conversions" },
        { value: "30%", label: "Lesser Operational Costs" },
      ],
      background: "https://ecommerce.folio3.com/wp-content/uploads/2025/04/Frame-2147223980-1.png",
    },
     {
      id: 3,
      logo: "https://ecommerce.folio3.com/wp-content/uploads/2025/04/Frame-2147223964-3-1.webp",
      category: "BEAUTY & HAIRCARE",
      label: "SHOPIFY PLUS",
      title: "Creating a Unified Platform for B2B and B2C Commerce",
      stats: [
        { value: "20%", label: "Growth in Conversions" },
        { value: "30%", label: "Lesser Operational Costs" },
      ],
      background: "https://ecommerce.folio3.com/wp-content/uploads/2025/04/Frame-2147223980-1.png",
    },
  ];

  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Our <span className="text-teal-600">Case Studies</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-6xl mx-auto leading-relaxed">
          Here are some of our top Shopify solutions that drove business growth for eCommerce brands globally.
        </p>
      </motion.div>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          className="case-studies-swiper max-w-6xl"
        >
          {caseStudies.map((item,index) => (
            <SwiperSlide key={index}>
              <motion.div
                className={clsx(
                  "rounded-3xl overflow-hidden text-white p-6 h-full flex flex-col justify-between relative",
                  "bg-gradient-to-br from-teal-800/80 to-teal-600/90",
                  "shadow-lg hover:shadow-xl transition-all duration-300"
                )}
                style={{
                  backgroundImage: `url(${item.background})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
                role="article"
                aria-labelledby={`case-study-title-${item.id}`}
              >
                <div className="absolute inset-0 bg-teal-800/70 backdrop-blur-sm"></div>

                <div className="relative z-10">
                  <img
                    src={item.logo}
                    alt={`${item.category} logo`}
                    className="h-14 mb-6 object-contain"
                    loading="lazy"
                    onError={(e) => (e.currentTarget.src = "/images/fallback.png")} // Fallback image
                  />

                  <div className="flex gap-3 mb-6 text-xs font-semibold">
                    <span className="border border-white rounded-full px-3 py-1 bg-white/10">
                      {item.category}
                    </span>
                    <span className="bg-lime-400 text-black rounded-full px-3 py-1">
                      {item.label}
                    </span>
                  </div>

                  <h3
                    id={`case-study-title-${item.id}`}
                    className="text-xl font-bold mb-4 leading-tight"
                  >
                    {item.title}
                  </h3>

                  <div className="flex gap-6 text-sm font-medium mb-6">
                    {item.stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-2xl font-extrabold text-lime-400">{stat.value}</span>
                        <span className="text-gray-200">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className="mt-auto border-2 border-lime-400 text-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-[] hover:text-teal-800 transition-all duration-300"
                    aria-label={`Read more about ${item.title}`}
                  >
                    Read More
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Prev / Next Buttons */}
        <motion.button
          className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 bg-lime-400 p-3 rounded-full z-20 shadow-md"
          whileHover={{ scale: 1.1, x: -5 }}
          transition={{ duration: 0.2 }}
          aria-label="Previous slide"
        >
          <FiChevronLeft className="text-teal-800 w-4 h-4" />
        </motion.button>
        <motion.button
          className="next-btn absolute right-0 top-1/2 -translate-y-1/2 bg-lime-400 p-3 rounded-full z-20 shadow-md"
          whileHover={{ scale: 1.1, x: 5 }}
          transition={{ duration: 0.2 }}
          aria-label="Next slide"
        >
          <FiChevronRight className="text-teal-800 w-4 h-4" />
        </motion.button>
      </div>

      <style jsx>{`
        .case-studies-swiper .swiper-slide {
          transition: transform 0.3s ease;
        }
        .case-studies-swiper .swiper-slide-active {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
}