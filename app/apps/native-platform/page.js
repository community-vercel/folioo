'use client'
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FaRocket, FaStar, FaShieldAlt, FaCog, FaMobileAlt, FaCode, FaPaintBrush, FaChartLine } from 'react-icons/fa';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Footer from '@/app/components/ai/Footer';
import Header from '@/app/components/Header';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } },
};
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const buttonVariants = {
  hover: { scale: 1.05, boxShadow: "0 0 15px rgba(124, 58, 237, 0.7)", transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

// Particle Background Component
const ParticleBackground = () => (
  <Particles
    id="hero-particles"
    init={loadFull}
    options={{
      particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: ['#00ddeb', '#7c3aed', '#ff007a'] },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 4, random: true },
        move: { 
          enable: true, 
          speed: 1, 
          direction: 'none', 
          random: true,
          out_mode: "bounce"
        },
      },
      interactivity: {
        events: { 
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: "push" }
        },
      },
    }}
    className="absolute inset-0 z-0"
  />
);

export default function NativeMobileApps() {
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const frameworksRef = useRef(null);
  const approachRef = useRef(null);
  const showcaseRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: '-100px' });
  const frameworksInView = useInView(frameworksRef, { once: true, margin: '-100px' });
  const approachInView = useInView(approachRef, { once: true, margin: '-100px' });
  const showcaseInView = useInView(showcaseRef, { once: true, margin: '-100px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  const benefits = [
    { icon: FaRocket, title: 'Blazing Speed', desc: 'Native apps harness platform APIs for lightning-fast performance and smooth animations.' },
    { icon: FaStar, title: 'Premium UX', desc: 'Tailored UI/UX that perfectly aligns with iOS and Android design guidelines.' },
    { icon: FaShieldAlt, title: 'Enterprise Security', desc: 'Leverage native security features to safeguard sensitive user data.' },
    { icon: FaMobileAlt, title: 'Full Integration', desc: 'Seamless access to device hardware like GPS, camera, and biometrics.' },
  ];

  const frameworks = [
    { icon: '/app/swift.svg', title: 'Swift', desc: 'Apple\'s modern language for building lightning-fast, safe iOS apps with elegant syntax.' },
    {icon: '/app/-yeJEAW-kotlin%20(1).svg', title: 'Kotlin', desc: 'Google\'s preferred language for concise, robust Android development with full Java interoperability.' },
    {  icon: '/app/sdk-objectivec%20(1).svg', title: 'Flutter', desc: 'For cross-platform apps that need native performance with a single codebase.' },
  ];

  const showcaseProjects = [
  {
      title: 'ShopNative', 
      desc: 'Swift iOS e-commerce app with AR product previews, Apple Pay integration, and real-time inventory.', 
      image:  '/app/thumb.png',
      tags: ['Swift', 'ARKit', 'CoreML']
    },
    { 
      title: 'FitPulse', 
      desc: 'Kotlin Android fitness app with real-time health tracking, wearables integration, and AI coaching.', 
      image: '/app/6456c444a36e6a8cdce9ab5d96c4a4d0adbf3185-1600x1200.avif',
      tags: ['Kotlin', 'Android SDK', 'Firebase']
    },
    { 
      title: 'CityGuide', 
      desc: 'Flutter travel app with offline maps, personalized recommendations, and AR navigation features.', 
      image: '/app/63c65e8d03ef9c4cd06b38ea_Travel planning solution.webp',
      tags: ['Flutter', 'Dart', 'Google Maps']
    },
  ];

  const processSteps = [
    { icon: FaCode, title: 'Technical Discovery', desc: 'In-depth analysis of requirements and technical feasibility study.' },
    { icon: FaPaintBrush, title: 'UI/UX Design', desc: 'Platform-specific interface design following Apple HIG and Material Design.' },
    { icon: FaMobileAlt, title: 'Development', desc: 'Agile development with weekly sprints and continuous integration.' },
    { icon: FaChartLine, title: 'Optimization', desc: 'Performance tuning and battery optimization for each platform.' },
    { icon: FaShieldAlt, title: 'Security Audit', desc: 'Comprehensive security testing and penetration analysis.' },
    { icon: FaRocket, title: 'Deployment', desc: 'App Store and Play Store submission with marketing assets.' },
  ];

  // Split headline for animation
  const headline = "Native Mobile Excellence".split('');

  return (
    <>
      <Header />
      <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen overflow-hidden">
        {/* Particle Background */}
        <ParticleBackground />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-blue-900/20 to-indigo-900/10 z-0"></div>

        {/* Hero Section */}
        <section ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-24 sm:py-36">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial="hidden"
              animate={heroInView ? 'visible' : 'hidden'}
              variants={sectionVariants}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 mb-8 leading-tight"
                variants={textVariants}
                initial="hidden"
                animate={heroInView ? 'visible' : 'hidden'}
              >
                {headline.map((letter, idx) => (
                  <motion.span key={idx} variants={letterVariants} className="inline-block">
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </motion.h1>
              
              <motion.p
                className="text-xl text-white max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                We craft premium native mobile experiences that leverage the full power of iOS and Android platforms for unmatched performance and user engagement.
              </motion.p>
              
              <motion.div
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                initial="hidden"
                animate={heroInView ? 'visible' : 'hidden'}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              >
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-teal-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-teal-500/30 transition-all duration-300 flex items-center gap-3 group"
                  >
                    <span>Start Your Project</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
                
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Link
                    href="/portfolio"
                    className="border-2 border-teal-400 text-teal-400 font-semibold px-8 py-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-teal-400/10 transition-all duration-300 flex items-center gap-3"
                  >
                    <span>View Our Work</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
              
          
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate={heroInView ? 'visible' : 'hidden'}
              variants={sectionVariants}
              className="lg:w-1/2 relative"
            >
              <div className="relative perspective-1000 group">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-purple-600/20 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative bg-gray-800/50 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700/50 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <Image
                    src="/app/4089388.jpg"
                    alt="Native Mobile App Mockup"
                    width={600}
                    height={500}
                    className="w-full object-contain"
                    priority
                  />
                </div>
                
             
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 mt-12 sm:mt-18">
          <motion.div
            initial="hidden"
            animate={benefitsInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">Native</span> Development?
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Native apps deliver superior performance, security, and user experience compared to cross-platform solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                animate={benefitsInView ? 'visible' : 'hidden'}
                variants={{ ...cardVariants, transition: { delay: idx * 0.2 } }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-xl p-8 text-center border border-gray-700/50 hover:border-teal-400/30 transition-all duration-300 shadow-xl"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-teal-500/10 to-purple-600/10 rounded-xl">
                  <benefit.icon className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-white">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 bg-gradient-to-r from-gray-900/50 via-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-gray-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Performance Benchmark</h3>
                <p className="text-white mb-6">
                  Our native apps consistently outperform hybrid solutions in speed tests and user satisfaction metrics.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 flex-shrink-0 bg-teal-500/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    </div>
                    <span className="text-white">2-3x faster load times than hybrid apps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 flex-shrink-0 bg-teal-500/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    </div>
                    <span className="text-white">90% lower crash rates compared to cross-platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 flex-shrink-0 bg-teal-500/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    </div>
                    <span className="text-white">40% higher user retention after 90 days</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1 }}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50"
              >
                <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-teal-500/10 rounded-full flex items-center justify-center">
                      <FaChartLine className="text-teal-400 text-2xl" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Performance Metrics</h4>
                    <p className="text-sm text-white">Native vs Hybrid Comparison</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section ref={frameworksRef} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 mt-24 sm:mt-32">
          <motion.div
            initial="hidden"
            animate={frameworksInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-500">Technology</span> Stack
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              We use the most advanced native technologies to build high-performance mobile applications.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frameworks.map((framework, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                animate={frameworksInView ? 'visible' : 'hidden'}
                variants={{ ...cardVariants, transition: { delay: idx * 0.2 } }}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-400/30 transition-all duration-300 shadow-xl"
              >
                <div className="p-8">
                  <div className="w-16 h-16 mb-6 bg-gradient-to-br from-purple-500/10 to-teal-500/10 rounded-lg flex items-center justify-center">
                    <Image
                      src={framework.icon}
                      alt={framework.title}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{framework.title}</h3>
                  <p className="text-gray-400 mb-6">{framework.desc}</p>
                  
                  <div className="pt-4 border-t border-gray-700/50">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">TYPICAL USE CASES</h4>
                    <div className="flex flex-wrap gap-2">
                      {['High-performance apps', 'Platform-specific features', 'Enterprise solutions'].map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-gray-800/50 rounded-full text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Supporting Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {[
                { name: 'SwiftUI', icon: '/app/1_RbalPsQXdqOtqk0ZSwW4Nw.png' },
                { name: 'Jetpack Compose', icon: '/app/IMG_9597.png' },
                { name: 'Core Data', icon: '/app/core-data-software-framework-database-png-favpng-GsdaH8kup7aAqAnaRat44kYBW.jpg' },
                { name: 'Room DB', icon: '/app/category-saving-data-persistence-android-9dc9eed34348d1d06a4365379fba3a54aa7aabd05d828dbb4de97349126d9718.svg' },
                { name: 'Firebase', icon: '/app/1_R4c8lHBHuH5qyqOtZb3h-w.png' },
                { name: 'ARKit', icon: '/app/ARKit-main.jpg' },
              ].map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={frameworksInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-16 h-16 bg-gray-800/50 rounded-lg flex items-center justify-center p-3 border border-gray-700/50 hover:border-teal-400/30 transition-colors">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="object-contain filter grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                  <span className="text-sm text-white text-center">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section ref={approachRef} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 mt-24 sm:mt-32">
          <motion.div
            initial="hidden"
            animate={approachInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">Development</span> Process
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              A meticulous approach to building high-quality native mobile applications.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="hidden lg:block absolute left-16 top-0 h-full w-0.5 bg-gradient-to-b from-gray-700 via-teal-500/50 to-gray-700"></div>
            
            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  animate={approachInView ? 'visible' : 'hidden'}
                  variants={{ ...cardVariants, transition: { delay: idx * 0.15 } }}
                  className={`relative ${idx % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:mt-24'}`}
                >
                  <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-xl p-8 border border-gray-700/50 hover:border-teal-400/30 transition-all duration-300 shadow-lg">
                    <div className="absolute -left-4 lg:left-auto lg:-right-4 top-8 w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3">
                      <span className="lg:hidden w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-purple-600 flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-gray-400">{step.desc}</p>
                    
                    {idx < processSteps.length - 1 && (
                      <div className="lg:hidden absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-0.5 h-10 bg-gradient-to-b from-gray-700 to-gray-900"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section ref={showcaseRef} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 mt-24 sm:mt-32">
          <motion.div
            initial="hidden"
            animate={showcaseInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="text-white bg-clip-text">Native</span> Projects
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Selected case studies of our premium native mobile applications.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {showcaseProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                animate={showcaseInView ? 'visible' : 'hidden'}
                variants={{ ...cardVariants, transition: { delay: idx * 0.2 } }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-xl shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent z-10"></div>
                
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-teal-500/20 rounded-full text-teal-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white text-sm mb-4">{project.desc}</p>
                  
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-teal-400 transition-colors"
                  >
                    View Case Study
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={showcaseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/20 transition-all"
            >
              Explore Full Portfolio
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section ref={ctaRef} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 mt-24 sm:mt-32 pb-24">
          <motion.div
            initial="hidden"
            animate={ctaInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50"
          >
            <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-[length:40px_40px] opacity-5"></div>
            
            <div className="relative z-10 p-12 sm:p-16 lg:p-20 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">Native App</span>?
              </h2>
              
              <p className="text-xl text-white max-w-3xl mx-auto mb-10">
                Lets discuss how we can create a high-performance mobile experience for your users.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/20 transition-all"
                  >
                    Get Started
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
                
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800 text-white font-semibold rounded-xl border border-gray-700 hover:bg-gray-700/50 transition-all"
                  >
                    Book a Consultation
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Floating CTA */}
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: 'spring' }}
        >
          <Link
            href="/contact"
            className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-purple-600 text-white rounded-full shadow-xl hover:shadow-teal-500/30 transition-all"
            aria-label="Chat with us"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </Link>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}