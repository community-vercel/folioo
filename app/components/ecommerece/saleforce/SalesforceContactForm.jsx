import React from "react";

export default function ContactForm() {
  return (
    <div className="bg-gradient-to-b from-[#002B45] to-[#446f70] text-white min-h-screen">
      {/* Header Section */}
      <div className="py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Connect with Us for Expert Salesforce Solutions
        </h2>
        <p className="mt-2 text-lg text-gray-200">
          Fill out the form below to get started!
        </p>
      </div>

      {/* Form Section */}
      <div className="bg-white max-w-4xl mx-auto p-6 rounded-lg shadow-xl m-0">
        <form className="space-y-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="mt-1 p-3 border border-gray-300 rounded-md w-full text-gray-900 focus:ring-2 focus:ring-[#0077cc] focus:border-transparent transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company
              </label>
              <input
                type="text"
                id="company"
                placeholder="Your Company"
                className="mt-1 p-3 border border-gray-300 rounded-md w-full text-gray-900 focus:ring-2 focus:ring-[#0077cc] focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="mt-1 p-3 border border-gray-300 rounded-md w-full text-gray-900 focus:ring-2 focus:ring-[#0077cc] focus:border-transparent transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Your Phone"
                className="mt-1 p-3 border border-gray-300 rounded-md w-full text-gray-900 focus:ring-2 focus:ring-[#0077cc] focus:border-transparent transition-all"
              />
            </div>
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700">
              Service Interested In <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              className="mt-1 p-3 border border-gray-300 rounded-md w-full text-gray-900 focus:ring-2 focus:ring-[#0077cc] focus:border-transparent transition-all"
              required
            >
              <option value="" disabled selected>
                Select a Service
              </option>
              <option value="sales-cloud">Sales Cloud</option>
              <option value="service-cloud">Service Cloud</option>
              <option value="health-cloud">Health Cloud</option>
              <option value="financial-cloud">Financial Services Cloud</option>
              <option value="commerce-cloud">Commerce Cloud</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="5"
              className="mt-1 p-3 border border-gray-300 rounded-md w-full text-gray-900 focus:ring-2 focus:ring-[#0077cc] focus:border-transparent transition-all resize-y"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#446f70] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#d94500] focus:ring-4 focus:ring-[#F65302]/50 transition-all duration-300 transform hover:scale-105"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
        <p className="text-xs text-center mt-6 text-gray-600">
          By submitting this form, you agree to Nova Boom's{' '}
          <a href="#" className="underline text-[#0077cc] hover:text-[#005bb5]">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="#" className="underline text-[#0077cc] hover:text-[#005bb5]">
            Terms of Service
          </a>.
        </p>
      </div>

      {/* Footer Section */}
      <div className="bg-[#F1F6FA] text-[#002B45] py-12 px-4 mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-3 text-[#0077cc]">Sales Cloud</h4>
            <p className="text-sm hover:text-[#0077cc] transition-colors">Sales Cloud Consultant</p>
            <p className="text-sm hover:text-[#0077cc] transition-colors">Sales Cloud Implementation</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-3 text-[#0077cc]">Service Cloud</h4>
            <p className="text-sm hover:text-[#0077cc] transition-colors">Service Cloud Consultant</p>
            <p className="text-sm hover:text-[#0077cc] transition-colors">Service Cloud Implementation</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-3 text-[#0077cc]">Health Cloud</h4>
            <p className="text-sm hover:text-[#0077cc] transition-colors">Health Cloud Consultant</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-3 text-[#0077cc]">Financial Services Cloud</h4>
            <p className="text-sm hover:text-[#0077cc] transition-colors">Financial Cloud Consultant</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-3 text-[#0077cc]">Commerce Cloud</h4>
            <p className="text-sm hover:text-[#0077cc] transition-colors">Commerce Cloud Implementation</p>
            <p className="text-sm hover:text-[#0077cc] transition-colors">Commerce Cloud Migration</p>
            <p className="text-sm hover:text-[#0077cc] transition-colors">Commerce Cloud Optimization</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 border-t pt-6">
          <div></div>
          <div>
            <p className="text-sm hover:text-[#0077cc] transition-colors">Commerce Cloud Support</p>
            <p className="text-sm hover:text-[#0077cc] transition-colors">Commerce Cloud Consultants</p>
            <p className="text-sm hover:text-[#0077cc] transition-colors">Certified Commerce Cloud Developers</p>
          </div>
          <div>
            <p className="text-sm hover:text-[#0077cc] transition-colors">B2B Commerce Integration</p>
            <p className="text-sm hover:text-[#0077cc] transition-colors">B2C Commerce Developers</p>
            <p className="text-sm hover:text-[#0077cc] transition-colors">Commerce Cloud Development</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-3 text-[#0077cc]">Company</h4>
            <p className="text-sm hover:text-[#0077cc] transition-colors">About Us</p>
            <p className="text-sm hover:text-[#0077cc] transition-colors">Case Studies</p>
            <p className="text-sm hover:text-[#0077cc] transition-colors">Blog</p>
            <p className="text-sm mt-3">Email: <a href="mailto:salesforce@Nova Boom.com" className="hover:text-[#0077cc] transition-colors">salesforce@Nova Boom.com</a></p>
            <p className="text-sm">Phone: <a href="tel:+14083654638" className="hover:text-[#0077cc] transition-colors">USA 408 365 4638</a></p>
          </div>
        </div>

        <div className="text-center text-xs text-gray-600 mt-10">
          © 2025 Nova Boom Software Inc., All Rights Reserved. <br />
          <a href="#" className="underline hover:text-[#0077cc] transition-colors">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="#" className="underline hover:text-[#0077cc] transition-colors">
            Terms of Use
          </a>{' '}
          |{' '}
          <a href="#" className="underline hover:text-[#0077cc] transition-colors">
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  );
}