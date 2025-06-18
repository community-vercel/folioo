'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/ai/Footer';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function AppAboutUs() {
  const missionRef = useRef(null);
  const teamRef = useRef(null);
  const valuesRef = useRef(null);
  const achievementsRef = useRef(null);

  const missionInView = useInView(missionRef, { once: true, margin: '-100px' });
  const teamInView = useInView(teamRef, { once: true, margin: '-100px' });
  const valuesInView = useInView(valuesRef, { once: true, margin: '-100px' });
  const achievementsInView = useInView(achievementsRef, { once: true, margin: '-100px' });

  const teamMembers = [
    { name: 'Adeel Ishfq', role: 'Founder & CEO', image: '/salesforce/Adeel_Ishfq_-_Sharplogicians_CEO.webp' },
    { name: 'Umer Akhter', role: 'Lead Developer', image: '/salesforce/Umer_Akhter_Sharplogicians.webp' },
    { name: 'Muhammad Inam', role: 'UX/UI Designer', image: '/salesforce/Umer_Akhter_Sharplogicians_1.webp' },
  ];

  const values = [
    { icon: FaRocket, title: 'Innovation', desc: 'We push boundaries with cutting-edge app solutions.' },
    { icon: FaUsers, title: 'Collaboration', desc: 'We partner closely with clients to achieve success.' },
    { icon: FaLightbulb, title: 'Excellence', desc: 'We deliver top-quality apps that exceed expectations.' },
  ];

  const achievements = [
    { stat: '100+', label: 'Apps Delivered' },
    { stat: '95%', label: 'Client Satisfaction' },
    { stat: '50+', label: 'Global Clients' },
  ];

  return (
    <>
      <Header />
      <section className="relative bg-gradient-to-b from-[#f8fafc] to-[#e0f0ff] py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <div className="absolute top-0 left-10 w-[500px] h-[500px] bg-cyan-300 rounded-full blur-4xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600 rounded-full blur-4xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700 mb-6"
          >
            About Novabloom
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={{ ...sectionVariants, transition: { delay: 0.2 } }}
            className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-8"
          >
            We’re a passionate team crafting innovative mobile and web apps that transform businesses.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ ...sectionVariants, transition: { delay: 0.4 } }}
          >
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>

        <motion.div ref={missionRef} initial="hidden" animate={missionInView ? 'visible' : 'hidden'} variants={sectionVariants} className="text-center mt-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our mission is to empower businesses with seamless, scalable app solutions. We envision a world where every idea finds its perfect digital expression.
          </p>
        </motion.div>

        <motion.div ref={teamRef} initial="hidden" animate={teamInView ? 'visible' : 'hidden'} variants={sectionVariants} className="mt-24">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">Meet Our Team</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Talented professionals bringing passion and precision to every project.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate={teamInView ? 'visible' : 'hidden'}
                variants={{ ...cardVariants, transition: { delay: i * 0.2 } }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-300"
              >
                <Image src={member.image} alt={member.name} width={400} height={400} className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div ref={valuesRef} initial="hidden" animate={valuesInView ? 'visible' : 'hidden'} variants={sectionVariants} className="mt-24">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">Our Core Values</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Our core beliefs guide everything we do.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate={valuesInView ? 'visible' : 'hidden'}
                variants={{ ...cardVariants, transition: { delay: i * 0.2 } }}
                className="bg-white rounded-2xl shadow-xl p-6 text-center hover:-translate-y-2 transition-all duration-300"
              >
                <val.icon className="text-cyan-600 w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{val.title}</h3>
                <p className="text-sm text-gray-600">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div ref={achievementsRef} initial="hidden" animate={achievementsInView ? 'visible' : 'hidden'} variants={sectionVariants} className="mt-24 pb-24">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">Our Achievements</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Impact and excellence recognized globally.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 px-6 text-center">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate={achievementsInView ? 'visible' : 'hidden'}
                variants={{ ...cardVariants, transition: { delay: i * 0.2 } }}
              >
                <div className="text-4xl font-extrabold text-cyan-600 mb-2">{a.stat}</div>
                <div className="text-base text-gray-700">{a.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}