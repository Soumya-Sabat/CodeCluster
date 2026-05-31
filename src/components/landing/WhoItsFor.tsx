import React from 'react';

export default function WhoItsFor() {
  const targets = [
    {
      title: "Beginners",
      desc: "Just starting out with Python or JavaScript? Join beginner-friendly clusters with guided problems, pair programming sessions, and zero judgment.",
      tags: ["Python Basics", "Intro Algorithms", "Pair Programming"]
    },
    {
      title: "Competitive Programmers",
      desc: "Preparing for ICPC, Codeforces, or LeetCode contests? Find clusters focused on dynamic programming, graph theory, and speed solving.",
      tags: ["Dynamic Programming", "Graph Theory", "Contest Prep"]
    },
    {
      title: "Full-Stack Learners",
      desc: "Building real projects while learning React, Node.js, and system design? Collaborate with clusters that ship code and review pull requests together.",
      tags: ["React", "System Design", "Code Reviews"]
    }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 border-t border-slate-900/60">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 block">Who It&apos;s For</span>
        <h2 className="text-3xl font-bold text-white mb-4">Built for every kind of coder</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {targets.map((target, idx) => (
          <div key={idx} className="bg-slate-900/20 border border-slate-800/40 p-8 rounded-2xl flex flex-col justify-between hover:border-slate-800 transition-colors">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">{target.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{target.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {target.tags.map((tag, tIdx) => (
                <span key={tIdx} className="bg-slate-900 text-indigo-300 border border-slate-800 text-xs px-3 py-1 rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
