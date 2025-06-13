'use client';

import { useState } from 'react';
import { FiPhone, FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/ecommerce' },
    { name: 'Magento', href: '/ecommerce/magento' },
    { name: 'Shopify', href: '/ecommerce/shopify' },
    { name: 'BigCommerce', href: '/ecommerce/bigcommerce' },
    { name: 'WooCommerce', href: '/ecommerce/woocommerce' },
    { name: 'Salesforce', href: '/ecommerce/salesforce' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm transition-shadow duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo.webp" // Replace with your actual logo path
            alt="Company Logo"
            width={66}
            height={50}
            className="transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map(({ name, href }, i) => (
            <Link
              key={i}
              href={href}
              className="relative font-medium text-gray-900 text-base hover:text-[#099f70] transition-colors duration-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-[#099f70] hover:after:w-full after:transition-all after:duration-300"
              aria-label={name}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* CTA and Phone */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center gap-2 text-gray-900">
            <FiPhone className="text-[#099f70] w-5 h-5" />
            <a
              href="tel:+1234567890" // Replace with your actual phone number
              className="text-sm font-medium hover:text-[#099f70] transition-colors duration-200"
              aria-label="Call us at +1 (234) 567-890"
            >
              +1 (234) 567-890
            </a>
          </div>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-[#099f70] to-[#446f70] text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md hover:from-[#077f50] hover:to-[#2a6b54] hover:scale-105 transition-all duration-300 flex items-center gap-2"
            aria-label="Get Started"
          >
            Get Started <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-900 hover:text-[#099f70] transition-colors duration-200 focus:outline-none"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'lg:hidden fixed top-0 left-0 w-full h-full bg-white z-40 transition-transform duration-300',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="px-6 py-4 flex items-center justify-between border-b border-gray-200">
          <Link href="/" onClick={toggleMenu}>
            <Image
              src="/logo.webp" // Replace with your actual logo path
              alt="Company Logo"
              width={100}
              height={32}
              className="object-contain"
            />
          </Link>
          <button onClick={toggleMenu} aria-label="Close menu">
            <FiX className="w-6 h-6 text-gray-900" />
          </button>
        </div>
        <nav className="flex flex-col items-start px-6 py-8 space-y-4">
          {menuItems.map(({ name, href }, i) => (
            <Link
              key={i}
              href={href}
              onClick={toggleMenu}
              className="text-lg font-medium text-gray-900 hover:text-[#099f70] transition-colors duration-200 py-2"
              aria-label={name}
            >
              {name}
            </Link>
          ))}
          <div className="flex items-center gap-2 pt-4">
            <FiPhone className="text-[#099f70] w-5 h-5" />
            <a
              href="tel:+1234567890" // Replace with your actual phone number
              className="text-base font-medium text-gray-900 hover:text-[#099f70] transition-colors duration-200"
              aria-label="Call us at +1 (234) 567-890"
            >
              +1 (234) 567-890
            </a>
          </div>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="mt-6 bg-gradient-to-r from-[#099f70] to-[#446f70] text-white text-base font-semibold px-6 py-3 rounded-full shadow-md hover:from-[#077f50] hover:to-[#2a6b54] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 w-full"
            aria-label="Get Started"
          >
            Get Started <FiArrowRight className="w-5 h-5" />
          </Link>
        </nav>
      </div>
    </header>
  );
}