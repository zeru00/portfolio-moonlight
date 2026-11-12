# 🌙 Red Moonlight Portfolio

Website portofolio & profil pribadi modern dengan estetika **Red Moonlight** dan aksen **Maroon** gelap yang elegan, mewah, dan nyaman di mata. Dibangun menggunakan **React**, **TypeScript**, **Tailwind CSS**, dan **Vite** — siap di-deploy ke **Vercel** dan di-push ke **GitHub**.

---

## ✨ Fitur Utama

- 🔴 **Estetika Red Moonlight & Maroon**: Nuansa malam bercahaya merah lunar, velvet maroon, glassmorphism, dan ambient glow yang memanjakan mata.
- 🚀 **Mudah Menambah Proyek (Future-Proof)**: Semua data (profil, skill, proyek) tersimpan rapi di satu file: `src/data/portfolioData.ts`. Kapanpun kamu punya proyek baru, cukup tambahkan 1 object ke array!
- 🔍 **Kategori & Pencarian Proyek Instan**: Filter berdasarkan kategori (*Fullstack, Frontend, Backend, UI/UX*) dan pencarian interaktif secara real-time.
- 📱 **Modal Detail Proyek**: Pop-up interaktif untuk melihat screenshot, poin fitur utama, dan tautan Live Demo & GitHub repo.
- ⚡ **Ultra Fast & Responsive**: Menggunakan Vite, Tailwind CSS v3, dan Lucide Icons yang ringan dan responsive di semua layar (HP, Tablet, Laptop, Desktop).
- ☁️ **Siap Deploy ke Vercel & GitHub**: Konfigurasi `vercel.json` dan `.gitignore` sudah terpasang.

---

## 🛠️ Menjalankan di Komputer Lokal

1. Buka terminal di folder proyek ini (`c:\Users\MP2KT\OneDrive\Desktop\project\project1`).
2. Jalankan server lokal:
   ```bash
   npm run dev
   ```
3. Buka link yang muncul di browser: `http://localhost:5173`.

---

## 📝 Cara Mengisi & Menambah Proyek Baru

Buka file:
`src/data/portfolioData.ts`

### 1. Mengubah Data Diri & Sosmed
Ubah bagian `personal`:
```typescript
personal: {
  name: "Nama Lengkap Kamu",
  title: "Frontend Developer / Fullstack Engineer",
  tagline: "Deskripsi singkat yang keren...",
  location: "Jakarta, Indonesia",
  socials: {
    github: "https://github.com/username-kamu",
    linkedin: "https://linkedin.com/in/username-kamu",
    instagram: "https://instagram.com/username-kamu",
    email: "mailto:emailkamu@example.com",
    emailDisplay: "emailkamu@example.com",
  }
}
```

### 2. Menambah Proyek Baru
Di dalam array `projects`, cukup copy-paste template ini:
```typescript
{
  id: "nama-proyek-kamu",
  title: "Nama Aplikasi Kamu",
  category: "Fullstack", // Pilihan: 'Fullstack' | 'Frontend' | 'Backend' | 'Mobile' | 'UI/UX' | 'Other'
  description: "Penjelasan ringkas aplikasi kamu.",
  longDescription: "Penjelasan lengkap ketika tombol detail diklik...",
  tags: ["React", "Node.js", "Tailwind CSS"],
  image: "https://images.unsplash.com/photo-xxx", // URL gambar atau screenshot lokal di public/
  githubUrl: "https://github.com/username/repo-proyek",
  liveUrl: "https://proyek-kamu.vercel.app", // atau biarkan undefined jika belum online
  featured: true, // true jika ingin ada badge bintang Featured
  highlights: [
    "Fitur unggulan 1",
    "Fitur unggulan 2"
  ]
},
```

---

## 🚀 Panduan Upload ke GitHub & Deploy ke Vercel

### Langkah 1: Upload ke GitHub

1. Buat repository baru di [GitHub](https://github.com/new) (misalnya diberi nama `my-portfolio`). Jangan centang "Add a README file" karena repo lokal sudah ada.
2. Buka terminal di folder proyek ini dan jalankan perintah:
   ```bash
   git add .
   git commit -m "feat: initial red moonlight portfolio"
   git branch -M main
   git remote add origin https://github.com/USERNAME-KAMU/my-portfolio.git
   git push -u origin main
   ```
   *(Ganti `USERNAME-KAMU` dan `my-portfolio` dengan akun dan nama repo GitHub kamu).*

---

### Langkah 2: Deploy ke Vercel (Gratis & Cepat)

1. Masuk ke [Vercel](https://vercel.com/) dan login menggunakan akun **GitHub** kamu.
2. Klik tombol **"Add New..."** lalu pilih **"Project"**.
3. Pilih repository `my-portfolio` yang baru saja kamu push ke GitHub, lalu klik **"Import"**.
4. Vercel akan otomatis mendeteksi framework **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Klik **"Deploy"**.
6. Dalam hitungan detik, website portofolio kamu akan online dan mendapatkan link publik (contoh: `https://my-portfolio-alex.vercel.app`)!
7. Setiap kali kamu menambah proyek di `src/data/portfolioData.ts` dan melakukan `git push`, Vercel akan otomatis memperbarui website kamu secara instan!

---

## 📁 Struktur Direktori

```text
├── index.html                  # File HTML utama
├── vercel.json                 # Konfigurasi routing Vercel SPA
├── tailwind.config.js          # Palet warna Red Moonlight & Maroon
├── src/
│   ├── components/
│   │   ├── MoonlightBackground.tsx # Latar belakang bulan merah & glow
│   │   ├── Navbar.tsx              # Navigasi atas & menu responsif
│   │   ├── Hero.tsx                # Headline & status ketersediaan kerja
│   │   ├── About.tsx               # Cerita profil & biodata
│   │   ├── Skills.tsx              # Grid keahlian & stack teknologi
│   │   ├── Projects.tsx            # Showcase proyek & fitur pencarian
│   │   ├── ProjectModal.tsx        # Pop-up detail lengkap proyek
│   │   ├── Contact.tsx             # Formulir kontak & salin email
│   │   └── Footer.tsx              # Navigasi bawah & copyright
│   ├── data/
│   │   └── portfolioData.ts        # PUSAT DATA (edit profil & proyek disini)
│   ├── App.tsx
│   ├── index.css                   # Custom styles & efek glowing
│   └── main.tsx
```
