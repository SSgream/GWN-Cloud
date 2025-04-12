import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#f2fdd9] py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-black">
        {/* Logo + Deskripsi */}
        <div className="flex flex-col items-start">
          <Image src="/images/logo_rpl.png" alt="Logo" width={80} height={80} className="mb-4" />
          <p className="leading-relaxed mt-2 max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Akses Cepat */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h4 className="font-bold mb-2">Akses Cepat</h4>
            <ul className="space-y-1">
              <li>Profil</li>
              <li>Program</li>
              <li>Kegiatan</li>
              <li>Testimoni</li>
              <li>Kontak</li>
            </ul>
          </div>
          <div className="mt-7 md:mt-0">
            <ul className="space-y-1">
              <li>Daftar PPDB</li>
              <li>Panduan PPDB 2025</li>
              <li>Fasilitas</li>
              <li>Guru dan Staff</li>
            </ul>
          </div>
        </div>

        {/* Kontak */}
        <div className="ml-20 space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-yellow-600 text-lg mt-1">📍</span>
            <p>Parukku, Desa Bulolohe,<br />Kec. Rilau Ale, Kab. Bulukumba</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-yellow-600 text-lg">📞</span>
            <p>-</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-yellow-600 text-lg">✉️</span>
            <p>tkazizah22007@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
