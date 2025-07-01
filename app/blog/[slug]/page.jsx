'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/ai/Footer';
// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } },
};

// Blog data (same as in main page, ideally moved to a shared data file)
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

export default function BlogPost({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-6">Sorry, the blog post you’re looking for doesn’t exist.</p>
          <Link
            href="/pages/tech-blogs"
            className="inline-block bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-all"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="relative bg-white text-black">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-gray-900 to-indigo-900 py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/60 to-emerald-500/40 z-0"></div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="relative z-10 max-w-4xl mx-auto px-4 text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{blog.title}</h1>
            <p className="text-sm text-gray-300 mb-4">{blog.date} • {blog.category}</p>
          </motion.div>
        </section>

        {/* Blog Content */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
            <div className="relative mb-8">
              <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={400}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                onError={(e) => (e.currentTarget.src = '/blogs/fallback-tech-image.webp')}
              />
            </div>
            <div className="prose prose-lg max-w-none text-gray-800">
              <p className="text-lg leading-relaxed">{blog.content}</p>
            </div>
            <div className="mt-8">
              <Link
                href="/blog"
                className="inline-block bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-all"
                aria-label="Back to all blogs"
              >
                Back to Blogs
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
}