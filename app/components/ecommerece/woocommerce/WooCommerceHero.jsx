export default function WooCommerceHero() {
  return (
    <section className="bg-gradient-to-r from-[#099f70] to-black text-white py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Top-tier <br />
            <span className="text-white">WooCommerce</span> <br />
            <span className="text-purple-400">Development Services</span>
          </h1>
          <button className="mt-8 px-6 py-3 bg-[#446f70] text-white font-semibold rounded-full shadow hover:bg-gray-200 transition">
            Book A Call Now
          </button>
        </div>

        {/* Right Content */}
        <div className="text-gray-300 space-y-6 text-sm md:text-base">
          <p>
            Nova Bloom is a top-rated WooCommerce website development company with deep
            expertise in the WordPress open-source ecosystem.
          </p>
          <p>
            As WooCommerce development experts, we offer comprehensive WooCommerce
            development services to help companies leverage the open-source platform to
            scale and grow their online retail, simplifying complexities in their
            commerce model. Companies with complex data models, intricacies in their
            third-party integrations, and sophisticated infrastructure benefit the most
            from our WooCommerce website development services.
          </p>
          <p>
            We handle the most complex requirements, from API integrations to plugin
            customizations, front-end customizations, and custom plugins. Discuss your
            requirements with us now and get WooCommerce development services as per
            need.
          </p>
        </div>
      </div>
    </section>
  );
}
