'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles';
import Header from '@/app/components/Header';
import Footer from '@/app/components/ai/Footer';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Animation variants
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};
const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
};
const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};
const buttonVariants = {
    hover: { scale: 1.1, boxShadow: '0 0 20px rgba(34, 197, 94, 0.6)', transition: { duration: 0.3 } },
    tap: { scale: 0.9 },
};

// Particle Background
const ParticleBackground = () => (
    <Particles
        id="hero-particles"
        init={loadSlim}
        options={{
            particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: ['#3b82f6', '#22c55e', '#ec4899', '#06b6d4'] },
                shape: { type: 'circle' },
                opacity: { value: 0.6, random: true },
                size: { value: 3, random: true },
                move: {
                    enable: true,
                    speed: 1.5,
                    direction: 'none',
                    random: true,
                    out_mode: 'bounce',
                },
            },
            interactivity: {
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' },
                },
            },
        }}
        className="absolute inset-0 z-0"
    />
);

// Data
const services = [
    {
        title: 'AI-Driven Learning',
        description: 'Personalized platforms with AI analytics and adaptive learning paths.',
        icon: '🤖',
    },
    {
        title: 'Immersive VR/AR',
        description: 'Engage learners with virtual and augmented reality experiences.',
        icon: '🕶️',
    },
    {
        title: 'Microlearning',
        description: 'Deliver bite-sized, engaging content for maximum retention.',
        icon: '📱',
    },
];

const impactStats = [
    { value: '100K+', label: 'Students Empowered' },
    { value: '50+', label: 'Global Clients' },
    { value: '40%', label: 'Engagement Boost' },
];

const platforms = [
    '/app/png-transparent-moodle-original-wordmark-logo-icon.png',
    '/app/png-transparent-canva-hd-logo-thumbnail.png',
    '/app/tlms.png',
    '/app/docebo-logo.png',
];

const caseStudies = [
    {
        title: 'Smart University LMS',
        image: '/app/smart.png',
        description: 'AI-powered LMS for 100K+ students with real-time analytics.',
        slug: 'smart-university-lms',
        content: 'Built for a top-tier university, this LMS supports over 100,000 students with AI-driven personalization, real-time progress tracking, and integrations with Canvas and Zoom. It reduced administrative workload by 35% and boosted student engagement.',
    },
    {
        title: 'Corporate Training Suite',
        image: '/app/b0cae265b86dfb06a027f56e3f1d62d3.webp',
        description: 'Gamified platform for 15K+ employees with VR modules.',
        slug: 'corporate-training-suite',
        content: 'This platform, designed for a Fortune 500 company, features gamification, VR training, and leaderboards. It cut training time by 45% and increased completion rates through engaging, interactive content.',
    },
    {
        title: 'Global Course Marketplace',
        image: '/app/cm98217i50eibro8ze4kr4kq0.webp',
        description: 'Scalable platform for 3,000+ courses with AI recommendations.',
        slug: 'global-course-marketplace',
        content: 'A robust marketplace hosting over 3,000 courses with secure payments, multi-language support, and AI-driven course recommendations. Built with Next.js and AWS, it scales to millions of users seamlessly.',
    },
];

const testimonials = [
    { name: 'Dr. Sarah L.', quote: 'The AI-driven LMS transformed our curriculum delivery!' },
    { name: 'James R.', quote: 'VR training modules took our corporate training to the next level.' },
    { name: 'Emma T.', quote: 'Their platform scaled our course offerings effortlessly.' },
];

