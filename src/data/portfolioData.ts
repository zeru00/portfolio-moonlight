export interface Project {
  id: string;
  title: string;
  category: 'Fullstack' | 'Frontend' | 'Backend' | 'Mobile' | 'UI/UX' | 'Other';
  description: string;
  longDescription?: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  highlights?: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export const portfolioData = {
  personal: {
    name: "Hannanni Ikhlasul Mardhiyallie",
    title: "Fullstack Developer",
    tagline: "Crafting atmospheric digital experiences under the crimson moonlight.",
    location: "Depok, Indonesia",
    availableForHire: true,
    statusText: "Open to New Projects & Collaborations",
    bio: [
      "Halo! Gua seorang Fullstack Developer yang passionate membangun aplikasi web modern, terstruktur, performant, dan nyaman dilihat.",
      "Fokus gua adalah menciptakan arsitektur kode yang bersih serta antarmuka (UI/UX) yang berkarakter kuat, seperti nuansa Red Moonlight & Maroon ini.",
      "Website ini dirancang fleksibel agar setiap proyek baru yang gua selesaikan bisa langsung dipajang dengan rapi dan profesional."
    ],
    stats: [
      { label: "Tahun Pengalaman", value: "1 Tahun" },
      { label: "Spesialisasi", value: "Fullstack" },
      { label: "Tech Stack Dikuasai", value: "12+" },
      { label: "Komitmen & Kualitas", value: "100%" },
    ],
    socials: {
      github: "https://github.com/zeru00",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      email: "mailto:hannanniim08@gmail.com",
      emailDisplay: "hannanniim08@gmail.com",
    }
  },

  skills: [
    {
      title: "Frontend Development",
      skills: [
        { name: "React / Next.js", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "HTML5 & Modern CSS", level: "Expert" },
        { name: "Vite & Tooling", level: "Intermediate" },
        { name: "Redux / Zustand", level: "Intermediate" },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js & Express", level: "Intermediate" },
        { name: "PostgreSQL / MySQL", level: "Intermediate" },
        { name: "Prisma ORM", level: "Intermediate" },
        { name: "Supabase / Firebase", level: "Advanced" },
        { name: "RESTful & GraphQL API", level: "Intermediate" },
      ]
    },
    {
      title: "Tools & Deployment",
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Vercel & Netlify", level: "Expert" },
        { name: "Docker (Basic)", level: "Beginner" },
        { name: "Figma UI/UX", level: "Advanced" },
        { name: "Postman API", level: "Intermediate" },
      ]
    }
  ] as SkillCategory[],

  /* 
   * ==============================================================================
   * CARA MENAMBAH PROJECT BARU:
   * Kapanpun kamu ingin menambahkan project baru, cukup copy template berikut
   * dan masukkan ke dalam array 'projects' di bawah ini:
   * 
   * {
   *   id: "nama-proyek-kamu",
   *   title: "Judul Aplikasi Kamu",
   *   category: "Fullstack", // 'Fullstack' | 'Frontend' | 'Backend' | 'Mobile' | 'UI/UX' | 'Other'
   *   description: "Deskripsi singkat aplikasi yang tampil di kartu...",
   *   longDescription: "Deskripsi lengkap ketika tombol Detail diklik...",
   *   tags: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
   *   image: "https://images.unsplash.com/photo-xxx", // URL gambar atau file di folder public/
   *   githubUrl: "https://github.com/zeru00/nama-repo",
   *   liveUrl: "https://proyek-kamu.vercel.app", // Opsional, hapus baris ini jika belum ada
   *   featured: true, // true untuk memberi badge bintang 'Featured'
   *   highlights: [
   *     "Fitur unggulan 1",
   *     "Fitur unggulan 2"
   *   ]
   * },
   * ==============================================================================
   */
  projects: [
    // Saat ini dikosongkan. Kamu bisa menambahkan objek project kapan saja di sini!
  ] as Project[]
};
