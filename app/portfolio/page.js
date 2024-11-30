"use client";

import { useState } from "react"; // Import  hook

import { NavBar } from "@/components/layout/navbar"; // Import NavBar
import { SiteFooter } from "@/components/layout/site-footer"; // Import SiteFooter

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All"); // Set active filter state

  // Data for portfolio projects, now including categories for filtering
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A fully functional e-commerce website with a responsive design and shopping cart functionality.",
      link: "https://www.example.com/e-commerce",
      category: "Web Development",
    },
    {
      title: "Portfolio Website",
      description:
        "A sleek and modern portfolio website to showcase creative projects and work history.",
      link: "https://www.example.com/portfolio",
      category: "Web Development",
    },
    {
      title: "Blog Platform",
      description:
        "A dynamic blogging platform with user authentication, content management, and rich text editing.",
      link: "https://www.example.com/blog",
      category: "Content Management",
    },
    {
      title: "Social Media App",
      description:
        "A social media application with user profiles, real-time chat, and a news feed.",
      link: "https://www.example.com/social-media",
      category: "App Development",
    },
    {
      title: "Task Management Tool",
      description:
        "A task management tool to organize and prioritize work using Kanban boards.",
      link: "https://www.example.com/task-management",
      category: "Productivity",
    },
    {
      title: "Crypto Dashboard",
      description:
        "A cryptocurrency dashboard with real-time price tracking and portfolio management.",
      link: "https://www.example.com/crypto-dashboard",
      category: "Data Visualization",
    },
  ];

  // Filtered projects based on selected category
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <NavBar />
      <div
        className="flex min-h-screen flex-col items-center p-10"
        style={{ backgroundColor: "#181A20", color: "#FFFFFF" }}
      >
        {/* Header */}
        <header className="mb-12 text-center">
          <h1
            className="p-8 text-3xl font-bold uppercase tracking-widest"
            style={{ color: "#FCD535" }}
          >
            My Portfolio
          </h1>
        </header>

        {/* Filter Buttons */}
        <div className="mb-8 space-x-4">
          {[
            "All",
            "Web Development",
            "Content Management",
            "App Development",
            "Productivity",
            "Data Visualization",
          ].map((filter) => (
            <button
              key={filter}
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

        {/* Portfolio Boxes */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="flex w-full transform flex-col items-center justify-center p-6 shadow-xl transition-all hover:scale-105 hover:border-yellow-400 hover:shadow-2xl"
              style={{
                backgroundColor: "#181A20",
                color: "#FFFFFF",
                border: "2px solid #FCD535",
                height: "350px", // Adjust height for better spacing
                width: "350px", // Adjust width for better balance
                marginBottom: "30px", // Margin for spacing between boxes
                borderRadius: "12px", // Rounded corners for a soft look
                overflow: "hidden", // Ensures the image doesn't overflow the box
              }}
            >
              {/* Image - 70% of the box */}
              <div
                style={{
                  height: "70%",
                  width: "100%",
                  backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pimNL4SmCm2PRAUKct1TLfdXYp3m-aleVg&s')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "8px", // Round the image edges for consistency
                }}
              ></div>

              {/* Title */}
              <h2 className="mb-4 mt-4 text-center text-xl font-bold text-yellow-500">
                {project.title}
              </h2>

              {/* Description */}
              <p
                className="text-center text-sm"
                style={{
                  color: "#FFFFFFCC",
                  lineHeight: "1.5",
                }}
              >
                {project.description}
              </p>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-center font-bold text-[#ffff] hover:text-yellow-500"
                style={{ textDecoration: "none" }}
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
