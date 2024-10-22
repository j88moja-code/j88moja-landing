"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle"; // Adjust based on your imports

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is J88Moja Systems, and what do you offer?",
      answer:
        "J88Moja Systems is a technology(custom software development) company dedicated to providing innovative solutions that empower businesses to improve efficiency, enhance decision-making, and drive growth.",
    },
    {
      question: "How can J88Moja Systems improve our business operations?",
      answer:
        "We offer a suite of tools designed to automate processes, integrate data, and provide insights through advanced analytics. This helps streamline operations and optimize performance.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We specialize in serving SMEs in the manufacturing sector. Our deep expertise and innovative solutions, however, extend beyond these boundaries, allowing us to cater to a wide range of sectors. We pride ourselves on crafting tailored solutions that address the specific challenges and unique needs of each industry, ensuring maximum efficiency, sustainability, and success for our clients.",
    },
    {
      question: "Can I customize the solutions to fit my specific needs?",
      answer:
        "Absolutely! Our solutions are highly customizable, allowing you to adapt them to your specific business requirements and challenges.",
    },
    {
      question: "What support options are available for customers?",
      answer:
        "We provide comprehensive customer support, including onboarding assistance, training sessions, and technical support to ensure you get the most out of our solutions.",
    },
  ];

  return (
    <section id="faq" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Frequently Asked Questions"
          paragraph="Here are some of our FAQs, if you have any other questions you'd like answered please feel free to get in touch."
          center
          mb="80px"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg bg-white p-6 shadow-lg transition-transform dark:bg-gray-700 ${activeIndex === index ? "expanded" : ""}`}
            >
              <div
                className="flex cursor-pointer justify-between"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                <span className="text-primary dark:text-white">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
