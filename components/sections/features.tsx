import Image from "next/image";

import { testimonials } from "@/config/landing";

export default function Testimonials() {
  return (
    <section className="text-white">
      <div className="container flex max-w-6xl flex-col gap-10 py-32 sm:gap-y-16">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#FCD535]">
            What our clients are sharing.
          </h2>
          <p className="mt-4 text-lg text-[#FFFFFF]">
            Discover the glowing feedback from our delighted customers
            worldwide.
          </p>
        </div>

        <div className="column-1 gap-5 space-y-5 md:columns-2 lg:columns-3">
          {testimonials.map((item) => (
            <div className="break-inside-avoid" key={item.name}>
              <div className="relative rounded-xl border border-[#FCD535]">
                <div className="flex flex-col px-4 py-5 sm:p-6">
                  <div>
                    <div className="relative mb-4 flex items-center gap-3">
                      <span className="relative inline-flex size-10 shrink-0 items-center justify-center rounded-full text-base">
                        <Image
                          width={100}
                          height={100}
                          className="size-full rounded-full border border-[#FCD535]"
                          src={item.image}
                          alt={item.name}
                        />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#FCD535]">
                          {item.name}
                        </p>
                        <p className="text-sm text-[#FFFFFF]">{item.job}</p>
                      </div>
                    </div>
                    <q className="text-[#FFFFFF]">{item.review}</q>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
