import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Priya Venkatesh",
      role: "Software Engineer, Bangalore",
      quote: "I went from struggling with basic recursion to solving medium-level DP problems in 6 weeks. My cluster kept me accountable every single day."
    },
    {
      name: "Marcus Holloway",
      role: "CS Student, Atlanta",
      quote: "The cluster chat is incredible for real-time code discussions. We do mock interviews every Thursday and it completely changed my confidence level."
    },
    {
      name: "Megan Tanaka",
      role: "Full-Stack Developer, Seattle",
      quote: "As a bootcamp grad, I needed structure beyond the curriculum. CodeCluster gave me a community that pushed me to build projects and review code daily."
    }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 border-t border-slate-900/60">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 block">What Members Say</span>
        <h2 className="text-3xl font-bold text-white mb-4">Trusted by developers worldwide</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, idx) => (
          <div key={idx} className="bg-slate-900/20 border border-slate-800/40 p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 mb-4 text-amber-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-slate-300 text-sm italic leading-relaxed mb-6">"{rev.quote}"</p>
            </div>
            <div className="border-t border-slate-800/60 pt-4">
              <h4 className="text-white font-bold text-sm">{rev.name}</h4>
              <p className="text-slate-500 text-xs mt-0.5">{rev.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}