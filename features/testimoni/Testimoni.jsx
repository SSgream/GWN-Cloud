'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Testimoni() {
   const [testimoni, setTestimoni] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const fetchTestimoni = async () => {
        try {
          const res = await fetch("/api/testimoni");
          const data = await res.json();
          setTestimoni(data); // Set data fasilitas dari API
        } catch (error) {
          console.error("Error fetching testimoni data:", error);
        }
      };
  
      fetchTestimoni();
    }, []);
  
    const handlePrev = () => {
      setCurrentIndex((prev) => (prev === 0 ? testimoni.length - 3 : prev - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prev) => (prev + 3 >= testimoni.length ? 0 : prev + 1));
    };
  
    const visibleTestimoni = testimoni.slice(currentIndex, currentIndex + 3);

  return (
    <div className="bg-white pt-44 py-10 px-4 min-h-screen">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">Testimoni Orang Tua</h2>
      </div>
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <button onClick={handlePrev} className="bg-green-100 hover:bg-green-300 p-2 rounded text-2xl text-white font-bold">
          {'<'}
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 h-100 gap-4 flex-1 px-4">
          {visibleTestimoni.map((t, i) => (
            <div
              key={i}
              className="border rounded-xl p-12 shadow-sm flex flex-col justify-between pb-16"
            >
              <p className="text-sm mb-6 font-bold">{t.isi_pesan}</p>
              <div className="flex justify-center items-center gap-3 mt-4">
                {/* <Image
                  src={t.image}
                  alt={t.nama}
                  width={50}
                  height={50}
                  className="rounded-full"
                /> */}
                <span className="font-semibold text-gray-800">{t.nama}</span>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="bg-green-100 hover:bg-green-300 p-2 rounded text-white text-2xl font-bold">
          {'>'}
        </button>
      </div>
    </div>
  );
}
