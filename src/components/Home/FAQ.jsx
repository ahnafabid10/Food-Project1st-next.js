"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How do I order food from FoodHub?",
    answer:
      "Simply browse foods, view details, add your favorite items to the cart, and place your order securely.",
  },
  {
    question: "Is FoodHub available 24/7?",
    answer:
      "Yes! You can place orders anytime. Delivery time depends on restaurant availability.",
  },
  {
    question: "Can I add custom instructions to my order?",
    answer:
      "Absolutely. You can add special notes while placing your order.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We support cards, mobile banking, and cash on delivery depending on your location.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm bg-white dark:bg-gray-900"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="flex items-center justify-between w-full p-5 text-left"
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <FaChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-5 pb-5 text-gray-600 dark:text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
