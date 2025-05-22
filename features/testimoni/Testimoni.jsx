'use client';

import { useState, useEffect } from 'react';

export default function Testimoni() {
  const [testimoni, setTestimoni] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchTestimoni = async () => {
      try {
        const res = await fetch("/api/testimoni");
        const data = await res.json();
        setTestimoni(data);
      } catch (error) {
        console.error("Error fetching testimoni data:", error);
      }
    };

    fetchTestimoni();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // jalankan saat pertama
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCount = isMobile ? 1 : 3;
  const visibleTestimoni = testimoni.slice(currentIndex, currentIndex + visibleCount);

  const handlePrev = () => {
    const maxIndex = testimoni.length - visibleCount;
    setCurrentIndex(prev => prev === 0 ? maxIndex : prev - 1);
  };

  const handleNext = () => {
    const maxIndex = testimoni.length - visibleCount;
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  };

  return (
    <div className="bg-white pt-44 py-10 px-4 min-h-screen">
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold">Testimoni Orang Tua</h2>
      </div>
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <button
          onClick={handlePrev}
          className="bg-green-100 hover:bg-green-300 p-2 rounded text-green-800 text-1xl md:text-2xl font-bold mx-2"
        >
          {'<'}
        </button>

        <div
          className={`w-full ${
            isMobile ? "flex justify-center" : "grid grid-cols-3"
          } gap-8 px-3 md:px-6 py-4`}
        >
          {visibleTestimoni.map((t, i) => (
            <div
              key={i}
              className="bg-green-50 rounded-xl p-8 shadow-md transition-all hover:shadow-xl flex flex-col justify-between min-h-[280px] w-full"
            >
              <p className="text-sm md:text-base space-y-2 mb-6 font-medium italic relative before:content-['“'] before:text-4xl before:text-green-400 before:absolute before:-left-4 before:-top-2">
                {t.isi_pesan}
              </p>
              <span className="font-semibold text-green-600 mt-4 text-center block">{t.nama}</span>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="bg-green-100 hover:bg-green-300 p-2 rounded text-green-800 text-1xl md:text-2xl font-bold mx-2"
        >
          {'>'}
        </button>
      </div>
    </div>
  );
}
