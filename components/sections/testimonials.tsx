"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Curabitur vehicula est ut magna efficitur?",
    answer:
      "Curabitur vehicula est ut magna efficitur, nec volutpat lectus viverra.",
  },
  {
    question: "Quisque volutpat turpis a arcu vehicula?",
    answer:
      "Quisque volutpat turpis a arcu vehicula, vel varius neque ullamcorper.",
  },
  {
    question: "Aenean eget sapien quis risus tristique?",
    answer: "Aenean eget sapien quis risus tristique venenatis in a arcu.",
  },
  {
    question: "Aeien quis risus tristique?",
    answer: " sapien quis risus tristique venenatis in a arcu.",
  },
];

export default function FAQs() {
  return (
    <section className="py-20 text-white">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#FCD535]">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg text-white">
          Find answers to the most common questions below.
        </p>
      </div>

      {/* FAQs Section */}
      <div className="mt-12 flex justify-center">
        <div className="w-full max-w-3xl space-y-6">
          {/* Adjusted max width to max-w-3xl */}
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Accordion Component
interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion = ({ question, answer }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-xl border ${
        isOpen ? "border-[#FCD535]" : "border-gray-700"
      }`}
    >
      <button
        className="flex w-full items-center justify-between p-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-[#FCD535]">{question}</span>
        <span
          className={`ml-2 transform text-[#FCD535] duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="px-4 pb-4 text-gray-300">
          <p className="text-base">{answer}</p>
        </div>
      )}
    </div>
  );
};
