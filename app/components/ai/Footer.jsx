'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane
} from 'react-icons/fa';
import Link from 'next/link';

const officeData = {
  'North America': [
    {
      country: 'USA',
      flag: '/salesforce/USA.webp',
      offices: [
        { icon: <FaMapMarkerAlt />, text: '2457 Lancaster Street East Meadow, NY 11554' },
        { icon: <FaPhoneAlt />, text: '+1 (347) 716-9944 ' },
      ],
    },
  ],
  'Europe': [
    {
      country: 'UK',
      flag: '/salesforce/uk.webp',
      offices: [
        { icon: <FaMapMarkerAlt />, text: 'Export House, Cawsey Way, Woking, Surrey, GU21 6QX' },
        { icon: <FaPhoneAlt />, text: '+44-148-339-7625' },
      ],
    },
  ],
  'Asia': [
    {
      country: 'Pakistan',
      flag: '/salesforce/pakistan.webp',
      offices: [
        { icon: <FaMapMarkerAlt />, text: 'Agile Center Building # 153-M Office # 32' },
        { icon: <FaMapMarkerAlt />, text: '4th Floor, D-Block Civic Center Phase 4' },
        { icon: <FaMapMarkerAlt />, text: 'Islamabad, 46220' },
        { icon: <FaPhoneAlt />, text: '+92-0325-5655555 | +92-51-5913827' },
      ],
    },
  ],
};

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0a1120] via-[#1a243a] to-[#0a1120] text-gray-200 pt-24 pb-12 px-6 sm:px-10 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500 blur-3xl opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-blue-500 blur-3xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Newsletter */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text drop-shadow-xl mb-6">
            Stay Ahead with AI Insights
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Subscribe for the latest AI trends, updates & offers — direct to your inbox.
          </motion.p>
          
          <motion.form
            variants={itemVariants}
            onSubmit={handleNewsletterSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto"
          >
            <div className="relative w-full sm:flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full px-5 py-4 rounded-lg bg-gray-800/80 backdrop-blur-sm text-white border border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 outline-none transition-all duration-300 hover:border-cyan-400/50"
              />
              <FaEnvelope className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Subscribe</span>
                <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
          </motion.form>

          {isSubscribed && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 px-4 py-2 bg-green-500/10 text-green-400 rounded-lg inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Thanks for subscribing!
            </motion.div>
          )}
        </motion.section>

        {/* Office Locations + About */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20"
        >
          {Object.entries(officeData).map(([region, countries]) => (
            <motion.div key={region} variants={itemVariants}>
              <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-700/50 flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                {region}
              </h3>
              {countries.map((office) => (
                <div key={office.country} className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src={office.flag}
                      alt={`${office.country} flag`}
                      width={28}
                      height={28}
                      className="rounded-full border border-gray-600"
                    />
                    <span className="text-white font-semibold">{office.country}</span>
                  </div>
                  <ul className="space-y-3 text-gray-400">
                    {office.offices.map((line, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-cyan-400 mt-1 flex-shrink-0">{line.icon}</span>
                        <span className="text-gray-300 hover:text-white transition-colors">{line.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          ))}

          {/* About Us */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-700/50 flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              About Novabloom
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We're pioneers in AI-driven solutions, transforming businesses with cutting-edge technology and innovative approaches.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>contact@novabloom.com</span>
              </div>
            </div>

            <div>
              <h4 className="text-gray-300 mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                {[
                  { Icon: FaFacebookF, color: 'text-blue-400', hover: 'hover:text-blue-500' },
                  { Icon: FaTwitter, color: 'text-sky-400', hover: 'hover:text-sky-500' },
                  { Icon: FaLinkedinIn, color: 'text-blue-500', hover: 'hover:text-blue-600' },
                  { Icon: FaInstagram, color: 'text-pink-400', hover: 'hover:text-pink-500' },
                ].map(({ Icon, color, hover }, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    aria-label={`Follow us on ${Icon.name.replace('Fa', '')}`}
                    className={`${color} ${hover} text-xl transition-colors duration-300`}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-700/50 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Novabloom. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Cookies</Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Careers</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer