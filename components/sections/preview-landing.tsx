// components/AboutUsSection.tsx
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function AboutUsSection() {
  return (
    <div className="pb-6 sm:pb-12">
      <MaxWidthWrapper>
        {/* About Us Section Container */}
        <div className="rounded-xl md:bg-muted/30 md:p-4 md:ring-1 md:ring-inset md:ring-border">
          {/* About Us Content */}
          <div className="relative h-[400px] overflow-hidden rounded-xl border md:rounded-lg">
            {/* Increased height */}
            {/* About Us Text (Moved inside the container) */}
            <div className="p-8 text-center">
              {" "}
              {/* Increased padding */}
              <h2 className="mb-4 text-4xl font-extrabold text-[#FCD535]">
                {" "}
                {/* Adjusted font size */}
                About Us
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-[#ffff]">
                {" "}
                {/* Increased font size */}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                deleniti fugit aliquid enim repellat tempora aspernatur commodi
                odio, veniam magnam perferendis blanditiis impedit consectetur
                culpa quidem, eum cumque suscipit qui ut dignissimos eius et
                totam vero veritatis? Animi reprehenderit esse dignissimos nulla
                rerum, praesentium nisi consequuntur, neque a sequi culpa.{" "}
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                iure quis, maiores quod fugiat similique consectetur vero
                perferendis. Explicabo facere provident exercitationem officia
                pariatur odit minima obcaecati magnam blanditiis architecto.{" "}
                <br />
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
