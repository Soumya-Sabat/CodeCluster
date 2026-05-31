import React from 'react';
import { UserPlus, Search, Trophy } from 'lucide-react';

export default function Steps() {
  const steps = [
    {
      icon: <UserPlus className="h-5 w-5 text-indigo-400" />,
      title: "1. Sign Up with OTP",
      desc: "No passwords to remember. Enter your email, get a one-time code, and you're in within seconds."
    },
    {
      icon: <Search className="h-5 w-5 text-emerald-400" />,
      title: "2. Find or Create Your Cluster",
      desc: "Browse clusters by focus area—algorithms, full-stack, data science—or create your own with an invite code."
    },
    {
      icon: <Trophy className="h-5 w-5 text-amber-400" />,
      title: "3. Learn & Grow",
      desc: "Solve problems together, discuss strategies in cluster chat, and track your progress on the dashboard."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 max-w-7xl mx-auto px-6 border-t border-slate-900">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 block">How It Works</span>
        <h2 className="text-3xl font-bold text-white mb-4">Three steps to better learning</h2>
        <p className="text-slate-400 text-sm sm:text-base">CodeCluster makes it simple to find your tribe, collaborate on problems, and track your growth together.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-2xl flex flex-col items-center text-center">
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 mb-6 shadow-inner">
              {step.icon}
            </div>
            <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}