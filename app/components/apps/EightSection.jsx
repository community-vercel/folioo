'use client';
import React from 'react';

const EightSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-900 text-white" style={{ backgroundColor: '#1A202C' }}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Schedule an Appointment with our Mobile App Development Expert</h2>
        <div className="w-8 h-px bg-blue-500 mx-auto mb-10"></div>
        <form className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name and Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
            <input
              type="text"
              className="w-full p-3 bg-white text-black rounded-none border-0 focus:ring-0"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 bg-white text-black rounded-none border-0 focus:ring-0"
              placeholder="Your Email"
            />
          </div>
          {/* Country and Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Country</label>
            <input
              type="text"
              className="w-full p-3 bg-white text-black rounded-none border-0 focus:ring-0"
              placeholder="Your Country"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
            <input
              type="tel"
              className="w-full p-3 bg-white text-black rounded-none border-0 focus:ring-0"
              placeholder="Your Phone"
            />
          </div>
          {/* Interested In */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-2">Interested In</label>
            <select
              className="w-full p-3 bg-white text-black rounded-none border-0 focus:ring-0 appearance-none"
            >
              <option>IOS App Development</option>
              <option>Android App Development</option>
              <option>Cross-Platform Development</option>
            </select>
          </div>
          {/* Message */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea
              className="w-full p-3 bg-white text-black rounded-none border-0 focus:ring-0 h-32"
              placeholder="Your Message"
            ></textarea>
          </div>
        </form>
        <div className="max-w-4xl mx-auto mt-6 flex items-center justify-between flex-col md:flex-row">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <input type="checkbox" className="h-4 w-4 text-blue-600 bg-white border-gray-300 rounded" />
            <span className="text-sm text-gray-300">I'm not a robot</span>
            <img src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=your-site-key" alt="reCAPTCHA" className="h-6 w-auto" />
          </div>
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-none hover:bg-blue-700 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default EightSection;