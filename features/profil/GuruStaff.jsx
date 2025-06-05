"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function GuruStaffPage() {
  const [staffList, setStaffList] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState(null);

  useEffect(() => {
    async function fetchGuru() {
      try {
        const res = await fetch("/api/guru");
        if (!res.ok) throw new Error("Gagal fetch data guru");
        const data = await res.json();
        setStaffList(data);
      } catch (error) {
        console.error("Error fetch guru:", error);
      }
    }

    fetchGuru();
  }, []);

  const openModal = (staff) => setSelectedStaff(staff);
  const closeModal = () => setSelectedStaff(null);

  return (
    <div className="relative min-h-screen mx-auto px-4 pt-44 py-12 bg-white">
      <h1 className="text-3xl font-bold text-center mb-4">Guru dan Staf</h1>
      <div className="h-1 w-24 mx-auto bg-orange-400 rounded mb-2"></div>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        Kami memiliki tim pendidik dan staf yang berdedikasi, profesional, dan
        berpengalaman dalam mendampingi tumbuh kembang anak. Dengan pendekatan
        yang hangat dan penuh kasih sayang, mereka siap menciptakan lingkungan
        belajar yang menyenangkan, aman, dan inspiratif.
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
                src={staff.foto || "/images/nofoto.png"}
                alt={staff.nama}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="bg-gradient-to-r from-lime-300 to-lime-100 px-4 py-8 rounded-b-2xl ">
              <h3 className="font-bold text-center text-md text-black">
                {staff.nama}
              </h3>
              <p className="text-sm text-center text-gray-700">
                {staff.jabatan}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedStaff && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gradient-to-r from-lime-300 to-lime-100 w-[700px] max-w-full rounded-xl shadow-xl border border-gray-200 overflow-hidden flex flex-col md:flex-row min-h-[400px]">
            <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-4">
              <Image
                src={selectedStaff.foto || "/images/nofoto.png"}
                alt={selectedStaff.nama}
                width={300}
                height={300}
                className="object-cover rounded-md w-full h-[300px]"
                unoptimized
              />
            </div>

            <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-2 text-md">
              <div className="space-y-4">
                <h2 className="text-xl text-center font-bold mb-4">
                  {selectedStaff.nama}
                </h2>
                <p>
                  <strong>Jabatan:</strong> {selectedStaff.jabatan}
                </p>
                <p>
                  <strong>NIP:</strong> {selectedStaff.nip}
                </p>
                <p>
                  <strong>Tempat Lahir:</strong> {selectedStaff.tempat_lahir}
                </p>
                <p>
                  <strong>Tanggal Lahir:</strong> {selectedStaff.tanggal_lahir}
                </p>
                <p>
                  <strong>Jenis Kelamin:</strong> {selectedStaff.jenis_kelamin}
                </p>
              </div>
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
        </div>
      )}
    </div>
  );
}
