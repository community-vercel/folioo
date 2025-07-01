"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    {
      name: "App Development",
      href: "/apps",
      submenu: [
        { name: "Cross Platform Apps", href: "/apps/cross-platform" },
        { name: "Native Mobile Apps", href: "/apps/native-platform" },
        { name: "Emerging Technologies", href: "/apps/emerging" },
      ],
    },
    {
      name: "AI",
      href: "/ai",
      submenu: [
        { name: "Computer Vision", href: "/ai/computer-vision" },
        // { name: "AI Drones", href: "#" },
        // { name: "Predictive Analytics", href: "#" },
        { name: "Machine Learning", href: "/ai/machine-learning" },
        { name: "Natural Language Processing", href: "/ai/nlp" },
      ],
    },
    {
      name: "Ecommerce",
      href: "/ecommerce",
      submenu: [
        { name: "Magento", href: "/ecommerce/magento" },
        { name: "Shopify", href: "/ecommerce/shopify" },
        { name: "BigCommerce", href: "/ecommerce/bigcommerce" },
        { name: "WooCommerce", href: "/ecommerce/woocommerce" },
        { name: "Salesforce Commerce Cloud", href: "/ecommerce/salesforce" },
      ],
    },
    {
      name: "Data & Cloud",
      href: "/datacloud",
      submenu: [
        { name: "Cloud Migration", href: "/datacloud/cloud-migration" },
        // { name: "Managed Cloud", href: "#" },
        // { name: "Data Engineering Services", href: "#" },
        { name: "DevOps Consulting", href: "/datacloud/ops" },
        // { name: "Kubernetes Consulting", href: "#" },
        // { name: "Data Strategy Services", href: "#" },
        // { name: "Data Analytics Consulting Services", href: "#" },
        // { name: "Snowflake Consulting", href: "#" },
        // { name: "Databricks Consulting", href: "#" },
        // { name: "BigQuery Consulting", href: "#" },
      ],
    },
    {
      name: "Digital Health",
      href: "/digital-health",
      submenu: [
        { name: "Medical Billing", href: "/digital-health/medicalbilling" },
        { name: "EHR", href: "/digital-health/ehr" },
        { name: "CDS", href: "/digital-health/cds" },
      ],
    },
    {
      name: "Company",
      href: "#",
      submenu: [
        
        { name: "Blog", href: "/blog" },
        { name: "eLearning", href: "/elearning" },
        // { name: "Careers", href: "/careers" },
        { name: "About Us", href: "/about" },
        // { name: "Clients", href: "/clients" },
        { name: "Portfolio", href: "/portfolio" },
      ],
    },
    {
      name: "Contact Us",
      href: "/contact",
      submenu: null,
    },
  ];

  const closeAllDropdowns = useCallback(() => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" onClick={closeAllDropdowns}>
              <Image
                src="/logo.webp"
                alt="YourBrand Logo"
                width={120}
                height={40}
                className="w-auto h-10 object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => item.submenu && setActiveDropdown(null)}
              >
                {item.submenu ? (
                  <>
                    <Link
                      href={item.href}
                      className="text-gray-800 hover:text-teal-600 text-sm font-medium flex items-center px-3 py-2 rounded-md transition-colors duration-200"
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === item.name}
                    >
                      {item.name}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>

                    {/* Desktop Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute left-0 w-64 bg-white shadow-lg rounded-lg mt-2 z-50 border border-gray-100"
                        >
                          <div className="py-2">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md transition-colors duration-200"
                                onClick={closeAllDropdowns}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeAllDropdowns}
                    className={`${
                      item.name === "Contact Us"
                        ? "bg-teal-600 text-white hover:bg-teal-700 px-4 py-2 rounded-full"
                        : "text-gray-800 hover:text-teal-600 px-3 py-2 rounded-md"
                    } text-sm font-medium transition-colors duration-200`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-teal-600 text-white hover:bg-teal-700 text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200"
              onClick={closeAllDropdowns}
            >
              Contact Us
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-md text-gray-600 hover:text-teal-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="w-full text-left text-gray-800 hover:text-teal-600 text-sm font-medium flex justify-between items-center py-3 px-4 rounded-md transition-colors duration-200"
                        aria-expanded={activeDropdown === item.name}
                        aria-haspopup="true"
                      >
                        {item.name}
                        <svg
                          className={`h-5 w-5 transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>

                      {/* Mobile Dropdown */}
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-6 space-y-2 mt-2"
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md transition-colors duration-200"
                                onClick={closeAllDropdowns}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-sm font-medium text-gray-800 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-colors duration-200"
                      onClick={closeAllDropdowns}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;