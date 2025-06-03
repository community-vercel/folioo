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
          name: "Custom Software Solution",
          href: "#",
          subItems: [
            { name: "ERP for Agriculture", href: "/agtech/industries/crop-management" },
            { name: "Cattle Management Software", href: "/agtech/industries/livestock-monitoring" },
            { name: "Cattle Record Keeping Software", href: "/agtech/industries/supply-chain" },
            { name: "Feedlot Management Software", href: "/agtech/industries/sustainability" },
            { name: "Poultry Farm Management Software", href: "/agtech/industries/crop-management" },
            { name: "Swine Management Software", href: "/agtech/industries/livestock-monitoring" },
            { name: "Goat Management Software", href: "/agtech/industries/supply-chain" },
            { name: "Sheep Management Software", href: "/agtech/industries/sustainability" },
            { name: "Cattle Counting Software", href: "/agtech/industries/livestock-monitoring" },
            { name: "Sheep Record Keeping Software", href: "/agtech/industries/supply-chain" },
            { name: "Horse Management Software", href: "/agtech/industries/sustainability" },
          ],
        },
        {
          name: "Products",
          href: "#",
          subItems: [
            { name: "AgriERP", href: "/agtech/areas-of-focus/software-as-medical-device" },
            { name: "Cattlytics", href: "/agtech/areas-of-focus/telemedicine-solution" },
          ],
        },
        {
          name: "Ecodocs",
          href: "#",
          subItems: [
            { name: "Crop Management Software", href: "/agtech/services/app-development" },
            { name: "Food Safety Software", href: "/agtech/services/ux-design" },
            { name: "USDA Compliance Software", href: "/agtech/services/integration" },
            { name: "Audit Management Software", href: "/agtech/services/compliance" },
            { name: "Livestock Facility Software", href: "/agtech/services/compliance" },
          ],
        },
        {
          name: "Resource Augmentation",
          href: "#",
          subItems: [
            { name: "Hire AgTech Software Developers", href: "/agtech/services/app-development" },
            { name: "Hire AgTech App Developers", href: "/agtech/services/ux-design" },
          ],
        },
      ],
    },
    {
      name: "Data & Cloud",
      href: "/data-cloud",
      submenu: [
        {
          name: "Cloud Migration",
          href: "#",
          subItems: [
            { name: "Cloud Strategy & Change Management", href: "/data-cloud/cloud-migration/strategy" },
            { name: "Cloud Optimization & Management", href: "/data-cloud/cloud-migration/optimization" },
            { name: "Platform Migration", href: "/data-cloud/cloud-migration/platform" },
            { name: "Database Migration", href: "/data-cloud/cloud-migration/database" },
            { name: "App Migration", href: "/data-cloud/cloud-migration/app" },
          ],
        },
        {
          name: "Managed Cloud",
          href: "#",
          subItems: [
            { name: "Cloud Monitoring & Reporting", href: "/data-cloud/managed-cloud/monitoring" },
            { name: "Cloud Deployment", href: "/data-cloud/managed-cloud/deployment" },
            { name: "Cloud Infrastructure Setup", href: "/data-cloud/managed-cloud/infrastructure" },
            { name: "Cloud Migration", href: "/data-cloud/managed-cloud/migration" },
            { name: "Network & Storage", href: "/data-cloud/managed-cloud/network" },
            { name: "Cloud Security", href: "/data-cloud/managed-cloud/security" },
            { name: "Uninterrupted Business Operations", href: "/data-cloud/managed-cloud/operations" },
            { name: "Disaster Recovery & Backup", href: "/data-cloud/managed-cloud/recovery" },
          ],
        },
        {
          name: "Data Engineering Services",
          href: "#",
          subItems: [
            { name: "Data Architecture", href: "/data-cloud/data-engineering/architecture" },
            { name: "Data Lake Implementation", href: "/data-cloud/data-engineering/lake" },
            { name: "Data Pipelines", href: "/data-cloud/data-engineering/pipelines" },
            { name: "Data Integration", href: "/data-cloud/data-engineering/integration" },
            { name: "Data Analytics", href: "/data-cloud/data-engineering/analytics" },
          ],
        },
        {
          name: "DevOps Consulting",
          href: "#",
          subItems: [
            { name: "ML Engineering", href: "/data-cloud/dataops/ml" },
            { name: "DevOps Consulting", href: "/data-cloud/dataops/devops" },
            { name: "Continuous Integration & Continuous Delivery (CI/CD)", href: "/data-cloud/dataops/cicd" },
            { name: "Infrastructure Management & Monitoring", href: "/data-cloud/dataops/infrastructure" },
            { name: "Infrastructure as Code (IaC)", href: "/data-cloud/dataops/iac" },
            { name: "Site Reliability Engineering (SRE)", href: "/data-cloud/dataops/sre" },
            { name: "Testing Automation", href: "/data-cloud/dataops/testing" },
          ],
        },
        {
          name: "Kubernetes Consulting",
          href: "#",
          subItems: [
            { name: "Kubernetes Cloud Migration", href: "/data-cloud/kubernetes/migration" },
            { name: "Kubernetes Architecture Design", href: "/data-cloud/kubernete" },
            { name: "K8s Consultation", href: "/data-cloud/kubernetes" },
            { name: "Kubernetes Configuration", href: "/data-cloud/kubernetes/configuration" },
            { name: "Cost Optimization", href: "/data-cloud/kubernetes/cost" },
            { name: "Maintenance", href: "/data-cloud/kubernetes/maintenance" },
          ],
        },
        {
          name: "Data Strategy Services",
          href: "#",
          subItems: [
            { name: "Data Strategy Assessment", href: "/data-cloud/data-strategy/assessment" },
            {
              name: "Data Strategy Optimization and Execution",
              href: "/data-cloud/data-strategy/optimization",
            },
            { name: "Gen AI Readiness and Strategy", href: "/data-cloud/data-strategy/genai" },
            { name: "Data Ecosystem Set-up", href: "/data-cloud/data-strategy/ecosystem" },
            { name: "Data Governance", href: "/data-cloud/data-strategy/governance" },
            { name: "Advisory Services", href: "/data-cloud/data-strategy/advisory" },
          ],
        },
        {
          name: "Data Analytics Consulting Services",
          href: "#",
          subItems: [
            {
              name: "Business Intelligence (BI) Solutions",
              href: "/data-cloud/data-analytics/bi",
            },
            { name: "Big Data Analytics", href: "/data-cloud/data-analytics/big-data" },
            { name: "Data Visualization", href: "/data-cloud/data-analytics/visualization" },
            { name: "Text and Sentiment Analysis", href: "/data-cloud/data-analytics/sentiment" },
            { name: "Predictive Analysis", href: "/data-cloud/data-analytics/predictive" },
          ],
        },
        {
          name: "Snowflake Consulting",
          href: "#",
          subItems: [
            { name: "Migration", href: "/data-cloud/snowflake/migration" },
            { name: "Implementation", href: "/data-cloud/snowflake/implementation" },
            { name: "Modernization", href: "/data-cloud/snowflake/modernization" },
            { name: "Warehousing", href: "/data-cloud/snowflake/warehousing" },
            { name: "Architecture", href: "/data-cloud/snowflake/architecture" },
          ],
        },
        {
          name: "Databricks Consulting",
          href: "#",
          subItems: [
            { name: "Data Architecture", href: "/data-cloud/databricks/architecture" },
            { name: "Data Migration", href: "/data-cloud/databricks/migration" },
            { name: "Cloud Readiness Assessment", href: "/data-cloud/databricks/readiness" },
            { name: "Databricks Health Check", href: "/data-cloud/databricks/health" },
          ],
        },
        {
          name: "BigQuery Consulting",
          href: "#",
          subItems: [
            { name: "BigQuery Setup", href: "/data-cloud/bigquery/setup"},
            { name: "BigQuery Data Modeling", href: "/data-cloud/bigquery/modeling" },
            { name: "Data Visualization", href: "/data-cloud/bigquery/visualization" },
            { name: "BigQuery Optimization", href: "/data-cloud/bigquery/optimization" },
            { name: "Migration", href: "/data-cloud/bigquery/migration" },
            { name: "Warehousing", href: "/data-cloud/bigquery/warehousing" },
          ],
        },
      ],
    },
    {
      name: "Digital Health",
      href: "/digital-health",
      submenu: [
        {
          name: "Areas of Focus",
          href: "#",
          subItems: [
            {
              name: "Software as Medical Device",
              href: "/digital-health/areas-of-focus/software-as-medical-device",
            },
            {
              name: "Telemedicine Solution",
              href: "/digital-health/areas-of-focus/telemedicine-solution",
            },
            {
              name: "Practice Management",
              href: "/digital-health/areas-of-focus/practice-management",
            },
            {
              name: "Healthcare Intelligence & Analytics",
              href: "/digital-health/areas-of-focus/healthcare-intelligence-analytics",
            },
          ],
        },
        {
          name: "Services",
          href: "#",
          subItems: [
            { name: "App Development", href: "/digital-health/services/app-development" },
            { name: "UX Design", href: "/digital-health/services/ux-design" },
            { name: "Integration", href: "/digital-health/services/integration" },
            { name: "Compliance", href: "/digital-health/services/compliance" },
          ],
        },
        {
          name: "Solutions",
          href: "#",
          subItems: [
            { name: "ClinicLive", href: "/digital-health/solutions/clinic-live"},
            
            { name: "Clinically", href: "/digital-health/solutions/clinicically" },
          
            { name: "EcoDocs", href: "/digital-health/solutions/eco-docs" },
          ],
        },
      ],
    },
    {
      name: "Company",
      href: "/company",
      submenu: [
        { name: "Blog", href: "/blog" },
        { name: "eLearning", href: "/elearning" },
        { name: "Careers", href: "/careers" },
        { name: "About Us", href: "/about" },
        { name: "Clients", href: "/clients" },
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
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <nav className="bg-white shadow-lg sticky z-50 font-sans">
      {/* Main Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-18">
        <div className="flex justify-between items-center h-22">
          {/* Logo */}
       <div className="flex items-center">
  <Link href="/" onClick={closeAllDropdowns} className="flex items-center">
    <Image
      src="/logo.webp"
      alt="YourBrand Logo"
      width={120}
      height={180}
      className="w-auto h-14 object-contain"
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
                      className="text-gray-700 hover:bg-[#F1F1F1] rounded-md text-base font-semibold flex items-center transition-colors duration-200">
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
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 0 010-1.414z"
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
                          className="fixed left-40 right-28 bg-[#F1F1F1] shadow-lg border-t border-gray-200 z-40 mt-3"
                        >
                          <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-4 py-2">
                            {item.name === "Ecommerce" ? (
                              <div className="flex flex-row gap-4">
                                {/* Left Column: Buttons (Vertical) */}
                                <div className="flex flex-col space-y-2 w-1/4">
                                  {item.submenu
                                    .filter((subItem) =>
                                      ["Magento", "Shopify", "BigCommerce", "WooCommerce", "B2B", "Salesforce Commerce Cloud"].includes(subItem.name)
                                    )
                                    .map((subItem) => (
                                      <div key={subItem.name}>
                                        <Link
                                          href={subItem.href}
                                          className="block text-[16px] font-semibold text-gray-900 py-2 px-4 hover:bg-[#558A8B] hover:text-white rounded-md transition-colors duration-200"
                                          onClick={closeAllDropdowns}
                                        >
                                          {subItem.name}
                                        </Link>
                                        <hr className="border-gray-300 my-2" />
                                      </div>
                                    ))}
                                </div>
                                {/* Right Side: Horizontal Sections */}
                                <div className="grid grid-cols-4 gap-1 w-3/4">
                                  {/* Industries Section */}
                                  <div className="flex flex-col space-y-2">
                                    {item.submenu
                                      .filter((subItem) => subItem.name === "Industries")
                                      .map((subItem) => (
                                        <div key={subItem.name} className="flex flex-col">
                                          <span className="text-[16px] font-semibold text-gray-900 mb-2 py-2 px-1 hover:bg-[#558A8B] hover:text-white rounded-md">
                                            {subItem.name}
                                          </span>
                                          <hr className="border-gray-300 mb-4" />
                                          <ul className="list-disc pl-4">
                                            {subItem.subItems?.map((nestedItem) => (
                                              <li
                                                key={nestedItem.name}
                                                className="list-disc text-[12px] font-medium text-black marker:text-[#558A8B] mb-1"
                                              >
                                                <Link
                                                  href={nestedItem.href}
                                                  className="hover:bg-[#558A8B] hover:text-white rounded-md transition-colors duration-200 px-2 py-1 inline-block w-full"
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
                                  {/* Magento Section */}
                                  <div className="flex flex-col space-y-2">
                                    {item.submenu
                                      .filter((subItem) => subItem.name === "Magento")
                                      .map((subItem) => (
                                        <div key={subItem.name} className="flex flex-col">
                                          <span className="text-[16px] font-semibold text-gray-900 mb-2 py-2 px-1 hover:bg-[#558A8B] hover:text-white rounded-md">
                                            {subItem.name}
                                          </span>
                                          <hr className="border-gray-300 mb-4" />
                                          <ul className="list-disc pl-4">
                                            {subItem.subItems?.map((nestedItem) => (
                                              <li
                                                key={nestedItem.name}
                                                className="list-disc text-[12px] font-medium text-black marker:text-[#558A8B] mb-1"
                                              >
                                                <Link
                                                  href={nestedItem.href}
                                                  className="hover:bg-[#558A8B] hover:text-white rounded-md transition-colors duration-200 px-2 py-1 inline-block w-full"
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
                                  {/* Shopify Section */}
                                  <div className="flex flex-col space-y-2">
                                    {item.submenu
                                      .filter((subItem) => subItem.name === "Shopify")
                                      .map((subItem) => (
                                        <div key={subItem.name} className="flex flex-col">
                                          <span className="text-[16px] font-semibold text-gray-900 mb-2 py-2 px-1 hover:bg-[#558A8B] hover:text-white rounded-md">
                                            {subItem.name}
                                          </span>
                                          <hr className="border-gray-300 mb-4" />
                                          <ul className="list-disc pl-4">
                                            {subItem.subItems?.map((nestedItem) => (
                                              <li
                                                key={nestedItem.name}
                                                className="list-disc text-[12px] font-medium text-black marker:text-[#558A8B] mb-1"
                                              >
                                                <Link
                                                  href={nestedItem.href}
                                                  className="hover:bg-[#558A8B] hover:text-white rounded-md transition-colors duration-200 px-2 py-1 inline-block w-full"
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
                                  {/* WooCommerce Section */}
                                  <div className="flex flex-col space-y-2">
                                    {item.submenu
                                      .filter((subItem) => subItem.name === "WooCommerce")
                                      .map((subItem) => (
                                        <div key={subItem.name} className="flex flex-col">
                                          <span className="text-[16px] font-semibold text-gray-900 mb-2 py-2 px-1 hover:bg-[#558A8B] hover:text-white rounded-md">
                                            {subItem.name}
                                          </span>
                                          <hr className="border-gray-300 mb-4" />
                                          <ul className="list-disc pl-4">
                                            {subItem.subItems?.map((nestedItem) => (
                                              <li
                                                key={nestedItem.name}
                                                className="list-disc text-[12px] font-medium text-black marker:text-[#558A8B] mb-1"
                                              >
                                                <Link
                                                  href={nestedItem.href}
                                                  className="hover:bg-[#558A8B] hover:text-white rounded-md transition-colors duration-200 px-2 py-1 inline-block w-full"
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
                                  {/* Salesforce Commerce Cloud Section */}
                                  <div className="flex flex-col space-y-2">
                                    {item.submenu
                                      .filter((subItem) => subItem.name === "Salesforce Commerce Cloud")
                                      .map((subItem) => (
                                        <div key={subItem.name} className="flex flex-col">
                                          <span className="text-[16px] font-semibold text-gray-900 mb-2 py-2 px-1 hover:bg-[#558A8B] hover:text-white rounded-md">
                                            {subItem.name}
                                          </span>
                                          <hr className="border-gray-300 mb-4" />
                                          <ul className="list-disc pl-4">
                                            {subItem.subItems?.map((nestedItem) => (
                                              <li
                                                key={nestedItem.name}
                                                className="list-disc text-[12px] font-medium text-black marker:text-[#558A8B] mb-1"
                                              >
                                                <Link
                                                  href={nestedItem.href}
                                                  className="hover:bg-[#558A8B] hover:text-white rounded-md transition-colors duration-200 px-2 py-1 inline-block w-full"
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
                                  {/* BigCommerce Section */}
                                  <div className="flex flex-col space-y-2">
                                    {item.submenu
                                      .filter((subItem) => subItem.name === "BigCommerce")
                                      .map((subItem) => (
                                        <div key={subItem.name} className="flex flex-col">
                                          <span className="text-[16px] font-semibold text-gray-900 mb-2 py-2 px-1 hover:bg-[#558A8B] hover:text-white rounded-md">
                                            {subItem.name}
                                          </span>
                                          <hr className="border-gray-300 mb-4" />
                                          <ul className="list-disc pl-4">
                                            {subItem.subItems?.map((nestedItem) => (
                                              <li
                                                key={nestedItem.name}
                                                className="list-disc text-[12px] font-medium text-black marker:text-[#558A8B] mb-1"
                                              >
                                                <Link
                                                  href={nestedItem.href}
                                                  className="hover:bg-[#558A8B] hover:text-white rounded-md transition-colors duration-200 px-2 py-1 inline-block w-full"
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
                                  {/* B2B Section */}
                                  <div className="flex flex-col space-y-2">
                                    {item.submenu
                                      .filter((subItem) => subItem.name === "B2B")
                                      .map((subItem) => (
                                        <div key={subItem.name} className="flex flex-col">
                                          <span className="text-[16px] font-semibold text-gray-900 mb-2 py-2 px-1 hover:bg-[#558A8B] hover:text-white rounded-md">
                                            {subItem.name}
                                          </span>
                                          <hr className="border-gray-300 mb-4" />
                                          <ul className="list-disc pl-4">
                                            {subItem.subItems?.map((nestedItem) => (
                                              <li
                                                key={nestedItem.name}
                                                className="list-disc text-[12px] font-medium text-black marker:text-[#558A8B] mb-1"
                                              >
                                                <Link
                                                  href={nestedItem.href}
                                                  className="hover:bg-[#558A8B] hover:text-white rounded-md transition-colors duration-200 px-2 py-1 inline-block w-full"
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
                            ) : item.name === "App Development" ? (
                              <div className="flex justify-start">
                                <div className="grid grid-cols-2 w-full">
                                  <div className="flex flex-col">
                                    <span className="text-[16px] font-semibold text-gray-900 mb-2 py-2 px-1 hover:bg-[#558A8B] hover:text-white rounded-md">
                                      Industries
                                    </span>
                                    <hr className="border-gray-300 mb-4" />
                                    <ul className="grid grid-cols-2 gap-1 list-disc pl-4">
                                      {item.submenu
                                        .find((subItem) => subItem.name === "Industries")
                                        ?.subItems.map((nestedItem) => (
                                          <li
                                            key={nestedItem.name}
                                            className="list-disc text-[12px] font-medium text-black marker:text-[#558A8B]"
                                          >
                                            <Link
                                              href={nestedItem.href}
                                              className="hover:bg-[#558A8B] hover:text-white rounded-md transition-colors duration-200 px-2 py-1 inline-block w-full"
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
                                          <span className="text-[16px] font-semibold text-gray-900 mb-2 py-2 px-1 hover:bg-[#558A8B] hover:text-white rounded-md">
                                            {subItem.name}
                                          </span>
                                          <hr className="border-gray-300 mb-4" />
                                          <ul className="grid grid-cols-2 gap-1 list-disc pl-4">
                                            {subItem.subItems.map((nestedItem) => (
                                              <li
                                                key={nestedItem.name}
                                                className="list-disc text-[12px] font-medium text-black marker:text-[#558A8B]"
                                              >
                                                <Link
                                                  href={nestedItem.href}
                                                  className="hover:bg-[#558A8B] hover:text-white rounded-md transition-colors duration-200 px-2 py-1 inline-block w-full"
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
                            ) : item.name === "AgTech" ? (
                              <div className="flex flex-row gap-4">
                                {/* Horizontal Sections */}
                                <div className="grid grid-cols-3 gap-4 w-full">
                                  {item.submenu.map((subItem) => (
                                    <div key={subItem.name} className="flex flex-col">
                                      <span className="text-[16px] font-semibold text-gray-900 mb-2 py-2 px-1 hover:bg-[#558A8B] hover:text-white rounded-md">
                                        {subItem.name}
                                      </span>
                                      <hr className="border-gray-300 mb-4" />
                                      <ul className="grid grid-cols-2 gap-1 list-disc pl-4">
                                        {subItem.subItems?.map((nestedItem) => (
                                          <li
                                            key={nestedItem.name}
                                            className="list-disc text-[12px] font-medium text-black marker:text-[#558A8B] mb-1"
                                          >
                                            <Link
                                              href={nestedItem.href}
                                              className="hover:bg-[#558A8B] hover:text-white rounded-md transition-colors duration-200 px-2 py-1 inline-block w-full"
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
                            ) : item.name === "Data & Cloud" ? (
                              <div className="grid grid-cols-3 gap-[1px]">
                                {item.submenu.map((subItem) => (
                                  <div key={subItem.name} className="flex flex-col">
                                    <span className="text-[16px] font-semibold text-gray-900 mb-2 py-2 px-1 hover:bg-[#558A8B] hover:text-white rounded-md">
                                      {subItem.name}
                                    </span>
                                    <hr className="border-gray-300 mb-4" />
                                    <ul className="grid grid-cols-2 gap-1 list-disc pl-4">
                                      {subItem.subItems?.map((nestedItem) => (
                                        <li
                                          key={nestedItem.name}
                                          className="list-disc text-[12px] font-medium text-black marker:text-[#558A8B] mb-1"
                                        >
                                          <Link
                                            href={nestedItem.href}
                                            className="hover:bg-[#558A8B] hover:text-white rounded-md transition-colors duration-200 px-2 py-1 inline-block w-full"
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
                            ) : item.name === "Company" ? (
                              <div className="flex flex-row gap-8">
                                {/* Left Side: Vertical Buttons */}
                                <div className="flex flex-col space-y-2 w-1/4">
                                  {item.submenu
                                    .filter((subItem) => ["Blog", "eLearning", "Careers"].includes(subItem.name))
                                    .map((subItem) => (
                                      <div key={subItem.name}>
                                        <Link
                                          href={subItem.href}
                                          className="block text-[16px] font-semibold text-gray-900 py-2 px-4 hover:bg-[#558A8B] hover:text-white rounded-md transition-colors duration-200"
                                          onClick={closeAllDropdowns}
                                        >
                                          {subItem.name}
                                        </Link>
                                        <hr className="border-gray-300 my-2" />
                                      </div>
                                    ))}
                                </div>
                                {/* Right Side: Horizontal Buttons */}
                                <div className="flex flex-row space-x-10 gap-50 w-3/4">
                                  {item.submenu
                                    .filter((subItem) => ["About Us", "Clients", "Portfolio"].includes(subItem.name))
                                    .map((subItem) => (
                                      <div key={subItem.name} className="flex flex-col items-end">
                                        <Link
                                          href={subItem.href}
                                          className="block text-[16px] font-semibold text-gray-900 py-2 px-4 hover:bg-[#558A8B] hover:text-white rounded-md transition-colors duration-200"
                                          onClick={closeAllDropdowns}
                                        >
                                          {subItem.name}
                                        </Link>
                                        <hr className="border-gray-300 w-full my-2" />
                                      </div>
                                    ))}
                                </div>
                              </div>
                            ) : ["AI", "Digital Health"].includes(item.name) ? (
                              <div className="grid grid-cols-3 gap-8">
                                <div className="flex flex-col space-y-0">
                                  {item.submenu
                                    .filter((subItem) =>
                                      ["Computer Vision", "AI Drones", "Predictive Analytics", "Machine Learning", "Natural Language Processing", "Precision Farming", "Areas of Focus"].includes(subItem.name)
                                    )
                                    .map((subItem) => (
                                      <div key={subItem.name}>
                                        {subItem.subItems ? (
                                          <div className="flex flex-col">
                                            <span className="text-[16px] font-semibold text-gray-900 mb-2 py-2 px-1 hover:bg-[#558A8B] hover:text-white rounded-md">
                                              {subItem.name}
                                            </span>
                                            <hr className="border-gray-300 mb-4" />
                                            <ul className="grid grid-cols-2 gap-1 list-disc pl-4">
                                              {subItem.subItems.map((nestedItem) => (
                                                <li
                                                  key={nestedItem.name}
                                                  className="list-disc text-[12px] font-medium text-black marker:text-[#558A8B]"
                                                >
                                                  <Link
                                                    href={nestedItem.href}
                                                    className="hover:bg-[#558A8B] hover:text-white rounded-md transition-colors duration-200 px-2 py-1 inline-block w-full"
                                                    onClick={closeAllDropdowns}
                                                  >
                                                    {nestedItem.name}
                                                  </Link>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        ) : (
                                          <>
                                            <Link
                                              href={subItem.href}
                                              className="block text-[16px] font-semibold text-gray-900 py-2 px-4 hover:bg-[#558A8B] hover:text-white rounded-md transition-colors duration-200"
                                              onClick={closeAllDropdowns}
                                            >
                                              {subItem.name}
                                            </Link>
                                            <hr className="border-gray-300 my-2" />
                                          </>
                                        )}
                                      </div>
                                    ))}
                                </div>
                                <div className="flex flex-col">
                                  {item.submenu
                                    .filter((subItem) => ["Industries", "Services"].includes(subItem.name))
                                    .map((subItem) => (
                                      <div key={subItem.name} className="flex flex-col mb-6">
                                        <span className="text-[16px] font-semibold text-gray-900 mb-2 py-2 px-1 hover:bg-[#558A8B] hover:text-white rounded-md">
                                          {subItem.name}
                                        </span>
                                        <hr className="border-gray-300 mb-4" />
                                        <ul className="grid grid-cols-2 gap-1 list-disc pl-4">
                                          {subItem.subItems?.map((nestedItem) => (
                                            <li
                                              key={nestedItem.name}
                                              className="list-disc text-[12px] font-medium text-black marker:text-[#558A8B]"
                                            >
                                              <Link
                                                href={nestedItem.href}
                                                className="hover:bg-[#558A8B] hover:text-white rounded-md transition-colors duration-200 px-2 py-1 inline-block w-full"
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
                                <div className="flex flex-col space-y-6">
                                  {item.submenu
                                    .filter((subItem) => !["Computer Vision", "AI Drones", "Predictive Analytics", "Machine Learning", "Natural Language Processing", "Industries", "Precision Farming", "Areas of Focus", "Services"].includes(subItem.name))
                                    .map((subItem) => (
                                      <div key={subItem.name} className="flex flex-col">
                                        <span className="text-[16px] font-semibold text-gray-900 mb-2 py-2 px-1 hover:bg-[#558A8B] hover:text-white rounded-md">
                                          {subItem.name}
                                        </span>
                                        <hr className="border-gray-300 mb-4" />
                                        <ul className="grid grid-cols-2 gap-1 list-disc pl-4">
                                          {subItem.subItems.map((nestedItem) => (
                                            <li
                                              key={nestedItem.name}
                                              className="list-disc text-[12px] font-medium text-black marker:text-[#558A8B]"
                                            >
                                              <Link
                                                href={nestedItem.href}
                                                className="hover:bg-[#558A8B] hover:text-white rounded-md transition-colors duration-200 px-2 py-1 inline-block w-full"
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
                                    <span className="text-[16px] font-semibold text-gray-900 mb-2 py-2 px-1 hover:bg-[#558A8B] hover:text-white rounded-md">
                                      {subItem.name}
                                    </span>
                                    <hr className="border-gray-300 mb-4" />
                                    <ul className="list-disc pl-4">
                                      {subItem.subItems?.map((nestedItem) => (
                                        <li
                                          key={nestedItem.name}
                                          className="list-disc text-[12px] font-medium text-black marker:text-[#558A8B]"
                                        >
                                          <Link
                                            href={nestedItem.href}
                                            className="hover:bg-[#558A8B] hover:text-white rounded-md transition-colors duration-200 px-2 py-1 inline-block w-full"
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
                    className="bg-white text-black border border-black hover:bg-[#558A8B] hover:text-white text-base font-semibold transition-colors duration-200 px-4 py-2 rounded-full"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {isMobileMenuOpen && (
              <Link
                href="/contact"
                className="bg-white text-black border border-black hover:bg-[#558A8B] hover:text-white text-sm font-semibold transition-colors duration-200 px-3 py-1.5 rounded-md"
                onClick={closeAllDropdowns}
              >
                Contact Us
              </Link>
            )}
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
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-0">
              {navItems
                .filter((item) => item.name !== "Contact Us")
                .map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="w-full text-left text-gray-700 hover:text-blue-600 text-base font-semibold flex justify-between items-center py-2 px-4 rounded-md transition-colors duration-200"
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
                              className="pl-6 space-y-0 mt-1"
                            >
                              {item.submenu.map((subItem) => (
                                <div key={subItem.name}>
                                  {subItem.subItems?.length > 0 ? (
                                    <>
                                      <span className="block px-4 py-1 text-[16px] font-semibold text-gray-900 hover:bg-gray-50 rounded">
                                        {subItem.name}
                                      </span>
                                      <hr className="border-gray-300 mb-2" />
                                      <ul className="list-disc pl-4">
                                        {subItem.subItems.map((nestedItem) => (
                                          <li
                                            key={nestedItem.name}
                                            className="list-disc text-[12px] font-medium text-black marker:text-[#558A8B]"
                                          >
                                            <Link
                                              href={nestedItem.href}
                                              className="block px-2 py-1 text-[12px] font-medium text-black hover:bg-[#558A8B] hover:text-white rounded transition-colors duration-200"
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
                                      className="block px-4 py-1 text-[16px] font-semibold text-gray-900 hover:bg-gray-50 rounded transition-colors duration-200"
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
                        className="block px-4 py-2 text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
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