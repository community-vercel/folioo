'use client';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FaCloud, FaCogs, FaShieldAlt, FaChartBar, FaRocket, FaTools, FaCode, FaTachometerAlt } from 'react-icons/fa';
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
const buttonVariants = {
  hover: { scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.7)', transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

// Particle Background Component
const ParticleBackground = () => (
  <Particles
    id="hero-particles"
    init={loadSlim}
    options={{
      particles: {
        number: { value: 25, density: { enable: true, value_area: 1000 } },
        color: { value: ['#3b82f6', '#60a5fa', '#1e40af'] },
        shape: { type: 'polygon', polygon: { nb_sides: 6 } },
        opacity: { value: 0.2, random: true },
        size: { value: 2, random: true },
        move: {
          enable: true,
          speed: 0.4,
          direction: 'none',
          random: true,
          out_mode: 'bounce',
        },
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
        },
      },
    }}
    className="absolute inset-0 z-0"
  />
);

export default function DevOpsConsulting() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const technologiesRef = useRef(null);
  const processRef = useRef(null);
  const showcaseRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' });
  const technologiesInView = useInView(technologiesRef, { once: true, margin: '-100px' });
  const processInView = useInView(processRef, { once: true, margin: '-100px' });
  const showcaseInView = useInView(showcaseRef, { once: true, margin: '-100px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  const services = [
    {
      icon: FaCloud,
      title: 'Cloud Automation',
      desc: 'Automate infrastructure provisioning across AWS, Azure, and GCP.',
      details: 'Streamlined deployments with Infrastructure as Code (IaC).',
    },
    {
      icon: FaCogs,
      title: 'CI/CD Excellence',
      desc: 'Build robust CI/CD pipelines for rapid, reliable releases.',
      details: 'Automated testing and deployment for faster cycles.',
    },
    {
      icon: FaShieldAlt,
      title: 'DevSecOps',
      desc: 'Embed security into every stage of your DevOps pipeline.',
      details: 'Compliance with SOC 2, GDPR, and HIPAA standards.',
    },
    {
      icon: FaChartBar,
      title: 'Observability',
      desc: 'Monitor and optimize performance with advanced analytics.',
      details: 'Real-time insights with Prometheus and Grafana.',
    },
  ];

  const technologies = [
    {
      icon: '/app/logo-guide-logos-2.svg',
      title: 'Docker',
      desc: 'Containerized environments for consistent deployments.',
      features: ['Containerization', 'Portability', 'Microservices'],
    },
    {
      icon: '/app/Kubernetes-Logo.svg',
      title: 'Kubernetes',
      desc: 'Orchestrate containers for scalability and resilience.',
      features: ['Auto-Scaling', 'Self-Healing', 'Service Discovery'],
    },
    {
      icon: '/app/HashiCorp Terraform.svg',
      title: 'Terraform',
      desc: 'Provision infrastructure with reusable IaC templates.',
      features: ['Multi-Cloud', 'Version Control', 'Automation'],
    },
  ];

  const showcaseProjects = [
     {
      title: 'InfraGuard',
      desc: 'Secure multi-cloud IaC solution with Terraform and Ansible.',
      image: '/app/netapp-cloud-sync-1536x758.jpeg',
      tags: ['Terraform', 'GCP', 'Ansible'],
    },
    {
      title: 'CloudSync CI/CD',
      desc: 'Automated CI/CD pipeline for a SaaS platform, cutting release times by 60%.',
      image: '/app/Azure-AD-Connect-Cloud-Sync-400x225.png',
      tags: ['Jenkins', 'AWS', 'Docker'],
    },
    {
      title: 'KubeScale Platform',
      desc: 'Kubernetes-based fintech infrastructure with real-time monitoring.',
      image: '/app/unnamed.png',
      tags: ['Kubernetes', 'Prometheus', 'Azure'],
    },
   
  ];

  const processSteps = [
    {
      icon: FaTools,
      title: 'Discovery',
      desc: 'Assess infrastructure and identify automation opportunities.',
    },
    {
      icon: FaCode,
      title: 'Implementation',
      desc: 'Design and deploy CI/CD pipelines and IaC solutions.',
    },
    {
      icon: FaTachometerAlt,
      title: 'Optimization',
      desc: 'Enhance performance with monitoring and analytics.',
    },
    {
      icon: FaRocket,
      title: 'Continuous Support',
      desc: 'Provide ongoing optimization and support.',
    },
  ];

  // Slider state for portfolio
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % showcaseProjects.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, showcaseProjects.length]);

  // Split headline for animation
  const headline = 'DevOps Consulting Services'.split('');

  return (
    <>
      <Header />
      <div className="relative bg-gradient-to-b from-[#2e6b6e] to-gray-800 min-h-screen overflow-hidden">
        {/* Particle Background */}
        <ParticleBackground />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 to-gray-900/10 z-0"></div>

        {/* Hero Section */}
        <section ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
          <div className="flex flex-col items-center text-center">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-6 leading-tight"
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
              className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Transform your development lifecycle with scalable, secure, and automated DevOps solutions.
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
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                  aria-label="Start your DevOps project"
                >
                  <span>Start Your Project</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl bg-gray-800/20 hover:bg-blue-400/10 transition-all duration-300"
                  aria-label="View our DevOps portfolio"
                >
                  <span>View Portfolio</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={heroInView ? 'visible' : 'hidden'}
              variants={sectionVariants}
              className="mt-12 relative w-full max-w-2xl"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-blue-700/20 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
              <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="relative"
              >
                <Image
                  src="/app/untitled-design-7-1-.webp"
                  alt="DevOps Server Rack Visualization"
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="w-full object-contain"
                  priority
                  onError={(e) => (e.currentTarget.src = '/devops/fallback-mockup.webp')}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 mt-24">
          <motion.div
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">DevOps Services</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Streamline your operations with expert DevOps solutions for automation, security, and scalability.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                animate={servicesInView ? 'visible' : 'hidden'}
                variants={{ ...cardVariants, transition: { delay: idx * 0.2 } }}
                whileHover={{ scale: 1.2, zIndex: 10 }}
                className="group relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-full p-10 text-center border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300 shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-blue-500/10 rounded-full">
                    <service.icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-200 text-sm">{service.desc}</p>
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 text-xs mt-3"
                  >
                    {service.details}
                  </motion.p>
                </div>
              </motion.div>
            ))}
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">DevOps Tech</span> Stack
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Cutting-edge tools for building efficient and scalable DevOps solutions.
            </p>
          </motion.div>
          <div className="relative space-y-12">
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                animate={technologiesInView ? 'visible' : 'hidden'}
                variants={{ ...cardVariants, transition: { delay: idx * 0.2 } }}
                whileHover={{ y: -10, boxShadow: '0 12px 24px rgba(59, 130, 246, 0.3)' }}
                className="relative bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 flex-shrink-0 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Image
                      src={tech.icon}
                      alt={tech.title}
                      width={40}
                      height={40}
                      className="object-contain"
                      onError={(e) => (e.currentTarget.src = '/devops/fallback-tech-icon.webp')}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{tech.title}</h3>
                    <p className="text-gray-200 text-sm mb-4">{tech.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {tech.features.map((feature, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-gray-700/50 rounded-full text-blue-300">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Supporting Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {[
                { name: 'Jenkins', icon: '/app/jenkins-logo-11609365847mufysaivph.png' },
                { name: 'GitLab', icon: '/app/gitla.png' },
                { name: 'Prometheus', icon: '/app/proi.png' },
                { name: 'Ansible', icon: '/app/0_8vX5JpOW5pL15nDD.png' },
                { name: 'AWS', icon: '/app/aws-1.webp' },
              ].map((tool, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={technologiesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center p-2 border border-gray-600/30 hover:border-blue-400/30 transition-colors">
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={32}
                      height={32}
                      className="object-contain filter grayscale hover:grayscale-0 transition-all"
                      onError={(e) => (e.currentTarget.src = '/devops/fallback-tech-icon.webp')}
                    />
                  </div>
                  <span className="text-sm text-gray-200">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section ref={processRef} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 mt-24">
          <motion.div
            initial="hidden"
            animate={processInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">DevOps Process</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              A dynamic approach to delivering scalable and efficient DevOps solutions.
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute hidden lg:block top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-blue-500 to-blue-700 transform -translate-x-1/2"></div>
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                animate={processInView ? 'visible' : 'hidden'}
                variants={{ ...cardVariants, transition: { delay: idx * 0.15 } }}
                className={`relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300 shadow-lg mb-8 ${
                  idx % 2 === 0 ? 'lg:ml-12 lg:mr-auto' : 'lg:mr-12 lg:ml-auto'
                } w-full lg:w-1/2`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-200 text-sm">{step.desc}</p>
                  </div>
                </div>
                <motion.div
                  className="absolute top-1/2 -left-8 lg:left-auto lg:right-[-18px] w-4 h-4 bg-blue-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={processInView ? { scale: 1 } : {}}
                  transition={{ delay: idx * 0.15 + 0.3 }}
                ></motion.div>
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">DevOps Projects</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Discover our transformative DevOps solutions in action.
            </p>
          </motion.div>
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              {showcaseProjects.map((project, idx) => (
                <motion.div
                  key={idx}
                  className="min-w-full px-4"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                >
                  <div className="group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-400/30 shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent z-10"></div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => (e.currentTarget.src = '/devops/fallback-project-image.webp')}
                    />
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                      <div className="mb-3 flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-xs px-3 py-1 bg-gray-700/50 rounded-full text-blue-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-200 text-sm mb-4">{project.desc}</p>
                      <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
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
            </motion.div>
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + showcaseProjects.length) % showcaseProjects.length)}
                className="p-2 bg-gray-800/50 rounded-full text-blue-400 hover:bg-blue-400/20 transition-all"
                aria-label="Previous project"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % showcaseProjects.length)}
                className="p-2 bg-gray-800/50 rounded-full text-blue-400 hover:bg-blue-400/20 transition-all"
                aria-label="Next project"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={ctaRef} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 mt-24 pb-24">
          <motion.div
            initial="hidden"
            animate={ctaInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 sm:p-12 border border-gray-700/50"
          >
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">DevOps Pipeline</span>?
              </h2>
              <p className="text-lg text-gray-200 mb-6">
                Partner with us to build scalable, secure, and automated DevOps solutions tailored to your needs.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" passHref>
  <motion.a
    variants={buttonVariants}
    whileHover="hover"
    whileTap="tap"
    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all"
    aria-label="Go to Contact Us page"
  >
    Request Consultation
  </motion.a>
</Link>
              </form>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50">
              <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <FaRocket className="text-blue-400 text-2xl" />
                  </div>
                  <p className="text-sm text-gray-200 italic">
                    "Their DevOps expertise reduced our deployment time by 60% and improved system reliability." - John Doe, CTO
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Floating CTA */}
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: 'spring' }}
        >
          <Link
            href="/contact"
            className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full shadow-md hover:shadow-blue-500/30 transition-all"
            aria-label="Chat with us about DevOps consulting"
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

// Animation variants for text
const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};