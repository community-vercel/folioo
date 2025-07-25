'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiTarget, FiZap, FiClock, FiUsers, FiStar, FiShield, FiTrendingUp, FiLayers, FiGlobe } from 'react-icons/fi';
import { BsFillRocketFill, BsShieldLock } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import Header from '@/app/components/Header';
import Footer from '@/app/components/ai/Footer';

// Updated Reseller Benefits with more details
const resellerBenefits = [
  {
    title: 'Lucrative Commissions',
    description: 'Earn up to 50% commissions on our comprehensive IT solutions portfolio, including cloud, cybersecurity, and AI-driven services.',
    icon: FiTrendingUp,
    color: 'bg-[#446f70] text-white',
  },
  {
    title: 'White-Label Solutions',
    description: 'Fully customize our solutions with your branding, enabling seamless integration into your existing service offerings.',
    icon: FiLayers,
    color: 'bg-[#446f70] text-white',
  },
  {
    title: '24/7 Dedicated Support',
    description: 'Access our expert support team around the clock to assist with sales, technical queries, and client management.',
    icon: FiUsers,
    color: 'bg-[#446f70] text-white',
  },
  {
    title: 'Cutting-Edge Technology',
    description: 'Offer your clients the latest in cloud infrastructure, AI-driven analytics, and robust cybersecurity solutions.',
    icon: BsFillRocketFill,
    color: 'bg-[#446f70] text-white',
  },
  {
    title: 'Proven Success',
    description: 'Join over 500 resellers worldwide who have scaled their businesses with Nova’s trusted IT solutions.',
    icon: FiStar,
    color: 'bg-[#446f70] text-white',
  },
  {
    title: 'Compliance Ready',
    description: 'Deliver solutions pre-configured for HIPAA, SOC 2, GDPR, and other global compliance standards.',
    icon: BsShieldLock,
    color: 'bg-[#446f70] text-white',
  },
];

// Updated Testimonials with more impactful quotes
const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechTrend Solutions',
    quote: 'Partnering with Nova transformed our business. We boosted revenue by 65% in just one year with their scalable solutions.',
    avatar: '/app/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.avif',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, SecureIT Partners',
    quote: 'Nova’s white-label solutions saved us months of development and allowed us to focus on client acquisition.',
    avatar: '/app/uii.jpg',
  },
  {
    name: 'David Rodriguez',
    role: 'Technology Consultant',
    quote: 'Nova’s enterprise-grade solutions give my small business clients a competitive edge at affordable rates.',
    avatar: '/app/uu2.jpg',
  },
  {
    name: 'Emily Carter',
    role: 'Director, CloudSync IT',
    quote: 'The support and training from Nova are unmatched. We closed our biggest deal thanks to their expert guidance.',
    avatar: '/app/uu2.jpg',
  },
];

// Updated FAQs with additional questions
const faqs = [
  {
    question: 'What types of IT solutions can I resell?',
    answer: 'Our portfolio includes cloud infrastructure (IaaS, PaaS, SaaS), advanced cybersecurity, AI/ML solutions, DevOps tools, and compliance-ready platforms for industries like healthcare, finance, and retail.',
  },
  {
    question: 'How are commissions paid?',
    answer: 'Commissions are paid monthly via direct deposit or wire transfer. You’ll have access to a partner portal with detailed earnings reports and analytics.',
  },
  {
    question: 'Is there technical training available?',
    answer: 'Yes, we offer comprehensive onboarding, regular webinars, and hands-on technical training to ensure you’re equipped to sell and support our solutions.',
  },
  {
    question: 'What marketing support do you offer?',
    answer: 'We provide co-branded marketing materials, email campaign templates, social media assets, and lead-sharing programs to help you attract and convert clients.',
  },
  {
    question: 'Can I scale my partnership level?',
    answer: 'Absolutely! Start with our Starter tier and upgrade to Professional or Enterprise as your business grows, unlocking higher commissions and exclusive benefits.',
  },
];

