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
    image: "https://gwn-bucket.s3.us-east-1.amazonaws.com/images/intrakulikuler.jpg",
  },
  {
    title: "Ekstrakurikuler",
    description: `Ekstrakurikuler di TK AZIZAH 2 dirancang berdasarkan asesmen tahunan untuk menyesuaikan dengan minat, bakat, dan kebutuhan peserta didik. Kegiatan ini menjadi wadah bagi anak untuk berekspresi dan berkembang.`,
    subpoints: [
      "Menari: Membekali peserta didik dengan kreatifitas, mengolah rasa, menjaga warisan leluhur, dan bergotong royong.",
      "Bahasa Inggris: Membekali peserta didik agar bisa berbahasa Inggris tingkat dasar (kata benda, angka, dan anggota badan).",
    ],
    image: "https://gwn-bucket.s3.us-east-1.amazonaws.com/images/intrakulikuler.jpg",
  },
  {
    title: "Proyek Penguatan Profil Pelajar Pancasila",
    description: `Proyek ini merupakan kegiatan kokurikuler yang terjadwal tanpa mengurangi pembelajaran reguler. TK Azizah 2 menjalankan 4 proyek per tahun, dengan fokus penguatan nilai gotong royong, kepedulian, dan kreativitas.`,
    subpoints: [
      "Semester 1: “Aku Cinta Indonesia” dan “Imajinasiku”",
      "Semester 2: “Aku Sayang Bumi” dan “Kita Semua Bersaudara”",
    ],
    image: "https://gwn-bucket.s3.us-east-1.amazonaws.com/images/intrakulikuler.jpg",
  },
];

export default function ProgramPage() {
  const [index, setIndex] = useState(0);
  const totalPages = programData.length;
  const program = programData[index];

  const handleNext = () => {
    if (index < totalPages - 1) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6 md:px-20 py-10">
      <div className="rounded-xl p-6 pt-40 grid lg:grid-cols-2 gap-10 items-center w-full max-w-6xl">
        {/* Gambar */}
        <div className="relative w-full h-[250px] md:h-[350px]">
          <div className="absolute inset-0 rounded-[60px_0_60px_0] overflow-hidden border-[10px] border-orange-300">
            <Image
              src={program.image}
              alt={program.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* Konten teks */}
        <div className="flex flex-col text-[#222] h-full">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 flex-shrink-0">
            {program.title}
          </h2>
          <div className="space-y-4 overflow-y-auto">
            <p className="text-gray-700 leading-relaxed">{program.description}</p>
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

      {/* Navigasi seperti permintaan */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className="text-2xl w-10 h-10 rounded-full bg-orange-400 text-white font-bold disabled:opacity-50"
        >
          &lt;
        </button>

        <span className="text-lg font-semibold text-gray-700">
          {index + 1} / {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={index === totalPages - 1}
          className="text-2xl w-10 h-10 rounded-full bg-orange-400 text-white font-bold disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    </main>
  );
}
