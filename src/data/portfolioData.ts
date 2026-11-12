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
    name: "Alex Pratama", // Ganti dengan nama kamu
    title: "Fullstack Developer & Creative Designer",
    tagline: "Crafting atmospheric digital experiences under the crimson moonlight.",
    location: "Jakarta, Indonesia",
    availableForHire: true,
    statusText: "Open to New Projects & Collaborations",
    bio: [
      "Halo! Gua seorang pengembang web yang passionate membangun aplikasi web modern, elegan, performant, dan nyaman dilihat.",
      "Fokus gua adalah menciptakan arsitektur kode yang bersih serta antarmuka (UI/UX) yang berkarakter kuat, seperti nuansa Red Moonlight & Maroon ini.",
      "Website ini dirancang fleksibel agar setiap proyek baru yang gua selesaikan bisa langsung dipajang dengan rapi dan profesional."
    ],
    stats: [
      { label: "Proyek Selesai", value: "12+" },
      { label: "Tahun Pengalaman", value: "2+" },
      { label: "Tech Stack Dikuasai", value: "15+" },
      { label: "Client Kepuasan", value: "100%" },
    ],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      email: "mailto:alex.pratama@example.com",
      emailDisplay: "alex.pratama@example.com",
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
   * Cukup copy satu blok object di bawah dan isi detail project kamu.
   * id: harus unik (misal: "my-next-app")
   * category: 'Fullstack' | 'Frontend' | 'Backend' | 'Mobile' | 'UI/UX' | 'Other'
   * ==============================================================================
   */
  projects: [
    {
      id: "crimson-nexus",
      title: "Crimson Nexus Dashboard",
      category: "Fullstack",
      description: "Sistem manajemen analitik real-time dengan visualisasi data, visual tema maroon cyberpunk, dan integrasi API RESTful.",
      longDescription: "Aplikasi dashboard enterprise dengan sistem pemantauan analitik server real-time, manajemen pengguna dengan role-based access control (RBAC), serta grafik interaktif berkinerja tinggi.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Chart.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com",
      liveUrl: "https://vercel.com",
      featured: true,
      highlights: [
        "Real-time WebSocket metrics visualizer",
        "Role-based authentication & JWT tokens",
        "Dark maroon theme optimized for low-light environments"
      ]
    },
    {
      id: "moonlight-commerce",
      title: "Moonlight Store E-Commerce",
      category: "Frontend",
      description: "Platform toko online responsif dengan katalog produk interaktif, keranjang belanja dinamis, dan checkout flow terintegrasi.",
      longDescription: "Platform e-commerce modern dengan pencarian instan, filter kategori multi-level, animasi transisi halus, dan penyimpanan status keranjang di local storage.",
      tags: ["Next.js", "Tailwind CSS", "Zustand", "Stripe API"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com",
      liveUrl: "https://vercel.com",
      featured: true,
      highlights: [
        "Instant client-side search & filtering",
        "Optimized image loading & SEO metadata",
        "Smooth mobile responsive experience"
      ]
    },
    {
      id: "velvet-chat-app",
      title: "Velvet Real-Time Messenger",
      category: "Fullstack",
      description: "Aplikasi obrolan instan dengan dukungan ruang publik & privat, enkripsi pesan, dan berbagi berkas media.",
      longDescription: "Aplikasi chatting berkecepatan tinggi yang dibangun dengan Socket.io dan Supabase untuk sinkronisasi state instan antar pengguna secara real-time.",
      tags: ["React", "Socket.io", "Supabase", "Express"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com",
      liveUrl: "https://vercel.com",
      featured: false,
      highlights: [
        "Realtime message broadcast under 100ms",
        "Media attachments preview & compression",
        "Read receipts and online status indicators"
      ]
    },
    {
      id: "crimson-notes-api",
      title: "Notes & Task Backend Microservice",
      category: "Backend",
      description: "RESTful API modular dengan arsitektur microservice untuk manajemen catatan terenkripsi, tagging, dan ekspor PDF.",
      longDescription: "Layanan backend aman dengan rate-limiting, validasi schema Zod, database pooling dengan Prisma ORM, dan dokumentasi Swagger UI interaktif.",
      tags: ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com",
      liveUrl: undefined,
      featured: false,
      highlights: [
        "100% TypeScript type-safety end-to-end",
        "Automated unit testing with Jest",
        "Docker containerized setup ready for cloud deploy"
      ]
    },
    {
      id: "aurora-ui-kit",
      title: "Maroon Glow Design System & UI Kit",
      category: "UI/UX",
      description: "Koleksi komponen UI reusable bernuansa gelap dan maroon red dengan aksesibilitas WCAG AA tinggi.",
      longDescription: "Design system yang mencakup 40+ komponen terisolasi, typography scale, sistem warna harmonis, dan dokumentasi Figma yang komprehensif.",
      tags: ["Figma", "Design System", "UI/UX", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com",
      liveUrl: "https://figma.com",
      featured: true,
      highlights: [
        "40+ Reusable accessible UI components",
        "Dark maroon color token system",
        "Interactive prototypes and micro-interactions"
      ]
    }
  ] as Project[]
};
