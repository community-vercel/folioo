'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/ai/Footer';
import ContactForm from '../components/ai/contact';

import { FaUsers, FaExpandArrowsAlt, FaDollarSign } from 'react-icons/fa';

// Updated Packages Data with More Details
const packages = [
  {
    name: 'IT Staff Augmentation',
    price: '$50/hr',
    desc: 'Scale your team with skilled IT professionals, including developers, engineers, and DevOps experts, available on-demand.',
    features: ['Flexible hiring', 'Vetted professionals', '24/7 support'],
    icon: '/logos/virtual-tour.png',
  },
  {
    name: 'Magento 2 Store',
    price: '$60/hr',
    desc: 'Launch a custom Magento 2 e-commerce store with tailored design, integrations, and performance optimization.',
    features: ['Custom design', 'Payment integrations', 'SEO optimization'],
    icon: '/logos/magento.png',
  },
  {
    name: 'Next.js Website',
    price: '$55/hr',
    desc: 'Build fast, SEO-friendly websites with Next.js, featuring server-side rendering and modern UI/UX.',
    features: ['SSR/SSG', 'Custom UI/UX', 'Performance optimized'],
    icon: '/logos/nextjs-icon-svgrepo-com.png',
  },
  {
    name: 'Flutter App (MVP)',
    price: '$65/hr',
    desc: 'Develop a cross-platform mobile app MVP for iOS and Android with Flutter’s fast and flexible framework.',
    features: ['Cross-platform', 'Rapid development', 'UI/UX design'],
    icon: '/logos/flutter-package-svgrepo-com.png',
  },
  {
    name: 'SEO Plans',
    price: '$45/hr',
    desc: 'Boost your site’s ranking with customized SEO strategies, including keyword research and content optimization.',
    features: ['Keyword research', 'On-page SEO', 'Analytics tracking'],
    icon: '/logos/seo-svgrepo-com.png',
  },
  {
    name: 'Server Management',
    price: '$40/hr',
    desc: 'Ensure uptime with reliable server setup, monitoring, maintenance, and security management.',
    features: ['24/7 monitoring', 'Security patches', 'Performance tuning'],
    icon: '/logos/server-hosting-svgrepo-com.png',
  },
];

export default function Packages() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      
<header className="relative bg-gradient-to-r from-[#446f70] to-[#2a4a4b] py-24 px-6 text-white overflow-hidden">
  
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
    <div className="md:w-1/2 text-center md:text-left">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold tracking-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Flexible IT Service Packages
      </motion.h1>
      <motion.p
        className="mt-6 text-xl md:text-2xl max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Choose from our hourly plans tailored to your business needs, from development to server management.
      </motion.p>
      
      <motion.div
        className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
   
      </motion.div>
    </div>
    <div className="md:w-1/2 mt-8 md:mt-0">
      <Image
        src="/salesforce/a18743d-0cb-c48d-8f-48b0fb10127_a92d9861-59d0-44c4-b0ad-99a9a5540087.jpg"
        alt="IT Solutions Illustration"
        width={512}
        height={512}
        className="w-full max-w-md mx-auto rounded-lg shadow-lg border-2 border-[#446f70] hover:scale-105 transition-transform duration-300"
        priority
      />
    </div>
  </div>
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-10 left-10 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
    <div className="absolute top-40 right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000"></div>
  </div>
</header>

      {/* Packages Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Service Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover flexible hourly plans designed to accelerate your business growth with cutting-edge IT solutions.
            </p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                className="relative text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image src={pkg.icon} alt={`${pkg.name} icon`} width={32} height={32} />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-[#446f70] font-bold text-2xl mb-3">{pkg.price}</p>
                <p className="text-gray-600 mb-4">{pkg.desc}</p>
                <ul className="text-gray-600 text-sm space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <button className="w-full py-3 bg-[#446f70] text-white font-bold rounded-lg hover:bg-[#2a4a4b] transition-all">
                    Choose Plan
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
        <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Our Packages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with us for tailored IT solutions that drive results and scale with your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Expert Team',
              desc: 'Work with certified professionals with deep expertise in IT and development.',
              icon: <FaUsers className="mx-auto text-4xl text-gray-900" />,
            },
            {
              title: 'Scalable Solutions',
              desc: 'Our packages adapt to your needs, from startups to enterprises.',
              icon: <FaExpandArrowsAlt className="mx-auto text-4xl text-gray-900" />,
            },
            {
              title: 'Cost-Effective',
              desc: 'Hourly pricing ensures you only pay for what you need, with no hidden fees.',
              icon: <FaDollarSign className="mx-auto text-4xl text-gray-900" />,
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {benefit.icon}
              <h3 className="font-semibold text-lg mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      <ContactForm />
      <Footer />
    </>
  );
}