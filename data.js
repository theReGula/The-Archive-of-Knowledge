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

   TIPE BERKAS yang dikenali: 'slide', 'lk', 'k3', 'kuis', 'modul', 'lain'
   Tipe menentukan label kecil di sebelah nama berkas.

   Setiap awal minggu, ubah MINGGU_AKTIF di masing-masing mata kuliah.
   Angka itu yang menentukan mana yang tampil di kotak "Minggu ini".
   =========================================================================== */

const SITUS = {
  prodi: 'Program Studi Teknik Geologi',
  institusi: 'FMIPA Universitas Negeri Gorontalo',
  semester: 'Semester Ganjil 2026/2027',
  pengampu: 'Alifia Widya Warapsari Badaru, S.T., M.Sc.',

  // Ditampilkan di bagian bawah. Kosongkan ('') kalau tidak mau tampil.
  kontak: 'Pertanyaan soal materi dibawa ke sesi kelas atau grup WhatsApp angkatan.',

  // Panduan yang berlaku sepanjang semester, tidak terikat minggu tertentu.
  panduanTetap: [
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
    ringkas: 'Mendeskripsi mineral dari sifat fisik yang bisa diamati dan diuji langsung, sebelum menyebut namanya.',
    MINGGU_AKTIF: 1,
    minggu: [
      {
        ke: 1,
        judul: 'Pengenalan laboratorium dan keselamatan kerja',
        catatan: 'Sesi di kelas, belum masuk lab. Baca panduan K3 sebelum datang.',
        berkas: [
          { nama: 'Slide Minggu 1',            tipe: 'slide', url: '', tersedia: false },
          { nama: 'LK-0 Kesiapan Praktikum',   tipe: 'lk',    url: '', tersedia: false },
          { nama: 'Panduan K3 Mineralogi',     tipe: 'k3',    url: '', tersedia: false },
          { nama: 'Kuis Kesiapan',             tipe: 'kuis',  url: '', tersedia: false }
        ]
      },
      { ke: 2,  judul: '', catatan: '', berkas: [] },
      { ke: 3,  judul: '', catatan: '', berkas: [] },
      { ke: 4,  judul: '', catatan: '', berkas: [] },
      { ke: 5,  judul: '', catatan: '', berkas: [] },
      { ke: 6,  judul: '', catatan: '', berkas: [] },
      { ke: 7,  judul: '', catatan: '', berkas: [] },
      { ke: 8,  judul: '', catatan: '', berkas: [] },
      { ke: 9,  judul: '', catatan: '', berkas: [] },
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
    ringkas: 'Membaca sayatan tipis dengan mikroskop polarisasi. Kalibrasi dulu, baru pengamatan.',
    MINGGU_AKTIF: 1,
    minggu: [
      {
        ke: 1,
        judul: 'Pengenalan mikroskop polarisasi dan pemeriksaan awal',
        catatan: 'Sesi di kelas. Tiga pemeriksaan sebelum pengamatan lebih penting daripada hafal nama bagian mikroskop.',
        berkas: [
          { nama: 'Slide Minggu 1',            tipe: 'slide', url: '', tersedia: false },
          { nama: 'LK-0 Kesiapan Praktikum',   tipe: 'lk',    url: '', tersedia: false },
          { nama: 'Panduan K3 Petrografi',     tipe: 'k3',    url: '', tersedia: false },
          { nama: 'Kuis Kesiapan',             tipe: 'kuis',  url: '', tersedia: false }
        ]
      },
      { ke: 2,  judul: '', catatan: '', berkas: [] },
      { ke: 3,  judul: '', catatan: '', berkas: [] },
      { ke: 4,  judul: '', catatan: '', berkas: [] },
      { ke: 5,  judul: '', catatan: '', berkas: [] },
      { ke: 6,  judul: '', catatan: '', berkas: [] },
      { ke: 7,  judul: '', catatan: '', berkas: [] },
      { ke: 8,  judul: '', catatan: '', berkas: [] },
      { ke: 9,  judul: '', catatan: '', berkas: [] },
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
    ringkas: '',
    MINGGU_AKTIF: 1,
    minggu: [
      { ke: 1,  judul: '', catatan: '', berkas: [] },
      { ke: 2,  judul: '', catatan: '', berkas: [] },
      { ke: 3,  judul: '', catatan: '', berkas: [] },
      { ke: 4,  judul: '', catatan: '', berkas: [] },
      { ke: 5,  judul: '', catatan: '', berkas: [] },
      { ke: 6,  judul: '', catatan: '', berkas: [] },
      { ke: 7,  judul: '', catatan: '', berkas: [] },
      { ke: 8,  judul: '', catatan: '', berkas: [] },
      { ke: 9,  judul: '', catatan: '', berkas: [] },
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
