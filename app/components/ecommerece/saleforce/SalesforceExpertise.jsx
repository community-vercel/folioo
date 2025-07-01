import Link from "next/link";
import React from "react";

const certifications = [
  { src: "/salesforce/certified-administrator-logo.webp", alt: "B2C Commerce Developer" },
  { src: "/salesforce/certified-platform-app-builder-logo.webp", alt: "CPQ Specialist" },
  { src: "/salesforce/certified-platform-developer-II-logo.webp", alt: "Agentforce Specialist" },
  { src: "/salesforce/certified-platform-developer-logo.webp", alt: "AI Specialist" },
  { src: "/salesforce/certified-sharing-visibility-logo.webp", alt: "Data Cloud Consultant" },
  { src: "/salesforce/data-cloud-logo-updated.webp", alt: "Administrator" },
    { src: "/salesforce/sales-cloud-consultant-logo.webp", alt: "Data Cloud Consultant" },

];

export default function SalesforceExpertise() {
  return (
    <section className="px-6 md:px-12 py-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            10+ Years of Salesforce <br />
            Expertise Under Our Belt
          </h2>
          <Link href='/contact'>
          <button className="bg-[#446f70] hover:bg-[#002c5a] text-white font-semibold py-3 px-6 rounded-full transition">
            Schedule a Call
          </button>
          </Link>
 
        </div>

        {/* Right */}
        <div className="text-gray-700 space-y-4 text-base md:text-lg">
          <p>
            We’re a certified Salesforce MSP and Consulting Partner with expertise spanning in industries like Manufacturing, Technology, Agriculture, Healthcare, and Financial Services.
          </p>
          <p>
            Our Salesforce team is well versed in core Salesforce products like Marketing Cloud, Sales Cloud, Commerce Cloud, Service Cloud and – all powered by the secure Data Cloud and Artificial Intelligence.
          </p>
        </div>
      </div>

      {/* Badges */}
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {certifications.map((cert, idx) => (
          <div key={idx} className="w-28 md:w-32">
            <img
              src={cert.src}
              alt={cert.alt}
              width={128}
              height={128}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
