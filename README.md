# Arsip Praktikum — Teknik Geologi UNG

Situs statis untuk membagikan materi praktikum. Tanpa login, tanpa pendaftaran,
tanpa server. Mahasiswa buka tautannya, ambil berkasnya, selesai.

## Isi

| Berkas | Fungsi |
|---|---|
| `index.html` | Tampilan dan logika. Tidak perlu disentuh. |
| `data.js` | Semua isi situs. **Hanya ini yang kamu ubah.** |
| `README.md` | Berkas ini. |

## Memasang di Netlify

1. Buat repo baru di GitHub, unggah ketiga berkas ini ke akarnya (bukan di dalam folder).
2. Di Netlify: **Add new site → Import an existing project → GitHub**, pilih repo tadi.
3. Build command dikosongkan. Publish directory diisi titik: `.`
4. Deploy.

Setelah itu, setiap kali kamu ubah `data.js` di GitHub, Netlify membangun ulang
sendiri dalam waktu sekitar satu menit. Tidak ada langkah manual.

Kalau mau alamat yang enak dibaca, ganti subdomainnya di
**Site configuration → Change site name**.

## Menambah materi

Buka `data.js`, cari minggu yang mau diisi, lalu:

```js
{ ke: 2,
  judul: 'Sifat fisik mineral: warna, kilap, cerat',
  catatan: 'Sesi lab pertama. Bawa logbook.',
  berkas: [
    { nama: 'Slide Minggu 2', tipe: 'slide', url: 'https://drive.google.com/...', tersedia: true },
    { nama: 'LK-1 Deskripsi', tipe: 'lk',    url: '',                            tersedia: false }
  ]
}
```

Berkas dengan `tersedia: false` tetap tampil, tapi ditandai belum tersedia.
Ini disengaja: mahasiswa jadi tahu apa yang akan datang, bukan mengira kamu lupa.

**Tipe yang dikenali:** `slide`, `lk`, `k3`, `kuis`, `modul`, `lain`.

## Sebelum menempel tautan Drive

Klik kanan berkasnya di Drive → **Bagikan** → ubah ke
**"Siapa saja yang memiliki link"**.

Kalau langkah ini terlewat, mahasiswa akan melihat halaman permintaan izin,
bukan berkasnya. Ini penyebab keluhan paling sering, dan tidak kelihatan dari
sisi kamu karena kamu pemiliknya.

## Setiap awal minggu

Ubah `MINGGU_AKTIF` di mata kuliah yang bersangkutan. Angka itu yang menentukan
mana yang muncul di kotak "Minggu ini" di bagian atas, dan mana yang ditandai
jingga di kolom minggu.

## Yang tidak ada di situs ini, dan sengaja

Tidak ada data mahasiswa, tidak ada nilai, tidak ada daftar hadir. Situs ini
publik, jadi tidak boleh ada apa pun yang menyangkut identitas mahasiswa.
Pengumpulan tugas dan kuis berjalan lewat Google Forms, terpisah dari sini.
