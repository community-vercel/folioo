'use client';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';

const officeData = {
  'North America': [
    {
      country: 'USA',
      flag: '/salesforce/USA.webp',
      offices: [
        'Belmont, CA – 1301 Shoreway Road, Suite 160, Belmont, CA 94002',
        'Pleasanton, CA – 6701 Koll Center Parkway, #250, Pleasanton, CA 94566',
        'Tel: +1-408-365-4638 | Support: +1-866-512-1812',
      ],
    },
  ],
  Europe: [
    {
      country: 'UK',
      flag: '/salesforce/uk.webp',
      offices: ['Export House, Cawsey Way, Woking, Surrey, GU21 6QX', 'Tel: +44-148-339-7625'],
    },
  ],
  Asia: [
    {
      country: 'Pakistan',
      flag: '/salesforce/pakistan.webp',
      offices: [
        'Agile Center Building # 153-M Office # 32 ,',
        ' 4th Floor, D-Block Civic Center Phase 4',
        'Islamabad, 46220',
        'Tel: +92- 0325 5655555 | +92-51-5913827',
      ],
    },
  ],
};

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Placeholder for newsletter subscription logic
    console.log('Subscribed with:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-blue-950 text-gray-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-fade-in">
            Stay Ahead with AI Insights
          </h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto animate-fade-in delay-100">
            Subscribe to our newsletter for the latest AI trends, updates, and exclusive offers.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="mt-6 flex justify-center gap-4 max-w-md mx-auto animate-slide-in">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </section>

        {/* Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {Object.entries(officeData).map(([region, countries], index) => (
            <div key={region} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <h3 className="text-xl font-semibold text-cyan-400 mb-6">{region}</h3>
              {countries.map((office) => (
                <div key={office.country} className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Image
                      src={office.flag}
                      alt={office.country}
                      width={28}
                      height={28}
                      className="rounded-full shadow-sm"
                    />
                    <span className="font-medium text-white">{office.country}</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {office.offices.map((line, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
          {/* Additional Column: Company Info */}
          <div className="animate-fade-in" style={{ animationDelay: `300ms` }}>
            <h3 className="text-xl font-semibold text-cyan-400 mb-6">About Us</h3>
            <p className="text-sm text-gray-400 mb-4">
              novabloom is a global leader in AI and digital transformation, empowering businesses with innovative solutions.
            </p>
            <div className="flex gap-4">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  aria-label={`Social media link ${idx + 1}`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400 animate-fade-in">
          <p>&copy; {new Date().getFullYear()} novabloom. All rights reserved. | <a href="#" className="underline hover:text-cyan-400">Privacy Policy</a> | <a href="#" className="underline hover:text-cyan-400">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;