import Image from "next/image";
import Link from "next/link";

export default function Beranda() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <header className="relative w-full h-[500px] bg-black">
        <Image
          src="/images/banner.png"
          layout="fill"
          objectFit="cover"
          alt="Taman Kanak-Kanak Azizah 2"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">Taman Kanak-Kanak Azizah 2</h1>
          <Link href="#" className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md">Read More</Link>
        </div>
      </header>

      {/* Sambutan Kepala Sekolah */}
      <section className="container mx-auto my-12 px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image src="/kepala-sekolah.jpg" width={500} height={300} alt="Kepala Sekolah" />
          </div>
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl font-bold">Sambutan Kepala Sekolah</h2>
            <p className="text-gray-700 mt-4">Puji dan syukur mari kita panjatkan ...</p>
            <Link href="#" className="mt-4 inline-block text-blue-500">Lebih Lanjut</Link>
          </div>
        </div>
      </section>

      {/* Profil Sekolah */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center">Profil Sekolah</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {['Fasilitas', 'Lokasi', 'Visi Misi', 'Prestasi'].map((item, index) => (
              <div key={index} className="p-6 border rounded-lg shadow-sm text-center">
                <h3 className="font-bold text-lg">{item}</h3>
                <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Berita dan Agenda */}
      <section className="container mx-auto my-12 px-6">
        <h2 className="text-2xl font-bold">Berita dan Agenda</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {Array(4).fill(0).map((_, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <Image src="/news.jpg" width={400} height={200} alt="Berita" className="rounded-md" />
              <h3 className="font-bold mt-2">Berita {index + 1}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
              <Link href="#" className="text-blue-500 mt-2 inline-block">Baca Selengkapnya</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}