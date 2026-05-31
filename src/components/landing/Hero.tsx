import React from 'react';
import { ArrowRight, Users, Radio, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4 block">
            Collaborative Coding Communities
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Learn faster. Code <br className="hidden sm:inline" />
            together. Grow with <br className="hidden sm:inline" />
            your peers.
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            Join coding clusters built for interview prep, competitive programming, and real-world problem solving. Practice with accountability partners, share solutions, and level up through structured peer learning.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
            <button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-indigo-600/20">
              Start with OTP
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700/60 font-semibold px-6 py-3 rounded-xl transition-colors">
              Explore Clusters
            </button>
          </div>

          {/* Micro Stats */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-medium text-slate-400 border-t border-slate-800/60 pt-6">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-indigo-400" />
              <span><strong className="text-white">2,400+</strong> developers</span>
            </div>
            <div className="flex items-center gap-2">
              <Radio className="h-4 w-4 text-indigo-400" />
              <span><strong className="text-white">340+</strong> active clusters</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-indigo-400" />
              <span><strong className="text-white">50k+</strong> messages shared</span>
            </div>
          </div>
        </div>

        {/* Right Content - Image Placeholder */}
        <div className="lg:col-span-5 flex justify-center items-center w-full min-h-[350px] lg:min-h-[450px]">
          {/* This matches the exact graphic area in dsacluster.jpg. Paste your asset inside this container later */}
          <div className="w-full h-full border border-dashed border-slate-800 rounded-2xl flex items-center justify-center bg-slate-900/20 text-slate-600 text-sm italic p-8">
            [ Right Side Hero Graphic Element Asset Goes Here ]
          </div>
        </div>
      </div>
    </section>
  );
}