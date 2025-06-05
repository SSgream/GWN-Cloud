"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navlink } from "./navlink";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null); // untuk deteksi hover
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-100 shadow-sm">
      {/* Banner atas */}
      <div className="py-3 text-sm text-center text-white custom-green-bg">
      Buka Pendaftaran! Jangan Lewatkan Tanggal 20–24 April 📆
      </div>

      <div className="flex items-center justify-between max-w-screen-xl px-6 py-4 mx-auto bg-gray-100 md:px-12 lg:px-36">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src="https://gwn-bucket.s3.us-east-1.amazonaws.com/images/logoo.png" alt="Logo" width={50} height={50} />
        </Link>

        {/* Menu Desktop */}
        <div className="justify-center flex-1 hidden md:flex">
          <ul className="flex items-center space-x-6 font-semibold text-gray-800">
            {Navlink.map((nav) => {
              const isHovered = hoveredLink === nav.href;
              const isCurrent = pathname === nav.href;
              const isSubActive = nav.submenu?.some((sub) =>
                pathname.startsWith(sub.href)
              );
              const showGreen = (isCurrent || isSubActive) && !hoveredLink;

              return (
                <li
                  key={nav.title}
                  className="relative group"
                  onMouseEnter={() => setHoveredLink(nav.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {nav.submenu ? (
                    <>
                      <button
                        className={`transition-colors duration-200 ${
                          showGreen || isHovered ? "text-green-500" : ""
                        }`}
                        onClick={() => toggleDropdown(nav.title)}
                      >
                        {nav.title}
                      </button>
                      {activeDropdown === nav.title && (
                        <ul className="absolute z-50 py-2 mt-3 text-gray-800 transition-all duration-300 ease-out origin-top transform -translate-x-1/2 bg-white shadow-xl left-1/2 w-52 rounded-xl">
                          {nav.submenu.map((sub) => (
                            <li key={sub.title}>
                              <Link
                                href={sub.href}
                                className={`flex items-center justify-between px-4 py-2 transition-colors duration-200 hover:bg-green-50 hover:text-green-500 ${
                                  isActive(sub.href) && !hoveredLink
                                    ? "text-green-500"
                                    : ""
                                }`}
                              >
                                {sub.title}
                                {/* <span className="ml-2 text-gray-400">→</span> */}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={nav.href}
                      className={`transition-colors duration-200 ${
                        showGreen || isHovered ? "text-green-500" : ""
                      }`}
                    >
                      {nav.title}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Tombol Daftar */}
        <div className="hidden md:block">
          <Link href="/pendaftaran">
            <button className="px-5 py-3 font-semibold text-black transition duration-200 bg-orange-100 rounded-full hover:bg-orange-200">
              Daftar Sekarang
            </button>
          </Link>
        </div>

        {/* Toggle Mobile */}
        <div className="md:hidden">
          <button className="text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="px-6 py-4 space-y-2 text-gray-800 bg-white shadow-md md:hidden">
          {Navlink.map((nav) => (
            <li key={nav.title}>
              {nav.submenu ? (
                <>
                  <button
                    className="block w-full py-2 font-semibold text-left"
                    onClick={() => toggleDropdown(nav.title)}
                  >
                    {nav.title}
                  </button>
                  {activeDropdown === nav.title && (
                    <ul className="pl-4 mt-1 ml-2 space-y-1 border-l-2 border-green-400">
                      {nav.submenu.map((sub) => (
                        <li key={sub.title}>
                          <Link
                            href={sub.href}
                            className="block py-1 text-gray-700 transition-colors hover:text-green-600"
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
              <button className="w-full py-2 mt-2 font-bold text-white bg-teal-500 rounded-full hover:bg-teal-600">
                Daftar Sekarang
              </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
