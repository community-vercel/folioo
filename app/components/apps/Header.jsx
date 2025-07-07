'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const headline = headlineRef.current;
    const subtext = subtextRef.current;

    if (headline) {
      headline.style.opacity = '0';
      headline.style.transform = 'translateX(-100%)';
      setTimeout(() => {
        headline.style.transition = 'transform 1.5s ease-out, opacity 1s ease-out';
        headline.style.transform = 'translateX(0)';
        headline.style.opacity = '1';
      }, 100);
    }

    if (subtext) {
      subtext.style.opacity = '0';
      subtext.style.transform = 'translateX(-100%)';
      setTimeout(() => {
        subtext.style.transition = 'transform 1.5s ease-out, opacity 1s ease-out';
        subtext.style.transform = 'translateX(0)';
        subtext.style.opacity = '1';
      }, 300);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans relative">
      {/* Hero Section with Full-Screen Background */}
      <main
        className="absolute top-0 left-0 w-full h-[90vh] lg:h-[700px] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/automotive_inside_banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 min-h-[90vh] lg:min-h-screen flex flex-col">
          {/* Clutch Banner */}
          <div className="bg-blue-500 text-center py-1.5 text-white text-xs lg:text-sm">
            Recognized by Clutchco as a top-rated Mobile App Development Company
          </div>

          {/* Top Bar (above Navbar) */}
          <div className="flex justify-between items-center px-4 lg:px-6 py-3">
            <span className="text-lg lg:text-xl font-bold text-white">
              <Image
                src="/logo.webp"
                alt="Nova Mobile"
                width={200}
                height={100}
              />
            </span>
            <div className="flex items-center space-x-4">
              <span className="text-xs lg:text-sm text-white hidden lg:block">US: 408 365 4638</span>
                                    <Link href='/contact'>

              <button className="bg-blue-500 text-white px-4 lg:px-6 py-2 rounded text-xs lg:text-sm font-medium hover:bg-[#446f70]">
                START YOUR PROJECT
              </button>
              </Link>
              <button className="lg:hidden text-white focus:outline-none" onClick={toggleMenu}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Navbar */}
          <header className={`lg:flex lg:justify-center px-4 lg:px-6 py-3 ${isMenuOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="flex flex-col lg:flex-row lg:space-x-5 text-xs lg:text-sm bg-black lg:bg-transparent w-full lg:w-auto">
              <div className="relative group">
                <button onClick={() => toggleDropdown('solutions')} className="text-white hover:text-white flex justify-between items-center w-full py-2 lg:py-0">
                  Solutions
                  <svg className="w-4 h-4 ml-1 lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className={`lg:absolute ${isMenuOpen && openDropdown === 'solutions' ? 'block' : 'hidden lg:group-hover:block'}`}>
                  <div className="bg-white text-black p-2 rounded-lg shadow-md mt-2 w-full lg:w-48">
                    <a href="#" className="block px-3 py-1 hover:bg-gray-100">Mobile Apps</a>
                    <a href="#" className="block px-3 py-1 hover:bg-gray-100">Web Development</a>
                    <a href="#" className="block px-3 py-1 hover:bg-gray-100">Cloud Solutions</a>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button onClick={() => toggleDropdown('industries')} className="text-white hover:text-white flex justify-between items-center w-full py-2 lg:py-0">
                  Industries
                  <svg className="w-4 h-4 ml-1 lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className={`lg:absolute ${isMenuOpen && openDropdown === 'industries' ? 'block' : 'hidden lg:group-hover:block'}`}>
                  <div className="bg-white text-black p-2 rounded-lg shadow-md mt-2 w-full lg:w-48">
                    <a href="#" className="block px-3 py-1 hover:bg-gray-100">Automotive</a>
                    <a href="#" className="block px-3 py-1 hover:bg-gray-100">Healthcare</a>
                    <a href="#" className="block px-3 py-1 hover:bg-gray-100">Retail</a>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button onClick={() => toggleDropdown('technologies')} className="text-white hover:text-white flex justify-between items-center w-full py-2 lg:py-0">
                  Technologies
                  <svg className="w-4 h-4 ml-1 lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className={`lg:absolute ${isMenuOpen && openDropdown === 'technologies' ? 'block' : 'hidden lg:group-hover:block'}`}>
                  <div className="bg-white text-black p-2 rounded-lg shadow-md mt-2 w-full lg:w-48">
                    <a href="#" className="block px-3 py-1 hover:bg-gray-100">React</a>
                    <a href="#" className="block px-3 py-1 hover:bg-gray-100">Node.js</a>
                    <a href="#" className="block px-3 py-1 hover:bg-gray-100">AWS</a>
                  </div>
                </div>
              </div>
              <a href="#" className="text-white hover:text-white py-2 lg:py-0">Portfolio</a>
              <a href="#" className="text-white hover:text-white py-2 lg:py-0">Blog</a>
              <a href="#" className="text-white hover:text-white py-2 lg:py-0">Contact Us</a>
            </div>
          </header>

          {/* Hero Content */}
          <div className="flex flex-col items-start justify-center h-full px-4 lg:px-10 text-start mt-12 lg:mt-18">
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white ml-0 lg:ml-60"
              style={{ transform: 'translateX(-100%)', position: 'relative' }}
            >
              Boost your Business with<br />Innovative Automotive<br />Mobility Solutions
            </h1>
            <div className="text-start">
              <p
                ref={subtextRef}
                className="text-lg sm:text-xl lg:text-xl font-bold text-gray-400 mb-4 ml-0 lg:ml-60"
                style={{ transform: 'translateX(-100%)', position: 'relative' }}
              >
                Leave your competition in the dust, get your app built today
              </p>
              <div className="flex justify-start mt-1 ml-0 lg:ml-60">
                <button className="bg-blue-500 text-white px-6 sm:px-8 lg:px-10 py-3 lg:py-4 rounded text-xs sm:text-sm font-medium">
                  Talk to Us
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-gray-500 text-xs">
            <p>SCROLL AND BE AMAZED!</p>
            <div className="mt-2 flex justify-center items-center animate-bounce">
              <svg
                className="w-5 h-8 text-white border border-white rounded-md"
                fill="currentColor"
                viewBox="0 0 8 8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="3" />
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}