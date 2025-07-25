'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FaHeartbeat, FaClock, FaShieldAlt, FaMobileAlt, FaStethoscope, FaSyncAlt, FaLaptopMedical, FaRocket, FaChartLine } from 'react-icons/fa';
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
  hover: { scale: 1.05, boxShadow: "0 0 15px rgba(6, 182, 212, 0.7)", transition: { duration: 0.3 } },
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

export default function DigitalHealth() {
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
      icon: FaHeartbeat, 
      title: 'Patient-Centric Care', 
      desc: 'Apps designed to empower patients with seamless access to health records and telehealth services.' 
    },
    { 
      icon: FaClock, 
      title: 'Time Efficiency', 
      desc: 'Streamlined workflows reduce administrative tasks, saving healthcare providers up to 30% of their time.' 
    },
    { 
      icon: FaShieldAlt, 
      title: 'HIPAA Compliance', 
      desc: 'Secure platforms ensuring data privacy and compliance with healthcare regulations.' 
    },
    { 
      icon: FaMobileAlt, 
      title: 'Cross-Platform Access', 
      desc: 'Reach patients on iOS, Android, and web with a unified, accessible experience.' 
    },
  ];

  const technologies = [
  { 
    icon: '/app/HIPPA.svg', 
    title: 'HIPAA', 
    desc: 'Ensures healthcare apps are compliant with data privacy and security standards required in the U.S.',
    features: ['Data Encryption', 'User Consent Handling', 'Secure Cloud Storage']
  },
  { 
    icon: '/app/5c406461d6b53e4a20b03cba_fhirstarter.svg', 
    title: 'HL7 FHIR', 
    desc: 'A standard for exchanging healthcare information electronically with modern RESTful APIs.',
    features: ['FHIR Resources', 'Patient Data Exchange', 'Modular APIs']
  },
  { 
    icon: '/app/CPT Corporation.svg', 
    title: 'CPT', 
    desc: 'Standardized medical codes used for reporting diagnostic, surgical, and medical services.',
    features: ['Procedure Mapping', 'Billing Integration', 'Insurance Compatibility']
  },
  { 
    icon: '/app/Dicom.svg', 
    title: 'PACS & DICOM', 
    desc: 'Technologies for storing, retrieving, and sharing medical imaging files across healthcare systems.',
    features: ['Image Archiving', 'Radiology Viewer Support', 'Interoperability']
  },
];


  const showcaseProjects = [
    { 
      title: 'TeleHealth Connect', 
      desc: 'A Flutter-based telehealth app with video consultations, appointment scheduling, and EHR integration.', 
      image: '/app/New Lead_1.jpg', 
      tags: ['Flutter', 'Firebase', 'WebRTC']
    },
    { 
      title: 'Wellness Tracker', 
      desc: 'React Native app for monitoring vitals, integrating with wearables and AI-driven health insights.', 
      image: '/app/wellnesspreviewimg.png', 
      tags: ['React Native', 'HealthKit', 'GraphQL']
    },
    { 
      title: 'ClinicSync', 
      desc: 'FHIR-based platform for seamless patient data sharing between clinics and hospitals.', 
      image: '/app/tmpjxvh890s.webp', 
      tags: ['HL7 FHIR', 'Azure', 'REST APIs']
    },
  ];

  const processSteps = [
    { icon: FaLaptopMedical, title: 'Healthcare UX Design', desc: 'Patient-friendly interfaces compliant with accessibility and healthcare UX standards.' },
    { icon: FaStethoscope, title: 'Development', desc: 'Secure, scalable app development with health-specific integrations.' },
    { icon: FaSyncAlt, title: 'Testing & Compliance', desc: 'Rigorous testing for functionality, security, and HIPAA compliance.' },
    { icon: FaRocket, title: 'Deployment', desc: 'Launch on app stores and web with continuous support.' },
  ];

  // Split headline for animation
  const headline = "Digital Health Solutions".split('');

  return (
    <>
      <Header />
      <div className="relative bg-[#446f70] min-h-screen overflow-hidden">
        {/* Particle Background */}
        <ParticleBackground />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-green-900/20 to-teal-900/10 z-0"></div>

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
                className="text-3xl sm:text-5xl md:text-4xl font-extrabold text-white bg-clip-text bg-gradient-to-r from-cyan-400 via-green-500 to-teal-500 mb-8 leading-tight"
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
                className="text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                We create secure, scalable digital health solutions that empower patients and streamline healthcare delivery across platforms.
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
                    aria-label="Start your digital health project"
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
                    className=" text-white font-semibold px-8 py-4 rounded-xl bg-[#446f70] backdrop-blur-sm hover:bg-[#446f70]/10 transition-all duration-300 flex items-center gap-3"
                    aria-label="View our digital health portfolio"
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
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-green-600/20 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative bg-gray-800/50 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700/50 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <Image
                    src="/app/home-banner-1-1.webp"
                    alt="Digital Health App Mockup"
                    width={600}
                    height={500}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full object-contain"
                    priority
                    onError={(e) => (e.currentTarget.src = '/health/fallback-mockup.webp')}
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
            variants={sectionVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-gray bg-clip-text bg-gradient-to-r from-cyan-400 to-green-500">Digital Health</span>?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Transform healthcare delivery with secure, patient-focused, and efficient digital solutions.
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
                className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-xl p-8 text-center border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 shadow-xl"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-cyan-500/10 to-green-600/10 rounded-xl">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.desc}</p>
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
                <h3 className="text-2xl font-bold text-white mb-4">Healthcare Impact</h3>
                <p className="text-gray-300 mb-6">
                  Digital health solutions improve patient outcomes and operational efficiency for providers.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 flex-shrink-0 bg-cyan-500/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#446f70] rounded-full"></div>
                    </div>
                    <span className="text-gray-300">80% increase in patient engagement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 flex-shrink-0 bg-cyan-500/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#446f70] rounded-full"></div>
                    </div>
                    <span className="text-gray-300">50% reduction in administrative overhead</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 flex-shrink-0 bg-cyan-500/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#446f70] rounded-full"></div>
                    </div>
                    <span className="text-gray-300">100% HIPAA-compliant data security</span>
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
                      <FaChartLine className="text-white text-2xl" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Healthcare Efficiency</h4>
                    <p className="text-sm text-gray-300">Digital vs. Traditional Healthcare Delivery</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section ref={technologiesRef} className="relative z-10 max-w-full mx-auto px-6 sm:px-8 lg:px-16 mt-24 sm:mt-32">
          <motion.div
            initial="hidden"
            animate={technologiesInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="text-gray bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">Health Tech</span> Stack
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies for secure, scalable, and interoperable healthcare solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                animate={technologiesInView ? 'visible' : 'hidden'}
                variants={{ ...cardVariants, transition: { delay: idx * 0.2 } }}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-xl overflow-hidden border border-gray-700/50 hover:border-green-400/30 transition-all duration-300 shadow-xl"
              >
                <div className="p-8">
                  <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-lg flex items-center justify-center">
                    <Image
                      src={tech.icon}
                      alt={tech.title}
                      width={40}
                      height={40}
                      className="object-contain"
                      onError={(e) => (e.currentTarget.src = '/health/fallback-tech-icon.webp')}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{tech.title}</h3>
                  <p className="text-gray-300 mb-6">{tech.desc}</p>
                  
                  <div className="pt-4 border-t border-gray-700/50">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">KEY FEATURES</h4>
                    <div className="flex flex-wrap gap-2">
                      {tech.features.map((feature, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-gray-800/50 rounded-full text-white">
                          {feature}
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
                      onError={(e) => (e.currentTarget.src = '/health/fallback-tech-icon.webp')}
                    />
                  </div>
                  <span className="text-sm text-gray-300 text-center">{tech.name}</span>
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
              Our <span className="text-gray bg-clip-text bg-gradient-to-r from-cyan-400 to-green-500">Health Tech</span> Process
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A proven approach to building secure and scalable digital health applications.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="hidden lg:block absolute left-16 top-0 h-full w-0.5 bg-gradient-to-b from-gray-700 via-cyan-500/50 to-gray-700"></div>
            
            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  animate={approachInView ? 'visible' : 'hidden'}
                  variants={{ ...cardVariants, transition: { delay: idx * 0.15 } }}
                  className={`relative ${idx % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:mt-24'}`}
                >
                  <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-xl p-8 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 shadow-lg">
                    <div className="absolute -left-4 lg:left-auto lg:-right-4 top-8 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-green-600 flex items-center justify-center shadow-lg">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3"></h3>
                      <span className="lg:hidden w-pitout"></span>
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3">
                      <span className="lg:hidden w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-green-600 flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-gray-300">{step.desc}</p>
                    
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
              Our <span className="text-gray bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">Digital Health</span> Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Selected case studies of our innovative digital health solutions.
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
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => (e.currentTarget.src = '/health/fallback-project-image.webp')}
                />
                
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-gray-800/50 rounded-full text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.desc}</p>
                  
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white transition-colors"
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
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={showcaseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#446f70] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              aria-label="Explore full digital health portfolio"
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
            <div className="absolute inset-0 bg-[url('/health/grid-pattern-health.webp')] bg-[length:40px_40px] opacity-5"></div>
            
            <div className="relative z-10 p-12 sm:p-16 lg:p-20 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Build Your <span className="text-gray bg-clip-text bg-gradient-to-r from-cyan-400 to-green-500">Digital Health Solution</span>?
              </h2>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                Let’s create a secure, patient-focused health app to transform care delivery.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#446f70] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                    aria-label="Get started with your digital health project"
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
                    className="inline-flex items-center gap-3 px-8 py-4  text-white font-semibold rounded-xl bg-[#446f70] transition-all"
                    aria-label="Book a consultation for digital health solutions"
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
            className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-green-600 text-white rounded-full shadow-xl hover:shadow-teal-500/30 transition-all"
            aria-label="Chat with us about digital health solutions"
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