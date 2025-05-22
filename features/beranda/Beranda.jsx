import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://gwn-bucket.s3.us-east-1.amazonaws.com/images/backgorund.png"
          alt="Background"
          fill
          className="object-cover opacity-30"
          unoptimized
        />
      </div>

      {/* Hero Section */}
      <section className="p-10 md:p-20 pt-55">
        {/* Mobile Layout - Vertikal */}
        <div className="flex flex-col items-center space-y-6 md:hidden">
          {/* Logo di mobile */}
          <div className="relative w-64 h-64">
            <Image
              src="https://gwn-bucket.s3.us-east-1.amazonaws.com/images/logoo.png"
              alt="Logo TK Azizah 2"
              fill
              className="rounded-[30%] object-cover"
            />
          </div>
          
          {/* Text Content di mobile */}
          <div className="text-center space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 font-fredoka">
              Taman Kanak - Kanak <br /> Azizah 2
            </h1>
            <p className="font-medium text-black underline text-md">
              Pendaftaran dibuka 20–24 April
            </p>
            <Link href="/pendaftaran">
              <button className="py-4 text-white bg-orange-400 rounded-full hover:bg-orange-600 px-14">
                Daftar
              </button>
            </Link>
          </div>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden md:grid md:grid-cols-2 md:items-center">
          <div className="space-y-6 pl-30 pt-65">
            <h1 className="text-3xl font-bold text-gray-900 md:text-5xl font-fredoka">
              Taman Kanak - Kanak <br /> Azizah 2
            </h1>
            <p className="pt-10 font-medium text-black underline text-md">
              Pendaftaran dibuka 20–24 April
            </p>
            <Link href="/pendaftaran">
              <button className="py-4 text-white bg-orange-400 rounded-full hover:bg-orange-600 px-14">
                Daftar
              </button>
            </Link>
          </div>
          <div className="flex justify-center pt-55">
            <div className="relative w-80 h-80">
              <Image
                src="https://gwn-bucket.s3.us-east-1.amazonaws.com/images/logoo.png"
                alt="Logo TK Azizah 2"
                fill
                className="rounded-[30%] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}