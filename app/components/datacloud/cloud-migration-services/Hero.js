
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

const CloudMigrationSection = () => {
  // Animation variants for text content
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Button hover animation
  const buttonVariants = {
    hover: { scale: 1.05, x: 5, transition: { duration: 0.3 } },
  };

  return (
    <section className="relative bg-gradient-to-b from-[#f0f4ff] to-white py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Text Content */}
          <motion.div
            className="flex-1 z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <p className="text-sm font-semibold text-blue-500 tracking-wider uppercase mb-3">
              Cloud Migration Services
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
              Seamless, Secure & <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Cost-Effective Cloud Solutions
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
              Navigate the cloud with confidence. Our experts simplify migration with tailored strategies, automation, and
              Generative AI, ensuring agility, security, and data sovereignty at every step.
            </p>
            <motion.a
              href="#consultation" // Replace with your actual link
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              variants={buttonVariants}
              whileHover="hover"
            >
                        <Link href='/contact'>
              
              Get Your Free Consultation
              <FiArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex-1 z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            <div className="relative group">
              <Image
                src="/app/cloud-migration-banner.webp" // Ensure your image path is correct
                alt="Cloud Migration Illustration"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-300"
                priority
              />
              {/* Image Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CloudMigrationSection;

