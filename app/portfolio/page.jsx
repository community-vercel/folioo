'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/ai/Footer';
import Header from '../components/Header';

export default function AppPortfolio() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch portfolio data from API
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await fetch('https://sharplogicians.com/api/portfolio/');
        const data = await response.json();
        if (data.status === 'success') {
          // Enhance API data with default descriptions for consistency
          const enhancedData = data.data.map(item => ({
            ...item,
            description: item.description || `Discover how Novabloom crafted a tailored app solution for ${item.title}, delivering seamless functionality and exceptional user experience.`,
          }));
          setPortfolioItems(enhancedData);
        } else {
          throw new Error('Failed to fetch portfolio data');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPortfolio();
  }, []);

  return (<>
  
  <Header />
    <section className="relative bg-gradient-to-b from-[#f8fafc] to-[#446f70] py-20 px-6 md:px-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute top-0 left-10 w-[500px] h-[500px] bg-cyan-300 rounded-full filter blur-4xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600 rounded-full filter blur-4xl animate-pulse"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700 animate-slide-up">
          Our  Development Portfolio
        </h2>
        <p className="text-lg text-gray-700 mt-6 max-w-3xl mx-auto animate-slide-up delay-100">
          Explore Novabloom’s  showcase of innovative mobile,ai and web app projects, crafted to drive success across industries.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="relative z-10 max-w-6xl mx-auto mt-12">
        {isLoading ? (
          <div className="text-center text-gray-600 text-lg">Loading portfolio...</div>
        ) : error ? (
          <div className="text-center text-red-600 text-lg">Error: {error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, idx) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-3 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <img
                  src={`https://sharplogicians.com${item.image}`}
                  alt={item.title}
                  width={400}
                  height={240}
                  className="w-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.heading}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">{item.description}</p>
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="inline-block bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-semibold px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    {item.buttonText || 'Case Study'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA Button */}
      <div className="relative z-10 mt-16 text-center animate-slide-up delay-300">
        <Link
          href="/contact"
          className="inline-block bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-semibold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Start Your App Project
        </Link>
      </div>
    </section>

    <Footer />
    </>
  );
}