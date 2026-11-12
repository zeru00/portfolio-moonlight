import React, { useState, useMemo } from 'react';
import { Briefcase, Search, ExternalLink, Github, Sparkles, PlusCircle, ArrowRight, FolderKanban } from 'lucide-react';
import { portfolioData, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = ['Semua'];
    projects.forEach((p) => {
      if (!cats.includes(p.category)) {
        cats.push(p.category);
      }
    });
    return cats;
  }, [projects]);

  // Filter projects by category and search
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'Semua' || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <section id="proyek" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/40 border border-rose-800/40 text-rose-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Briefcase className="w-3.5 h-3.5 text-rose-400" />
            <span>Showcase Karya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Proyek & Portofolio
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
            Kumpulan proyek yang telah gua bangun. Kamu bisa dengan mudah menambahkan proyek baru ke depannya di data konfigurasi.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-600 to-rose-400 rounded-full mt-3" />
        </div>

        {/* If Projects are empty */}
        {projects.length === 0 ? (
          <div className="glass-card rounded-3xl p-8 sm:p-14 text-center border border-rose-900/40 relative overflow-hidden max-w-2xl mx-auto shadow-2xl">
            {/* Soft background glow */}
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-64 h-64 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-700/60 to-rose-950/80 border border-rose-600/40 flex items-center justify-center text-rose-300 mx-auto mb-5 shadow-lg shadow-rose-950/80">
              <FolderKanban className="w-8 h-8 text-rose-400" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Proyek Segera Hadir
            </h3>
            
            <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-6">
              Portofolio proyek sedang dalam proses kurasi & pengembangan. Proyek-proyek baru akan segera ditampilkan di sini begitu ditambahkan.
            </p>

            <div className="inline-flex flex-col sm:flex-row items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-950/40 border border-rose-800/40 text-xs text-rose-300">
              <span className="flex items-center gap-1.5 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                Dapat diisi kapan saja di:
              </span>
              <code className="text-rose-200 bg-black/50 px-2.5 py-1 rounded-md font-mono border border-rose-900/50">
                src/data/portfolioData.ts
              </code>
            </div>
          </div>
        ) : (
          <>
            {/* Filter Tabs & Search Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
              {/* Category Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#120409]/80 border border-rose-950/60 backdrop-blur-md">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-rose-700 to-rose-600 text-white shadow-md shadow-rose-950 border border-rose-500/40'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-rose-950/40'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari proyek atau stack..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-[#120409]/80 border border-rose-900/40 focus:border-rose-500/80 focus:outline-none focus:ring-1 focus:ring-rose-500 text-slate-200 placeholder-slate-500 transition-all"
                />
              </div>
            </div>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-rose-900/30 flex flex-col group"
                  >
                    {/* Thumbnail Header */}
                    <div 
                      className="relative h-48 w-full overflow-hidden cursor-pointer"
                      onClick={() => setActiveModalProject(project)}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#14050a] via-black/30 to-transparent" />
                      
                      {/* Badges on Thumbnail */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#1e0711]/90 text-rose-300 border border-rose-800/50 backdrop-blur-md">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/90 text-black backdrop-blur-md">
                            <Sparkles className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex flex-col flex-grow">
                      <h3
                        onClick={() => setActiveModalProject(project)}
                        className="text-lg font-bold text-white group-hover:text-rose-300 transition-colors cursor-pointer mb-2"
                      >
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm line-clamp-3 mb-4 flex-grow leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#19060e] text-rose-300/90 border border-rose-950/60"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#19060e] text-slate-400 border border-rose-950/60">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Action Bar */}
                      <div className="pt-3 border-t border-rose-950/60 flex items-center justify-between text-xs font-semibold">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="text-rose-400 hover:text-rose-300 flex items-center gap-1 transition-colors"
                        >
                          <span>Detail</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center gap-3">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="GitHub Repo"
                              className="p-1.5 rounded-lg bg-rose-950/40 hover:bg-rose-900/50 text-slate-300 hover:text-white transition-colors"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Live Demo"
                              className="p-1.5 rounded-lg bg-rose-600/30 hover:bg-rose-600/50 text-rose-200 hover:text-white transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 p-8 glass-card rounded-2xl border border-rose-950/60">
                <p className="text-slate-400 text-sm">Tidak ada proyek yang sesuai dengan pencarian.</p>
                <button
                  onClick={() => { setSelectedCategory('Semua'); setSearchQuery(''); }}
                  className="mt-3 text-xs text-rose-400 hover:underline"
                >
                  Reset filter
                </button>
              </div>
            )}

            {/* Future Projects Instruction Banner */}
            <div className="mt-14 p-6 rounded-3xl bg-gradient-to-r from-rose-950/30 via-maroon-900/20 to-[#0e0407] border border-rose-800/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-2xl bg-rose-950/80 border border-rose-700/50 flex items-center justify-center text-rose-400 flex-shrink-0">
                  <PlusCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">
                    Siap Menampung Proyek Baru Kamu!
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Cukup buka file <code className="text-rose-300 font-mono">src/data/portfolioData.ts</code> dan tambahkan detail proyek kamu ke dalam array.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

      </div>

      {/* Modal Popup Component */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
