import React from 'react';
import { Lock } from 'lucide-react';

interface CategoryItem {
  title: string;
  desc: string;
  count: number;
  bg: string;
  locked: boolean; // Added strict type configuration for lock functionality
}

export default function Categories() {
  const categories: CategoryItem[] = [
    { title: "Algorithm Mastery", desc: "DP, graphs, trees, greedy. For interview prep and competitive contests.", count: 45, bg: "border-indigo-500/20 text-indigo-400", locked: true },
    { title: "Full-Stack Projects", desc: "React, Node, databases. Build and ship real applications together.", count: 35, bg: "border-orange-500/20 text-orange-400", locked: true },
    { title: "Beginner Friendly", desc: "Python, JavaScript basics. Guided paths with mentorship built in.", count: 62, bg: "border-emerald-500/20 text-emerald-400", locked: true },
    { title: "Security & CTF", desc: "Cryptography, ethical hacking, CTF challenges for security enthusiasts.", count: 18, bg: "border-cyan-500/20 text-cyan-400", locked: true }, // Locked category
    { title: "Machine Learning", desc: "Neural networks, NLP, computer vision. Research and applied ML projects.", count: 27, bg: "border-purple-500/20 text-purple-400", locked: true }, // Locked category
    { title: "Interview Prep", desc: "Mock interviews, behavioral prep, system design for FAANG and startups.", count: 54, bg: "border-pink-500/20 text-pink-400", locked: true },
    { title: "Data Engineering", desc: "SQL, Spark, pipelines. For data engineers building scalable systems.", count: 15, bg: "border-yellow-500/20 text-yellow-400", locked: true },
    { title: "Mobile Dev", desc: "React Native, Flutter, Swift. Build cross-platform apps with peers.", count: 21, bg: "border-rose-500/20 text-rose-400", locked: true }  // Locked category
  ];

  return (
    <section id="categories" className="py-20 max-w-7xl mx-auto px-6 border-t border-slate-900/60">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 block">Cluster Templates</span>
        <h2 className="text-3xl font-bold text-white mb-4">Popular cluster categories to get started</h2>
        <p className="text-slate-400 text-sm">Browse templates or create your own cluster from scratch. Each template comes with pre-configured focus areas and suggested problem sets.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat, idx) => (
          <div 
            key={idx} 
            className={`bg-slate-900/30 border ${cat.bg} p-5 rounded-xl flex flex-col justify-between relative overflow-hidden transition-all duration-200
              ${cat.locked 
                ? 'opacity-60 cursor-not-allowed select-none bg-slate-950/40 border-slate-900' 
                : 'hover:scale-[1.02] cursor-pointer'
              }`}
          >
            {/* Lock Indicator UI Overlay */}
            {cat.locked && (
              <div className="absolute top-3 right-3 bg-slate-950/80 p-1.5 rounded-lg border border-slate-800 text-slate-500">
                <Lock className="h-3.5 w-3.5" />
              </div>
            )}

            <div>
              <h3 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                {cat.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">{cat.desc}</p>
            </div>
            
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              {cat.locked ? 'Unlocks at Level 5' : `${cat.count} active clusters`}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}