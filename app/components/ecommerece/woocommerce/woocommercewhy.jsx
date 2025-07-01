import Link from 'next/link';
import { useState } from 'react';
import { FiCheckCircle, FiStar, FiUsers,  FiAward, FiRotateCcw, FiCpu, FiTarget, FiShield, FiUserPlus, FiTrendingUp } from 'react-icons/fi';
import { FiLayers, FiGlobe, FiCode, FiUsers as FiCommunity, FiGlobe as FiMulti, FiLink } from 'react-icons/fi';

export default function ECommerceWhy() {
  const [activeSlide, setActiveSlide] = useState(0);

  const reasons = [
    {
      icon: <FiStar className="text-[#446f70] text-3xl mb-3" aria-hidden="true" />,
      title: "Unmatched Expertise in Scaling",
      desc: "From startups to global enterprises, we craft e-commerce solutions that scale seamlessly, supporting your growth with robust, high-performance stores.",
    },
    {
      icon: <FiUsers className="text-[#446f70] text-3xl mb-3" aria-hidden="true" />,
      title: "Your Strategic Growth Partner",
      desc: "We go beyond coding to become your trusted partner, delivering tailored strategies and innovative solutions to drive your business forward.",
    },
    {
      icon: <FiCheckCircle className="text-[#446f70] text-3xl mb-3" aria-hidden="true" />,
      title: "Commitment to Transparency",
      desc: "With open communication and honest collaboration, we keep you informed at every step, ensuring trust and clarity throughout your project.",
    },
    {
      icon: <FiRotateCcw className="text-[#446f70] text-3xl mb-3" aria-hidden="true" />,
      title: "Innovative Technology Solutions",
      desc: "Leverage cutting-edge tools like headless commerce and AI-driven personalization to stay ahead in the competitive e-commerce landscape.",
    },
    {
      icon: <FiAward className="text-[#446f70] text-3xl mb-3" aria-hidden="true" />,
      title: "Proven Track Record",
      desc: "Our portfolio of successful projects and satisfied clients showcases our ability to deliver results that exceed expectations.",
    },
    {
    icon: <FiTrendingUp className="text-[#446f70] text-3xl mb-3" aria-hidden="true" />,
    title: "Growth-Oriented Approach",
    desc: "We focus on scalable strategies that drive consistent business growth and long-term value.",
  },
  {
    icon: <FiUserPlus className="text-[#446f70] text-3xl mb-3" aria-hidden="true" />,
    title: "Client-Centric Delivery",
    desc: "We build solutions around your goals, ensuring alignment with your unique business needs.",
  },
  {
    icon: <FiShield className="text-[#446f70] text-3xl mb-3" aria-hidden="true" />,
    title: "Secure & Compliant",
    desc: "Data privacy and platform security are at the core of every implementation we deliver.",
  },
  {
    icon: <FiTarget className="text-[#446f70] text-3xl mb-3" aria-hidden="true" />,
    title: "Results-Driven Execution",
    desc: "Our team is laser-focused on measurable impact and performance-based outcomes.",
  },
  {
    icon: <FiCpu className="text-[#446f70] text-3xl mb-3" aria-hidden="true" />,
    title: "Tech Excellence",
    desc: "We leverage best-in-class tools and technologies to deliver modern, efficient solutions.",
  },
  ];

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <main className=" text-gray-800">
      {/* Section 1 - Choose Nova Bloom with Dot Slider */}
      <section className="py-20 text-center bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8">
          Why Choose Nova Bloom for Your E-Commerce Success?
        </h2>
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {reasons.map((item, i) => (
                <div
                  key={i}
                  className="min-w-full md:min-w-[50%] lg:min-w-[33.33%] px-2"
                  role="region"
                  aria-label={item.title}
                >
                  <div className="bg-white text-[#446f70] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                    {item.icon}
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 mb-2 gap-2">
              {reasons.map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSlide === i ? 'bg-[#446f70] scale-125' : 'bg-gray-300'
                  }`}
                  onClick={() => handleDotClick(i)}
                  aria-label={`Go to slide ${ + 1}`}
                />
              ))}
            </div>
            </div>
         </div>
      </section>

      {/* Section 2 - E-Commerce Advantages */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Power Your Business with E-Commerce Innovation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Our advanced e-commerce solutions deliver unmatched flexibility, scalability, and performance, enabling businesses to thrive in a competitive digital marketplace.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: <FiLayers className="text-[#446f70] text-3xl mb-3" aria-hidden="true" />,
                title: "Fully Customizable Stores",
                desc: "Create a unique brand identity with fully customizable designs and features tailored to your business needs.",
              },
              {
                icon: <FiGlobe className="text-[#446f70] text-3xl mb-3" aria-hidden="true" />,
                title: "Scalable Architecture",
                desc: "Handle millions of visitors and products with optimized infrastructure designed for growth and reliability.",
              },
              {
                icon: <FiCode className="text-[#446f70] text-3xl mb-3" aria-hidden="true" />,
                title: "Rich Plugin Ecosystem",
                desc: "Enhance your store with thousands of plugins for analytics, marketing, and seamless integrations.",
              },
              {
                icon: <FiCommunity className="text-[#446f70] text-3xl mb-3" aria-hidden="true" />,
                title: "Global Developer Support",
                desc: "Benefit from a worldwide community of developers for continuous updates and innovative solutions.",
              },
              {
                icon: <FiMulti className="text-[#446f70] text-3xl mb-3" aria-hidden="true" />,
                title: "Global Market Reach",
                desc: "Expand globally with multilingual and multi-currency support for a seamless customer experience.",
              },
              {
                icon: <FiLink className="text-[#446f70] text-3xl mb-3" aria-hidden="true" />,
                title: "Integrated CMS Solutions",
                desc: "Unify your content and commerce with seamless CMS integration for efficient management.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                role="region"
                aria-label={item.title}
              >
                {item.icon}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
                      <Link href='/contact'>

          <button
            className="mt-12 bg-gradient-to-r from-[#446f70] to-[#446f70] text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:from-gray-700 hover:to-purple-700 hover:scale-105 transition-all duration-300"
            aria-label="Get Started with Our Experts"
          >
            Get Started Now <FiCheckCircle />
          </button>
          </Link>
        </div>
      </section>
    </main>

  );
}