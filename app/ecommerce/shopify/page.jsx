'use client';
import CaseStudies from '@/app/components/ecommerece/shopify/CaseStudies';
import PartnersSection from '@/app/components/ecommerece/shopify/PartnersSection';
import ShopifyDevelopmentSection from '@/app/components/ecommerece/shopify/ShopifyDevelopmentSection';
import ShopifyHero from '@/app/components/ecommerece/shopify/ShopifyHero';
import ShopifyServicesSection from '@/app/components/ecommerece/shopify/ShopifyServicesSection';
import TestimonialSlider from '@/app/components/ecommerece/shopify/TestimonialSlider';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Footer from '@/app/components/ecommerece/Footer';
import Header from '@/app/components/ecommerece/Header';
import Link from 'next/link';
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





export default function Shopify() {
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

     <Header />
      {/* Hero Section */}
      <motion.main
        className="max-w-[1440px] mx-auto px-6 py-20 lg:py-12 relative"
        initial="hidden"
        animate={heroInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
        ref={heroViewRef}
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-[#071218]/80">
          <motion.img
            src="https://ecommerce.folio3.com/wp-content/uploads/hero-bg.webp"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
        </div>

        {/* Shopify Mockup with Parallax */}
 

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div className="flex-1 max-w-[600px]" variants={fadeInLeft}>
            <motion.p
              className="text-xs text-[#6BE18F] uppercase font-medium tracking-wider mb-4"
              variants={fadeInLeft}
            >
              <AnimatedText text="Premier Shopify Experts" />
            </motion.p>
            <motion.h1
              className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#6BE18F]"
              variants={fadeInLeft}
            >
              <AnimatedText text="Elevate Your Shopify Store with Expert Solutions" />
            </motion.h1>
            <motion.p
              className="text-sm text-gray-200 mb-6 leading-relaxed"
              variants={fadeInLeft}
            >
              At <strong className="text-[#6BE18F]">Nova Bloom</strong>, we craft high-performance Shopify
              stores designed to convert and scale seamlessly.
            </motion.p>
            <motion.ul
              className="space-y-4 mb-8 text-sm text-gray-200"
                variants={staggerContainer}>
                  {features.map(({ label, text }, index) => (
                    <motion.li
                      key={label}
                      className="flex items-center gap-3 relative"
                      variants={fadeInLeft}
                      onHoverStart={() => setActiveFeature(index)}
                    >
                      <motion.div
                        className={`absolute -left-2 top-0 h-full w-1 rounded-full ${activeFeature === index ? 'bg-[#6BE18F]' : 'bg-[#3f4d45]'}`}
                        initial={false}
                        animate={{ height: '100%' }}
                        transition={{ duration: 0.4 }}
                      />
                      <motion.div
                        className={`h-4 w-4 rounded-full ${activeFeature === index ? 'bg-[#6BE18F]' : 'bg-[#3f4d45]'}`}
                        animate={{ scale: activeFeature === index ? 1.2 : 1 }}
                      />
                      <motion.span
                        animate={{
                          color: activeFeature === index ? '#fff' : '#d1d5db',
                          x: activeFeature === index ? 3 : 0,
                        }}
                      >
                        <strong className="font-semibold">{label}</strong> {text}
                      </motion.span>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div variants={fadeInLeft}>
                  <GlowingButton>
                              <Link href='/contact'>

                    Schedule a Free Consultation
                    </Link>
                    </GlowingButton>
                </motion.div>
              </motion.div>

              <motion.div className="flex-1 max-w-3xl" variants={fadeInRight}>
                <motion.div
                  className="grid grid-cols-2 gap-4 mb-8"
                  variants={staggerContainer}
                >
                  {[
                    { stat: '12+', label: 'Years in Shopify', icon: '/icons/expertise.svg' },
                    { stat: '20+', label: 'Years in Business', icon: '/icons/business.svg' },
                    { stat: '600+', label: 'Experts', icon: '/icons/team.svg' },
                    { stat: 'Top 3%', label: 'Tech Talent', icon: '/icons/talent.svg', isHighlight: true },
                  ].map((item) => (
                    <motion.div
                      key={item.label}
                      className="relative bg-[#1a2e28]/50 backdrop-blur-md p-4 rounded-lg border border-[#3f4d45]/20 shadow-lg hover:bg-[#1a2e28]/30 transition-all"
                      variants={scaleUp}
                      whileHover={{ y: -3 }}
                    >
{/* <img src={item.icon} alt="" className="absolute top-8 right-4 h-8 w-8 opacity-30" /> */}
                      <div className={`text-lg font-bold ${item.isHighlight ? 'text-[#6BE18F]' : 'text-white'}`}>
                        {item.stat}
                      </div>
                        <p className="text-xs text-gray-500">{item.label}</p>
                      </motion.div>
                    ))}
                  </motion.div>
            
              </motion.div>
            </div>
          </motion.main>

        

       
        </div>

<ShopifyHero />
      <CaseStudies />
            <ShopifyDevelopmentSection />
                  <ShopifyServicesSection />
                  <PartnersSection />

                  <TestimonialSlider />

<Footer />

</>
      );
    }