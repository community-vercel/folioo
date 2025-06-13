import Image from 'next/image';
import { BsFillRocketFill } from 'react-icons/bs';
import { FiPackage, FiTool, FiCreditCard, FiUserCheck, FiMonitor, FiArrowRight, FiStar, FiTarget, FiLock, FiRefreshCw } from 'react-icons/fi';

export default function BigCommerceSolutions() {
  return (
    <section className="relative px-4 py-24 max-w-7xl mx-auto text-center bg-gradient-to-b from-white to-[#e6f4f1]">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0C200 100 400 0 600 100S800 200 1000 100 1200 0 1400 100V600H0V0Z"
            fill="url(#waveGradient)"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1400" y2="600">
              <stop offset="0%" style={{ stopColor: '#099f70', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#446f70', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Services Grid */}
      <div className="relative">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Transform Your <span className="text-[#099f70]">BigCommerce Success</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          As certified BigCommerce partners, we empower your store with cutting-edge solutions, from custom designs to seamless integrations, ensuring growth and performance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {[
            {
              icon: <FiPackage className="text-[#099f70] text-3xl mb-3" />,
              title: 'Custom BigCommerce Stores',
              desc: 'Build stunning, high-converting stores with unique designs and seamless functionality.',
              items: [
                'Custom Theme Development',
                'Responsive Storefronts',
                'Advanced Feature Integration',
              ],
            },
            {
              icon: <FiTool className="text-[#099f70] text-3xl mb-3" />,
              title: 'BigCommerce App & API Solutions',
              desc: 'Extend your store with custom apps and integrations for CRM, ERP, or payment systems.',
              items: [
                'Custom App Development',
                'API-Driven Integrations',
                'Stencil CLI Customization',
              ],
            },
            {
              icon: <BsFillRocketFill className="text-[#099f70] text-3xl mb-3" />,
              title: 'Performance & Scalability',
              desc: 'Optimize your store for speed and growth with BigCommerce’s robust infrastructure.',
              items: [
                'Page Speed Optimization',
                'Scalable Architecture',
                'BigCommerce CDN Utilization',
              ],
            },
            {
              icon: <FiCreditCard className="text-[#099f70] text-3xl mb-3" />,
              title: 'Checkout Optimization',
              desc: 'Boost conversions with streamlined checkouts and secure payment flows.',
              items: [
                'Custom Checkout Solutions',
                'Abandoned Cart Recovery',
                'Multi-Payment Gateways',
              ],
            },
            {
              icon: <FiUserCheck className="text-[#099f70] text-3xl mb-3" />,
              title: 'B2B & B2C Expertise',
              desc: 'Tailor your store for B2B or B2C with advanced pricing and customer tools.',
              items: [
                'B2B Quote Management',
                'Dynamic Pricing Rules',
                'Customer Group Segmentation',
              ],
            },
            {
              icon: <FiMonitor className="text-[#099f70] text-3xl mb-3" />,
              title: 'Headless & Multi-Channel',
              desc: 'Leverage BigCommerce’s headless capabilities for multi-platform selling.',
              items: [
                'Headless Commerce Setup',
                'Marketplace Integrations',
                'POS & Social Sync',
              ],
            },
            {
              icon: <FiTarget className="text-[#099f70] text-3xl mb-3" />,
              title: 'AI-Powered Commerce',
              desc: 'Drive engagement with personalized experiences powered by AI tools.',
              items: [
                'Product Recommendations',
                'AI Search Enhancements',
                'Customer Behavior Analytics',
              ],
            },
            {
              icon: <FiRefreshCw className="text-[#099f70] text-3xl mb-3" />,
              title: 'Subscriptions & Loyalty',
              desc: 'Build recurring revenue with subscription models and loyalty programs.',
              items: [
                'Subscription Management',
                'Loyalty Program Integration',
                'Recurring Billing Setup',
              ],
            },
            {
              icon: <FiLock className="text-[#099f70] text-3xl mb-3" />,
              title: 'Security & Compliance',
              desc: 'Ensure your store is secure and compliant with industry standards.',
              items: [
                'PCI-DSS Compliance',
                'Secure Checkout Systems',
                'Data Protection Measures',
              ],
            },
          ].map((card, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
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

        {/* CTA Section */}
        <div className="mt-16">
          <button
            className="bg-gradient-to-r from-[#099f70] to-[#446f70] text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 mx-auto hover:from-[#077f50] hover:to-[#2a6b54] hover:scale-105 transition-all duration-300"
            aria-label="Elevate Your BigCommerce Store"
          >
            Elevate Your BigCommerce Store <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}