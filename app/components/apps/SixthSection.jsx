'use client';
import React from 'react';
import { BsFillPlayCircleFill } from "react-icons/bs";
import Image from 'next/image';
import myImage from '../../../public/assets/prototype_infographic-768x381.png';

const SixthSection = () => {
  return (
    <>
      <section className="bg-white text-black py-8 sm:py-10 lg:py-16 px-4 sm:px-6 lg:px-10 flex items-center justify-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Left Side - Image/Flow Diagram */}
          <div className="w-full md:w-2/3 mb-6 sm:mb-8 md:mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold mb-3 sm:mb-4 text-center lg:text-left lg:ml-6">
              Not Sure About Your App Idea?
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-bold mb-4 sm:mb-6 text-center lg:text-left lg:ml-6">
              Get Your Prototype Up In 6-8 Weeks!
            </h3>
            <div className="w-16 h-1 bg-blue-600 mb-6 sm:mb-8 lg:mb-8 mx-auto lg:ml-6"></div>
            <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[400px]">
              <Image
                src={myImage}
                alt="Prototype infographic flow diagram"
                layout="responsive"
                width={768}
                height={381}
                className="object-cover w-full h-full"
                priority={true}
              />
            </div>
          </div>
          {/* Right Side - Buttons */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start space-y-4 sm:space-y-6">
            <a
              href="https://www.youtube.com/embed/5ocCwSfbrnI?si=I-fj026swVRdBtgt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:no-underline"
            >
              <button className="hover:bg-blue-100 rounded-full flex items-center">
                <BsFillPlayCircleFill color="blue" size={50} className="sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px]" />
              </button>
              <span className="ml-2 text-sm sm:text-base lg:text-base">Click to watch video</span>
            </a>
            <button className="bg-blue-600 text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg hover:bg-blue-700 text-xs sm:text-sm lg:text-base">
              Get a Free Consultation
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white text-black py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-10 flex items-center justify-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-start justify-between gap-6 sm:gap-8">
          {/* Left Side - Why Choose Us Content */}
          <div className="w-full md:w-1/2 pr-0 md:pr-4 lg:pr-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-center lg:text-left">
              Why Choose Us?
            </h2>
            <div className="w-16 h-1 bg-blue-600 mb-4 sm:mb-6 mx-auto lg:mx-0"></div>
            <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 text-center lg:text-left">
              We ensure high-performance delivery and deployment of our iOS applications to ensure the highest ROI. Our comprehensive iOS app development services offer:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white border border-gray-200 p-3 sm:p-4 rounded-lg shadow-lg flex items-center space-x-3 sm:space-x-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
                <span className="text-xs sm:text-sm lg:text-base">360-Degree Solutions</span>
              </div>
              <div className="bg-white border border-gray-200 p-3 sm:p-4 rounded-lg shadow-lg flex items-center space-x-3 sm:space-x-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z" />
                </svg>
                <span className="text-xs sm:text-sm lg:text-base">Customized & Scalable Approach</span>
              </div>
              <div className="bg-white border border-gray-200 p-3 sm:p-4 rounded-lg shadow-lg flex items-center space-x-3 sm:space-x-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12zM6 8h12v2H6zm0 4h8v2H6z" />
                </svg>
                <span className="text-xs sm:text-sm lg:text-base">Proven Methodologies</span>
              </div>
              <div className="bg-white border border-gray-200 p-3 sm:p-4 rounded-lg shadow-lg flex items-center space-x-3 sm:space-x-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h6v-2h-4z" />
                </svg>
                <span className="text-xs sm:text-sm lg:text-base">Flexible Engagement Models</span>
              </div>
              <div className="bg-white border border-gray-200 p-3 sm:p-4 rounded-lg shadow-lg flex items-center space-x-3 sm:space-x-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H4V4h16v12zM4 20h16v2H4z" />
                </svg>
                <span className="text-xs sm:text-sm lg:text-base">Seamless In-House Development</span>
              </div>
              <div className="bg-white border border-gray-200 p-3 sm:p-4 rounded-lg shadow-lg flex items-center space-x-3 sm:space-x-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2zm0 8h-2v2h2z" />
                </svg>
                <span className="text-xs sm:text-sm lg:text-base">Competitive Pricing & Delivery</span>
              </div>
              <div className="bg-white border border-gray-200 p-3 sm:p-4 rounded-lg shadow-lg flex items-center space-x-3 sm:space-x-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2zm0 8h-2v2h2z" />
                </svg>
                <span className="text-xs sm:text-sm lg:text-base">Enterprise App Solutions</span>
              </div>
              <div className="bg-white border border-gray-200 p-3 sm:p-4 rounded-lg shadow-lg flex items-center space-x-3 sm:space-x-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2zm0 8h-2v2h-2v-2H9v-2h2v-4h2v4h2v2h-2z" />
                </svg>
                <span className="text-xs sm:text-sm lg:text-base">24/7 Technical Support</span>
              </div>
            </div>
          </div>
          {/* Right Side - Image Collage */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 sm:mt-8 md:mt-0">
            <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[610px] h-[300px] sm:h-[400px] lg:h-[700px]">
              <Image
                src="/assets/wearable-wcu.png"
                alt="Dashboard"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SixthSection;