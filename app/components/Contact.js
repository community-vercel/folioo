import Image from "next/image";

export default function ContactUsSection() {
  return (
    <section className="bg-[#f9f9f9] py-8 relative">
      <div className="max-w-9xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-start gap-12 relative">
        {/* Left content */}
        <div className="w-full lg:w-1/2 ml-20">
          <h1 className="text-6xl font-bold text-black mb-6">Contact us</h1>
          <p className="text-lg text-gray-700 mb-6 max-w-lg">
            Whether you are a large enterprise looking to augment your teams with experts resources or an SME 
            looking to scale your business or a startup looking to build something. We are your digital growth partner.
          </p>
          <div className="text-black text-lg mb-2">
            <strong>Tel:</strong> +1 408 365 4638
          </div>
          <div className="text-black text-lg mb-6">
            <strong>Support:</strong> +1 (408) 512 1812
          </div>

          <div className="mt-16">
            <Image
              src="/locations/contact-plane.webp" // Replace with actual image path
              alt="Paper Plane"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right form */}
        <div className="w-full lg:w-1/3 bg-white shadow-md rounded-md p-14">
          <form className="space-y-6">
            <input type="text" placeholder="Name" className="w-full border-b border-gray-300 py-2 outline-none" />
            <input type="email" placeholder="Email" className="w-full border-b border-gray-300 py-2 outline-none" />
            <input type="tel" placeholder="Phone" className="w-full border-b border-gray-300 py-2 outline-none" />
            <input type="text" placeholder="Organization" className="w-full border-b border-gray-300 py-2 outline-none" />
            <textarea placeholder="Tell us about your project" rows={3} className="w-full border-b border-gray-300 py-2 outline-none resize-none" />
            <button
              type="submit"
              className="bg-[#f70319] text-white font-semibold text-lg py-3 px-6 rounded-full w-full hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Optional CAPTCHA notice */}
      <div className="absolute bottom-4 right-4">
        {/* You can integrate reCAPTCHA widget here if needed */}
      </div>
    </section>
  );
}