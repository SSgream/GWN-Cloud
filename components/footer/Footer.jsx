const Footer = () => {
    return (
      <footer className="bg-gray-100 text-gray-800 py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo dan Kontak */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/images/logo_rpl.png" alt="Logo Sekolah" className="w-16 h-16 mb-4" />
            <p>Parukku, Desa Bulolohe, Kec. Rilau Ale, Kab. Bulukumba, Sulawesi Selatan, Indonesia</p>
            <p className="font-bold mt-2">info@smpn1cibadak.sch.id</p>
            <p className="font-bold">tkazizah22007@gmail.com</p>
          </div>
  
          {/* Navigasi */}
          <div>
            <h3 className="font-bold text-lg">Jelajah</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:underline">Sambutan</a></li>
              <li><a href="#" className="hover:underline">Profil Sekolah</a></li>
              <li><a href="#" className="hover:underline">Berita</a></li>
              <li><a href="#" className="hover:underline">Galeri</a></li>
            </ul>
          </div>
  
          {/* Halaman Umum */}
          <div>
            <h3 className="font-bold text-lg">Halaman Umum</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:underline">Data Guru</a></li>
              <li><a href="#" className="hover:underline">PPDB SMPN 1 Cibadak</a></li>
              <li><a href="#" className="hover:underline">Panduan PPDB</a></li>
              <li><a href="#" className="hover:underline">Lokasi</a></li>
              <li><a href="#" className="hover:underline">Kontak</a></li>
            </ul>
          </div>
  
          {/* Media Sosial */}
          <div>
            <h3 className="font-bold text-lg">Media Sosial</h3>
            <div className="flex justify-center md:justify-start mt-2 space-x-2">
              <a href="#" className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300"><i className="fab fa-facebook"></i></a>
              <a href="#" className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pl-20 text-sm mt-6 border-t pt-4">
          Copyright © TK Azizah 2. All Rights Reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;