import React from 'react';
import { Moon, ArrowUp, Github, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-rose-950/60 bg-[#070204] py-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-600 to-rose-950 flex items-center justify-center border border-rose-500/40">
            <Moon className="w-4 h-4 text-rose-100" />
          </div>
          <div>
            <span className="font-bold text-white tracking-tight">
              {portfolioData.personal.name}
            </span>
            <span className="text-[11px] text-rose-400/80 block">
              Red Moonlight Edition
            </span>
          </div>
        </div>

        {/* Deploy & Stack Badges */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/40 border border-rose-900/40 text-[11px] text-rose-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Vercel Ready
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/40 border border-rose-900/40 text-[11px] text-slate-300">
            <Github className="w-3 h-3 text-slate-400" />
            GitHub Compatible
          </span>
        </div>

        {/* Copyright & Scroll to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-slate-500 text-xs">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>& TypeScript</span>
          </div>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-rose-950/40 hover:bg-rose-900/60 border border-rose-900/50 text-rose-300 hover:text-white transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

