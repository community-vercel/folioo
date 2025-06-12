"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiZap,
  FiLink,
  FiStar,
  FiEye,
  FiMinus,
  FiPlus,
} from "react-icons/fi"; // Imported Fi icons for benefits and FAQs

const benefits = [
  {
    title: "Automate for Efficiency",
    text: "Streamline repetitive tasks with smart automation, saving time and boosting conversions.",
    icon: FiZap,
  },
  {
    title: "Unify Your Data",
    text: "Connect siloed systems for seamless data flow and enhanced team collaboration.",
    icon: FiLink,
  },
  {
    title: "Elevate Customer Engagement",
    text: "Deliver personalized experiences to delight customers and build loyalty.",
    icon: FiStar,
  },
  {
    title: "Gain Deep Customer Insights",
    text: "Access a 360° view to anticipate needs and drive smarter decisions.",
    icon: FiEye,
  },
];

const faqs = [
  {
    question: "What value does a Salesforce consultant bring?",
    answer:
      "Our Salesforce consultants optimize your platform with tailored implementations, integrations, and customizations. They streamline operations, enhance customer engagement, and provide strategic guidance to align Salesforce with your business goals, ensuring measurable growth and efficiency.",
  },
  {
question: "How much does Salesforce consulting cost?",
answer:
"Costs depend on project scope and expertise required, typically ranging from $100–$300 per hour.",
  },
  {
question: "Which industries benefit most from Salesforce?",
answer:
"Salesforce powers success in finance, healthcare, retail, tech, and more with customized solutions.",
  },
];

export default function SalesforceBenefitsAndFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => setOpenIndex(index === openIndex ? null : index);

  return (
    <section className="w-full">
      {/* Top Benefit Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Transform Your Business with Salesforce
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-8">
            Leverage Salesforce’s powerful tools and our expertise to automate, connect, and personalize, driving growth and customer success.
          </p>
          <button className="bg-[#446f70] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-800 transition-colors duration-300 shadow-md">
            Hire Our Experts
          </button>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 mt-12 text-left">
          {benefits.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-blue-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <IconComponent className="text-3xl text-[#446f70] mb-4" />
                <h3 className="font-semibold text-xl text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#446f70] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Got Questions? We Have Answers
            </h2>
          </motion.div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="border-b last:border-none"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full p-5 text-left font-semibold text-base md:text-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
                >
                  {faq.question}
                  {openIndex === index ? (
                    <FiMinus size={20} className="text-blue-600" />
                  ) : (
                    <FiPlus size={20} className="text-blue-600" />
                  )}
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="p-5 text-sm text-gray-700 bg-white"
                  >
                    {faq.answer}
                  </motion.div>
                )}
</motion.div>            ))}
          </div>
        </div>
      </div>
    </section>
  );
}