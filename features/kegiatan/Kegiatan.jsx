'use client';

import Image from 'next/image';

const kegiatanData = [
  {
    id: 1,
    title: 'Hari Jadi Kab. Bulukumba Tahun 2025',
    image: '/images/hari_jadi_bulukum.jpg',
    author: 'Mega',
  },
  {
    id: 2,
    title: 'Pemberian Makanan Tambahan',
    image: '/images/pemberian_makan_tambahan.jpg',
    author: 'Jum',
  },
  {
    id: 3,
    title: 'Penerimaan Rapor Tahun Ajaran 2024/2025',
    image: '/images/penerimaan_rapor.jpg',
    author: 'Wana',
  },
];

export default function KegiatanPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-44 pb-16 px-6 md:px-16">
      <h1 className="text-center text-3xl font-bold mb-10">Kegiatan TK Azizah 2</h1>

      <div className="flex justify-end mb-6">
        <button className="bg-gray-300 text-white px-4 py-2 rounded-lg text-sm">Filter By</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {kegiatanData.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="relative w-full h-75">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <div className="p-4 space-y-2">
              <p className="text-sm text-gray-500 flex items-center">
                <span className="mr-2">👤</span>by {item.author}
              </p>
              <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="bg-orange-300 hover:bg-orange-400 text-white font-bold py-3 px-6 rounded-full transition duration-300">
          View more
        </button>
      </div>
    </main>
  );
}
