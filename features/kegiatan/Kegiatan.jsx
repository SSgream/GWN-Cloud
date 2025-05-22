'use client';

import { useState, useEffect } from "react";
import Image from 'next/image';

export default function KegiatanPage() {
   const [kegiatan, setKegiatan] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const fetchKegiatan = async () => {
        try {
          const res = await fetch("/api/kegiatan");
          const data = await res.json();
          setKegiatan(data); // Set data fasilitas dari API
        } catch (error) {
          console.error("Error fetching kegiatan data:", error);
        }
      };
  
      fetchKegiatan();
    }, []);
  
    const handlePrev = () => {
      setCurrentIndex((prev) => (prev === 0 ? kegiatan.length - 3 : prev - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prev) => (prev + 3 >= kegiatan.length ? 0 : prev + 1));
    };
  
    const visibleKegiatan = kegiatan.slice(currentIndex, currentIndex + 3);
  return (
    <main className="min-h-screen bg-gray-50 pt-44 pb-16 px-6 md:px-16">
      <h1 className="text-center text-2xl md:text-3xl font-bold">Kegiatan TK Azizah 2</h1>

      <div className="flex justify-center mt-4 md:mt-0 md:justify-end mb-6">
        <button className="bg-gray-300 text-white px-4 py-2 rounded-lg text-sm">Filter By</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleKegiatan.map((item) => (
          <div key={item.deskripsi} className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="relative w-full h-27 md:w-full md:h-75">
              <Image
                src={item.image_url}
                alt={item.deskripsi}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <div className="p-4 pb-18 space-y-2">
              <p className="text-md text-gray-500 flex items-center">
                <span className="mr-2">👤</span>by {item.username}
              </p>
              <h2 className="text-sm md:text-lg font-bold text-gray-800">{item.deskripsi}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="text-sm md:text-md bg-orange-300 hover:bg-orange-400 text-white font-bold py-3 px-6 rounded-full transition duration-300">
          View more
        </button>
      </div>
    </main>
  );
}
