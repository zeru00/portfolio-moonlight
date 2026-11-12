import React from 'react';
import { User, MapPin, Code2, Heart, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="tentang" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/40 border border-rose-800/40 text-rose-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <User className="w-3.5 h-3.5 text-rose-400" />
            <span>Tentang Saya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Mengenal Lebih Dekat
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-600 to-rose-400 rounded-full mt-3" />
        </div>

        {/* Content Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-rose-900/30 shadow-xl relative overflow-hidden">
          
          {/* Subtle background red glow in corner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-900/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Avatar / Profile Card */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative group">
                {/* Glow ring */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-rose-700 via-rose-500 to-rose-900 opacity-60 blur-md group-hover:opacity-100 transition duration-500" />
                
                {/* Avatar container */}
                <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-2xl bg-gradient-to-b from-[#250912] to-[#0e0407] border border-rose-500/30 flex flex-col items-center justify-center p-6 text-center shadow-inner overflow-hidden">
                  
                  {/* Decorative stylized icon / avatar */}
                  <div className="w-20 h-20 rounded-2xl bg-rose-950/80 border border-rose-500/40 flex items-center justify-center text-rose-300 shadow-md mb-4 group-hover:scale-105 transition-transform duration-300">
                    <Terminal className="w-10 h-10 text-rose-400" />
                  </div>

                  <h3 className="text-lg font-bold text-white">{personal.name}</h3>
                  <p className="text-xs text-rose-300/80 mt-1">{personal.title}</p>

                  <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-400 bg-black/40 px-3 py-1.5 rounded-full border border-rose-950">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{personal.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Narrative */}
            <div className="lg:col-span-7 flex flex-col gap-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {personal.bio.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300/90">
                  {paragraph}
                </p>
              ))}

              {/* Highlights pills */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-rose-950/25 border border-rose-900/30">
                  <Code2 className="w-5 h-5 text-rose-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">Clean & Maintainable Code</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-rose-950/25 border border-rose-900/30">
                  <Heart className="w-5 h-5 text-rose-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">Attention to Detail & UX</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

