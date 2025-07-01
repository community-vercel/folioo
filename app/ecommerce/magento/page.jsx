'use client';
import BadgeSection from "@/app/components/ecommerece/BadgeSection";
import PixelPerfectSection from "@/app/components/ecommerece/ecommercefaqs";
import TopQuoteBanner from "@/app/components/ecommerece/ecommerceTopQuoteBanner";
import TrustedEcommercecustomer from "@/app/components/ecommerece/ecommerceTrustedcustomer";
import WhyChooseUs from "@/app/components/ecommerece/ecommerceWhyChooseUs";
import Footer from "@/app/components/ecommerece/Footer";
import Header from "@/app/components/ecommerece/Header";
import MagentoProjects from "@/app/components/ecommerece/MagentoProjects";
import MagentoServices from "@/app/components/ecommerece/MagentoServices";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-br from-[#2a4a4b] to-[#446f70] min-h-screen text-white font-sans">
        <Head>
          <title>Nova Bloom eCommerce - Magento Experts</title>
          <meta name="description" content="Nova Bloom delivers top-tier Magento development services with over 10 years of experience, creating customized eCommerce solutions for global businesses." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

                <Header />

        {/* Hero Section */}
        <main className="px-6 md:px-16 py-20 relative">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-xl">
                Magento Development Experts
              </h1>
              <h2 className="text-xl md:text-3xl font-semibold text-amber-300 drop-shadow-md">
                Innovate. Evolve. Thrive. Repeat.
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-white/90 max-w-[600px]">
                With over a decade of expertise, Nova Bloom is a leading Magento development agency. We craft fully customized eCommerce stores with seamless ERP integrations for platforms like NetSuite and Dynamics 365, delivering cost-effective, high-impact solutions.
              </p>
              <div className="flex space-x-4">
                <Link href="/contact">
                <button className="bg-[#446f70] text-white-900 font-semibold text-sm px-8 py-3 rounded-full hover:bg-amber-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Get Free Consultancy
                </button>
                </Link>
                       <Link href='/portfolio'>
             
                <button className="bg-[#446f70] border border-white/80 text-white font-semibold text-sm px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
                </Link>
              </div>
            </div>

            {/* Logo Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {[
                "/logos/shopify-hex-img.webp",
                "https://ecommerce.Nova Bloom.com/wp-content/uploads/2024/01/adobe-commerce-hex-img.webp",
                "https://ecommerce.Nova Bloom.com/wp-content/uploads/2024/01/woocommerce-hex-img.webp",
                "https://ecommerce.Nova Bloom.com/wp-content/uploads/2024/04/shopware-logo-honeycomb-shape-updated.png",
                "https://ecommerce.Nova Bloom.com/wp-content/uploads/2024/01/bigcommerce-hex-img.webp",
                "https://ecommerce.Nova Bloom.com/wp-content/uploads/2024/01/dynamics-365-hex-img.webp",
                "https://ecommerce.Nova Bloom.com/wp-content/uploads/2024/01/salesforce-hex-img.webp",
                "https://ecommerce.Nova Bloom.com/wp-content/uploads/2024/01/netsuite-hex-img.webp",
              ].map((logoUrl, i) => (
                <div
                  key={i}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  <img
                    src={logoUrl}
                    alt={`Partner logo ${i + 1}`}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Chat Box */}
          <div className="fixed bottom-24 right-6 max-w-xs bg-white text-gray-800 rounded-2xl shadow-xl px-5 py-4 text-sm z-50 hidden md:block animate-pulse">
            <p className="font-medium">
              Need help? Let’s discuss your eCommerce goals!
            </p>
            <button className="mt-2 text-blue-600 font-semibold hover:underline">Start Chatting</button>
          </div>

          {/* Chat Bubble */}
          <div className="fixed bottom-6 right-6 bg-amber-400 text-gray-900 rounded-full h-14 w-14 flex items-center justify-center shadow-xl ring-4 ring-white/50 z-50 text-xl cursor-pointer animate-bounce">
            💬
          </div>
        </main>
        {/* Animation Styles */}
        <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
      </div>
      
      <BadgeSection />
      <MagentoServices />
      <MagentoProjects />
      <TrustedEcommercecustomer />
      <WhyChooseUs />
      <TopQuoteBanner />
      <PixelPerfectSection />
<Footer />


    </>
  );
}