export default function ElearningPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        if (!formData.name.trim()) return 'Name is required';
        if (!formData.email.trim()) return 'Email is required';
        if (!/\S+@\S+\.\S+/.test(formData.email)) return 'Invalid email format';
        if (!formData.message.trim()) return 'Message is required';
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: '', message: '' });
        const error = validateForm();
        if (error) {
            setStatus({ type: 'error', message: error });
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                setStatus({ type: 'success', message: 'Message sent successfully!' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({ type: 'error', message: data.message || 'Failed to send message' });
            }
        } catch (err) {
            setStatus({ type: 'error', message: 'An error occurred. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };
    const [formError, setFormError] = useState('');
    const [formSuccess, setFormSuccess] = useState('');





    const headline = 'Empower Learning with Cutting-Edge eLearning'.split('');

    return (
        <>
            <Header />
            <div className="relative bg-gray-950 text-white overflow-hidden font-sans">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-indigo-950 to-emerald-900 py-28 overflow-hidden">
                    <ParticleBackground />
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={sectionVariants}
                        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
                    >
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300 mb-6"
                            variants={textVariants}
                        >
                            {headline.map((letter, idx) => (
                                <motion.span key={idx} variants={letterVariants} className="inline-block">
                                    {letter === ' ' ? '\u00A0' : letter}
                                </motion.span>
                            ))}
                        </motion.h1>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                            Build <span className="font-semibold">scalable, AI-powered, and immersive</span> eLearning platforms for education and training in 2025.
                        </p>
                        <motion.div variants={buttonVariants} className="flex justify-center gap-4">
                            <Link
                                href="#contact"
                                className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-all"
                                aria-label="Get Started"
                            >
                                Get Started
                            </Link>
                            <Link
                                href="#case-studies"
                                className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-white transition-all"
                                aria-label="View Case Studies"
                            >
                                Explore Successes
                            </Link>
                        </motion.div>
                        <div className="mt-12">
                            <Image
                                src="/app/67c0b07edfd5c3a705fb88f5_Open Graph (44).webp"
                                width={1200}
                                height={600}
                                alt="eLearning Platform"
                                className="mx-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
                                onError={(e) => (e.currentTarget.src = '/images/fallback-hero.png')}
                            />
                        </div>
                    </motion.div>
                </section>

                {/* Our Impact Section */}
                <section className="py-16 bg-gray-900 text-center">
                    <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Impact</span>
                        </h2>
                        <div className="grid sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {impactStats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={cardVariants}
                                    className="p-6 bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700"
                                >
                                    <h3 className="text-3xl font-bold text-cyan-400">{stat.value}</h3>
                                    <p className="text-sm text-gray-300 mt-2">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Services Section */}
                <section className="py-16 bg-gray-950 text-center">
                    <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">eLearning Solutions</span>
                        </h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {services.map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={cardVariants}
                                    whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)' }}
                                    className="p-6 bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700 hover:border-cyan-400 transition-all"
                                >
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h3 className="font-semibold text-xl text-white mb-2">{service.title}</h3>
                                    <p className="text-sm text-gray-300">{service.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Platforms Section */}
                <section className="py-16 bg-gray-900 text-center">
                    <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
                            Platforms We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Support</span>
                        </h2>
                        <div className="flex flex-wrap justify-center gap-12">
                            {platforms.map((src, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={cardVariants}
                                    whileHover={{ scale: 1.1, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }}
                                >
                                    <Image
                                        src={src}
                                        alt={`Platform ${idx + 1}`}
                                        width={160}
                                        height={80}
                                        className="opacity-90 hover:opacity-100 transition-opacity"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Case Studies Section */}
                <section id="case-studies" className="py-16 bg-gray-950 text-center">
                    <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Success Stories</span>
                        </h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {caseStudies.map((study, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={cardVariants}
                                    whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)' }}
                                    className="bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700 hover:border-cyan-400 transition-all overflow-hidden"
                                >
                                    <div className="relative">
                                        <Image
                                            src={study.image}
                                            alt={study.title}
                                            width={400}
                                            height={220}
                                            className="w-full h-56 object-cover transform hover:scale-110 transition-transform duration-500"
                                            onError={(e) => (e.currentTarget.src = '/images/fallback-case.png')}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-semibold text-xl text-white mb-2">{study.title}</h3>
                                        <p className="text-sm text-gray-300 mb-4 line-clamp-2">{study.description}</p>

                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Testimonials Section */}
                <section className="py-16 bg-gray-900 text-center">
                    <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
                            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Clients Say</span>
                        </h2>
                        <div className="max-w-3xl mx-auto">
                            <Swiper
                                modules={[Autoplay, Pagination, Navigation]}
                                spaceBetween={30}
                                slidesPerView={1}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                pagination={{ clickable: true }}
                                navigation
                                className="swiper-container"
                            >
                                {testimonials.map((review, idx) => (
                                    <SwiperSlide key={idx}>
                                        <motion.div
                                            variants={cardVariants}
                                            className="p-6 bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700"
                                        >
                                            <p className="italic text-lg text-gray-200">“{review.quote}”</p>
                                            <p className="mt-4 font-semibold text-white">- {review.name}</p>
                                        </motion.div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </motion.div>
                </section>

                {/* Contact Form Section */}
                <section id="contact" className="py-16 bg-gray-950 text-center">
                    {/* Background Decorative Elements */}

                    {/* Header */}
                    <div className="relative z-10 max-w-6xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700 animate-slide-up">
                            Get in Touch
                        </h2>
                        <p className="text-lg text-white mt-6 max-w-3xl mx-auto animate-slide-up delay-100">
                            Let’s bring your app vision to life. Contact Novabloom to discuss your project and start your journey today!
                        </p>
                    </div>

                    {/* Contact Form */}
                    <div className="relative z-10 max-w-2xl mx-auto mt-12 bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-cyan-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                                    placeholder="Your name"
                                    aria-required="true"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-cyan-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                                    placeholder="Your email"
                                    aria-required="true"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-cyan-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 resize-y"
                                    placeholder="Tell us about your project"
                                    rows="5"
                                    aria-required="true"
                                ></textarea>
                            </div>
                            {status.message && (
                                <p
                                    className={`text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'} animate-fade-in`}
                                >
                                    {status.message}
                                </p>
                            )}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}

                </section>



            </div>
            <Footer />
        </>
    );
}