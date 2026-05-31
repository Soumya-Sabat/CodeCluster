import React from 'react';
import { MessageSquare, LineChart, BookOpen, ShieldAlert, Lock, Calendar } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: <MessageSquare className="h-5 w-5 text-indigo-400" />, title: "Cluster Chat", desc: "Real-time messaging with code snippet support, threaded discussions, and pinned resources for your group." },
    { icon: <LineChart className="h-5 w-5 text-emerald-400" />, title: "Progress Tracking", desc: "XP system, streak counters, and visual dashboards show exactly how far you've come and where to go next." },
    { icon: <BookOpen className="h-5 w-5 text-amber-400" />, title: "Problem Library", desc: "Curated problems organized by difficulty and topic. Cluster admins can assign weekly challenges for the group." },
    { icon: <ShieldAlert className="h-5 w-5 text-rose-400" />, title: "Smart Matching", desc: "Get matched with clusters that fit your skill level, time zone, and learning goals automatically." },
    { icon: <Lock className="h-5 w-5 text-violet-400" />, title: "Private Clusters", desc: "Create invite-only clusters for your study group, bootcamp cohort, or company interview prep team." },
    { icon: <Calendar className="h-5 w-5 text-sky-400" />, title: "Scheduled Sessions", desc: "Plan pair programming sessions, mock interviews, and code reviews with built-in scheduling tools." }
  ];

  return (
    <section id="features" className="py-20 max-w-7xl mx-auto px-6 border-t border-slate-900/60">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 block">Feature Showcase</span>
        <h2 className="text-3xl font-bold text-white mb-4">Everything you need to learn with intention</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feat, idx) => (
          <div key={idx} className="bg-slate-900/30 border border-slate-800/50 p-6 rounded-2xl flex flex-col gap-4 hover:border-slate-700/60 transition-colors">
            <div className="flex items-center gap-3">
              <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">{feat.icon}</div>
              <h3 className="text-white font-bold text-base">{feat.title}</h3>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}