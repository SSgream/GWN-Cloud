"use client";

import { useState, useEffect, useRef } from "react";

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

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCount = isMobile ? 1 : 3;
  const cardWidth = 320; // ukuran card tetap
  const gap = 80; // jarak antar card
  const totalCardWidth = cardWidth + gap;
  const maxIndex = testimoni.length - visibleCount;

  // Auto slide every 4 seconds (opsional)
  useEffect(() => {
    if (testimoni.length <= visibleCount) return; 

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [testimoni, maxIndex, visibleCount]);

  return (
    <div className="bg-white pt-44 py-10 px-4 min-h-screen">
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold">Testimoni Orang Tua</h2>
      </div>

      {/* Container yang nge-mask supaya hanya 3 card yang kelihatan */}
      <div
        className="overflow-hidden mx-auto pt-10"
        style={{ maxWidth: `${visibleCount * totalCardWidth - gap}px` }}
      >
        {/* Inner flex container yang digeser pakai translateX */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * totalCardWidth}px)`,
            gap: `${gap}px`,
            width: `${testimoni.length * totalCardWidth}px`,
          }}
        >
          {testimoni.map((t, i) => (
            <div
              key={i}
              className="bg-green-50 rounded-xl p-8 shadow-md flex flex-col justify-between min-h-[280px]"
              style={{ minWidth: `${cardWidth}px`, maxWidth: `${cardWidth}px` }}
            >
              <p className="text-sm md:text-base space-y-2 mb-6 font-medium italic relative before:content-['“'] before:text-4xl before:text-green-400 before:absolute before:-left-4 before:-top-2">
                {t.isi_pesan}
              </p>
              <span className="font-semibold text-green-600 mt-4 text-center block">
                {t.nama}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
