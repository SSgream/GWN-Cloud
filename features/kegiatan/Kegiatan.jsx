"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function KegiatanPage() {
  const [kegiatan, setKegiatan] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3); // mulai dari 3 kegiatan

  useEffect(() => {
    const fetchKegiatan = async () => {
      try {
        const res = await fetch("/api/kegiatan");
        const data = await res.json();
        setKegiatan(data);
      } catch (error) {
        console.error("Error fetching kegiatan data:", error);
      }
    };

    fetchKegiatan();
  }, []);

  // Data kegiatan yang tampil, sesuai visibleCount
  const visibleKegiatan = kegiatan.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(kegiatan.length); // langsung tampilkan semua kegiatan
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-44 pb-16 px-6 md:px-16">
      <h1 className="text-center text-3xl font-bold mb-4">Kegiatan TK Azizah 2</h1>
            <div className="h-1 w-24 mx-auto bg-orange-400 rounded mb-6"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-20">
        {visibleKegiatan.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md border overflow-hidden"
          >
            <div className="relative w-full h-48 md:h-52">
              {item.foto ? (
                <Image
                  src={item.foto}
                  alt={item.judul || "Foto kegiatan"}
                  fill
                  objectFit="cover"
                  className="rounded-t-xl"
                  unoptimized
                />
              ) : (
                <div className="bg-gray-200 rounded-t-xl w-full h-full flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
            </div>
            <div className="p-4 space-y-1">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {item.judul || "-"}
              </h2>
              <p className="text-sm text-gray-500">{item.tanggal || "-"}</p>
              <p className="text-sm text-gray-600 line-clamp-3">
                {item.deskripsi || "-"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < kegiatan.length && (
        <div className="mt-8 text-center">
          <button
            onClick={handleLoadMore}
            className="text-orange-500 font-semibold hover:underline"
          >
            Selengkapnya...
          </button>
        </div>
      )}
    </main>
  );
}
