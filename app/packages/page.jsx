import { motion } from 'framer-motion';
import Footer from '../components/ai/Footer';
import Header from '../components/apps/Header';
import ContactForm from '../components/ai/contact';

export default function Packages() {
  const packages = [
    { name: 'IT Staff Augmentation', price: '$50/hr', desc: 'Hire skilled IT professionals to scale your team on-demand.' },
    { name: 'Magento 2 Store', price: '$60/hr', desc: 'Custom Magento 2 store development tailored to your e-commerce needs.' },
    { name: 'Next.js Website', price: '$55/hr', desc: 'Build fast, SEO-friendly websites with Next.js.' },
    { name: 'Flutter App (MVP)', price: '$65/hr', desc: 'Launch your mobile app MVP with Flutter for iOS and Android.' },
    { name: 'SEO Plans', price: '$45/hr', desc: 'Boost your site’s ranking with customized SEO strategies.' },
    { name: 'Server Management', price: '$40/hr', desc: 'Reliable server setup, monitoring, and maintenance.' },
  ];

  return (
    <>
    <Header />
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Packages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible hourly plans to suit your business needs.
          </p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
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
            <circle cx="50" cy="0.5" r="6" fill="#446f70" />
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
            <circle cx="0.5" cy="50" r="6" fill="#446f70" />
            <circle cx="0.5" cy="95" r="6" fill="#446f70" />
          </svg>
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="relative text-center p-6 bg-gray-50 rounded-lg shadow-sm z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#446f70] font-bold text-xl">{index + 1}</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{pkg.name}</h3>
              <p className="text-[#446f70] font-bold text-xl mb-2">{pkg.price}</p>
              <p className="text-gray-600 text-sm">{pkg.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
      <ContactForm />


<Footer />

</>
  );
}