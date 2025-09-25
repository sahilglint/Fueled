"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-black text-white transition-transform duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-6 mt-6">
        <Link href="/" className="flex items-center">
          <Image
            src="https://fueled.com/wp-content/uploads/2025/05/fueled-logo-white.png"
            alt="Fueled"
            width={180}
            height={40}
          />
        </Link>

        <nav className="hidden md:flex gap-18 px-10 text-lg mt-6 font-semibold">
          <Link href="/expertise" className="hover:text-gray-300">
            Expertise
          </Link>
          <Link href="/work" className="hover:text-gray-300">
            Work
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            Company
          </Link>
          <Link href="/blog" className="hover:text-gray-300">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </nav>

        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-black px-6 pb-6">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <li>
              <Link
                href="/expertise"
                className="hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Expertise
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                className="hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Company
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
