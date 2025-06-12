import React from 'react';
import { IoLogoAndroid, IoLogoIonic } from "react-icons/io";
import { FaReact, FaHtml5, FaVrCardboard } from "react-icons/fa";
import { SiSencha, SiNativescript, SiEnterprisedb } from "react-icons/si";
import { GiWifiRouter } from "react-icons/gi";
import { TbDeviceWatch } from "react-icons/tb";
import { MdOutlineSchema } from "react-icons/md";

const FourSection = () => {
  return (
    <section className="bg-white py-8 sm:py-10 lg:py-16 px-4 sm:px-6 lg:px-10 text-center">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-black text-center lg:text-left lg:ml-10">
        Home to Automotive Mobility Solution Experts
      </h2>
      <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
      <p className="text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 lg:mb-12 text-center lg:text-left max-w-3xl mx-auto lg:ml-10 text-black">
        Our expert automotive app developers deliver reliable and secure apps designed specifically to give you the edge you need. Therefore, no matter the requirement we have the expertise to conceptualize, develop, and deliver the perfect app for you and your business. We also offer a wide range of development services for our clients:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
        <div className="flex flex-col items-center">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="black"
            className="mb-2 sm:mb-3 lg:mb-2 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.365 1.43c0 1.14-.47 2.23-1.26 3.05-.79.81-1.87 1.35-3.01 1.27-.13-1.1.39-2.28 1.19-3.06.81-.84 2.04-1.46 3.08-1.46.03.07.05.13.07.2.02.06.03.12.03.18zM20.82 17.91c-.39.91-.57 1.29-1.06 2.05-.69 1.09-1.68 2.44-2.91 2.45-1.12.01-1.41-.72-2.91-.71-1.5.01-1.82.72-2.93.72-1.22-.01-2.15-1.11-2.84-2.18C6.03 19.1 4 13.65 6.26 10.12c.83-1.29 2.32-2.11 3.94-2.13 1.23-.02 2.4.82 3.17.82.76 0 2.23-1.02 3.77-.87.64.03 2.44.26 3.59 1.96-.09.06-2.14 1.25-2.11 3.72.03 2.95 2.61 3.92 2.7 3.99z"/>
          </svg>
          <p className="text-sm sm:text-base lg:text-[18px] font-semibold text-black">iOS App Development</p>
        </div>
        <div className="flex flex-col items-center">
          <IoLogoAndroid color="black" size={36} className="mb-2 sm:mb-3 lg:mb-2 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          <p className="text-sm sm:text-base lg:text-[18px] font-semibold text-black">Android App Development</p>
        </div>
        <div className="flex flex-col items-center">
          <FaReact color="black" size={36} className="mb-2 sm:mb-3 lg:mb-2 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          <p className="text-sm sm:text-base lg:text-[18px] font-semibold text-black">React Native App Development</p>
        </div>
        <div className="flex flex-col items-center">
          <IoLogoIonic color="black" size={36} className="mb-2 sm:mb-3 lg:mb-2 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          <p className="text-sm sm:text-base lg:text-[18px] font-semibold text-black">Ionic App Development</p>
        </div>
        <div className="flex flex-col items-center">
          <SiSencha color="black" size={36} className="mb-2 sm:mb-3 lg:mb-2 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          <p className="text-sm sm:text-base lg:text-[18px] font-semibold text-black">Sencha App Development</p>
        </div>
        <div className="flex flex-col items-center">
          <SiNativescript color="black" size={36} className="mb-2 sm:mb-3 lg:mb-2 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          <p className="text-sm sm:text-base lg:text-[18px] font-semibold text-black">NativeScript App Development</p>
        </div>
        <div className="flex flex-col items-center">
          <FaHtml5 color="black" size={36} className="mb-2 sm:mb-3 lg:mb-2 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          <p className="text-sm sm:text-base lg:text-[18px] font-semibold text-black">HTML5 App Development</p>
        </div>
        <div className="flex flex-col items-center">
          <FaVrCardboard color="black" size={36} className="mb-2 sm:mb-3 lg:mb-2 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          <p className="text-sm sm:text-base lg:text-[18px] font-semibold text-black">AR/VR App Development</p>
        </div>
        <div className="flex flex-col items-center">
          <GiWifiRouter color="black" size={36} className="mb-2 sm:mb-3 lg:mb-2 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          <p className="text-sm sm:text-base lg:text-[18px] font-semibold text-black">IoT App Development</p>
        </div>
        <div className="flex flex-col items-center">
          <TbDeviceWatch color="black" size={36} className="mb-2 sm:mb-3 lg:mb-2 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          <p className="text-sm sm:text-base lg:text-[18px] font-semibold text-black">Wearable App Development</p>
        </div>
        <div className="flex flex-col items-center">
          <SiEnterprisedb color="black" size={36} className="mb-2 sm:mb-3 lg:mb-2 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          <p className="text-sm sm:text-base lg:text-[18px] font-semibold text-black">Enterprise App Development</p>
        </div>
        <div className="flex flex-col items-center">
          <MdOutlineSchema color="black" size={36} className="mb-2 sm:mb-3 lg:mb-2 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          <p className="text-sm sm:text-base lg:text-[18px] font-semibold text-black">Mobile App Prototyping</p>
        </div>
      </div>
    </section>
  );
};

export default FourSection;