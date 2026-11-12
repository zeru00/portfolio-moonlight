import React from 'react';
import { Cpu, Layers, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section id="keahlian" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/40 border border-rose-800/40 text-rose-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Cpu className="w-3.5 h-3.5 text-rose-400" />
            <span>Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Keahlian & Teknologi
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mt-2">
            Perangkat lunak dan teknologi yang gua gunakan untuk mengubah ide menjadi solusi nyata.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-600 to-rose-400 rounded-full mt-3" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((category, catIndex) => (
            <div
              key={catIndex}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-rose-900/30 flex flex-col h-full"
            >
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-rose-950/60">
                <div className="w-10 h-10 rounded-xl bg-rose-950/60 border border-rose-800/40 flex items-center justify-center text-rose-300 shadow-sm">
                  <Layers className="w-5 h-5 text-rose-400" />
                </div>
                <h3 className="font-bold text-white text-base tracking-tight">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-col gap-2.5 flex-grow">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#110408]/60 hover:bg-rose-950/40 border border-rose-950/40 hover:border-rose-800/40 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-rose-500/80 flex-shrink-0" />
                      <span className="text-sm font-medium text-slate-200">
                        {skill.name}
                      </span>
                    </div>
                    {skill.level && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-rose-950/60 text-rose-300 border border-rose-900/30">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

