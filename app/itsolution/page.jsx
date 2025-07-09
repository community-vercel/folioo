'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiTarget, FiZap, FiClock, FiUsers, FiStar, FiShield, FiTrendingUp, FiLayers, FiGlobe } from 'react-icons/fi';
import { BsFillRocketFill, BsShieldLock } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import Header from '@/app/components/Header';
import Footer from '@/app/components/ai/Footer';

const resellerBenefits = [
  {
    title: 'Lucrative Commissions',
    description: 'Earn industry-leading commissions up to 50% on our comprehensive IT solutions portfolio.',
    icon: FiTrendingUp,
    color: 'bg-[#446f70] text-white'
  },
  {
    title: 'White-Label Solutions',
    description: 'Brand our solutions as your own with complete white-labeling options for all services.',
    icon: FiLayers,
    color: 'bg-[#446f70] text-white'
  },
  {
    title: 'Dedicated Support',
    description: '24/7 expert support team to help you close deals and manage client relationships.',
    icon: FiUsers,
    color: 'bg-[#446f70] text-white'
  },
  {
    title: 'Cutting-Edge Technology',
    description: 'Access to the latest cloud, cybersecurity, and AI-driven solutions for your clients.',
    icon: BsFillRocketFill,
    color: 'bg-[#446f70] text-white'
  },
  {
    title: 'Proven Track Record',
    description: 'Join 500+ successful resellers who trust Nova for their IT solutions portfolio.',
    icon: FiStar,
    color: 'bg-[#446f70] text-white'
  },
  {
    title: 'Compliance Ready',
    description: 'Pre-configured compliance for HIPAA, SOC 2, and GDPR to meet strict regulations.',
    icon: BsShieldLock,
    color: 'bg-[#446f70] text-white'
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'IT Solutions Provider',
    quote: 'Nova helped us expand our service offerings without heavy upfront investments. Our revenue grew 65% in the first year.',
    avatar: '/app/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.avif'
  },
  {
    name: 'Michael Chen',
    role: 'Managed Service Provider',
    quote: 'The white-label options allowed us to quickly brand Nova solutions as our own, saving months of development time.',
    avatar: '/app/uii.jpg'
  },
  {
    name: 'David Rodriguez',
    role: 'Technology Consultant',
    quote: 'With Nova, I can offer enterprise-grade solutions to my small business clients at competitive prices.',
    avatar: '/app/uu2.jpg'
  }
];

const faqs = [
  {
    question: 'What types of IT solutions can I resell?',
    answer: 'Our portfolio includes cloud infrastructure, cybersecurity, AI/ML solutions, DevOps tools, and compliance-ready platforms.'
  },
  {
    question: 'How are commissions paid?',
    answer: 'Commissions are paid monthly via direct deposit or wire transfer, with detailed reporting in your partner portal.'
  },
  {
    question: 'Is there technical training available?',
    answer: 'Yes, we provide comprehensive training, sales enablement materials, and regular product updates.'
  },
  {
    question: 'What marketing support do you offer?',
    answer: 'We provide co-branded marketing materials, campaign templates, and lead sharing for qualified opportunities.'
  }
];

const partnerTiers = [
  {
    tier: 'Starter',
    commission: 'Up to 30%',
    investment: '$0 upfront',
    bestFor: 'Individual consultants and small agencies',
    features: ['Basic training', 'Marketing materials', 'Email support']
  },
  {
    tier: 'Professional',
    commission: 'Up to 40%',
    investment: '$299/month',
    bestFor: 'Growing IT service providers',
    features: ['Priority support', 'Dedicated account manager', 'Sales training']
  },
  {
    tier: 'Enterprise',
    commission: 'Up to 50%',
    investment: 'Custom',
    bestFor: 'Large MSPs and technology firms',
    features: ['Co-marketing funds', 'Technical pre-sales support', 'Custom solutions']
  }
];

