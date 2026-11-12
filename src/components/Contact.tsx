import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MessageSquare, MapPin, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.socials.emailDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Open default mail client with prefilled parameters
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personal.socials.emailDisplay}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="kontak" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/40 border border-rose-800/40 text-rose-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Mail className="w-3.5 h-3.5 text-rose-400" />
            <span>Hubungi Gua</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Mari Kolaborasi & Diskusi
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mt-2">
            Punya ide proyek, tawaran kerja, atau sekadar ingin saling sharing seputar tech stack? Pintu selalu terbuka!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-600 to-rose-400 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 border border-rose-900/30 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Informasi Kontak
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                Gua biasanya merespon dalam waktu 24 jam. Jangan sungkan untuk menyapa!
              </p>

              {/* Email direct copy */}
              <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-800/40 mb-6">
                <div className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider mb-1">
                  Email Langsung
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm text-slate-200 font-mono truncate">
                    {personal.socials.emailDisplay}
                  </span>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-xl bg-rose-900/40 hover:bg-rose-800/60 text-rose-200 border border-rose-700/50 transition-all flex items-center gap-1.5 text-xs flex-shrink-0"
                    title="Salin Email"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm mb-4">
                <div className="p-2 rounded-xl bg-rose-950/40 border border-rose-900/40 text-rose-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Domisili</div>
                  <div className="font-medium text-white">{personal.location}</div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm">
                <div className="p-2 rounded-xl bg-rose-950/40 border border-rose-900/40 text-rose-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Status Pekerjaan</div>
                  <div className="font-medium text-white">{personal.statusText}</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-rose-950/60 text-xs text-slate-500">
              Setiap pesan langsung masuk ke inbox utama gua.
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-rose-900/30">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-rose-400" />
              <span>Kirim Pesan</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Isi formulir di bawah ini dan pesan akan otomatis disiapkan untuk dikirim ke email gua.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Nama Kamu
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#110408]/90 border border-rose-950 text-slate-200 placeholder-slate-500 text-xs sm:text-sm focus:border-rose-500/80 focus:outline-none focus:ring-1 focus:ring-rose-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Email Kamu
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="budi@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#110408]/90 border border-rose-950 text-slate-200 placeholder-slate-500 text-xs sm:text-sm focus:border-rose-500/80 focus:outline-none focus:ring-1 focus:ring-rose-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Isi Pesan / Kebutuhan
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Ceritakan detail proyek atau ajakan diskusi kamu di sini..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#110408]/90 border border-rose-950 text-slate-200 placeholder-slate-500 text-xs sm:text-sm focus:border-rose-500/80 focus:outline-none focus:ring-1 focus:ring-rose-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="glow-btn w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-rose-700 via-rose-600 to-rose-700 hover:from-rose-600 hover:to-rose-500 border border-rose-500/40 shadow-lg shadow-rose-950 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Pesan Sekarang</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-emerald-300 text-xs text-center animate-in fade-in">
                  Pesan sedang disiapkan di email client kamu!
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

