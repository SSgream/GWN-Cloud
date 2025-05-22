import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://gwn-bucket.s3.us-east-1.amazonaws.com/images/backgorund.png" // ganti path sesuai lokasi gambar kamu
          alt="Background"
          fill
          className="object-cover opacity-30"
          unoptimized
        />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col md:grid md:grid-cols-2 px-4 py-8 md:p-20">
        {/* Judul TK */}
        <div className="order-1 pt-[10rem] md:order-none text-center md:text-left md:pl-[8rem] md:pt-[15rem]">
          <h1 className="text-xl font-bold text-gray-900 md:text-5xl font-fredoka">
            Taman Kanak - Kanak <br /> Azizah 2
          </h1>
        </div>

        {/* Logo */}
        <div className="order-2 md:order-none flex justify-center pt-10 md:pt-0">
          <div className="relative w-36 h-36 md:w-80 md:h-80">
            <Image
              src="https://gwn-bucket.s3.us-east-1.amazonaws.com/images/logoo.png"
              alt="Child"
              fill
              className="rounded-[30%] object-cover"
            />
          </div>
        </div>

        {/* Paragraf + Tombol */}
        <div className="order-3 md:order-none text-center md:text-left md:pl-[8rem] md:pt-3 space-y-6">
          <p className="pt-5 md:pt-10 font-medium text-black underline text-sm md:text-md">
            Pendaftaran dibuka 20–24 April
          </p>
          <Link href="/pendaftaran">
            <button className="py-4 text-sm md:text-lg text-white bg-orange-400 rounded-full hover:bg-orange-600 px-14">
              Daftar
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}
