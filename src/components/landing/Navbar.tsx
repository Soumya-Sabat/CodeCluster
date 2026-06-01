"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#categories", label: "Clusters" },
    { href: "#contact", label: "ContactUs" },
  ];

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 max-w-7xl mx-auto bg-slate-900/90 backdrop-blur-md border border-slate-800/60 rounded-3xl xl:rounded-full px-4 sm:px-6 py-3 shadow-lg transition-all">
      <div className="flex items-center justify-between gap-4">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 cursor-pointer group"
        onClick={() => setIsMenuOpen(false)}
      >
          <Image
            src="/images/logo.png"
            alt="CodeCluster Logo"
            height={50}
            width={98}
            className="object-contain"
            priority
          />
      </Link>

      {/* Navigation Links Mapped Dynamically */}
      <div className="hidden xl:flex items-center gap-6 text-l font-medium text-slate-400">
        {navLinks.map((link, index) => (
          <Link 
            key={index} 
            href={link.href} 
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="hidden xl:flex items-center gap-4">
        <button className="text-l font-medium text-slate-300 hover:text-white transition-colors hidden sm:block whitespace-nowrap">
          Sign In
        </button>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-l font-semibold px-4 py-2 rounded-full transition-all shadow-md shadow-indigo-600/20 whitespace-nowrap">
          Get Started
        </button>
      </div>

      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/80 text-slate-100 transition-colors hover:bg-slate-800 xl:hidden"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      </div>

      <div
        id="mobile-navigation"
        className={`grid overflow-hidden transition-all duration-300 xl:hidden ${
          isMenuOpen ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-1 border-t border-slate-800/80 pt-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-slate-800/80 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-3 grid gap-3 border-t border-slate-800/80 pt-4 sm:grid-cols-2">
              <button 
              className="rounded-full border border-slate-700 px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-slate-800 hover:text-white">
                Sign In
              </button>
              <button className="rounded-full bg-indigo-600 px-4 py-3 text-base font-semibold text-white shadow-md shadow-indigo-600/20 transition-colors hover:bg-indigo-500">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
