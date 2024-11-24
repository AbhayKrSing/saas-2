// app/about/page.js
import { NavBar } from "@/components/layout/navbar"; // Import NavBar
import { SiteFooter } from "@/components/layout/site-footer"; // Import SiteFooter

export default function About() {
  return (
    <>
      <NavBar />

      {/* About Us Section */}
      <div className="pb-6 sm:pb-12">
        <div className="container mx-auto p-8">
          {/* About Us Content */}
          <div className="rounded-xl md:bg-[#181A20] md:p-6 md:ring-1 md:ring-inset md:ring-border">
            <div className="relative h-[560px] overflow-hidden rounded-xl border border-[#FCD535] md:rounded-lg">
              {/* Adjusted height to make the div taller */}
              <div className="p-8 text-center text-white">
                {/* Title */}
                <h2 className="mb-6 text-4xl font-extrabold text-[#FCD535]">
                  About Us
                </h2>
                {/* Text */}
                <p className="mx-auto max-w-2xl text-lg leading-relaxed">
                  Welcome to our platform! Lorem ipsum dolor sit amet,
                  <br />
                  <br />
                  consectetur adipiscing elit. Proin nec arcu at arcu sodales
                  egestas. Amet deleniti fugit aliquid enim repellat tempora
                  aspernatur commodi odio, veniam magnam perferendis blanditiis
                  impedit consectetur culpa quidem. consectetur adipiscing elit.
                  Proin nec arcu at arcu sodales egestas. Amet deleniti fugit
                  aliquid enim repellat tempora aspernatur commodi odio, veniam
                  magnam perferendis blanditiis impedit consectetur culpa
                  quidem.
                  <br />
                  <br />
                  Blanditiis impedit consectetur culpa quidem. consectetur
                  adipiscing elit. Proin nec arcu at arcu sodales egestas. Amet
                  deleniti fugit aliquid enim repellat tempora aspernatur
                  commodi odio, veniam magnam perferendis blanditiis impedit.
                </p>
                {/* Button */}
                <div className="mt-8">
                  <button className="transform rounded-full bg-[#FCD535] px-6 py-3 text-lg font-medium text-[#181A20] transition duration-300 hover:scale-105 hover:bg-[#FFD64D] hover:text-[#000000]">
                    Reach Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
