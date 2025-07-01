"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
export default function PartnersSection() {
  const partners = [
    { src: "https://ecommerce.Nova Bloom.com/wp-content/uploads/2024/12/aws-partner-logo.webp?text=WooCommerce", alt: "Salesforce" },
    { src: "https://ecommerce.Nova Bloom.com/wp-content/uploads/2024/12/image-2.webp?text=WooCommerce", alt: "Shopify" },
    { src: "https://ecommerce.Nova Bloom.com/wp-content/uploads/2024/12/image-4.webp?text=BigCommerce", alt: "BigCommerce" },
    { src: "https://ecommerce.Nova Bloom.com/wp-content/uploads/2024/12/image-5.webp?text=WooCommerce", alt: "WooCommerce" },
  ];
   const faqs = [
    {
      question: "What is your development process?",
      answer:
        "Our Shopify development process is streamlined to ensure your online store meets your business needs and deadlines. Polishing, fine-tuning, and agile iterations ensure a successful launch.",
    },
    {
      question: "Why should I choose Shopify eCommerce development services for my business?",
      answer:
        "Shopify offers a robust platform with customizable themes, extensive app support, and reliable infrastructure, making it ideal for your eCommerce needs.",
    },
    {
      question: "How long does custom Shopify development take?",
      answer:
        "The timeline depends on the complexity of your store, typically ranging from a few weeks to a couple of months.",
    },
    {
      question: "Can you migrate my existing store to Shopify?",
      answer:
        "Yes, we can migrate your existing store to Shopify with minimal disruption, preserving SEO and customer experience.",
    },
    {
      question: "Do you offer custom Shopify development?",
      answer:
        "Yes, we provide tailored Shopify solutions to meet your specific business requirements.",
    },
    {
      question: "Can you integrate third-party apps and APIs with my Shopify store?",
      answer:
        "Yes, we can seamlessly integrate third-party apps and APIs to enhance your store’s functionality.",
    },
    {
      question: "Do you provide ongoing Shopify maintenance and support?",
      answer:
        "Yes, we offer ongoing maintenance and support to ensure your store runs smoothly.",
    },
    {
      question: "Can you optimize my Shopify store for SEO and speed?",
      answer:
        "Yes, we optimize your Shopify store for SEO, speed, and overall performance.",
    },
  ];
const reasons = [
    {
      title: "Fully Customizable Themes",
      desc: "Shopify offers a wide variety of themes to suit your brand’s design. You can customize every aspect of your store’s look and feel with ease.",
    },
    {
      title: "Extensive Community of Developers",
      desc: "Shopify boasts a global community of developers who can help you build the perfect store with apps, plugins, and more.",
    },
    {
      title: "Global Reach & International Shipping",
      desc: "Expand your business worldwide with Shopify’s tools for international shipping and multi-currency support.",
    },
    {
      title: "Reliable Ecommerce Infrastructure",
      desc: "Shopify provides a robust and secure infrastructure to support your online store, ensuring uptime and performance.",
    },
    {
      title: "Rapid, Sustainable Innovation",
      desc: "Shopify continually innovates with new features and updates, ensuring your store remains competitive and sustainable.",
    },
     {
      title: "Rapid, Sustainable Innovation",
      desc: "Shopify continually innovates with new features and updates, ensuring your store remains competitive and sustainable.",
    },
  ];
  return (
    <>
    <section className="py-16 bg-gradient-to-b from-green-100 to-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6">We’re Official Partners with</h2>
        <p className="text-sm md:text-base text-gray-700 mb-8">
          We’re proud partners with Shopify, BigCommerce, and Magento, providing solutions and outcomes to the best tools for your eCommerce success.
        </p>
        <div className="flex justify-center items-center flex-wrap gap-8">
          {partners.map((partner, index) => (
            <motion.img
              key={index}
              src={partner.src}
              alt={partner.alt}
              className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          ))}
        </div>
      </motion.div>
    </section>
    <section className="py-20 bg-gray-900 text-white">
      <motion.div
        className="max-w-6xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Migrate or Build Your Store on Shopify?</h2>
        <p className="text-sm md:text-base text-gray-400 mb-10">
          Here are a few reasons why millions of global eCommerce brands choose Shopify for their online store revolution.
        </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
  {reasons.map((reason, index) => (
    <motion.div
      key={index}
      className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="font-semibold text-lg md:text-xl mb-3">{reason.title}</h3>
      <p className="text-sm text-gray-300">{reason.desc}</p>
    </motion.div>
  ))}
</div>

        <motion.button
          className="mt-10 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link href='/contact'>
          Discover Your Need
         </Link>
        </motion.button>
      </motion.div>
    </section>
    <section className="bg-white py-20 bg-gray-800 text-gray-800">
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
        <div className="bg-white  grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => {
            const [isOpen, setIsOpen] = useState(false);
            return (
              <motion.div
                key={index}
                className="bg-[#f0f1f0] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                  <span>{isOpen ? "−" : "+"}</span>
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-2"
                >
                  <p className="text-sm text-gray-300">{faq.answer}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
    </>
  );
}