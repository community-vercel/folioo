'use client';

import { useState } from 'react';
// import { ChevronDown } from 'lucide-react';

const industries = [
  "Automotive",
  "Healthcare",
  "Agriculture",
  "Pharmaceuticals & Life Sciences",
  "Retail",
  "Logistics",
  "Education"
];

const crossPlatformApps = [
  "Flutter App Development",
  "Ionic App Development",
  "Sencha App Development",
  "Html5 App Development",
  "React Native App Development",
  "Xamarin App Development",
  "Nativescript App Development",
  "Elearning Development Services"
];

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center space-x-1 text-sm font-semibold"
      >
        <span>App Development</span>
        {/* <ChevronDown className="w-4 h-4" /> */}
      </button>

      {isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute top-full left-0 w-screen max-w-6xl bg-gray-100 text-sm shadow-lg p-6 z-50"
        >
          <div className="flex justify-between border-t border-gray-300 pt-4">
            <div className="w-1/2 pr-8">
              <h3 className="text-gray-800 font-bold mb-2">INDUSTRIES</h3>
              <ul className="grid grid-cols-2 gap-2 text-gray-700">
                {industries.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-1">
                    <span className="text-red-600 text-xl leading-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/2 pl-8 border-l border-gray-300">
              <h3 className="text-gray-800 font-bold mb-2">CROSS PLATFORM APPS</h3>
              <ul className="grid grid-cols-2 gap-2 text-gray-700">
                {crossPlatformApps.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-1">
                    <span className="text-red-600 text-xl leading-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}