
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiCloud,
  FiCode,
  FiGitPullRequest,
  FiLayers,
  FiSettings,
  FiShield,
} from 'react-icons/fi';
import Link from 'next/link';

const migrationSteps = [
  {
    title: 'Infrastructure Analysis',
    desc: 'Evaluate your current setup for cloud readiness.',
    icon: FiSettings,
  },
  {
    title: 'Architecture Design',
    desc: 'Craft a scalable cloud architecture for growth.',
    icon: FiLayers,
  },
  {
    title: 'Strategic Planning',
    desc: 'Plan a seamless migration with zero downtime.',
    icon: FiCloud,
  },
  {
    title: 'Phased Transition',
    desc: 'Migrate workloads in stages for minimal impact.',
    icon: FiGitPullRequest,
  },
  {
    title: 'Testing & Launch',
    desc: 'Ensure flawless deployment with rigorous testing.',
    icon: FiShield,
  },
  {
    title: 'Automation & Optimization',
    desc: 'Streamline operations with CI/CD and automation.',
    icon: FiCode,
  },
];

export default function MultiCloudAndProcess() {
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
    }),
  };

  const buttonVariants = {
    hover: { scale: 1.05, x: 5, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Metrics Section */}
      <div className="bg-gradient-to-r from-[#1a2a44] to-[#2e4373] text-white py-12 flex flex-wrap justify-around text-center gap-8 px-6">
        {[
          { value: '40%', desc: 'Lower IT Costs' },
          { value: '30%', desc: 'Faster App Deployment' },
          { value: '55%', desc: 'Reduced Energy Use' },
        ].map((metric, idx) => (
          <motion.div
            key={idx}
            className="min-w-[180px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold">{metric.value}</h2>
            <p className="mt-2 text-base text-gray-200">{metric.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Multi-Cloud Expertise Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-[#f0f4ff] relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <h3 className="uppercase text-sm font-semibold text-blue-500 tracking-wider">
              Multi-Cloud Mastery
            </h3>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2 text-gray-900">
              Premier AWS Partner with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Multi-Cloud Expertise
              </span>
            </h2>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Unlock the cloud’s potential with our end-to-end migration solutions. Our experts craft strategies that optimize performance, reduce costs, and enhance security across multiple cloud platforms.
            </p>
            <motion.a
              href="#contact"
              className="mt-6 inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              variants={buttonVariants}
              whileHover="hover"
              aria-label="Contact our cloud experts"
            >
                        <Link href='/contact'>

              Connect with Our Experts
              </Link>
              <FiArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              { src: '/app/server-logo.webp', alt: 'AWS' },
         
            ].map((logo, idx) => (
              <motion.div
                key={idx}
                className="group relative"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={400}
                  height={60}
                  className="object-contain transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Migration Process Section */}
      <section className="bg-[#f8fbff] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <h4 className="uppercase text-sm font-semibold text-blue-500 tracking-wider">
              Our Approach
            </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2 text-gray-900">
              Our Cloud{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Migration Process
              </span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {migrationSteps.map((step, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:bg-blue-50/50 transition-all duration-300 flex items-start gap-4"
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <step.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-base text-blue-900 mb-2">
                    {idx + 1}. {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

