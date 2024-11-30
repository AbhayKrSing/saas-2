"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.png";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#181A20] shadow-md">
      <nav className="container mx-auto flex h-[60px] items-center justify-between px-4">
        {/* Brand Name */}
        <Image
          src={logo}
          height={200}
          width={200}
          alt="Portfolio Image"
          className="text-5xl font-bold tracking-wide text-[#FCD535] transition-transform hover:scale-105"
          style={{ fontFamily: "'Viga', sans-serif" }}
        />

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-6 md:flex">
          <Link href="/" className="text-white transition hover:text-[#FCD535]">
            Home
          </Link>
          <Link
            href="/about"
            className="text-white transition hover:text-[#FCD535]"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-white transition hover:text-[#FCD535]"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="text-white transition hover:text-[#FCD535]"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="rounded bg-[#FCD535] px-4 py-2 text-black transition hover:bg-black hover:text-[#FCD535]"
          >
            Contact Us
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button className="text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute left-0 top-[60px] w-full bg-[#181A20] shadow-md md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <Link
                  href="/"
                  className="text-white transition hover:text-[#FCD535]"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white transition hover:text-[#FCD535]"
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white transition hover:text-[#FCD535]"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-white transition hover:text-[#FCD535]"
                  onClick={() => setMenuOpen(false)}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white transition hover:text-[#FCD535]"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
