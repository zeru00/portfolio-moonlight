import React from 'react';
import { ArrowDown, Sparkles, Send, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        
        {/* Status Pill Badge */}
        {personal.availableForHire && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/40 border border-rose-800/40 text-rose-300 text-xs font-medium mb-8 backdrop-blur-md shadow-sm shadow-rose-950">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
            </span>
            <span>{personal.statusText}</span>
          </div>
        )}

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.1] mb-6">
          Hai, Gua{' '}
          <span className="text-gradient-red drop-shadow-sm">
            {personal.name}
          </span>
          <br />
          <span className="text-2xl sm:text-4xl md:text-5xl font-semibold text-slate-300/90 mt-2 block">
            {personal.title}
          </span>
        </h1>

        {/* Subtitle / Tagline */}
        <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
          {personal.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#proyek"
            className="glow-btn inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-rose-700 via-rose-600 to-rose-700 hover:from-rose-600 hover:to-rose-500 shadow-lg shadow-rose-950/60 border border-rose-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-rose-200" />
            <span>Lihat Semua Proyek</span>
            <ArrowDown className="w-4 h-4 text-rose-200" />
          </a>

          <a
            href="#kontak"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-rose-200 bg-[#16060c]/80 hover:bg-[#230913] border border-rose-800/40 hover:border-rose-600/60 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Send className="w-4 h-4 text-rose-400" />
            <span>Hubungi Gua</span>
          </a>
        </div>

        {/* Social Icons row */}
        <div className="flex items-center gap-4 text-slate-400 mb-16">
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-xl bg-rose-950/30 hover:bg-rose-900/40 border border-rose-900/40 hover:border-rose-600/60 text-slate-300 hover:text-rose-200 transition-all hover:scale-110"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-xl bg-rose-950/30 hover:bg-rose-900/40 border border-rose-900/40 hover:border-rose-600/60 text-slate-300 hover:text-rose-200 transition-all hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={personal.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2.5 rounded-xl bg-rose-950/30 hover:bg-rose-900/40 border border-rose-900/40 hover:border-rose-600/60 text-slate-300 hover:text-rose-200 transition-all hover:scale-110"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href={personal.socials.email}
            aria-label="Email"
            className="p-2.5 rounded-xl bg-rose-950/30 hover:bg-rose-900/40 border border-rose-900/40 hover:border-rose-600/60 text-slate-300 hover:text-rose-200 transition-all hover:scale-110"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Quick Highlights / Stats Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
          {personal.stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-4 sm:p-5 text-center border border-rose-950/50 hover:border-rose-700/50 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-gradient-maroon mb-1 font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

