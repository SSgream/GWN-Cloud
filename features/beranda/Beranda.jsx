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
      <section className="grid items-center grid-cols-1 p-10 md:grid-cols-2 md:p-20">
        <div className="space-y-6 pl-30 pt-65">
          <h1 className="text-3xl font-bold text-gray-900 md:text-5xl font-fredoka">
            Taman Kanak - Kanak <br /> Azizah 2
          </h1>
          <p className="pt-10 font-medium text-black underline text-md">
            Pendaftaran dibuka 20–24 April
          </p>
          <button className="py-4 text-white bg-orange-400 rounded-full hover:bg-orange-600 px-14">
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
