import React from 'react';
import { RiAndroidLine } from "react-icons/ri";
import { GrAndroid } from "react-icons/gr";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { RiBusWifiLine } from "react-icons/ri";
import { MdOutlineWifiTetheringErrorRounded } from "react-icons/md";
import { MdTaxiAlert } from "react-icons/md";
import { TbNavigationShare } from "react-icons/tb";
import { MdBookOnline } from "react-icons/md";
import { MdAppSettingsAlt } from "react-icons/md";

import { MdDevicesOther } from "react-icons/md";



const ThirdSection = () => {
  return (
    <><section className="bg-blue-700 text-white py-16 px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Leverage Automotive Mobile Apps to Create Next <span className="block">Level Experiences</span></h2>
          <div className="w-16 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
              We have worked with automotive giants to create truly connected next-gen automotive mobility solutions. Let us help you revolutionize how your customers interact with their vehicles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2"><MdAppSettingsAlt color='black' size={32} /></div>
                  <p className="text-xl font-medium">Dealership & Marketplace Apps</p>
              </div>
              <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2"><GrAndroid color='black' size={32} /></div>
                  <p className="text-xl font-medium">Android Auto Apps</p>
              </div>
              <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2"><IoLogoAppleAppstore color='black' size={32} /></div>
                  <p className="text-xl font-medium">Apple Car Play Apps</p>
              </div>
              <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2"><RiBusWifiLine color='black' size={32} /></div>
                  <p className="text-xl font-medium">Vehicle Care Apps</p>
              </div>
              <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2"><MdOutlineWifiTetheringErrorRounded color='black' size={32} /></div>
                  <p className="text-xl font-medium">Vehicle Connectivity Apps</p>
              </div>
              <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2"><MdTaxiAlert color='black' size={32} /></div>
                  <p className="text-xl font-medium">Vehicle Maintenance Apps</p>
              </div>
              <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2"><TbNavigationShare color='black' size={32} /></div>
                  <p className="text-xl font-medium">Navigation Apps</p>
              </div>
              <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2"><MdBookOnline color='black' size={32} /></div>
                  <p className="text-xl font-medium">Ride-Hailing Apps</p>
              </div>
              <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2"><MdDevicesOther color='black' size={32} /></div>
                  <p className="text-xl font-medium">Custom IoT Integrations</p>
              </div>
          </div>
      </section>
      <section className="bg-[#0D1B2B] text-white py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-32 text-left">
      <p className="text-xs sm:text-sm lg:text-sm text-gray-300 mb-2">Reach out to us</p>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8">
        Have An Idea For An App, Talk To Us Today<br />For a Free Consultation!
      </h2>
      <div className="flex flex-col sm:flex-row justify-start gap-2 sm:gap-4">
        <button className="bg-blue-600 text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded hover:bg-blue-700 text-xs sm:text-sm lg:text-base">
          Get In Touch
        </button>
        <a
          href="tel:4083654638"
          className="bg-blue-600 text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded hover:bg-blue-700 text-xs sm:text-sm lg:text-base"
        >
          Call us: 408 365 4638
        </a>
        <a
          href="mailto:info@NovaBloom.com"
          className="bg-blue-600 text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded hover:bg-blue-700 text-xs sm:text-sm lg:text-base"
        >
          Email Us
        </a>
      </div>
    </section></>
  );
};

export default ThirdSection;