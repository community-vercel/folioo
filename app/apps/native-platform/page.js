'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FaRocket, FaStar, FaShieldAlt, FaCog } from 'react-icons/fa';
import Footer from '@/app/components/ai/Footer';
import Header from '@/app/components/Header';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function NativeMobileApps() {
  const benefitsRef = useRef(null);
  const frameworksRef = useRef(null);
  const approachRef = useRef(null);
  const showcaseRef = useRef(null);
  const ctaRef = useRef(null);

  const benefitsInView = useInView(benefitsRef, { once: true, margin: '-100px' });
  const frameworksInView = useInView(frameworksRef, { once: true, margin: '-100px' });
  const approachInView = useInView(approachRef, { once: true, margin: '-100px' });
  const showcaseInView = useInView(showcaseRef, { once: true, margin: '-100px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  const benefits = [
    {
      icon: FaRocket,
      title: 'Superior Performance',
      desc: 'Native apps deliver unmatched speed and responsiveness by leveraging platform-specific APIs.',
    },
    {
      icon: FaStar,
      title: 'Premium User Experience',
      desc: 'Craft tailored UI/UX that aligns with iOS and Android design guidelines for intuitive interactions.',
    },
    {
      icon: FaShieldAlt,
      title: 'Enhanced Security',
      desc: 'Utilize platform-native security features to protect user data and ensure trust.',
    },
    {
      icon: FaCog,
      title: 'Full Device Integration',
      desc: 'Access advanced device features like GPS, camera, and push notifications seamlessly.',
    },
  ];

  const frameworks = [
    {
      icon: '/app/swift.svg',
      title: 'Swift',
      desc: 'Apple’s powerful language for iOS apps, offering safety, speed, and modern syntax.',
    },
    {
      icon: '/app/-yeJEAW-kotlin%20(1).svg',
      title: 'Kotlin',
      desc: 'Google’s preferred language for Android, known for concise code and robust performance.',
    },
    {
      icon: '/app/sdk-objectivec%20(1).svg',
      title: 'Objective-C',
      desc: 'A stable, time-tested language for iOS apps, ideal for legacy system integration.',
    },
  ];

  const showcaseProjects = [
    {
      title: 'ShopNative',
      desc: 'A Swift-based iOS shopping app with AR product previews and secure payments.',
      image: '/app/thumb.png',
    },
    {
      title: 'FitPulse',
      desc: 'A Kotlin-powered Android fitness app with real-time heart rate tracking and wearables support.',
      image: '/app/6456c444a36e6a8cdce9ab5d96c4a4d0adbf3185-1600x1200.avif',
    },
    {
      title: 'CityGuide',
      desc: 'An Objective-C iOS app for city exploration with offline maps and location-based notifications.',
      image: '/app/63c65e8d03ef9c4cd06b38ea_Travel planning solution.webp',
    },
  ];

  return (
    <>
      <Header />
      <section className="relative bg-gradient-to-b from-[#f8fafc] to-[#e0f0ff] py-16 sm:py-24 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <div className="absolute top-0 T-10 w-[500px] h-[500px] bg-cyan-300 rounded-full filter blur-4xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600 rounded-full filter blur-4xl animate-pulse"></div>
        </div>

        {/* Hero Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700 mb-4 sm:mb-6 leading-tight"
          >
            Native Mobile App Development
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={{ ...sectionVariants, transition: { delay: 0.2 } }}
            className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mb-8"
          >
            Unlock the full potential of iOS and Android with Novabloom’s native mobile apps, designed for performance, precision, and platform-specific excellence.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ ...sectionVariants, transition: { delay: 0.4 } }}
          >
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <div
          ref={benefitsRef}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24"
        >
          <motion.div
            initial="hidden"
            animate={benefitsInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Why Choose Native Apps?</h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-12">
              Native apps offer unmatched performance and deep integration with iOS and Android ecosystems.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                animate={benefitsInView ? 'visible' : 'hidden'}
                variants={{ ...cardVariants, transition: { delay: idx * 0.2 } }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <benefit.icon className="w-12 h-12 text-cyan-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Frameworks Section */}
        <div
          ref={frameworksRef}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24"
        >
          <motion.div
            initial="hidden"
            animate={frameworksInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Native Technologies</h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-12">
              We use cutting-edge, platform-specific tools to build high-performance native apps.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {frameworks.map((framework, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                animate={frameworksInView ? 'visible' : 'hidden'}
                variants={{ ...cardVariants, transition: { delay: idx * 0.2 } }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <Image
                  src={framework.icon}
                  alt={`${framework.title} Icon`}
                  width={48}
                  height={48}
                  className="mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{framework.title}</h3>
                <p className="text-sm text-gray-600">{framework.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Approach Section */}
        <div
          ref={approachRef}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24"
        >
          <motion.div
            initial="hidden"
            animate={approachInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Development Approach</h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-12">
              Our structured process ensures native apps that meet platform standards and user expectations.
            </p>
          </motion.div>
          <div className="space-y-8">
            {[
              {
                title: 'Requirement Analysis',
                desc: 'We dive deep into your goals to create a tailored strategy for iOS and Android apps.',
              },
              {
                title: 'UI/UX Design',
                desc: 'We design platform-specific interfaces that align with iOS and Android guidelines.',
              },
              {
                title: 'Development & Optimization',
                desc: 'We code and optimize apps for peak performance using native tools and APIs.',
              },
              {
                title: 'Testing & Deployment',
                desc: 'We rigorously test and deploy your app, ensuring flawless performance and support.',
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                animate={approachInView ? 'visible' : 'hidden'}
                variants={{ ...cardVariants, transition: { delay: idx * 0.2 } }}
                className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4 hover:shadow-xl transition-all duration-300"
              >
                <span className="text-2xl font-bold text-cyan-600">{`0${idx + 1}`}</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Showcase Section */}
        <div
          ref={showcaseRef}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24"
        >
          <motion.div
            initial="hidden"
            animate={showcaseInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Native App Projects</h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-12">
              Discover our high-performance native apps built for iOS and Android users.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                animate={showcaseInView ? 'visible' : 'hidden'}
                variants={{ ...cardVariants, transition: { delay: idx * 0.2 } }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={240}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          ref={ctaRef}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 pb-16 text-center"
        >
          <motion.div
            initial="hidden"
            animate={ctaInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to Build Your Native Mobile App?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Partner with Novabloom to create high-performance, platform-specific apps for iOS and Android.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  )}