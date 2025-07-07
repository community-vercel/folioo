"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Link from "next/link";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Founder",
    company: "TrendyThreads",
    text: "Nova Bloom transformed our online store, boosting our sales by 45% in just three months. Their expertise in Shopify development is unmatched!",
    stars: 5,
    image: "https://ecommerce.folio3.com/wp-content/uploads/2024/12/1555613135006-150x150.jpeg",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "FreshMart",
    text: "With Nova Bloom's custom eCommerce solutions, we streamlined our operations and doubled our conversion rates. Highly recommend their team!",
    stars: 5,
    image: "https://ecommerce.folio3.com/wp-content/uploads/2024/12/1711682403792-300x300.jpeg",
  },
  {
    name: "Emma Davis",
    role: "Marketing Director",
    company: "LuxeJewels",
    text: "Nova Bloom's team delivered a stunning Shopify store that elevated our brand. Their support has been crucial to our 30% revenue growth.",
    stars: 5,
    image: "https://ecommerce.folio3.com/wp-content/uploads/2024/12/1517691942415.jpeg",
  },
  {
    name: "James Patel",
    role: "Co-Founder",
    company: "TechTrend",
    text: "Nova Bloom's expertise in eCommerce development helped us launch a scalable store, increasing our customer retention by 25%.",
    stars: 5,
    image: "https://ecommerce.folio3.com/wp-content/uploads/2024/12/1555613135006-150x150.jpeg",
  },
];

export default function TestimonialSliderEcommerce() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  const iconVariants = {
    hover: { scale: 1.2, transition: { duration: 0.2 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)", transition: { duration: 0.3 } },
  };

  const navButtonVariants = {
    hover: { scale: 1.2, transition: { duration: 0.2 } },
  };

  return (
    <>
      {/* Testimonial Slider Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 animate-pulse"></div>
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Trusted by Leading eCommerce Brands
          </motion.h2>
          <motion.h3
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Exceptional eCommerce Development Results
          </motion.h3>
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            modules={[Autoplay, Navigation]}
            className="case-studies-swiper"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  className="bg-white shadow-lg p-6 rounded-xl h-full flex flex-col items-start text-left border border-blue-100"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <div className="flex items-center mb-4">
                    <motion.img
                      src={t.image}
                      alt={t.name}
                      className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-blue-300"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      loading="lazy"
                    />
                    <div>
                      <p className="font-semibold text-lg text-gray-800">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.role}, {t.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base mb-4 flex-1 leading-relaxed">{t.text}</p>
                  <div className="flex space-x-1">
                    {Array(t.stars)
                      .fill()
                      .map((_, i) => (
                        <motion.div key={i} variants={iconVariants} whileHover="hover">
                          <FaStar className="text-yellow-400 w-5 h-5" />
                        </motion.div>
                      ))}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <motion.button
            className="prev-btn absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full z-20 shadow-md"
            variants={navButtonVariants}
            whileHover="hover"
            aria-label="Previous slide"
          >
            <FiChevronLeft className="text-blue-600 w-5 h-5" />
          </motion.button>
          <motion.button
            className="next-btn absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full z-20 shadow-md"
            variants={navButtonVariants}
            whileHover="hover"
            aria-label="Next slide"
          >
            <FiChevronRight className="text-blue-600 w-5 h-5" />
          </motion.button>
          <style jsx>{`
            .case-studies-swiper .swiper-slide {
              transition: transform 0.3s ease;
            }
            .case-studies-swiper .swiper-slide-active {
              transform: scale(1.05);
            }
            @keyframes pulse {
              0%, 100% { opacity: 0.10; }
              50% { opacity: 0.15; }
            }
            .animate-pulse {
              animation: pulse 4s infinite ease-in-out;
            }
          `}</style>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-[#446f70] to-gray-900 text-white relative">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 animate-pulse"></div>
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
            <motion.div
              className="text-left w-full md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                           <Link href='/contact'>
                
                Launch Your eCommerce Success
                </Link>
              </motion.h2>
              <motion.p
                className="text-xl sm:text-2xl text-blue-500 font-semibold mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Start with Nova Bloom Today!
              </motion.p>
              <motion.p
                className="text-base text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Connect with our eCommerce experts to grow your online store.
              </motion.p>
            </motion.div>
            <motion.form
              className="w-full md:w-1/2 space-y-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                required
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                required
              />
              <motion.input
                type="tel"
                placeholder="Your Phone"
                className="w-full p-3 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                required
              />
              <motion.textarea
                placeholder="Tell Us About Your eCommerce Project"
                rows="4"
                className="w-full p-3 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                required
              />
              <motion.button
                type="submit"
                className="w-full bg-[#446f70] text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
                variants={buttonVariants}
                whileHover="hover"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1 }}
                aria-label="Submit form"
              >
                                      <Link href='/contact'>

                GET STARTED NOW
                </Link>
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </section>
    </>
  );
}