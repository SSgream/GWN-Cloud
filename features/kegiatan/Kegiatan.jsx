"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function KegiatanPage() {
  const [kegiatan, setKegiatan] = useState([]);
  const [selectedKegiatan, setSelectedKegiatan] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

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

  const totalPages = Math.ceil(kegiatan.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleKegiatan = kegiatan.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const openModal = (item) => setSelectedKegiatan(item);
  const closeModal = () => setSelectedKegiatan(null);

  return (
    <main className="min-h-screen bg-gray-50 pt-44 pb-16 px-6 md:px-16">
      <h1 className="text-center text-3xl font-bold mb-4">Kegiatan TK Azizah 2</h1>
      <div className="h-1 w-24 mx-auto bg-orange-400 rounded mb-6"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
        {visibleKegiatan.map((item, idx) => (
          <div
            key={idx}
            onClick={() => openModal(item)}
            className="bg-white rounded-xl shadow-md border overflow-hidden cursor-pointer hover:scale-105 transition"
          >
            <div className="relative w-full h-80 md:h-80">
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
                <div className="bg-gray-200 w-full h-full flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {item.judul || "-"}
              </h2>
              <p className="text-sm text-gray-500">
                {item.tanggal
                  ? new Date(item.tanggal).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "-"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="text-2xl w-10 h-10 rounded-full bg-lime-400 text-white font-bold disabled:opacity-50"
          >
            &lt;
          </button>

          <span className="text-lg font-semibold text-gray-700">
            {currentPage} / {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="text-2xl w-10 h-10 rounded-full bg-lime-400 text-white font-bold disabled:opacity-50"
          >
            &gt;
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedKegiatan && (
        <div className="fixed inset-0 z-30 flex items-center bg-black/40 backdrop-blur-sm justify-center bg-opacity-50">
          <div className="bg-gradient-to-r from-lime-300 to-lime-100 w-[700px] max-w-full rounded-xl shadow-xl border border-gray-200 overflow-hidden flex flex-col md:flex-row min-h-[400px]">
            <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-4">
              <Image
                src={selectedKegiatan.foto || "/images/nofoto.png"}
                alt={selectedKegiatan.judul}
                width={300}
                height={300}
                className="object-cover rounded-md w-full h-[300px]"
                unoptimized
              />
            </div>

            <div className="md:w-1/2 p-6 flex flex-col justify-between text-md">
              <div className="space-y-4">
                <h2 className="text-xl text-center font-bold mb-2">
                  {selectedKegiatan.judul}
                </h2>
                <p className="text-gray-600">
                  <strong>Tanggal:</strong>{" "}
                  {new Date(selectedKegiatan.tanggal).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-gray-800 whitespace-pre-line">
                  {selectedKegiatan.deskripsi || "Tidak ada deskripsi"}
                </p>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={closeModal}
                  className="bg-white border rounded-4xl border-gray-300 text-gray-700 px-6 py-2 hover:bg-gray-200 transition"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
