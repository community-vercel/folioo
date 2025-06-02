'use client';

import { useState } from 'react';

const tabs = [
  'MAGENTO',
  'SHOPIFY',
  'BIGCOMMERCE',
  'WOOCOMMERCE',
  'B2B',
  'SALESFORCE COMMERCE CLOUD',
];

const content = {
  MAGENTO: {
    industries: ['Health', 'Fashion', 'Automotive', 'B2B'],
    services: [
      'Development',
      'Design',
      'Extension Development',
      'Customization',
      'Optimization',
      'B2B',
      'Magento Migration',
      'Integration',
      'Support',
      'Magento to Shopify Migration',
    ],
  },
  SHOPIFY: {
    services: [
      'Design',
      'Development',
      'Migration',
      'App Development',
      'Support',
      'Integration',
    ],
  },
  BIGCOMMERCE: {
    services: ['Design', 'Development', 'Support', 'Integration'],
  },
  WOOCOMMERCE: {
    services: ['Design', 'Development', 'Migration'],
  },
  B2B: {
    services: ['B2B Web Development', 'B2B Store Demo'],
  },
  'SALESFORCE COMMERCE CLOUD': {
    services: [
      'Commerce Cloud B2C',
      'Commerce Cloud Order Management',
      'Commerce Cloud B2B',
      'Commerce Cloud Implementation',
    ],
  },
};

export default function MegaMenuEcommerce() {
  const [activeTab, setActiveTab] = useState('MAGENTO');
  const tabData = content[activeTab];

  return (
    // Outer container for dropdown — full width with centered content.
    <div className="absolute top-full left-0 w-full bg-[#f5f5f5] shadow-md border-t border-gray-300 z-50">
      <div className="max-w-[1200px] mx-auto flex">
        {/* Left Tabs */}
        <div className="w-[250px] bg-white border-r border-gray-300">
          {tabs.map((tab) => (
            <div
              key={tab}
              onMouseEnter={() => setActiveTab(tab)}
              className={`px-5 py-3 text-sm font-bold uppercase cursor-pointer ${
                tab === activeTab
                  ? 'bg-white text-black'
                  : 'bg-[#f5f5f5] hover:bg-gray-200 text-gray-800'
              }`}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Right Content */}
<div className="bg-[#f5f5f5] p-6 text-[14px] text-gray-800 min-w-[950px] overflow-auto">
          
          <div className="overflow-x-auto">

          <div className="grid grid-cols-5 gap-8">
            {/* INDUSTRIES */}
            <div className="col-span-1 min-w-[180px]">
              <h3 className="font-bold mb-2 uppercase text-[14px]">Industries</h3>
              <ul className="space-y-1">
                {["Health", "Fashion", "Automotive", "B2B"].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-1">
                    <span className="text-red-600 text-xl leading-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* MAGENTO */}
            <div className="col-span-1 min-w-[180px]">
              <h3 className="font-bold mb-2 uppercase text-[14px]">Magento</h3>
              <ul className="space-y-1">
                {[
                  "Development",
                  "Design",
                  "Extension Development",
                  "Customization",
                  "Optimization",
                  "B2B",
                  "Magento Migration",
                  "Integration",
                  "Support",
                  "Magento to Shopify Migration",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-1">
                    <span className="text-red-600 text-xl leading-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SHOPIFY */}
            <div className="col-span-1 min-w-[180px]">
              <h3 className="font-bold mb-2 uppercase text-[14px]">Shopify</h3>
              <ul className="space-y-1">
                {[
                  "Design",
                  "Development",
                  "Migration",
                  "App Development",
                  "Support",
                  "Integration",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-1">
                    <span className="text-red-600 text-xl leading-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WOOCOMMERCE + B2B */}
            <div className="col-span-1 min-w-[180px]">
              <h3 className="font-bold mb-2 uppercase text-[14px]">WooCommerce</h3>
              <ul className="space-y-1 mb-4">
                {["Design", "Development", "Migration"].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-1">
                    <span className="text-red-600 text-xl leading-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className="font-bold mb-2 uppercase text-[14px]">B2B</h3>
              <ul className="space-y-1">
                {["B2B Web Development", "B2B Store Demo"].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-1">
                    <span className="text-red-600 text-xl leading-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SALESFORCE + BIGCOMMERCE */}
            <div className="col-span-1 min-w-[180px]">
              <h3 className="font-bold mb-2 uppercase text-[14px]">Salesforce Commerce Cloud</h3>
              <ul className="space-y-1 mb-4">
                {[
                  "Commerce Cloud B2C",
                  "Commerce Cloud Order Management",
                  "Commerce Cloud B2B",
                  "Commerce Cloud Implementation",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-1">
                    <span className="text-red-600 text-xl leading-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className="font-bold mb-2 uppercase text-[14px]">BigCommerce</h3>
              <ul className="space-y-1">
                {["Design", "Development", "Support", "Integration"].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-1">
                    <span className="text-red-600 text-xl leading-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}