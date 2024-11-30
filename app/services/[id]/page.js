"use client";

import { useRouter } from "next/navigation";

import { NavBar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";

export default function ServiceDetails({ params }) {
  const router = useRouter();
  const { id } = params; // Dynamic route parameter, e.g., "graphic-design"

  // Data for all services
  const serviceDetails = {
    "graphic-design": {
      title: "Graphic Design",
      description:
        "Enhance your brand's visual identity with our expert graphic design services, including logo creation, branding, and promotional materials.",
      image: "/icons/graphic-design.png",
    },
    "ui-ux": {
      title: "UI/UX Designing",
      description:
        "Create user-friendly and visually appealing interfaces tailored to your audience for an unforgettable digital experience.",
      image: "/icons/ui-ux.png",
    },
    "web-development": {
      title: "Web Development",
      description:
        "Develop dynamic, fast, and secure websites tailored to your business needs with the latest technologies.",
      image: "/icons/web-development.png",
    },
    shopify: {
      title: "Shopify",
      description:
        "Build, customize, and manage your e-commerce store effortlessly with our Shopify solutions.",
      image: "/icons/shopify.png",
    },
    "digital-marketing": {
      title: "Digital Marketing",
      description:
        "Expand your reach with our digital marketing expertise, including SEO, social media management, and paid ad campaigns.",
      image: "/icons/digital-marketing.png",
    },
    "ai-integration": {
      title: "AI Integration",
      description:
        "Integrate cutting-edge AI solutions to automate processes, enhance customer experiences, and boost efficiency.",
      image: "/icons/ai-integration.png",
    },
  };

  // Fetch the appropriate service based on `id`
  const service = serviceDetails[id];

  // Handle invalid service IDs
  if (!service) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <h2 className="text-2xl font-bold">Service Not Found</h2>
        <button
          className="mt-4 rounded bg-yellow-400 px-6 py-2 text-black hover:bg-yellow-500"
          onClick={() => router.push("/services")}
        >
          Back to Services
        </button>
      </div>
    );
  }

  // Render the service details page
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-6 py-12">
          <img
            src={service.image}
            alt={service.title}
            className="mb-6 h-64 w-full rounded-lg object-cover shadow-lg"
          />
          <h1 className="text-center text-3xl font-bold text-yellow-400">
            {service.title}
          </h1>
          <p className="mt-4 text-center text-lg text-white">
            {service.description}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              className="rounded bg-yellow-400 px-6 py-3 text-black hover:bg-yellow-500"
              onClick={() => router.push("/services")}
            >
              Back to Services
            </button>
            <button
              className="rounded bg-blue-500 px-6 py-3 text-white hover:bg-blue-600"
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
