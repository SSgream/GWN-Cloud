"use client";
import { useState } from "react";

export default function VisiMisi() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const handleOpenModal = (title, content) => {
    setModalContent({ title, content });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent({ title: "", content: "" });
  };

  return (
    <section className="w-full min-h-screen py-16 bg-white pt-46 relative">
      <h2 className="mb-12 text-3xl font-bold text-center text-black md:text-4xl">
        Visi Misi
      </h2>

      <div className="flex flex-col items-center justify-center md:flex-row gap-10">
        {/* Kartu Visi */}
        <div className="bg-gradient-to-br from-[#80C904] via-[#80C904] to-[#3F6302] text-white rounded-2xl p-8 w-[300px] md:w-[350px] h-[400px] flex flex-col justify-between text-center shadow-lg">
          <div>
            <h3 className="mb-8 text-2xl font-bold">Visi</h3>
            <p className="text-xl leading-relaxed">
              TERWUJUDNYA PESERTA DIDIK YANG MENGEDEPANKAN KARAKTER PROFIL
              PELAJAR PANCASILA
            </p>
          </div>
          <button
            onClick={() =>
              handleOpenModal(
                "Visi",
                "TERWUJUDNYA PESERTA DIDIK YANG MENGEDEPANKAN KARAKTER PROFIL  PELAJAR PANCASILA"
              )
            }
            className="px-5 py-2 mt-6 transition border border-white rounded-full hover:bg-white hover:text-green-700"
          >
            Lihat Detail
          </button>
        </div>

        {/* Kartu Misi */}
        <div className="bg-gradient-to-br from-[#80C904] via-[#80C904] to-[#3F6302] text-white rounded-2xl p-8 w-[300px] md:w-[350px] h-[400px] flex flex-col justify-between text-center shadow-lg">
          <div>
            <h3 className="mb-8 text-2xl font-bold">Misi</h3>
            <p className="text-xl leading-relaxed">
              1. Mengintegrasikan nilai-nilai luhur pancasila dalam setiap aspek
              pembelajaran...
            </p>
          </div>
          <button
            onClick={() =>
              handleOpenModal(
                "Misi",
                `1.	Mengintegrasikan nilai-nilai luhur pancasila dalam setiap aspek pembelajaran dan kegiatan di satuan pendidikan.
2.	Mendorong Peserta Didik untuk mengembangkan karakter dan kompetensi yang mencerminkan Profil Pelajar Pancasila Melalui  budaya satuan pendidikan ,pembelajaran intrakurikuler,projek penguatan profil pelajar pancasila,dan Ekstrakurikuler.
3.	Menciptakan lingkungan belajar yang mendukung pengembangan karakter beriman,bertaqwa kepada tuhan YME,berakhlak mulia,berkebinekaan  global,dan bernalar kritis
4.	Melibatkan Peserta didik dalam kegiatan yang memungkinkan mereka mengalami dan memahami kehidupan masyarakat secara langsug, sehingga mereka tidak hanya memiliki pengetahuan tetapi juga pengalaman nyata.
5.	Mengevaluasi secara kritis lingkungan belajar disatuan pendidikan dan membuat perubahan yang diperlukan agar memungkinkan semua peserta didik dan pendidik untuk bekerja mengembangkan nilai-nilai profil pelajar pancasila pada peserta didik.`
              )
            }
            className="px-5 py-2 mt-6 transition border border-white rounded-full hover:bg-white hover:text-green-700"
          >
            Lihat Detail
          </button>
        </div>
      </div>

      {/* Modal - card style */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
         <div className="bg-gradient-to-br from-[#80C904] via-[#80C904] to-[#3F6302] text-white rounded-2xl shadow-2xl w-[90%] max-w-3xl p-10 text-center">
            <h3 className="text-2xl font-bold mb-6">{modalContent.title}</h3>
            <p className="whitespace-pre-line text-justify text-lg leading-relaxed">
              {modalContent.content}
            </p>
            <div className="mt-8">
              <button
                onClick={handleCloseModal}
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
