"use client";

import Image from "next/image";

export default function FasilitasPage() {
  const fasilitas = [
    {
      ruangan: "Kantor",
      deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image_url: "https://gwn-bucket.s3.us-east-1.amazonaws.com/images/Kantor.png",
      bgColor: "bg-gradient-to-tr from-teal-100 to-teal-300",
    },
    {
      ruangan: "Kelas A",
      deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image_url: "https://gwn-bucket.s3.us-east-1.amazonaws.com/images/Kelas_A.png",
      bgColor: "bg-gradient-to-tr from-orange-100 to-orange-300",
    },
    {
      ruangan: "Kelas B",
      deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image_url: "https://gwn-bucket.s3.us-east-1.amazonaws.com/images/Kelas_B.png",
      bgColor: "bg-gradient-to-tr from-pink-100 to-pink-300",
    },
  ];

  return (
    <div className="pt-44 pb-16 px-6 md:px-20 lg:px-28 bg-white min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-6 tracking-wide">
        Fasilitas
      </h2>
      <div className="h-1 w-24 mx-auto bg-orange-400 rounded mb-12"></div>

      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {fasilitas.map((item, index) => (
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
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.ruangan}</h3>
            <p className="text-md text-gray-700 max-w-xs">{item.deskripsi}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
