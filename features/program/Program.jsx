'use client';

import Image from 'next/image';
import { useState } from 'react';

const programData = [
  {
    title: 'Intrakurikuler',
    description: `Pembelajaran intrakurikuler di PAUD dirancang untuk mencapai Capaian Pembelajaran (CP) fase fondasi dengan pendekatan bermain bermakna sebagai wujud "Merdeka Belajar, Merdeka Bermain". Kegiatan harus menyenangkan, bermakna, dan didukung oleh sumber belajar dari lingkungan sekitar atau teknologi.`,
    subpoints: [
      'Muatan Lokal: Pembelajaran berbasis budaya lokal untuk menjaga identitas sejak dini, seperti kunjungan studi ke pembuatan perahu Phinisi dan Pesanggrahan Tanete.',
    ],
    image: '/images/intrakulikuler.jpg',
  },
  {
    title: 'Ekstrakurikuler',
    description: `Program yang dirancang untuk mengembangkan minat dan bakat anak di luar kegiatan pembelajaran inti.`,
    subpoints: ['Senam Ceria, Lomba Mewarnai, Tari Tradisional, dll.'],
    image: '/images/ekstrakurikuler.jpg',
  },
];

export default function ProgramPage() {
  const [index, setIndex] = useState(0);
  const program = programData[index];

  const next = () => setIndex((prev) => (prev + 1) % programData.length);
  const prev = () => setIndex((prev - 1 + programData.length) % programData.length);

  return (
    <main className="min-h-screen pt-28 pb-16 px-6 md:px-20 bg-[#f8f8f8]">
      <div className="flex justify-between items-center mb-6">
        <button onClick={prev} className="text-2xl text-green-500 px-4 py-2 rounded hover:bg-green-100">
          ←
        </button>
        <button onClick={next} className="text-2xl text-green-500 px-4 py-2 rounded hover:bg-green-100">
          →
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-center bg-white p-6 rounded-xl shadow-md">
        {/* Gambar */}
        <div className="relative w-full h-[350px] rounded-xl overflow-hidden">
          <Image
            src={program.image}
            alt={program.title}
            fill
            objectFit="cover"
            className="rounded-xl"
          />
        </div>

        {/* Deskripsi */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#222] mb-4">{program.title}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">{program.description}</p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            {program.subpoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
