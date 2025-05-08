"use client";

import { useState } from "react";
import Image from "next/image";

export default function GuruStaffPage() {
  const staffList = [
    {
      name: "Rahmi Annisa, S.Pd., Gr",
      role: "Kepala Sekolah",
      nip: "1234567890",
      tempatLahir: "Makassar",
      tanggalLahir: "10 Januari 1980",
      jenisKelamin: "Perempuan",
      image: "/images/guru2.png",
    },
    {
      name: "A. Jumriana, S.Pd",
      role: "Guru TK A",
      nip: "1234567891",
      tempatLahir: "Gowa",
      tanggalLahir: "15 Maret 1985",
      jenisKelamin: "Perempuan",
      image: "/images/guru3.png",
    },
    {
      name: "Ihwana, S.Pd.I",
      role: "Guru TK B",
      nip: "1234567892",
      tempatLahir: "Parepare",
      tanggalLahir: "20 Juni 1988",
      jenisKelamin: "Perempuan",
      image: "/images/guru2.png",
    },
    {
      name: "Megawati, S.Pd.I",
      role: "Guru PAI",
      nip: "1234567893",
      tempatLahir: "Bone",
      tanggalLahir: "1 Desember 1983",
      jenisKelamin: "Perempuan",
      image: "/images/guru3.png",
    },
  ];

  const [selectedStaff, setSelectedStaff] = useState(null);

  const openModal = (staff) => setSelectedStaff(staff);
  const closeModal = () => setSelectedStaff(null);

  return (
    <div className="relative min-h-screen mx-auto px-4 pt-44 py-12">
      <h1 className="text-3xl font-bold text-center mb-4">Guru dan Staff</h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        Lorem ipsum dolor sit amet consectetur. Senectus tellus eget nunc
        posuere quis at vitae consequat. At nulla erat nisi nunc. Sit risus
        sagittis pellentesque eget convallis commodo.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10">
        {staffList.map((staff, index) => (
          <div
            key={index}
            onClick={() => openModal(staff)}
            className="rounded-2xl overflow-hidden bg-white shadow-md cursor-pointer hover:scale-105 transition"
          >
            <div className="bg-gray-100 h-80 flex items-center justify-center">
              <img
                src={staff.image}
                alt={staff.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="bg-gradient-to-r from-lime-300 to-lime-100 px-4 py-8 rounded-b-2xl ">
              <h3 className="font-bold text-center text-md text-black">
                {staff.name}
              </h3>
              <p className="text-sm text-center text-gray-700">{staff.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedStaff && (
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-gradient-to-r from-lime-300 to-lime-100 w-[700px] max-w-full rounded-xl shadow-xl border border-gray-200 overflow-hidden flex flex-col md:flex-row min-h-[400px]">
          {/* Gambar */}
          <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-4">
            <Image
              src={selectedStaff.image}
              alt={selectedStaff.name}
              width={300}
              height={300}
              className="object-cover rounded-md w-full h-[300px]"
              unoptimized
            />
          </div>

          {/* Data */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between w-full space-y-2 text-md">
            <div className="mt-6 space-y-4">
              <h2 className="text-xl text-center font-bold mb-4">
                {selectedStaff.name}
              </h2>
              <p className="pt-2">
                <strong>Jabatan:</strong> {selectedStaff.role}
              </p>
              <p>
                <strong>NIP:</strong> {selectedStaff.nip}
              </p>
              <p>
                <strong>Tempat Lahir:</strong> {selectedStaff.tempatLahir}
              </p>
              <p>
                <strong>Tanggal Lahir:</strong> {selectedStaff.tanggalLahir}
              </p>
              <p>
                <strong>Jenis Kelamin:</strong> {selectedStaff.jenisKelamin}
              </p>
            </div>

            {/* Tombol Tutup */}
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
      )}
    </div>
  );
}
