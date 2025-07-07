'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FaBrain, FaLock, FaSyncAlt, FaMobileAlt, FaChartLine, FaCode, FaStethoscope, FaRocket, FaLightbulb } from 'react-icons/fa';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles';
import Header from '@/app/components/Header';
import Footer from '@/app/components/ai/Footer';

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
  hover: { scale: 1.05, boxShadow: '0 0 15px rgba(6, 182, 212, 0.7)', transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

// Particle Background Component
const ParticleBackground = () => (
  <Particles
    id="hero-particles"
    init={loadSlim}
    options={{
      particles: {
        number: { value: 40, density: { enable: true, value_area: 800 } },
        color: { value: ['#06b6d4', '#3b82f6', '#22c55e'] },
        shape: { type: 'circle' },
        opacity: { value: 0.4, random: true },
        size: { value: 3, random: true },
        move: {
          enable: true,
          speed: 0.8,
          direction: 'none',
          random: true,
          out_mode: 'bounce',
        },
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' },
        },
      },
    }}
    className="absolute inset-0 z-0"
  />
);

export default function CDS() {
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const technologiesRef = useRef(null);
  const approachRef = useRef(null);
  const showcaseRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: '-100px' });
  const technologiesInView = useInView(technologiesRef, { once: true, margin: '-100px' });
  const approachInView = useInView(approachRef, { once: true, margin: '-100px' });
  const showcaseInView = useInView(showcaseRef, { once: true, margin: '-100px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  const benefits = [
    {
      icon: FaBrain,
      title: 'Intelligent Decision Support',
      desc: 'AI-driven insights for accurate diagnoses and treatment plans.',
      details: 'Leverages machine learning to provide evidence-based recommendations.',
    },
    {
      icon: FaLock,
      title: 'Secure Data Handling',
      desc: 'HIPAA-compliant systems to protect patient data.',
      details: 'Encrypted data storage and secure API integrations.',
    },
    {
      icon: FaMobileAlt,
      title: 'Accessible Anywhere',
      desc: 'Access CDS tools on web, iOS, and Android platforms.',
      details: 'Real-time alerts and dashboards for clinicians on the go.',
    },
    {
      icon: FaSyncAlt,
      title: 'EHR Integration',
      desc: 'Seamless integration with EHR systems via FHIR standards.',
      details: 'Unified workflows for streamlined clinical decisions.',
    },
  ];

  const technologies = [
    {
       icon: '/app/cdnlogo.com_flutter.svg',
      title: 'Flutter',
      desc: 'Responsive CDS apps with consistent UI across devices.',
      features: ['Cross-Platform', 'Real-Time Alerts', 'Custom UI'],
    },
    {
        icon: '/app/1674520932logo.svg',
      title: 'React Native', 
      desc: 'Scalable mobile CDS solutions with robust integrations.',
      features: ['Native Performance', 'API Support', 'Modular Code'],
    },
    {
      icon: '/app/5c406461d6b53e4a20b03cba_fhirstarter.svg', 
      title: 'HL7 FHIR',
      desc: 'Interoperable data exchange for clinical decision support.',
      features: ['API-Driven', 'Data Standards', 'Scalability'],
    },
  ];

  const showcaseProjects = [
    {
      title: 'DecisionSync AI',
      desc: 'Flutter-based CDS platform with AI-driven diagnostic support and EHR integration.',
      image: '/app/1721174014622.png',
      tags: ['Flutter', 'TensorFlow', 'FHIR'],
    },
    {
      title: 'CareGuide Mobile',
      desc: 'React Native app for real-time clinical decision support with guideline integration.',
      image: '/app/journihomecontextphoto_900xx2000-1125-0-104.png',
      tags: ['React Native', 'GraphQL', 'EHR'],
    },
    {
      title: 'MediAlert FHIR',
      desc: 'FHIR-based CDS system for automated alerts and treatment recommendations.',
      image: '/app/remote-patient-monitoring-devices-kms-healthcare-8-1024x575,jpg',
      tags: ['HL7 FHIR', 'AWS', 'REST APIs'],
    },
  ];

  const processSteps = [
    { icon: FaChartLine, title: 'Data Analysis', desc: 'Design AI-driven data models for clinical insights.' },
    { icon: FaCode, title: 'Development', desc: 'Build CDS tools with EHR and guideline integrations.' },
    { icon: FaStethoscope, title: 'Testing & Validation', desc: 'Ensure clinical accuracy and HIPAA compliance.' },
    { icon: FaRocket, title: 'Deployment', desc: 'Launch on web, mobile, and cloud platforms.' },
  ];

  // Split headline for animation
  const headline = 'Clinical Decision Support'.split('');

  // Tab state for projects
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Header />
      <div className="relative bg-[#446f70] min-h-screen overflow-hidden">
        {/* Particle Background */}
        <ParticleBackground />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-green-900/20 to-teal-900/10 z-0"></div>

        {/* Hero Section */}
        <section ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={heroInView ? 'visible' : 'hidden'}
              variants={sectionVariants}
              className="text-center lg:text-left"
            >
              <motion.h1
                className=" text-4xl sm:text-5xl md:text-6xl font-extrabold text-white bg-clip-text bg-gradient-to-r from-cyan-400 via-green-500 to-teal-500 mb-6 leading-tight"
                variants={textVariants}
              >
                {headline.map((letter, idx) => (
                  <motion.span key={idx} variants={letterVariants} className="inline-block">
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Empower clinicians with AI-driven, secure, and interoperable CDS solutions for better patient outcomes.
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
                    className="bg-[#446f70] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-3 group"
                    aria-label="Start your CDS project"
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
                    className="bg-[#446f70] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-3 group"
                    aria-label="View our CDS portfolio"
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
              className="relative"
            >
              <div className="relative perspective-1000 group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-green-600/20 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700/50">
                  <Image
                    src="/app/Untitled-design-19.jpg"
                    alt="CDS Waveform Visualization"
                    width={600}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full object-cover"
                    priority
                    onError={(e) => (e.currentTarget.src = '/cds/fallback-waveform.webp')}
                  />
                  <motion.div
                    className="absolute inset-0"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <svg className="w-full h-full" viewBox="0 0 100 20">
                      <path
                        d="M0 10 Q25 5 50 10 T100 10"
                        fill="none"
                        stroke="url(#waveGradient)"
                        strokeWidth="2"
                      />
                      <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#22c55e', stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 mt-16">
          <motion.div
            initial="hidden"
            animate={benefitsInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Our <span className="text-gray bg-clip-text bg-gradient-to-r from-cyan-400 to-green-500">CDS</span> Solutions?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Enhance clinical decision-making with AI-powered, secure, and interoperable CDS tools.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                animate={benefitsInView ? 'visible' : 'hidden'}
                variants={{ ...cardVariants, transition: { delay: idx * 0.2 } }}
                whileHover={{ scale: 1.05, rotateX: 180 }}
                className="group relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-[20px] p-6 text-center border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500 shadow-lg perspective-1000"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                <motion.div
                  className="absolute inset-0 backface-hidden"
                  initial={{ rotateX: 0 }}
                  whileHover={{ rotateX: 180 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-cyan-500/10 to-green-600/10 rounded-full">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.desc}</p>
                </motion.div>
                <motion.div
                  className="absolute inset-0 backface-hidden"
                  initial={{ rotateX: -180 }}
                  whileHover={{ rotateX: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="p-6">
                    <p className="text-gray-300 text-sm">{benefit.details}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 bg-gradient-to-r from-gray-900/50 via-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Clinical Impact</h3>
                <p className="text-gray-300 mb-6">Improve patient outcomes with data-driven decisions.</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 flex-shrink-0 bg-cyan-500/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#446f70] rounded-full"></div>
                    </div>
                    <span className="text-gray-300">60% faster diagnostic decisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 flex-shrink-0 bg-cyan-500/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#446f70] rounded-full"></div>
                    </div>
                    <span className="text-gray-300">75% reduction in medication errors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 flex-shrink-0 bg-cyan-500/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#446f70] rounded-full"></div>
                    </div>
                    <span className="text-gray-300">100% FHIR-compliant integrations</span>
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
                      <FaLightbulb className="text-white text-2xl" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Decision Analytics</h4>
                    <p className="text-sm text-gray-300">AI-powered insights for better clinical outcomes</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section ref={technologiesRef} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 mt-24">
          <motion.div
            initial="hidden"
            animate={technologiesInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="text-gray bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">CDS Tech</span> Stack
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Advanced technologies for intelligent, secure, and interoperable CDS solutions.
            </p>
          </motion.div>
          <div className="relative flex justify-center items-center">
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
              {technologies.map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  animate={technologiesInView ? 'visible' : 'hidden'}
                  variants={{ ...cardVariants, transition: { delay: idx * 0.2 } }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-xl p-6 text-center border border-gray-700/50 hover:border-green-400/30 transition-all duration-300 shadow-xl"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-full flex items-center justify-center">
                    <Image
                      src={tech.icon}
                      alt={tech.title}
                      width={32}
                      height={32}
                      className="object-contain"
                      onError={(e) => (e.currentTarget.src = '/cds/fallback-tech-icon.webp')}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.title}</h3>
                  <p className="text-gray-300 text-sm">{tech.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {tech.features.map((feature, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-gray-800/50 rounded-full text-white">
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-16 bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Supporting Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {[
                   { name: 'Firebase', icon: '/app/1_R4c8lHBHuH5qyqOtZb3h-w.png' },
                { name: 'GraphQL', icon: '/app/800_627958487663f.webp' },
                { name: 'Redux', icon: '/app/redux.png' },
                { name: 'Azure', icon: '/app/azure.png' },
                { name: 'Dart', icon: '/app/dart.jpg' },
                { name: 'TypeScript', icon: '/app/ts.png' },
              ].map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={technologiesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-16 h-16 bg-gray-800/50 rounded-lg flex items-center justify-center p-3 border border-gray-700/50 hover:border-cyan-400/30 transition-colors">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="object-contain filter grayscale hover:grayscale-0 transition-all"
                      onError={(e) => (e.currentTarget.src = '/cds/fallback-tech-icon.webp')}
                    />
                  </div>
                  <span className="text-sm text-gray-300 text-center">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section ref={approachRef} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 mt-24">
          <motion.div
            initial="hidden"
            animate={approachInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="text-gray bg-clip-text bg-gradient-to-r from-cyan-400 to-green-500">CDS Development</span> Process
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A systematic approach to building intelligent and reliable CDS solutions.
            </p>
          </motion.div>
          <div className="relative space-y-12">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                animate={approachInView ? 'visible' : 'hidden'}
                variants={{ ...cardVariants, transition: { delay: idx * 0.15 } }}
                className="relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-cyan-500 to-green-600 flex items-center justify-center shadow-lg">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 text-sm">{step.desc}</p>
                  </div>
                </div>
                {idx < processSteps.length - 1 && (
                  <motion.div
                    className="absolute left-6 top-full h-12 w-0.5 bg-gradient-to-b from-cyan-500 to-green-600"
                    initial={{ height: 0 }}
                    animate={approachInView ? { height: 48 } : {}}
                    transition={{ delay: idx * 0.15 + 0.3 }}
                  ></motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section ref={showcaseRef} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 mt-24">
          <motion.div
            initial="hidden"
            animate={showcaseInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="text-gray bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">CDS</span> Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore our innovative CDS solutions enhancing clinical decision-making.
            </p>
          </motion.div>
          <div className="mb-8 flex justify-center gap-4">
            {showcaseProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === idx
                    ? 'bg-[#446f70] text-white'
                    : 'bg-gray-800/50 text-white hover:bg-[#446f70]/20'
                }`}
                aria-label={`View ${showcaseProjects[idx].title}`}
              >
                {showcaseProjects[idx].title}
              </button>
            ))}
          </div>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-xl shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent z-10"></div>
            <Image
              src={showcaseProjects[activeTab].image}
              alt={showcaseProjects[activeTab].title}
              width={1200}
              height={600}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              onError={(e) => (e.currentTarget.src = '/cds/fallback-project-image.webp')}
            />
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
              <div className="mb-3 flex flex-wrap gap-2">
                {showcaseProjects[activeTab].tags.map((tag, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-gray-800/50 rounded-full text-white">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{showcaseProjects[activeTab].title}</h3>
              <p className="text-gray-300 text-sm mb-4">{showcaseProjects[activeTab].desc}</p>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white transition-colors"
                aria-label={`View case study for ${showcaseProjects[activeTab].title}`}
              >
                View Case Study
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={showcaseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#446f70] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              aria-label="Explore full CDS portfolio"
            >
              Explore Full Portfolio
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section ref={ctaRef} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 mt-24 pb-24">
          <motion.div
            initial="hidden"
            animate={ctaInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50"
          >
            <div className="absolute inset-0 bg-[url('/cds/grid-pattern-cds.webp')] bg-[length:40px_40px] opacity-5"></div>
            <div className="relative z-10 p-12 sm:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Build Your <span className="text-gray bg-clip-text bg-gradient-to-r from-cyan-400 to-green-500">CDS Solution</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Empower your clinicians with intelligent CDS tools to improve patient outcomes.
              </p>
              <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:border-cyan-400 focus:outline-none"
                  aria-label="Email for demo request"
                />
                <motion.button
                  type="submit"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="px-8 py-3 bg-[#446f70] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                  aria-label="Request a CDS demo"
                >
                  Request Demo
                </motion.button>
              </form>
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
            className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-green-600 text-white rounded-full shadow-xl hover:shadow-teal-500/30 transition-all"
            aria-label="Chat with us about CDS solutions"
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