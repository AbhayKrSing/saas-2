"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { NavBar } from "@/components/layout/navbar"; // Import NavBar
import { SiteFooter } from "@/components/layout/site-footer"; // Import SiteFooter

function ServiceBox({ id, title, icon }) {
  const router = useRouter();

  const goToServicePage = () => {
    router.push(`/services/${id}`); // Redirect to the sub-page
  };

  return (
    <div
      className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-black p-6 shadow-md transition-transform hover:scale-105 hover:shadow-lg"
      style={{
        backgroundColor: "#181A20",
        border: "2px solid #FCD535",
        borderRadius: "12px",
      }}
    >
      <div
        className="flex h-20 w-20 items-center justify-center rounded-full"
        style={{
          backgroundColor: "#FCD535",
        }}
      >
        <img
          src={icon}
          alt={title}
          className="h-16 w-16 object-contain"
          style={{
            borderRadius: "8px",
          }}
        />
      </div>
      <h3 className="text-center text-lg font-bold text-white">{title}</h3>
      <button
        onClick={goToServicePage}
        className="rounded border border-yellow-400 px-4 py-2 text-sm font-medium text-white transition hover:bg-yellow-400 hover:text-black"
      >
        Read More
      </button>
    </div>
  );
}

export default function ServiceGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const services = [
    {
      id: "graphic-design",
      title: "Graphic Design",
      category: "Graphic Design",
      icon: "/icons/graphic-design.png",
    },
    {
      id: "ui-ux",
      title: "UI/UX Designing",
      category: "UI/UX",
      icon: "/icons/ui-ux.png",
    },
    {
      id: "web-development",
      title: "Web Development",
      category: "Web Development",
      icon: "/icons/web-development.png",
    },
    {
      id: "shopify",
      title: "Shopify",
      category: "Shopify",
      icon: "/icons/shopify.png",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      category: "Digital Marketing",
      icon: "/icons/digital-marketing.png",
    },
    {
      id: "ai-integration",
      title: "AI Integration",
      category: "AI Integration",
      icon: "/icons/ai-integration.png",
    },
  ];

  const filters = [
    "All",
    "UI/UX",
    "Web Design",
    "Graphic Design",
    "Web Development",
    "Shopify",
  ];

  const filteredServices =
    activeFilter === "All"
      ? services
      : services.filter((service) => service.category === activeFilter);

  return (
    <>
      <NavBar />
      <div className="container mx-auto py-12">
        <h2 className="mb-6 text-center text-2xl font-semibold text-white">
          Solutions Designed For Your Digital Evolution
        </h2>

        <div className="mb-8 flex flex-wrap justify-center space-x-3">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`rounded-full px-6 py-2 text-sm font-medium transition ${
                activeFilter === filter
                  ? "bg-yellow-400 text-black"
                  : "border border-yellow-400 bg-black text-white hover:bg-yellow-400 hover:text-black"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, index) => (
            <ServiceBox key={index} {...service} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="rounded bg-yellow-400 px-6 py-3 text-sm font-medium text-black transition hover:bg-yellow-500">
            Load More
          </button>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
