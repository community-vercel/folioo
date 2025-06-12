'use client';
import CaseStudies from '@/app/components/ecommerece/shopify/CaseStudies';
import PartnersSection from '@/app/components/ecommerece/shopify/PartnersSection';
import ShopifyHero from '@/app/components/ecommerece/shopify/ShopifyHero';
import ShopifyServicesSection from '@/app/components/ecommerece/shopify/ShopifyServicesSection';
import TestimonialSlider from '@/app/components/ecommerece/woocommerce/TestimonialSlider';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Footer from '@/app/components/ecommerece/ecommerceFooter';
import WoocommerceDevelopmentSection from '@/app/components/ecommerece/woocommerce/ShopifyDevelopmentSection';
import WooCommerceHero from '@/app/components/ecommerece/woocommerce/WooCommerceHero';
import WooCommerceExpertise from '@/app/components/ecommerece/woocommerce/WooCommerceExpertise';
import WooCommerceServices from '@/app/components/ecommerece/woocommerce/WooCommerceServices';
import WooCommerceWhy from '@/app/components/ecommerece/woocommerce/woocommercewhy';
// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'backOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const pulse = {
  hover: {
    scale: 1.05,
    boxShadow: '0 10px 20px rgba(107, 225, 143, 0.3)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  tap: { scale: 0.98 },
};

const floating = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};

// Particle Background
const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 15 }).map(() => ({
        id: Math.random().toString(36).substring(7),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.2,
        duration: Math.random() * 6 + 3,
        delay: Math.random() * 2,
      }));
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-[#6BE18F] to-[#4CAF50]"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 10 - 5, 0],
            transition: {
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        />
      ))}
    </div>
  );
};

// Glowing Button
const GlowingButton = ({ children, ...props }) => {
  return (
    <motion.button
      className="relative overflow-hidden bg-gradient-to-r from-[#446f70] to-[#446f70] text-[#071218] px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-[0_0_20px_rgba(107,225,143,0.5)] transition-all"
      whileHover={pulse.hover}
      whileTap={pulse.tap}
      {...props}
    >
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-[#6BE18F] to-[#4CAF50] opacity-0"
        animate={{
          opacity: [0, 0.7, 0],
          scale: [1, 1.5, 1],
          transition: { duration: 2, repeat: Infinity },
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

// Animated Text
const AnimatedText = ({ text, className = '' }) => {
  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.span>
    </span>
  );
};





export default function Woocommerce() {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const heroRef = useRef();
  const [heroInView, heroViewRef] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  // Sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { label: 'Build', text: 'custom Shopify stores with precision' },
    { label: 'Sell', text: 'maximize conversions with smart features' },
    { label: 'Scale', text: 'grow effortlessly with robust solutions' },
  ];

  return (
    <>
    <div className=" bg-gradient-to-br from-[#071218] via-[#0a1f15] to-[#012a1a] text-white font-[Inter] overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@700;800&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        h1, h2, h3 {
          font-family: 'Manrope', sans-serif;
        }
      `}</style>

      {/* Particle Background */}
      <ParticleBackground />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-[#6BE18F]/15 blur-xl"
        animate={floating}
      />
      <motion.div
        className="absolute top-2/3 right-1/3 w-28 h-28 rounded-full bg-[#4CAF50]/10 blur-xl"
        animate={{ transition: { delay: 1.5 } }}
      />

      {/* Header */}
      <motion.header
        className={`max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center border border-[#3f4d45]/20 bg-[#1a2e28]/30 backdrop-blur-lg transition-all duration-300 rounded-full ${
          isHeaderSticky ? 'sticky top-4 z-50 shadow-lg' : ''
        }`}
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <motion.span
            className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#6BE18F] to-[#4CAF50]"
            whileHover={{ scale: 1.05 }}
          >
            Nova Bloom
          </motion.span>
          <span className="text-sm text-gray-300">eCommerce</span>
        </div>
        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium">
          {['Case Studies', 'Services', 'Platforms', 'About', 'Blog'].map((item) => (
            <motion.a
              key={item}
              href="#"
              className="text-gray-200 hover:text-[#6BE18F] transition-colors"
              whileHover={{ y: -2 }}
            >
              {item}
              <motion.span
                className="absolute left-0 bottom-[-4px] h-[1px] w-full bg-[#6BE18F] scale-x-0"
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
          <a href="tel:4083654638" className="text-gray-200 hover:text-[#6BE18F]">
            📞 (408) 365-4638
          </a>
          <GlowingButton>Start Free Consultation</GlowingButton>
        </nav>
        <motion.button
          className="lg:hidden text-gray-200"
          onClick={() => setIsMenuOpen(true)}
          whileHover={{ scale: 1.1 }}
          aria-label="Toggle menu"
        >
          ☰
        </motion.button>
      </motion.header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="lg:hidden fixed inset-0 bg-[#071218]/95 backdrop-blur-lg z-60 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6BE18F] to-[#4CAF50]">
              Nova Bloom
            </span>
            <motion.button
              className="text-gray-200"
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ scale: 1.1 }}
              aria-label="Close menu"
            >
              ✕
            </motion.button>
          </div>
          <nav className="flex flex-col gap-4">
            {['Case Studies', 'Services', 'Platforms'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-gray-200 text-sm hover:text-[#6BE18F] py-2"
                onClick={() => setIsMenuOpen(false)}
                variants={fadeIn}
              >
                {item}
              </motion.a>
            ))}
            <a href="tel:4083654638" className="text-gray-200 text-sm py-2">
              📞 (408) 365-4638
            </a>
            <GlowingButton onClick={() => setIsMenuOpen(false)}>
              Start Free Consultation
            </GlowingButton>
          </nav>
        </motion.div>
      )}

      {/* Hero Section */}
 <div className="min-h-screen bg-gradient-to-r from-[#099f70] to-[#382556] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            WooCommerce<br />Development Services
          </h1>
          <p className="text-lg text-gray-300">
            Fast-growing eCommerce brands trust Nova Bloom’s WooCommerce website
            development services to help them:
          </p>
          <ul className="space-y-3 text-base text-gray-200">
            {[
              'Migrate to WooCommerce from other legacy or hosted platforms',
              'Maintain WooCommerce stores to ensure performance & security',
              'Build complex functionality using custom plugins for superior customer experience',
              'Integrate with 3rd party systems to simplify complex commerce'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-white text-xl">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button className="bg-white text-[#446f70] font-semibold px-6 py-3 rounded-full hover:bg-purple-100 transition">
            Book A Free Consultation
          </button>
        </div>

        {/* Right Section */}
        <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-6 text-center lg:w-1/2">
          {[
            { value: '50+', label: 'eCommerce Experts' },
            { value: '10+', label: 'Years of Expertise' },
            { value: '20+', label: 'WooCommerce projects' },
            { value: 'Top 5%', label: 'Tech Talent' }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="border border-gray-500 rounded-lg p-6 text-white"
            >
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
        

       
        </div>

{/* <ShopifyHero /> */}
      {/* <CaseStudies /> */}
            <WoocommerceDevelopmentSection />
            <WooCommerceHero />
                              <TestimonialSlider />
                              <WooCommerceExpertise />
      <WooCommerceServices />
<WooCommerceWhy />
                


<Footer />

</>
      );
    }