'use client'

import Image from "next/image";
import { useState } from "react";

const teachers = [
  {
    name: "RAHMI ANNISA, S.Pd., Gr",
    nip: "-",
    position: "Kepala Sekolah",
    image: "/images/teacher1.jpg",
  },
  {
    name: "IWANA, S.Pd",
    nip: "-",
    position: "Guru TK B",
    image: "/images/teacher2.jpg",
  },
  {
    name: "A. JUMRANA, S.Pd",
    nip: "-",
    position: "Guru TK A",
    image: "/images/teacher3.jpg",
  },
  {
    name: "MEGAWATI, S.Pd",
    nip: "-",
    position: "Guru PAI",
    image: "/images/teacher4.jpg",
  },
  {
    name: "NUR ILMI, S.Pd",
    nip: "-",
    position: "Pendamping TK A",
    image: "/images/teacher5.jpg",
  },
];

export default function DataGuru() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="relative w-full h-[400px] bg-black">
        <img
          src="/images/banner.png"
          alt="Data Guru"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
          Data Guru
        </div>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto mt-8 px-4 flex justify-end">
  <input
    type="text"
    placeholder="🔍 Search Teacher"
    className="w-64 p-3 border rounded-lg shadow-sm focus:outline-none"
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>


      {/* Data Guru */}
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
          {filteredTeachers.map((teacher, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={teacher.image}
                alt={teacher.name}
                width={300}
                height={350}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">Nama : {teacher.name}</h3>
                <p className="text-gray-600 text-sm">NIP   : {teacher.nip}</p>
                <p className="text-gray-600 font-semibold">Jabatan : {teacher.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
