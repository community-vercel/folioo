import Image from 'next/image';
import { FiShoppingCart, FiCode, FiZap, FiTruck, FiUsers, FiGlobe, FiArrowRight, FiStar } from 'react-icons/fi';
import { FiAward, FiRepeat, FiShield } from 'react-icons/fi';

export default function ECommerceSolutions() {
  return (
    <section className="px-4 py-20 max-w-7xl mx-auto text-center bg-gradient-to-b from-white to-gray-50">
      {/* --- Hero Section --- */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Transform Your Business with Next-Gen E-Commerce
      </h2>
      <p className="text-lg text-gray-800 max-w-3xl mx-auto mb-12">
        Discover how our expert team delivers tailored e-commerce solutions that drive growth, enhance user experience, and scale seamlessly. From custom stores to headless commerce, we’ve got you covered.
      </p>

      {/* --- Case Study Section --- */}
      <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center justify-center gap-8 mb-16 transform hover:scale-[1.01] transition-transform duration-300">
        <div className="relative w-full md:w-1/2">
          <Image
            src="/salesforce/erksonline-cs-img.webp" // Replace with actual image path
            alt="E-Commerce Case Study"
            width={500}
            height={350}
            className="rounded-lg object-cover"
            priority
          />
          <div className="absolute top-2 left-2 bg-[#446f70] text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center">
            <FiStar className="mr-1" /> Success Story
          </div>
        </div>
        <div className="text-left max-w-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Scaling a Global Marketplace with Headless Commerce</h3>
          <p className="text-sm text-gray-600 mb-4">
            We empowered a leading retailer with a headless WooCommerce solution, integrating Next.js for blazing-fast performance and seamless multi-channel sync.
          </p>
          <div className="mb-4 text-gray-700">
            <strong className="font-semibold flex items-center">
              <FiGlobe className="mr-2 text-[#446f70]" /> Key Features
            </strong>
            <ul className="list-disc list-inside text-sm space-y-1 mt-2">
              <li>Headless storefront with GraphQL APIs</li>
              <li>Real-time inventory sync across platforms</li>
              <li>Custom checkout with 3D secure payments</li>
            </ul>
          </div>
          <button
            className="bg-gradient-to-r from-[#446f70] to-[#446f70] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
            aria-label="View Case Study"
          >
            Explore Case Study <FiArrowRight />
          </button>
        </div>
      </div>

      {/* --- Services Grid --- */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Our E-Commerce Development Expertise</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        From startups to enterprises, we craft e-commerce experiences that convert, scale, and delight. Our services are designed to meet your unique business needs with precision and innovation.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
{
[
  {
    icon: <FiShoppingCart className="text-[#446f70] text-3xl mb-3" />,
    title: "Custom Store Development",
    desc: "Build a unique e-commerce store with bespoke designs and responsive layouts.",
    items: [
      "Tailored UI/UX Design",
      "Mobile-First Development",
      "Custom Features & Widgets",
    ],
  },
  {
    icon: <FiCode className="text-[#446f70] text-3xl mb-3" />,
    title: "Plugin & API Development",
    desc: "Extend functionality with custom plugins or integrate with any third-party system.",
    items: [
      "Custom Plugin Development",
      "API Integrations (CRM, ERP, POS)",
      "Plugin Optimization",
    ],
  },
  {
    icon: <FiZap className="text-[#446f70] text-3xl mb-3" />,
    title: "Performance Optimization",
    desc: "Boost site speed and scalability with advanced optimization techniques.",
    items: [
      "Core Web Vitals Enhancements",
      "Caching & CDN Integration",
      "Database Optimization",
    ],
  },
  {
    icon: <FiTruck className="text-[#446f70] text-3xl mb-3" />,
    title: "Checkout & Cart Enhancements",
    desc: "Streamline purchases with optimized cart flows and one-click checkouts.",
    items: [
      "Custom Checkout Pages",
      "Abandoned Cart Solutions",
      "Payment Gateway Integration",
    ],
  },
  {
    icon: <FiUsers className="text-[#446f70] text-3xl mb-3" />,
    title: "B2B & B2C Solutions",
    desc: "Create tailored solutions for B2B and B2C markets with advanced features.",
    items: [
      "Dynamic Pricing & Catalogs",
      "Bulk Order Systems",
      "Customer Portal Development",
    ],
  },
  {
    icon: <FiGlobe className="text-[#446f70] text-3xl mb-3" />,
    title: "Headless & Multi-Channel",
    desc: "Go headless or sync your store across multiple platforms for maximum reach.",
    items: [
      "Headless Commerce with Next.js",
      "Multi-Channel Integration",
      "Cross-Platform Sync",
    ],
  },
  {
    icon: <FiAward className="text-[#446f70] text-3xl mb-3" />,
    title: "AI-Driven Personalization",
    desc: "Enhance customer engagement with AI-powered product recommendations and tailored experiences.",
    items: [
      "Personalized Product Suggestions",
      "Dynamic Content Customization",
      "AI Chatbot Integration",
    ],
  },
  {
    icon: <FiRepeat className="text-[#446f70] text-3xl mb-3" />,
    title: "Subscription & Recurring Revenue",
    desc: "Launch subscription-based models with seamless billing and customer management.",
    items: [
      "Subscription Plan Setup",
      "Recurring Payment Integration",
      "Customer Retention Tools",
    ],
  },
  {
    icon: <FiShield className="text-[#446f70] text-3xl mb-3" />,
    title: "Security & Compliance",
    desc: "Protect your store and customers with robust security measures and compliance solutions.",
    items: [
      "GDPR & CCPA Compliance",
      "SSL & PCI-DSS Setup",
      "Fraud Detection Systems",
    ],
  },
].map((card, i) => (
          <div
            key={i}
            className="bg-white border border-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            role="region"
            aria-label={card.title}
          >
            {card.icon}
            <h3 className="font-bold text-xl text-gray-900 mb-2">{card.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{card.desc}</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {card.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* --- CTA Section --- */}
      <div className="mt-16">
        <button
          className="bg-gradient-to-r from-[#446f70] to-[#446f70] text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 mx-auto hover:from-indigo-700 hover:to-purple-700 hover:scale-105 transition-all duration-300"
          aria-label="Start Your E-Commerce Journey"
        >
          Start Your E-Commerce Journey <FiArrowRight />
        </button>
      </div>
    </section>
  );
}