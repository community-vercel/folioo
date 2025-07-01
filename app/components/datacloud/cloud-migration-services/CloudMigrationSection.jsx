'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

const cloudFeatures = [
  {
    id: '01',
    title: 'Decade of Experience',
    description:
      'Over 10 years of cloud migration expertise, tackling your toughest challenges with proven solutions.',
    image: '/app/image-2254.webp',
  },
  {
    id: '02',
    title: 'Certified Cloud Experts',
    description:
      'Our certified professionals ensure a seamless, secure, and expertly executed migration process.',
    image: '/app/Rectangle-1570-1.webp',
  },
  {
    id: '03',
    title: 'Customized Solutions',
    description:
      'Tailored cloud strategies designed to align perfectly with your unique business goals.',
    image: '/app/Rectangle-12227.webp',
  },
  {
    id: '04',
    title: 'Proven Track Record',
    description:
      'Trusted by businesses across industries, we deliver cloud migrations that drive results.',
    image: '/app/Rectangle-12226.webp',
  },
  {
    id: '05',
    title: 'End-to-End Support',
    description:
      'Comprehensive support from planning to post-migration, ensuring your cloud success.',
    image: '/app/Mask-group-27.webp',
  },
];

export default function CloudMigrationSection7() {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
    }),
  };

  // Animation variants for heading and button
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, x: 5, transition: { duration: 0.3 } },
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-[#f0f4ff] py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Heading Section */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Why Choose Folio3 for{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Cloud Migration?
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            At Folio3, we deliver a tailored cloud migration framework to empower your business with seamless, secure solutions.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cloudFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="relative h-80 group overflow-hidden rounded-xl shadow-lg"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                <span className="text-white text-3xl font-bold opacity-20 absolute top-4 right-4">
                  {feature.id}
                </span>
                <h3 className="text-white font-bold text-xl z-10">{feature.title}</h3>
                <p className="text-sm text-gray-200 mt-2 z-10 line-clamp-3">
                  {feature.description}
                </p>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <motion.a
            href="#contact" // Replace with your actual link
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            variants={buttonVariants}
            whileHover="hover"
          >
                                  <Link href='/contact'>

            Talk to Our Cloud Experts
            <FiArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}