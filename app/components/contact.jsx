'use client';
import { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
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

  return (

    <>
    <Header />
    <section className="relative bg-gradient-to-b from-[#f8fafc] to-[#e0f0ff] py-20 px-6 md:px-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute top-0 left-10 w-[500px] h-[500px] bg-cyan-300 rounded-full filter blur-4xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#446f70] rounded-full filter blur-4xl animate-pulse"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray animate-slide-up">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-700 mt-6 max-w-3xl mx-auto animate-slide-up delay-100">
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
            className={`w-full bg-[#446f70] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="relative z-10 max-w-6xl mx-auto mt-12 grid md:grid-cols-3 gap-8 text-center animate-fade-in delay-200">
        <div className="p-6">
          <Image src="/app/email-blue.svg" alt="Email Icon" width={48} height={48} className="mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-gray-800">Email Us</h4>
          <p className="text-sm text-gray-600">Rameez.rafique@thenovabloom.com</p>
        </div>
        <div className="p-6">
          <Image src="/app/1527145993.svg" alt="Phone Icon" width={48} height={48} className="mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-gray-800">Call Us</h4>
          <p className="text-sm text-gray-600">+1  (347) 716-9944</p>
        </div>
        <div className="p-6">
          <Image src="/app/ts-map-pin.svg" alt="Location Icon" width={48} height={48} className="mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-gray-800">Visit Us</h4>
          <p className="text-sm text-gray-600">2457 Lancaster Street East Meadow, NY 11554</p>
        </div>
      </div>
    </section>
<Footer />
    </>
  );
}