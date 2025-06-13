'use client';

import TestimonialSlider from '@/app/components/ecommerece/woocommerce/TestimonialSlider';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Footer from '@/app/components/ecommerece/Footer';

import BigCommerceHero from '@/app/components/ecommerece/bigCommerce/igCommerceHero';
import WoocommerceDevelopmentSection from '@/app/components/ecommerece/bigCommerce/igDevelopmentSection';
import WooCommerceHero from '@/app/components/ecommerece/bigCommerce/bigCommerceHero';
import PublicBigCommerceApps from '@/app/components/ecommerece/bigCommerce/ublicBigCommerceApps';
import CommerceSolutions from '@/app/components/ecommerece/bigCommerce/bigCommerceServices';
import WhyChooseBigCommerce from '@/app/components/ecommerece/bigCommerce/WhyChooseBigCommerce';
import CommercebigWhy from '@/app/components/ecommerece/bigCommerce/CommercebigWhy';
import CommercebigExpertise from '@/app/components/ecommerece/bigCommerce/CommercebigExpertise';
import CaseStudySlider from '@/app/components/ecommerece/bigCommerce/CaseStudySlider';
import FaqAndContactSection from '@/app/components/ecommerece/bigCommerce/FaqAndContactSection';
import Header from '@/app/components/ecommerece/Header';
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
    <Header />
    <BigCommerceHero />

{/* <ShopifyHero /> */}
      {/* <CaseStudies /> */}
<WoocommerceDevelopmentSection />

            <WooCommerceHero />
      <PublicBigCommerceApps />
      <CommerceSolutions />
      <WhyChooseBigCommerce />
<CommercebigWhy />
                              <CommercebigExpertise />

      <CaseStudySlider />

                              <TestimonialSlider />

                                    <FaqAndContactSection />

                


<Footer />

</>
      );
    }