"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu on link click
  };

  return (
    <header className="w-full py-6 bg-white border-b-2 border-gray-100">
      <nav className="flex justify-evenly items-center text-nowrap whitespace-nowrap">
        {/* Logo */}
        <h1 className="text-3xl font-bold">
          <Link href="/">
            <span className="text-about-color">D</span>
            <span className="text-try-color">E</span>
            <span className="text-faq-color">I </span>
            <span className="text-main-color">Decoder</span>
          </Link>
        </h1>

        {/* Hamburger Menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-500 focus:outline-none"
          >
            {/* Icon: Hamburger */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links for larger screens */}
        <ul className="hidden md:flex space-x-12 text-xl font-extrabold">
          <li>
            <Link href="/about" className="text-about-color">
              About
            </Link>
          </li>
          <li>
            <Link href="/decoder" className="text-try-color">
              Try it Now
            </Link>
          </li>
          <li>
            <Link href="/faq" className="text-faq-color">
              FAQ
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu with transition */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 text-xl font-extrabold mt-4 text-center">
          <li>
            <Link href="/about" className="text-about-color border-b-2" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/decoder" className="text-try-color border-b-2" onClick={closeMenu}>
              Try it Now
            </Link>
          </li>
          <li>
            <Link href="/faq" className="text-faq-color border-b-2" onClick={closeMenu}>
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
