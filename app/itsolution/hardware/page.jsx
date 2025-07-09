// app/hardware/page.jsx
import React from 'react';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/ai/Footer';
import {
  FiMonitor,
  FiServer,
  FiGlobe,
  FiLink,
  FiBattery,
  FiCpu,
  FiMonitor as FiDisplay,
  FiMousePointer,
  FiPrinter,
  FiShield,
} from 'react-icons/fi';

const hardwareCategories = [
  {
    name: 'Computers & Workstations',
    description: 'High-performance desktops and laptops for business productivity and creative workflows.',
    features: ['Powerful processors', 'Customizable configurations', 'Reliable performance'],
    icon: <FiMonitor className="w-10 h-10 text-[#446f70] mr-4" />,
  },
  {
    name: 'Servers & Data Center Infrastructure',
    description: 'Scalable server solutions for enterprise-grade data management and cloud computing.',
    features: ['High availability', 'Secure storage', 'Energy-efficient designs'],
    icon: <FiServer className="w-10 h-10 text-[#446f70] mr-4" />,
  },
  {
    name: 'Networking Equipment',
    description: 'Routers, switches, and wireless solutions for seamless connectivity and network performance.',
    features: ['High-speed connectivity', 'Advanced security', 'Easy management'],
    icon: <FiGlobe className="w-10 h-10 text-[#446f70] mr-4" />,
  },
  {
    name: 'Cables & Connectivity',
    description: 'Durable cables and connectors for reliable data and power transmission.',
    features: ['High-quality materials', 'Wide compatibility', 'Fast data transfer'],
    icon: <FiLink className="w-10 h-10 text-[#446f70] mr-4" />,
  },
  {
    name: 'Power & Rack Infrastructure',
    description: 'Robust power supplies and rack systems for efficient data center operations.',
    features: ['Redundant power', 'Space-saving designs', 'Easy scalability'],
    icon: <FiBattery className="w-10 h-10 text-[#446f70] mr-4" />,
  },
  {
    name: 'Computer Components & Internal Upgrades',
    description: 'CPUs, GPUs, RAM, and storage upgrades to boost system performance.',
    features: ['Latest technology', 'Easy installation', 'Enhanced performance'],
    icon: <FiCpu className="w-10 h-10 text-[#446f70] mr-4" />,
  },
  {
    name: 'Monitors & Display Devices',
    description: 'High-resolution monitors and displays for professional and creative applications.',
    features: ['4K/8K resolution', 'Wide color gamut', 'Ergonomic designs'],
    icon: <FiDisplay className="w-10 h-10 text-[#446f70] mr-4" />,
  },
  {
    name: 'Peripherals & Accessories',
    description: 'Keyboards, mice, and docking stations to enhance user productivity.',
    features: ['Ergonomic designs', 'Wireless options', 'Customizable controls'],
    icon: <FiMousePointer className="w-10 h-10 text-[#446f70] mr-4" />,
  },
  {
    name: 'Printers & Imaging Supplies',
    description: 'Advanced printers and imaging supplies for high-quality output and efficiency.',
    features: ['Fast printing', 'Eco-friendly options', 'High-yield cartridges'],
    icon: <FiPrinter className="w-10 h-10 text-[#446f70] mr-4" />,
  },
  {
    name: 'Specialty & Security Appliances',
    description: 'Specialized hardware for cybersecurity, surveillance, and secure operations.',
    features: ['Advanced encryption', 'Real-time monitoring', 'Rugged designs'],
    icon: <FiShield className="w-10 h-10 text-[#446f70] mr-4" />,
  },
];

export default function HardwarePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            IT Hardware Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of IT hardware solutions, designed to empower your business with cutting-edge technology, reliability, and performance.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#446f70] text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-800 transition-colors duration-200"
          >
            Contact Us for a Quote
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardwareCategories.map((category, index) => (
              <Link
                key={index}
                href="#"
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-[#446f70] transition-colors">
                    {category.name}
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  {category.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-4 h-4 text-[#446f70] mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-[#446f70] text-white py-12 text-center">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Upgrade Your IT Infrastructure?
            </h2>
            <p className="text-lg mb-6">
              Get in touch with our team to find the perfect hardware solutions for your business.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white  text-[#446f70] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}