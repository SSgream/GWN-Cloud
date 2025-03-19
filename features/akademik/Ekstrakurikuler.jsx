import React from "react";
import Image from "next/image";

const Ekstrakurikuler = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="relative w-full h-[500px] bg-black">
        <Image
          src="/images/banner.png"
          layout="fill"
          objectFit="cover"
          alt="Taman Kanak-Kanak Azizah 2"
          className="opacity-50"
        />
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-3xl font-bold">Ekstrakulikuler</h1>
        </div>
      </header>

      {/* Ekstrakurikuler */}
      <section className="p-8 mx-4 md:mx-16 mt-8">
        <h2 className="text-xl font-semibold text-center mb-4">
          Ekstra Kulikuler
        </h2>
        <div className="my-12">
          <div className="bg-white shadow-md rounded-lg overflow-hidden my-12">
            <img
              src="/menari.jpg"
              alt="Menari"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Menari</h3>
              <p className="text-gray-700 text-sm">
                Membekali peserta didik untuk memiliki kreativitas dan menjaga
                budaya.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/bahasa-inggris.jpg"
              alt="Bahasa Inggris"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Bahasa Inggris</h3>
              <p className="text-gray-700 text-sm">
                Membantu peserta didik agar bisa berbahasa Inggris tingkat
                dasar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ekstrakurikuler;
