'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
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
        number: { value: 40, density: { enable: true, value_area: 1000 } },
        color: { value: ['#3b82f6', '#f97316', '#10b981', '#ec4899'] },
        shape: { type: 'circle' },
        opacity: { value: 0.4, random: true },
        size: { value: 3, random: true },
        move: {
          enable: true,
          speed: 0.8,
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

// Blog data with content and slug
const blogs = [
  {
    title: 'Building Scalable Apps with Next.js and Microservices',
    date: '30, Jun 2025',
    excerpt: 'Learn how to create high-performance apps using Next.js and microservices architecture.',
    image: '/app/Build-Microservices-with-Node.jpg',
    category: 'App Development',
    slug: 'building-scalable-apps-with-nextjs-and-microservices',
    content:
      'In 2025, scalable app development is critical for success. Next.js, combined with microservices, offers a powerful approach to building fast, modular applications. This article explores how to leverage Next.js features like server-side rendering and API routes alongside microservices for scalability. Learn about containerization with Docker, orchestration with Kubernetes, and best practices for performance optimization.',
  },
  {
    title: 'Boosting eCommerce Sales with AI-Powered Personalization',
    date: '28, Jun 2025',
    excerpt: 'Discover how AI transforms eCommerce with personalized user experiences.',
    image: '/app/5.webp',
    category: 'eCommerce',
    slug: 'boosting-ecommerce-sales-with-ai-powered-personalization',
    content:
      'AI-driven personalization is revolutionizing eCommerce. From product recommendations to dynamic pricing, this article dives into how machine learning algorithms enhance customer experiences. Discover tools like TensorFlow and AWS Personalize, and explore case studies of top eCommerce platforms that boosted conversions by up to 30% using AI.',
  },
  {
    title: 'CI/CD Pipelines: Streamlining DevOps in 2025',
    date: '27, Jun 2025',
    excerpt: 'Explore best practices for automating deployments with modern CI/CD pipelines.',
    image: '/app/Top_reasons_to_learn_DevOps.avif',
    category: 'DevOps',
    slug: 'ci-cd-pipelines-streamlining-devops-in-2025',
    content:
      'CI/CD pipelines are the backbone of modern DevOps. This article covers the latest tools like GitHub Actions, Jenkins, and GitLab CI for automating deployments. Learn how to set up efficient pipelines, integrate testing, and achieve zero-downtime deployments with rolling updates and canary releases.',
  },
  {
    title: 'Digital Health: Revolutionizing Patient Care with IoT',
    date: '25, Jun 2025',
    excerpt: 'How IoT devices are enhancing real-time patient monitoring and care.',
    image: '/app/iStock-1127069581-1-850x450.webp',
        category: 'Digital Health',
    slug: 'digital-health-revolutionizing-patient-care-with-iot',
    content:
      'IoT is transforming digital health by enabling real-time patient monitoring. From wearable devices to smart hospital systems, this article explores how IoT integrates with HIPAA-compliant platforms to improve patient outcomes. Learn about MQTT protocols, edge computing, and security considerations for IoT in healthcare.',
  },
  {
    title: 'Harnessing Data Cloud for Real-Time Analytics',
    date: '22, Jun 2025',
    excerpt: 'Unlock the power of data cloud platforms for scalable, real-time insights.',
    image: '/app/opentext-image-blog-Harnessing-the-Power-of-ELT-1200x675-en-1024x576.webp',
    category: 'Data Cloud',
    slug: 'harnessing-data-cloud-for-real-time-analytics',
    content:
      'Data cloud platforms like Snowflake and Google BigQuery are powering real-time analytics. This article discusses how to architect scalable data pipelines, integrate with BI tools, and leverage serverless computing for cost efficiency. Explore use cases in finance, retail, and healthcare.',
  },
  {
    title: 'Securing eCommerce Platforms with Advanced Cybersecurity',
    date: '20, Jun 2025',
    excerpt: 'Protect your online store with cutting-edge cybersecurity strategies.',
    image: '/app/Blog-23-Cybersecurity-Best-Practices-for-E-commerce-Websites-scaled-1.jpg',
    category: 'eCommerce',
    slug: 'securing-ecommerce-platforms-with-advanced-cybersecurity',
    content:
      'Cybersecurity is critical for eCommerce platforms. This article covers advanced strategies like zero-trust architecture, API security, and DDoS protection. Learn how to implement secure payment gateways, comply with PCI DSS, and protect customer data from breaches.',
  },
  {
    title: 'Kubernetes in DevOps: Scaling Applications Effortlessly',
    date: '18, Jun 2025',
    excerpt: 'Master Kubernetes to streamline application scaling and management.',
    image: '/app/scaling-kubernetes-on-application-and-infrastructure-levels.png',
    category: 'DevOps',
    slug: 'kubernetes-in-devops-scaling-applications-effortlessly',
    content:
      'Kubernetes is the gold standard for container orchestration. This article explores how to use Kubernetes for scaling applications, managing clusters, and ensuring high availability. Dive into Helm charts, auto-scaling, and integration with cloud providers like AWS and Azure.',
  },
  {
    title: 'The Future of Digital Health: AI and Telemedicine Trends',
    date: '15, Jun 2025',
    excerpt: 'Explore emerging trends in AI-driven telemedicine for 2025.',
    image: '/app/ai-driven-main.960_0_1.jpg',
    category: 'Digital Health',
    slug: 'the-future-of-digital-health-ai-and-telemedicine-trends',
    content:
      'AI and telemedicine are shaping the future of healthcare. This article highlights trends like AI diagnostics, virtual consultations, and blockchain for secure medical records. Learn how to build scalable, secure telemedicine platforms using WebRTC and FHIR standards.',
  },
];

// Why Choose Us data
const whyChooseUs = [
  {
    title: 'Expert App Development',
    desc: 'Custom-built, scalable apps with modern frameworks like Next.js and React Native.',
  },
  {
    title: 'eCommerce Innovation',
    desc: 'AI-driven solutions to boost sales and enhance customer experiences.',
  },
  {
    title: 'DevOps Excellence',
    desc: 'Automated CI/CD pipelines and Kubernetes for seamless deployments.',
  },
  {
    title: 'Digital Health Expertise',
    desc: 'HIPAA-compliant solutions for secure, innovative patient care.',
  },
  {
    title: 'Data Cloud Mastery',
    desc: 'Scalable, secure cloud platforms for real-time data analytics.',
  },
];

export default function TechBlogsPage() {
  const [category, setCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const filteredBlogs = category === 'All' ? blogs : blogs.filter((blog) => blog.category === category);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const currentBlogs = filteredBlogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

  const categories = ['All', 'App Development', 'eCommerce', 'DevOps', 'Digital Health', 'Data Cloud'];

  // Hero Section Animation
  const headline = 'Tech & Innovation Insights'.split('');

  return (
    <>
      <Header />
      <div className="relative bg-white text-black overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-[#446f70] overflow-hidden">
          <ParticleBackground />
          <div className="absolute inset-0 bg-[#446f70] z-0"></div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400 mb-6 leading-tight"
              variants={textVariants}
            >
              {headline.map((letter, idx) => (
                <motion.span key={idx} variants={letterVariants} className="inline-block">
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </motion.h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Dive into the latest trends in <span className="font-semibold">App Development, eCommerce, DevOps, Digital Health, and Data Cloud</span> to stay ahead in the tech world.
            </p>
            <motion.div variants={buttonVariants}>
              <Link
                href="#blogs"
                className="inline-block bg-[#446f40] text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-all"
                aria-label="Explore Blogs"
              >
                Explore Insights
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Category Filter */}
        <section id="blogs" className="max-w-7xl mx-auto px-4 py-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="flex justify-center flex-wrap gap-3 mb-8"
          >
            {categories.map((cat, idx) => (
              <motion.button
                key={idx}
                onClick={() => {
                  setCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === cat
                    ? 'bg-[#446f70] text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-emerald-100 hover:text-emerald-600'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Filter by ${cat}`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Blog Cards */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{ gridAutoRows: '1fr' }}
          >
            {currentBlogs.map((blog, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' }}
                className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-emerald-300 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={250}
                    className="w-full h-52 object-cover transform hover:scale-105 transition-transform duration-500"
                    onError={(e) => (e.currentTarget.src = '/blogs/fallback-tech-image.webp')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{blog.date} • {blog.category}</p>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2 line-clamp-2">{blog.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-emerald-600 hover:text-emerald-800 font-medium text-sm flex items-center gap-2"
                    aria-label={`Read more about ${blog.title}`}
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-10 space-x-3"
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <motion.button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  currentPage === page
                    ? 'bg-[#446f70] text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-emerald-100 hover:text-emerald-600'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Go to page ${page}`}
              >
                {page}
              </motion.button>
            ))}
          </motion.div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gray-50 py-16 px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="max-w-7xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Why Choose <span className="text-gray bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">Our Tech Expertise</span>
            </h2>
            <div className="relative overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: '-100%' }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                whileHover={{ x: 0 }}
              >
                {whyChooseUs.concat(whyChooseUs).map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    className="min-w-[300px] mx-3 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-emerald-300 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
}