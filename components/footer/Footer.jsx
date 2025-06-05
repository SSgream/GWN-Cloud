import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 py-10 bg-footer md:px-20">
      <div className="grid grid-cols-1 gap-10 mx-auto text-sm text-black max-w-7xl md:grid-cols-3">
        {/* Logo + Deskripsi */}
        <div className="flex flex-col items-start">
          <div className="relative w-8 h-8 md:w-20 md:h-20 mb-4">
            <Image
              src="https://gwn-bucket.s3.us-east-1.amazonaws.com/images/logoo.png"
              alt="Logo"
              width={80}
              height={80}
              className="mb-4"
              unoptimized
            />
          </div>
          <h2 className="max-w-sm mt-2 text-xl font-bold leading-relaxed">
            TK AZIZAH 2
          </h2>
        </div>

        {/* Akses Cepat */}
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <h4 className="mb-2 font-bold">Akses Cepat</h4>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/profil/VisiMisi"
                  className="hover:text-green-500 transition"
                >
                  Visi Misi
                </Link>
              </li>
              <li>
                <Link
                  href="/program"
                  className="hover:text-green-500 transition"
                >
                  Program
                </Link>
              </li>
              <li>
                <Link
                  href="/kegiatan"
                  className="hover:text-green-500 transition"
                >
                  Kegiatan
                </Link>
              </li>
              <li>
                <Link
                  href="/testimoni"
                  className="hover:text-green-500 transition"
                >
                  Testimoni
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="hover:text-green-500 transition"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-8 md:mt-7">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/pendaftaran"
                  className="hover:text-green-500 transition"
                >
                  Daftar PPDB
                </Link>
              </li>
              <li>
                <Link
                  href="/panduan-ppdb-2025"
                  className="hover:text-green-500 transition"
                >
                  Panduan PPDB 2025
                </Link>
              </li>
              <li>
                <Link
                  href="/profil/fasilitas"
                  className="hover:text-green-500 transition"
                >
                  Fasilitas
                </Link>
              </li>
              <li>
                <Link
                  href="/profil/GuruStaff"
                  className="hover:text-green-500 transition"
                >
                  Guru dan Staff
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Kontak */}
        <div className="ml-0 md:ml-20 space-y-4">
          <div className="flex items-start gap-3">
            <span className="mt-1 text-lg text-yellow-600">📍</span>
            <p>
              Parukku, Desa Bulolohe,
              <br />
              Kec. Rilau Ale, Kab. Bulukumba
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-lg text-yellow-600">📞</span>
            <p>-</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-lg text-yellow-600">✉️</span>
            <p>tkazizah22007@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
