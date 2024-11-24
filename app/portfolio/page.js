import { NavBar } from "@/components/layout/navbar"; // Import NavBar
import { SiteFooter } from "@/components/layout/site-footer"; // Import SiteFooter

export default function Portfolio() {
  // Data for portfolio projects

  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A fully functional e-commerce website with a responsive design and shopping cart functionality.",
    },
    {
      title: "Portfolio Website",
      description:
        "A sleek and modern portfolio website to showcase creative projects and work history.",
    },
    {
      title: "Blog Platform",
      description:
        "A dynamic blogging platform with user authentication, content management, and rich text editing.",
    },
    {
      title: "Social Media App",
      description:
        "A social media application with user profiles, real-time chat, and a news feed.",
    },
    {
      title: "Task Management Tool",
      description:
        "A task management tool to organize and prioritize work using Kanban boards.",
    },
    {
      title: "Crypto Dashboard",
      description:
        "A cryptocurrency dashboard with real-time price tracking and portfolio management.",
    },
  ];

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
            className="p-4 text-3xl font-bold uppercase tracking-widest"
            style={{ color: "#FCD535" }}
          >
            My Portfolio
          </h1>
          <p
            className="mt-4 text-lg font-medium tracking-wide"
            style={{ color: "#FFFFFF" }}
          >
            Showcasing My Work in Style
          </p>
        </header>

        {/* Portfolio Boxes */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-center justify-center p-6 shadow-lg transition-transform hover:scale-105"
              style={{
                backgroundColor: "#181A20",
                color: "#FFFFFF",
                border: "2px solid #FCD535",
                height: "300px",
                width: "300px",
              }}
            >
              <h2 className="mb-4 text-center text-xl font-bold text-yellow-500">
                {project.title}
              </h2>
              <p
                className="text-center text-sm"
                style={{
                  color: "#FFFFFFCC",
                  lineHeight: "1.5",
                }}
              >
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
