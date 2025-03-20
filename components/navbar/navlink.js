export const Navlink = [
    { title: "Beranda", href: "/" },
    { 
      title: "Profile", 
      href: "/profile",
      submenu: [
        { title: "Visi Misi", href: "/profile/VisiMisi" },
        { title: "Fasilitas", href: "/profile/Fasilitas" },
        { title: "Data Guru", href: "/profile/DataGuru" }
      ]
    },
    { title: "Kurikulum", href: "/kurikulum" },
    { 
      title: "Kesiswaaan", 
      href: "/kesiswaan",
      submenu: [
        { title: "Prestasi", href: "/kesiswaan/prestasi" },
        { title: "Ekstrakurikuler", href: "/dan-kesiswaan/ekstrakurikuler" },
        { title: "Data Siswa", href: "/kesiswaan/data-siswa" }
      ]
    },
    { title: "Berita", href: "/berita" },
    { title: "Kontak", href: "/kontak" }
  ];