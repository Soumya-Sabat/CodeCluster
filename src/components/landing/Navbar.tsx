import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Layers } from 'lucide-react';


export default function Navbar() {
  const navLinks = [
    { href: "/about", label: "About" },
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#categories", label: "Clusters" },
    { href: "#contact", label: "ContactUs" },
  ];

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 max-w-7xl mx-auto bg-slate-900/80 backdrop-blur-md border border-slate-800/60 rounded-full px-6 py-3 flex items-center justify-between shadow-lg transition-all">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 cursor-pointer group">
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
      <div className="flex items-center gap-4">
        <button className="text-l font-medium text-slate-300 hover:text-white transition-colors hidden sm:block whitespace-nowrap">
          Sign In
        </button>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-l font-semibold px-4 py-2 rounded-full transition-all shadow-md shadow-indigo-600/20 whitespace-nowrap">
          Get Started
        </button>
      </div>
    </nav>
  );
}