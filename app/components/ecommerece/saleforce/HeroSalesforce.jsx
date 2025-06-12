'use client';

import Image from 'next/image';

export default function HeroSalesforce() {
  return (
    <section className="bg-gradient-to-r from-[#d7edf8] to-[#e4f3fb] py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Column */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Powering Digital Transformation with <br />
            End-to-End Salesforce Consulting
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Trust Nova Bloom, a Certified Salesforce MSP and Consulting Partner, to
            get more value out of the platform and bring real change in your organization.
          </p>

          <ul className="mt-6 space-y-3 text-gray-800">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 text-xl">✔</span> Tailor Salesforce for your Business
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 text-xl">✔</span> Maximize the ROI of your investment
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 text-xl">✔</span> Dedicated Salesforce experts that work closely with you
            </li>
          </ul>

          <button className="mt-8 px-6 py-3 bg-[#446f70] hover:bg-[#001e49] text-white text-lg rounded-full font-semibold transition">
            Book a Free Consultation
          </button>
        </div>

        {/* Right Column - Badges */}
        <div className="flex gap-6 justify-center items-center flex-wrap">
          <Image
            src="/salesforce/award-2024.webp"
            alt="Salesforce Appexchange"
            width={140}
            height={160}
            className="rounded-lg shadow-md"
          />
          <Image
            src="/salesforce/consulting-partner-img-top-banner.webp"
            alt="Salesforce Consulting Partner"
            width={140}
            height={160}
            className="rounded-lg shadow-md"
          />
          <Image
            src="/salesforce/partner-msp-top-banner-img.webp"
            alt="Salesforce Partner MSP"
            width={140}
            height={160}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
