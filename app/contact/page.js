import React from "react";

import { NavBar } from "@/components/layout/navbar"; // Import NavBar
import { SiteFooter } from "@/components/layout/site-footer"; // Import SiteFooter

const ContactForm = () => {
  return (
    <>
      <NavBar /> {/* Add the NavBar component */}
      <div className="flex min-h-screen items-center justify-center bg-[#181A20] px-4 text-white">
        <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Left Section */}
          <div className="flex flex-col items-center space-y-6 md:items-start">
            <img
              src="/profile-picture.png" // Replace with your profile image URL
              alt="Profile"
              className="h-32 w-32 rounded-full border-4 border-[#FCD535]"
            />
            <h2 className="text-2xl font-bold md:text-3xl">Connect with Me</h2>
            <p className="text-lg text-gray-300">
              Lets Create, Collaborate, and Innovate Together!
            </p>
            <p className="text-gray-400">
              Explore exciting opportunities for podcasts and digital media
              partnerships. Open to innovative collaborations and paid ventures.
            </p>
            <div className="flex space-x-4 text-2xl text-[#FCD535]">
              {/* Social Media Icons */}
              <a href="#" aria-label="Instagram" className="hover:scale-110">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="TikTok" className="hover:scale-110">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" aria-label="Facebook" className="hover:scale-110">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" aria-label="YouTube" className="hover:scale-110">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:scale-110">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6 rounded-lg bg-white p-8 text-black shadow-lg">
            <h3 className="text-center text-xl font-semibold">Get in Touch</h3>
            <form>
              <div className="space-y-4">
                {/* Full Name */}
                <div className="flex items-center rounded-lg bg-gray-100 p-2">
                  <i className="fas fa-user mr-2 text-gray-400"></i>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
                {/* Email Address */}
                <div className="flex items-center rounded-lg bg-gray-100 p-2">
                  <i className="fas fa-envelope mr-2 text-gray-400"></i>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
                {/* WhatsApp Number */}
                <div className="flex items-center rounded-lg bg-gray-100 p-2">
                  <i className="fab fa-whatsapp mr-2 text-gray-400"></i>
                  <input
                    type="text"
                    placeholder="WhatsApp Number"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
                {/* Subject */}
                <div className="flex items-center rounded-lg bg-gray-100 p-2">
                  <i className="fas fa-question-circle mr-2 text-gray-400"></i>
                  <select className="w-full bg-transparent outline-none">
                    <option>Select Subject</option>
                    <option>Podcast Collaboration</option>
                    <option>Digital Media Partnership</option>
                    <option>Paid Venture</option>
                  </select>
                </div>
                {/* Message */}
                <textarea
                  placeholder="Your Message Here"
                  className="h-32 w-full resize-none rounded-lg bg-gray-100 p-2 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#FCD535] py-2 font-semibold text-black transition hover:bg-yellow-500"
              >
                Send Now
              </button>
            </form>
          </div>
        </div>
      </div>
      <SiteFooter /> {/* Add the SiteFooter component */}
    </>
  );
};

export default ContactForm;
