'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPhone, FaHeadset } from 'react-icons/fa';
import Link from 'next/link';

export default function AppContactUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3, ease: 'easeOut' } },
  };

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
        setFormData({ name: '', email: '', phone: '', organization: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Failed to send message' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-[#f8fafc] to-[#e0f0ff] py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute top-0 left-10 w-[500px] h-[500px] bg-cyan-300 rounded-full blur-4xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#446f70] rounded-full blur-4xl animate-pulse"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="w-full lg:w-1/2"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold   mb-6 leading-tight">
              Let’s Build Your App
            </h1>
            <p className="text-lg text-gray-700 max-w-lg mb-8">
              At Novabloom, we craft innovative mobile and web apps for startups, SMBs, and enterprises. Ready to transform your ideas into reality? Contact us today!
            </p>
          <div className="space-y-4 text-base text-gray-900">
  <div className="flex items-center">
    <FaPhone className="text-[#446f70] mr-3" />
    <Link
      href="tel:+18001234567"
      className="text-gray-900 hover:text-[#446f70] transition-colors"
    >
      <strong>Tel:</strong> +1 (347) 716-9944
    </Link>
  </div>
  <div className="flex items-center">
    <FaHeadset className="text-[#446f70] mr-3" />
    <Link
      href="tel:+18001237890"
      className="text-gray-900 hover:text-[#446f70] transition-colors"
    >
      <strong>Support:</strong> +1 (347) 716-9944
    </Link>
  </div>
</div>

          </motion.div>

          {/* Right Form */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={formVariants}
            className="w-full lg:w-1/2 bg-white shadow-xl rounded-2xl p-6 sm:p-8 lg:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { type: 'text', name: 'name', placeholder: 'Your Name', required: true },
                { type: 'email', name: 'email', placeholder: 'Your Email', required: true },
                { type: 'tel', name: 'phone', placeholder: 'Your Phone (optional)', required: false },
                { type: 'text', name: 'organization', placeholder: 'Your Organization (optional)', required: false },
              ].map((field, index) => (
                <input
                  key={index}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name] ?? ''}
                  onChange={handleChange}
                  required={field.required}
                  className="w-full border border-cyan-200 rounded-lg py-3 px-4 text-gray-900 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                />
              ))}

              <textarea
                name="message"
                placeholder="Tell us about your project"
                rows={5}
                value={formData.message ?? ''}
                onChange={handleChange}
                required
                className="w-full border border-cyan-200 rounded-lg py-3 px-4 text-gray-900 focus:ring-2 focus:ring-cyan-200 outline-none resize-none transition-all"
              />

              {status.message && (
                <p className={`text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {status.message}
                </p>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                className={`w-full bg-[#446f70] text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 