// Updated Partner Tiers with more details
const partnerTiers = [
  {
    tier: 'Starter',
    commission: 'Up to 30%',
    investment: '$0 upfront',
    bestFor: 'Individual consultants and small agencies',
    features: ['Basic training', 'Marketing materials', 'Email support', 'Access to partner portal'],
  },
  {
    tier: 'Professional',
    commission: 'Up to 40%',
    investment: '$299/month',
    bestFor: 'Growing IT service providers',
    features: ['Priority support', 'Dedicated account manager', 'Advanced sales training', 'Lead-sharing program'],
  },
  {
    tier: 'Enterprise',
    commission: 'Up to 50%',
    investment: 'Custom pricing',
    bestFor: 'Large MSPs and technology firms',
    features: ['Co-marketing funds', 'Technical pre-sales support', 'Custom solutions', 'Exclusive partner events'],
  },
];

// New Success Stories Data
const successStories = [
  {
    title: 'TechTrend Solutions',
    description: 'Grew their client base by 200% in 18 months by leveraging Nova’s white-label cloud solutions.',
    logo: '/app/techtrend-logo.png',
    metrics: '200% Client Growth, $1.2M Revenue Increase',
  },
  {
    title: 'SecureIT Partners',
    description: 'Closed a Fortune 500 deal with Nova’s cybersecurity suite, earning $500K in commissions.',
    logo: '/app/secureit-logo.png',
    metrics: '$500K Commissions, 3-Year Contract',
  },
  {
    title: 'CloudSync IT',
    description: 'Expanded into new markets with Nova’s AI-driven analytics, doubling their recurring revenue.',
    logo: '/app/cloudsync-logo.png',
    metrics: '2X Revenue, 150+ New Clients',
  },
];

