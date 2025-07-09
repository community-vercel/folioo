import React from 'react';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/ai/Footer';
import {
  FiMonitor,
  FiSettings,
  FiServer,
  FiCloud,
  FiShield,
  FiDatabase,
  FiUsers,
  FiPrinter,
  FiClipboard,
  FiBookOpen,
} from 'react-icons/fi';

const serviceCategories = [
  {
    name: 'IT Consulting & Advisory Services',
    description: 'Expert guidance to align your IT strategy with business goals and drive innovation.',
    features: ['Strategic IT planning', 'Technology assessments', 'Digital transformation'],
    icon: <FiMonitor className="w-10 h-10  text-[#446f70] mr-4" />,
  },
  {
    name: 'Professional Services & Integration',
    description: 'Seamless integration of IT solutions to optimize performance and scalability.',
    features: ['System integration', 'Custom solutions', 'Project management'],
    icon: <FiSettings className="w-10 h-10  text-[#446f70] mr-4" />,
  },
  {
    name: 'Managed IT Services',
    description: 'Comprehensive IT management to ensure reliability and reduce downtime.',
    features: ['24/7 monitoring', 'Proactive maintenance', 'Helpdesk support'],
    icon: <FiServer className="w-10 h-10  text-[#446f70] mr-4" />,
  },
  {
    name: 'Cloud Services & Migration',
    description: 'Scalable cloud solutions and migration services for flexibility and efficiency.',
    features: ['Cloud migration', 'Hybrid cloud setup', 'Cost optimization'],
    icon: <FiCloud className="w-10 h-10  text-[#446f70] mr-4" />,
  },
  {
    name: 'Cybersecurity Services',
    description: 'Robust security solutions to protect your business from cyber threats.',
    features: ['Threat detection', 'Compliance audits', 'Incident response'],
    icon: <FiShield className="w-10 h-10  text-[#446f70] mr-4" />,
  },
  {
    name: 'Data Center & Infrastructure Services',
    description: 'Optimized data center solutions for high performance and reliability.',
    features: ['Server management', 'Infrastructure design', 'Disaster recovery'],
    icon: <FiDatabase className="w-10 h-10  text-[#446f70] mr-4" />,
  },
  {
    name: 'Digital Workspace & End-User Computing',
    description: 'Modern workspace solutions to enhance productivity and collaboration.',
    features: ['Virtual desktops', 'Collaboration tools', 'Mobile integration'],
    icon: <FiUsers className="w-10 h-10  text-[#446f70] mr-4" />,
  },
  {
    name: 'Print & Device Lifecycle Management',
    description: 'Efficient management of printing and device lifecycles for cost savings.',
    features: ['Device monitoring', 'Print optimization', 'Lifecycle planning'],
    icon: <FiPrinter className="w-10 h-10  text-[#446f70] mr-4" />,
  },
  {
    name: 'Asset Management & Software Licensing',
    description: 'Streamlined asset tracking and licensing to ensure compliance and efficiency.',
    features: ['Asset tracking', 'License optimization', 'Compliance reporting'],
    icon: <FiClipboard className="w-10 h-10  text-[#446f70] mr-4" />,
  },
  {
    name: 'Training & Adoption Services',
    description: 'Tailored training programs to maximize technology adoption and user proficiency.',
    features: ['Custom training', 'User adoption plans', 'Ongoing support'],
    icon: <FiBookOpen className="w-10 h-10  text-[#446f70] mr-4" />,
  },
];
export default function ServicesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            IT Services Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Empower your business with our comprehensive IT services, designed to enhance efficiency, security, and innovation.
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
            {serviceCategories.map((category, index) => (
              <Link
                key={index}
                href="#"
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{category.icon}</span>
                  <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-[#446f70] transition-colors">
                    {category.name}
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  {category.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-4 h-4  text-[#446f70] mr-2"
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
              Ready to Elevate Your IT Operations?
            </h2>
            <p className="text-lg mb-6">
              Connect with our expert team to discover tailored IT services for your business needs.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#446f70] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
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