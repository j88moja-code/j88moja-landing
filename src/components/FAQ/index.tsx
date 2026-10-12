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
      question: "What is TissueMate?",
      answer:
        "A web-based tool for tissue and paper plants to record shift production, stops and their causes in one place, and to see reports across shifts and machines.",
    },
    {
      question: "Who is it for?",
      answer:
        "Smaller tissue mills where shift data still lives on paper logs, whiteboards or spreadsheets. It currently covers one paper machine per site, running day and night shifts.",
    },
    {
      question: "How long does setup take?",
      answer:
        "About a week. I load your equipment list and product specifications, and train your supervisors.",
    },
    {
      question: "What does it cost?",
      answer:
        "Pilots start from R500/month. The price after the pilot is agreed before you start, so there are no surprises.",
    },
    {
      question: "Do we need to install anything?",
      answer:
        "No. TissueMate runs in a web browser, so supervisors can use the computers or devices you already have.",
    },
    {
      question: "What happens to our data?",
      answer:
        "Your data belongs to you. Before a pilot starts, we sign an agreement covering what is stored, where, who can see it, and how it is deleted if you stop, in line with POPIA.",
    },
  ];

  return (
    <section id="faq" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Questions plant managers ask"
          paragraph="Something else on your mind? Send a message below or book a call."
          center
          mb="80px"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg bg-white p-6 shadow-lg transition-transform dark:bg-gray-700 ${activeIndex === index ? "expanded" : ""}`}
            >
              <button
                type="button"
                className="flex w-full cursor-pointer justify-between text-left"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                <span aria-hidden="true" className="text-primary dark:text-white">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
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
