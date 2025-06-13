export default function EcommerceHelpSection() {
  return (
    <div className="bg-[#f9f9f9] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between">

        {/* Left Box */}
        <div className="bg-white p-8 rounded-xl shadow-md w-full lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">How We Help Ecommerce Businesses Grow 3x Faster</h2>
          <p className="text-gray-700 text-lg mb-4">
            Our eCommerce development experts go beyond just building stores — we act as strategic partners, 
            identifying opportunities to maximize revenue and drive business growth.
          </p>
          <p className="text-gray-700 text-lg">
            Many of our clients have stayed with us since day one, growing alongside us as we continue to deliver proven results.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-xl font-bold mb-6">Build. Sell. Scale.</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
            {[
              "Platform Migration & Replatforming",
              "Integrations & APIs",
              "Headless Commerce Solutions",
              "Custom eCommerce Apps",
              "UX/UI Design & Optimization",
              "Performance & CRO",
              "Business Growth Strategies"
            ].map((item, idx) => (
              <div key={idx} className="group">
                <a href="#" className="flex items-center justify-between text-black font-medium text-lg hover:text-blue-600 transition">
                  {item} 
                  <span className="ml-2 text-blue-600">↗</span>
                </a>
                <div className="border-b border-black w-3/4 group-hover:border-blue-600 transition mt-1"></div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-16">
        <button className="bg-[#446f70] text-white px-8 py-4 rounded-full font-semibold text-lg transition">
          Partner with Us to Scale 3X!
        </button>
      </div>
    </div>
  );
}
