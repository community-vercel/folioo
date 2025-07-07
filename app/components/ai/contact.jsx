'use client';
import Image from 'next/image';
import { useState } from 'react';

const ContactForm = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
        setFormData({ name: '', email: '', phone: '', message: '' });
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
    <div className="bg-gradient-to-b from-gray-50 to-white px-6 py-16 flex flex-col items-center justify-center">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray    animate-fade-in mb-12">
        Bring Your Vision to Life with AI
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-7xl w-full">
        {/* Left: Map with Locations */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative rounded-2xl shadow-2xl overflow-hidden">
            <Image
              src="/salesforce/map.png"
              alt="Global Locations"
              width={600}
              height={400}
              className="object-cover w-full h-[400px] hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-semibold">Our Global Reach</h3>
              <p className="text-sm mt-2 max-w-md">
                Connect with our AI experts across North America, Europe, and Asia to transform your business.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 bg-gradient-to-br from-blue-900 to-cyan-800 text-white p-8 rounded-2xl shadow-lg space-y-6 animate-slide-in"
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/10 border border-gray-300/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              required
            />
          </div>
          <div className="flex gap-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              value={formData.email}
              onChange={handleChange}
              className="w-1/2 p-3 rounded-lg bg-white/10 border border-gray-300/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone*"
              value={formData.phone}
              onChange={handleChange}
              className="w-1/2 p-3 rounded-lg bg-white/10 border border-gray-300/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Tell Us About Your Project*"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 h-36 rounded-lg bg-white/10 border border-gray-300/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full   text-white font-semibold py-3 rounded-full shadow-lg transition-all duration-300 ${
              isHovered ? 'scale-105 shadow-xl' : ''
            } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl hover:scale-105'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isSubmitting ? 'Sending...' : 'Connect Now'}
          </button>
          {status.message && (
            <p
              className={`text-sm text-center ${
                status.type === 'success' ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {status.message}
            </p>
          )}
          <p className="text-xs text-gray-300 text-center">
            By submitting, you agree to our{' '}
            <a href="#" className="underline text-white hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="#" className="underline text-white hover:text-white transition-colors duration-200">
              Terms of Service
            </a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;