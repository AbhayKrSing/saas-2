import * as React from "react";
import Link from "next/link";

import { footerLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/layout/mode-toggle";

import { NewsletterForm } from "../forms/newsletter-form";
import { Icons } from "../shared/icons";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer
      className={cn("border-t", className)}
      style={{ backgroundColor: "#181A20" }}
    >
      <div className="container grid max-w-6xl grid-cols-2 gap-6 py-14 md:grid-cols-5">
        {footerLinks.map((section) => (
          <div key={section.title}>
            <span className="text-sm font-medium" style={{ color: "#FCD535" }}>
              {section.title}
            </span>
            <ul className="mt-4 list-inside space-y-3">
              {section.items?.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#FCD535]"
                    style={{ color: "#FFFFFF" }}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="col-span-full flex flex-col items-end sm:col-span-1 md:col-span-2">
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t py-4" style={{ borderColor: "#FCD535" }}>
        <div className="container flex max-w-6xl items-center justify-between">
          <p className="text-center text-sm" style={{ color: "#FFFFFF" }}>
            All rights reserved by{" "}
            <span className="font-medium text-[#FCD535]">BrandName</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
