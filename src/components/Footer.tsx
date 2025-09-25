"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-12 lg:px-20 py-30  relative w-full">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-start gap-10">
        <div className="flex flex-col space-y-4 text-lg items-center lg:items-start">
          {["Expertise", "Work", "Company", "Blog"].map((link) => (
            <a
              key={link}
              href="#"
              className="relative w-fit group"
            >
              {link}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex flex-col space-y-4 text-lg items-center lg:items-start">
          {["Contact", "Careers", "Diversity"].map((link) => (
            <a
              key={link}
              href="#"
              className="relative w-fit group"
            >
              {link}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex flex-col space-y-3 text-sm lg:text-base items-center lg:items-end text-center lg:text-right">
          <a
            href="mailto:hello@fueled.com"
            className="relative w-fit group"
          >
            sahilglint@gmail.com
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="tel:+12127637726"
            className="relative w-fit group"
          >
            6397863981
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-fit group flex items-center gap-1"
          >
            LinkedIn
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            <span className="ml-1">↗</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8">
        <div className="flex justify-center lg:justify-start w-full lg:w-auto">
          <Image
            src="https://fueled.com/wp-content/uploads/2025/05/fueled-logo-white.png"
            alt="Fueled"
            width={300}
            height={80}
            className="object-contain"
          />
        </div>

        <div className="flexs flex-col lg:flex-row lg:items-center lg:gap-8 text-sm text-gray-300 text-center lg:text-left gap-2">
          <a href="#" className="relative w-fit mx-auto  lg:mx-4 group">
            Privacy Policy
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <span>Fueled is carbon neutral</span>
          <span>© 2025 Fueled • Sahil Glint</span>
        </div>
      </div>
    </footer>
  );
}
