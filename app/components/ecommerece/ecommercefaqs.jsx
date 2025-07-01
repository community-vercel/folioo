"use client";

import React, { useState } from "react";
import clsx from "clsx";

const testimonials = [
  {
    text: `“As you know our project is quite complicated & involves some fairly
intricate customizations. Overall we are very happy with the progress
so far… We are very happy to have selected Nova Bloom & are very much excited
to launch this Phase I and continue to work with you and your team on future phases!”`,
    name: "Omar bin Ali-Masoud",
    title: "Co-Chief Executive Officer, PureLife Dental",
    image:
      "https://ecommerce.Nova Bloom.com/wp-content/uploads/2020/04/pure-life.jpg",
  },
    {
    text: `“As you know our project is quite complicated & involves some fairly
intricate customizations. Overall we are very happy with the progress
so far… We are very happy to have selected Nova Bloom & are very much excited
to launch this Phase I and continue to work with you and your team on future phases!”`,
    name: "Omar bin Ali-Masoud",
    title: "Co-Chief Executive Officer, PureLife Dental",
    image:
      "https://ecommerce.Nova Bloom.com/wp-content/uploads/2020/04/pure-life.jpg",
  }, 
  // Add more items here if needed
];

const faqs = [
  {
    q: "What is the timeline of your Magento Development Company?",
    a:
      "The duration depends on the project’s complexity, level of customization, and required features and functionalities.",
  },
  {
    q: "What is the price range to create Magento Development Company Website?",
    a:
      "Costs depend on the required features, design complexity, and integrations needed.",
  },
  {
    q: "Does Nova Bloom provide continued support & maintenance after project completion?",
    a:
      "Yes, we provide ongoing support, maintenance, and optimization services.",
  },
  {
    q: "Is your Magento development company capable of integrating Magento websites with third-party systems?",
    a:
      "Absolutely, we specialize in Magento integrations with CRMs, ERPs, and other systems.",
  },
  {
    q: "How does Nova Bloom maintain high standards of quality?",
    a:
      "We use rigorous QA testing, agile processes, and deep domain expertise.",
  },
  {
    q: "Do you offer Magento Mobile App Development as well?",
    a: "Yes, we offer custom Magento mobile app development for iOS and Android.",
  },
];

export default function PixelPerfectSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const goPrev = () =>
    setCurrentSlide((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const goNext = () =>
    setCurrentSlide((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="w-full">
      {/* Testimonial slider */}
      <div className="bg-white py-16 text-center">
        <h3 className="text-sm text-orange-600 font-semibold mb-6 uppercase">
          Just Don’t Trust Our Word, Hear From Our Customers
        </h3>
        <div className="relative max-w-3xl mx-auto px-4 h-64">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={clsx(
                "absolute top-0 left-0 w-full h-full transition-opacity duration-500",
                {
                  "opacity-100": idx === currentSlide,
                  "opacity-0": idx !== currentSlide,
                }
              )}
            >
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {t.text}
              </p>
              <div className="flex flex-col items-center">
                <img src={t.image} alt={t.name} className="h-10 mb-2" />
                <p className="text-gray-800 text-sm font-semibold">
                  {t.name}
                </p>
                <p className="text-gray-500 text-xs">{t.title}</p>
              </div>
            </div>
          ))}

          {/* Navigation */}
          <button
            onClick={goPrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2"
          >
            ◀
          </button>
          <button
            onClick={goNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2"
          >
            ▶
          </button>

          {/* Dots */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={clsx(
                  "w-2 h-2 rounded-full",
                  idx === currentSlide ? "bg-orange-600" : "bg-gray-300"
                )}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contact form */}
      <div className="bg-[url('https://ecommerce.Nova Bloom.com/wp-content/uploads/2023/09/contactus-1.webp')] bg-cover bg-center py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold text-white mb-10">
            Let’s Get Your Magento Store Up and Running By Contacting Us!
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {["Name", "Company Name", "Email", "+ Phone"].map((ph, i) => (
              <input
                key={i}
                type={ph === "Email" ? "email" : "text"}
                placeholder={ph}
                className="p-3 text-white border border-gray-300 rounded-sm"
              />
            ))}
            <textarea
              placeholder="Project Details"
              rows={3}
              className="text-white col-span-full p-3 border border-gray-300 rounded-sm"
            />
            <div className="col-span-full text-left">
              <button
                type="submit"
                className="bg-black text-white px-8 py-2 rounded-sm hover:bg-gray-800 transition"
              >
                SUBMIT NOW
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* FAQ section */}
      <div className="bg-[#f2f6f9] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-xl font-semibold text-gray-900 mb-4">
            Frequently Asked Questions
          </h3>
          <div className="h-1 w-8 bg-orange-500 mx-auto mb-8" />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-sm shadow-sm"
              >
                <button
                  onClick={() =>
                    setActiveFAQ(activeFAQ === i ? null : i)
                  }
                  className="w-full flex justify-between px-4 py-3 text-left text-gray-800 font-medium"
                >
                  {faq.q}
                  <span className="text-xl">
                    {activeFAQ === i ? "-" : "+"}
                  </span>
                </button>
                {activeFAQ === i && (
                  <div className="px-4 pb-4 text-sm text-gray-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
