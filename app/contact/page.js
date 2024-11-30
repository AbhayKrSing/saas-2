import React from "react";
import Image from "next/image";
import logo from "public/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

import { NavBar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";

const ContactForm = () => {
  return (
    <>
      <NavBar />
      <div className="flex min-h-screen items-center justify-center bg-[#181A20] px-4 text-white">
        <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Left Section */}
          <div className="flex flex-col items-center space-y-6 md:items-start">
            <Image
              src={logo}
              height={280}
              width={280}
              alt="Portfolio Image"
              className="text-5xl font-bold tracking-wide text-[#FCD535] transition-transform hover:scale-105"
              style={{ fontFamily: "'Viga', sans-serif" }}
            />
            <h2 className="text-2xl font-bold md:text-3xl">Connect with Me</h2>
            <p className="text-lg text-gray-300">
              Lets Create, Collaborate, and Innovate Together!
            </p>
            <p className="text-gray-400">
              Explore exciting opportunities for podcasts and digital media
              partnerships. Open to innovative collaborations and paid ventures.
            </p>
            {/* Social Media Icons */}
            <div className="mt-6 flex space-x-4 text-2xl text-[#FCD535]">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hover:scale-110"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:scale-110"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:scale-110"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:scale-110"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6 rounded-lg bg-white p-8 text-white shadow-lg">
            <h3 className="text-center text-xl font-semibold">Get in Touch</h3>
            <form>
              <div className="space-y-4">
                {/* Full Name */}
                <div className="flex items-center rounded-lg border border-gray-300 bg-white p-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-transparent text-white outline-none"
                  />
                </div>
                {/* Email Address */}
                <div className="flex items-center rounded-lg border border-gray-300 bg-white p-2">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent text-white outline-none"
                  />
                </div>
                {/* WhatsApp Number */}
                <div className="flex items-center rounded-lg border border-gray-300 bg-white p-2">
                  <input
                    type="text"
                    placeholder="WhatsApp Number"
                    className="w-full bg-transparent text-white outline-none"
                  />
                </div>
                {/* Subject */}
                <div className="flex items-center rounded-lg border border-gray-300 bg-white p-2 text-white">
                  <select className="w-full bg-transparent text-black outline-none">
                    <option className="text-white">Select Subject</option>
                    <option>Podcast Collaboration</option>
                    <option>Digital Media Partnership</option>
                    <option>Paid Venture</option>
                  </select>
                </div>
                {/* Message */}
                <textarea
                  placeholder="Your Message Here"
                  className="h-32 w-full resize-none rounded-lg border border-gray-300 bg-[#ffff] p-2 text-white outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#FCD535] py-2 font-semibold text-white transition hover:bg-yellow-500"
              >
                Send Now
              </button>
            </form>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
};

export default ContactForm;
