import React from 'react';
// Only importing standard structural icons to guarantee zero build failures
import { Layers, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-slate-900/60 bg-slate-950/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
        {/* Brand info */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-2">
            <Link
                href="/"
                className="flex items-center transition-transform active:scale-95"
              >
                  <Image
                    src="/images/logo.png"
                    alt="CodeCluster Logo"
                    height={70}
                    width={150}
                    className="object-contain"
                    priority
                  />
               </Link>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xs leading-relaxed">
            Collaborative coding communities for developers who believe learning is better together.
          </p>
          <div className="flex items-center gap-4 text-slate-500">
            {/* X (formerly Twitter) Icon */}
            <X className="h-4 w-4 hover:text-white cursor-pointer transition-colors" />
            
            {/* Direct Inline SVG for GitHub */}
            <a href="https://github.com/Soumya-Sabat" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            {/* Direct Inline SVG for LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 1 */}
        <div className="md:col-span-2 space-y-3">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Product</h4>
          <ul className="text-xs text-slate-400 space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">Explore Clusters</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sign Up</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Onboarding</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Resources</h4>
          <ul className="text-xs text-slate-400 space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Community Guidelines</a></li>
            <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Status Page</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Company</h4>
          <ul className="text-xs text-slate-400 space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal Attribution */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
        <p>© 2026 CodeCluster. All rights reserved.</p>
        <p>Made by 0xSoumya</p>
      </div>
    </footer>
  );
}