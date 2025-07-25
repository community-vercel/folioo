'use client';
import { motion } from 'framer-motion';
import { FaDollarSign, FaRocket, FaUsers, FaPhone, FaTrophy } from 'react-icons/fa';
import { FaUsersCog, FaLaptopCode, FaShoppingCart, FaCogs, FaChartLine, FaQuoteRight } from 'react-icons/fa';
import Link from 'next/link';


export default function Packages() {
  return (
    <main className="px-4 py-12 sm:px-6 md:px-8 md:py-12 max-w-7xl mx-auto text-gray-800 space-y-12 bg-white text-center space-y-6 ">
      {/* Hero Section */}
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
      href={btn.href}
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

 <div id="core-services" className="space-y-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
        Our Core Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
          title: 'IT Solutions',

desc: 'Smart enterprises start with seamless IT and digital integration\n to drive efficiency and growth.',
            icon: <FaUsersCog className="text-teal-500 text-2xl" aria-label="IT Staff Augmentation Icon" />,
            link: '/itsolution',
          },
          {
          title: 'Web & Mobile Apps',

            desc: 'Build scalable, user-friendly web and mobile applications using modern frameworks like React and Flutter.',
            icon: <FaLaptopCode className="text-teal-500 text-2xl" aria-label="Web and Mobile Apps Icon" />,
            link: '/apps',
          },
          {
          title: 'E-Commerce Development',

            desc: 'Create high-performance online stores with Magento 2, WooCommerce, and Shopify for maximum growth.',
            icon: <FaShoppingCart className="text-teal-500 text-2xl" aria-label="E-Commerce Development Icon" />,
            link: '/ecommerce',
          },
          {
          title: 'ERP Solutions (Odoo)',

            desc: 'Streamline business operations with customized Odoo ERP deployments for seamless integration.',
            icon: <FaCogs className="text-teal-500 text-2xl" aria-label="ERP Solutions Icon" />,
            link: '/ecommerce/magento',
          },
          {
          title: 'SEO & Digital Marketing',

            desc: 'Enhance online visibility with data-driven SEO strategies and targeted digital marketing campaigns.',
            icon: <FaChartLine className="text-teal-500 text-2xl" aria-label="SEO and Digital Marketing Icon" />,
            link: '/elearning',
          },
        ].map((service, index) => (
          <Link
            key={index}
      href={service.link} // Changed from href to to for react-router-dom
            className="block"
            aria-label={`Learn more about ${service.title}`}
          >
            <motion.div
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
              <p className="mt-4 text-sm font-medium text-teal-500 hover:underline">
                Explore {service.title}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>

      {/* Packages Section */}
      {/* <section className="space-y-10 mt-16"> */}
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
            <Link href="/contact">
              <motion.button
              href="/contact"
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
              <Link href="/contact">
                <button className="text-sm md:text-base text-teal-500 hover:text-teal-600 underline font-medium">
                  Need Custom Solutions?
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      {/* </section> */}
    
    </main>
  );
}