export default function ServicesPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <div className="font-sans bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#446f70] to-[#2a4a4b] py-24 px-6 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold tracking-tight"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Become a Nova IT Reseller
            </motion.h1>
            <motion.p
              className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Empower Your Business with Cutting-Edge IT Solutions and Lucrative Revenue Streams
            </motion.p>
            <motion.div
              className="mt-8 flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Link href="/contact">
                <button className="bg-white text-[#446f70] font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all">
                  Start Earning Today
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-[#446f70] transition-all">
                  Explore Solutions
                </button>
              </Link>
            </motion.div>
          </div>
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000"></div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { end: 500, label: 'Active Resellers', suffix: '+' },
                { end: 50, label: 'Annual Reseller Earnings', prefix: '$', suffix: 'M+' },
                { end: 120, label: 'IT Solutions Available', suffix: '+' },
                { end: 24, label: 'Support Availability', suffix: '/7' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-8 bg-gray-50 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <CountUp
                    end={stat.end}
                    duration={3}
                    prefix={stat.prefix || ''}
                    suffix={stat.suffix || ''}
                    className="text-4xl font-bold text-[#446f70]"
                  />
                  <p className="mt-3 text-gray-600 text-lg">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-24 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Nova</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unlock unparalleled growth opportunities with our industry-leading IT reseller program.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resellerBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className={`p-6 ${benefit.color} flex justify-center`}>
                    <benefit.icon className="w-12 h-12" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
       <section className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto relative">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Start your journey to success in four simple steps.
      </p>
    </div>
    <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12">
      {/* SVG Lines for Desktop (Horizontal) */}
      <svg
        className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 w-full h-1 z-0"
        preserveAspectRatio="none"
        viewBox="0 0 100 1"
      >
        <line
          x1="10"
          y1="0.5"
          x2="90"
          y2="0.5"
          stroke="#446f70"
          strokeWidth="3"
          strokeDasharray="8,4"
        />
        <circle cx="10" cy="0.5" r="6" fill="#446f70" />
        <circle cx="36.67" cy="0.5" r="6" fill="#446f70" />
        <circle cx="63.33" cy="0.5" r="6" fill="#446f70" />
        <circle cx="90" cy="0.5" r="6" fill="#446f70" />
      </svg>
      {/* SVG Lines for Mobile (Vertical) */}
      <svg
        className="md:hidden absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 z-0"
        preserveAspectRatio="none"
        viewBox="0 0 1 100"
      >
        <line
          x1="0.5"
          y1="5"
          x2="0.5"
          y2="95"
          stroke="#446f70"
          strokeWidth="3"
          strokeDasharray="8,4"
        />
        <circle cx="0.5" cy="5" r="6" fill="#446f70" />
        <circle cx="0.5" cy="35" r="6" fill="#446f70" />
        <circle cx="0.5" cy="65" r="6" fill="#446f70" />
        <circle cx="0.5" cy="95" r="6" fill="#446f70" />
      </svg>
      {[
        { step: 'Apply', desc: 'Submit your application to join our reseller network.', number: 1 },
        { step: 'Train', desc: 'Complete our comprehensive onboarding and training program.', number: 2 },
        { step: 'Sell', desc: 'Offer Nova’s solutions to your clients with confidence.', number: 3 },
        { step: 'Earn', desc: 'Enjoy recurring commissions and grow your revenue.', number: 4 },
      ].map((step, index) => (
        <motion.div
          key={index}
          className="relative text-center p-6 bg-gray-50 rounded-lg shadow-sm z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-[#446f70] font-bold text-xl">{step.number}</span>
          </div>
          <h3 className="font-semibold text-lg mb-2">{step.step}</h3>
          <p className="text-gray-600 text-sm">{step.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

        {/* Success Stories Section */}
       

        {/* Testimonials */}
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Partners Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from resellers who’ve transformed their businesses with Nova.
              </p>
            </div>
            <div className="relative h-80">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-8 rounded-xl shadow-md absolute inset-0"
                >
                  <div className="flex flex-col items-center text-center h-full justify-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full mb-4 overflow-hidden">
                      <img
                        src={testimonials[activeTestimonial].avatar}
                        alt={testimonials[activeTestimonial].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-lg italic mb-4 text-gray-600">"{testimonials[activeTestimonial].quote}"</p>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonials[activeTestimonial].name}</p>
                      <p className="text-sm text-gray-600">{testimonials[activeTestimonial].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${activeTestimonial === index ? 'bg-[#446f70]' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Partner Tiers */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Partner Tiers</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Select a tier that aligns with your business goals and scale as you grow.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnerTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  className={`bg-white rounded-xl overflow-hidden shadow-md ${index === 1 ? 'border-4 border-[#446f70] relative' : ''}`}
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {index === 1 && (
                    <div className="absolute top-0 right-0 bg-[#446f70] text-white text-xs font-bold px-4 py-2 rounded-bl-lg">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="bg-[#446f70] text-white p-8">
                    <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
                    <p className="text-blue-200 mb-4">{tier.bestFor}</p>
                    <div className="text-3xl font-bold mb-4">{tier.commission}</div>
                    <p className="text-sm text-blue-200">Investment: {tier.investment}</p>
                  </div>
                  <div className="p-8">
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <button
                        className={`w-full py-3 rounded-lg font-bold ${
                          index === 1
                            ? 'bg-[#446f70] text-white hover:bg-[#2a4a4b]'
                            : 'bg-gray-100 text-[#446f70] hover:bg-gray-200'
                        }`}
                      >
                        Get Started
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about our reseller program.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  >
                    <h3 className="font-semibold text-lg text-gray-900">{faq.question}</h3>
                    <svg
                      className={`w-6 h-6 text-[#446f70] transition-transform ${activeFaq === index ? 'transform rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 bg-white"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 px-6 bg-[#446f70] text-white">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ready to Transform Your IT Business?
            </motion.h2>
            <motion.p
              className="text-xl mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Join Nova’s reseller program and start earning recurring revenue with our cutting-edge solutions.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link href="/contact">
                <button className="bg-white text-[#446f70] font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all">
                  Apply Now
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-[#446f70] transition-all">
                  Explore Solutions
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}