// components/ShopifyHero.js
export default function ShopifyHero() {
  return (
    <div className="bg-[#F8FFE9] py-16 px-8 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side */}
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-6">
            Scalable Shopify Stores That <br />
            Drive <span className="text-black">3X More Conversions</span>
          </h1>
          <p className="text-[#333] text-lg mb-6">
            We create custom Shopify stores focused on boosting sales. Our Shopify
            development services help optimize your site for conversions by improving
            page speed, enhancing shopping experiences, and crafting compelling
            product pages.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-start gap-6">
          <button className="bg-[#A5EB1F] text-black font-semibold text-lg px-6 py-3 rounded-full shadow hover:bg-[#94d71c] transition">
            Build. Sell. Scale
          </button>

          {/* Services List */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-black font-medium text-sm">
            {[
              "Custom Development",
              "UI/UX Design",
              "Headless Shopify",
              "App Development",
              "Store Migration",
              "Platform Integrations",
            ].map((item, idx) => (
              <div key={idx} className="border-b border-black pb-1">{item}</div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
