import { motion } from 'framer-motion';
import Image from 'next/image';

export default function EcommerceScaleSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const metricVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
    hover: { scale: 1.05 },
  };

  const partnerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <>
    <div className="bg-gradient-to-b from-[#446f70] to-[#1c2526] text-white py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug">
            Empowering Brands to Scale with Tailored eCommerce Solutions
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Our experts craft high-performance digital commerce platforms that boost sales and simplify operations.
          </p>
          <p className="text-gray-300 text-base">We help you:</p>
          <ul className="list-disc list-inside text-gray-300 text-base space-y-2">
            <li>Increase revenue up to 40% through optimized systems.</li>
            <li>Integrate tools seamlessly to reduce overhead.</li>
            <li>Enhance UX for greater customer satisfaction.</li>
          </ul>
          <p className="text-gray-300 text-base">
            Join the growing list of brands scaling with confidence.
          </p>
        </motion.div>

        {/* Right Metrics */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {metrics.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={metricVariants}
              className="bg-[#2a2f3b] p-8 rounded-lg w-[240px] text-center shadow-md transition-all"
            >
              <div className="text-2xl font-semibold text-blue-400 mb-1">{item.value}</div>
              <div className="text-xs text-gray-300">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* salesforce Section */}
     
    </div>
     <div className="bg-gradient-to-r from-gray-100 to-[#446f70] text-gray-900 mt-0 py-14 px-0 w-full">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl font-bold mb-4"
          >
            Trusted by Industry Leaders
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-10"
          >
            Our ecosystem includes integrations with platforms like Shopify, Magento, and Salesforce for a seamless experience.
          </motion.p>

          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                animate="visible"
                variants={partnerVariants}
                className="relative w-28 h-10 sm:w-36 sm:h-12"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      </>
  );
}

const metrics = [
  { value: '60+', label: 'eCommerce Specialists' },
  { value: '8', label: 'Shopify Apps Built' },
  { value: '6', label: 'BigCommerce Apps' },
  { value: '20+', label: 'ERP Integrations' },
  { value: '500+', label: 'Stores Launched & Scaled' },
];

const partners = [
  { name: 'Oracle NetSuite', logo: '/salesforce/aws-partner-logo.webp' },
  { name: 'Salesforce Commerce Cloud', logo: '/salesforce/image-2.webp' },
  { name: 'Adobe Commerce (Magento)', logo: '/salesforce/image.webp' },
  { name: 'Shopify Plus', logo: '/salesforce/image-3.webp' },
  { name: 'BigCommerce', logo: '/salesforce/image-5.webp' },
];
