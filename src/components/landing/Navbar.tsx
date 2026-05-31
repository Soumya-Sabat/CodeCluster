"use client"
import React from 'react';
import { Layers } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-4 right-4 z-50 max-w-7xl mx-auto bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="bg-indigo-600 p-1.5 rounded-lg text-white">
          <Layers className="h-5 w-5" />
        </div>
        <span className="text-white font-bold text-lg tracking-tight">CodeCluster</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
        <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
        <a href="#features" className="hover:text-white transition-colors">Features</a>
        <a href="#categories" className="hover:text-white transition-colors">Clusters</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center gap-4">
        <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors hidden sm:block">
          Explore Clusters
        </button>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all shadow-md shadow-indigo-600/20">
          Get Started
        </button>
      </div>
    </nav>
  );
}