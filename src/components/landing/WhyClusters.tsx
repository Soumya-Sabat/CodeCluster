import React from 'react';
import { ShieldCheck, Eye, GraduationCap, BarChart3 } from 'lucide-react';

export default function WhyClusters() {
  const cards = [
    {
      icon: <ShieldCheck className="h-5 w-5 text-indigo-400" />,
      title: "Accountability Partners",
      desc: "Stay consistent with group challenges and shared streaks. Your cluster keeps you motivated when willpower fades."
    },
    {
      icon: <Eye className="h-5 w-5 text-emerald-400" />,
      title: "Multiple Perspectives",
      desc: "See how others approach the same problem. Different solutions reveal patterns you'd never discover alone."
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-amber-400" />,
      title: "Teach to Learn",
      desc: "Explaining concepts to peers solidifies your understanding. Clusters create natural teaching moments every day."
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-cyan-400" />,
      title: "Healthy Competition",
      desc: "Leaderboards, XP tracking, and cluster rankings add a game layer that makes consistent practice rewarding."
    }
  ];

  return (
    <section id="why-clusters" className="py-20 max-w-7xl mx-auto px-6 border-t border-slate-900/60">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 block">Why Clusters?</span>
        <h2 className="text-3xl font-bold text-white mb-4">Peer learning that actually works</h2>
        <p className="text-slate-400 text-sm sm:text-base">Studies show collaborative learning accelerates comprehension by 50%. Here&apos;s why clusters outperform solo grinding.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-slate-900/30 border border-slate-800/50 p-6 rounded-2xl flex items-start gap-4">
            <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 shrink-0">
              {card.icon}
            </div>
            <div>
              <h3 className="text-white font-bold text-base mb-2">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
