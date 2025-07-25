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
  FiCpu,
  FiBox,
} from 'react-icons/fi';
import Image from 'next/image';
import PartnersAwards from '../components/Awardsection';
import ContactForm from '../components/ai/contact';

const serviceCategories = [
  {
    name: 'IT Consulting & Advisory Services',
    description: 'Strategic guidance to align IT with your business objectives, driving innovation and growth.',
    features: [
      'Strategic IT roadmaps',
      'Technology gap analysis',
      'Digital transformation strategies',
      'Business process optimization',
    ],
    icon: <FiMonitor className="w-10 h-10 text-[#446f70] mr-4" />,
  },
  {
    name: 'Professional Services & Integration',
    description: 'Custom integration of IT systems to enhance performance, scalability, and interoperability.',
    features: [
      'System integration and deployment',
      'Custom software development',
      'API and middleware solutions',
      'Project lifecycle management',
    ],
    icon: <FiSettings className="w-10 h-10 text-[#446f70] mr-4" />,
  },
  {
    name: 'Managed IT Services',
    description: 'End-to-end IT management to ensure uptime, performance, and cost efficiency.',
    features: [
      '24/7 network monitoring',
      'Proactive maintenance and updates',
      'Helpdesk and end-user support',
      'Vendor management',
    ],
    icon: <FiServer className="w-10 h-10 text-[#446f70] mr-4" />,
  },
  {
    name: 'Cloud Services & Migration',
    description: 'Flexible cloud solutions to modernize infrastructure and optimize costs.',
    features: [
      'Cloud migration and strategy',
      'Hybrid and multi-cloud setups',
      'Cloud cost optimization',
      'SaaS, PaaS, and IaaS solutions',
    ],
    icon: <FiCloud className="w-10 h-10 text-[#446f70] mr-4" />,
  },
  {
    name: 'Cybersecurity Services',
    description: 'Advanced security solutions to protect against evolving cyber threats.',
    features: [
      'Real-time threat detection and response',
      'Compliance and risk assessments',
      'Penetration testing and vulnerability scans',
      'Security awareness training',
    ],
    icon: <FiShield className="w-10 h-10 text-[#446f70] mr-4" />,
  },
  {
    name: 'Data Center & Infrastructure Services',
    description: 'High-performance data center solutions for reliability and scalability.',
    features: [
      'Server and storage management',
      'Infrastructure design and optimization',
      'Disaster recovery planning',
      'High-availability solutions',
    ],
    icon: <FiDatabase className="w-10 h-10 text-[#446f70] mr-4" />,
  },
  {
    name: 'Digital Workspace & End-User Computing',
    description: 'Modern workspace solutions to boost productivity and collaboration.',
    features: [
      'Virtual desktop infrastructure (VDI)',
      'Collaboration platforms (e.g., Microsoft 365)',
      'Mobile device management (MDM)',
      'Remote work solutions',
    ],
    icon: <FiUsers className="w-10 h-10 text-[#446f70] mr-4" />,
  },
  {
    name: 'Print & Device Lifecycle Management',
    description: 'Cost-effective management of printing and device ecosystems.',
    features: [
      'Managed print services',
      'Device lifecycle planning',
      'Print cost optimization',
      'Eco-friendly printing solutions',
    ],
    icon: <FiPrinter className="w-10 h-10 text-[#446f70] mr-4" />,
  },
  {
    name: 'Asset Management & Software Licensing',
    description: 'Streamlined tracking and management of IT assets and licenses.',
    features: [
      'IT asset lifecycle management',
      'Software license optimization',
      'Compliance and audit reporting',
      'Asset inventory automation',
    ],
    icon: <FiClipboard className="w-10 h-10 text-[#446f70] mr-4" />,
  },
  {
    name: 'Training & Adoption Services',
    description: 'Custom training to maximize technology adoption and user efficiency.',
    features: [
      'Tailored training programs',
      'Change management support',
      'User adoption strategies',
      'Ongoing skill development',
    ],
    icon: <FiBookOpen className="w-10 h-10 text-[#446f70] mr-4" />,
  },
  {
    name: 'Hardware Solutions',
    description: 'High-quality hardware procurement and deployment for your IT needs.',
    features: [
      'Server and workstation procurement',
      'Networking equipment (routers, switches)',
      'End-user devices (laptops, desktops)',
      'Hardware maintenance and upgrades',
    ],
    icon: <FiCpu className="w-10 h-10 text-[#446f70] mr-4" />,
  },
  {
    name: 'Software Solutions',
    description: 'Tailored software solutions to enhance business operations and innovation.',
    features: [
      'Enterprise software deployment',
      'Custom application development',
      'Software integration and support',
      'SaaS subscription management',
    ],
    icon: <FiBox className="w-10 h-10 text-[#446f70] mr-4" />,
  },
];

export default function ITResellerPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* New Hero Section */}
        <div className="relative bg-[#446f70] text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#446f70]/80 to-teal-800/80 z-0" />
          <div className="absolute inset-0 bg-[url('/images/tech-pattern.png')] opacity-10 z-10" />
          <div className="max-w-7xl mx-auto px-4 relative z-20">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-5xl font-extrabold tracking-tight mb-4">
                  Empower Your Business with Next-Gen IT Solutions
                </h1>
                <p className="text-xl mb-8 max-w-lg">
                  Unlock unparalleled efficiency, security, and innovation with our comprehensive IT services, tailored hardware, and cutting-edge software solutions.
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#446f70] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    Get a Free Consultation
                  </Link>
                  <Link
                    href="#services"
                    className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#446f70] transition-colors duration-200"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
  <Image
    src="/logos/IT-cloud-map-scaled.webp"
    alt="IT Solutions Illustration"
    width={512}
    height={512}
    className="w-full max-w-md mx-auto rounded-xl" // Added rounded-full for circular effect
  />
</div>
            </div>
          </div>
        </div>

        {/* Service Introduction Section */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
            Why Choose Our IT Services?
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 text-center">
            Our IT services combine cutting-edge hardware, innovative software solutions, and expert managed services to empower your business. From strategic consulting to robust cybersecurity, we provide tailored solutions to meet your unique needs, ensuring scalability, security, and seamless operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Hardware Expertise</h3>
              <p className="text-gray-600">
                We provide top-tier hardware solutions, including servers, networking equipment, and end-user devices, sourced from leading vendors to ensure performance and reliability.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Software Innovation</h3>
              <p className="text-gray-600">
                Our software solutions range from enterprise applications to custom-built software, designed to streamline operations and integrate seamlessly with your existing systems.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Managed Services</h3>
              <p className="text-gray-600">
                Our managed services offer proactive monitoring, maintenance, and support to keep your IT environment running smoothly, minimizing downtime and maximizing efficiency.
              </p>
            </div>
          </div>
        </div>
      <PartnersAwards />

        {/* Categories Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
            Our IT Service Offerings
          </h2>
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
              Transform Your IT with Our Expertise
            </h2>
            <p className="text-lg mb-6">
              Partner with us to unlock the full potential of your IT infrastructure with our hardware, software, and managed service solutions.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#446f70] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  )}