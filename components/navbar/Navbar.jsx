'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-950 bg-opacity-90 text-white fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/logo_rpl.png" alt="Logo" width={50} height={50} />
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><Link href="/" className="hover:underline">Beranda</Link></li>
          <li><Link href="/profil" className="hover:underline">Profil</Link></li>
          <li><Link href="/berita" className="hover:underline">Berita</Link></li>
          <li><Link href="/akademik" className="hover:underline">Akademik</Link></li>
          <li><Link href="/prestasi" className="hover:underline">Prestasi</Link></li>
          <li><Link href="/kontak" className="hover:underline">Kontak</Link></li>
        </ul>

        {/* Menu Mobile */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Dropdown Mobile */}
      {isOpen && (
        <ul className="md:hidden bg-black bg-opacity-90 text-white space-y-2 py-4 px-6">
          <li><Link href="/" className="block">Beranda</Link></li>
          <li><Link href="/profil" className="block">Profil</Link></li>
          <li><Link href="/berita" className="block">Berita</Link></li>
          <li><Link href="/akademik" className="block">Akademik</Link></li>
          <li><Link href="/prestasi" className="block">Prestasi</Link></li>
          <li><Link href="/kontak" className="block">Kontak</Link></li>
        </ul>
      )}
    </nav>
  );
}
