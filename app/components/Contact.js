'use client';
import Image from 'next/image';

export default function ContactUsSection() {
  return (
    <section className="bg-[#f9f9f9] py-6 sm:py-8 relative">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 flex flex-col sm:flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-12 relative">
        {/* Left content */}
        <div className="w-full lg:w-1/2 ml-0 sm:ml-10 lg:ml-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6">
            Contact us
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 max-w-lg">
            Whether you are a large enterprise looking to augment your teams with experts resources or an SME 
            looking to scale your business or a startup looking to build something. We are your digital growth partner.
          </p>
          <div className="text-black text-base sm:text-lg mb-2">
            <strong>Tel:</strong> +1 408 365 4638
          </div>
          <div className="text-black text-base sm:text-lg mb-4 sm:mb-6">
            <strong>Support:</strong> +1 (408) 512 1812
          </div>

          <div className="mt-8 sm:mt-16">
            <Image
              src="/locations/contact-plane.webp"
              alt="Paper Plane Illustration"
              width={200}
              height={200}
              className="object-contain w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]"
            />
          </div>
        </div>

        {/* Right form */}
        <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-6 sm:p-8 lg:p-14">
          <form className="space-y-4 sm:space-y-6" aria-label="Contact us form">
            <input
              type="text"
              placeholder="Name"
              aria-label="Name"
              className="w-full border-b border-gray-300 py-1 sm:py-2 text-sm sm:text-base outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              aria-label="Email"
              className="w-full border-b border-gray-300 py-1 sm:py-2 text-sm sm:text-base outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              aria-label="Phone number"
              className="w-full border-b border-gray-300 py-1 sm:py-2 text-sm sm:text-base outline-none"
            />
            <input
              type="text"
              placeholder="Organization"
              aria-label="Organization"
              className="w-full border-b border-gray-300 py-1 sm:py-2 text-sm sm:text-base outline-none"
            />
            
            <textarea
              placeholder="Tell us about your project"
              aria-label="Project details"
              rows={3}
              className="w-full border-b border-gray-300 py-1 sm:py-2 text-sm sm:text-base outline-none resize-none"
            />
             <button
          type="submit"
          className="bg-[#f70319] text-white font-semibold text-lg py-3 px-6 rounded-full w-full hover:bg-red-700 transition"
        >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Optional CAPTCHA notice */}
      <div className="absolute bottom-2 right-2">
        {/* Integrate reCAPTCHA widget here if needed */}
      </div>
    </section>
  );
}