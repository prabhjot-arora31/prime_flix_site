"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/page/netflix", label: "Netflix" },
    { href: "/page/primevideo", label: "Prime Video" },
    { href: "/page/disney-plus", label: "Disney Plus" },
    { href: "/page/discover", label: "Discover" },
  ];

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
          <span className="text-purple-500 font-bold text-2xl hidden sm:inline">
            PrimeFlix
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-300 text-base font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-purple-500 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Hamburger Button */}
        <button
          className="md:hidden text-white focus:outline-none relative w-8 h-8 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.span
            initial={false}
            animate={isMenuOpen ? "open" : "closed"}
            className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-white rounded"
            variants={{
              closed: { rotate: 0, x: "-50%", y: "-8px" },
              open: { rotate: 45, x: "-50%", y: "-50%" },
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            initial={false}
            animate={isMenuOpen ? "open" : "closed"}
            className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-white rounded"
            variants={{
              closed: { opacity: 1, scaleX: 1, x: "-50%", y: "-50%" },
              open: { opacity: 0, scaleX: 0, x: "-50%", y: "-50%" },
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            initial={false}
            animate={isMenuOpen ? "open" : "closed"}
            className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-white rounded"
            variants={{
              closed: { rotate: 0, x: "-50%", y: "8px" },
              open: { rotate: -45, x: "-50%", y: "-50%" },
            }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0D0C0A] z-40 flex flex-col justify-center items-center space-y-6 text-white text-xl font-semibold"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-purple-500 transition text-2xl"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
