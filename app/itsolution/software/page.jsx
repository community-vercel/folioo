// app/software/page.jsx
import React from 'react';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/ai/Footer';
import {
  FiMonitor,
  FiShield,
  FiSave,
  FiCloud,
  FiDatabase,
  FiUsers,
  FiCode,
  FiGlobe,
  FiPenTool,
  FiClipboard,
} from 'react-icons/fi';

const softwareCategories = [
  {
    name: 'Operating Systems',
    description: 'Robust and secure operating systems for desktops, servers, and cloud environments.',
    features: ['High compatibility', 'Regular updates', 'User-friendly interfaces'],
    icon: <FiMonitor className="w-10 h-10  text-[#446f70] mr-4" />,
  },
  {
    name: 'Security & Antivirus',
    description: 'Advanced cybersecurity solutions to protect your systems from threats and malware.',
    features: ['Real-time threat detection', 'Firewall protection', 'Anti-ransomware'],
    icon: <FiShield className="w-10 h-10  text-[#446f70] mr-4" />,
  },
  {
    name: 'Backup & Data Protection',
    description: 'Reliable backup and recovery solutions to safeguard your critical data.',
    features: ['Automated backups', 'Encrypted storage', 'Fast recovery'],
    icon: <FiSave className="w-10 h-10  text-[#446f70] mr-4" />,
  },
  {
    name: 'Virtualization & Cloud Infrastructure',
    description: 'Scalable virtualization and cloud platforms for efficient resource management.',
    features: ['Seamless scalability', 'Hybrid cloud support', 'Cost optimization'],
    icon: <FiCloud className="w-10 h-10  text-[#446f70] mr-4" />,
  },
  {
    name: 'Database & Analytics',
    description: 'Powerful database management and analytics tools for data-driven decisions.',
    features: ['High-performance queries', 'Real-time analytics', 'Scalable storage'],
    icon: <FiDatabase className="w-10 h-10  text-[#446f70] mr-4" />,
  },
  {
    name: 'Collaboration & Productivity Suites',
    description: 'Tools to enhance team collaboration and streamline business workflows.',
    features: ['Real-time collaboration', 'Cloud-based access', 'Integrated apps'],
    icon: <FiUsers className="w-10 h-10  text-[#446f70] mr-4" />,
  },
  {
    name: 'Development & IT Management Tools',
    description: 'Software for developers and IT teams to build, manage, and deploy applications.',
    features: ['CI/CD integration', 'Monitoring dashboards', 'Automation tools'],
    icon: <FiCode className="w-10 h-10  text-[#446f70] mr-4" />,
  },
  {
    name: 'Networking & Remote Access Software',
    description: 'Solutions for secure remote access and network management.',
    features: ['VPN support', 'Remote desktop', 'Network monitoring'],
    icon: <FiGlobe className="w-10 h-10  text-[#446f70] mr-4" />,
  },
  {
    name: 'Creative & CAD/CAM Software',
    description: 'Advanced tools for design, engineering, and creative content creation.',
    features: ['3D modeling', 'High-precision rendering', 'Creative workflows'],
    icon: <FiPenTool className="w-10 h-10  text-[#446f70] mr-4" />,
  },
  {
    name: 'Asset Management & Software Licensing',
    description: 'Software to track and manage IT assets and licensing compliance.',
    features: ['Asset tracking', 'License optimization', 'Compliance reports'],
    icon: <FiClipboard className="w-10 h-10  text-[#446f70] mr-4" />,
  }];
export default function SoftwarePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            IT Software Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of IT software solutions, designed to enhance productivity, security, and efficiency for your business.
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
            {softwareCategories.map((category, index) => (
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
              Ready to Transform Your IT Operations?
            </h2>
            <p className="text-lg mb-6">
              Get in touch with our team to find the perfect software solutions for your business needs.
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