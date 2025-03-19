'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navlink } from './navlink';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-blue-950 bg-opacity-90 text-white fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/logo_rpl.png" alt="Logo" width={50} height={50} />
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6 text-lg relative">
          {Navlink.map((nav) => (
            <li key={nav.title} className="relative group">
              {nav.submenu ? (
                // Jika ada submenu, gunakan button untuk dropdown
                <button
                  className="hover:underline"
                  onClick={() => toggleDropdown(nav.title)}
                >
                  {nav.title}
                </button>
              ) : (
                // Jika tidak ada submenu, langsung gunakan Link
                <Link href={nav.href} className="hover:underline">
                  {nav.title}
                </Link>
              )}

              {nav.submenu && activeDropdown === nav.title && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                  {nav.submenu.map((sub) => (
                    <li key={sub.title} className="px-4 py-2 hover:bg-gray-200">
                      <Link href={sub.href}>{sub.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Tombol Mobile */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Dropdown Mobile */}
      {isOpen && (
        <ul className="md:hidden bg-black bg-opacity-90 text-white space-y-2 py-4 px-6">
          {Navlink.map((nav) => (
            <li key={nav.title} className="relative">
              {nav.submenu ? (
                <button
                  className="block w-full text-left py-2"
                  onClick={() => toggleDropdown(nav.title)}
                >
                  {nav.title}
                </button>
              ) : (
                <Link href={nav.href} className="block py-2">
                  {nav.title}
                </Link>
              )}

              {nav.submenu && activeDropdown === nav.title && (
                <ul className="pl-4 mt-1">
                  {nav.submenu.map((sub) => (
                    <li key={sub.title} className="py-1">
                      <Link href={sub.href}>{sub.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
