"use client";

import React from 'react';
import { ShieldAlert, Zap, Flame, Compass, Mail, Briefcase, HelpCircle } from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import Cta from '@/components/landing/Cta';
import Footer from '@/components/landing/Footer';

// ==========================================
// 1. ABOUT HERO SUB-COMPONENT
// ==========================================
function AboutHero() {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4 block">
          Our Mission
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
          Killing the isolation <br />
          in modern tech learning.
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          CodeCluster was born out of a simple realization: grinding data structures, algorithms, and complex systems alone is brutal. We are building the social infrastructure for developers to team up, defeat tutorial hell, and scale their careers together.
        </p>
      </div>
    </section>
  );
}

// ==========================================
// 2. ORIGIN STORY SUB-COMPONENT
// ==========================================
function Story() {
  return (
    <section className="py-16 max-w-5xl mx-auto px-6 border-t border-slate-900/60">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* Left Side: Sticky Section Heading */}
        <div className="md:col-span-4 md:sticky md:top-24">
          <h2 className="text-2xl font-bold text-white tracking-tight">The Origin Story</h2>
          <p className="text-slate-500 text-xs uppercase font-semibold tracking-wider mt-2">Why we built this platform</p>
        </div>

        {/* Right Side: Narrative Text */}
        <div className="md:col-span-8 space-y-6 text-sm sm:text-base text-slate-400 leading-relaxed">
          <p>
            Every software engineering student and transitioning professional is told the same thing: <strong className="text-white">"Go grind LeetCode and build side projects."</strong> But sitting in a room staring at a compiler error for five hours straight with zero feedback isn't learning—it’s a recipe for burnout.
          </p>
          <p>
            We realized that the fastest breakthroughs happen when developers look over each other's shoulders. When you see someone else refactor a nested loop into an elegant two-pointer approach, something clicks. 
          </p>
          <blockquote className="border-l-2 border-indigo-500 pl-4 italic text-slate-300 bg-indigo-600/5 py-3 pr-2 rounded-r-xl">
            "The magic isn't just in the code repository; it's in the micro-comradery of solving hard problems simultaneously."
          </blockquote>
          <p>
            CodeCluster structures this exact dynamic into <strong className="text-white">Clusters</strong>—tight-knit, purposeful sub-communities where accountability isn't forced, it’s a natural byproduct of working towards shared engineering milestones.
          </p>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 3. CORE VALUES SUB-COMPONENT
// ==========================================
function CoreValues() {
  const values = [
    {
      icon: <Flame className="h-5 w-5 text-indigo-400" />,
      title: "Active Over Passive Learning",
      desc: "Watching video tutorials creates an illusion of competence. CodeCluster forces active engagement through live peer reviews, paired debugging sessions, and collaborative problem-solving."
    },
    {
      icon: <Zap className="h-5 w-5 text-emerald-400" />,
      title: "Radical Knowledge Sharing",
      desc: "Hoarding optimized scripts yields short-term wins. True engineering maturity stems from teaching your peers, documentating logic gaps, and lifting your cluster up with you."
    },
    {
      icon: <ShieldAlert className="h-5 w-5 text-amber-400" />,
      title: "Psychological Safety",
      desc: "No one starts out writing O(1) solutions. We rigorously cultivate zero-judgment cluster ecosystems where asking 'dumb' questions is recognized as a vital sign of velocity."
    },
    {
      icon: <Compass className="h-5 w-5 text-cyan-400" />,
      title: "Gamification with Intent",
      desc: "Points and badges should serve your technical focus, not distract from it. Every streak multiplier and leaderboard metric on our platform maps cleanly back to practical keyboard hours."
    }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 border-t border-slate-900/60">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 block">Our Pillars</span>
        <h2 className="text-3xl font-bold text-white mb-4">The principles guiding CodeCluster</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {values.map((val, idx) => (
          <div key={idx} className="bg-slate-900/20 border border-slate-800/40 p-6 rounded-2xl flex gap-4">
            <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 shrink-0 h-fit">
              {val.icon}
            </div>
            <div>
              <h3 className="text-white font-bold text-base mb-2">{val.title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ==========================================
// 4. TEAM SECTION SUB-COMPONENT
// ==========================================
function Team() {
  const members = [
    {
      name: "Alex Rivera",
      role: "Core Platform Architect",
      bio: "Ex-Backend Lead. Obsessed with sub-millisecond real-time sync systems and message broker architecture.",
      avatar: "AR"
    },
    {
      name: "Siddharth Mehta",
      role: "UI/UX & Gamification Dev",
      bio: "Fascinated by behavioral loops, micro-interactions, and beautiful dark-mode layout designs.",
      avatar: "SM"
    },
    {
      name: "Elena Rostova",
      role: "Compiler & Sandbox Engineer",
      bio: "Maintains our secure code execution environments and automated test runner pipelines.",
      avatar: "ER"
    }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 border-t border-slate-900/60 bg-slate-950/20 rounded-3xl mb-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 block">Behind the Code</span>
        <h2 className="text-3xl font-bold text-white mb-4">Built by developers, for developers</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {members.map((member, idx) => (
          <div key={idx} className="bg-slate-900/30 border border-slate-800/50 p-6 rounded-2xl flex flex-col items-center text-center">
            <div className="h-16 w-16 bg-gradient-to-br from-indigo-600 to-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-white font-bold tracking-wider mb-4 shadow-lg shadow-indigo-600/10">
              {member.avatar}
            </div>
            <h3 className="text-white font-bold text-base">{member.name}</h3>
            <p className="text-indigo-400 text-xs font-medium mb-3">{member.role}</p>
            <p className="text-slate-400 text-xs leading-relaxed max-w-xs">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ==========================================
// MAIN COMPONENT EXPORT ENTRY ASSEMBLY NODE
// ==========================================
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white font-sans overflow-x-hidden">
      {/* Floating Header Navigation element block */}
      <Navbar />

      {/* Structured Content Assembly Node Stack */}
      <main>
        <AboutHero />
        <Story />
        <CoreValues />
        <Team />
        <Cta />
      </main>

      {/* Custom Global App Footer Integration Block */}
      <Footer />
    </div>
  );
}