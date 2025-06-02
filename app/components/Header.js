"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    {
      name: "App Development",
      href: "/app-development",
      submenu: [
        {
          name: "Industries",
          href: "#",
          subItems: [
            { name: "Automotive", href: "/industries/automotive" },
            { name: "Retail", href: "/industries/retail" },
            { name: "Healthcare", href: "/industries/healthcare" },
            { name: "Logistics", href: "/industries/logistics" },
            { name: "Agriculture", href: "/industries/agriculture" },
            { name: "Education", href: "/industries/education" },
            { name: "Pharmaceuticals & Life Sciences", href: "/industries/pharmaceuticals" },
          ],
        },
        {
          name: "Cross Platform Apps",
          href: "#",
          subItems: [
            { name: "Flutter App Development", href: "/cross-platform/flutter" },
            { name: "React Native App Development", href: "/cross-platform/react-native" },
            { name: "Ionic App Development", href: "/cross-platform/ionic" },
            { name: "Xamarin App Development", href: "/cross-platform/xamarin" },
            { name: "Sencha App Development", href: "/cross-platform/sencha" },
            { name: "Nativescript App Development", href: "/cross-platform/nativescript" },
            { name: "Html5 App Development", href: "/cross-platform/html5" },
            { name: "Elearning Development Services", href: "/elearning-development" },
          ],
        },
        {
          name: "Native Mobile Apps",
          href: "#",
          subItems: [
            { name: "iOS App Development", href: "/native/ios" },
            { name: "Android App Development", href: "/native/android" },
          ],
        },
        {
          name: "Emerging Technologies",
          href: "#",
          subItems: [
            { name: "AR/VR App Development", href: "/emerging-technologies/ar-vr" },
            { name: "IOT App Development", href: "/emerging-technologies/iot" },
            { name: "Wearable App Development", href: "/emerging-technologies/wearable" },
          ],
        },
      ],
    },
    {
      name: "AI",
      href: "/ai",
      submenu: [
        {
          name: "Computer Vision",
          href: "/ai/computer-vision",
          subItems: null,
        },
        {
          name: "AI Drones",
          href: "/ai/drones",
          subItems: null,
        },
        {
          name: "Predictive Analytics",
          href: "/ai/predictive-analytics",
          subItems: null,
        },
        {
          name: "Machine Learning",
          href: "/ai/machine-learning",
          subItems: null,
        },
        {
          name: "Natural Language Processing",
          href: "/ai/nlp",
          subItems: null,
        },
        {
          name: "Industries",
          href: "#",
          subItems: [
            { name: "Healthcare", href: "/ai/industries/healthcare" },
            { name: "Automotive", href: "/ai/industries/automotive" },
            { name: "Security", href: "/ai/industries/security" },
            { name: "Transportation", href: "/ai/industries/transportation" },
            { name: "Fitness", href: "/ai/industries/fitness" },
            { name: "Travel", href: "/ai/industries/travel" },
            { name: "Services", href: "/ai/industries/services" },
          ],
        },
        {
          name: "Computer Vision Details",
          href: "#",
          subItems: [
            { name: "AI Fashion Tagging", href: "/ai/computer-vision/fashion-tagging" },
            { name: "AI Object Detection", href: "/ai/computer-vision/object-detection" },
            { name: "Visual Search", href: "/ai/computer-vision/visual-search" },
            { name: "Image Similarity", href: "/ai/computer-vision/image-similarity" },
            { name: "AI Image Processing", href: "/ai/computer-vision/image-processing" },
            { name: "Image Segmentation", href: "/ai/computer-vision/image-segmentation" },
            { name: "Image Analytics", href: "/ai/computer-vision/image-analytics" },
            { name: "Video Analytics", href: "/ai/computer-vision/video-analytics" },
            { name: "Building Access Control", href: "/ai/computer-vision/building-access" },
          ],
        },
        {
          name: "Pre-built Models",
          href: "#",
          subItems: [
            { name: "Vehicle Detection", href: "/ai/pre-built/vehicle-detection" },
            { name: "Face Recognition", href: "/ai/pre-built/face-recognition" },
            { name: "Person Detection", href: "/ai/pre-built/person-detection" },
            { name: "Food Detection", href: "/ai/pre-built/food-detection" },
            { name: "Apparel Detection", href: "/ai/pre-built/apparel-detection" },
            { name: "Animal Detection", href: "/ai/pre-built/animal-detection" },
          ],
        },
        {
          name: "Predictive Analytics Details",
          href: "#",
          subItems: [
            { name: "ATM Cash Forecasting", href: "/ai/predictive-analytics/atm-forecasting" },
            { name: "Fraud Detection Solutions", href: "/ai/predictive-analytics/fraud-detection" },
          ],
        },
        {
          name: "AI Drones Details",
          href: "#",
          subItems: [
            { name: "Solar Panel Inspection", href: "/ai/drones/solar-panel" },
            { name: "Search & Rescue", href: "/ai/drones/search-rescue" },
            { name: "Wind Turbine Inspection", href: "/ai/drones/wind-turbine" },
            { name: "Terrain Mapping", href: "/ai/drones/terrain-mapping" },
            { name: "Livestock Management", href: "/ai/drones/livestock-management" },
          ],
        },
      ],
    },
    {
      name: "Ecommerce",
      href: "/ecommerce",
      submenu: [
        {
          name: "Magento",
          href: "/ecommerce/magento",
          subItems: [
            { name: "Development", href: "/ecommerce/magento/development" },
            { name: "B2B", href: "/ecommerce/magento/b2b" },
            { name: "Design", href: "/ecommerce/magento/design" },
            { name: "Magento Migration", href: "/ecommerce/magento/migration" },
            { name: "Extension Development", href: "/ecommerce/magento/extension-development" },
            { name: "Integration", href: "/ecommerce/magento/integration" },
            { name: "Customization", href: "/ecommerce/magento/customization" },
            { name: "Support", href: "/ecommerce/magento/support" },
            { name: "Optimization", href: "/ecommerce/magento/optimization" },
            { name: "Magento to Shopify Migration", href: "/ecommerce/magento/magento-to-shopify-migration" },
          ],
        },
        {
          name: "Shopify",
          href: "/ecommerce/shopify",
          subItems: [
            { name: "Design", href: "/ecommerce/shopify/design" },
            { name: "Development", href: "/ecommerce/shopify/development" },
            { name: "Migration", href: "/ecommerce/shopify/migration" },
            { name: "App Development", href: "/ecommerce/shopify/app-development" },
            { name: "Support", href: "/ecommerce/shopify/support" },
            { name: "Integration", href: "/ecommerce/shopify/integration" },
          ],
        },
        {
          name: "BigCommerce",
          href: "/ecommerce/bigcommerce",
          subItems: [
            { name: "Design", href: "/ecommerce/bigcommerce/design" },
            { name: "Development", href: "/ecommerce/bigcommerce/development" },
            { name: "Support", href: "/ecommerce/bigcommerce/support" },
            { name: "Integration", href: "/ecommerce/bigcommerce/integration" },
          ],
        },
        {
          name: "WooCommerce",
          href: "/ecommerce/woocommerce",
          subItems: [
            { name: "Design", href: "/ecommerce/woocommerce/design" },
            { name: "Development", href: "/ecommerce/woocommerce/development" },
            { name: "Migration", href: "/ecommerce/woocommerce/migration" },
          ],
        },
        {
          name: "B2B",
          href: "/ecommerce/b2b",
          subItems: [
            { name: "B2B Web Development", href: "/ecommerce/b2b/web-development" },
            { name: "B2B Store Demo", href: "/ecommerce/b2b/store-demo" },
          ],
        },
        {
          name: "Salesforce Commerce Cloud",
          href: "/ecommerce/salesforce-commerce-cloud",
          subItems: [
            { name: "Commerce Cloud B2C", href: "/ecommerce/salesforce-commerce-cloud/b2c" },
            { name: "Commerce Cloud B2B", href: "/ecommerce/salesforce-commerce-cloud/b2b" },
            { name: "Commerce Cloud Order Management", href: "/ecommerce/salesforce-commerce-cloud/order-management" },
            { name: "Commerce Cloud Implementation", href: "/ecommerce/salesforce-commerce-cloud/implementation" },
          ],
        },
        {
          name: "Industries",
          href: "#",
          subItems: [
            { name: "Health", href: "/ecommerce/industries/health" },
            { name: "Automotive", href: "/ecommerce/industries/automotive" },
            { name: "Fashion", href: "/ecommerce/industries/fashion" },
            { name: "B2B", href: "/ecommerce/industries/b2b" },
          ],
        },
      ],
    },
    {
      name: "AgTech",
      href: "/agtech",
      submenu: [
        {
          name: "Precision Farming",
          href: "/agtech/precision-farming",
          subItems: null,
        },
        {
          name: "AI Drones",
          href: "/agtech/drones",
          subItems: null,
        },
        {
          name: "Predictive Analytics",
          href: "/agtech/predictive-analytics",
          subItems: null,
        },
        {
          name: "Machine Learning",
          href: "/agtech/machine-learning",
          subItems: null,
        },
        {
          name: "Industries",
          href: "#",
          subItems: [
            { name: "Crop Management", href: "/agtech/industries/crop-management" },
            { name: "Livestock Monitoring", href: "/agtech/industries/livestock-monitoring" },
            { name: "Supply Chain", href: "/agtech/industries/supply-chain" },
            { name: "Sustainability", href: "/agtech/industries/sustainability" },
          ],
        },
        {
          name: "AI Drones Details",
          href: "#",
          subItems: [
            { name: "Crop Health Monitoring", href: "/agtech/drones/crop-health" },
            { name: "Soil Analysis", href: "/agtech/drones/soil-analysis" },
            { name: "Livestock Tracking", href: "/agtech/drones/livestock-tracking" },
            { name: "Irrigation Mapping", href: "/agtech/drones/irrigation-mapping" },
          ],
        },
        {
          name: "Predictive Analytics Details",
          href: "#",
          subItems: [
            { name: "Yield Forecasting", href: "/agtech/predictive-analytics/yield-forecasting" },
            { name: "Weather Impact Analysis", href: "/agtech/predictive-analytics/weather-impact" },
          ],
        },
      ],
    },
    {
      name: "Data & Cloud",
      href: "/data-cloud",
      submenu: [
        {
          name: "Cloud Solutions",
          href: "/data-cloud/cloud-solutions",
          subItems: null,
        },
        {
          name: "Data Analytics",
          href: "/data-cloud/data-analytics",
          subItems: null,
        },
        {
          name: "Big Data",
          href: "/data-cloud/big-data",
          subItems: null,
        },
        {
          name: "Industries",
          href: "#",
          subItems: [
            { name: "Finance", href: "/data-cloud/industries/finance" },
            { name: "Healthcare", href: "/data-cloud/industries/healthcare" },
            { name: "Retail", href: "/data-cloud/industries/retail" },
            { name: "Manufacturing", href: "/data-cloud/industries/manufacturing" },
          ],
        },
        {
          name: "Cloud Solutions Details",
          href: "#",
          subItems: [
            { name: "AWS Integration", href: "/data-cloud/cloud-solutions/aws" },
            { name: "Azure Integration", href: "/data-cloud/cloud-solutions/azure" },
            { name: "Google Cloud Integration", href: "/data-cloud/cloud-solutions/google-cloud" },
            { name: "Hybrid Cloud", href: "/data-cloud/cloud-solutions/hybrid-cloud" },
          ],
        },
        {
          name: "Data Analytics Details",
          href: "#",
          subItems: [
            { name: "Real-Time Analytics", href: "/data-cloud/data-analytics/real-time" },
            { name: "Predictive Modeling", href: "/data-cloud/data-analytics/predictive-modeling" },
            { name: "Data Visualization", href: "/data-cloud/data-analytics/data-visualization" },
          ],
        },
      ],
    },
    {
      name: "Digital Health",
      href: "/digital-health",
      submenu: [
        { name: "Telemedicine", href: "/telemedicine" },
        { name: "Health Records", href: "/health-records" },
        { name: "Medical Analytics", href: "/medical-analytics" },
      ],
    },
    {
      name: "Company",
      href: "/company",
      submenu: [
        { name: "About Us", href: "/about" },
        { name: "Team", href: "/team" },
        { name: "Careers", href: "/careers" },
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
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <nav className="bg-white shadow-lg sticky z-50 font-sans">
      {/* Main Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" onClick={closeAllDropdowns} className="flex-shrink-0 flex items-center">
              <Image
                src="/logo.webp"
                alt="YourBrand Logo"
                width={60}
                height={60}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
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
                      className="text-gray-700 hover:bg-[#F1F1F1] rounded-md text-base font-semibold flex items-center transition-colors duration-200"
                    >
                      {item.name}
                      <svg
                        className="ml-2 h-4 w-4 text-gray-700 transition-transform duration-200"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" stroke-width="1" />
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>

                    {/* Full-width Desktop Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="fixed left-40 right-28 bg-[#F1F1F1] shadow-lg border-t border-gray-200 z-40 mt-3 "
                        >
                          <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-4 py-2">
                            {item.name === "Ecommerce" ? (
                              <div className="grid grid-cols-2">
                                {/* Left Column: Buttons */}
                                <div className="flex flex-col space-y-0 mr-72 ">
                                  {item.submenu
                                    .filter((subItem) =>
                                      ["Magento", "Shopify", "BigCommerce", "WooCommerce", "B2B", "Salesforce Commerce Cloud"].includes(subItem.name)
                                    )
                                    .map((subItem) => (
                                      <div key={subItem.name}>
                                        <Link
                                          href={subItem.href}
                                          className="block text-lg font-semibold text-gray-900 py-2 px-4 hover:bg-[#EE2938] hover:text-white rounded-md transition-colors duration-200 "
                                          onClick={closeAllDropdowns}
                                        >
                                          {subItem.name}
                                        </Link>
                                        <hr className="border-gray-300 my-2" />
                                      </div>
                                    ))}
                                </div>
                                {/* Right Side: Industries and Sections */}
                                <div className="grid grid-cols-2 gap-1  ">
                                  {/* Industries Section */}
                                  <div className="flex flex-col space-y-4 ">
                                    {item.submenu
                                      .filter((subItem) => subItem.name === "Industries")
                                      .map((subItem) => (
                                        <div key={subItem.name} className="flex flex-col">
                                          <span className="text-lg font-semibold text-gray-900 mb-2 py-2 px-1 hover:bg-[#EE2938] hover:text-white rounded-md">
                                            {subItem.name}
                                          </span>
                                          <hr className="border-gray-300 mb-4" />
                                          <ul className="grid grid-cols-2 gap-1 list-disc pl-4">
                                            {subItem.subItems?.map((nestedItem) => (
                                              <li
                                                key={nestedItem.name}
                                                className="list-disc text-[12px] font-sm text-black marker:text-red-600"
                                              >
                                                <Link
                                                  href={nestedItem.href}
                                                  className="hover:bg-[#EE2938] hover:text-white rounded-md transition-colors duration-200 px-2 py-1 inline-block w-full"
                                                  onClick={closeAllDropdowns}
                                                >
                                                  {nestedItem.name}
                                                </Link>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                  </div>
                                  {/* Sections: Magento, Shopify, WooCommerce, Salesforce, BigCommerce, B2B */}
                                  <div className="flex flex-col space-y-4">
                                    <div className="grid grid-cols-3 gap-4">
                                      {["Magento", "Shopify", "WooCommerce"].map((sectionName) => {
                                        const subItem = item.submenu.find((sub) => sub.name === sectionName);
                                        return subItem ? (
                                          <div key={subItem.name} className="flex flex-col">
                                            <span className="text-lg font-semibold text-gray-900 mb-2 py-2 px-1 hover:bg-[#EE2938] hover:text-white rounded-md">
                                              {subItem.name}
                                            </span>
                                            <hr className="border-gray-300 mb-4" />
                                            <ul className="list-disc pl-4">
                                              {subItem.subItems?.map((nestedItem) => (
                                                <li
                                                  key={nestedItem.name}
                                                  className="list-disc text-[12px] font-sm text-black marker:text-red-600"
                                                >
                                                  <Link
                                                    href={nestedItem.href}
                                                    className="hover:bg-[#EE2938] hover:text-white rounded-md transition-colors duration-200 px-2 py-1 inline-block w-full"
                                                    onClick={closeAllDropdowns}
                                                  >
                                                    {nestedItem.name}
                                                  </Link>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        ) : null;
                                      })}
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 mt-6">
                                      {["Salesforce Commerce Cloud", "BigCommerce", "B2B"].map((sectionName) => {
                                        const subItem = item.submenu.find((sub) => sub.name === sectionName);
                                        return subItem ? (
                                          <div key={subItem.name} className="flex flex-col">
                                            <span className="text-lg font-semibold text-gray-900 mb-2 py-2 px-1 hover:bg-[#EE2938] hover:text-white rounded-md">
                                              {subItem.name}
                                            </span>
                                            <hr className="border-gray-300 mb-4" />
                                            <ul className="list-disc pl-4">
                                              {subItem.subItems?.map((nestedItem) => (
                                                <li
                                                  key={nestedItem.name}
                                                  className="list-disc text-[12px] font-sm text-black marker:text-red-600"
                                                >
                                                  <Link
                                                    href={nestedItem.href}
                                                    className="hover:bg-[#EE2938] hover:text-white rounded-md transition-colors duration-200 px-2 py-1 inline-block w-full"
                                                    onClick={closeAllDropdowns}
                                                  >
                                                    {nestedItem.name}
                                                  </Link>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        ) : null;
                                      })}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : item.name === "App Development" ? (
                              <div className="flex justify-start">
                                <div className="grid grid-cols-2 w-full">
                                  <div className="flex flex-col">
                                    <span className="text-lg font-semibold text-gray-900 mb-2 py-2 px-1 hover:bg-[#EE2938] hover:text-white rounded-md">
                                      Industries
                                    </span>
                                    <hr className="border-gray-300 mb-4" />
                                    <ul className="grid grid-cols-2 gap-1 list-disc pl-4">
                                      {item.submenu
                                        .find((subItem) => subItem.name === "Industries")
                                        ?.subItems.map((nestedItem) => (
                                          <li
                                            key={nestedItem.name}
                                            className="list-disc text-[12px] font-sm text-black marker:text-red-600"
                                          >
                                            <Link
                                              href={nestedItem.href}
                                              className="hover:bg-[#EE2938] hover:text-white rounded-md transition-colors duration-200 px-2 py-1 inline-block w-full"
                                              onClick={closeAllDropdowns}
                                            >
                                              {nestedItem.name}
                                            </Link>
                                          </li>
                                        ))}
                                    </ul>
                                  </div>
                                  <div className="flex flex-col space-y-6">
                                    {item.submenu
                                      .filter((subItem) => subItem.name !== "Industries")
                                      .map((subItem) => (
                                        <div key={subItem.name} className="flex flex-col">
                                          <span className="text-lg font-semibold text-gray-900 mb-2 py-2 px-1 hover:bg-[#EE2938] hover:text-white rounded-md">
                                            {subItem.name}
                                          </span>
                                          <hr className="border-gray-300 mb-4" />
                                          <ul className="grid grid-cols-2 gap-1 list-disc pl-4">
                                            {subItem.subItems.map((nestedItem) => (
                                              <li
                                                key={nestedItem.name}
                                                className="list-disc text-[12px] font-sm text-black marker:text-red-600"
                                              >
                                                <Link
                                                  href={nestedItem.href}
                                                  className="hover:bg-[#EE2938] hover:text-white rounded-md transition-colors duration-200 px-2 py-1 inline-block w-full"
                                                  onClick={closeAllDropdowns}
                                                >
                                                  {nestedItem.name}
                                                </Link>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                  </div>
                                </div>
                              </div>
                            ) : ["AI", "AgTech", "Data & Cloud"].includes(item.name) ? (
                              <div className="grid grid-cols-3 gap-8">
                                <div className="flex flex-col space-y-0">
                                  {item.submenu
                                    .filter((subItem) =>
                                      ["Computer Vision", "AI Drones", "Predictive Analytics", "Machine Learning", "Natural Language Processing", "Precision Farming", "Cloud Solutions", "Data Analytics", "Big Data"].includes(subItem.name)
                                    )
                                    .map((subItem) => (
                                      <div key={subItem.name}>
                                        <Link
                                          href={subItem.href}
                                          className="block text-lg font-semibold text-gray-900 py-2 px-4 hover:bg-[#EE2938] hover:text-white rounded-md transition-colors duration-200"
                                          onClick={closeAllDropdowns}
                                        >
                                          {subItem.name}
                                        </Link>
                                        <hr className="border-gray-300 my-2" />
                                      </div>
                                    ))}
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-lg font-semibold text-gray-900 mb-2 py-2 px-1 hover:bg-[#EE2938] hover:text-white rounded-md">
                                    Industries
                                  </span>
                                  <hr className="border-gray-300 mb-4" />
                                  <ul className="grid grid-cols-2 gap-1 list-disc pl-4">
                                    {item.submenu
                                      .find((subItem) => subItem.name === "Industries")
                                      ?.subItems.map((nestedItem) => (
                                        <li
                                          key={nestedItem.name}
                                          className="list-disc text-[12px] font-sm text-black marker:text-red-600"
                                        >
                                          <Link
                                            href={nestedItem.href}
                                            className="hover:bg-[#EE2938] hover:text-white rounded-md transition-colors duration-200 px-2 py-1 inline-block w-full"
                                            onClick={closeAllDropdowns}
                                          >
                                            {nestedItem.name}
                                          </Link>
                                        </li>
                                      ))}
                                  </ul>
                                </div>
                                <div className="flex flex-col space-y-6">
                                  {item.submenu
                                    .filter((subItem) => !["Computer Vision", "AI Drones", "Predictive Analytics", "Machine Learning", "Natural Language Processing", "Industries", "Precision Farming", "Cloud Solutions", "Data Analytics", "Big Data"].includes(subItem.name))
                                    .map((subItem) => (
                                      <div key={subItem.name} className="flex flex-col">
                                        <span className="text-lg font-semibold text-gray-900 mb-2 py-2 px-1 hover:bg-[#EE2938] hover:text-white rounded-md">
                                          {subItem.name}
                                        </span>
                                        <hr className="border-gray-300 mb-4" />
                                        <ul className="grid grid-cols-2 gap-1 list-disc pl-4">
                                          {subItem.subItems.map((nestedItem) => (
                                            <li
                                              key={nestedItem.name}
                                              className="list-disc text-[12px] font-sm text-black marker:text-red-600"
                                            >
                                              <Link
                                                href={nestedItem.href}
                                                className="hover:bg-[#EE2938] hover:text-white rounded-md transition-colors duration-200 px-2 py-1 inline-block w-full"
                                                onClick={closeAllDropdowns}
                                              >
                                                {nestedItem.name}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                </div>
                              </div>
                            ) : (
                              <ul className="grid grid-cols-3 gap-8">
                                {item.submenu.map((subItem) => (
                                  <li key={subItem.name} className="flex flex-col">
                                    <span className="text-lg font-semibold text-gray-900 mb-2 py-2 px-1 hover:bg-[#EE2938] hover:text-white rounded-md">
                                      {subItem.name}
                                    </span>
                                    <hr className="border-gray-300 mb-4" />
                                    <ul className="list-disc pl-4">
                                      {subItem.subItems?.map((nestedItem) => (
                                        <li
                                          key={nestedItem.name}
                                          className="list-disc text-[12px] font-sm text-black marker:text-red-600"
                                        >
                                          <Link
                                            href={nestedItem.href}
                                            className="hover:bg-[#EE2938] hover:text-white rounded-md transition-colors duration-200 px-2 py-1 inline-block w-full"
                                            onClick={closeAllDropdowns}
                                          >
                                            {nestedItem.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeAllDropdowns}
                    className="bg-white text-black border border-black hover:bg-black hover:text-white text-base font-semibold transition-colors duration-200 px-4 py-2 rounded-full"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
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
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="w-full text-left text-gray-700 hover:text-blue-600 text-base font-semibold flex justify-between items-center py-3 px-4 rounded-md transition-colors duration-200"
                      >
                        {item.name}
                        <svg
                          className={`h-5 w-5 transform transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" stroke-width="1" />
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
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
                              <div key={subItem.name}>
                                {subItem.subItems?.length > 0 ? (
                                  <>
                                    <span className="block px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-[#EE2938] hover:text-white rounded-md">
                                      {subItem.name}
                                    </span>
                                    <hr className="border-gray-300 mb-2" />
                                    <ul className="list-disc pl-4">
                                      {subItem.subItems.map((nestedItem) => (
                                        <li
                                          key={nestedItem.name}
                                          className="list-disc text-[12px] font-sm text-black marker:text-red-600"
                                        >
                                          <Link
                                            href={nestedItem.href}
                                            className="block px-2 py-1 text-sm font-medium text-black hover:bg-[#EE2938] hover:text-white rounded-md transition-colors duration-200"
                                            onClick={closeAllDropdowns}
                                          >
                                            {nestedItem.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </>
                                ) : (
                                  <Link
                                    href={subItem.href}
                                    className="block px-4 py-2 text-sm font-medium text-black hover:bg-[#EE2938] hover:text-white rounded-md transition-colors duration-200"
                                    onClick={closeAllDropdowns}
                                  >
                                    {subItem.name}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
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