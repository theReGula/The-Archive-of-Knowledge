/* ===========================================================================
   DATA SITUS ARSIP PRAKTIKUM
   ---------------------------------------------------------------------------
   Cuma berkas ini yang perlu kamu ubah. index.html tidak usah disentuh.

   MENAMBAH MATERI:
   1. Unggah berkasnya ke Google Drive.
   2. Klik kanan > Bagikan > ubah ke "Siapa saja yang memiliki link".
      Kalau lupa langkah ini, mahasiswa akan lihat halaman minta izin.
   3. Salin tautannya, tempel ke "url".
   4. Ubah "tersedia" jadi true.

   Untuk halaman yang ada di situs ini sendiri (bukan Drive), tulis alamatnya
   dengan garis miring di depan, misalnya '/petrografi/lk1/'. Panah pada
   tautan akan berubah bentuk sesuai jenisnya, ke luar untuk Drive dan ke
   samping untuk halaman sendiri.

   TIPE BERKAS yang dikenali: 'slide', 'lk', 'k3', 'kuis', 'modul', 'lain'

   Setiap awal minggu, ubah MINGGU_AKTIF di masing-masing mata kuliah.
   Angka itu yang menentukan mana yang tampil di kotak "Minggu ini".
   =========================================================================== */


/* ===========================================================================
   DIVISI ASISTEN
   ---------------------------------------------------------------------------
   'poros' hanya mengatur warna: 'logika' teal, 'cahaya' jingga.
   Kalau nanti ada divisi baru, tambahkan di sini lalu sebut kuncinya
   pada medan 'divisi' di mata kuliah yang bersangkutan.
   =========================================================================== */

const DIVISI = {
  crystalogix: {
    nama: 'Crystalogix',
    manifestasi: 'The Axis of Logic',
    domain: 'Kristalografi dan Mineralogi',
    tagline: 'We bring Chaos in Logic.',
    poros: 'logika',
    logo: '/assets/crystalogix.png'
  },
  ccc: {
    nama: 'Crystal Clear Crew',
    manifestasi: 'The Axis of Light',
    domain: 'Mineral Optik dan Petrografi',
    tagline: 'We Twist Light into Madness.',
    poros: 'cahaya',
    logo: '/assets/crystal-clear-crew.png'
  },
  fabriq: {
    nama: 'FABRIQ',
    manifestasi: 'Cousin division',
    domain: 'Petrologi',
    tagline: 'Where crystals become history.',
    poros: 'cahaya',
    logo: '/assets/fabriq.png'
  }
};


const SITUS = {
  prodi: 'Program Studi Teknik Geologi',
  institusi: 'FMIPA Universitas Negeri Gorontalo',
  semester: 'Semester Ganjil 2026/2027',
  pengampu: 'Alifia Widya Warapsari Badaru, S.T., M.Sc.',

  // Ditampilkan di bagian bawah. Kosongkan ('') kalau tidak mau tampil.
  kontak: 'Pertanyaan soal materi dibawa ke sesi kelas atau grup WhatsApp angkatan.',

  // Kolofon di kaki halaman.
  kolofon: 'ALFWDY',

  // Identitas tim asisten. Divisi yang disebut di 'divisi' harus ada di DIVISI.
  ordo: {
    nama: 'The Birefringence Axis Order',
    ringkas: 'Dua entitas yang bertentangan namun saling mengisi. Satu berporos pada struktur dan logika, satu bernafas dalam cahaya dan distorsi. Dua jalur berbeda yang berputar pada satu poros yang sama.',
    divisi: ['crystalogix', 'ccc'],
    url: '/ordo/'
  },

  // Panduan yang berlaku sepanjang semester, tidak terikat minggu tertentu.
    panduanTetap: [
    {
      judul: 'Cek status lembar kerja',
      catatan: 'Lihat apakah lembar kalian sudah masuk dan sudah dinilai. Siapkan NIM dan nomor tanda terima.',
      url: '/petrografi/pantau/',
      tersedia: true
    },
    {
      judul: 'Panduan K3 Laboratorium',
      catatan: 'Wajib dibaca sebelum masuk lab pertama kali. Berlaku untuk semua praktikum.',
      url: '',
      tersedia: false
    },
    {
      judul: 'Ketentuan penggunaan AI',
      catatan: 'Boleh untuk memahami konsep, tidak boleh untuk mengerjakan. Wajib dicantumkan kalau dipakai.',
      url: '',
      tersedia: false
    },
    {
      judul: 'Format logbook dan lembar kerja',
      catatan: 'Cara menulis pengamatan, dan kenapa nama mineral ditulis paling akhir.',
      url: '',
      tersedia: false
    }
  ]
};


