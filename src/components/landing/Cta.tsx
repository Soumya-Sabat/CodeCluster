"use client"
import React from 'react';
export default function Cta() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Ready to code with your community?
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mb-8">
          Join thousands of developers who are learning faster, solving harder problems, and building real connections through CodeCluster.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-md shadow-indigo-600/20">
            Start with OTP →
          </button>
          <button className="w-full sm:w-auto bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 text-sm font-semibold px-6 py-3 rounded-xl transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}