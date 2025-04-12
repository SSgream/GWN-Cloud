import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/ayy.jpg" // ganti path sesuai lokasi gambar kamu
          alt="Background"
          fill
          className="object-cover opacity-30" // atur opacity agar konten tetap terbaca
        />
      </div>

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center p-10 md:p-20">
        <div className="space-y-6 pl-30 pt-36">
          <h1 className="text-3xl md:text-5xl font-fredoka font-bold text-gray-900">
            Taman Kanak - Kanak <br /> Azizah 2
          </h1>
          <p className="text-md pt-10 underline text-black font-medium">
            Pendaftaran dibuka 20–24 April
          </p>
          <button className="bg-orange-400 hover:bg-orange-600 text-white px-14 py-4 rounded-full">
            Daftar
          </button>
        </div>
        <div className="flex justify-center mt-10 pt-36 md:mt-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/images/logoo.png"
              alt="Child"
              fill
              className="rounded-[30%] object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
