'use client';

import Image from 'next/image';
import { FiChevronDown, FiPhone } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-2 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.webp"
            alt="Nova Logo"
            width={100}
            height={30}
            priority
          />
        </div>

        {/* Nav Links */}
        <nav className="hidden lg:flex gap-6 text-sm font-medium text-gray-700">
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-blue-600">
              Services <FiChevronDown size={16} />
            </button>
            {/* Dropdown (if needed) */}
          </div>
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-blue-600">
              Product Expertise <FiChevronDown size={16} />
            </button>
          </div>
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-blue-600">
              Industry Expertise <FiChevronDown size={16} />
            </button>
          </div>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Success Stories</a>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center text-sm text-blue-600 font-medium">
            <FiPhone className="w-4 h-4 mr-1" /> 1 (408) 365-4638
          </div>
          <button className="bg-[#446f70] hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-full">
            SCHEDULE A CALL
          </button>
        </div>
      </div>
    </header>
  );
}
