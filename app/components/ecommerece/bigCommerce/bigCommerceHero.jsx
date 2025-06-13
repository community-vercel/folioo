export default function WooCommerceHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#1a3c34] via-[#0a6e4f] to-[#000000] text-white py-6 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10%" cy="20%" r="200" fill="url(#gradient1)" />
          <circle cx="90%" cy="80%" r="150" fill="url(#gradient2)" />
          <defs>
            <radialGradient id="gradient1" cx="0" cy="0" r="1">
              <stop offset="0%" style={{ stopColor: '#34d399', stopOpacity: 0.5 }} />
              <stop offset="100%" style={{ stopColor: '#34d399', stopOpacity: 0 }} />
            </radialGradient>
            <radialGradient id="gradient2" cx="0" cy="0" r="1">
              <stop offset="0%" style={{ stopColor: '#a7f3d0', stopOpacity: 0.5 }} />
              <stop offset="100%" style={{ stopColor: '#a7f3d0', stopOpacity: 0 }} />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div className="space-y-6 z-10">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#a7f3d0]">
              WooCommerce Store
            </span> <br />
            with Expert Solutions
          </h1>
          <p className="text-lg text-gray-200 max-w-md">
            As certified WooCommerce specialists, we craft high-performance, scalable online stores tailored to your business goals.
          </p>
          <button className="mt-6 px-8 py-4 bg-[#34d399] text-white font-semibold rounded-full shadow-lg hover:bg-[#a7f3d0] hover:scale-105 transition-transform duration-300">
            Start Your Project Today
          </button>
        </div>

        {/* Right Content */}
        <div className="relative text-gray-100 space-y-6 text-base lg:text-lg">
          <p className="leading-relaxed">
            We specialize in delivering cutting-edge WooCommerce solutions, leveraging powerful tools like custom APIs, headless commerce, and optimized checkouts to create seamless shopping experiences. As WooCommerce Certified Partners, our team has built over 150+ stunning, high-converting stores, showcasing our expertise in custom development, theme design, and performance optimization.
          </p>
          <p className="leading-relaxed">
            From launching new stores to enhancing existing ones, we provide end-to-end solutions, including bespoke plugins, seamless migrations, and scalable architecture. Our tailored approach ensures your WooCommerce store drives growth, engages customers, and stands out in a competitive market.
          </p>
          <div className="flex space-x-4">
            <span className="inline-block px-4 py-2 bg-[#2a6b54] rounded-full text-sm font-medium">
              150+ Stores Built
            </span>
            <span className="inline-block px-4 py-2 bg-[#2a6b54] rounded-full text-sm font-medium">
              Certified Experts
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}