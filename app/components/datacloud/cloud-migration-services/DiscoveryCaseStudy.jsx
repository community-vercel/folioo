
"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function DiscoveryCaseStudy() {
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, x: 5, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-gradient-to-b from-[#f8fbff] to-white py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Discovery Session Section */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <motion.div
            className="relative group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            <Image
              src="/app/demo-session-image.webp" // Replace with actual image path
              alt="Cloud Discovery Session"
              width={600}
              height={400}
              className="rounded-xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </motion.div>

          <motion.div
            className="text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <h5 className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-3">
              Free Consultation
            </h5>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              30-Minute <br />
              <span className="bg-clip-text text-gray bg-gradient-to-r from-blue-600 to-indigo-600">
                Cloud Strategy Session
              </span>
            </h2>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              Simplify your cloud journey with a complimentary consultation. Our architects will assess your needs and outline a tailored roadmap to accelerate your success.
            </p>
            <ul className="list-disc pl-6 text-base text-gray-600 space-y-3">
              <li>Engage with a Cloud Architect to define your goals</li>
              <li>Receive a customized cloud solution review</li>
              <li>Get a detailed strategy and cost proposal</li>
            </ul>
            <motion.a
              href="/contact"
              className="mt-6 inline-flex items-center bg-[#446f70] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              variants={buttonVariants}
              whileHover="hover"
              aria-label="Schedule a free cloud strategy session"
            >
              Book Your Free Session
              <FiArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Case Study Section */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <h5 className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-3">
              Success Story
            </h5>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              Transforming Your <br />
              <span className="bg-clip-text text-gray bg-gradient-to-r from-blue-600 to-indigo-600">
                Business with Cloud
              </span>
            </h2>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              Our cloud managed services deliver scalability, reliability, and 24/7 support, empowering you to focus on growth and innovation.
            </p>

            <div className="mb-6 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">E-Commerce Platform</h3>
              <p className="text-sm font-semibold text-gray-800 mb-1">Client</p>
              <p className="text-sm text-gray-600 mb-3">Global Retail Brand</p>
              <p className="text-sm font-semibold text-gray-800 mb-1">Challenge</p>
              <p className="text-sm text-gray-600 mb-3">
                A high-traffic e-commerce site faced slow load times, frequent downtimes, and scaling issues due to a legacy single-server setup.
              </p>
              <p className="text-sm font-semibold text-gray-800 mb-1">Solution</p>
              <p className="text-sm text-gray-600">
                Migrated to a multi-cloud architecture with auto-scaling, achieving 99.9% uptime and 50% faster load times.
              </p>
            </div>

            <motion.a
              href="/portfolio"
              className="inline-flex items-center bg-[#446f70] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              variants={buttonVariants}
              whileHover="hover"
              aria-label="Read more cloud success stories"
            >
              Explore More Success Stories
              <FiArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>

          <motion.div
            className="relative group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            <Image
              src="/app/magento-main-image.png" // Replace with actual image path
              alt="Cloud Success Showcase"
              width={600}
              height={400}
              className="rounded-xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </motion.div>
        </div>

        </div>
        </div>
  )}