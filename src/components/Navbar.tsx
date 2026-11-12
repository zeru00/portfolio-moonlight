import React, { useState, useEffect } from 'react';
import { Moon, Menu, X, Github, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#tentang' },
    { name: 'Keahlian', href: '#keahlian' },
    { name: 'Proyek', href: '#proyek' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0305]/85 backdrop-blur-md border-b border-rose-950/40 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-600 via-maroon-700 to-rose-950 flex items-center justify-center border border-rose-500/40 shadow-sm shadow-rose-900/50 group-hover:scale-105 transition-transform duration-300">
            <Moon className="w-5 h-5 text-rose-100 fill-rose-200/30 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-white group-hover:text-rose-300 transition-colors">
              {portfolioData.personal.name}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-rose-400/80 font-mono">
              Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-rose-300 transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-rose-500 to-rose-300 transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
        </nav>

        {/* GitHub / Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={portfolioData.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-rose-950/40 hover:bg-rose-900/60 border border-rose-800/40 hover:border-rose-500/50 text-rose-100 transition-all duration-300 hover:shadow-md hover:shadow-rose-950/50"
          >
            <Github className="w-4 h-4 text-rose-300" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-rose-400" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-rose-950/50 border border-rose-900/50 text-slate-200 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-rose-400" /> : <Menu className="w-5 h-5 text-rose-400" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0407]/95 border-b border-rose-900/50 backdrop-blur-xl px-4 py-5 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-rose-950/50 text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-rose-950/60 flex items-center justify-between">
              <a
                href={portfolioData.personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-rose-300 py-1"
              >
                <Github className="w-4 h-4" />
                <span>Kunjungi GitHub Profil</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
