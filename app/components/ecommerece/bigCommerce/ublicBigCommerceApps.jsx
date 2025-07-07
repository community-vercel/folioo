'use client';

const apps = [
  {
    title: 'Smart Inventory',
    icon: '/salesforce/file-manager-app-icon.webp', // Update with your actual path
    description: 'Streamline stock management with real-time updates.',
  },
  {
    title: 'Cart Recovery',
    icon: '/salesforce/shopping-list-manager-icon.webp', // Update with your actual path
    description: 'Boost sales by recovering abandoned carts effortlessly.',
  },
  {
    title: 'Guest Checkout Link',
    icon: '/salesforce/link-guest-order-icon.webp', // Update with your actual path
    description: 'Simplify guest orders with secure, shareable links.',
  },
  {
    title: 'Seamless Migration',
    icon: '/salesforce/bigcommerce-v3-migration-icon.webp', // Update with your actual path
    description: 'Migrate to WooCommerce with zero downtime.',
  },
];

export default function PublicWooCommerceApps() {
  return (
    <section className="relative bg-gradient-to-b from-[#f9fafb] to-[#e5f6f0] py-20 px-6 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0C200 100 400 0 600 100S800 200 1000 100 1200 0 1400 100V600H0V0Z"
            fill="url(#waveGradient)"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1400" y2="600">
              <stop offset="0%" style={{ stopColor: '#34d399', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Power Up Your <span className="text-gray-800">BigCommerce Store</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Discover our custom-built WooCommerce apps designed to enhance your store’s performance, streamline operations, and drive more sales. Simplify your eCommerce journey with tools crafted for success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col items-center text-center"
            >
              <img
                src={app.icon}
                alt={app.title}
                className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{app.title}</h3>
              <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                {app.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}