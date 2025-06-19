'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FaRocket, FaUsers, FaLightbulb, FaStar, FaGlobe, FaMobileAlt } from 'react-icons/fa';
import { IoMdRibbon } from 'react-icons/io';
import Header from '../components/Header';
import Footer from '../components/ai/Footer';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.4 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

const cardHoverVariants = {
  hover: {
    y: -12,
    scale: 1.05,
    boxShadow: '0 25px 40px rgba(0, 0, 0, 0.2), 0 0 20px rgba(6, 182, 212, 0.3)',
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const pulseVariants = {
  initial: { scale: 1 },
  pulse: { scale: [1, 1.08, 1], transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' } },
};

const counterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (count) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' },
  }),
};

export default function AppAboutUs() {
  const refs = {
    mission: useRef(null),
    team: useRef(null),
    values: useRef(null),
    achievements: useRef(null),
    story: useRef(null),
  };

  const inView = {
    mission: useInView(refs.mission, { once: true, margin: '-150px' }),
    team: useInView(refs.team, { once: true, margin: '-150px' }),
    values: useInView(refs.values, { once: true, margin: '-150px' }),
    achievements: useInView(refs.achievements, { once: true, margin: '-150px' }),
    story: useInView(refs.story, { once: true, margin: '-150px' }),
  };

  const teamMembers = [
    { name: 'Adeel Ishfq', role: 'Founder & CEO', image: '/salesforce/Adeel_Ishfq_-_Sharplogicians_CEO.webp', bio: 'Visionary leader with a passion for tech innovation.' },
    { name: 'Umer Akhter', role: 'CEO', image: '/salesforce/Umer_Akhter_Sharplogicians.webp', bio: 'Code wizard crafting seamless digital experiences.' },
    { name: 'Muhammad Inam', role: 'UX/UI Designer', image: '/salesforce/Umer_Akhter_Sharplogicians_1.webp', bio: 'Designs intuitive interfaces that delight users.' },
  ];

  const values = [
    { icon: FaRocket, title: 'Innovation', desc: 'Redefining user experiences with groundbreaking solutions.' },
    { icon: FaUsers, title: 'Collaboration', desc: 'Partnering to turn your vision into reality.' },
    { icon: FaLightbulb, title: 'Excellence', desc: 'Delivering flawless, pixel-perfect apps.' },
    { icon: FaStar, title: 'Passion', desc: 'Fueled by a love for creating impactful tech.' },
  ];

  const achievements = [
    { stat: 100, label: 'Apps Delivered', icon: FaMobileAlt },
    { stat: 95, label: 'Client Satisfaction', icon: IoMdRibbon },
    { stat: 50, label: 'Global Clients', icon: FaGlobe },
  ];
  const milestones = [
  {
    year: 2018,
    title: 'Launched with a trio of dreamers.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    year: 2020,
    title: 'Grew to 15 stars, serving 50 clients.',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    year: 2022,
    title: 'Expanded globally with award-winning apps.',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    year: 2024,
    title: 'Named top agency by TechReview.',
    gradient: 'from-yellow-500 to-orange-500',
  },
];


  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#446f70] via-[#1a1a3d] to-[#2a2a5e] py-32 overflow-hidden">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden opacity-15">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/particles.svg')] opacity-20 animate-float"></div>
          <motion.div
            className="absolute top-[-15%] left-[-5%] w-[900px] h-[900px] bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-4xl"
            animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-[-20%] right-[-5%] w-[800px] h-[800px] bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-full blur-4xl"
            animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.6, 0.05, 0.23, 0.9] }} // Fixed easing
          >
            <motion.div
              variants={pulseVariants}
              initial="initial"
              animate="pulse"
              className="inline-block mb-8"
            >
              <span className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium bg-white/5 text-cyan-300 border border-cyan-500/30 backdrop-blur-lg glow-effect">
                <span className="relative flex h-3 w-3 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </span>
                We're Hiring Visionaries!
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-tight">
              Novabloom
            </h1>

            <motion.p
              className="mt-6 text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
            >
              Crafting stellar digital experiences that transform businesses into cosmic success stories.
            </motion.p>

            <motion.div
              className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
            >
              <Link
                href="/contact"
                className="relative overflow-hidden group inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-300 ripple-effect"
              >
                <span className="relative z-10">Launch Your Project</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>

              <Link
                href="/portfolio"
                className="relative overflow-hidden group inline-flex items-center justify-center px-10 py-4 bg-white/5 text-cyan-300 font-semibold rounded-full border border-cyan-500/30 backdrop-blur-lg hover:bg-white/10 transition-all duration-300"
              >
                <span className="relative z-10">Explore Our Galaxy</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <motion.section
        ref={refs.story}
        initial="hidden"
        animate={inView.story ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="py-28 bg-[#446f70]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <span className="inline-block px-5 py-2.5 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-6">
              Our Cosmic Journey
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
              From Stardust to Supernova
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed">
                Born in 2018, Novabloom ignited as a spark of passion for tech innovation. Today, we’re a constellation of creators, orbiting around a mission to craft apps that light up the digital universe.
              </p>
            </div>
          </motion.div>

   <div className="relative py-20">
      {/* Vertical timeline line */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-1 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-40 glow-effect animate-pulse" />
      </div>

      {/* Timeline content */}
      <div className="relative max-w-5xl mx-auto space-y-20 px-6 sm:px-8">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={itemVariants}
            className={`relative flex flex-col sm:flex-row items-center gap-8 ${
              index % 2 === 0 ? 'sm:flex-row-reverse text-right' : ''
            }`}
          >
            {/* Year badge */}
            <div
              className={`w-20 h-20 flex-shrink-0 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-xl border-4 border-white/20 bg-gradient-to-br ${milestone.gradient} glow-effect`}
            >
              {milestone.year}
            </div>

            {/* Text Content */}
            <div className="max-w-xl">
              <div
                className={`p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg transition hover:scale-[1.02] hover:shadow-neon-cyan duration-300 ${
                  index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'
                }`}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                  Milestone {index + 1}
                </h3>
                <p className="text-gray-300">{milestone.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        ref={refs.mission}
        initial="hidden"
        animate={inView.mission ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="py-28 bg-gradient-to-br from-[#446f70] to-[#2a2a5e]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <span className="inline-block px-5 py-2.5 rounded-full text-sm font-medium bg-purple-500/10 text-purple-300 border border-purple-500/30 mb-6">
              Our Purpose
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
              Mission & Vision
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed">
                We’re on a mission to turn bold ideas into stellar apps, envisioning a universe where technology amplifies human potential.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Our Mission',
                desc: 'To empower businesses with innovative apps that drive growth and connect with audiences on a cosmic scale.',
                icon: <FaRocket className="w-8 h-8 text-cyan-400" />,
              },
              {
                title: 'Our Vision',
                desc: 'To lead the digital frontier, crafting apps that redefine excellence and inspire global transformation.',
                icon: <FaLightbulb className="w-8 h-8 text-purple-400" />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={cardHoverVariants.hover}
                className="bg-white/5 rounded-2xl backdrop-blur-lg border border-cyan-500/20 overflow-hidden glow-effect"
              >
                <div className="p-10">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 px-10 py-6 border-t border-cyan-500/20">
                  <p className="text-sm font-medium text-gray-400">
                    {i === 0 ? 'Your success is our orbit.' : 'Shaping the future, one app at a time.'}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
     

      {/* Team Section */}
      <motion.section
        ref={refs.team}
        initial="hidden"
        animate={inView.team ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="py-28 bg-[#446f70]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <span className="inline-block px-5 py-2.5 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-6">
              Our Crew
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
              Meet the Stargazers
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed">
                A constellation of innovators, designers, and developers united by a passion for crafting stellar apps.
              </p>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative group overflow-hidden rounded-2xl bg-white/5 border border-cyan-500/20 backdrop-blur-lg glow-effect perspective"
              >
                <motion.div
                  className="relative w-full h-96 card-inner"
                  initial={false}
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  {/* Front Face */}
                  <motion.div className="absolute inset-0 backface-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading={i === 0 ? 'eager' : 'lazy'}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    </div>
                    <div className="absolute bottom-0 p-8 text-center w-full">
                      <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                      <p className="text-sm text-gray-300">{member.role}</p>
                      <div className="mt-4 flex justify-center space-x-3">
                        {Array(3)
                          .fill()
                          .map((_, star) => (
                            <FaStar key={star} className="w-4 h-4 text-yellow-400" />
                          ))}
                      </div>
                    </div>
                  </motion.div>
                  {/* Back Face */}
                  <motion.div className="absolute inset-0 backface-hidden bg-gradient-to-br from-cyan-500/10 to-purple-500/10 flex items-center justify-center p-8 text-center rotate-y-180">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{member.name}</h3>
                      <p className="text-gray-300 mb-4">{member.bio}</p>
                      <div className="flex justify-center space-x-4">
                        <a href="#" className="text-cyan-400 hover:text-cyan-300">
                          <FaRocket className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-cyan-400 hover:text-cyan-300">
                          <FaUsers className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-20 text-center">
            <Link
              href="/careers"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-xl text-white bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 glow-effect"
            >
              Join Our Constellation
              <svg className="ml-3 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        ref={refs.values}
        initial="hidden"
        animate={inView.values ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="py-28 bg-gradient-to-br from-[#446f70] to-[#1a1a3d]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <span className="inline-block px-5 py-2.5 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-6">
              Our Core
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
              Guiding Stars
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed">
                The values that propel us to create extraordinary digital experiences.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((val, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={cardHoverVariants.hover}
                className="bg-white/5 rounded-xl backdrop-blur-lg border border-cyan-500/20 overflow-hidden glow-effect"
              >
                <div className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-6">
                    <val.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                  <p className="text-gray-300">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        ref={refs.achievements}
        initial="hidden"
        animate={inView.achievements ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="py-28 bg-[#446f70]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <span className="inline-block px-5 py-2.5 rounded-full text-sm font-medium bg-purple-500/10 text-purple-300 border border-purple-500/30 mb-6">
              Our Milestones
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
              Stellar Achievements
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed">
                Numbers that reflect our journey and the impact we’ve made across the globe.
              </p>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                variants={counterVariants}
                custom={a.stat}
                className="bg-white/5 rounded-xl backdrop-blur-lg border border-cyan-500/20 p-10 glow-effect"
              >
                <div className="text-5xl font-extrabold text-cyan-400 mb-3 flex items-center justify-center">
                  <a.icon className="mr-4 text-purple-400" />
                  <motion.span
                    initial={{ opacity: 0, textContent: 0 }}
                    animate={inView.achievements ? { opacity: 1, textContent: a.stat } : { opacity: 0 }}
                    transition={{ duration: 2, ease: 'easeOut' }}
                  >
                    {a.stat}
                  </motion.span>
                  {a.label === 'Client Satisfaction' && '%'}
                </div>
                <div className="text-lg font-medium text-gray-300">{a.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-24 text-center">
            <div className="max-w-3xl mx-auto bg-white/5 rounded-xl backdrop-blur-lg border border-cyan-500/20 p-10 glow-effect">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Shine?</h3>
              <p className="text-gray-300 mb-6">
                Let’s create something extraordinary. Our team is ready to launch your vision into orbit.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-xl text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 glow-effect"
              >
                Start Your Journey
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}

