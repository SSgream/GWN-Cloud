"use client";
import { useState } from "react";

export default function VisiMisi() {
  const [showModal, setShowModal] = useState(false);

  // Konten lengkap Visi dan Misi
  const visiText =
    "TERWUJUDNYA PESERTA DIDIK YANG MENGEDEPANKAN KARAKTER PROFIL PELAJAR PANCASILA";

  const misiText = `1. Mengintegrasikan nilai-nilai luhur pancasila dalam setiap aspek pembelajaran dan kegiatan di satuan pendidikan.
2. Mendorong Peserta Didik untuk mengembangkan karakter dan kompetensi yang mencerminkan Profil Pelajar Pancasila Melalui budaya satuan pendidikan, pembelajaran intrakurikuler, projek penguatan profil pelajar pancasila, dan Ekstrakurikuler.
3. Menciptakan lingkungan belajar yang mendukung pengembangan karakter beriman, bertaqarwa kepada tuhan YME, berakhlak mulia, berkebinekaan global, dan bernalar kritis.
4. Melibatkan Peserta didik dalam kegiatan yang memungkinkan mereka mengalami dan memahami kehidupan masyarakat secara langsung, sehingga mereka tidak hanya memiliki pengetahuan tetapi juga pengalaman nyata.
5. Mengevaluasi secara kritis lingkungan belajar disatuan pendidikan dan membuat perubahan yang diperlukan agar memungkinkan semua peserta didik dan pendidik untuk bekerja mengembangkan nilai-nilai profil pelajar pancasila pada peserta didik.`;

  return (
    <section className="w-full min-h-screen py-16 bg-white pt-46 relative px-4 md:px-20">
      <h2 className="mb-10 md:mb-12 text-3xl font-bold text-center text-black md:text-4xl">
        Visi Misi
      </h2>

      <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
        {/* Kartu Visi */}
        <div className="bg-gradient-to-br from-[#80C904] via-[#80C904] to-[#3F6302] text-white rounded-2xl p-6 md:p-8 w-full max-w-sm md:w-[350px] h-auto md:h-[400px] flex flex-col justify-between text-center shadow-lg">
          <div>
            <h3 className="mb-6 md:mb-8 text-xl md:text-2xl font-bold">Visi</h3>
            <p className="text-base md:text-xl leading-relaxed">{visiText}</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="px-5 py-2 mt-6 transition border border-white rounded-full hover:bg-white hover:text-green-700"
          >
            Lihat Detail
          </button>
        </div>

        {/* Kartu Misi */}
        <div className="bg-gradient-to-br from-[#80C904] via-[#80C904] to-[#3F6302] text-white rounded-2xl p-6 md:p-8 w-full max-w-sm md:w-[350px] h-auto md:h-[400px] flex flex-col justify-between text-center shadow-lg">
          <div>
            <h3 className="mb-6 md:mb-8 text-xl md:text-2xl font-bold">Misi</h3>
            <p className="text-base md:text-xl leading-relaxed">
              1. Mengintegrasikan nilai-nilai luhur pancasila dalam setiap aspek pembelajaran...
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="px-5 py-2 mt-6 transition border border-white rounded-full hover:bg-white hover:text-green-700"
          >
            Lihat Detail
          </button>
        </div>
      </div>

      {/* Modal yang menampilkan Visi dan Misi lengkap */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-opacity-50">
          <div className="bg-gradient-to-br from-[#80C904] via-[#80C904] to-[#3F6302] text-white rounded-2xl shadow-2xl w-full max-w-3xl p-6 md:p-10 text-center overflow-auto max-h-[90vh]">
            <h3 className="text-2xl font-bold mb-6">Visi</h3>
            <p className="whitespace-pre-line text-justify text-lg leading-relaxed mb-8">{visiText}</p>

            <h3 className="text-2xl font-bold mb-6">Misi</h3>
            <p className="whitespace-pre-line text-justify text-lg leading-relaxed">{misiText}</p>

            <div className="mt-8">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-green-700 transition"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
