"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function FasilitasPage() {
  const [fasilitas, setFasilitas] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchFasilitas = async () => {
      try {
        const res = await fetch("/api/fasilitas");
        const data = await res.json();
        setFasilitas(data); // Set data fasilitas dari API
      } catch (error) {
        console.error("Error fetching fasilitas data:", error);
      }
    };

    fetchFasilitas();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? fasilitas.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 3 >= fasilitas.length ? 0 : prev + 1));
  };

  const visibleFasilitas = fasilitas.slice(currentIndex, currentIndex + 3);
  const bgColors = ["bg-teal-400", "bg-orange-400", "bg-rose-400"];

  return (
    <div className="pt-44 py-12 px-4 md:px-16 lg:px-24 relative bg-white min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-12">Fasilitas</h2>

      <div className="flex justify-center items-center relative">
        <button
          onClick={handlePrev}
          className="absolute left-0 bg-green-100 hover:bg-green-200 p-2 rounded-full text-2xl"
        >
          ❮
        </button>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-center w-full">
          {visibleFasilitas.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 flex flex-col items-center text-center"
            >
              <div className="rounded-xl overflow-hidden mb-4">
                <Image
                  src={item.image_url}
                  alt={item.ruangan}
                  width={500}
                  height={300}
                  className="object-cover w-full h-64"
                  unoptimized
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.ruangan}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.deskripsi}</p>
              <div
                className={`w-fit rounded-2xl text-white p-4 flex text-sm shadow-md ${
                  bgColors[index % bgColors.length]
                }`}
              >
                <div className="px-4 text-center">
                  <div className="font-bold text-lg">
                    4–5 <span className="block text-base">yrs</span>
                  </div>
                  <div className="text-xs mt-1">age</div>
                </div>

                <div className="border-l border-white/60 mx-4"></div>

                <div className="px-4 text-center">
                  <div className="font-bold text-lg">
                    3 <span className="block text-base">days</span>
                  </div>
                  <div className="text-xs mt-1">weekly</div>
                </div>

                <div className="border-l border-white/60 mx-4"></div>

                <div className="px-4 text-center">
                  <div className="font-bold text-lg">
                    3.30 <span className="block text-base">hrs</span>
                  </div>
                  <div className="text-xs mt-1">period</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 bg-green-100 hover:bg-green-200 p-2 rounded-full text-2xl"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
