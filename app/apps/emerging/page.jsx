  'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { motion, useInView } from 'framer-motion';
import { FaBrain, FaLock, FaNetworkWired, FaGlasses, FaQuantum, FaRocket, FaChartLine, FaCog, FaCode } from 'react-icons/fa';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import Header from '@/app/components/Header';
import Footer from '@/app/components/ai/Footer';

// Animation Variants
const animations = {
  section: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } },
  },
  card: {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  },
  text: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  },
  letter: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  button: {
    hover: { scale: 1.05, boxShadow: '0 0 15px rgba(6, 182, 212, 0.7)', transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  },
};

// Particle Background Component
const ParticleBackground = () => (
  <Particles
    id="hero-particles"
    init={loadSlim}
    options={{
      particles: {
        number: { value: 40, density: { enable: true, value_area: 800 } },
        color: { value: ['#06b6d4', '#3b82f6', '#8b5cf6'] },
        shape: { type: 'circle' },
        opacity: { value: 0.4, random: true },
        size: { value: 3, random: true },
        move: { enable: true, speed: 0.8, direction: 'none', random: true, out_mode: 'bounce' },
      },
      interactivity: {
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
      },
    }}
    className="absolute inset-0 z-0"
  />
);

export default function EmergingTechnologiesPage() {
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const techRef = useRef(null);
  const processRef = useRef(null);
  const showcaseRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: '-100px' });
  const techInView = useInView(techRef, { once: true, margin: '-100px' });
  const processInView = useInView(processRef, { once: true, margin: '-100px' });
  const showcaseInView = useInView(showcaseRef, { once: true, margin: '-100px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  const benefits = [
    { icon: FaChartLine, title: 'Competitive Edge', desc: 'Leverage cutting-edge tech to stay ahead in your industry.' },
    { icon: FaRocket, title: 'Scalability', desc: 'Build solutions that grow with your business needs.' },
    { icon: FaLock, title: 'Security', desc: 'Advanced encryption and protocols ensure data safety.' },
    { icon: FaNetworkWired, title: 'Interconnectivity', desc: 'Seamless integration with existing systems.' },
  ];

  const technologies = [
    {
      icon: '/app/machine-learning-1.svg',
      title: 'AI & Machine Learning',
      desc: 'Intelligent systems for automation, predictive analytics, and personalized experiences.',
      features: ['Deep Learning', 'NLP', 'Computer Vision'],
    },
    {
      icon: '/app/blockchain-15.svg',
      title: 'Blockchain',
      desc: 'Decentralized solutions for secure transactions, smart contracts, and data integrity.',
      features: ['Smart Contracts', 'DeFi', 'NFTs'],
    },
    {
      icon: '/app/iotid-iot-device-authentication.svg',
      title: 'Internet of Things (IoT)',
      desc: 'Connected devices for real-time data collection and smart automation.',
      features: ['Edge Computing', 'MQTT', 'Device Management'],
    },
  ];

  const showcaseProjects = [
    {
      title: 'AI-Powered Chatbot',
      desc: 'A conversational AI platform with NLP for customer support automation.',
      image: '/app/Evolution-of-chatbots.jpg',
      tags: ['AI', 'NLP', 'Cloud'],
    },
    {
      title: 'Blockchain Supply Chain',
      desc: 'A decentralized platform for transparent supply chain tracking.',
      image: '/app/1_Wimjsa8C_xefauIwzdqw1g.jpg',
      tags: ['Blockchain', 'Smart Contracts', 'Ethereum'],
    },
    {
      title: 'IoT Smart Home',
      desc: 'A connected home system with real-time device control and analytics.',
      image: '/app/iot-for-smart-homes.jpg',
      tags: ['IoT', 'MQTT', 'AWS IoT'],
    },
  ];

  const processSteps = [
    { icon: FaCog, title: 'Research & Strategy', desc: 'Identify the best tech for your use case.' },
    { icon: FaCode, title: 'Prototyping', desc: 'Build and test proofs of concept.' },
    { icon: FaNetworkWired, title: 'Integration', desc: 'Seamlessly connect with existing systems.' },
    { icon: FaRocket, title: 'Deployment', desc: 'Launch scalable, secure solutions.' },
  ];

  const headline = 'Innovate with Emerging Tech'.split('');

  return (
    <>
      <Head>
        <title>Emerging Technologies | Your Company</title>
        <meta name="description" content="Harness AI, Blockchain, IoT, and more to build innovative, future-ready solutions." />
        <meta name="keywords" content="emerging technologies, AI, Blockchain, IoT, AR/VR, Quantum Computing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen overflow-hidden">
        {/* Particle Background */}
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-blue-900/20 to-indigo-900/10 z-0"></div>

        {/* Hero Section */}
        <section ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-24 sm:py-36">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial="hidden"
              animate={heroInView ? 'visible' : 'hidden'}
              variants={animations.section}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 mb-8 leading-tight"
                variants={animations.text}
                initial="hidden"
                animate={heroInView ? 'visible' : 'hidden'}
              >
                {headline.map((letter, idx) => (
                  <motion.span key={idx} variants={animations.letter} className="inline-block">
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Transform your business with AI, Blockchain, IoT, AR/VR, and Quantum Computing solutions built for the future.
              </motion.p>
              <motion.div
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                initial="hidden"
                animate={heroInView ? 'visible' : 'hidden'}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              >
                <motion.div variants={animations.button} whileHover="hover" whileTap="tap">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-3 group focus:outline focus:outline-2 focus:outline-cyan-400"
                    aria-label="Start your emerging tech project"
                  >
                    <span>Start Your Project</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
                <motion.div variants={animations.button} whileHover="hover" whileTap="tap">
                  <Link
                    href="/portfolio"
                    className="border-2 border-cyan-400 text-cyan-400 font-semibold px-8 py-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-cyan-400/10 transition-all duration-300 flex items-center gap-3 focus:outline focus:outline-2 focus:outline-cyan-400"
                    aria-label="View our emerging tech portfolio"
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
              variants={animations.section}
              className="lg:w-1/2 relative"
            >
              <div className="relative perspective-1000 group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700/50 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <Image
                    src="/app/2020.03.26-emerging-technology-graphic-by-istock-600x450-1.jpg"
                    alt="Emerging Technologies Visualization"
                    width={600}
                    height={500}
                    className="w-full object-contain"
                    priority
                    onError={(e) => { e.currentTarget.src = '/fallback-tech.png'; }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 mt-12 sm:mt-12">
          <motion.div
            initial="hidden"
            animate={benefitsInView ? 'visible' : 'hidden'}
            variants={animations.section}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Emerging Tech</span>?
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Unlock innovation with technologies shaping the future.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={benefitsInView ? 'visible' : 'hidden'}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={animations.card}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-xl p-8 text-center border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 shadow-xl focus:outline focus:outline-2 focus:outline-cyan-400"
                tabIndex={0}
                aria-label={`Benefit: ${benefit.title}`}
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-xl">
                  <benefit.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-20 bg-gradient-to-r from-gray-900/50 via-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-gray-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Business Impact</h3>
                <p className="text-gray-400 mb-6">
                  Emerging technologies drive efficiency, innovation, and growth.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 flex-shrink-0 bg-cyan-500/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">30-50% efficiency gains with AI automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 flex-shrink-0 bg-cyan-500/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">99.9% transaction security with Blockchain</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 flex-shrink-0 bg-cyan-500/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">Real-time insights with IoT connectivity</span>
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
                    <div className="w-16 h-16 mx-auto mb-4 bg-cyan-500/10 rounded-full flex items-center justify-center">
                      <FaChartLine className="text-cyan-400 text-2xl" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Innovation Metrics</h4>
                    <p className="text-sm text-gray-400">Impact of Emerging Tech Adoption</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section ref={techRef} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 mt-24 sm:mt-32">
          <motion.div
            initial="hidden"
            animate={techInView ? 'visible' : 'hidden'}
            variants={animations.section}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Technology</span> Stack
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Cutting-edge tools and frameworks for next-gen solutions.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={techInView ? 'visible' : 'hidden'}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                variants={animations.card}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300 shadow-xl focus:outline focus:outline-2 focus:outline-cyan-400"
                tabIndex={0}
                aria-label={`Technology: ${tech.title}`}
              >
                <div className="p-8">
                  <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg flex items-center justify-center">
                    <Image
                      src={tech.icon}
                      alt={tech.title}
                      width={40}
                      height={40}
                      className="object-contain"
                      onError={(e) => { e.currentTarget.src = '/fallback-icon.png'; }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{tech.title}</h3>
                  <p className="text-gray-400 mb-6">{tech.desc}</p>
                  <div className="pt-4 border-t border-gray-700/50">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">KEY FEATURES</h4>
                    <div className="flex flex-wrap gap-2">
                      {tech.features.map((feature, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-gray-800/50 rounded-full text-cyan-300">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-16 bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Supporting Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {[
                { name: 'TensorFlow', icon: '/app/images.jpg' },
                { name: 'Solidity', icon: '/app/hero.png' },
                { name: 'AWS IoT', icon: '/app/awsiot.png' },
                { name: 'Unity', icon: '/app/unity.png' },
                { name: 'Qiskit', icon: '/app/qis.jpg' },
                { name: 'Python', icon: '/app/python-programming-language.webp' },
              ].map((tool, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={techInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-16 h-16 bg-gray-800/50 rounded-lg flex items-center justify-center p-3 border border-gray-700/50 hover:border-cyan-400/30 transition-colors">
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={40}
                      height={40}
                      className="object-contain filter grayscale hover:grayscale-0 transition-all"
                      onError={(e) => { e.currentTarget.src = '/fallback-icon.png'; }}
                    />
                  </div>
                  <span className="text-sm text-gray-300 text-center">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section ref={processRef} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 mt-24 sm:mt-32">
          <motion.div
            initial="hidden"
            animate={processInView ? 'visible' : 'hidden'}
            variants={animations.section}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Innovation</span> Process
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              A structured approach to deploying emerging tech solutions.
            </p>
          </motion.div>
          <div className="relative">
            <div className="hidden lg:block absolute left-16 top-0 h-full w-0.5 bg-gradient-to-b from-gray-700 via-cyan-500/50 to-gray-700"></div>
            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  animate={processInView ? 'visible' : 'hidden'}
                  variants={{ ...animations.card, transition: { delay: idx * 0.15 } }}
                  className={`relative ${idx % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:mt-24'}`}
                >
                  <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-xl p-8 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 shadow-lg">
                    <div className="absolute -left-4 lg:left-auto lg:-right-4 top-8 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3">
                      <span className="lg:hidden w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-sm font-bold">
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
            variants={animations.section}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Emerging Tech</span> Projects
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Showcase of our innovative technology solutions.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={showcaseInView ? 'visible' : 'hidden'}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {showcaseProjects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={animations.card}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-xl shadow-2xl focus:outline focus:outline-2 focus:outline-cyan-400"
                tabIndex={0}
                aria-label={`Project: ${project.title}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent z-10"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = '/fallback-project.png'; }}
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-gray-800/20 rounded-full text-cyan-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.desc}</p>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors focus:outline focus:outline-2 focus:outline-cyan-400"
                    aria-label={`View case study for ${project.title}`}
                  >
                    View Case Study
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={showcaseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all focus:outline focus:outline-2 focus:outline-cyan-400"
              aria-label="Explore our full emerging tech portfolio"
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
            variants={animations.section}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50"
          >
            <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-[length:40px_40px] opacity-5"></div>
            <div className="relative z-10 p-12 sm:p-16 lg:p-20 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Innovate with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Emerging Tech</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                Let’s build transformative solutions using AI, Blockchain, IoT, and more.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.div variants={animations.button} whileHover="hover" whileTap="tap">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all focus:outline focus:outline-2 focus:outline-cyan-400"
                    aria-label="Get started with emerging tech solutions"
                  >
                    Get Started
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
                <motion.div variants={animations.button} whileHover="hover" whileTap="tap">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800 text-white font-semibold rounded-xl border border-gray-700 hover:bg-gray-700/50 transition-all focus:outline focus:outline-2 focus:outline-cyan-400"
                    aria-label="Book a consultation for emerging tech"
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
            className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-purple-600 text-white rounded-full shadow-xl hover:shadow-teal-500/30 transition-all focus:outline focus:outline-2 focus:outline-cyan-400"
            aria-label="Chat with us about emerging technologies"
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