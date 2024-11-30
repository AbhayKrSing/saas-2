import Link from "next/link";
import logo from "public/logo.png";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function HeroLanding() {
  return (
    <section
      className="flex h-screen items-center justify-center py-20 text-white"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div className="container flex flex-col items-center space-y-8 text-center">
        {/* Tagline */}
        <h1 className="text-[64px] font-bold leading-[72px] tracking-tight">
          Welcome to <span className="text-[#FCD535]">Yellow Agency</span>
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl text-lg leading-8 text-white/80">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio,
          illo facilis beatae fugiat, repellat voluptatum error laborum illum
          accusantium, dolor quibusdam voluptatibus nisi officiis voluptate
          praesentium magnam sunt tempore tempora nemo temporibus adipisci
          perspiciatis. Voluptas repellendus quas mollitia delectus ea.
        </p>

        {/* Call-to-action buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/about"
            prefetch={true}
            className={cn(
              buttonVariants({
                variant: "default",
                size: "lg",
                rounded: "full",
              }),
              "bg-[#FCD535] px-6 py-3 font-semibold text-black",
            )}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            prefetch={true}
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
                rounded: "full",
              }),
              "border-white px-6 py-3 font-semibold text-white",
            )}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
