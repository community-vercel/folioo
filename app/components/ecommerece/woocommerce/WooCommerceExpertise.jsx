import Link from 'next/link';
import { FiCheckCircle } from 'react-icons/fi';

const features = [
  "Checkout Customization",
  "Gutenberg development",
  "Implementing Shopify Markets, B2B & wholesale",
  "Custom WooCommerce plugins",
  "WooCommerce Integrations",
  "Speed Optimization",
  "SEO Optimization",
  "Security and Compliance",
];

export default function WooCommerceExpertise() {
  return (
    <section className="bg-gradient-to-r from-[#099f70] to-black text-white py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div>
          <h2 className="text-4xl font-bold leading-snug">
            Our Expertise in <br />
            <span className="text-purple-400">WooCommerce</span> <br />
            <span className="text-purple-400">Website Development</span>
          </h2>
          <Link href='/contact'>
          <button className="mt-8 px-6 py-3 bg-[#446f70] text-white font-semibold rounded-full shadow hover:bg-gray-200 transition">
            Book A Call Now
          </button>
          </Link>
        </div>

        {/* Right Column */}
        <div className="text-gray-300 text-sm md:text-base">
          <p className="mb-6">
            Our WooCommerce website development company houses 50+ eCommerce experts that
            are well versed in full-stack WooCommerce website development. We have expertise in:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <FiCheckCircle className="text-purple-400 w-5 h-5 mt-1" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
