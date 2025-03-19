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
    { title: "Berita", href: "/berita" },
    { 
      title: "Akademik", 
      href: "/akademik",
      submenu: [
        { title: "Kesiswaan", href: "/akademik-dan-kesiswaan/akademik" },
        { title: "Ekstrakurikuler", href: "/akademik-dan-kesiswaan/ekstrakurikuler" },
        { title: "Data Siswa", href: "/akademik-dan-kesiswaan/data-siswa" }
      ]
    },
    { title: "Prestasi", href: "/prestasi" },
    { title: "Kontak", href: "/kontak" }
  ];
  