export default function ITResellerPage() {
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
        <section className="relative bg-[#446f70] py-20 px-6 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Join Nova’s IT Reseller Program
            </motion.h1>
            <motion.p
              className="mt-4 text-lg md:text-xl max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
Empowering Growth Through Smart IT & Digital Innovation            </motion.p>
           <motion.p
              className="mt-4 text-sm md:text-sm max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
Building smarter Enterprises through seamless integration of cutting edge IT Hardware,software, and digital strategies         </motion.p>
      
          </div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-20 left-20 w-64 h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-40 right-32 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-60 h-60 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <CountUp end={500} duration={3} className="text-4xl font-bold text-[#446f70]" />
                <p className="mt-2 text-gray-600">Active Resellers</p>
              </div>
              <div className="p-6">
                <CountUp end={50} duration={3} prefix="$" suffix="M+" className="text-4xl font-bold text-[#446f70]" />
                <p className="mt-2 text-gray-600">Annual Reseller Earnings</p>
              </div>
              <div className="p-6">
                <CountUp end={120} duration={3} className="text-4xl font-bold text-[#446f70]" />
                <p className="mt-2 text-gray-600">IT Solutions Available</p>
              </div>
              <div className="p-6">
                <CountUp end={24} duration={3} suffix="/7" className="text-4xl font-bold text-[#446f70]" />
                <p className="mt-2 text-gray-600">Support Availability</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Partner With Nova</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to grow your IT services business profitably
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resellerBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className={`p-6 ${benefit.color} flex justify-center`}>
                    <benefit.icon className="w-10 h-10" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple Partner Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Start reselling in just a few easy steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#446f70] font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold mb-2">Apply</h3>
                <p className="text-gray-600 text-sm">Complete our simple partner application</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#446f70] font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold mb-2">Train</h3>
                <p className="text-gray-600 text-sm">Complete onboarding and training</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#446f70] font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold mb-2">Sell</h3>
                <p className="text-gray-600 text-sm">Start offering solutions to your clients</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#446f70] font-bold text-xl">4</span>
                </div>
                <h3 className="font-semibold mb-2">Earn</h3>
                <p className="text-gray-600 text-sm">Get paid recurring commissions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Partners Say</h2>
            </div>
            
            <div className="relative h-64">
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
                    <div className="w-16 h-16 bg-blue-100 rounded-full mb-4 overflow-hidden">
                      <img src={testimonials[activeTestimonial].avatar} alt={testimonials[activeTestimonial].name} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-lg italic mb-4">"{testimonials[activeTestimonial].quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonials[activeTestimonial].name}</p>
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
                  className={`w-3 h-3 rounded-full transition-colors ${activeTestimonial === index ? 'bg-blue-900' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Partner Tiers */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partner Tiers</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the level that matches your business goals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnerTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  className={`bg-[#446f70] rounded-xl overflow-hidden shadow-md ${index === 1 ? 'border-2 border-[#446f70] relative' : ''}`}
                  whileHover={{ scale: 1.03 }}
                >
                  {index === 1 && (
                    <div className="absolute top-0 right-0  text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="bg-[#446f70] text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
                    <p className="text-blue-200 mb-4">{tier.bestFor}</p>
                    <div className="text-3xl font-bold mb-4">{tier.commission}</div>
                    <p className="text-sm text-blue-200">Minimum: {tier.investment}</p>
                  </div>
                  <div className="bg-white p-6">
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <button className={`w-full py-3 rounded-lg font-bold ${index === 1 ? 'bg-[#446f70] text-white hover:bg-blue-800' : 'bg-gray-100 text-[#446f70] hover:bg-gray-200'}`}>
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
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about our reseller program
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  >
                    <h3 className="font-semibold text-lg">{faq.question}</h3>
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

        {/* CTA */}
        <section className="py-20 px-6 bg-[#446f70] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your IT Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of successful partners earning recurring revenue with Nova solutions
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <button className="bg-white text-[#446f70] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all shadow-lg">
                  Apply Now
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-[#446f70] transition-all">
                  Schedule a Call
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}