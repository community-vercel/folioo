"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ContactForm from "../../../components/ai/contact";

const testimonials = [
 {
    
 name: "Terri Anne Meyer",
 role: "VP",

 company: "BoardOfDecor",
 text: "We’ve been working with Nova Bloom since 2016...",
 stars: 5,
 image: "https://ecommerce.folio3.com/wp-content/uploads/2024/12/1555613135006-150x150.jpeg",
 },
 {
 name: "Omar M. Al-Midani",
 role: "Co-CEO",
 company: "Purelife",
 text: "Nova Bloom helped us with multiple projects...",
 stars: 5,
 image: "https://ecommerce.folio3.com/wp-content/uploads/2024/12/1711682403792-300x300.jpeg",
 },
 {
 name: "Dianne Fishman",
 role: "CEO",
 company: "Zara",
 text: "The team at Nova Bloom is fantastic...",
 stars: 5,
 image: "https://ecommerce.folio3.com/wp-content/uploads/2024/12/1517691942415.jpeg",
 },
 {
 name: "Terri Anne Meyer",
 role: "VP",
 company: "BoardOfDecor",
 text: "We’ve been working with Nova Bloom since 2016...",
 stars: 5,
 image: "https://ecommerce.folio3.com/wp-content/uploads/2024/12/1555613135006-150x150.jpeg",
 },
];

export default function TestimonialSlider() {
 const cardVariants = {
 hidden: { opacity: 0, y: 20 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
 hover: {
 scale: 1.05,
 boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
 transition: { duration: 0.3, ease: "easeOut" },
 },
 };

 const iconVariants = {
 hover: { scale: 1.2, transition: { duration: 0.3 } },
 };

 const buttonVariants = {
 hover: { scale: 1.1, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", transition: { duration: 0.3 } },
 };

 const navButtonVariants = {
 hover: { scale: 1.2, x: (isPrev) => (isPrev ? -5 : 5), transition: { duration: 0.2 } },
 };

 return (
 <>
 {/* Testimonial Slider Section */}
 <section className="py-24 bg-gradient-to-br from-gray-100 to-teal-50 text-gray-900 relative overflow-hidden">
 <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 animate-pulse"></div>
 <motion.div
 className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center z-10"
 initial={{ opacity: 0, y: 50 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8 }}
 >
 <motion.h2
 className="text-lg md:text-xl font-semibold text-teal-600 mb-2 tracking-wide"
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.2 }}
 >
 Ambitious Brands Endorse Nova Bloom’s Shopify
 </motion.h2>
 <motion.h3
 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14"
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.4 }}
 >
 Ecommerce Development Services
 </motion.h3>
 <Swiper
 spaceBetween={30}
 slidesPerView={1}
 breakpoints={{
 640: { slidesPerView: 2 },
 1024: { slidesPerView: 3 },
 }}
 loop={true}
 autoplay={{ delay: 5000, disableOnInteraction: false }}
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
 className="bg-white/95 backdrop-blur-md shadow-2xl p-6 md:p-8 rounded-2xl h-full flex flex-col items-start text-left border border-teal-200/50"
 variants={cardVariants}
 initial="hidden"
 animate="visible"
 whileHover="hover"
 >
 <div className="flex items-center mb-5">
 <motion.img
 src={t.image}
 alt={t.name}
 className="w-16 h-16 md:w-20 md:h-20 rounded-full mr-5 object-cover border-2 border-teal-300"
 initial={{ opacity: 0, scale: 0.9 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.5 }}
 loading="lazy"
 />
 <div>
 <p className="font-bold text-lg md:text-xl text-gray-800">{t.name}</p>
 <p className="text-sm md:text-base text-gray-500">{t.role}, {t.company}</p>
 </div>
 </div>
 <p className="text-gray-700 text-base md:text-lg mb-5 flex-1 leading-relaxed">{t.text}</p>
 <div className="flex space-x-2">
 {Array(t.stars)
 .fill()
 .map((_, i) => (
 <motion.div key={i} variants={iconVariants} whileHover="hover">
 <FaStar className="text-yellow-500 w-5 h-5 md:w-6 md:h-6" />
 </motion.div>
 ))}
 </div>
 </motion.div>
 </SwiperSlide>
 ))}
 </Swiper>
 <motion.button
 className="prev-btn absolute left-4 top-1/2 -translate-y-1/2 bg-teal-100 p-3 md:p-4 rounded-full z-20 shadow-lg"
 variants={navButtonVariants}
 custom={true}
 whileHover="hover"
 transition={{ duration: 0.2 }}
 aria-label="Previous slide"
 >
 <FiChevronLeft className="text-teal-800 w-5 h-5 md:w-6 md:h-6" />
 </motion.button>
 <motion.button
 className="next-btn absolute right-4 top-1/2 -translate-y-1/2 bg-teal-100 p-3 md:p-4 rounded-full z-20 shadow-lg"
 variants={navButtonVariants}
 custom={false}
 whileHover="hover"
 transition={{ duration: 0.2 }}
 aria-label="Next slide"
 >
 <FiChevronRight className="text-teal-800 w-5 h-5 md:w-6 md:h-6" />
 </motion.button>
 <style jsx>{`
 .case-studies-swiper .swiper-slide {
 transition: transform 0.3s ease;
 }
 .case-studies-swiper .swiper-slide-active,
 .case-studies-swiper .swiper-slide-next,
 .case-studies-swiper .swiper-slide-prev {
 transform: scale(1.02);
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
<ContactForm />
 </>
 );
}