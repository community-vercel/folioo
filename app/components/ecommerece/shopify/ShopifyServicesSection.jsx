"use client";
import { motion } from "framer-motion";
import clsx from "clsx";
import { FiLock, FiCalendar, FiUsers, FiSend, FiGitPullRequest, FiPower, FiPenTool, FiBriefcase, FiCode } from "react-icons/fi";
import Link from "next/link";

export default function ShopifyServicesSection() {
  const serviceModels = [
    {
      title: "Fixed Price",
      desc: "For clearly defined objectives, we provide packages based on fixed budgets or rates for your Shopify app within a mutually agreed budget.",
      icon: <FiLock className="w-10 h-10 text-teal-600" />,
    },
    {
      title: "Monthly Retainer",
      desc: "For continuous updates and modifications, our monthly retainer model dedicates our Shopify experts to help meet evolving business needs.",
      icon: <FiCalendar className="w-10 h-10 text-teal-600" />,
    },
    {
      title: "Build Your Own Team",
      desc: "Our Shopify developers become an extension of your in-house team, bringing their Shopify expertise to the table and helping you achieve business success from the get-go.",
      icon: <FiUsers className="w-10 h-10 text-teal-600" />,
    },
  ];

  const services = [
    {
      title: "Shopify Migration",
      desc: "Migrate storefronts and reconfigure eCommerce architecture to Shopify with minimal disruption. From data to apps, we shift your legacy systems while ensuring smooth transition.",
      bullets: [
        "No SEO ranking hit",
        "Keep the customer experience intact",
        "Lower your total cost of ownership",
      ],
      icon: <FiSend className="w-8 h-8 text-teal-600" />,
      bg: "bg-gradient-to-br from-lime-50 to-lime-100",
    },
    {
      title: "Custom Shopify Apps",
      desc: "Build apps customized to your business needs, enhance user experience, and integrate with third-party systems or internal tools.",
      bullets: [
        "Tailored Solutions",
        "Optimized Performance",
        "Seamless Data Integration",
      ],
      icon: <FiGitPullRequest className="w-8 h-8 text-teal-600" />,
      bg: "bg-white",
    },
    {
      title: "Shopify Integration Services",
      desc: "We help you connect your Shopify store with ERP, CRM, accounting tools, and more to streamline your operations and boost efficiency.",
      bullets: [
        "Data Consistency",
        "Improved Customer Experience",
        "Operational Efficiency",
        "Enhanced Analytics",
        "Cost Savings",
      ],
      icon: <FiPower className="w-8 h-8 text-teal-600" />,
      bg: "bg-gradient-to-br from-lime-50 to-lime-100",
    },
    {
      title: "Shopify Design & Development",
      desc: "End-to-end Shopify store design experience and development that delivers a sleek, fast-performing website that’s on brand and built for conversions.",
      bullets: [
        "Enhanced User Experience (UX)",
        "Mobile-optimized",
        "Conversion-focused Design",
        "Security & Compliance",
      ],
      icon: <FiPenTool className="w-8 h-8 text-teal-600" />,
      bg: "bg-white",
    },
    {
      title: "Shopify B2B Solutions",
      desc: "Enable B2B-specific capabilities tailored to wholesale, manufacturing, and enterprise-level clients with custom logic and workflows.",
      bullets: [
        "Streamlined Purchasing",
        "Advanced User Roles",
        "Operational Efficiency",
        "Customer-Specific Pricing",
      ],
      icon: <FiBriefcase className="w-8 h-8 text-teal-600" />,
      bg: "bg-white",
    },
    {
      title: "Headless Shopify",
      desc: "Future-ready architecture with a decoupled frontend/backend, built using modern frameworks like Next.js for blazing-fast storefronts.",
      bullets: [
        "Customizable UX",
        "Faster load times",
        "Increased SEO",
        "Scalability for Complex Catalogs",
      ],
      icon: <FiCode className="w-8 h-8 text-teal-600" />,
      bg: "bg-gradient-to-br from-lime-50 to-lime-100",
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    hover: {
      y: -10,
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -15 },
    visible: { scale: 1, rotate: 0, transition: { duration: 0.6, type: "spring", stiffness: 100 } },
    hover: { scale: 1.3, rotate: 10, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3, yoyo: Infinity },
    },
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      {/* Banner Section */}
      <motion.div
        className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-20 px-8 md:px-16 text-center rounded-3xl shadow-2xl max-w-6xl mx-auto mb-20 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-15 animate-pulse"></div>
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tight relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Choose Your <span className="text-lime-400">Shopify App Development</span> Model
        </motion.h2>

        {/* Display only the last two service models */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {serviceModels.slice(-2).map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/95 backdrop-blur-sm text-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative z-10 border border-teal-200/50"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <motion.div
                className="flex items-center justify-center w-14 h-14 bg-teal-100 rounded-full mb-5 mx-auto"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                {item.icon}
              </motion.div>
              <h4 className="font-bold text-xl md:text-2xl mb-3 text-gray-900 tracking-tight">{item.title}</h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.desc}</p>
              <div className="absolute top-0 right-0 w-20 h-20 bg-lime-200/20 rounded-full -translate-y-10 translate-x-10 blur-xl"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <motion.button
            className="bg-lime-400 text-teal-900 font-semibold px-10 py-4 rounded-full hover:bg-lime-500 transition-all duration-300"
            variants={buttonVariants}
            whileHover="hover"
            aria-label="Request a free quote"
          >
            <Link href='/contact'>
            Request a Free Quote Today
            </Link>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-gray-900 tracking-tight">
          Our <span className="text-teal-600">Shopify Development Services</span>
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg md:text-xl leading-relaxed">
          Whether you need maintenance support for Shopify or have a pressing problem that’s keeping you up at night, connect with our lead Shopify Solution Architect today.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className={clsx(
                "relative p-8 rounded-2xl shadow-lg border border-gray-200/50",
                service.bg,
                "hover:shadow-2xl transition-all duration-300"
              )}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              role="region"
              aria-labelledby={`service-title-${idx}`}
            >
              <div
                className={clsx(
                  "absolute inset-0 border-2 border-transparent rounded-2xl",
                  "hover:border-lime-400/50 hover:transition-all hover:duration-300"
                )}
              ></div>
              <motion.div
                className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full mb-5"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                {service.icon}
              </motion.div>
              <h3
                id={`service-title-${idx}`}
                className="font-bold text-xl md:text-2xl mb-4 text-gray-900 tracking-tight"
              >
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-5 leading-relaxed">
                {service.desc}
              </p>
              <ul className="list-none pl-0 text-sm md:text-base text-gray-600 space-y-3">
                {service.bullets.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 bg-lime-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="absolute top-0 right-0 w-24 h-24 bg-lime-200/20 rounded-full -translate-y-12 translate-x-12 blur-2xl"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <motion.button
            className="bg-teal-600 text-white font-semibold px-10 py-4 rounded-full hover:bg-teal-700 hover:shadow-lg transition-all duration-300"
            variants={buttonVariants}
            whileHover="hover"
            aria-label="Discuss your Shopify needs"
          >
                      <Link href='/contact'>
            
            Discuss Your Need
            </Link>
          </motion.button>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
        .animate-pulse {
          animation: pulse 4s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}