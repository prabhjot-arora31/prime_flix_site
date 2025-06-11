"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#0D0C0A] sticky top-0 z-50 border-b border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/images/prime_flix_logo.png"
            alt="PrimeFlix Logo"
            className="h-10 w-auto"
          />
          <span className="text-purple-500 font-bold text-xl hidden sm:inline">
            PrimeFlix
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-300 text-sm font-medium">
          <Link href="/" className="hover:text-purple-500 transition">
            Home
          </Link>
          <Link
            href="/page/netflix"
            className="hover:text-purple-500 transition"
          >
            Netflix
          </Link>
          <Link
            href="/page/primevideo"
            className="hover:text-purple-500 transition"
          >
            Prime Video
          </Link>
          <Link
            href="/page/hotstar"
            className="hover:text-purple-500 transition"
          >
            Hotstar
          </Link>
          <Link
            href="/page/discover"
            className="hover:text-purple-500 transition"
          >
            Discover
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 space-y-2 text-gray-300 text-sm font-medium px-4">
          <Link
            href="/"
            className="block hover:text-purple-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/page/netflix"
            className="block hover:text-purple-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Netflix
          </Link>
          <Link
            href="/page/primevideo"
            className="block hover:text-purple-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Prime Video
          </Link>
          <Link
            href="/page/hotstar"
            className="block hover:text-purple-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Hotstar
          </Link>
          <Link href="/page/discover" className="block hover:text-purple-500">
            Discover
          </Link>
        </div>
      )}
    </header>
  );
}
