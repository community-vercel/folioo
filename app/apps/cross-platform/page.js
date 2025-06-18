

'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FaCode, FaClock, FaDollarSign, FaMobileAlt } from 'react-icons/fa';
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

export default function AppCrossPlatform() {
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
      icon: FaDollarSign,
      title: 'Cost-Efficient',
      desc: 'Develop one codebase for iOS and Android, reducing development and maintenance costs.',
    },
    {
      icon: FaClock,
      title: 'Faster Time-to-Market',
      desc: 'Launch your app quicker with a single development cycle for multiple platforms.',
    },
    {
      icon: FaCode,
      title: 'Consistent Experience',
      desc: 'Deliver a uniform UI/UX across platforms, ensuring brand consistency.',
    },
    {
      icon: FaMobileAlt,
      title: 'Wide Reach',
      desc: 'Target both iOS and Android users with a single app, maximizing your audience.',
    },
  ];

  const frameworks = [
    {
      icon: '/app/cdnlogo.com_flutter.svg',
      title: 'Flutter',
      desc: 'Google’s UI toolkit for building natively compiled apps with a single codebase, offering rich widgets and fast performance.',
    },
    {
      icon: '/app/1674520932logo.svg',
      title: 'React Native',
      desc: 'Facebook’s framework for creating native-like apps using JavaScript, with a vast ecosystem and reusable components.',
    },
    {
      icon: '/app/cdnlogo.com_xamarin.svg',
      title: 'Xamarin',
      desc: 'Microsoft’s platform for building cross-platform apps with C#, integrating seamlessly with .NET ecosystems.',
    },
  ];

  const showcaseProjects = [
    {
      title: 'E-Commerce Hub',
      desc: 'A cross-platform shopping app built with Flutter, featuring real-time inventory and seamless payments.',
      image: '/app/screenshot.webp',
    },
    {
      title: 'HealthTrack',
      desc: 'A React Native fitness app for iOS and Android, with wearable integration and personalized plans.',
      image: '/app/original-5cf6495967f6071c0e4655b5b5093cab.webp',
    },
    {
      title: 'TravelMate',
      desc: 'A Xamarin-based travel app offering itinerary planning and offline maps for global explorers.',
      image: '/app/unnamed (2).webp',
    },
  ];

  return (

<>
<Header />
    <section className="relative bg-gradient-to-b from-[#f8fafc] to-[#e0f0ff] py-16 sm:py-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute top-0 left-10 w-[500px] h-[500px] bg-cyan-300 rounded-full filter blur-4xl animate-pulse-slow"></div>
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
          Cross-Platform App Development
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{ ...sectionVariants, transition: { delay: 0.2 } }}
          className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mb-8"
        >
          Build once, deploy everywhere. Novabloom crafts high-performance cross-platform apps that reach iOS and Android users with a single codebase.
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Why Choose Cross-Platform?</h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Maximize efficiency and reach with apps that work seamlessly across iOS and Android.
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Preferred Frameworks</h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            We leverage industry-leading tools to deliver robust, scalable cross-platform apps.
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
            We follow a proven process to deliver high-quality cross-platform apps tailored to your needs.
          </p>
        </motion.div>
        <div className="space-y-8">
          {[
            {
              title: 'Discovery & Planning',
              desc: 'We analyze your requirements and define a roadmap for your app’s success.',
            },
            {
              title: 'Design & Prototyping',
              desc: 'We create intuitive UI/UX designs and interactive prototypes for feedback.',
            },
            {
              title: 'Development & Testing',
              desc: 'We build your app with clean code and rigorously test for performance.',
            },
            {
              title: 'Deployment & Support',
              desc: 'We launch your app and provide ongoing maintenance and updates.',
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Cross-Platform Projects</h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Explore some of our successful cross-platform apps built for diverse industries.
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
            Ready to Build Your Cross-Platform App?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Partner with Novabloom to create a powerful app that reaches every user, everywhere.
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
  );
}

