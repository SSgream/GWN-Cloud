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
    <nav className="w-full shadow-sm fixed top-0 bg-white z-50">
      {/* Top Banner */}
      <div className="bg-green-500 text-white text-center py-3 text-sm">
        🔉 Pendaftaran dibuka 20–24 April 🔉
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-36 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/images/logo_rpl.png" alt="Logo" width={50} height={50} />
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-6 items-center font-semibold text-gray-800">
            {Navlink.map((nav) => (
              <li key={nav.title} className="relative group">
                {nav.submenu ? (
                  <>
                    <button
                      className="hover:text-green-500"
                      onClick={() => toggleDropdown(nav.title)}
                    >
                      {nav.title}
                    </button>
                    {activeDropdown === nav.title && (
                      <ul className="absolute left-1/2 -translate-x-1/2 mt-3 w-52 bg-white text-gray-800 rounded-xl shadow-xl z-50 py-2 transition-all duration-300 ease-out origin-top transform">
                        {nav.submenu.map((sub) => (
                          <li key={sub.title}>
                            <Link
                              href={sub.href}
                              className="flex items-center justify-between px-4 py-2 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                            >
                              {sub.title}
                              <span className="text-gray-400 ml-2">→</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={nav.href} className="hover:text-green-500">
                    {nav.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Tombol Daftar */}
        <div className="hidden md:block">
          <Link href="/pendaftaran">
            <button className="bg-orange-100 hover:bg-orange-200 text-black font-bold py-3 px-5 rounded-full transition duration-200">
              Daftar Sekarang
            </button>
          </Link>
        </div>

        {/* Toggle Mobile */}
        <div className="md:hidden">
          <button className="text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-white text-gray-800 px-6 py-4 space-y-2 shadow-md">
          {Navlink.map((nav) => (
            <li key={nav.title}>
              {nav.submenu ? (
                <>
                  <button
                    className="block w-full text-left py-2 font-semibold"
                    onClick={() => toggleDropdown(nav.title)}
                  >
                    {nav.title}
                  </button>
                  {activeDropdown === nav.title && (
                    <ul className="pl-4 space-y-1 border-l-2 border-green-400 ml-2 mt-1">
                      {nav.submenu.map((sub) => (
                        <li key={sub.title}>
                          <Link
                            href={sub.href}
                            className="block py-1 text-gray-700 hover:text-green-600 transition-colors"
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link href={nav.href} className="block py-2 font-semibold">
                  {nav.title}
                </Link>
              )}
            </li>
          ))}

          <li>
            <Link href="/pendaftaran">
              <button className="bg-teal-500 hover:bg-teal-600 w-full text-white font-bold py-2 rounded-full mt-2">
                Daftar Sekarang
              </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
