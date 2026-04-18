# Iqbal Triwicaksono Ibrahim — Portfolio

Website portofolio minimalis berbasis Next.js, siap di-deploy ke Vercel.

## Struktur Proyek

```
portfolio/
├── app/
│   ├── globals.css       # Design system & global styles
│   ├── layout.js         # Root layout + metadata SEO
│   ├── page.js           # Halaman utama (semua konten)
│   └── page.module.css   # CSS Modules untuk styling
├── package.json
├── next.config.js
└── vercel.json
```

## Cara Deploy ke Vercel

### Opsi 1: Via GitHub (Rekomendasi)
1. Buat repo baru di GitHub, lalu push semua file ini
2. Buka [vercel.com](https://vercel.com) → **Add New Project**
3. Import repo GitHub kamu
4. Klik **Deploy** — selesai! Vercel otomatis deteksi Next.js

### Opsi 2: Via Vercel CLI
```bash
npm install -g vercel
cd portfolio
vercel
```

## Jalankan Lokal
```bash
npm install
npm run dev
# Buka http://localhost:3000
```

## Kustomisasi

### Ganti Link FMCG Project
Di `app/page.js`, cari array `projects` dan ganti link FMCG dengan link Google Drive yang benar:
```js
link: 'https://drive.google.com/drive/folders/YOUR_FOLDER_ID',
```

### Tambah Foto Profil
1. Taruh foto di folder `public/` (misal: `public/photo.jpg`)
2. Di `page.js`, import dan tambahkan `<img>` di section hero

### Ubah Warna Aksen
Di `globals.css`, ubah nilai `--accent`:
```css
--accent: #c9622f; /* ganti dengan warna pilihanmu */
```
