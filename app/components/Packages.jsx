'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaDollarSign, FaRocket, FaUsers, FaPhone, FaTrophy } from 'react-icons/fa';
import { FaUsersCog, FaLaptopCode, FaShoppingCart, FaCogs, FaChartLine, FaQuoteRight } from 'react-icons/fa';

export default function Packages() {
    
  return (
    <main className="px-4 py-6 sm:px-6 md:px-8 md:py-6 max-w-7xl mx-auto text-gray-800 space-y-12 bg-white">
      {/* Hero Section */}
      <section className="text-center space-y-6  py-12 rounded-xl">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900"
        >
          Empower Your Digital Vision
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Nova Bloom delivers tailored IT, digital, and infrastructure solutions to drive your business forward.
        </motion.p>
   <div className="flex justify-center gap-4">
  {[
    {
      text: 'Free Consultation',
      href: '/contact',
      className: 'bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:shadow-xl',
    },
    {
      text: 'Explore Packages',
      href: '/packages',
      className: 'border-2 border-teal-500 text-teal-500 hover:bg-teal-100 hover:border-teal-600',
    },
  ].map((btn, index) => (
    <Link key={index} href={btn.href}>
      <motion.button
          type="button"

        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base shadow-md transition-all ${btn.className}`}
      >
        {btn.text}
      </motion.button>
    </Link>
  ))}
</div>

      </section>
 <section className="space-y-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
        Core Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: 'IT Staff Augmentation',
            desc: 'On-demand tech talent, cloud, and cybersecurity solutions.',
            icon: <FaUsersCog className="text-teal-500 text-2xl" />,
          },
          {
            title: 'Web & Mobile Apps',
            desc: 'Scalable digital experiences with modern frameworks.',
            icon: <FaLaptopCode className="text-teal-500 text-2xl" />,
          },
          {
            title: 'E-Commerce Development',
            desc: 'Magento 2, WooCommerce, Shopify – optimized for growth.',
            icon: <FaShoppingCart className="text-teal-500 text-2xl" />,
          },
          {
            title: 'ERP Solutions (Odoo)',
            desc: 'Streamlined ERP deployments for unified operations.',
            icon: <FaCogs className="text-teal-500 text-2xl" />,
          },
          {
            title: 'SEO & Digital Marketing',
            desc: 'Boost visibility with data-driven campaigns.',
            icon: <FaChartLine className="text-teal-500 text-2xl" />,
          },
        
        ].map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, backgroundColor: service.isTestimonial ? '#e6fffa' : '#f8fafc' }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
            className={`p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 ${
              service.isTestimonial ? 'bg-teal-50' : 'bg-white'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              {service.icon}
              <h3 className="font-semibold text-lg md:text-xl text-gray-900">{service.title}</h3>
            </div>
            <p className="text-sm md:text-base text-gray-600 mt-3">{service.desc}</p>
            {service.author && (
              <p className="mt-4 text-sm font-medium text-gray-700 italic">{service.author}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>

      {/* Packages Section */}
      <section className="space-y-10 mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
          Popular Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100"
          >
            <h3 className="font-semibold text-lg md:text-xl text-gray-900 mb-4">Why Choose Us</h3>
            <ul className="space-y-4 text-gray-600">
              {[
                { text: 'Transparent Pricing', icon: <FaDollarSign className="text-teal-500 text-xl" /> },
                { text: 'Agile Development', icon: <FaRocket className="text-teal-500 text-xl" /> },
                { text: 'Dedicated Managers', icon: <FaUsers className="text-teal-500 text-xl" /> },
                { text: '24/7 Support', icon: <FaPhone className="text-teal-500 text-xl" /> },
                { text: 'Trusted by Brands', icon: <FaTrophy className="text-teal-500 text-xl" /> },
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-sm md:text-base">{item.text}</span>
                </li>
              ))}
            </ul>
            <Link href="/quote">
              <motion.button
              href="/quote"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base shadow-md hover:shadow-xl transition-all"
              >
                Request a Quote
              </motion.button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="bg-teal-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-teal-100"
          >
            <h3 className="font-semibold text-lg md:text-xl text-gray-900 mb-4">Pricing Overview</h3>
            <ul className="text-sm md:text-base text-gray-600 space-y-4">
              {[
                { name: 'IT Staff Augmentation', price: 'From $999' },
                { name: 'Magento 2 Store', price: 'From $1500' },
                { name: 'Next.js Website', price: 'From $1200' },
                { name: 'Flutter App (MVP)', price: 'From $1900' },
                { name: 'SEO Plans', price: 'From $230/mo' },
                { name: 'Server Management', price: '$300/mo' },
              ].map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-teal-500 font-semibold">{item.price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <Link href="/custom-solutions">
                <button className="text-sm md:text-base text-teal-500 hover:text-teal-600 underline font-medium">
                  Need Custom Solutions?
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    
    </main>
  );
}