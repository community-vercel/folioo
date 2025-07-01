'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FaUserMd, FaLock, FaSyncAlt, FaMobileAlt, FaDatabase, FaCode, FaStethoscope, FaRocket, FaChartPie } from 'react-icons/fa';
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

export default function EHR() {
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
      icon: FaUserMd,
      title: 'Patient-Centric Records',
      desc: 'Centralized, accessible patient data for improved care coordination.',
      details: 'Real-time updates and intuitive dashboards for healthcare providers.',
    },
    {
      icon: FaLock,
      title: 'HIPAA-Compliant Security',
      desc: 'End-to-end encryption to protect sensitive patient information.',
      details: 'Role-based access and audit trails for compliance.',
    },
    {
      icon: FaMobileAlt,
      title: 'Cross-Platform Access',
      desc: 'Access EHR on web, iOS, and Android with seamless syncing.',
      details: 'Responsive design for use in clinics or on the go.',
    },
    {
      icon: FaSyncAlt,
      title: 'Interoperability',
      desc: 'Integrate with labs, pharmacies, and billing systems via FHIR.',
      details: 'Streamlined data exchange for holistic patient care.',
    },
  ];


  const technologies = [
    {
   icon: '/app/cdnlogo.com_flutter.svg',
      title: 'Flutter',
      desc: 'Responsive EHR apps with consistent UI across devices.',
      features: ['Cross-Platform', 'Real-Time Sync', 'Custom UI'],
    },
    {
     icon: '/app/1674520932logo.svg',
      title: 'React Native', 
      desc: 'Scalable mobile EHR solutions with robust integrations.',
      features: ['Performance', 'API Support', 'Modular Code'],
    },
    {
  icon: '/app/5c406461d6b53e4a20b03cba_fhirstarter.svg', 
      title: 'HL7 FHIR', 
      desc: 'Standards-based interoperability for seamless data exchange.',
      features: ['API-Driven', 'Data Standards', 'Scalability'],
    },
  ];

  const showcaseProjects = [
    {
      title: 'HealthSync EHR',
      desc: 'Flutter-based EHR platform with real-time patient data and telemedicine integration.',
      image: '/app/How-to-build-an-EHR-system-Infographics-1.jpg.jpg',
      tags: ['Flutter', 'Firebase', 'Telemedicine'],
    },
    {
      title: 'CareLink Mobile',
      desc: 'React Native app for mobile EHR access with lab and billing integrations.',
      image: '/app/MedtronicCareLinkSmartSyncDeviceManager.webp',
      tags: ['React Native', 'GraphQL', 'FHIR'],
    },
    {
      title: 'MediConnect FHIR',
      desc: 'FHIR-based EHR system for secure data sharing across healthcare networks.',
      image: '/app/rs=w_365,h_365,cg_true.webp',
      tags: ['HL7 FHIR', 'Azure', 'REST APIs'],
    },
  ];

  const processSteps = [
    { icon: FaDatabase, title: 'Data Architecture', desc: 'Design secure, scalable EHR data models.' },
    { icon: FaCode, title: 'Development', desc: 'Build interoperable EHR solutions with FHIR.' },
    { icon: FaStethoscope, title: 'Testing & Compliance', desc: 'Ensure HIPAA compliance and data accuracy.' },
    { icon: FaRocket, title: 'Deployment', desc: 'Launch on web, mobile, and cloud platforms.' },
  ];

  // Split headline for animation
  const headline = 'EHR/EMR Solutions'.split('');

  // Carousel state for projects
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % showcaseProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + showcaseProjects.length) % showcaseProjects.length);
  };

  return (
    <>
      <Header />
      <div className="relative bg-gradient-to-b from-[#2e6b6e] to-gray-800 min-h-screen overflow-hidden">
        {/* Particle Background */}
        <ParticleBackground />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-green-900/20 to-teal-900/10 z-0"></div>

        {/* Hero Section */}
        <section ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-6 sm:pt-24 sm:pt-32">
          <div className="flex flex-col items-center gap-12 text-center">
            <motion.div
              initial="hidden"
              animate={heroInView ? 'visible' : 'hidden'}
              variants={sectionVariants}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-500 to-teal-500 mb-6 leading-tight"
                variants={textVariants}
              >
                {headline.map((letter, idx) => (
                  <motion.span key={idx} variants={letterVariants} className="inline-block">
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Transform healthcare delivery with secure, interoperable, and user-friendly EHR/EMR systems.
              </motion.p>
              <motion.div
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                initial="hidden"
                animate={heroInView ? 'visible' : 'hidden'}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-green-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-3 group"
                    aria-label="Start your EHR/EMR project"
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
                    className="border-2 border-cyan-400 text-cyan-400 font-semibold px-8 py-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-cyan-400/10 transition-all duration-300 flex items-center gap-3"
                    aria-label="View our EHR/EMR portfolio"
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
              className="relative w-full max-w-md"
            >
              <div className="relative perspective-1000 group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-green-600/20 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  className="relative"
                >
                  <Image
                    src="/app/Challenges-and-Benefits-of-Electronic-Health-Records-EHR.jpg"
                    alt="EHR App Mockup"
                    width={400}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="w-full object-contain"
                    priority
                    onError={(e) => (e.currentTarget.src = '/ehr/fallback-mockup.webp')}
                  />
                </motion.div>
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
              Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-500">EHR/EMR</span> Solutions?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Enhance patient care with secure, interoperable, and intuitive EHR/EMR systems designed for healthcare providers.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                animate={benefitsInView ? 'visible' : 'hidden'}
                variants={{ ...cardVariants, transition: { delay: idx * 0.2 } }}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(6, 182, 212, 0.3)' }}
                className="group relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-xl p-6 text-center border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 shadow-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-cyan-500/10 to-green-600/10 rounded-full">
                    <benefit.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.desc}</p>
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400 text-xs mt-3"
                  >
                    {benefit.details}
                  </motion.p>
                </div>
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
                <h3 className="text-2xl font-bold text-white mb-4">EHR Efficiency</h3>
                <p className="text-gray-300 mb-6">Streamline clinical workflows and improve patient outcomes.</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 flex-shrink-0 bg-cyan-500/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">50% faster patient data access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 flex-shrink-0 bg-cyan-500/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">80% reduction in documentation errors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 flex-shrink-0 bg-cyan-500/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">100% FHIR-compliant interoperability</span>
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
                      <FaChartPie className="text-cyan-400 text-2xl" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Clinical Insights</h4>
                    <p className="text-sm text-gray-300">Data-driven decision-making with EHR analytics</p>
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">EHR Tech</span> Stack
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies for secure, interoperable, and scalable EHR solutions.
            </p>
          </motion.div>
          <div className="relative flex justify-center items-center flex-wrap gap-8">
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                animate={technologiesInView ? 'visible' : 'hidden'}
                variants={{ ...cardVariants, transition: { delay: idx * 0.2 } }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative w-64 h-64 bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-full p-6 text-center border border-gray-700/50 hover:border-green-400/30 transition-all duration-300 shadow-xl"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-full flex items-center justify-center">
                  <Image
                    src={tech.icon}
                    alt={tech.title}
                    width={32}
                    height={32}
                    className="object-contain"
                    onError={(e) => (e.currentTarget.src = '/ehr/fallback-tech-icon.webp')}
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.title}</h3>
                <p className="text-gray-300 text-sm">{tech.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {tech.features.map((feature, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-800/50 rounded-full text-cyan-300">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
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
                      onError={(e) => (e.currentTarget.src = '/ehr/fallback-tech-icon.webp')}
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-500">EHR Development</span> Process
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A clear, phased approach to building secure and efficient EHR/EMR systems.
            </p>
          </motion.div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-700 via-cyan-500/50 to-gray-700"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  animate={approachInView ? 'visible' : 'hidden'}
                  variants={{ ...cardVariants, transition: { delay: idx * 0.15 } }}
                  className="relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 shadow-lg"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-green-600 flex items-center justify-center shadow-lg">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-300 text-sm text-center">{step.desc}</p>
                </motion.div>
              ))}
            </div>
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">EHR/EMR</span> Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover our innovative EHR/EMR solutions transforming healthcare delivery.
            </p>
          </motion.div>
          <div className="relative">
            <motion.div
              className="overflow-hidden"
              initial={{ x: `-${currentProject * 100}%` }}
              animate={{ x: `-${currentProject * 100}%` }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <div className="flex">
                {showcaseProjects.map((project, idx) => (
                  <motion.div
                    key={idx}
                    className="min-w-full lg:min-w-[33.33%] px-4"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                  >
                    <div className="group relative overflow-hidden rounded-xl shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent z-10"></div>
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => (e.currentTarget.src = '/ehr/fallback-project-image.webp')}
                      />
                      <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                        <div className="mb-3 flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="text-xs px-3 py-1 bg-gray-800/50 rounded-full text-cyan-200">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-300 text-sm mb-4">{project.desc}</p>
                        <Link
                          href="/portfolio"
                          className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors"
                          aria-label={`View case study for ${project.title}`}
                        >
                          View Case Study
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <div className="flex justify-between mt-6">
              <button
                onClick={prevProject}
                className="p-2 bg-gray-800/50 rounded-full text-cyan-400 hover:bg-cyan-400/20 transition-all"
                aria-label="Previous project"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextProject}
                className="p-2 bg-gray-800/50 rounded-full text-cyan-400 hover:bg-cyan-400/20 transition-all"
                aria-label="Next project"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={showcaseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              aria-label="Explore full EHR/EMR portfolio"
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
            <div className="absolute inset-0 bg-[url('/ehr/grid-pattern-ehr.webp')] bg-[length:40px_40px] opacity-5"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 sm:p-16">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Ready to Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-500">EHR/EMR Solution</span>?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let’s create a secure, interoperable EHR system to enhance patient care and streamline operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                      aria-label="Get started with your EHR/EMR project"
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
                      aria-label="Book a consultation for EHR/EMR solutions"
                    >
                      Book a Consultation
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50">
                  <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-cyan-500/10 rounded-full flex items-center justify-center">
                        <FaStethoscope className="text-cyan-400 text-2xl" />
                      </div>
                      <p className="text-sm text-gray-300 italic">
                        "Our EHR system transformed patient care with real-time data access and seamless integrations." - Dr. Jane Smith, Clinic Director
                      </p>
                    </div>
                  </div>
                </div>
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
            className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-green-600 text-white rounded-full shadow-xl hover:shadow-teal-500/30 transition-all"
            aria-label="Chat with us about EHR/EMR solutions"
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