const MATAKULIAH = [

  /* ======================= PRAKTIKUM MINERALOGI ======================= */
  {
    id: 'mineralogi',
    nama: 'Praktikum Mineralogi',
    kode: 'DAL602211',
    sks: '1 SKS',
    semesterKe: 'Semester I',
    divisi: 'crystalogix',
    ringkas: 'Mendeskripsi mineral dari sifat fisik yang bisa diamati dan diuji langsung, sebelum menyebut namanya.',
    MINGGU_AKTIF: 3,
    minggu: [
      {
        ke: 1,
        judul: 'Pengenalan laboratorium dan keselamatan kerja',
        catatan: 'Sesi di kelas, belum masuk lab. Baca panduan K3 sebelum datang.',
        berkas: [
          { nama: 'Slide Minggu 1', tipe: 'slide', url: 'https://drive.google.com/file/d/19EXR4N_jz2EMFyO7hPPiJj_DlsSGj4mb/view?usp=sharing', tersedia: true },
          { nama: 'LK-0 Kesiapan Praktikum', tipe: 'lk', url: 'https://docs.google.com/document/d/1icFDqfvKTH1quoVB1we5Vf5fBKFUvMiF/edit?usp=sharing&ouid=107582960318118110587&rtpof=true&sd=true', tersedia: true },
          { nama: 'Panduan K3 Mineralogi', tipe: 'k3', url: 'https://drive.google.com/file/d/152ilYo1L4MufUo3WtO9b27jOxbHmh9kf/view?usp=sharing', tersedia: true },
          { nama: 'Kuis Kesiapan', tipe: 'kuis', url: 'https://docs.google.com/forms/d/e/1FAIpQLSf4YW313kqHQvRQQzC3NybnRRJ4WVGk_IWxyrAN8RiaCnMnlw/viewform', tersedia: true }
        ]
      },
      { ke: 2, judul: '', catatan: '', berkas: [] },
      { ke: 3, judul: '', catatan: '', berkas: [] },
      { ke: 4, judul: '', catatan: '', berkas: [] },
      { ke: 5, judul: '', catatan: '', berkas: [] },
      { ke: 6, judul: '', catatan: '', berkas: [] },
      { ke: 7, judul: '', catatan: '', berkas: [] },
      { ke: 8, judul: '', catatan: '', berkas: [] },
      { ke: 9, judul: '', catatan: '', berkas: [] },
      { ke: 10, judul: '', catatan: '', berkas: [] },
      { ke: 11, judul: '', catatan: '', berkas: [] },
      { ke: 12, judul: '', catatan: '', berkas: [] },
      { ke: 13, judul: '', catatan: '', berkas: [] },
      { ke: 14, judul: '', catatan: '', berkas: [] },
      { ke: 15, judul: '', catatan: '', berkas: [] },
      { ke: 16, judul: '', catatan: '', berkas: [] }
    ]
  },

  /* ======================= PRAKTIKUM PETROGRAFI ======================= */
  {
    id: 'petrografi',
    nama: 'Praktikum Petrografi',
    kode: 'DAL604231',
    sks: '1 SKS',
    semesterKe: 'Semester III',
    divisi: 'ccc',
    ringkas: 'Membaca sayatan tipis dengan mikroskop polarisasi. Periksa alat dulu, baru pengamatan.',
    MINGGU_AKTIF: 3,
    minggu: [
      {
        ke: 1,
        judul: '',
        catatan: '',
        berkas: [
          
        ]
      },
      { ke: 2, judul: 'Pengambilan Sample Petrografi di Lapangan', catatan: 'Di telaah dengan benar, cara kita sampling batuan menentukan data petrografi', berkas: [] },
      { ke: 3, judul: 'Mikroskop polarisasi dan sifat optik mineral', catatan: 'Lembar kerja diisi langsung di lab lewat HP. Kirim sebelum sesi berakhir, catat nomor tanda terimanya.', berkas: [{ nama: 'Lembar Kerja 1', tipe: 'lk', url: '/petrografi/lk1/', tersedia: true },
          { nama: 'Slide Minggu 3', tipe: 'slide', url: 'https://drive.google.com/file/d/1-dDWJh9TDG3-SV6jUmzlQWFHNo6SBhYZ/view', tersedia: true },
          { nama: 'Cek Nilai disini', tipe: 'cek nilai', url: 'https://the-archive-of-knowledge.netlify.app/petrografi/pantau/', tersedia: true },
          { nama: 'Kuis Kesiapan', tipe: 'kuis', url: '', tersedia: false }] },
      { ke: 4, judul: '', catatan: '', berkas: [] },
      { ke: 5, judul: '', catatan: '', berkas: [] },
      { ke: 6, judul: '', catatan: '', berkas: [] },
      { ke: 7, judul: '', catatan: '', berkas: [] },
      { ke: 8, judul: '', catatan: '', berkas: [] },
      { ke: 9, judul: '', catatan: '', berkas: [] },
      { ke: 10, judul: '', catatan: '', berkas: [] },
      { ke: 11, judul: '', catatan: '', berkas: [] },
      { ke: 12, judul: '', catatan: '', berkas: [] },
      { ke: 13, judul: '', catatan: '', berkas: [] },
      { ke: 14, judul: '', catatan: '', berkas: [] },
      { ke: 15, judul: '', catatan: '', berkas: [] },
      { ke: 16, judul: '', catatan: '', berkas: [] }
    ]
  },

  /* ==================== PRAKTIKUM GEOLOGI DASAR ==================== */
  {
    id: 'geologi-dasar',
    nama: 'Praktikum Geologi Dasar',
    kode: '',
    sks: '1 SKS',
    semesterKe: 'Semester I',
    divisi: 'fabriq',
    ringkas: 'Deskripsi dulu, nama belakangan. Batuan yang salah dideskripsi tidak bisa diselamatkan oleh nama yang benar.',
    MINGGU_AKTIF: 3,
    minggu: [
      { ke: 1, judul: '', catatan: '', berkas: [] },
      { ke: 2, judul: '', catatan: '', berkas: [] },
      { ke: 3, judul: '', catatan: '', berkas: [] },
      { ke: 4, judul: '', catatan: '', berkas: [] },
      { ke: 5, judul: '', catatan: '', berkas: [] },
      { ke: 6, judul: '', catatan: '', berkas: [] },
      { ke: 7, judul: '', catatan: '', berkas: [] },
      { ke: 8, judul: '', catatan: '', berkas: [] },
      { ke: 9, judul: '', catatan: '', berkas: [] },
      { ke: 10, judul: '', catatan: '', berkas: [] },
      { ke: 11, judul: '', catatan: '', berkas: [] },
      { ke: 12, judul: '', catatan: '', berkas: [] },
      { ke: 13, judul: '', catatan: '', berkas: [] },
      { ke: 14, judul: '', catatan: '', berkas: [] },
      { ke: 15, judul: '', catatan: '', berkas: [] },
      { ke: 16, judul: '', catatan: '', berkas: [] }
    ]
  }
];
