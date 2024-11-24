"use client";

import { useState } from "react";

// ServiceBox component that displays the individual service details in a modal
interface ServiceBoxProps {
  title: string;
  shortDescription: string;
  serviceDetails: string;
  faqs: string[];
}

const ServiceBox = ({
  title,
  shortDescription,
  serviceDetails,
  faqs,
}: ServiceBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="w-full p-2">
      {/* Service box that triggers the modal */}
      <div
        className="relative h-64 cursor-pointer overflow-hidden rounded-xl border bg-[#181A20] p-8 text-white transition-all hover:scale-105 hover:shadow-xl"
        onClick={openModal}
      >
        {/* Title at the top */}
        <h3 className="absolute left-1/2 top-4 -translate-x-1/2 transform text-center text-2xl font-bold text-[#FCD535]">
          {title}
        </h3>

        {/* Centered content */}
        <div className="flex h-full flex-col items-center justify-center text-center">
          <p className="text-lg text-gray-300">{shortDescription}</p>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#181A20] bg-opacity-80"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-lg scale-90 transform rounded-lg bg-white p-6 opacity-100 transition-all duration-300 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-2 top-2 text-xl text-gray-500 hover:text-gray-800"
              onClick={closeModal}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-[#FCD535]">{title}</h3>
            <p className="mt-2 text-lg text-[#181A20]">{serviceDetails}</p>

            <div className="mt-4">
              <h4 className="text-xl font-semibold text-[#FCD535]">FAQs:</h4>
              <ul className="list-disc pl-6">
                {faqs.map((faq, index) => (
                  <li key={index} className="text-lg text-[#181A20]">
                    {faq}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 text-center">
              <button className="transform rounded-lg bg-[#FCD535] px-6 py-2 text-[#181A20] transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#ffcc00]">
                Reach Us
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// BentoGrid component that contains multiple service boxes
export default function BentoGrid() {
  const services = [
    {
      title: "Service 1",
      shortDescription: "Short description of Service 1.",
      serviceDetails: "Detailed information about Service 1.",
      faqs: ["FAQ 1", "FAQ 2", "FAQ 3"],
    },
    {
      title: "Service 2",
      shortDescription: "Short description of Service 2.",
      serviceDetails: "Detailed information about Service 2.",
      faqs: ["FAQ 1", "FAQ 2", "FAQ 3"],
    },
    {
      title: "Service 3",
      shortDescription: "Short description of Service 3.",
      serviceDetails: "Detailed information about Service 3.",
      faqs: ["FAQ 1", "FAQ 2", "FAQ 3"],
    },
    {
      title: "Service 4",
      shortDescription: "Short description of Service 4.",
      serviceDetails: "Detailed information about Service 4.",
      faqs: ["FAQ 1", "FAQ 2", "FAQ 3"],
    },
    {
      title: "Service 5",
      shortDescription: "Short description of Service 5.",
      serviceDetails: "Detailed information about Service 5.",
      faqs: ["FAQ 1", "FAQ 2", "FAQ 3"],
    },
    {
      title: "Service 6",
      shortDescription: "Short description of Service 6.",
      serviceDetails: "Detailed information about Service 6.",
      faqs: ["FAQ 1", "FAQ 2", "FAQ 3"],
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="mb-8 text-center text-4xl font-extrabold text-[#FCD535]">
        Our Services
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, index) => (
          <ServiceBox key={index} {...service} />
        ))}
      </div>
    </div>
  );
}
