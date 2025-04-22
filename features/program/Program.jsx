"use client";

import Image from "next/image";
import { useState } from "react";

const programData = [
  {
    title: "Intrakurikuler",
    description: `Pembelajaran intrakurikuler di PAUD dirancang untuk mencapai Capaian Pembelajaran (CP) fase fondasi dengan pendekatan bermain bermakna sebagai wujud "Merdeka Belajar, Merdeka Bermain". Kegiatan harus menyenangkan, bermakna, dan didukung oleh sumber belajar dari lingkungan sekitar atau teknologi.`,
    subpoints: [
      "Muatan Lokal: Pembelajaran berbasis budaya lokal untuk menjaga identitas sejak dini, seperti kunjungan studi ke pembuatan perahu Phinisi dan Pesanggrahan Tanete.",
    ],
    image: "/images/intrakulikuler.jpg",
  },
  {
    title: "Ekstrakurikuler",
    description: `Ekstrakurikuler di TK AZIZAH 2 dirancang berdasarkan asesmen tahunan untuk menyesuaikan dengan minat, bakat, dan kebutuhan peserta didik. Kegiatan ini menjadi wadah bagi anak untuk berekspresi dan berkembang. Berikut beberapa program ekstrakurikuler yang tersedia:`,
    subpoints: [
      "Menari Membekali peserta didik untuk memiliki kreatifitas,mengolah rasa dalam sebuah gerakan yang indah, menjaga Warisan leluhur,bergotong royong  menghasilkan Gerakan yang seirama",
      "Bahasa Inggris Membekali peserta didik agar bisa berbahasa inggris tingkat dasar (kata benda,angka,dan anggota badan)",
    ],
    image: "/images/intrakulikuler.jpg",
  },
  {
    title: "Proyek Penguatan Profil Pelajar Pancasila",
    description: `Proyek ini merupakan kegiatan kokurikuler yang terjadwal tanpa mengurangi pembelajaran reguler. TK Azizah 2 menjalankan 4 proyek per tahun, dengan fokus penguatan nilai gotong royong, kepedulian, dan kreativitas.`,
    subpoints: [
      "Semester 1 “Aku Cinta Indonesia” dan “Imajinasiku”",
      "Semester 2 “Aku Sayang Bumi” dan “Kita Semua Bersaudara”",
    ],
    image: "/images/intrakulikuler.jpg",
  },
];

export default function ProgramPage() {
  const [index, setIndex] = useState(0);
  const program = programData[index];

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % programData.length);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6 md:px-20 py-10">
      <div className="rounded-xl p-6 pt-40 grid lg:grid-cols-2 gap-10 items-center w-full max-w-6xl">
        {/* Gambar */}
        <div className="relative w-full h-[350px]">
          <div className="absolute inset-0 rounded-[60px_0_60px_0] overflow-hidden border-[10px] border-orange-300">
            <Image
              src={program.image}
              alt={program.title}
              fill
              objectFit="cover"
              className="object-cover"
            />
          </div>
        </div>

        {/* Konten teks */}
        <div className="flex flex-col text-[#222] h-full">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 flex-shrink-0">
            {program.title}
          </h2>
          <div className="space-y-4 overflow-y-auto">
            <p className="text-gray-700 leading-relaxed">
              {program.description}
            </p>
            <ul className="list-none space-y-2">
              {program.subpoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">❯</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Tombol next */}
      <div className="mt-8 w-full max-w-6xl flex justify-end">
        <button
          onClick={handleNext}
          className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-16 py-4 rounded-full transition"
        >
          Next
        </button>
      </div>
    </main>
  );
}
