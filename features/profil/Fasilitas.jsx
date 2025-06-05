"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function FasilitasPage() {
  const fasilitas = [
    {
      ruangan: "Kantor",
      deskripsi:
        "Ruang kantor digunakan sebagai pusat administrasi dan tempat komunikasi antara guru dan orang tua. Dilengkapi meja kerja, lemari arsip, dan fasilitas pendukung lainnya.",
      image_url:
        "https://gwn-bucket.s3.us-east-1.amazonaws.com/images/Kantor.png",
      bgColor: "bg-gradient-to-tr from-teal-100 to-teal-300",
    },
    {
      ruangan: "Kelas A",
      deskripsi:
        "Kelas A merupakan ruang belajar untuk kelompok usia tertentu. Dilengkapi untuk mendukung kegiatan pembelajaran interaktif.",
      image_url:
        "https://gwn-bucket.s3.us-east-1.amazonaws.com/images/Kelas_A.png",
      bgColor: "bg-gradient-to-tr from-orange-100 to-orange-300",
    },
    {
      ruangan: "Kelas B",
      deskripsi:
        "Kelas B juga dirancang untuk kegiatan belajar anak-anak dengan suasana yang menyenangkan. Tersedia berbagai alat permainan edukatif dan dekorasi yang merangsang kreativitas anak.",
      image_url:
        "https://gwn-bucket.s3.us-east-1.amazonaws.com/images/Kelas_B.png",
      bgColor: "bg-gradient-to-tr from-pink-100 to-pink-300",
    },
    {
      ruangan: "Dapur",
      deskripsi:
        "Dapur digunakan untuk menyiapkan makanan dan minuman bagi anak-anak. Kebersihan dan keamanan selalu dijaga, serta dilengkapi peralatan masak standar TK.",
      image_url:
        "https://gwn-bucket.s3.us-east-1.amazonaws.com/images/Dapur+%26+Gudang.jpg",
      bgColor: "bg-gradient-to-tr from-teal-100 to-teal-300",
    },
    {
      ruangan: "WC",
      deskripsi:
        "Toilet anak dirancang dengan ukuran dan fasilitas yang ramah anak. Kebersihan dan kenyamanan menjadi prioritas utama untuk mendukung kebiasaan hidup sehat sejak dini.",
      image_url: "https://gwn-bucket.s3.us-east-1.amazonaws.com/images/WC.png",
      bgColor: "bg-gradient-to-tr from-orange-100 to-orange-300",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleFasilitas = fasilitas.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < fasilitas.length) {
      setStartIndex(startIndex + 3);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 3);
    }
  };

  return (
    <div className="pt-44 pb-16 px-6 md:px-20 lg:px-28 bg-white min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-4 tracking-wide">
        Fasilitas
      </h2>
      <div className="h-1 w-24 mx-auto bg-orange-400 rounded mb-2"></div>

      <AnimatePresence mode="wait">
        <motion.div
          key={startIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.2 }}
          className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {visibleFasilitas.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} shadow-lg rounded-xl overflow-hidden flex flex-col items-center text-center p-6 transition-transform duration-300 hover:scale-[1.05] hover:shadow-2xl`}
            >
              <div className="w-full h-64 relative mb-5 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={item.image_url}
                  alt={item.ruangan}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {item.ruangan}
              </h3>
              <p className="text-md text-gray-700 max-w-xs">{item.deskripsi}</p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`text-2xl w-10 h-10 rounded-full bg-orange-400 text-white font-bold disabled:opacity-50`}
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex + 3 >= fasilitas.length}
          className={`text-2xl w-10 h-10 rounded-full bg-orange-400 text-white font-bold disabled:opacity-50`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
