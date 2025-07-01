"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaCloud,
  FaHeadset,
  FaBullhorn,
  FaShoppingCart,
  FaUsers,
  FaDatabase,
  FaMoneyCheckAlt,
  FaHeartbeat,
  FaFilm,
  FaIndustry,
  FaPlug,
  FaChartBar,
} from "react-icons/fa";

const services = [
  {
    title: "Salesforce Implementation",
    text: "We deliver tailored Salesforce setups, guiding you from strategy to seamless deployment for maximum impact.",
  },
  {
    title: "System Integration",
    text: "Effortlessly integrate Salesforce with your ERP, marketing tools, or custom APIs for a unified ecosystem.",
  },
  {
    title: "Custom Solutions",
    text: "Craft bespoke objects, flows, and Lightning components to align perfectly with your business needs.",
  },
  {
    title: "App Development",
    text: "Build scalable Apex, LWC, and Visualforce solutions to enhance functionality and drive growth.",
  },
  {
    title: "Lightning Migration",
    text: "Transition to Lightning for a modern, intuitive interface and improved performance.",
  },
  {
    title: "Dedicated Experts",
    text: "Our certified Salesforce consultants work as your team, optimizing and scaling your platform.",
  },
];

const products = [
  {
    name: "Sales Cloud",
    icon: FaCloud,
    description: "Boost sales with streamlined pipelines and real-time insights.",
  },
  {
    name: "Service Cloud",
    icon: FaHeadset,
    description: "Deliver exceptional customer support with AI-powered tools.",
  },
  {
    name: "Marketing Cloud",
    icon: FaBullhorn,
    description: "Create personalized campaigns to engage your audience.",
  },
  {
    name: "Commerce Cloud",
    icon: FaShoppingCart,
    description: "Power seamless online shopping experiences for growth.",
  },
  {
    name: "Experience Cloud",
    icon: FaUsers,
    description: "Build vibrant communities for customers and partners.",
  },
  {
    name: "Data Cloud",
    icon: FaDatabase,
    description: "Unify and activate your data for smarter decisions.",
  },
  {
    name: "Financial Services Cloud",
    icon: FaMoneyCheckAlt,
    description: "Enhance client relationships with tailored financial tools.",
  },
  {
    name: "Health Cloud",
    icon: FaHeartbeat,
    description: "Improve patient care with connected healthcare solutions.",
  },
  {
    name: "Media Cloud",
    icon: FaFilm,
    description: "Optimize content delivery for media and entertainment.",
  },
  {
    name: "Manufacturing Cloud",
    icon: FaIndustry,
    description: "Streamline operations with end-to-end visibility.",
  },
  {
    name: "MuleSoft",
    icon: FaPlug,
    description: "Connect apps and systems for seamless integrations.",
  },
  {
    name: "Tableau",
    icon: FaChartBar,
    description: "Transform data into actionable insights with analytics.",
  },
];

export default function SalesforceServices() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Unlock Salesforce’s Full Potential with Us
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our expert Salesforce services, from implementation to custom development, empower your business to thrive with tailored, scalable solutions.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100"
            >
              <div className="absolute top-4 right-4 bg-[#446f70] text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold">
                {idx + 1}
              </div>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
                    <Link href='/contact'>
          
          <button className="bg-[#446f70] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-800 transition-colors duration-300 shadow-md">
            Connect with Our Experts
          </button>
          </Link>
        </motion.div>

        {/* Product Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Expertise Across Salesforce Platforms
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            From Sales Cloud to MuleSoft, our team optimizes every Salesforce product to deliver results tailored to your business goals.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {products.map((product, idx) => {
            const IconComponent = product.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-xl border border-blue-100 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 mx-auto bg-blue-100 text-[#446f70] rounded-full flex items-center justify-center mb-4">
                  <IconComponent className="text-2xl" />
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
                  Learn More
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link href='/contact'>
          <button className="bg-[#446f70] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-800 transition-colors duration-300 shadow-md">
            Explore Cloud Solutions
          </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}