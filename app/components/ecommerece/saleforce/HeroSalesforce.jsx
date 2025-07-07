'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSalesforce() {
  return (
    <section className="bg-[#446f70] py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Column */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Powering Digital Transformation with <br />
            End-to-End Salesforce Consulting
          </h1>
          <p className="mt-4 text-white text-lg">
            Trust Nova Bloom, a Certified Salesforce MSP and Consulting Partner, to
            get more value out of the platform and bring real change in your organization.
          </p>

          <ul className="mt-6 space-y-3 text-white">
            <li className="flex items-start gap-2">
              <span className="text-white text-xl">✔</span> Tailor Salesforce for your Business
            </li>
            <li className="flex items-start gap-2">
              <span className="text-ehite text-xl">✔</span> Maximize the ROI of your investment
            </li>
            <li className="flex items-start gap-2">
              <span className="text-ehite text-xl">✔</span> Dedicated Salesforce experts that work closely with you
            </li>
          </ul>
              <Link href="/contact">

          <button className="mt-8 px-6 py-3 bg-[#446f40] hover:bg-[#446f20] text-white text-lg rounded-full font-semibold transition">
            Book a Free Consultation
          </button>
          </Link>
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
